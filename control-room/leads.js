/* Industry Reset — seed lead list, 50-mile radius of 19061 (Boothwyn / Upper Chichester, PA).
   Facility names and locations are public. Contacts are intentionally blank:
   find the Site Services / Facilities / EHS manager before outreach.
   Fields: [company, site, segment, city, state, lat, lon, estUnits, priority, website, note] */
window.IR_SEED_LEADS = [
// ---- Refining & fuels ----
["Monroe Energy","Trainer Refinery","Refinery","Trainer","PA",39.826,-75.405,24,"A","","Delta Air Lines-owned refinery ~2 mi away. Operator shelters + turnaround BRMs."],
["PBF Energy","Paulsboro Refinery","Refinery","Paulsboro","NJ",39.835,-75.255,24,"A","pbfenergy.com","Across the river. Large unit count, frequent turnarounds."],
["PBF Energy","Delaware City Refinery","Refinery","Delaware City","DE",39.588,-75.635,24,"A","pbfenergy.com","Big site; ask about annual program for control rooms + shelters."],
["Energy Transfer","Marcus Hook Terminal (NGL hub)","Terminal / Midstream","Marcus Hook","PA",39.811,-75.420,12,"A","energytransfer.com","Mariner East terminus, ~2 mi. Operator shelters and gate houses."],
["Energy Transfer","Fort Mifflin Terminal","Terminal / Midstream","Philadelphia","PA",39.876,-75.213,6,"B","energytransfer.com","Crude/product terminal near PHL."],
["Philadelphia Int'l Airport","PHL Fuel Farm / Airfield Ops","Terminal / Midstream","Philadelphia","PA",39.872,-75.241,4,"C","","Fuel-farm operator shelters; route via airport facilities."],
["HRP Group","The Bellwether District (former PES refinery)","Industrial Redevelopment","Philadelphia","PA",39.905,-75.205,8,"B","","1,300-acre redevelopment — lots of site trailers during construction."],
// ---- Chemicals & materials ----
["Braskem America","Marcus Hook Polypropylene Plant","Chemical","Marcus Hook","PA",39.812,-75.410,8,"A","braskem.com","Inside the old Sunoco complex, ~2 mi."],
["Chemours","Chambers Works","Chemical","Deepwater","NJ",39.690,-75.500,10,"A","chemours.com","Large legacy chem site; many shelters/labs."],
["Croda","Atlas Point","Chemical","New Castle","DE",39.700,-75.550,6,"B","croda.com","Bio-based surfactant plant."],
["Formosa Plastics","Delaware City PVC Plant","Chemical","Delaware City","DE",39.583,-75.620,6,"B","","Next door to PBF Delaware City — pair the visits."],
["Syensqo (formerly Solvay)","West Deptford Plant","Chemical","West Deptford","NJ",39.840,-75.200,6,"B","","Specialty polymers on the river."],
["AdvanSix","Frankford Plant","Chemical","Philadelphia","PA",40.008,-75.073,8,"B","","Phenol/acetone plant, NE Philly."],
["Dow","Bristol Plant","Chemical","Bristol","PA",40.105,-74.855,6,"C","","Verify current operations before outreach."],
["Arkema","King of Prussia R&D Center","Chemical","King of Prussia","PA",40.090,-75.390,3,"C","","R&D campus — smaller, lab/guard spaces."],
["Quaker Houghton","Global HQ & Labs","Chemical","Conshohocken","PA",40.077,-75.305,2,"C","","Corporate — use as door-opener to plant network."],
["DuPont","Experimental Station","Chemical","Wilmington","DE",39.775,-75.575,3,"C","","R&D campus with process labs."],
["Chemours","Discovery Hub (STAR Campus)","Chemical","Newark","DE",39.677,-75.750,2,"C","chemours.com","R&D — ties into Chambers Works relationship."],
["Kimberly-Clark","Chester Mill","Manufacturing","Chester","PA",39.843,-75.370,4,"B","","Tissue mill, ~5 mi. Control rooms + break shelters."],
["Boeing","Ridley Park (Vertical Lift)","Manufacturing","Ridley Park","PA",39.866,-75.330,3,"C","","Large plant; security / ops modular buildings."],
["Merck","West Point Campus","Manufacturing","West Point","PA",40.212,-75.300,3,"C","","Pharma — guard houses, utility control rooms."],
// ---- Power & utilities ----
["Constellation","Eddystone Generating Station","Power Generation","Eddystone","PA",39.858,-75.330,6,"A","constellationenergy.com","~7 mi. Control room + outage trailers."],
["Constellation","Limerick Generating Station","Power Generation","Pottstown","PA",40.224,-75.587,8,"B","constellationenergy.com","Nuclear — outage season brings temporary buildings."],
["Constellation","Peach Bottom Atomic Power Station","Power Generation","Delta","PA",39.759,-76.269,8,"B","constellationenergy.com","Nuclear, ~44 mi. Outage modulars."],
["PSEG Nuclear","Salem / Hope Creek","Power Generation","Hancocks Bridge","NJ",39.463,-75.535,10,"A","pseg.com","Nuclear, ~26 mi. Large outage workforce facilities."],
["Calpine","Edge Moor Energy Center","Power Generation","Wilmington","DE",39.752,-75.500,4,"B","calpine.com","Gas plant on the river."],
["Calpine","Hay Road Energy Center","Power Generation","Wilmington","DE",39.743,-75.508,4,"B","calpine.com","Adjacent to Edge Moor — bundle."],
["Marcus Hook Energy Center","717 MW Gas Plant","Power Generation","Marcus Hook","PA",39.813,-75.415,4,"A","","Inside Marcus Hook complex, ~2 mi."],
["Philadelphia Gas Works","Richmond LNG Plant","Utility","Philadelphia","PA",39.985,-75.080,4,"B","pgworks.com","LNG plant — operator shelters."],
["Reworld (formerly Covanta)","Delaware Valley Waste-to-Energy","Utility","Chester","PA",39.840,-75.380,4,"B","","~4 mi. Gritty environment — odor reset sells itself."],
["DELCORA","Western Regional Treatment Plant","Utility","Chester","PA",39.842,-75.375,3,"B","","Wastewater — odor control is a daily pain point."],
["Philadelphia Water Dept","Southwest Water Pollution Control Plant","Utility","Philadelphia","PA",39.893,-75.220,4,"C","","Municipal — bid/RFP route."],
// ---- Ports & marine ----
["Hanwha Philly Shipyard","Navy Yard Shipyard","Port / Marine","Philadelphia","PA",39.890,-75.180,6,"B","","Ship construction — crew trailers and shelters."],
["PhilaPort","Packer Avenue Marine Terminal","Port / Marine","Philadelphia","PA",39.905,-75.140,4,"C","philaport.com","Gate houses / checker booths."],
["Port of Wilmington","Wilmington Marine Terminal","Port / Marine","Wilmington","DE",39.715,-75.525,4,"C","","Gate and ops buildings."],
["Delaware River Partners","Repauno Port & Rail Terminal","Port / Marine","Gibbstown","NJ",39.830,-75.300,4,"B","","Growing terminal — new ops buildings."],
["South Jersey Port Corp","Paulsboro Marine Terminal","Port / Marine","Paulsboro","NJ",39.840,-75.240,3,"C","","Pair with PBF Paulsboro visits."],
// ---- BRM / modular rental fleets (channel partners: clean units between deployments) ----
["WillScot","Philadelphia-area branch","BRM / Modular Rental","Philadelphia area","PA",40.050,-75.000,30,"A","willscot.com","Channel play: turnover cleaning of returned units. Ask for branch ops manager."],
["Mobile Modular","Blast-resistant fleet — NJ/PA","BRM / Modular Rental","South Jersey","NJ",39.900,-75.050,30,"A","mobilemodular.com","Advertises BRMs for NJ refineries/plants. Pitch between-deployment Resets."],
["Sunbelt Rentals","Temporary Structures (blast-resistant)","BRM / Modular Rental","Philadelphia area","PA",39.950,-75.250,20,"A","sunbeltrentals.com","Rents blast-resistant structures. Find regional temp-structures lead."],
["Hunter Buildings / Hunter OnSite","BRM fleet — PA/NJ/DE coverage","BRM / Modular Rental","Regional (HQ Houston)","PA",39.840,-75.450,20,"A","","Lists PA/NJ/DE coverage. Strategic account — national pitch."],
["Matrix Service","Eddystone office (turnaround contractor)","Turnaround Contractor","Eddystone","PA",39.860,-75.340,6,"B","","Contractors bring BRMs to turnarounds — sell through them."],
// ---- Fleet Reset (expansion) ----
["Upper Chichester Police Dept","Patrol fleet","Fleet — Police","Upper Chichester","PA",39.840,-75.450,0,"B","","Hometown department — easy first Fleet Reset reference."],
["Chester Police Dept","Patrol fleet","Fleet — Police","Chester","PA",39.849,-75.357,0,"C","",""],
["Pennsylvania State Police","Troop K — Media Station","Fleet — Police","Media","PA",39.920,-75.400,0,"C","","State procurement route."],
["Delaware State Police","Troop 1 — Penny Hill","Fleet — Police","Wilmington","DE",39.790,-75.490,0,"C","",""],
["Wilmington Police Dept","Patrol fleet","Fleet — Police","Wilmington","DE",39.745,-75.548,0,"C","",""],
["New Castle County Paramedics","EMS fleet","Fleet — EMS","New Castle","DE",39.680,-75.600,0,"B","","Ambulance patient compartments — strong odor/disinfection need."],
["Philadelphia Fire Dept EMS","Medic units","Fleet — EMS","Philadelphia","PA",39.960,-75.160,0,"C","","Large fleet; RFP route."],
["Gloucester County EMS","Ambulance fleet","Fleet — EMS","Clarksboro","NJ",39.800,-75.220,0,"B","","County-run EMS."],
["SEPTA","CCT Connect paratransit","Fleet — Transit","Philadelphia","PA",39.955,-75.163,0,"C","septa.org","Paratransit vans/coaches — volume play."],
["Widener University","Public Safety fleet","Fleet — Police","Chester","PA",39.862,-75.357,0,"C","","Small fleet; quick yes."]
];
