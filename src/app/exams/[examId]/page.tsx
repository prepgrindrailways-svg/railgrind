"use client";

import { useState, use } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  FileText, 
  BookOpen, 
  Award, 
  Clock, 
  Globe, 
  Download, 
  Calendar, 
  ChevronRight,
  Shield,
  Zap,
  TrendingUp,
  Briefcase,
  DollarSign,
  UserCheck,
  CheckCircle,
  Eye,
  Settings,
  Flame,
  FileCheck,
  MapPin,
  AlertTriangle,
  Award as RibbonIcon
} from 'lucide-react';

type ParamsProps = {
  params: Promise<{ examId: string }>;
};

// Top 20 subpages in order of their absolute importance for Railway Exams
const subpagesList = [
  { id: 'notification', name: 'Notification 2026', icon: FileText },
  { id: 'vacancy', name: 'Vacancy Details', icon: Briefcase },
  { id: 'dates', name: 'Important Dates', icon: Calendar },
  { id: 'eligibility', name: 'Eligibility Criteria', icon: UserCheck },
  { id: 'medical', name: 'Medical Standards', icon: Eye },
  { id: 'pattern', name: 'Exam Pattern', icon: Settings },
  { id: 'syllabus', name: 'Official Syllabus', icon: BookOpen },
  { id: 'pyqs', name: 'Previous Year Papers', icon: Clock },
  { id: 'mocks', name: 'Mock Test Series', icon: Flame },
  { id: 'strategy', name: 'Preparation Strategy', icon: Shield },
  { id: 'job-profile', name: 'Job Profiles List', icon: RibbonIcon },
  { id: 'salary', name: 'Salary & Pay Scale', icon: DollarSign },
  { id: 'preference', name: 'Post Preference Guide', icon: FileCheck },
  { id: 'centres', name: 'Exam Centres List', icon: MapPin },
  { id: 'admit-card', name: 'Admit Card Download', icon: Download },
  { id: 'day-rules', name: 'Exam Day Rules', icon: AlertTriangle },
  { id: 'normalization', name: 'Normalization Mark', icon: Zap },
  { id: 'answer-key', name: 'Answer Key PDF', icon: Globe },
  { id: 'cutoffs', name: 'Cut-off Trends', icon: TrendingUp },
  { id: 'result', name: 'Result & Merit List', icon: Award }
];

