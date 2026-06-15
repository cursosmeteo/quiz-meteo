/**
 * METEO BRIEF v3 — data.js
 * Question bank (50 MCQ) + Met sources.
 * No preset scenarios — professor defines route freely.
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
// LIVE MET SOURCES
// ═══════════════════════════════════════════════════════════════════════════
const MET_SOURCES = [
  {icon:'🌡️',label:'METAR / TAF',      desc:'IPMA Self-Briefing (PT)',    url:'https://www.ipma.pt/pt/aeronautica/selfbriefing/'},
  {icon:'📡',label:'METAR / TAF',      desc:'AVWX (global)',              url:'https://avwx.rest'},
  {icon:'⚠️',label:'SIGMETs',          desc:'NOAA AWC International',     url:'https://aviationweather.gov/sigmet/intl'},
  {icon:'🗺️',label:'Surface Chart',    desc:'Wetterzentrale',             url:'https://www.wetterzentrale.de/en/archive.php'},
  {icon:'🗺️',label:'Surface Chart',    desc:'Met Office',                 url:'https://www.metoffice.gov.uk/weather/maps-and-charts/surface-pressure'},
  {icon:'✈️',label:'SIGWX Chart',      desc:'WAFC Washington (NOAA)',     url:'https://aviationweather.gov/products/progs/progchart.php'},
  {icon:'💨',label:'Upper Wind / Temp',desc:'Met Office Upper Air',       url:'https://www.metoffice.gov.uk/weather/maps-and-charts/upper-air-charts'},
  {icon:'💨',label:'Upper Wind / Temp',desc:'ECMWF Charts',               url:'https://charts.ecmwf.int'},
  {icon:'🛰️',label:'Satellite',        desc:'EUMETSAT Viewer',            url:'https://view.eumetsat.int/productviewer?v=default'},
  {icon:'🌧️',label:'Radar',            desc:'RainViewer',                 url:'https://www.rainviewer.com/map.html'},
  {icon:'🌬️',label:'All Layers',       desc:'Windy',                      url:'https://www.windy.com'},
  {icon:'📊',label:'Sounding / Skew-T',desc:'Wyoming Upper Air',          url:'https://weather.uwyo.edu/upperair/sounding.html'},
];

// ═══════════════════════════════════════════════════════════════════════════
// CLOUD TYPES FOR DECISION TABLE
// ═══════════════════════════════════════════════════════════════════════════
const CLOUD_TYPES = ['SKC','FEW','SCT','BKN','OVC','VV///'];
const INTENSITY   = ['NIL','Light','Moderate','Severe','Extreme'];
const VIS_RANGE   = ['≥ 10 km','5–10 km','1.5–5 km','800 m–1.5 km','< 800 m'];

// ═══════════════════════════════════════════════════════════════════════════
// SESSION GUIDE CONTENT
// ═══════════════════════════════════════════════════════════════════════════
const SESSION_GUIDE = [
  {
    phase: 'PRE-SESSION',
    who: 'Instructor',
    duration: 'Before students arrive',
    color: '#64748b',
    steps: [
      'Open teacher.html on the projected screen.',
      'Fill in route: DEP / DEST / ALT1 / ALT2 / ETD / ETA / FL / Aircraft.',
      'Enter additional briefing notes if needed.',
      'Select exactly 10 pre-test questions from the question bank.',
      'Select exactly 3 briefing key questions.',
      'Load archive data (METAR, TAF, SIGMET, charts) as fallback in case of network failure.',
      'Click ✓ Launch Session.',
      'Show QR codes (📱 button in topbar) — project or print for students.',
    ]
  },
  {
    phase: 'PHASE 1 — Pre-Test',
    who: 'Individual',
    duration: '8 min',
    color: '#3b82f6',
    steps: [
      'INSTRUCTOR: Click "Next →" to advance each question. Click "Show Answer" before moving on.',
      'STUDENTS: Open student.html (scan QR code). Enter your name and join.',
      'STUDENTS: Answer each question before the 20-second timer expires.',
      'SCORING: Correct answer → +20 pts at 1s, −1 pt/sec (min +1 at 20s). Wrong → −2 pts. No answer → −1 pt.',
      'INSTRUCTOR: Monitor submission progress on the right panel.',
      '⚠️ Sound alert at 10% remaining (48 sec). 🔴 Sound alert at 5% remaining (24 sec).',
    ]
  },
  {
    phase: 'PHASE 2 — Group Formation',
    who: 'Automatic',
    duration: '3–5 min',
    color: '#06b6d4',
    steps: [
      'INSTRUCTOR: Click "Confirm & Broadcast Groups".',
      'Groups are formed automatically by snake distribution (ranked by pre-test score).',
      'Highest scorer in each group = Leader (coordinator role only).',
      'STUDENTS: Note your group assignment on student.html.',
      'GROUPS: Each group scans their specific QR code to open group.html?g=G1 (G2, G3…).',
    ]
  },
  {
    phase: 'PHASE 3 — Mission Briefing',
    who: 'Instructor presents',
    duration: '5 min',
    color: '#f59e0b',
    steps: [
      'INSTRUCTOR: Present the route and task verbally to the class.',
      'ALL: Route details visible on student.html and group.html.',
      'GROUPS: Open the Met Sources tab on group.html.',
      'Remind students: all groups have the same route. Analysis is individual, decision is collective.',
      'Remind students: sources consulted must be recorded — required for oral briefing.',
    ]
  },
  {
    phase: 'PHASE 4 — Individual Analysis',
    who: 'Individual',
    duration: '25 min',
    color: '#3b82f6',
    steps: [
      'STUDENTS: Access live met sources on student.html (or archive if no internet).',
      'STUDENTS: Complete the analysis form:',
      '  · Primary hazard description (minimum 30 words)',
      '  · Severity: LOW / MODERATE / HIGH',
      '  · Operational impact (minimum 25 words)',
      '  · Preliminary assessment: GO / DELAY / NO-GO',
      '  · Sources consulted (list all URLs/references used)',
      'STUDENTS: Click ✓ Submit My Analysis when complete.',
      'INSTRUCTOR: Monitor submission progress per group on the dashboard.',
      '⚠️ Sound alert at 10% remaining (2:30). 🔴 Sound alert at 5% remaining (1:15).',
    ]
  },
  {
    phase: 'PHASE 5 — Decision Table + Group Decision',
    who: 'Group',
    duration: '20 min',
    color: '#22c55e',
    steps: [
      'GROUPS: Discuss individual analyses. Leader coordinates.',
      'GROUPS: Complete the structured Decision Table on group.html:',
      '  · DEPARTURE: wind, visibility, clouds, significant weather',
      '  · EN-ROUTE: wind, temperature, turbulence, CAT, icing, CB, jet stream',
      '  · ARRIVAL: wind, visibility, clouds, significant weather',
      '  · Add additional hazard rows as needed (free rows)',
      'GROUPS: Submit group decision — GO / DELAY / NO-GO.',
      '  · If DELAY: specify alternative ETD.',
      '  · Alternative FL optional.',
      '  · Justification minimum 60 words.',
      '  · List all sources consulted (required for oral briefing).',
      'INSTRUCTOR: Monitor decision table and decisions in real time.',
      '⚠️ Sound alert at 10% remaining (2 min). 🔴 Sound alert at 5% remaining (1 min).',
    ]
  },
  {
    phase: 'PHASE 6 — Challenge',
    who: 'Group',
    duration: '10 min',
    color: '#ef4444',
    steps: [
      'INSTRUCTOR: Click ⚡ Challenge in the topbar. Select type and enter text. Click Inject Now.',
      'Challenge types: New Met Information / Route Change / Time Pressure / Direct Question.',
      'GROUPS: Read the challenge on group.html. Discuss impact.',
      'GROUPS: Revise or confirm decision. Update Decision Table if needed.',
      'GROUPS: Submit revised decision with justification.',
      '⚠️ Sound alert at 10% remaining (1 min). 🔴 Sound alert at 5% remaining (30 sec).',
    ]
  },
  {
    phase: 'PHASE 7 — Briefing Key MCQ',
    who: 'Group',
    duration: '5 min',
    color: '#a855f7',
    steps: [
      'GROUPS: Answer 3 multiple-choice questions on group.html.',
      'All group members should discuss before submitting.',
      'SCORING: 3/3 correct → free access. 2/3 → −10 pts/member. 1/3 → −20 pts/member. 0/3 → −30 pts/member.',
      'All groups present the oral briefing regardless of key result.',
      'INSTRUCTOR: View key results on dashboard.',
    ]
  },
  {
    phase: 'PHASE 8 — Oral Briefing',
    who: 'Jury evaluation',
    duration: '~2 min per group',
    color: '#a855f7',
    steps: [
      'INSTRUCTOR: Select presenting group in the Oral Briefing panel.',
      'GROUP presents (~2 minutes):',
      '  1. Current synoptic situation — one sentence',
      '  2. Main hazard identified + operational significance',
      '  3. Group decision: GO / DELAY / NO-GO + justification',
      '  4. All sources consulted (mandatory)',
      '  5. Confidence level + one mitigation or contingency',
      'INSTRUCTOR: Score each student individually (1–3 per dimension):',
      '  · Meteorological Accuracy',
      '  · Decision Justified by Met Data',
      '  · Communication Clarity',
      'INSTRUCTOR: Click Save All Oral Scores before selecting next group.',
    ]
  },
  {
    phase: 'PHASE 9 — Results & Debrief',
    who: 'All',
    duration: '10 min',
    color: '#22c55e',
    steps: [
      'INSTRUCTOR: Final scores displayed automatically.',
      'Review KSA breakdown per student and per group.',
      'Click ⬇ Export JSON to save the full session report.',
      'Debrief: compare group decisions, discuss hazard identification quality.',
      'Highlight differences between individual analyses and group decisions.',
      'Discuss sources consulted — were the right sources used?',
    ]
  },
];
