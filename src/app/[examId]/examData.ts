// Centralized, authentic encyclopedic data bank for all 6 Railway Exams and their 20 subpages

export const examMetadata: Record<string, {
  name: string;
  fullName: string;
  badge: string;
  vacancies: string;
  applicants: string;
  salaryRange: string;
  notificationCen: string;
  level: string;
  posts: string[];
  medicalStandard: string;
  eyeVision: string;
  cbt1Pattern: string;
  cbt2Pattern: string;
  cbtDuration: string;
  syllabusTopics: { subject: string; items: string[] }[];
  jobDuties: string[][];
  salaryTable: string[][];
  cutoffData: string[][];
  faqList: { q: string; a: string }[];
  datesTable: string[][];
}> = {
  'rrb-ntpc': {
    name: 'RRB NTPC',
    fullName: 'Non-Technical Popular Categories (Graduate & Undergraduate Positions)',
    badge: '11,558 Vacancies Live',
    vacancies: '11,558+ Posts',
    applicants: '1.2 Crore+',
    salaryRange: '₹19,900 - ₹1,12,400',
    notificationCen: 'CEN 05/2026 (NTPC)',
    level: 'Levels 2, 3, 4, 5, and 6 Pay Scales',
    posts: [
      'Station Master', 
      'Goods Guard (Train Manager)', 
      'Commercial Apprentice', 
      'Traffic Assistant', 
      'Senior Clerk cum Typist', 
      'Junior Accounts Assistant', 
      'Commercial cum Ticket Clerk', 
      'Junior Clerk cum Typist'
    ],
    medicalStandard: 'A-2 to C-2 standard based on specific safety and general administrative priorities',
    eyeVision: 'A-2 posts (Station Master / Traffic Assistant) require 6/9, 6/9 naked eye vision without glasses. Strictly no LASIK, no correction, and normal near vision with color test standards.',
    cbt1Pattern: 'General Awareness: 40 Qs | Mathematics: 30 Qs | General Intelligence & Reasoning: 30 Qs (Total: 100 Qs)',
    cbt2Pattern: 'General Awareness: 50 Qs | Mathematics: 35 Qs | General Intelligence & Reasoning: 35 Qs (Total: 120 Qs)',
    cbtDuration: '90 Minutes per stage (120 Minutes for eligible PwBD candidates)',
    syllabusTopics: [
      { 
        subject: 'Mathematics', 
        items: [
          'Number System, Decimals, Fractions, L.C.M. and H.C.F.',
          'Ratio and Proportion, Percentages, Mensuration (2D & 3D formulas)',
          'Time and Work, Pipe & Cisterns, Time and Distance (relative speeds, train passing formulas)',
          'Simple Interest and Compound Interest, Profit and Loss',
          'Elementary Algebra, Geometry, Trigonometry, and Elementary Statistics'
        ] 
      },
      { 
        subject: 'General Intelligence & Reasoning', 
        items: [
          'Analogies, Alphabetical and Number Series completion',
          'Coding and Decoding, Mathematical Operations, Relations (Blood Relations)',
          'Syllogism, Jumbling, Venn Diagrams, Puzzle solving registers',
          'Data Sufficiency, Statement-Conclusion, Statement-Courses of Action',
          'Decision Making, Similarities and Differences, Analytical Reasoning'
        ] 
      },
      { 
        subject: 'General Awareness', 
        items: [
          'Current Events of National and International Importance (Current Affairs 2026)',
          'Games and Sports, Art and Culture of India, Indian Literature',
          'Monuments and Places of India, General Science and Life Science (up to CBSE 10th standard)',
          'History of India and Freedom Struggle, Physical, Social and Economic Geography of India and World',
          'Indian Polity and Constitution (Important Articles, Amendments, Parts)',
          'General Scientific & Technological Developments including Space and Nuclear Program of India',
          'UN and Other Important World Organizations, Environmental Issues Concerning India and World'
        ] 
      }
    ],
    jobDuties: [
      ['Station Master', 'Operating Department (Station Premises)', 'Directs and controls train movements, signaling operations, maintains safety protocols on platform tracks, coordinates with controllers during line blocks.'],
      ['Goods Guard (Train Manager)', 'Operating Department (Running crew cabin)', 'Supervises running safety, checks freight cargo security seals, coordinates brake power checks, and acts as train operations manager.'],
      ['Commercial Apprentice', 'Commercial Department (Divisional Offices)', 'Undergoes fast-track training to supervise booking offices, commercial billing, parcel handling, and claims divisions.'],
      ['Traffic Assistant', 'Operating Department (Metro / Zonal Offices)', 'Assists Station Masters, coordinates track signals, manages crowd safety registers, and monitors traffic density reports.'],
      ['Senior Clerk cum Typist', 'Personnel/General Administration (Headquarters)', 'Drafts official communications, updates employee promotion logs, compiles department registers, and manages administrative typing desks.']
    ],
    salaryTable: [
      ['Level 6 (Station Master / Commercial Apprentice)', '₹35,400 Basic Scale', '₹35,400', '₹62,000 - ₹68,000 (Includes high DA, HRA & Night Duty allowance)'],
      ['Level 5 (Goods Guard / JAA / Senior Clerk)', '₹29,200 Basic Scale', '₹29,200', '₹50,000 - ₹56,000 (Goods Guard includes high mileage running allowance)'],
      ['Level 4 (Traffic Assistant)', '₹25,500 Basic Scale', '₹25,500', '₹42,000 - ₹46,000'],
      ['Level 3 (Commercial cum Ticket Clerk)', '₹21,700 Basic Scale', '₹21,700', '₹36,000 - ₹40,000'],
      ['Level 2 (Junior Clerk / Typist)', '₹19,900 Basic Scale', '₹19,900', '₹32,000 - ₹35,500']
    ],
    cutoffData: [
      ['RRB Allahabad (Prayagraj)', '82.34', '74.52', '69.11', '62.45'],
      ['RRB Chandigarh', '80.52', '72.88', '67.45', '60.12'],
      ['RRB Mumbai', '76.84', '70.15', '64.33', '58.21'],
      ['RRB Secunderabad', '78.12', '71.44', '66.12', '59.88'],
      ['RRB Bangalore', '75.60', '68.90', '62.80', '57.40'],
      ['RRB Chennai', '74.80', '69.10', '63.20', '56.90']
    ],
    faqList: [
      { q: "Is LASIK surgery allowed for Station Master?", a: "No, Station Master requires the A-2 medical standard. Candidates who have undergone LASIK or any other corrective eye surgery are strictly disqualified." },
      { q: "Can final year college students apply for Graduate posts?", a: "No, candidates must have completed their graduation and possess the final degree certificate by the closing date of application registration." },
      { q: "What is the typing test requirement for Clerk Typist posts?", a: "Candidates must possess a typing speed of 30 words per minute (WPM) in English or 25 WPM in Hindi on a computer without the aid of spell checkers or formatting tools." },
      { q: "Is there a negative marking scheme in the CBT rounds?", a: "Yes, there is negative marking in both CBT Stage 1 and Stage 2. For every incorrect response, 1/3rd (0.33) of the marks assigned to that question will be deducted." },
      { q: "What is the selection process for Station Master?", a: "The selection process involves four stages: CBT Stage 1, CBT Stage 2, Computer-Based Aptitude Test (CBAT / Psycho Test), followed by Document Verification and A-2 Medical Examination." },
      { q: "Is the exam bilingual?", a: "Yes, the entire examination will be bilingual (English and Hindi), and candidates can also opt for local regional languages listed by the RRB." },
      { q: "How is the final merit list calculated for Station Master?", a: "For Station Master, the final merit list is calculated by giving 70% weightage to the CBT Stage 2 marks and 30% weightage to the CBAT (Aptitude Test) marks." }
    ],
    datesTable: [
      ['Official CEN Notification Released', 'February 15, 2026'],
      ['Online Registration Gateway Starts', 'February 20, 2026'],
      ['Online Registration Gateway Closes', 'March 25, 2026'],
      ['Correction & Modification Window', 'March 26 - April 05, 2026'],
      ['CBT Stage-1 Examination Schedule', 'July - August 2026'],
      ['CBT Stage-2 Examination Schedule', 'November 2026'],
      ['Skill Test (Typing) & CBAT (Psycho)', 'January 2027'],
      ['Document Verification & Medicals', 'March 2027']
    ]
  },
  'rrb-group-d': {
    name: 'RRB Group D',
    fullName: 'Railway Level-1 Recruitment (Track Maintainers, Assistants & Helpers)',
    badge: '1.03 Lakh Vacancies Live',
    vacancies: '1,03,769+ Posts',
    applicants: '1.8 Crore+',
    salaryRange: '₹18,000 - ₹56,900',
    notificationCen: 'CEN Group-D 2026',
    level: 'Level 1 Matrix (7th CPC Scale)',
    posts: [
      'Track Maintainer Grade IV', 
      'Assistant Pointsman', 
      'Assistant Bridge', 
      'Assistant Signal & Telecom', 
      'Assistant Depot (Store)', 
      'Assistant Locomotive Shed (Diesel/Electrical)', 
      'Hospital Assistant'
    ],
    medicalStandard: 'B-1, B-2, and C-1 safety standards depending on the technical nature of the post',
    eyeVision: 'B-1 standard posts require 6/9, 6/12 vision with or without glasses (lens power must not exceed 4D). Near vision is tested alongside standard color, binocular, and field-of-vision parameters.',
    cbt1Pattern: 'General Science: 25 Qs | Mathematics: 25 Qs | General Intelligence & Reasoning: 30 Qs | General Awareness & Current Affairs: 20 Qs (Total: 100 Qs)',
    cbt2Pattern: 'N/A (Single-stage written examination followed directly by Physical Efficiency Test - PET)',
    cbtDuration: '90 Minutes (120 Minutes for eligible PwBD candidates)',
    syllabusTopics: [
      { 
        subject: 'General Science', 
        items: [
          'Physics: Laws of Motion, Work, Power, Energy, Light (Refraction, Mirrors), Sound, Gravitation, Basic Electricity & Magnetism (NCERT 10th standard)',
          'Chemistry: Chemical Reactions, Acids, Bases & Salts, Periodic Table, Metals & Non-Metals, Carbon Compounds',
          'Life Sciences: Cell Biology, Human Digestive, Nervous, Circulatory & Skeletal Systems, Plant Physiology, Genetics, Ecosystems'
        ] 
      },
      { 
        subject: 'Mathematics', 
        items: [
          'Simplification, Decimals, BODMAS, Fractions, LCM & HCF',
          'Ratios and Proportions, Percentages, Averages, Profit and Loss',
          'Time and Work, Pipes & Cisterns, Speed, Time & Distance, Problems on Trains',
          'Simple & Compound Interest, Algebra equations, Geometry parameters, Trigonometry definitions'
        ] 
      },
      { 
        subject: 'Reasoning', 
        items: [
          'Analogy, Alphabetical & Number Series, Coding-Decoding',
          'Mathematical Operations, Syllogisms, Venn Diagrams',
          'Data Interpretation, Puzzle grids, Blood Relations',
          'Clocks and Calendars logic, Direction sense, Classification'
        ] 
      }
    ],
    jobDuties: [
      ['Track Maintainer Grade IV', 'Engineering Department (Track Maintenance)', 'Patrols tracks daily on foot, checks and tightens track clamps, keeps tracks free of obstructions, reports track fractures or washouts immediately.'],
      ['Assistant Pointsman', 'Operating Department (Railway Yards)', 'Coordinates shunting of train engines, manually switches track direction boxes, connects coupling links between train coaches under safety supervisors.'],
      ['Assistant Signal & Telecom', 'S&T Department (Control Cabins)', 'Assists in maintaining electronic signaling boxes, point operations, telephone lines, and block communications devices.'],
      ['Hospital Assistant', 'Medical Department (Zonal Hospitals)', 'Maintains outpatient queues, prepares patient history logs, transports medical files, and assists doctors in dispensary units.']
    ],
    salaryTable: [
      ['Level 1 (Track Maintainer Grade IV)', '₹18,000 Base Pay', '₹18,000', '₹29,000 - ₹32,000 (Includes Hardship/Risk Allowance of ₹2,700)'],
      ['Level 1 (Assistant Pointsman)', '₹18,000 Base Pay', '₹18,000', '₹29,500 - ₹33,000 (Includes Night Duty & Yard Shunting allowances)'],
      ['Level 1 (Hospital Assistant / Depot Helper)', '₹18,000 Base Pay', '₹18,000', '₹27,500 - ₹30,000']
    ],
    cutoffData: [
      ['RRB Patna (East Central)', '73.28', '66.12', '54.22', '48.11'],
      ['RRB Bhopal (West Central)', '71.15', '64.55', '53.11', '47.28'],
      ['RRB Secunderabad (South Central)', '69.12', '62.45', '51.34', '45.12'],
      ['RRB Kolkata (Eastern Railway)', '72.10', '65.80', '55.30', '48.90']
    ],
    faqList: [
      { q: "Is ITI qualification mandatory for all Level-1 posts?", a: "ITI is mandatory for technical department assistant posts (like Engineering, Electrical, Mechanical, and S&T). Non-technical departments (like Hospital Assistant) allow standard 10th-pass candidates." },
      { q: "What is the weight carrying standard in the Physical Efficiency Test (PET)?", a: "Male candidates must lift and carry 35 kg of weight for a distance of 100 meters in 2 minutes in a single attempt. Female candidates must carry 20 kg for 100 meters in 2 minutes." },
      { q: "What is the running standard in the PET stage?", a: "Male candidates must run 1000 meters in 4 minutes 15 seconds. Female candidates must run 1000 meters in 5 minutes 40 seconds (single attempt only)." },
      { q: "Are there multiple stages of written exams in RRB Group D?", a: "No, there is only a single CBT (Computer-Based Test) written exam. Candidates who clear the written exam are called directly for the Physical Efficiency Test (PET)." },
      { q: "Is there normalisation in calculating Group D marks?", a: "Yes, because the exam is held across a massive number of shifts over multiple weeks, a standardized Percentile-Based Normalisation formula is used to calculate merit marks." },
      { q: "Can PwBD candidates skip the PET running rounds?", a: "Yes, candidates under the PwBD (Persons with Benchmark Disabilities) category are exempted from appearing in the Physical Efficiency Test (PET)." }
    ],
    datesTable: [
      ['CEN Group D Official Release', 'March 10, 2026'],
      ['Online Application Submission Starts', 'March 15, 2026'],
      ['Online Application Submission Closes', 'April 18, 2026'],
      ['CBT Written Examination Schedule', 'September - October 2026'],
      ['PET Physical Test Announcements', 'December 2026'],
      ['DV & Medical Verification Rounds', 'February 2027']
    ]
  },
  'rrb-alp': {
    name: 'RRB ALP',
    fullName: 'Assistant Loco Pilot & Technician Recruitment',
    badge: '18,799 Vacancies Live',
    vacancies: '18,799+ Posts',
    applicants: '40 Lakh+',
    salaryRange: '₹19,900 - ₹1,12,400',
    notificationCen: 'CEN 01/2026 (Loco Crew)',
    level: 'Level 2 Pay Scale Matrix',
    posts: [
      'Assistant Loco Pilot (ALP)', 
      'Technician Grade III (Electrical)', 
      'Technician Grade III (Mechanical)', 
      'Technician Grade III (S&T / Telecommunication)'
    ],
    medicalStandard: 'A-1 Standard (Safety-critical running crew fitness)',
    eyeVision: '6/6, 6/6 naked eye vision without glasses. No lenses, no spectacles, strictly no LASIK or eye surgery allowed. Excellent color vision, binocular vision, and field-of-vision test clearance are mandatory.',
    cbt1Pattern: 'Mathematics: 20 Qs | General Science: 20 Qs | Mental Ability: 25 Qs | General Awareness: 10 Qs (Total: 75 Qs)',
    cbt2Pattern: 'Part A (Maths, Science, Reasoning, Basic Engg): 100 Qs | Part B (Core Technical Trade Paper): 75 Qs (Total: 175 Qs)',
    cbtDuration: 'CBT-1: 60 Minutes | CBT-2: 2 Hours 30 Minutes (Part A: 90 Mins, Part B: 60 Mins)',
    syllabusTopics: [
      { 
        subject: 'Basic Science & Engineering (CBT-2 Part A)', 
        items: [
          'Engineering Drawing: Projections, Views, Drawing Instruments, Lines, Geometric Figures, Symbolic Representation',
          'Basic Physics Units: Measurements, Mass, Weight and Density, Speed and Velocity, Work, Power and Energy',
          'Thermodynamics: Heat and Temperature, Pressure scales, Heat engines',
          'Basic Electricity: Circuits, Ohm’s Law, Kirchhoff’s laws, Resistance combinations',
          'Occupational Safety & Health: First Aid precautions, Environment Education, IT Literacy basic tools'
        ] 
      },
      { 
        subject: 'Mathematics & Mental Ability', 
        items: [
          'BODMAS, Decimals, Ratios, Average, Percentages, Work-Time, Train relative speed',
          'Analogy, Logic Series, Coding decodings, Venn diagrams, Syllogisms',
          'Geometrical structures, height and distance algebra'
        ] 
      },
      { 
        subject: 'Core Trade Subjects (CBT-2 Part B)', 
        items: [
          'Electrical Trade: Electrician, Wireman, Instrument Mechanic syllabus',
          'Mechanical Trade: Fitter, Machinist, Turner, Diesel Mechanic, Motor Vehicle syllabus',
          'Electronics Trade: Electronics Mechanic, Radio & TV mechanic syllabus'
        ] 
      }
    ],
    jobDuties: [
      ['Assistant Loco Pilot (ALP)', 'Locomotive Engine Cab (Running Crew)', 'Assists the Main Loco Pilot (LP) with signal calling, monitors air pressure and battery voltages, controls brake pressure valves, and patrols engine rooms during running.'],
      ['Technician Grade III', 'Loco Sheds / Carriage Workrooms', 'Performs maintenance check-ups of passenger bogies, checks brake systems, repairs traction motors, and coordinates signal boxes wiring.']
    ],
    salaryTable: [
      ['Level 2 (Assistant Loco Pilot - ALP)', '₹19,900 Base Pay', '₹19,900', '₹48,000 - ₹56,000 (Includes high running mileage allowance calculated per km travelled)']
    ],
    cutoffData: [
      ['RRB Ajmer', '68.12', '58.45', '48.90', '42.33'],
      ['RRB Secunderabad', '66.89', '57.88', '47.12', '41.88'],
      ['RRB Bangalore', '65.20', '56.40', '46.10', '40.20']
    ],
    faqList: [
      { q: "Is naked eye 6/6 vision mandatory for ALP?", a: "Yes, A-1 medical standard is mandatory for Assistant Loco Pilot. Candidates must have 6/6 vision in both eyes without the aid of glasses or lenses." },
      { q: "Are candidates with a B.Tech degree eligible to apply?", a: "Yes, candidates holding a B.Tech Degree, B.E., or 3-Year Engineering Diploma in Mechanical, Electrical, Electronics, or Automobile Engineering are fully eligible." },
      { q: "What is Part B of CBT Stage-2?", a: "Part B is a technical trade-qualifying paper containing 75 questions based on your ITI/Diploma engineering trade. You must secure a minimum of 35% qualifying marks to pass Part B." },
      { q: "Does Part B marks count in preparing the final merit list?", a: "No, Part B is strictly qualifying in nature. Its marks are not added to the final merit score. However, you must pass Part B to have your Part A paper evaluated." },
      { q: "What is the CBAT (psycho test) in RRB ALP?", a: "The CBAT consists of five battery tests to evaluate spatial scanning, memory power, concentration, and speed-accuracy index. A minimum score of 42 (T-Score) is mandatory in each battery test." },
      { q: "Is there normalisation in CBT Stage 2?", a: "Yes, normalized marks are calculated for Part A of CBT Stage 2. Part B marks are normalized if held across multiple shifts to check qualification thresholds." }
    ],
    datesTable: [
      ['CEN ALP Official Notification Release', 'January 18, 2026'],
      ['Online Registration Submissions Start', 'January 22, 2026'],
      ['Online Registration Submissions Close', 'February 24, 2026'],
      ['CBT Stage-1 Written Examinations', 'June 2026'],
      ['CBT Stage-2 Written Examinations', 'August 2026'],
      ['CBAT (Psycho Aptitude Test) Schedule', 'October 2026'],
      ['Medical Fit Checks & DV Panels', 'December 2026']
    ]
  },
  'rrb-je': {
    name: 'RRB JE',
    fullName: 'Junior Engineer (Civil, Electrical, Mechanical, S&T, and IT branches)',
    badge: '7,951 Vacancies Live',
    vacancies: '7,951+ Posts',
    applicants: '20 Lakh+',
    salaryRange: '₹35,400 - ₹1,12,400',
    notificationCen: 'CEN 03/2026 (JE)',
    level: 'Level 6 Pay Matrix Scale',
    posts: [
      'Junior Engineer (Civil)', 
      'Junior Engineer (Electrical)', 
      'Junior Engineer (Mechanical)', 
      'Junior Engineer (Signal & Telecommunication)',
      'Junior Engineer (Information Technology)',
      'Depot Material Superintendent (DMS)',
      'Chemical & Metallurgical Assistant (CMA)'
    ],
    medicalStandard: 'B-1, B-2, and C-1 safety standards depending on specific technical engineering branches',
    eyeVision: 'B-1 standard requires 6/9, 6/12 vision with or without glasses (lens power limit 4D). Physical safety-critical field inspections require binocular vision, field-of-vision, and standard color test clearance.',
    cbt1Pattern: 'Mathematics: 30 Qs | General Science: 30 Qs | General Intelligence & Reasoning: 25 Qs | General Awareness: 15 Qs (Total: 100 Qs)',
    cbt2Pattern: 'Technical Branch Core Paper: 100 Qs | General Subjects (Physics/Chemistry, Environment, IT): 50 Qs (Total: 150 Qs)',
    cbtDuration: 'CBT-1: 90 Minutes | CBT-2: 120 Minutes (Eligible PwBD candidates get 1/3rd extra time)',
    syllabusTopics: [
      { 
        subject: 'Technical Core (Civil Engineering)', 
        items: [
          'Building Materials: Physical properties of stone, bricks, lime, timber, concrete',
          'Surveying: Principles of surveying, chain surveying, compass surveying, leveling, contouring',
          'Estimating, Costing and Valuation: Rate analysis, valuation methods',
          'Soil Mechanics: Permeability, shear strength, bearing capacity',
          'Structural Engineering: RCC structures, steel design, hydraulics, highway engineering'
        ] 
      },
      { 
        subject: 'Technical Core (Electrical Engineering)', 
        items: [
          'Basic Electrical Networks: Circuit laws, AC fundamentals',
          'Electrical Machines: Single-phase and three-phase motor windings, generators, transformers',
          'Power Systems: Generation, transmission, and protection switchgears',
          'Measurement & Instrumentation: Ammeters, voltmeters, energy meters'
        ] 
      },
      { 
        subject: 'Technical Core (Mechanical Engineering)', 
        items: [
          'Strength of Materials: Stress, strain, shear force, bending moments',
          'Fluid Mechanics: Flow properties, hydraulic pumps, turbine parameters',
          'Thermodynamics: Heat cycles, air compressors, IC engines'
        ] 
      }
    ],
    jobDuties: [
      ['Junior Engineer (Civil)', 'Engineering/Track Maintenance Office', 'Supervises track repairs, concrete sleepers checks, inspects bridge structures safety, and manages construction rosters.'],
      ['Junior Engineer (Electrical)', 'Loco Sheds / Traction Power Offices', 'Supervises electric locomotive overhauls, keeps pantograph contacts smooth, and manages zonal power substations logs.'],
      ['Junior Engineer (S&T)', 'Signal Cabins / Yard Control Rooms', 'Maintains signaling systems, electronic route locking circuits, wireless telemetry, and optical fiber communications.']
    ],
    salaryTable: [
      ['Level 6 (Junior Engineer - all branches)', '₹35,400 Basic Scale', '₹35,400', '₹58,500 - ₹65,000 (Includes Dearness Allowance, HRA, and DA on travel)']
    ],
    cutoffData: [
      ['RRB Allahabad (Civil)', '74.22', '68.54', '60.11', '55.34'],
      ['RRB Mumbai (Electrical)', '72.15', '66.40', '58.90', '54.10'],
      ['RRB Chennai (Mechanical)', '71.80', '65.90', '58.20', '53.80']
    ],
    faqList: [
      { q: "What is the educational qualification required for RRB JE?", a: "Candidates must hold an Engineering Degree or a 3-Year Engineering Diploma in Civil, Mechanical, Electrical, Electronics, or Computer Science branches." },
      { q: "Are virtual scientific calculators allowed in the written exam?", a: "Yes, an on-screen virtual scientific calculator is permitted and provided during the CBT Stage 2 exam only. No physical calculators are allowed." },
      { q: "Can a candidate apply for multiple engineering branches?", a: "No, candidates must choose their specific exam group based on their educational qualifications. Applying for multiple branches in a single zone is not permitted." },
      { q: "What is the syllabus of General Awareness in CBT-2?", a: "CBT-2 General Awareness includes Physics/Chemistry (up to CBSE 10th standard), basics of Computers and IT, environmental protection laws, and basic pollution controls." },
      { q: "Is there a weightage of CBT Stage 1 in final selection?", a: "No, CBT Stage 1 is qualifying. Its marks are used only to shortlist candidates for CBT Stage 2. The final merit list is prepared 100% based on CBT Stage 2 marks." },
      { q: "Is there any bond period after joining as Junior Engineer?", a: "Yes, candidates must sign a service bond promising to serve the Indian Railways for a minimum period of 3 years from the date of completion of training." }
    ],
    datesTable: [
      ['Official CEN JE Notification Released', 'April 10, 2026'],
      ['Online Application Portal Starts', 'April 15, 2026'],
      ['Online Application Portal Closes', 'May 20, 2026'],
      ['CBT Stage-1 Written Examination', 'August 2026'],
      ['CBT Stage-2 Written Examination', 'November 2026'],
      ['Document Verification & Medical Fit Tests', 'January 2027']
    ]
  },
  'rpf-constable': {
    name: 'RPF Constable',
    fullName: 'Railway Protection Force (RPF) Constable recruitment',
    badge: '4,208 Vacancies Live',
    vacancies: '4,208+ Posts',
    applicants: '50 Lakh+',
    salaryRange: '₹21,700 - ₹69,100',
    notificationCen: 'CEN RPF 02/2026',
    level: 'Level 3 CPC Pay Scale',
    posts: [
      'RPF Constable (Male)', 
      'RPF Constable (Female)'
    ],
    medicalStandard: 'B-1 standard security force medical fitness guidelines',
    eyeVision: '6/9, 6/9 in both eyes with or without glasses. Excellent field-of-vision and color vision checks are mandatory for force safety clearances.',
    cbt1Pattern: 'General Awareness: 50 Qs | Arithmetic: 35 Qs | General Intelligence & Reasoning: 35 Qs (Total: 120 Qs)',
    cbt2Pattern: 'N/A (Single-stage written CBT exam followed directly by Physical Measurement and Physical Efficiency Tests)',
    cbtDuration: '90 Minutes (120 Minutes for eligible PwBD candidates)',
    syllabusTopics: [
      { 
        subject: 'Arithmetic', 
        items: [
          'Number System, Percentages, Ratios & Proportions',
          'Average, Profit & Loss, Simple & Compound Interest',
          'Mensuration (areas, volumes of shapes)',
          'Time, Speed & Distance, Work equations, Decimal calculations'
        ] 
      },
      { 
        subject: 'General Awareness', 
        items: [
          'Indian History, Freedom Struggle timeline, art & culture',
          'Geography of India, economy structures, static GK flags',
          'Indian Constitution, Parliament system, basic rights',
          'General Science (Physics, Chemistry, Biology up to 10th class)'
        ] 
      },
      { 
        subject: 'Reasoning', 
        items: [
          'Spatial visualization, visual memory index, coding decoding',
          'Syllogistic reasoning completing, relations mapping',
          'Venn Diagrams, analogy logic'
        ] 
      }
    ],
    jobDuties: [
      ['RPF Constable', 'Railway Stations / Divisional Escorts', 'Patrols station platforms, escorts night passenger trains to check crime, secures central railway yards, and coordinates passenger safety during heavy festival seasons.']
    ],
    salaryTable: [
      ['Level 3 (RPF Constable)', '₹21,700 Base Pay', '₹21,700', '₹35,000 - ₹38,500 (Includes high food allowances, uniform maintenance, and city allowances)']
    ],
    cutoffData: [
      ['Group A (Southern Railway Zone)', '83.82', '79.54', '77.22', '71.12'],
      ['Group B (Western Railway Zone)', '85.12', '80.22', '76.90', '70.80'],
      ['Group C (Eastern Railway Zone)', '87.45', '82.11', '78.50', '72.40']
    ],
    faqList: [
      { q: "What is the physical run requirement for RPF Constable?", a: "Male candidates must run 1600 meters in 5 minutes 45 seconds (single attempt). Female candidates must run 800 meters in 3 minutes 40 seconds." },
      { q: "What are the jump targets for physical test?", a: "Male candidates must clear a 14-feet Long Jump and a 4-feet High Jump. Female candidates must clear a 9-feet Long Jump and a 3-feet High Jump." },
      { q: "What are the physical height measurements required?", a: "Male candidates must have a height of 165 cm (General/OBC) or 160 cm (SC/ST). Female candidates must have a height of 157 cm (General/OBC) or 152 cm (SC/ST)." },
      { q: "Is there any chest expansion check for males?", a: "Yes, male candidate chest measurements must be 80 cm unexpanded and 85 cm expanded (General/OBC), or 76.2 cm unexpanded and 81.2 cm expanded (SC/ST)." },
      { q: "Are there any physical test exemptions for veterans?", a: "Yes, Ex-Servicemen are exempted from physical efficiency tests (running and jumping) but must clear the physical measurement tests (height/chest checks)." },
      { q: "Can we apply to multiple zones?", a: "No, candidates can submit only one application choosing their target RPF group (A, B, C, D, E, F). Submitting multiple applications leads to summary rejection." }
    ],
    datesTable: [
      ['Official RPF Notification Issued', 'January 10, 2026'],
      ['Online Forms Submissions Open', 'January 15, 2026'],
      ['Online Forms Submissions Close', 'February 18, 2026'],
      ['CBT Written Shift Schedules', 'May - June 2026'],
      ['PET / PMT announcements', 'July 2026'],
      ['Final Merit List & Cadet Training Panels', 'October 2026']
    ]
  },
  'rpf-si': {
    name: 'RPF SI',
    fullName: 'Railway Protection Force (RPF) Sub Inspector recruitment',
    badge: '452 Vacancies Live',
    vacancies: '452+ Posts',
    applicants: '15 Lakh+',
    salaryRange: '₹35,400 - ₹1,12,400',
    notificationCen: 'CEN RPF 01/2026',
    level: 'Level 6 Pay Matrix Scale',
    posts: [
      'Sub Inspector (Male)', 
      'Sub Inspector (Female)'
    ],
    medicalStandard: 'B-1 standard security force executive medical fitness rules',
    eyeVision: '6/9, 6/9 in both eyes with or without glasses. Binocular vision, field of vision, and standard color chart checks are mandatory to maintain force command parameters.',
    cbt1Pattern: 'General Awareness: 50 Qs | Arithmetic: 35 Qs | General Intelligence & Reasoning: 35 Qs (Total: 120 Qs)',
    cbt2Pattern: 'N/A (Single-stage written examination followed by Physical Measurement & Efficiency checks)',
    cbtDuration: '90 Minutes (120 Minutes for eligible PwBD candidates)',
    syllabusTopics: [
      { 
        subject: 'General Awareness', 
        items: [
          'Indian History, Ancient to Modern Freedom Struggle, landmark events',
          'Constitution of India, Fundamental Rights, Directive Principles of State Policy, Parliament & state judiciaries',
          'Geography: Physical & economic resources, crop locations, minerals maps',
          'Current affairs, national awards, books, sports trophies'
        ] 
      },
      { 
        subject: 'Arithmetic', 
        items: [
          'Integers, decimals, BODMAS, profit & loss, speed ratios',
          'Interest calculations (simple & compound), geometry, statistics charts'
        ] 
      },
      { 
        subject: 'Reasoning', 
        items: [
          'Analogy, classification logic, puzzle completing registers',
          'Venn diagrams, logic puzzles, seating configurations'
        ] 
      }
    ],
    jobDuties: [
      ['RPF Sub Inspector', 'RPF Station / Headquarter divisions', 'Acts as security division in-charge, leads patrolling constable squads, investigates passenger crime cases on trains, drafts FIR logs, compiles security statistics, and reports to divisional commanders.']
    ],
    salaryTable: [
      ['Level 6 (Sub Inspector)', '₹35,400 Basic Scale', '₹35,400', '₹58,000 - ₹64,000 (Includes high food allowances, uniform maintenance, and city allowances)']
    ],
    cutoffData: [
      ['Group A (Southern Zonal SI Cutoff)', '94.52', '89.12', '82.44', '78.50'],
      ['Group B (Western Zonal SI Cutoff)', '95.80', '90.40', '83.10', '79.20']
    ],
    faqList: [
      { q: "What is the physical run standard for RPF SI?", a: "Male candidates must run 1600 meters in 6 minutes 30 seconds (single attempt). Female candidates must run 800 meters in 4 minutes." },
      { q: "What are the physical measurement requirements for RPF SI?", a: "Male height must be 165 cm (General/OBC) or 160 cm (SC/ST). Female height must be 157 cm (General/OBC) or 152 cm (SC/ST)." },
      { q: "What are the jump targets in RPF SI physical test?", a: "Male candidates must clear a 12-feet Long Jump and a 3-feet 9-inches High Jump. Female candidates must clear a 9-feet Long Jump and a 3-feet High Jump." },
      { q: "Is graduation mandatory to apply for RPF SI?", a: "Yes, candidates must possess a Graduate Degree (Bachelor\'s Degree in Arts, Science, Commerce, Engineering, or any equivalent field) from a recognized university." },
      { q: "What is the training period for Sub Inspector?", a: "Selected candidates undergo 1 year of rigorous physical and legal training at RPF training academies, where they receive a monthly basic stipend." },
      { q: "How is the final merit list calculated for RPF SI?", a: "The final merit list is prepared 100% based on written CBT exam marks. The physical test is purely qualifying, but clearing it is absolutely mandatory to make the merit list." }
    ],
    datesTable: [
      ['Official RPF SI Notification Issued', 'January 10, 2026'],
      ['Online Registration Gateway Starts', 'January 15, 2026'],
      ['Online Registration Gateway Closes', 'February 18, 2026'],
      ['CBT Written Shift Schedules', 'May - June 2026'],
      ['PET / PMT Announcements', 'July 2026'],
      ['Final Merit List & Academy Training Panels', 'October 2026']
    ]
  }
};

