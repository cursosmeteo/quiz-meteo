/**
 * METEO BRIEF v2 — data.js
 * Question bank (50 MCQ), 12 preset scenarios, hazard taxonomy, met sources.
 */

// ═══════════════════════════════════════════════════════════════════════════
// 50 ATPL METEOROLOGY QUESTIONS
// ═══════════════════════════════════════════════════════════════════════════
const QUESTION_BANK = [
  {id:'Q01',topic:'ISA',syl:'050 01 05',text:'In the ISA, sea-level temperature is:',options:['−15 °C','+15 °C','+25 °C','0 °C'],correct:1},
  {id:'Q02',topic:'ISA',syl:'050 01 05',text:'ISA temperature lapse rate in the troposphere:',options:['2 °C/1000 ft','1.98 °C/1000 ft','3 °C/1000 ft','1 °C/1000 ft'],correct:1},
  {id:'Q03',topic:'ISA',syl:'050 01 05',text:'The tropopause in mid-latitudes is approximately at:',options:['36 089 ft','25 000 ft','45 000 ft','20 000 ft'],correct:0},
  {id:'Q04',topic:'ISA',syl:'050 01 05',text:'ISA sea-level pressure is:',options:['1003.25 hPa','1013.25 hPa','1023.25 hPa','1033.25 hPa'],correct:1},
  {id:'Q05',topic:'ISA',syl:'050 01 05',text:'Above the tropopause in the lower stratosphere, temperature:',options:['Continues to decrease','Remains constant at −56.5 °C','Increases with altitude','Varies with season'],correct:1},
  {id:'Q06',topic:'ISA',syl:'050 01 05',text:'ISA+20 at FL350 means the actual temperature is:',options:['−36.5 °C','−16.5 °C','−56.5 °C','+20 °C'],correct:0},
  {id:'Q07',topic:'Altimetry',syl:'050 01 06',text:'Pressure Altitude is read with the altimeter set to:',options:['QNH','1013.25 hPa','QFE','Sea-level elevation'],correct:1},
  {id:'Q08',topic:'Altimetry',syl:'050 01 06',text:'With temperature colder than ISA, the altimeter indicates:',options:['Higher than true altitude','Lower than true altitude','Equal to true altitude','Depends on QNH'],correct:0},
  {id:'Q09',topic:'Altimetry',syl:'050 01 06',text:'QFE is the pressure reduced to:',options:['Mean sea level','Aerodrome elevation','1013.25 hPa','Cruise altitude'],correct:1},
  {id:'Q10',topic:'Altimetry',syl:'050 01 06',text:'Density Altitude is important because it determines:',options:['IFR minimum altitudes','Aircraft performance','QNH settings','Radar coverage'],correct:1},
  {id:'Q11',topic:'Altimetry',syl:'050 01 06',text:'QNH drops from 1013 to 993 hPa. Setting the altimeter, indicated altitude:',options:['Increases by 600 ft','Decreases by 600 ft','Does not change','Increases by 200 ft'],correct:1},
  {id:'Q12',topic:'Wind',syl:'050 02',text:'Geostrophic wind results from balance between:',options:['Coriolis and centrifugal','Pressure gradient and Coriolis','Friction and pressure gradient','Centrifugal and pressure gradient'],correct:1},
  {id:'Q13',topic:'Wind',syl:'050 02',text:'In NH, surface wind rotates relative to geostrophic wind:',options:['10–15° left','10–40° left','10–40° right','No deviation'],correct:1},
  {id:'Q14',topic:'Wind',syl:'050 02',text:'Wind 240°/35 kt. RWY 27 (270°). Crosswind component ≈:',options:['35 kt','17 kt','30 kt','25 kt'],correct:1},
  {id:'Q15',topic:'Wind',syl:'050 02',text:'LLWS is most likely associated with:',options:['Temperature inversion at low altitude','High cloud cover','Weak surface wind','Surface high pressure'],correct:0},
  {id:'Q16',topic:'Wind',syl:'050 02',text:'METAR: wind 270°/25G40KT. Maximum gust:',options:['25 kt','40 kt','270 kt','65 kt'],correct:1},
  {id:'Q17',topic:'Stability',syl:'050 03',text:'The DALR is:',options:['1 °C/100 m','0.6 °C/100 m','1.5 °C/100 m','2 °C/100 m'],correct:0},
  {id:'Q18',topic:'Stability',syl:'050 03',text:'SALR compared to DALR is:',options:['Equal','Always 0.6 °C/100 m','Less than DALR, variable','Greater than DALR'],correct:2},
  {id:'Q19',topic:'Stability',syl:'050 03',text:'Air mass is unstable when ELR is:',options:['Less than DALR','Greater than DALR','Equal to DALR','Equal to SALR'],correct:1},
  {id:'Q20',topic:'Stability',syl:'050 03',text:'Subsidence in an anticyclone causes:',options:['Instability','Temperature inversion and stability','Severe turbulence','Pressure fall'],correct:1},
  {id:'Q21',topic:'Stability',syl:'050 03',text:'Cloud base in convective clouds is determined by:',options:['Tropopause altitude','Condensation level (LCL)','Surface dew point only','Freezing level'],correct:1},
  {id:'Q22',topic:'Clouds',syl:'050 05',text:'Greatest risk of severe turbulence and hail:',options:['Nimbostratus','Altostratus','Cumulonimbus','Altocumulus castellanus'],correct:2},
  {id:'Q23',topic:'Clouds',syl:'050 05',text:'Radiation fog forms on nights that are:',options:['Windy and overcast','Calm, clear, high humidity','Active cold front','High subsidence'],correct:1},
  {id:'Q24',topic:'Clouds',syl:'050 05',text:'Freezing rain forms when:',options:['T sub-zero throughout','Warm layer above cold layer near surface','Low dew point','High updraft speed'],correct:1},
  {id:'Q25',topic:'Clouds',syl:'050 05',text:'Altocumulus castellanus signals:',options:['Prolonged stability','Potential afternoon instability','Approaching warm front','Radiation fog'],correct:1},
  {id:'Q26',topic:'Clouds',syl:'050 05',text:'Mist (BR) corresponds to visibility:',options:['< 200 m','200–1000 m','1000–5000 m','> 5000 m'],correct:1},
  {id:'Q27',topic:'Clouds',syl:'050 05',text:'Advection fog forms when:',options:['Cold air over warm surface','Warm moist air over colder surface','T drops at night','Pressure rises rapidly'],correct:1},
  {id:'Q28',topic:'METAR',syl:'050 04',text:'"TSRA" in a METAR means:',options:['Sand storm','Thunderstorm with rain','Torrential rain','Severe turbulence with rain'],correct:1},
  {id:'Q29',topic:'METAR',syl:'050 04',text:'"BKN015CB" means:',options:['Broken at 1500 ft, CB','Black nimbus 150 ft','Broken low stratus','CB base 15000 ft'],correct:0},
  {id:'Q30',topic:'METAR',syl:'050 04',text:'"CAVOK" means:',options:['Cloud >3000 ft, vis >5 km','Cloud >5000 ft/MSA, vis ≥10 km, no CB/phenomena','No cloud, unlimited vis','Stable atmosphere'],correct:1},
  {id:'Q31',topic:'TAF',syl:'050 04',text:'"TEMPO" in a TAF:',options:['Permanent change','Fluctuations <60 min each','20% probability','SIGMET issued'],correct:1},
  {id:'Q32',topic:'TAF',syl:'050 04',text:'"PROB30 TEMPO" means:',options:['30% permanent change','30% probability, <60 min','3% storm probability','30% probability, >60 min'],correct:1},
  {id:'Q33',topic:'TAF',syl:'050 04',text:'"TAF AMD" means:',options:['Automatic TAF','Amended TAF','Corrected TAF','Cancelled TAF'],correct:1},
  {id:'Q34',topic:'METAR',syl:'050 04',text:'"RE" group in METAR:',options:['Forecast phenomena','Recent phenomena, past 60 min','Resolution forecast','Recent clouds'],correct:1},
  {id:'Q35',topic:'METAR',syl:'050 04',text:'RVR is measured by:',options:['Tower observer','Transmissometer near runway','Weather radar','Solar pyrometer'],correct:1},
  {id:'Q36',topic:'SIGMET',syl:'050 04',text:'SIGMET for severe icing — max validity:',options:['2 h','4 h','6 h','12 h'],correct:1},
  {id:'Q37',topic:'SIGMET',syl:'050 04',text:'"TB SEV" in a PIREP:',options:['Light turbulence','Moderate turbulence','Severe turbulence','Extreme turbulence'],correct:2},
  {id:'Q38',topic:'Fronts',syl:'050 06',text:'Cold front passage sequence (NH):',options:['P rises, wind backs SW, T rises','P falls then rises, wind veers NW, T falls','P constant, variable winds','T constant, heavy rain'],correct:1},
  {id:'Q39',topic:'Fronts',syl:'050 06',text:'Cold occlusion forms when:',options:['Cold front catches warm front, air behind colder than ahead','Two warm fronts merge','Warm front catches cold front','Polar air warms'],correct:0},
  {id:'Q40',topic:'Fronts',syl:'050 06',text:'Isobars close together on surface chart indicate:',options:['Weak pressure gradient','Strong gradient and winds','Stable air mass','High humidity'],correct:1},
  {id:'Q41',topic:'Fronts',syl:'050 06',text:'A trough on a pressure chart:',options:['Maximum pressure','Extension of low, no closed centre','Elongated high','Stationary front'],correct:1},
  {id:'Q42',topic:'Fronts',syl:'050 07',text:'NH low-pressure system wind circulates:',options:['Clockwise','Counter-clockwise','Outside to centre','Centre outwards'],correct:1},
  {id:'Q43',topic:'Icing',syl:'050 09',text:'Most dangerous structural icing type:',options:['Clear ice (glaze)','Rime ice','Mixed ice','In-flight frost'],correct:0},
  {id:'Q44',topic:'Icing',syl:'050 09',text:'Structural icing most intense between:',options:['−40 °C and 0 °C','−10 °C and +2 °C','−60 °C and −20 °C','0 °C and +10 °C'],correct:1},
  {id:'Q45',topic:'Turbulence',syl:'050 09',text:'CAT most frequently occurs:',options:['Inside CB','Near jet streams and mountain waves','Near low-altitude inversions','In polar air masses'],correct:1},
  {id:'Q46',topic:'Turbulence',syl:'050 09',text:'Mountain wave turbulence is most severe:',options:['Windward side above summit','Lee side, wavelengths downwind','Directly over summit','Above FL300 only'],correct:1},
  {id:'Q47',topic:'Turbulence',syl:'050 09',text:'SIGWX symbol for moderate turbulence:',options:['Single wavy line','Double wavy line','Triangle','Broken arrow'],correct:0},
  {id:'Q48',topic:'Local',syl:'050 10',text:'Sea breeze blows during the day from:',options:['Land to sea','Sea to land','North to south','Along the coast'],correct:1},
  {id:'Q49',topic:'Local',syl:'050 10',text:'The Foehn produces wind that is:',options:['Cold and wet, lee side','Warm and dry, lee side','Cold and dry, windward','Wet on both sides'],correct:1},
  {id:'Q50',topic:'Local',syl:'050 10',text:'Air mass mP affecting Iberia originates from:',options:['North Africa','North-east Europe','North Atlantic','Arctic continent'],correct:2},
];