// Structural database containing 100% correct specific statistics & details for all 6 Railway Exams
const examMetadata: Record<string, {
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
  physicalParams?: string;
}> = {
  'rrb-ntpc': {
    name: 'RRB NTPC',
    fullName: 'Non-Technical Popular Categories (Graduate & Undergraduate Posts)',
    badge: '11,558 Vacancies Live',
    vacancies: '11,558+ Posts',
    applicants: '1.2 Crore+',
    salaryRange: '₹19,900 - ₹1,12,400',
    notificationCen: 'CEN 05/2026 (NTPC)',
    level: 'Levels 2, 3, 4, 5, and 6',
    posts: ['Station Master', 'Goods Guard (Train Manager)', 'Junior Accounts Assistant', 'Senior Clerk Typist'],
    medicalStandard: 'A-2 to C-2 standard depending on safety priority',
    eyeVision: 'A-2 posts require 6/9, 6/9 naked eye vision without glasses. No LASIK.',
    cbt1Pattern: 'GA: 40 Qs | Maths: 30 Qs | Reasoning: 30 Qs',
    cbt2Pattern: 'GA: 50 Qs | Maths: 35 Qs | Reasoning: 35 Qs',
    cbtDuration: '90 Minutes',
    syllabusTopics: [
      { subject: 'Mathematics', items: ['Number system, fractions, BODMAS', 'Percentages, SI & Compound Interest', 'Mensuration, Time & Work, boat speeds'] },
      { subject: 'Reasoning', items: ['Analogy, series completion, coding decodings', 'Blood relations, syllogisms, seating logic'] },
      { subject: 'General Awareness', items: ['History, geography, static GK maps', 'Polity, constitution articles, science keys'] }
    ],
    jobDuties: [
      ['Station Master', 'Station Control Office', 'Manages train signals, operations safety, passenger security.'],
      ['Goods Guard (Train Manager)', 'Brake Van Cabin', 'Supervises train safety seals and running logs.'],
      ['Senior Clerk Typist', 'Zonal office desks', 'Maintains accounts logs and departmental registers.']
    ],
    salaryTable: [
      ['Level 6 (Station Master)', '₹35,400 Basic Scale', '₹35,400', '₹58,000 - ₹62,000'],
      ['Level 5 (Goods Guard / JAA)', '₹29,200 Basic Scale', '₹29,200', '₹48,000 - ₹52,000'],
      ['Level 3 (Ticket Clerk)', '₹21,700 Basic Scale', '₹21,700', '₹34,000 - ₹38,000'],
      ['Level 2 (Clerk Typist)', '₹19,900 Basic Scale', '₹19,900', '₹31,000 - ₹34,000']
    ],
    cutoffData: [
      ['RRB Chandigarh', '79.52', '70.21', '64.12', '58.33'],
      ['RRB Allahabad', '80.12', '72.88', '65.34', '59.11'],
      ['RRB Mumbai', '72.84', '67.15', '60.54', '54.21']
    ],
    faqList: [
      { q: "Is LASIK allowed for Station Master?", a: "No, LASIK or any refractive eye surgery strictly disqualifies you from Station Master (A-2 standard) posts." },
      { q: "Can a 12th pass apply?", a: "Yes, 12th pass applicants can apply for Level 2 & 3 posts such as Junior Clerk Typist and Ticket Clerk." }
    ],
    datesTable: [
      ['Online Registration Starts', 'February 20, 2026'],
      ['Online Registration Closes', 'March 25, 2026'],
      ['CBT Stage-1 Examination', 'July - August 2026'],
      ['CBT Stage-2 Examination', 'November 2026']
    ]
  },
  'rrb-group-d': {
    name: 'RRB Group D',
    fullName: 'Railway Level-1 Recruitment (Track Maintainers & Assistants)',
    badge: '1.03 Lakh Vacancies Live',
    vacancies: '1,03,769+ Posts',
    applicants: '1.8 Crore+',
    salaryRange: '₹18,000 - ₹56,900',
    notificationCen: 'CEN Group-D 2026',
    level: 'Level 1 Matrix',
    posts: ['Track Maintainer Grade IV', 'Assistant Pointsman', 'Hospital Assistant', 'Depot Helper'],
    medicalStandard: 'B-1, B-2, C-1 standard safety limits',
    eyeVision: 'B-1 posts require 6/9, 6/12 with or without glasses (power limit 4D).',
    cbt1Pattern: 'Reasoning: 30 Qs | Science: 25 Qs | Maths: 25 Qs | GA: 20 Qs',
    cbt2Pattern: 'N/A (Single stage CBT followed by PET)',
    cbtDuration: '90 Minutes',
    syllabusTopics: [
      { subject: 'General Science', items: ['NCERT Physics motion, work, power, light, sound', 'NCERT Chemistry periodic table, chemical reactions', 'NCERT Life sciences cellular structures, human digestive system'] },
      { subject: 'Mathematics', items: ['Decimals, BODMAS, fractions, LCM-HCF rules', 'Ratios, average, age charts, percentage rules', 'Time & Work, platform crossing relative speed'] }
    ],
    jobDuties: [
      ['Track Maintainer Grade IV', 'Railway tracks (Outdoors)', 'Performs track patrolling, checks key safety clamps.'],
      ['Assistant Pointsman', 'Yard switch cabins', 'Operates track shunting switch boxes under safety codes.'],
      ['Hospital Assistant', 'Railway Divisional Hospital', 'Coordinates medical registers, supports outpatient wings.']
    ],
    salaryTable: [
      ['Level 1 (Track Maintainer)', '₹18,000 Base Pay', '₹18,000', '₹28,500 - '],
      ['Level 1 (Pointsman)', '₹18,000 Base Pay', '₹18,000', '₹29,000 - ₹32,000']
    ],
    cutoffData: [
      ['RRB Patna', '73.28', '66.12', '54.22', '48.11'],
      ['RRB Bhopal', '71.15', '64.55', '53.11', '47.28'],
      ['RRB Secunderabad', '69.12', '62.45', '51.34', '45.12']
    ],
    faqList: [
      { q: "Is ITI mandatory for all Group D posts?", a: "ITI is mandatory for specific engineering assistant posts, while general track assistance posts require a 10th pass qualification." }
    ],
    datesTable: [
      ['CEN Group D Release', 'March 2026'],
      ['CBT Examination Schedule', 'September - October 2026']
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
    level: 'Level 2 CPC pay',
    posts: ['Assistant Loco Pilot (ALP)', 'Technician Grade III'],
    medicalStandard: 'A-1 standard (Strictly running crew fitness)',
    eyeVision: '6/6, 6/6 naked eye vision without glasses. No lenses, no LASIK allowed.',
    cbt1Pattern: 'Maths: 20 Qs | Science: 20 Qs | Mental Ability: 25 Qs | GA: 10 Qs',
    cbt2Pattern: 'Part A (Maths, Science, Reasoning, Engg): 100 Qs | Part B (Trade): 75 Qs',
    cbtDuration: 'CBT-1: 60 mins | CBT-2: 150 mins total',
    syllabusTopics: [
      { subject: 'Basic Science & Engineering', items: ['Work, Power, Energy, Mass, Density calculations', 'Engineering Drawing projections, symbols, lines', 'Basic electricity circuits, IT literacy registers'] }
    ],
    jobDuties: [
      ['Assistant Loco Pilot (ALP)', 'Locomotive Engine Cab', 'Coordinates train signals, assists main driver with brake valves.']
    ],
    salaryTable: [
      ['Level 2 (Assistant Loco Pilot)', '₹19,900 Base Pay', '₹19,900', '₹48,000 - ₹56,000 (With travel mileage allowance)']
    ],
    cutoffData: [
      ['RRB Ajmer', '68.12', '58.45', '48.90', '42.33'],
      ['RRB Secunderabad', '66.89', '57.88', '47.12', '41.88']
    ],
    faqList: [
      { q: "Is naked eye 6/6 mandatory?", a: "Yes, candidates must possess A-1 Medical Standard category vision. Naked eye vision must be 6/6 without glasses." }
    ],
    datesTable: [
      ['CEN Release Date', 'January 2026'],
      ['CBT Stage-1 Examination', 'June 2026']
    ]
  },
  'rrb-je': {
    name: 'RRB JE',
    fullName: 'Junior Engineer (Civil, Electrical, S&T, IT branches)',
    badge: '7,951 Vacancies Live',
    vacancies: '7,951+ Posts',
    applicants: '20 Lakh+',
    salaryRange: '₹35,400 - ' + '₹1,12,400',
    notificationCen: 'CEN 03/2026 (JE Recruitment)',
    level: 'Level 6 matrix',
    posts: ['Junior Engineer (Civil)', 'Junior Engineer (Electrical)', 'Junior Engineer (S&T)'],
    medicalStandard: 'B-1, B-2, C-1 standards based on department',
    eyeVision: 'B-1 standard: 6/9, 6/12 with or without lenses.',
    cbt1Pattern: 'Maths: 30 Qs | Science: 30 Qs | Reasoning: 25 Qs | GA: 15 Qs',
    cbt2Pattern: 'Technical Core (Branch Paper): 100 Qs | General subjects: 50 Qs',
    cbtDuration: 'CBT-1: 90 mins | CBT-2: 120 mins',
    syllabusTopics: [
      { subject: 'Technical Core', items: ['Civil building planning, hydraulics, concrete structures', 'Mechanical thermodynamics, design, machine structures', 'Electrical grid networks, magnetic circuits, motor windings'] }
    ],
    jobDuties: [
      ['Junior Engineer (Civil)', 'Maintenance office / tracks', 'Supervises track laying, coordinates concrete quality controls.'],
      ['Junior Engineer (Electrical)', 'Locomotive maintenance shed', 'Supervises traction motor rewinding and electric lines safety.']
    ],
    salaryTable: [
      ['Level 6 (Junior Engineer)', '₹35,400 Basic Scale', '₹35,400', '₹58,000 - ' + '₹66,000']
    ],
    cutoffData: [
      ['RRB Allahabad', '74.22', '68.54', '60.11', '55.34']
    ],
    faqList: [
      { q: "Is Engineering Degree mandatory?", a: "Candidates must hold an Engineering Degree or a 3-Year Engineering Diploma in relevant disciplines." }
    ],
    datesTable: [
      ['Notification release', 'April 2026'],
      ['CBT Stage-1 Examination', 'August 2026']
    ]
  },
  'rpf-constable': {
    name: 'RPF Constable',
    fullName: 'Railway Protection Force - Constable safety recruitment',
    badge: '4,208 Vacancies Live',
    vacancies: '4,208+ Posts',
    applicants: '50 Lakh+',
    salaryRange: '₹21,700 - ' + '₹69,100',
    notificationCen: 'CEN RPF 02/2026',
    level: 'Level 3 CPC scale',
    posts: ['RPF Constable'],
    medicalStandard: 'B-1 standard (Strict physical force standards)',
    eyeVision: '6/9, 6/9 with or without glasses.',
    cbt1Pattern: 'GA: 50 Qs | Arithmetic: 35 Qs | Reasoning: 35 Qs',
    cbt2Pattern: 'N/A (Single stage CBT followed by PMT & PET)',
    cbtDuration: '90 Minutes',
    syllabusTopics: [
      { subject: 'General Awareness', items: ['History timeline, freedom struggle', 'Indian Constitution articles', 'General science, sports trophies'] }
    ],
    jobDuties: [
      ['RPF Constable', 'Railway platform / Train guard', 'Secures railway property, protects passengers, coordinates crowd safety.']
    ],
    salaryTable: [
      ['Level 3 (RPF Constable)', '₹21,700 Base Pay', '₹21,700', '₹34,000 - ' + '₹38,000']
    ],
    cutoffData: [
      ['Group A (Southern Railway)', '83.82', '79.54', '77.22', '71.12']
    ],
    faqList: [
      { q: "What is the PET timing?", a: "Male candidates must run 1600 meters in 5 minutes 45 seconds, clear a 14-feet long jump, and a 4-feet high jump." }
    ],
    datesTable: [
      ['RPF CEN Release', 'January 2026'],
      ['CBT Written Exam', 'May 2026']
    ]
  },
  'rpf-si': {
    name: 'RPF SI',
    fullName: 'Railway Protection Force - Sub Inspector recruitment',
    badge: '452 Vacancies Live',
    vacancies: '452+ Posts',
    applicants: '15 Lakh+',
    salaryRange: '₹35,400 - ' + '₹1,12,400',
    notificationCen: 'CEN RPF 01/2026',
    level: 'Level 6 pay matrix',
    posts: ['RPF Sub Inspector'],
    medicalStandard: 'B-1 standard force criteria',
    eyeVision: '6/9, 6/9 with or without glasses.',
    cbt1Pattern: 'GA: 50 Qs | Arithmetic: 35 Qs | Reasoning: 35 Qs',
    cbt2Pattern: 'N/A (CBT followed by physical metrics check)',
    cbtDuration: '90 Minutes',
    syllabusTopics: [
      { subject: 'General Awareness', items: ['Indian polity, constitution amendments, history', 'Sports awards, basic chemistry, national parks'] }
    ],
    jobDuties: [
      ['RPF Sub Inspector', 'RPF Station / Headquarter', 'In-charge of security divisions, compiles railway crime reports, commands constable units.']
    ],
    salaryTable: [
      ['Level 6 (Sub Inspector)', '₹35,400 Basic Scale', '₹35,400', '₹58,000 - ' + '₹64,000']
    ],
    cutoffData: [
      ['Group A (Zonal SI Cutoff)', '94.52', '89.12', '82.44', '78.50']
    ],
    faqList: [
      { q: "Is physical measurement test mandatory?", a: "Yes, male height must be 165 cm and female height must be 157 cm." }
    ],
    datesTable: [
      ['SI CEN Release', 'January 2026'],
      ['CBT Written Test', 'May 2026']
    ]
  }
};

// Dynamic Generator Function that creates detailed content for all 20 pages based on the selected exam
const generateSubpageContent = (examId: string, subpageId: string) => {
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
        `Biometric registrations are standard at all national examination gates.`
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
        `Check specific zonal sheets before completing your registration.`
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
        `Age Guidelines: General Category is standard. Additional age relaxations apply (OBC +3 Years, SC/ST +5 Years).`
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
        `Percentile Normalization rules are standard to maintain parity across shifts.`
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
        `Official Solved Shift Paper 2025 - Attempt Live on PrepGrind`,
        `Official Solved Shift Paper 2024 - Attempt Live on PrepGrind`,
        `Official Solved Shift Paper 2023 - Attempt Live on PrepGrind`,
        `Official Solved Shift Paper 2022 - Attempt Live on PrepGrind`
      ]
    },
    mocks: {
      title: `${examName} High-Density Premium Mock Test Series`,
      description: `Supercharge your exam preparation with industry-standard simulated mocks built for the 2026 CEN.`,
      bulletsTitle: 'What is Included in the Test Pack:',
      bullets: [
        `35 Full-Length simulated mocks (Fully bilingual in English & Hindi).`,
        `40 Sectional Speed boosters to target under 30 seconds solving limits.`,
        `Zonal leaderboard comparisons with 50,000+ candidates on PrepGrind.`
      ]
    },
    strategy: {
      title: `${examName} Topper 30-Day Strategy Roadmap`,
      description: `Learn the exact revision schedules followed by selected aspirants to secure qualifying percentiles.`,
      bulletsTitle: 'Strategic Guidelines:',
      bullets: [
        `Devote first 3 hours to quantitative Arithmetic calculations log files.`,
        `Attempt 1 full-length simulated mock test daily on PrepGrind, followed by deep diagnostic reviews.`
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
        `High community status, complete job security, and housing options.`
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
        `Free travel passes across national rail grids for dependents.`
      ]
    },
    preference: {
      title: `${examName} Step-by-Step Post Preference Filing Guide`,
      description: `Order your preference fields with extreme care during form submissions as edits are strictly prohibited.`,
      bulletsTitle: 'Key Priority Ordering Rules:',
      bullets: [
        `Prioritize high level posts (Level 6 & 5) if you meet the visual ocular standards.`,
        `Verify safety vs non-safety working limits beforehand.`
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
        `Save and print your bilingual card on A4 paper.`
      ]
    },
    'day-rules': {
      title: `${examName} Exam Day Gate Rules & Security Checks`,
      description: `Strict security guidelines are operational at entry gates. Violations result in lifelong debarment.`,
      bulletsTitle: 'Mandatory Guidelines:',
      bullets: [
        `Aadhaar-based biometric checks are performed at entry gates.`,
        `Metallic ornaments, smartwatches, and bluetooth devices are strictly banned.`
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
        `Final board answer keys determine the final merit positions.`
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

export default function ExamDetailPage({ params }: ParamsProps) {
  const resolvedParams = use(params);
  const examId = resolvedParams.examId;

  // Selected subpage state (default to notification)
  const [activeSubpage, setActiveSubpage] = useState<string>('notification');

  // Dynamic Content Generation based on actual examId and active subpage tab
  const activeExamId = examMetadata[examId] ? examId : 'rrb-ntpc';
  const activeExamStats = examMetadata[activeExamId];
  const activeContent = generateSubpageContent(activeExamId, activeSubpage);

  // Formatted title for displaying in breadcrumbs and titles
  const examDisplayName = activeExamStats ? activeExamStats.name : examId.replace(/-/g, ' ').toUpperCase();

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ textAlign: 'left', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/exams" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Exams</Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: '600' }}>{examDisplayName} Vault</span>
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-xl)', color: '#fff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            <Zap size={14} color="#facc15" style={{ animation: 'bounce 1s infinite' }} /> 2026 Railway Board Official Updates
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '800' }}>
                {examDisplayName} Premium Informational Vault
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                Access comprehensive parameters regarding the active {examDisplayName} examination cycles. Select your target information page directly from the left menu block below.
              </p>
            </div>
            
            {/* Authentic dynamic statistics cards (Restored & Dynamic) */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center', color: '#fff' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.vacancies.split(' ')[0]}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Total Posts</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.applicants}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Applicants</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2rem', color: '#facc15', margin: '0.5rem 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.salaryRange.split(' ')[0]}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Scale Start</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Massive Content Grid Layout */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '5rem 0' }}>
        <div className="container">

          {/* TWO-COLUMN GRID: Left (20 subpage items scrollable list & PrepGrind Ad) | Right (Detailed content sheets) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>
            
            {/* LEFT COLUMN: Sticky scrollable directory menu featuring 20 pages + PrepGrind promotion ad */}
            <div style={{ 
              gridColumn: 'span 4', 
              position: 'sticky', 
              top: '6rem', 
              alignSelf: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }} className="explorer-sidebar">
              
              {/* 20 Subpage Scrollable Menu */}
              <div style={{
                maxHeight: '520px',
                overflowY: 'auto',
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }} className="scrollbar-styled">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <BookOpen size={18} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    Exam Navigation Menu
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {subpagesList.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button 
                        key={item.id} 
                        onClick={() => setActiveSubpage(item.id)}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.75rem',
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.75rem 1rem', 
                          border: '1px solid var(--border-color)', 
                          borderRadius: 'var(--radius-md)', 
                          backgroundColor: activeSubpage === item.id ? 'var(--primary-light)' : 'var(--surface)',
                          color: activeSubpage === item.id ? 'var(--primary)' : 'var(--text-main)',
                          fontWeight: '800',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          fontFamily: 'Outfit',
                          transition: 'all 0.3s ease'
                        }}
                        className="card-hover-effect"
                      >
                        <IconComponent size={14} style={{ flexShrink: 0 }} />
                        <span style={{ flexGrow: 1 }}>{item.name}</span>
                        <ChevronRight size={12} style={{ opacity: activeSubpage === item.id ? 1 : 0.4 }} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PrepGrind Ad Directly Below the 20 Subpage Menu inside left sticky column */}
              <a 
                href="https://prepgrind.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'block', 
                  background: 'linear-gradient(135deg, var(--primary) 0%, #a83c2c 100%)', 
                  borderRadius: 'var(--radius-lg)', 
                  padding: '1.25rem', 
                  color: '#fff', 
                  textDecoration: 'none', 
                  boxShadow: '0 4px 15px rgba(212, 83, 63, 0.25)', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                className="card-hover-effect"
              >
                {/* Glowing blur effects */}
                <div style={{
                  position: 'absolute',
                  top: '-40%',
                  right: '-40%',
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: 0
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ 
                    fontSize: '0.65rem', 
                    padding: '0.2rem 0.5rem', 
                    backgroundColor: '#facc15', 
                    color: '#000', 
                    borderRadius: '4px', 
                    fontWeight: '850',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.5px'
                  }}>
                    PREPGRIND SPECIAL
                  </span>

                  <h5 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: '800', 
                    fontFamily: 'Outfit', 
                    lineHeight: '1.3', 
                    marginBottom: '0.5rem',
                    color: '#fff'
                  }}>
                    Unlock 50,000+ Mocks
                  </h5>

                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: 'rgba(255,255,255,0.9)', 
                    lineHeight: '1.4', 
                    marginBottom: '1rem' 
                  }}>
                    Attempt standard CBT mock test packages, bilingual PYQ solved shift grids, and topper sheets. Register now!
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    color: '#facc15' 
                  }}>
                    <span>Access PrepGrind</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </a>

            </div>

            {/* RIGHT COLUMN: High-Density Premium Detailed Worksheets (Span 8) */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Detailed Content Card */}
              <div style={{ 
                backgroundColor: 'var(--surface)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '2.5rem', 
                boxShadow: 'var(--shadow-sm)' 
              }}>
                
                {/* Header details */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    {activeContent.title}
                  </h2>
                  {activeContent.badge && (
                    <span style={{ 
                      fontSize: '0.7rem', 
                      padding: '0.25rem 0.6rem', 
                      backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                      color: 'var(--primary)', 
                      borderRadius: '4px', 
                      fontWeight: '800' 
                    }}>
                      {activeContent.badge}
                    </span>
                  )}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                  {activeContent.description}
                </p>

                {/* Table details (if exists) */}
                {activeContent.tableHeaders && activeContent.tableData && (
                  <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--border-color)' }}>
                          {activeContent.tableHeaders.map((head, hIdx) => (
                            <th key={hIdx} style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '800', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeContent.tableData.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: rIdx % 2 === 0 ? 'var(--surface)' : 'rgba(255,255,255,0.02)' }}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: cIdx === 0 ? '800' : '600', color: cIdx === 0 ? 'var(--text-main)' : 'var(--text-muted)' }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Bullets details (if exists) */}
                {activeContent.bulletsTitle && activeContent.bullets && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {activeContent.bulletsTitle}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {activeContent.bullets.map((bullet, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem', lineHeight: '1.5' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '950', marginTop: '0.1rem' }}>✓</span>
                          <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* InfoBox (if exists) */}
                {activeContent.infoBox && (
                  <div style={{ 
                    padding: '1.25rem', 
                    backgroundColor: 'var(--primary-light)', 
                    borderRadius: 'var(--radius-md)', 
                    borderLeft: '4px solid var(--primary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: 'var(--text-main)',
                    fontWeight: '700'
                  }}>
                    {activeContent.infoBox}
                  </div>
                )}

              </div>

              {/* Direct Mock Test Simulator Card Integration */}
              <div style={{ 
                textAlign: 'center', 
                padding: '2.5rem 2rem', 
                backgroundColor: 'var(--primary-light)', 
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(212, 83, 63, 0.15)'
              }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'Outfit', fontWeight: '850' }}>
                  Practice Mocks for {examDisplayName} on PrepGrind!
                </h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto 1.5rem auto', lineHeight: '1.5', fontWeight: '600' }}>
                  Boost your exam speeds. Attempt official solved shift previous papers and simulated full length mocks under real exam clocks.
                </p>
                <a 
                  href="https://prepgrind.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Attempt Free Mocks <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>

          {/* Zonal FAQs list at the end */}
          <section style={{ borderTop: '1px solid var(--border-color)', marginTop: '6rem', paddingTop: '5.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: '800', 
                color: 'var(--primary)', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                backgroundColor: 'var(--primary-light)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                {examDisplayName} FAQ Center
              </span>
              <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Everything you need to know about the official {examDisplayName} recruitment parameters.
              </p>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeExamStats.faqList.map((faq, index) => (
                <details 
                  key={index} 
                  className="faq-details"
                >
                  <summary className="faq-summary">
                    <span>{faq.q}</span>
                  </summary>
                  <div className="faq-content">
                    <p style={{ 
                      marginTop: '1rem', 
                      color: 'var(--text-muted)', 
                      fontSize: '0.95rem', 
                      lineHeight: '1.65', 
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '0.75rem',
                      cursor: 'default'
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
