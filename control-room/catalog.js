/* Industry Reset — shared service catalog, pricing and scope helpers.
   Used by the Control Room (/control-room) and the client scope page (/scope). */
(function(){
const BASE = 875; // per standard unit, per visit (quarterly program price)

// Space types: m = price multiplier vs. a standard shelter/BRM, set = which task list applies
const TYPES = [
 {k:'sh',  name:'Field operator shelters (in-unit BRMs)', short:'Field shelters', m:1, set:'space', focus:1},
 {k:'ctl', name:'Control rooms',                 short:'Control',  m:2,   set:'space'},
 {k:'brk', name:'Break / lunch / locker BRMs',   short:'Break',    m:1,   set:'space'},
 {k:'gate',name:'Gate houses & guard booths',    short:'Gate',     m:0.5, set:'space'},
 {k:'trl', name:'Office / crew trailers',        short:'Trailers', m:1,   set:'space'},
 {k:'veh', name:'Vehicles (Fleet Reset)',        short:'Vehicles', m:1,   set:'veh', focus:1},
 // Added after 'veh' so existing estimate mix[] indexes stay valid. Priced at standard until the first timed visit.
 {k:'ssh', name:'Small field shelters (2-room, ~300 sq ft or less)', short:'Small shelters', m:1, set:'space'}
];

// Task list. core = included by default (client may remove). lock = can't be removed.
// p = price per standard unit per visit (multiplied by space type). Core 'space' tasks sum to $875.
const TASKS = [
 {id:'mob',  set:'space', core:1, lock:1, p:125, name:'Mobilization, safety & photo report', d:'Gate check-in, permits, gas-test coordination, FRC/PPE, before/after photo report.'},
 {id:'steam',set:'space', core:1, p:175, name:'Reset Zones — degrease & scrub walls, ceiling & door', d:'The ceiling seams, corners and door that nobody reaches. Dry dust off first, then unscented water-based degreaser, a soft swivel pad on a non-conductive pole, and microfiber — all from the floor. Conduit and fixtures are wiped by hand, never sprayed or steamed.'},
 {id:'dust', set:'space', core:1, p:100, name:'Ceiling line & process dust removal (HEPA)', d:'Top-down removal of catalyst, coke and sulfur dust from the ceiling line, conduit, junction boxes, light fixture tops, ledges and cable trays. Desks and electronics are covered in plastic first; HEPA vacuum before any wiping; ceiling panels done from the floor with pole-mounted microfiber; a fiberglass platform ladder for corner detail — we never stand on desks or furniture. Damp cloth only near fixtures, exit signs and junction boxes.'},
 {id:'floor',set:'space', core:1, p:100, name:'Linoleum-safe floor decon', d:'pH-neutral machine scrub with minimal water lifts tracked-in oil without the high-pH degreasers that crack and yellow linoleum. No steam on floors.'},
 {id:'hvac', set:'space', core:1, p:100, name:'HVAC grilles & returns', d:'Field dust loads these fast — cleaned so the unit stops recirculating it.'},
 {id:'seat', set:'space', core:1, p:175, name:'Faux-leather seating restore', d:'Brush-clean the grain and seams with a pH-neutral vinyl/PU cleaner, disinfect with low-toxicity accelerated hydrogen peroxide, then a water-based protectant. No alcohol, bleach or solvents that crack the coating.'},
 {id:'odor', set:'space', core:1, p:100, name:'Odor removal — hydrocarbon & sulfur', d:'Remove odor sources, then an oxidizing wipe-down of surfaces. Safe while the shelter stays in service.'},
 {id:'blind',set:'space', core:0, p:150, name:'Blind exchange', d:'Every window is tagged and measured; we swap in a clean, size-matched set and take the dirty set for cleaning.'},
 {id:'win',  set:'space', core:0, p:150, name:'Window frames, sills & inside glass', d:'With the blinds down: HEPA the tracks and sills, brush and wipe the frames and rubber gaskets (no abrasives), and clean the inside glass. Best paired with the blind exchange.'},
 {id:'tops', set:'space', core:0, p:40,  name:'Locker, fridge & cabinet tops', d:'The surfaces nobody reaches. Client clears them before the visit, or we stage items in labeled totes and put them back.'},
 {id:'detail',set:'space',core:0, p:50,  name:'Work-surface deep detail', d:'Degrease behind and under desks, consoles, log stations and cable runs.'},
 {id:'ppe',  set:'space', core:0, p:40,  name:'Gear & PPE storage area', d:'Coat hooks, cubbies, respirator / SCBA shelves and FRC hang-up areas.'},
 {id:'mold', set:'space', core:0, p:125, name:'Mold / mildew treatment', d:'Treat visible growth on walls, ceilings and door seals.'},
 {id:'clo2', set:'space', core:0, p:125, name:'Chlorine dioxide odor shock (outage only)', d:'For stubborn sulfur/mercaptan odor. Shelter must be empty and ventilated; scheduled in an approved outage window with site sign-off.'},
 {id:'finish',set:'space',core:0, p:85,  name:'Linoleum finish recoat', d:'Linoleum-approved finish after the scrub to restore color and protect against the next round of oil (where site allows).'},
 {id:'mats', set:'space', core:0, p:40,  name:'Anti-fatigue mat cleaning', d:'Degrease and rinse anti-fatigue mats.'},
 {id:'ceil', set:'space', core:0, p:60,  name:'Ceiling tile stain treatment', d:'Spot-treat stained tiles; flag tiles needing replacement.'},
 {id:'boot', set:'space', core:0, p:50,  name:'Boot-wash station degrease', d:'Boot brushes, grates and the mud zone outside the door.'},
 {id:'ext',  set:'space', core:0, p:95,  name:'Exterior wash — door, steps & landing', d:'Low-pressure wash of the entry, stairs and landing.'},
 {id:'filter',set:'space',core:0, p:35,  name:'HVAC filter change', d:'Swap filters (supplied by site or billed at cost).'},
  {id:'vchk', set:'veh', core:1, lock:1, p:25, name:'Vehicle check-in & photo report', d:'Unit #, mileage, damage photos, before/after report.'},
 {id:'vcomp',set:'veh', core:1, p:60, name:'Patient compartment / cage disinfection', d:'Full disinfection of the rear compartment or prisoner cage.'},
 {id:'vseat',set:'veh', core:1, p:50, name:'Seats & headliner extraction', d:'Extraction and odor removal in seats and headliner.'},
 {id:'vtouch',set:'veh',core:1, p:30, name:'High-touch surfaces', d:'Wheel, controls, radio, MDT, door handles, belts.'},
 {id:'vodor',set:'veh', core:1, p:30, name:'Odor treatment', d:'Enzyme treatment of cabin air and soft surfaces.'},
 {id:'vfloor',set:'veh',core:1, p:30, name:'Floors & mats', d:'Scrub floors, extract or wash mats.'},
 {id:'vbbp', set:'veh', core:0, p:150, name:'Bodily-fluid decontamination', d:'Bloodborne-pathogen-trained cleanup and documentation.'},
 {id:'vext', set:'veh', core:0, p:40, name:'Exterior wash', d:'Hand wash of the vehicle exterior.'}
];
const SUPPLEMENT = 'We supplement your resident cleaning crew — we don\'t replace them. Routine janitorial (trash, restrooms, daily wipe-downs) stays with your crew; we do the deep field-contamination reset they can\'t reach.';
const POSTED = 'We don\'t remove or re-hang posted documents, permits or procedures. We clean around them and focus on the zones nobody else reaches.';
const PLANS = {Quarterly:4,'Twice a year':2,Annual:1,'One-time':1};

const coreSel = () => TASKS.filter(t=>t.core).map(t=>t.id);
// Price of one unit of a given type with the selected tasks
function unitPrice(typeKey, sel){
 const ty = TYPES.find(t=>t.k===typeKey); if(!ty) return 0;
 const s = new Set(sel||coreSel());
 return TASKS.filter(t=>t.set===ty.set && (s.has(t.id)||t.lock)).reduce((a,t)=>a+t.p,0)*ty.m;
}
// counts: {sh:7,...}; returns per-visit total and breakdown
function visitTotal(counts, sel){
 const lines = TYPES.map(t=>({k:t.k,name:t.name,qty:+(counts||{})[t.k]||0,rate:unitPrice(t.k,sel)})).filter(l=>l.qty>0);
 const min = {sh:0}; // reserved
 return {lines, total: lines.reduce((a,l)=>a+l.qty*l.rate,0)};
}
// Turn an estimate mix array into a counts object
const mixToCounts = mix => Object.fromEntries(TYPES.map((t,i)=>[t.k,(mix||[])[i]||0]));
const countTotal = c => TYPES.reduce((a,t)=>a+(+(c||{})[t.k]||0),0);

// Annual revenue range for an estimate. visitsPerYear defaults to quarterly (4);
// rental/contractor counts are already annual volumes, so they use 1.
// FOCUS revenue: field shelters only (or vehicles for fleet leads). est.fs = [low, likely, high].
function focusType(est){ return est && est.mix && (est.mix[5]||0) > 0 && !(est.mix[0]||0) ? 'veh' : 'sh'; }
function revenue(est, visitsPerYear, sel){
 if(!est || !est.fs) return {count:0,visit:0,annual:0,lo:0,hi:0,type:'sh'};
 const k = focusType(est), rate = unitPrice(k, sel), n = visitsPerYear||4;
 return {type:k, count:est.fs[1], countLo:est.fs[0], countHi:est.fs[2], rate, visit:est.fs[1]*rate, annual:est.fs[1]*rate*n, lo:est.fs[0]*rate*n, hi:est.fs[2]*rate*n};
}

// Compact, URL-safe encoding for scope links and client response codes
const enc = o => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const dec = s => { s=String(s||'').trim().replace(/^IRSCOPE:/,'').replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='='; return JSON.parse(decodeURIComponent(escape(atob(s)))); };

window.IR = {SUPPLEMENT, POSTED, BASE, TYPES, TASKS, PLANS, coreSel, unitPrice, visitTotal, mixToCounts, countTotal, revenue, focusType, enc, dec};
})();