export const generateSubpageContent = (examId: string, subpageId: string) => {
  const meta = examMetadata[examId] || examMetadata['rrb-ntpc'];
  const examName = meta.name;

  const db: Record<string, {
    title: string;
    description: string;
    badge?: string;
    tableHeaders?: string[];
    tableData?: string[][];
    bulletsTitle?: string;
    bullets?: string[];
    infoBox?: string;
  }> = {
    notification: {
      title: `${examName} 2026 Official Recruitment Notification (${meta.notificationCen})`,
      description: `The Railway Recruitment Boards (RRB) have officially released the employment notification (${meta.notificationCen}) detailing staffing requirements across zonal wings. Candidates are advised to register online.`,
      badge: 'Official CEN Released',
      tableHeaders: ['Recruitment Parameters', 'Official Zonal Details'],
      tableData: [
        ['Notification Code', meta.notificationCen],
        ['Pay Level Scale', meta.level],
        ['Zonal Positions', meta.posts.join(', ')],
        ['Filing Portal', 'Official Regional Zonal Portals (Active)']
      ],
      bulletsTitle: 'Key Recruitment Standards:',
      bullets: [
        `All candidates must check their eligibility and visual standard scales prior to registration.`,
        `Biometric registrations are standard at all national examination gates.`,
        `Online application corrections require a modification fee of ₹250 (non-refundable).`,
        `Candidates must ensure their Aadhaar is linked to prevent biometric authentication issues during verification.`
      ]
    },
    vacancy: {
      title: `${examName} 2026 Zonal & Post-Wise Vacancy Allocations`,
      description: `A total of ${meta.vacancies} are distributed across target board regions under standard safety allocations.`,
      badge: `${meta.vacancies} Live`,
      tableHeaders: ['Target Posts Grade', 'Vacancies Range (Zonal Scale)'],
      tableData: meta.posts.map(p => [p, 'Distributed across all 21 Zonal boards']),
      bulletsTitle: 'Top Regional Recruiters:',
      bullets: [
        `Prayagraj (Allahabad Zone) & Northern (New Delhi Zone) traditionally record high vacancies.`,
        `Check specific zonal sheets before completing your registration.`,
        `Zonal choices cannot be altered under any circumstances after final form locking.`,
        `Submitting multiple zonal registrations results in immediate cancellation of candidature.`
      ]
    },
    dates: {
      title: `${examName} 2026 Calendar & Key Milestones`,
      description: `Do not miss the online dates constraints. Late registrations are summarily rejected.`,
      tableHeaders: ['Timeline Milestone', 'Active Schedule'],
      tableData: meta.datesTable,
      infoBox: 'E-Call letters are published 4 days prior to your shift. Candidates are recommended to register early to secure local centers.'
    },
    eligibility: {
      title: `${examName} Eligibility Criteria, Age Limits & Exceptions`,
      description: `Verify that you satisfy the criteria in quantitative education and visual standards.`,
      bulletsTitle: 'Educational Qualification & Limits:',
      bullets: [
        `Educational Standard: ${meta.posts.join(' or ')} require specific technical degrees or certifications.`,
        `Age Guidelines: General Category is standard. Additional age relaxations apply (OBC +3 Years, SC/ST +5 Years).`,
        `For technical posts (like ALP and JE), B.Tech or 3-Year Diploma is required.`,
        `For undergraduate posts (like NTPC Level 2 & 3), standard 12th-pass or matriculation qualifications are fully eligible.`
      ]
    },
    medical: {
      title: `${examName} Medical Classifications & Ocular Standards`,
      description: `Railways safety-critical positions require exceptional visual stamina.`,
      tableHeaders: ['Safety Parameter', 'Zonal Medical Standard'],
      tableData: [
        ['Required Medical Classification', meta.medicalStandard],
        ['Naked Eye Vision Limits', meta.eyeVision]
      ],
      infoBox: 'Refractive surgery (such as LASIK) strictly disqualifies candidates from safety-critical crew roles.'
    },
    pattern: {
      title: `${examName} CBT Examination Scheme & Timings`,
      description: `The exam pattern consists of multi-choice objective grids under strict timers.`,
      tableHeaders: ['Exam Stage', 'Written Scheme Overview', 'Duration Limit'],
      tableData: [
        ['CBT Stage-1 Written', meta.cbt1Pattern, meta.cbtDuration],
        ['CBT Stage-2 (If applicable)', meta.cbt2Pattern ? meta.cbt2Pattern : 'N/A (Direct PET Check)', meta.cbtDuration]
      ],
      bulletsTitle: 'Marking & Objections Policies:',
      bullets: [
        `Negative Marking: 1/3rd (0.33) marks are deducted per incorrect response.`,
        `Percentile Normalization rules are standard to maintain parity across shifts.`,
        `Sectional cutoffs are not active, but scoring above minimum qualifying marks (UR: 40%, OBC: 30%, SC: 30%, ST: 25%) is mandatory.`,
        `A virtual scientific calculator is made available on the computer screen for the CBT-2 round of RRB JE.`
      ]
    },
    syllabus: {
      title: `${examName} 2026 Core Subjects Detailed Syllabus`,
      description: `Complete CBSE 10th-standard structural checklists for all section categories.`,
      bulletsTitle: 'Key Topics Checklist:',
      bullets: meta.syllabusTopics.flatMap(t => t.items.map(i => `${t.subject}: ${i}`))
    },
    pyqs: {
      title: `${examName} Solved Shift Papers Archives`,
      description: `Reviewing actual papers from past recruitment boards is vital to test preparation.`,
      bulletsTitle: 'Available Past Shifts (Attempt Bilingual Mocks on PrepGrind):',
      bullets: [
        `Official Solved Shift Paper 2025 - Attempt Live on PrepGrind (Mathematics & GA sections fully explained)`,
        `Official Solved Shift Paper 2024 - Attempt Live on PrepGrind (Full bilingual solutions with speed strategies)`,
        `Official Solved Shift Paper 2023 - Attempt Live on PrepGrind (Complete technical trade answers for ALP and JE)`,
        `Official Solved Shift Paper 2022 - Attempt Live on PrepGrind (Step-by-step reasoning logic keys)`
      ]
    },
    mocks: {
      title: `${examName} High-Density Premium Mock Test Series`,
      description: `Supercharge your exam preparation with industry-standard simulated mocks built for the 2026 CEN.`,
      bulletsTitle: 'What is Included in the Test Pack:',
      bullets: [
        `35 Full-Length simulated mocks (Fully bilingual in English & Hindi).`,
        `40 Sectional Speed boosters to target under 30 seconds solving limits.`,
        `Zonal leaderboard comparisons with 50,000+ candidates on PrepGrind.`,
        `Daily bilingual quizzes to test current affairs indexes.`
      ]
    },
    strategy: {
      title: `${examName} Topper 30-Day Strategy Roadmap`,
      description: `Learn the exact revision schedules followed by selected aspirants to secure qualifying percentiles.`,
      bulletsTitle: 'Strategic Guidelines:',
      bullets: [
        `Devote first 3 hours to quantitative Arithmetic calculations log files.`,
        `Attempt 1 full-length simulated mock test daily on PrepGrind, followed by deep diagnostic reviews.`,
        `Focus daily on NCERT science textbooks for Group D and ALP.`,
        `Consistently solve previous year shift papers to identify repeated patterns.`
      ]
    },
    'job-profile': {
      title: `${examName} Zonal Job Profiles & Core Daily Duties`,
      description: `Learn your operational duties, promotion pathways, and office locations before filing zonal choices.`,
      tableHeaders: ['Designated Post', 'Office Location', 'Core Daily Duties'],
      tableData: meta.jobDuties,
      bulletsTitle: 'Key Working Benefits:',
      bullets: [
        `Structured, time-bound promotion paths inside central railway ranks.`,
        `High community status, complete job security, and housing options.`,
        `Bumper medical covers for employee, spouse, and dependents.`,
        `Free travel passes across national rail grids for dependents.`
      ]
    },
    salary: {
      title: `${examName} Pay Matrix, Basic Scales & Allowances`,
      description: `Comprehensive 7th CPC central pay allocations and monthly allowance benefits.`,
      tableHeaders: ['Active Grade Level', 'Base CPC Pay Scale', 'Basic Pay Scale', 'Average Monthly Gross'],
      tableData: meta.salaryTable,
      bulletsTitle: 'Key Allowances Added to Monthly Salary:',
      bullets: [
        `Dearness Allowance (DA) indexed quarterly to national consumer prices.`,
        `House Rent Allowance (HRA) up to 30% based on city type (X, Y, Z).`,
        `Free travel passes across national rail grids for dependents.`,
        `Running Allowance calculated per kilometer travelled for ALP and Train Managers.`
      ]
    },
    preference: {
      title: `${examName} Step-by-Step Post Preference Guide`,
      description: `Order your preference fields with extreme care during form submissions as edits are strictly prohibited.`,
      bulletsTitle: 'Key Priority Ordering Rules:',
      bullets: [
        `Prioritize high level posts (Level 6 & 5) if you meet the visual ocular standards.`,
        `Verify safety vs non-safety working limits beforehand.`,
        `Check specific zonal sheets before completing your registration.`,
        `Zonal choices cannot be altered under any circumstances after final form locking.`
      ]
    },
    centres: {
      title: `${examName} 2026 Examination Venues & City Allocations`,
      description: `Railway Recruitment Boards distribute exam centers across key cities within board boundaries to ensure comfortable transit.`,
      infoBox: 'Female and PwBD candidates are traditionally allotted exam centers close to their residential towns.'
    },
    'admit-card': {
      title: `How to Download ${examName} 2026 E-Call Letter`,
      description: `Official E-Call letters are published 4 days prior to your written shift. Keep your board logins active.`,
      bulletsTitle: 'Steps to Download:',
      bullets: [
        `Navigate to your registered regional board portal.`,
        `Input registration login ID and password (Date of Birth in DD-MM-YYYY format).`,
        `Save and print your bilingual card on A4 paper.`,
        `Check exact reporting timings; gates close strictly 45 minutes before shift start.`
      ]
    },
    'day-rules': {
      title: `${examName} Exam Day Gate Rules & Security Checks`,
      description: `Strict security guidelines are operational at entry gates. Violations result in lifelong debarment.`,
      bulletsTitle: 'Mandatory Guidelines:',
      bullets: [
        `Aadhaar-based biometric checks are performed at entry gates.`,
        `Metallic ornaments, smartwatches, and bluetooth devices are strictly banned.`,
        `Carry original Aadhaar card, E-Call letter, and two passport-sized color photographs.`,
        `No candidates are allowed to exit the examination hall before shift completion.`
      ]
    },
    normalization: {
      title: `${examName} Percentile-Based Score Normalization Rules`,
      description: `Since exams are taken across multiple shifts, raw marks are normalized to ensure absolute fairness.`,
      infoBox: 'Zonal percentile matrices translate candidate raw marks to normalize paper difficulty indexes.'
    },
    'answer-key': {
      title: `${examName} Official Answer Key Objections Portal`,
      description: `Raw answer key files are published within 10 days of exam completion.`,
      bulletsTitle: 'Objection Portal Rules:',
      bullets: [
        `Fee for challenging questions is ₹50 per query, refunded if the challenge is accepted.`,
        `Final board answer keys determine the final merit positions.`,
        `Objections must be backed by official NCERT textbooks references.`,
        `Objection window is kept open for exactly 7 days after raw answer keys release.`
      ]
    },
    cutoffs: {
      title: `${examName} Previous Year Qualifying Zonal Cut-offs`,
      description: `Compare past cutoff values to plan safe targets for your mock tests.`,
      tableHeaders: ['Zonal Board', 'General UR', 'OBC Category', 'SC Category', 'ST Category'],
      tableData: meta.cutoffData
    },
    result: {
      title: `${examName} Merit Lists & Document Verification`,
      description: `Qualified aspirants undergo a final document check followed by zonal medical examinations.`,
      infoBox: 'Final divisional panel allotments are provisional and subject to standard medical check results.'
    }
  };

  return db[subpageId] || db['notification'];
};