// ═══════════════════════════════════════════════════════════════════════════
// 12 PRESET SCENARIOS
// ═══════════════════════════════════════════════════════════════════════════
const PRESET_SCENARIOS = [
  // ── FAMILY 1: LOW VISIBILITY ───────────────────────────────────────────
  {
    id:'SC01', family:'Visibility', difficulty:1,
    title:'Radiation Fog — Lisbon Arrival',
    route:{dep:'EGLL',dest:'LPPT',alt1:'LPPR',alt2:'LEBB',depTime:'0600Z',aircraft:'A320'},
    synopsis:'High pressure over the Azores. Clear sky overnight. Radiation fog formed at LPPT. RVR 400 m. TAF indicates improvement after 1000Z. ETA 0730Z.',
    archive:{
      metar:'LPPT 150700Z 02004KT 0400 R21/0400N FG VV/// 08/08 Q1032 NOSIG\nLPPR 150700Z 03006KT 9999 FEW015 SCT040 10/06 Q1031 NOSIG',
      taf:'TAF LPPT 150500Z 1506/1612 02005KT 0400 FG VV/// BECMG 1509/1511 0800 BR BECMG 1511/1513 4000 BR SCT005 BECMG 1513/1515 9999 FEW010\nTAF LPPR 150500Z 1506/1612 03006KT 9999 FEW015 SCT040 NOSIG',
      sigmet:'NIL',
      remarks:'PIREP: FL040 A320 OTP LPPT — FOG TOPS 800FT RVR AROUND 400M'
    },
    expectedDecision:'DELAY',
    teacherNote:'Radiation fog below CAT I. TAF improvement after ETA. Delay or hold for dissipation.'
  },
  {
    id:'SC02', family:'Visibility', difficulty:2,
    title:'Advection Fog + Alternate Risk — Paris CDG',
    route:{dep:'LEMD',dest:'LFPG',alt1:'EBBR',alt2:'LFMN',depTime:'0500Z',aircraft:'A321'},
    synopsis:'Warm moist SW flow over northern France. Advection fog affecting LFPG and EBBR. LFMN clear. TAFs show slow improvement. Both destination and alternate 1 below minima.',
    archive:{
      metar:'LFPG 050500Z 21008KT 0200 FG VV001 10/10 Q1008 NOSIG\nEBBR 050500Z 20006KT 0400 FG VV002 09/09 Q1007 NOSIG\nLFMN 050500Z 28012KT 9999 FEW025 SCT060 15/08 Q1014 NOSIG',
      taf:'TAF LFPG 050400Z 0505/0611 21008KT 0200 FG VV001 BECMG 0509/0511 0800 BR SCT004 BECMG 0511/0513 4000 BKN010\nTAF EBBR 050400Z 0505/0611 19006KT 0300 FG VV002 BECMG 0510/0512 1500 BR BKN005',
      sigmet:'NIL',
      remarks:'Both LFPG and EBBR below company alternate minima. Only LFMN valid alternate — check fuel.'
    },
    expectedDecision:'DELAY',
    teacherNote:'Destination and alternate 1 below minima. LFMN valid but extra fuel required. Delay departure.'
  },
  {
    id:'SC03', family:'Visibility', difficulty:3,
    title:'Freezing Drizzle + Null TAF — Faro',
    route:{dep:'GCFV',dest:'LPPT',alt1:'LPFR',alt2:'LEBB',depTime:'0300Z',aircraft:'B737'},
    synopsis:'Warm front approaching. Freezing drizzle at LPPT. LPFR TAF unavailable (system outage). Severe icing SIGMET active. PIREP contradicts TAF.',
    archive:{
      metar:'LPPT 220300Z 20004KT 0800 FZDZ FG VV001 03/03 Q1020 NOSIG\nLPFR 220300Z 21008KT 4000 BR FEW006 BKN012 08/07 Q1022 NOSIG',
      taf:'TAF LPPT 220200Z 2203/2309 20005KT 0600 FZDZ FG VV001 BECMG 2207/2209 1500 BR BKN004\nTAF LPFR — NOT AVAILABLE (NOTAM: TAF system outage)',
      sigmet:'LPPC SIGMET 3 VALID 220200/220600Z — SEV ICE FZRA SFC-FL080 MOV NE INTSF',
      remarks:'PIREP FL025 A320: SEV FZRA IC SEV below 3000ft. Alternate TAF unavailable.'
    },
    expectedDecision:'NO-GO',
    teacherNote:'FZDZ at dest below all minima. SEV icing SIGMET. Alternate TAF unavailable. NO-GO.'
  },

  // ── FAMILY 2: CONVECTIVE ───────────────────────────────────────────────
  {
    id:'SC04', family:'Convective', difficulty:1,
    title:'Embedded CB on Route — Lisbon to Madrid',
    route:{dep:'LPPT',dest:'LEMD',alt1:'LEZL',alt2:'LEPA',depTime:'1200Z',aircraft:'A320'},
    synopsis:'Atlantic trough. Area of embedded CB FL280-FL350 along route. Destination clear. SIGMET active.',
    archive:{
      metar:'LPPT 151200Z 23015KT 8000 SCT020 BKN045 20/15 Q1012 NOSIG\nLEMD 151200Z 22018KT 9999 FEW025 BKN060 22/12 Q1010 NOSIG',
      taf:'TAF LEMD 151100Z 1512/1618 22015KT 9999 FEW025 BKN060 TEMPO 1514/1518 22020G35KT 3000 TSRA SCT020CB',
      sigmet:'LECB SIGMET 5 VALID 151200/151600Z — EMBD CB TOP FL350 MOV E 20KT NC',
      remarks:'PIREP FL310 A321: TB SEV, CB tops FL350 going around to avoid.'
    },
    expectedDecision:'DELAY',
    teacherNote:'CB tops above FL310 cruise. Severe turbulence band. TAF shows TSRA at arrival. Delay or reroute.'
  },
  {
    id:'SC05', family:'Convective', difficulty:2,
    title:'Cold Front CB + Severe Icing — Paris to Madrid',
    route:{dep:'LFPG',dest:'LEMD',alt1:'LEZL',alt2:'LEBL',depTime:'1100Z',aircraft:'A321'},
    synopsis:'Active cold front crossing Pyrenees. Occasional embedded CB tops FL380. Severe icing FL060-FL160. PIREP conflicts with SIGMET.',
    archive:{
      metar:'LEMD 101200Z 22022KT 5000 -TSRA BKN015CB OVC040 14/11 Q1004 NOSIG\nLEZL 101200Z 21015KT 9999 SCT025 BKN060 17/10 Q1008 NOSIG',
      taf:'TAF LEMD 101100Z 1012/1118 22020KT 4000 TSRA BKN015CB OVC040 TEMPO 1012/1016 22030G45KT 1500 +TSRA SCT010CB BECMG 1016/1018 23015KT 9999 BKN025',
      sigmet:'LECB SIGMET 8 VALID 101100/101500Z — SEV ICE FL060-FL160 NC\nLECB SIGMET 9 VALID 101100/101500Z — OCNL EMBD CB TOP FL380 MOV E NC',
      remarks:'PIREP FL120 A320: IC MOD FL080-FL120 — less severe than SIGMET suggests.'
    },
    expectedDecision:'DELAY',
    teacherNote:'Destination active TSRA+CB. SEV icing on climb/descent. PIREP conflicts with SIGMET — ambiguity. Delay.'
  },
  {
    id:'SC06', family:'Convective', difficulty:3,
    title:'MCS + Hail + Destination Closed — London to Paris',
    route:{dep:'EGLL',dest:'LFPG',alt1:'LFMN',alt2:'EHAM',depTime:'1400Z',aircraft:'B777'},
    synopsis:'MCS over northern France. Frequent embedded CB tops FL420, hail. Destination below minima. Alternate TAF partially corrupted. SIGMET gap.',
    archive:{
      metar:'LFPG 201500Z 19028G45KT 1500 +TSRA SCT010CB OVC025 17/15 Q0978 NOSIG\nLFMN 201500Z 28022KT 9999 FEW025 SCT060 24/12 Q1014 NOSIG',
      taf:'TAF LFPG 201400Z 2015/2121 19025G40KT 2000 +TSRA SCT010CB OVC030 TEMPO 2015/2019 VRB10KT 0500 +TSRA FG OVC006\nTAF LFMN 201400Z 2015/2121 28020KT 9999 FEW025 SCT060 [DATA CORRUPTED]',
      sigmet:'LFFF SIGMET 12 VALID 201400/201800Z — FRQ EMBD CB TOP FL420 HAIL MOV NE 35KT NC',
      remarks:'PIREP FL350 B777: TB SEV, HAIL confirmed FL350. LFMN TAF data gap. SIGMET gap 1200-1400Z noted.'
    },
    expectedDecision:'NO-GO',
    teacherNote:'Dest below minima. CB at cruise FL. LFMN TAF incomplete. NO-GO.'
  },

  // ── FAMILY 3: ICING & TURBULENCE ──────────────────────────────────────
  {
    id:'SC07', family:'Icing', difficulty:1,
    title:'Moderate Icing on Climb — Rome to Amsterdam',
    route:{dep:'LIRF',dest:'EHAM',alt1:'EBBR',alt2:'EDDL',depTime:'0800Z',aircraft:'A320'},
    synopsis:'Post-frontal westerly flow. Moderate icing FL060-FL140 on climb-out. CAT FL260-FL340 near jet stream. Destination clear.',
    archive:{
      metar:'LIRF 080800Z 24022KT 9999 FEW025 BKN060 12/05 Q1016 NOSIG\nEHAM 080800Z 23025KT 9999 SCT025 BKN060 09/04 Q0998 NOSIG',
      taf:'TAF EHAM 080700Z 0808/0914 23022G35KT 9999 SCT025 BKN060 TEMPO 0810/0814 23030G48KT BKN018',
      sigmet:'LMMM SIGMET 4 VALID 080800/081200Z — MOD ICE FL060-FL140 NC\nEHAA SIGMET 6 VALID 080800/081200Z — SEV CAT FL260-FL340 NC',
      remarks:'PIREP FL320 B738: TB SEV adjacent to jet stream core at FL300.'
    },
    expectedDecision:'GO',
    teacherNote:'Icing manageable on climb. CAT above FL260 — request FL240 or FL350. Destination clear. GO with awareness.'
  },
  {
    id:'SC08', family:'Icing', difficulty:2,
    title:'Severe Icing + Mountain Wave — Zurich to Madrid',
    route:{dep:'LSZH',dest:'LEMD',alt1:'LEZL',alt2:'LEBL',depTime:'0900Z',aircraft:'A319'},
    synopsis:'Deep winter cyclone. Severe icing FL040-FL180 Pyrenees area. Mountain wave turbulence. Wind shear on approach LEMD.',
    archive:{
      metar:'LSZH 090900Z 24018KT 9999 FEW030 BKN080 02/−05 Q1002 NOSIG\nLEMD 090900Z 26030G48KT 9999 FEW020 SCT050 08/−02 Q1022 NOSIG',
      taf:'TAF LEMD 090800Z 0909/1015 26025G40KT 9999 FEW020 SCT050 TEMPO 0910/0914 27035G55KT 8000 -SHRA BKN018',
      sigmet:'LSAS SIGMET 7 VALID 090800/091200Z — SEV ICE FL040-FL180 PYRENEES AREA NC\nLECB SIGMET 8 VALID 090800/091200Z — SEV MTW FL060-FL180 PYRENEES NC',
      remarks:'PIREP FL080 A320: IC SEV over Pyrenees, MTW SEV below FL120. Wind shear alert LEMD.'
    },
    expectedDecision:'DELAY',
    teacherNote:'SEV icing and mountain wave on route. Gusts at LEMD approaching limits. Delay for frontal passage.'
  },

  // ── FAMILY 4: WIND & RUNWAY ────────────────────────────────────────────
  {
    id:'SC09', family:'Wind', difficulty:1,
    title:'Strong Crosswind — Madrid Landing',
    route:{dep:'LPPT',dest:'LEMD',alt1:'LEZL',alt2:'LEBL',depTime:'0900Z',aircraft:'A320'},
    synopsis:'Post-frontal westerly flow. Surface wind at LEMD 270°/32G48KT. A320 crosswind limit 38KT. TAF shows TEMPO gusts 55KT. Alternate LEZL wind within limits.',
    archive:{
      metar:'LEMD 201000Z 27032G48KT 9999 FEW020 SCT045 12/02 Q1028 NOSIG\nLEZL 201000Z 27025G38KT 9999 FEW025 SCT060 15/04 Q1026 NOSIG',
      taf:'TAF LEMD 200800Z 2009/2115 27030G45KT 9999 FEW020 SCT045 TEMPO 2010/2014 27038G55KT 9999 BKN020 BECMG 2014/2016 26025KT NOSIG',
      sigmet:'NIL',
      remarks:'RWY 32R: crosswind ≈29KT mean. TEMPO gusts 55KT exceed A320 demonstrated limit. Wind shear PIREP.'
    },
    expectedDecision:'DELAY',
    teacherNote:'TEMPO gusts exceed demonstrated crosswind limit. Delay for TEMPO period. Alternate wind within limits.'
  },
  {
    id:'SC10', family:'Wind', difficulty:2,
    title:'Microburst Alert + Runway State — London Heathrow',
    route:{dep:'KEWR',dest:'EGLL',alt1:'EGKK',alt2:'EIDW',depTime:'0200Z',aircraft:'A330'},
    synopsis:'Post-thunderstorm environment. Microburst alert active RWY 27L. Runway state reports incomplete. PIREP reports standing water not in SNOWTAM.',
    archive:{
      metar:'EGLL 140700Z 22018KT 6000 -SHRA SCT015 BKN040 15/12 Q0995 NOSIG\nEGKK 140700Z 21015KT 8000 FEW020 BKN045 14/11 Q0996 NOSIG',
      taf:'TAF EGLL 140600Z 1406/1512 22015KT 6000 -SHRA FEW015 BKN040 TEMPO 1407/1410 22025G40KT 2000 +SHRA BKN010 BECMG 1410/1412 22012KT 9999 SCT025',
      sigmet:'NIL',
      remarks:'MICROBURST ALERT EGLL RWY27L. PIREP: standing water RWY09R, braking action POOR — not in SNOWTAM (2h old).'
    },
    expectedDecision:'DELAY',
    teacherNote:'Microburst on main arrival runway. SNOWTAM outdated. Delay until alert cleared and updated SNOWTAM received.'
  },

  // ── FAMILY 5: SYNOPTIC / FRONTAL ──────────────────────────────────────
  {
    id:'SC11', family:'Frontal', difficulty:2,
    title:'Cold Front Crossing — London to Rome',
    route:{dep:'EGLL',dest:'LIRF',alt1:'LIRA',alt2:'LIML',depTime:'1200Z',aircraft:'A330'},
    synopsis:'Deep Atlantic low approaching UK. Cold front will cross route during flight. Pre-frontal warm sector at departure. Jet stream 140KT at FL330. Severe CAT FL250-FL380.',
    archive:{
      metar:'EGLL 121200Z 22030G45KT 9000 -SHRA FEW020 BKN040 12/08 Q0994 NOSIG\nLIRF 121200Z 24022KT 9999 FEW025 BKN060 16/08 Q1016 NOSIG',
      taf:'TAF LIRF 121100Z 1212/1318 24020KT 9999 FEW025 BKN060 TEMPO 1215/1219 25030G50KT 3000 -TSRA SCT015CB OVC040 BECMG 1218/1220 27025KT 9999',
      sigmet:'LMMM SIGMET 14 VALID 121200/121600Z — SEV TURB FL250-FL380 MOV E 40KT NC',
      remarks:'PIREP FL350 A340: TB MOD/SEV, IC MOD FL080-FL160. Windshear alert LIRF during frontal passage.'
    },
    expectedDecision:'DELAY',
    teacherNote:'SEV CAT at cruise level. Frontal passage at dest during arrival window. Delay for frontal clearance.'
  },
  {
    id:'SC12', family:'Frontal', difficulty:3,
    title:'Explosive Cyclogenesis — London to Rome',
    route:{dep:'EGLL',dest:'LIRF',alt1:'LMML',alt2:'LICJ',depTime:'1600Z',aircraft:'B787'},
    synopsis:'Secondary low bombing over Biscay (>24 hPa/24h). SIGWX chart 6h old. CB tops FL420 hail. SEV turbulence FL280-FL400. PIREP confirms hail at FL360.',
    archive:{
      metar:'LIRF 031800Z 23030G55KT 4000 -TSRA SCT010CB OVC035 14/10 Q0988 NOSIG\nLMML 031800Z 26018KT 9999 FEW025 BKN060 18/10 Q1012 NOSIG',
      taf:'TAF LIRF 031700Z 0318/0424 23028G45KT 3000 TSRA SCT010CB OVC035 TEMPO 0318/0322 23040G60KT 0800 +TSRA OVC006',
      sigmet:'LMMM SIGMET 18 VALID 031600/032000Z — SEV TURB FL280-FL400 INTSF\nLMMM SIGMET 19 VALID 031600/032000Z — FRQ EMBD CB TOP FL420 HAIL NC',
      remarks:'NOTE: SIGWX chart validity 031200Z — 6h old. PIREP FL360 B777: HAIL confirmed, TB SEV. Low now 948 hPa.'
    },
    expectedDecision:'NO-GO',
    teacherNote:'Explosive deepening. Outdated SIGWX. Hail at cruise FL. Dest active TSRA gusts 55KT. NO-GO.'
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// HAZARD TAXONOMY (Decision Table)
// ═══════════════════════════════════════════════════════════════════════════
const HAZARD_TYPES = [
  // Visibility
  { id:'FOG',     label:'Fog',                      category:'Visibility',   icon:'🌫️' },
  { id:'BR',      label:'Mist / Haze (BR/HZ)',       category:'Visibility',   icon:'🌁' },
  { id:'LOWVIS',  label:'Low Visibility (< 1500m)',  category:'Visibility',   icon:'👁️' },
  { id:'LOWCLD',  label:'Low Cloud / Low Ceiling',   category:'Visibility',   icon:'☁️' },
  // Precipitation
  { id:'RA',      label:'Rain',                      category:'Precipitation',icon:'🌧️' },
  { id:'SN',      label:'Snow / Sleet',              category:'Precipitation',icon:'❄️' },
  { id:'FZDZ',    label:'Freezing Drizzle (FZDZ)',   category:'Precipitation',icon:'🧊' },
  { id:'FZRA',    label:'Freezing Rain (FZRA)',      category:'Precipitation',icon:'🧊' },
  { id:'GR',      label:'Hail (GR)',                 category:'Precipitation',icon:'🟡' },
  // Convective
  { id:'CB',      label:'CB / Cumulonimbus',         category:'Convective',   icon:'⛈️' },
  { id:'TS',      label:'Thunderstorm (TS)',          category:'Convective',   icon:'⚡' },
  { id:'EMBD',    label:'Embedded CB',               category:'Convective',   icon:'⛈️' },
  { id:'SQUALL',  label:'Squall Line',               category:'Convective',   icon:'🌩️' },
  // Icing
  { id:'ICE_LGT', label:'Light Icing',               category:'Icing',        icon:'🔵' },
  { id:'ICE_MOD', label:'Moderate Icing',            category:'Icing',        icon:'🟡' },
  { id:'ICE_SEV', label:'Severe Icing',              category:'Icing',        icon:'🔴' },
  // Turbulence
  { id:'TURB_LGT',label:'Light Turbulence',          category:'Turbulence',   icon:'〰️' },
  { id:'TURB_MOD',label:'Moderate Turbulence',       category:'Turbulence',   icon:'〰️' },
  { id:'TURB_SEV',label:'Severe Turbulence',         category:'Turbulence',   icon:'⚠️' },
  { id:'CAT',     label:'Clear Air Turbulence (CAT)',category:'Turbulence',   icon:'🌀' },
  { id:'MTW',     label:'Mountain Wave',             category:'Turbulence',   icon:'🏔️' },
  // Wind
  { id:'WS',      label:'Wind Shear (LLWS)',         category:'Wind',         icon:'💨' },
  { id:'MICROBURST',label:'Microburst',              category:'Wind',         icon:'💨' },
  { id:'CROSSWIND',label:'Crosswind at Limits',      category:'Wind',         icon:'↔️' },
  { id:'JET',     label:'Jet Stream',                category:'Wind',         icon:'🌬️' },
  // Runway
  { id:'RWYSTATE',label:'Runway Contamination',      category:'Runway',       icon:'🛬' },
  { id:'RWYCLOSE',label:'Runway Closure / NOTAM',    category:'Runway',       icon:'🚫' },
  // Synoptic
  { id:'FRONT',   label:'Active Front on Route',     category:'Synoptic',     icon:'🗺️' },
  { id:'TROUGH',  label:'Trough / Unstable Air',     category:'Synoptic',     icon:'📉' },
  { id:'CYCLONE', label:'Rapid Cyclogenesis',        category:'Synoptic',     icon:'🌀' },
  // Other
  { id:'VA',      label:'Volcanic Ash',              category:'Other',        icon:'🌋' },
  { id:'OTHER',   label:'Other (specify)',            category:'Other',        icon:'❓' },
];

const INTENSITY_OPTS = ['—', 'NIL', 'Light', 'Moderate', 'Severe', 'Extreme'];

const FL_RANGE_OPTS  = [
  '—', 'SFC only', 'SFC – FL050', 'FL050 – FL100',
  'FL100 – FL180', 'FL180 – FL280', 'FL280 – FL390', 'Above FL390', 'All levels'
];

const FLIGHT_PHASE_OPTS = ['Departure', 'Climb', 'Cruise', 'Descent', 'Approach', 'Landing', 'Alternate'];

const PARTIAL_DEC_OPTS  = ['—', 'GO', 'DELAY', 'NO-GO', 'Monitor'];

// ═══════════════════════════════════════════════════════════════════════════
// LIVE MET SOURCES
// ═══════════════════════════════════════════════════════════════════════════
const MET_SOURCES = [
  { icon:'🌡️', label:'METAR / TAF',       desc:'IPMA Self-Briefing (PT)',   url:'https://www.ipma.pt/pt/aeronautica/selfbriefing/' },
  { icon:'📡', label:'METAR / TAF',       desc:'AVWX (global)',             url:'https://avwx.rest' },
  { icon:'⚠️', label:'SIGMETs',           desc:'NOAA AWC International',    url:'https://aviationweather.gov/sigmet/intl' },
  { icon:'🗺️', label:'Surface Chart',     desc:'Wetterzentrale',            url:'https://www.wetterzentrale.de/en/archive.php' },
  { icon:'🗺️', label:'Surface Chart',     desc:'Met Office',                url:'https://www.metoffice.gov.uk/weather/maps-and-charts/surface-pressure' },
  { icon:'✈️', label:'SIGWX Chart',       desc:'WAFC Washington (NOAA)',    url:'https://aviationweather.gov/products/progs/progchart.php' },
  { icon:'💨', label:'Upper Wind / Temp', desc:'Met Office Upper Air',      url:'https://www.metoffice.gov.uk/weather/maps-and-charts/upper-air-charts' },
  { icon:'💨', label:'Upper Wind / Temp', desc:'ECMWF Charts',              url:'https://charts.ecmwf.int' },
  { icon:'🛰️', label:'Satellite',         desc:'EUMETSAT Viewer',           url:'https://view.eumetsat.int/productviewer?v=default' },
  { icon:'🌧️', label:'Radar',             desc:'RainViewer',                url:'https://www.rainviewer.com/map.html' },
  { icon:'🌬️', label:'All Layers',        desc:'Windy',                     url:'https://www.windy.com' },
  { icon:'📊', label:'Sounding / Skew-T', desc:'Wyoming Upper Air',         url:'https://weather.uwyo.edu/upperair/sounding.html' },
];
