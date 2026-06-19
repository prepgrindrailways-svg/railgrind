"use client";

import { useState } from 'react';
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
  TrendingUp
} from 'lucide-react';

export default function StudyMaterialPage() {
  const [selectedExam, setSelectedExam] = useState('RRB NTPC');
  const [activeStrategyTab, setActiveStrategyTab] = useState('7days');

  // Steady Exams List (Prominently displayed below the first section / hero)
  const examsList = [
    { id: 'RRB NTPC', name: 'RRB NTPC (Non-Technical Popular Categories)' },
    { id: 'RRB Group D', name: 'RRB Group D (Track Maintainer & Assistants)' },
    { id: 'RPF Constable', name: 'RPF Constable (Railway Protection Force)' },
    { id: 'RRB JE', name: 'RRB JE (Junior Engineer - CBT 1)' },
    { id: 'RRB ALP', name: 'RRB ALP (Assistant Loco Pilot)' }
  ];

  // Syllabus Data for Left Scrollable Column
  const syllabusData: Record<string, { subject: string; subtopics: string[] }[]> = {
    'RRB NTPC': [
      {
        subject: 'Mathematics (30 Qs / 30 Marks)',
        subtopics: [
          'Number System: Decimals, Fractions, LCM & HCF, BODMAS simplifications.',
          'Ratio & Proportion: Direct/inverse variations, partnership, and age calculations.',
          'Percentages & Interest: Simple Interest (SI), Compound Interest (CI) with yearly/half-yearly loops.',
          'Profit, Loss & Discount: Marked Price, Successive Discounts, and dishonest dealer calculations.',
          'Mensuration: 2D Areas (Triangles, Circles, Quadrilaterals) & 3D Volumes (Prisms, Pyramids, Spheres).',
          'Time & Work / Time & Distance: Pipe cisterns, relative speed, trains, and boat-stream speed ratios.',
          'Algebra & Geometry: Linear/Quadratic equations, angles, parallel lines, triangles congruency.',
          'Trigonometry & Statistics: Heights/Distances, basic ratios, Mean, Median, Mode, Standard Deviation.'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (30 Qs / 30 Marks)',
        subtopics: [
          'Analogies & Classification: Semantic, symbolic, and number-based logic grids.',
          'Series Completion: Alphabetical series, number progression patterns, and missing term matrix.',
          'Coding & Decoding: Letter-shifting, Chinese coding, and symbolic operators.',
          'Mathematical Operations: Operator substitution, equation balancing, and inequalities.',
          'Blood Relations & Directions: Coded family trees, angle rotations, and shadow-based directions.',
          'Analytical Reasoning: Syllogisms (2/3 statements), Jumbling, and Venn diagram logic.',
          'Puzzles & Seating Arrangement: Linear, circular, and tabular distributions (easy-medium level).',
          'Data Sufficiency & Decisional Logic: Statement-assumptions, course of actions, and truth values.'
        ]
      },
      {
        subject: 'General Awareness (40 Qs / 40 Marks)',
        subtopics: [
          'Current Affairs: National/International events, summits, sports cups, and national schemes.',
          'Indian History: Ancient civilization, medieval sultanates, Mughal Empire, and Freedom Struggle (1857-1947).',
          'Indian Polity & Constitution: Fundamental Rights, Articles, Parliament, Judiciary, and Amendments.',
          'Geography: Indian physical geography, rivers, soil varieties, forest covers, and world continents.',
          'General Science: Basic Physics (Mechanics, Optics), Chemistry (Periodic Table), Life Science (Human systems).',
          'Art, Culture & Monuments: Folk dances, local festivals, UNESCO heritage sites, and classical music schools.',
          'Environmental Issues: Biodiversity treaties, climate agreements, and national wildlife reserves.'
        ]
      }
    ],
    'RRB Group D': [
      {
        subject: 'General Science (25 Qs / 25 Marks)',
        subtopics: [
          'Physics: Motion, Laws of Motion, Work, Power & Energy, Gravitation, Sound waves, Light reflection/refraction, Electricity, Magnetism.',
          'Chemistry: Chemical equations, Acid-Base indicators, Metals & Non-metals, Periodic Classification, Carbon compounds.',
          'Life Sciences: Cell structures, Plant and Animal kingdom classification, Nutrition, Human digestive/respiratory systems.'
        ]
      },
      {
        subject: 'Mathematics (25 Qs / 25 Marks)',
        subtopics: [
          'Arithmetic Mastery: BODMAS operations, Fraction conversions, LCM & HCF properties.',
          'Ratios & Percentages: Partnerships, Average calculations, Age puzzles, and basic Percentage calculations.',
          'Commercial Math: Profit & Loss, Simple Interest, Compound Interest formulas, Discount shortcuts.',
          'Time & Mensuration: Time & Work, Time & Distance (Train/Platform splits), 2D/3D surface areas.',
          'Introductory Algebra & Geometry: Polynomials, basic coordinate distances, triangle angles, circle tangents.'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (30 Qs / 30 Marks)',
        subtopics: [
          'Analytical Logic: Analogy, Series completion (numbers/letters), Classification (odd-one-out).',
          'Coding & Operations: Letter coding, number placement, Mathematical sign conversions.',
          'Logical Puzzles: Venn diagrams, blood relations, circular seating arrangement, syllogisms.',
          'Visual & Spatial: Paper folding/cutting, mirror images, embedded figures, matrix logic.'
        ]
      },
      {
        subject: 'General Awareness & CA (20 Qs / 20 Marks)',
        subtopics: [
          'Science & Technology: Space missions, defense launches, recent scientific breakthroughs.',
          'National Highlights: Government cabinet appointments, major economic indices, state policies.',
          'Sports & Culture: Olympic winners, Cricket tournament trophies, regional festivals, classical arts.',
          'Static GK Capsules: National parks, atomic power plants, currency capitals, banking headquarters.'
        ]
      }
    ],
    'RPF Constable': [
      {
        subject: 'General Awareness (50 Qs / 50 Marks)',
        subtopics: [
          'Indian History: Indus Valley, Maurya & Gupta periods, Freedom struggle leaders and congress sessions.',
          'Art & Culture: Major classical/folk dance varieties, traditional paintings, historic temples.',
          'Geography: Indian river systems, mineral deposits, major mountain passes, global capitals.',
          'Polity & Constitution: Drafting of constitution, fundamental duties, president/governor roles.',
          'General Science: Human body anatomy, chemical formulas, common physical measuring devices.',
          'Sports & Awards: National sports awards, grand slam winners, books & authors, national flags.'
        ]
      },
      {
        subject: 'Arithmetic (35 Qs / 35 Marks)',
        subtopics: [
          'Number Operations: Decimals, fractions, whole numbers, divisibility rules, BODMAS.',
          'Percentages & Ratios: Proportion variations, mixture allegations, average speeds.',
          'Commercial Quant: Profit & Loss, marked price discount, compound interest (quarterly/yearly).',
          'Time & Mensuration: Work equations, pipes & cisterns, speeds of trains/boats, perimeter/areas.'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (35 Qs / 35 Marks)',
        subtopics: [
          'Analogies & Symbols: Verbal/non-verbal classification, missing symbols patterns.',
          'Relational Logic: Direct blood relation trees, spatial orientation, direction grids.',
          'Deductive Reasoning: Syllogisms, statement-conclusions, coding shift patterns.',
          'Visual Reasoning: Series completion, mirror and water images, figure pattern completion.'
        ]
      }
    ],
    'RRB JE': [
      {
        subject: 'General Science (30 Qs / 30 Marks)',
        subtopics: [
          'Physics: Mechanics, heat, thermodynamics, fluid dynamics, light, wave optics, electricity.',
          'Chemistry: Chemical equations, solutions, periodic classification, organic chemistry nomenclature.',
          'Environmental Science: Pollution control, waste management, global warming, environmental treaties.'
        ]
      },
      {
        subject: 'Mathematics (30 Qs / 30 Marks)',
        subtopics: [
          'Algebra & Calculus: Quadratic expressions, polynomials, matrices, determinants, coordinates.',
          'Advanced Quant: Logarithms, progressions (AP/GP), trigonometry formulas, statistics & probability.',
          'Core Arithmetic: Fractions, percentage, profit & loss, discount, compound interest, time & work.'
        ]
      },
      {
        subject: 'General Intelligence & Reasoning (25 Qs / 25 Marks)',
        subtopics: [
          'Verbal Coding: Alphabet logic, relationship trees, number matrix, coding decodings.',
          'Deductive Logic: Syllogisms, statement-assumptions, decision making indices.',
          'Puzzles: Matrix arrangements, scheduling blocks, circular puzzles.'
        ]
      },
      {
        subject: 'General Awareness (15 Qs / 15 Marks)',
        subtopics: [
          'Current updates, geography of India, Indian polity, historical timelines, economic plans.'
        ]
      }
    ],
    'RRB ALP': [
      {
        subject: 'Mathematics (20 Qs / 20 Marks)',
        subtopics: [
          'Arithmetic: Number systems, BODMAS, ratio & proportion, percentage, SI & CI.',
          'Mensuration & Algebra: Quadratic equations, coordinates, 2D/3D geometry calculations.'
        ]
      },
      {
        subject: 'Mental Ability (25 Qs / 25 Marks)',
        subtopics: [
          'Analytical Logic: Code sign shifts, syllogism arrays, direction rotations.',
          'Relationships & Series: Coded blood relations, alphabet grid puzzles, Venn diagrams.'
        ]
      },
      {
        subject: 'General Science (20 Qs / 20 Marks)',
        subtopics: [
          'Physics Numericals: Work, power, energy, mechanics, optical calculations, electrical circuits.',
          'Chemistry & Life Science: Basic elements, biology systems up to 10th standard CBSE.'
        ]
      },
      {
        subject: 'General Awareness (10 Qs / 10 Marks)',
        subtopics: [
          'Current affairs, science developments, sports winners, static GK highlights.'
        ]
      }
    ]
  };

  // Exam Structure Data
  const examStructureData: Record<string, { totalQs: number; totalMarks: number; duration: string; negativeMarking: string; normalizedRules: string; stage2Note: string; sections: { name: string; qs: number; weightage: string }[] }> = {
    'RRB NTPC': {
      totalQs: 100,
      totalMarks: 100,
      duration: '90 Minutes (120 Mins for eligible PwD)',
      negativeMarking: '1/3rd (0.33) marks deducted for each incorrect answer.',
      normalizedRules: 'Standard multi-session formula normalization applies to raw marks.',
      stage2Note: 'Top 20 times the vacancy list per category are selected for CBT-2 based on CBT-1 marks.',
      sections: [
        { name: 'General Awareness', qs: 40, weightage: '40% weightage - Highly critical' },
        { name: 'Mathematics', qs: 30, weightage: '30% weightage - High accuracy' },
        { name: 'General Intelligence & Reasoning', qs: 30, weightage: '30% weightage - Rapid scoring' }
      ]
    },
    'RRB Group D': {
      totalQs: 100,
      totalMarks: 100,
      duration: '90 Minutes',
      negativeMarking: '1/3rd marks deducted per wrong answer.',
      normalizedRules: 'Percentile-based normalization used since 2022.',
      stage2Note: 'Qualified candidates are called for Physical Efficiency Test (PET) in a 3:1 ratio.',
      sections: [
        { name: 'General Intelligence & Reasoning', qs: 30, weightage: '30% weightage - Maximum points' },
        { name: 'General Science', qs: 25, weightage: '25% weightage - High science priority' },
        { name: 'Mathematics', qs: 25, weightage: '25% weightage - Numerical intensive' },
        { name: 'General Awareness & CA', qs: 20, weightage: '20% weightage - Standard GK' }
      ]
    },
    'RPF Constable': {
      totalQs: 120,
      totalMarks: 120,
      duration: '90 Minutes',
      negativeMarking: '1/3rd marks deducted for every wrong answer.',
      normalizedRules: 'Standard shift normalization to equalize difficulty.',
      stage2Note: 'PMT & PET are strictly qualifying in nature.',
      sections: [
        { name: 'General Awareness', qs: 50, weightage: '41.6% weightage - Crucial parameters' },
        { name: 'Arithmetic', qs: 35, weightage: '29.2% weightage - Formula-heavy' },
        { name: 'General Intelligence & Reasoning', qs: 35, weightage: '29.2% weightage - Spatial logic' }
      ]
    },
    'RRB JE': {
      totalQs: 100,
      totalMarks: 100,
      duration: '90 Minutes',
      negativeMarking: '1/3rd marks deducted per wrong answer.',
      normalizedRules: 'Zonal normalized scores determine qualifying criteria.',
      stage2Note: 'Stage-2 consists of 150 questions (50 Non-tech + 100 Tech engineering paper).',
      sections: [
        { name: 'General Science', qs: 30, weightage: '30% weightage - High non-tech weight' },
        { name: 'Mathematics', qs: 30, weightage: '30% weightage - Calculations heavy' },
        { name: 'General Intelligence & Reasoning', qs: 25, weightage: '25% weightage - Analogies' },
        { name: 'General Awareness', qs: 15, weightage: '15% weightage - Economy & geography' }
      ]
    },
    'RRB ALP': {
      totalQs: 75,
      totalMarks: 75,
      duration: '60 Minutes',
      negativeMarking: '1/3rd marks deducted per wrong answer.',
      normalizedRules: 'Zonal normalization used for shortlisting Stage-2.',
      stage2Note: 'Stage-2 contains Part A (100 Qs) and Part B relevant trade (75 Qs).',
      sections: [
        { name: 'Mental Ability', qs: 25, weightage: '33.3% weightage - Speed crucial' },
        { name: 'General Science', qs: 20, weightage: '26.6% weightage - Physics numericals' },
        { name: 'Mathematics', qs: 20, weightage: '26.6% weightage - Arithmetic priority' },
        { name: 'General Awareness', qs: 10, weightage: '13.3% weightage - Current facts' }
      ]
    }
  };

  // Strategy Data
  const strategyData: Record<string, Record<string, { title: string; summary: string; schedule: string[]; tips: string[] }>> = {
    'RRB NTPC': {
      '7days': {
        title: '7-Day Topper Revision Schedule (Day-by-Day)',
        summary: 'Focus exclusively on revision. Avoid studying any new syllabus modules.',
        schedule: [
          'Day 1 & 2: Revise all Quantitative Aptitude formula logs (Mensuration formulas, Algebra identities, SI/CI ratios) for 3 hours daily.',
          'Day 3: Focus on General Awareness static registries—polity constitutional articles (1-51A), Mughal empire logs, major national reserves.',
          'Day 4: Settle down for 1 full-length simulated CBT mock under exact timing on PrepGrind.',
          'Day 5: Revise reasoning puzzles, coding shift variations, syllogism Venn logic.',
          'Day 6: Study last 12 months current affairs highlights—space projects, sports winners.',
          'Day 7: Rest day! Relax, organize your admit card papers, and sleep early.'
        ],
        tips: ['Focus entirely on formula revision sheets.', 'Re-solve all wrong questions logged in your previous mock scorecard.', 'Do not start any new books or complex theoretical guides.']
      },
      '15days': {
        title: '15-Day Strategic Revision Blueprint',
        summary: 'Calibrate your timing matrices, practice solving multiple previous year shift papers.',
        schedule: [
          'Days 1 to 5: Dedicate 3 hours daily to solving 5 past NTPC CBT shift papers on PrepGrind.',
          'Days 6 to 10: Revise quantitative weak points identified in the papers. Practice 10 seating logic sheets.',
          'Days 11 to 14: Settle in for 3 final simulated full mocks. Keep your target score above 85+.',
          'Day 15: Run through high-yield static GK sheets and formula registers one final time.'
        ],
        tips: ['Examine actual NTPC shift papers.', 'Target math calculations speed and spatial reasoning coding sheets.', 'Revise standard scientific discoveries and geographical maps daily.']
      },
      '30days': {
        title: '30-Day CBT-1 High Intensity Study Plan',
        summary: 'Transition your preparation from topic-wise practice sets into complete mock test cycles.',
        schedule: [
          'Week 1 (Day 1-7): Practice 2 math and 2 reasoning sectional tests daily with tight timers.',
          'Week 2 (Day 8-15): Study Physics mechanics, chemistry periodic table, and current affairs.',
          'Week 3 (Day 16-23): Attempt 1 full mock every alternate day on PrepGrind.',
          'Week 4 (Day 24-30): Rapid multi-chapter revisions, final mock speed runs.'
        ],
        tips: ['Take alternate-day CBT mocks on PrepGrind and read diagnostic charts.', 'Study Chinese coding logic and spatial syllogism puzzles daily.', 'Complete a comprehensive monthly GK handbook review.']
      },
      '3months': {
        title: '3-Month Comprehensive Plan',
        summary: 'Build flawless conceptual foundations across Quant and Reasoning. Build personal summary logs.',
        schedule: [
          'Month 1: Focus 100% on conceptual clarity. Cover all Arithmetic/Advanced Math formulas.',
          'Month 2: Move into topic-wise practice sets on PrepGrind. Solve 100+ questions per topic.',
          'Month 3: Devote entirely to exam simulation. Attempt 30 full-length mocks.'
        ],
        tips: ['Draft personalized quantitative registers containing custom shortcuts.', 'Draft detailed daily GK timelines for history and polity articles.', 'Secure a consistent 90+ percentile in simulated toppers lists on PrepGrind.']
      },
      '6months': {
        title: '6-Month Selection Blueprint',
        summary: 'Target scoring an exceptional qualifying rank. Exhaustively cover basic to advanced conceptual models.',
        schedule: [
          'Month 1 & 2: Structural syllabus study. Complete in-depth courses.',
          'Month 3 & 4: Previous Year Shift Papers mastery. Attempt all 60 shifts of the NTPC exam.',
          'Month 5: Intensive sectional speed boosters. Reduce question times to under 30 seconds.',
          'Month 6: High-frequency Mock drills. Take 40 full mocks on PrepGrind.'
        ],
        tips: ['Resolve advanced geometry, statistics, and coordinate questions daily.', 'Build highly detailed current affairs diaries spanning the past 18 months.', 'Master regional board average selection marks to plan scoring targets.']
      },
      '12months': {
        title: '12-Month Zero-to-Hero Program',
        summary: 'A comprehensive, disciplined, and multi-phase preparation program.',
        schedule: [
          'Phase 1 (Month 1-4): Theoretical foundations. Study complete science, history, and math.',
          'Phase 2 (Month 5-8): Solve 10,000+ topic questions, attempt daily quizzes.',
          'Phase 3 (Month 9-10): Attempt past 10 years of all railway board papers.',
          'Phase 4 (Month 11-12): Attempt 75+ full-length mocks, analyze scores.'
        ],
        tips: ['Cover Indian history, polity, geography, and science modules completely.', 'Build a flawless quantitative mental calculations directory.', 'Attempt weekly All India Live Challenges to benchmark actual performance.']
      }
    },
    'RRB Group D': {
      '7days': {
        title: '7-Day Science & Arithmetic Revision',
        summary: 'Review periodic table trends, science formulas, and BODMAS properties.',
        schedule: [
          'Day 1 & 2: Revise physics numerical formulas. Take 1 physics sectional quiz.',
          'Day 3: Focus on Life Sciences—human digestive systems, plant physiology.',
          'Day 4: Settle in for 1 Group D previous year paper mock on PrepGrind.',
          'Day 5: Revise arithmetic tables—LCM/HCF properties, ratio proportions.',
          'Day 6: Study sports awards, static GK national parks lists.',
          'Day 7: REST! Verify admit card instructions.'
        ],
        tips: ['Focus heavily on 10th science textbook diagrams and reactions.', 'Revise BODMAS calculation rules to avoid basic algebra mistakes.', 'Attempt 2 timed practice sets on PrepGrind to calibrate speed.']
      },
      '15days': {
        title: '15-Day Revision Blueprint',
        summary: 'Examine shift papers of the 2022 Group D cycle, fix physics numerical formula errors.',
        schedule: [
          'Days 1-5: Solve 5 official previous year shifts.',
          'Days 6-10: Review chemistry chemical formulas. Practice 15 math questions.',
          'Days 11-14: Take 4 mock tests. Focus on scoring 80+ marks.',
          'Day 15: Run through science topper capsules.'
        ],
        tips: ['Target solving chemistry reactions and balancing equations.', 'Revise monthly current affairs highlights (sports, policies).', 'Revise reasoning syllogisms and direction rotations.']
      },
      '30days': {
        title: '30-Day Crash Course Roadmap',
        summary: 'Build sectional speed in Math and Reasoning. Focus heavily on 10th CBSE science concepts.',
        schedule: [
          'Week 1: Focus on Quant arithmetic chapters. Take daily sectional quizzes.',
          'Week 2: Study Physics light laws, electricity numericals, and biology human anatomy.',
          'Week 3: Solve 10 Group D previous year papers on PrepGrind.',
          'Week 4: Settle mock test cycles, analyze percentiles.'
        ],
        tips: ['Practice science MCQs daily on PrepGrind.', 'Attempt 10 quantitative sectional speed sheets.', 'Review national static GK charts (parks, dances).']
      },
      '3months': {
        title: '3-Month Comprehensive Plan',
        summary: 'Build conceptual clarity of 10th CBSE curriculum, practice spatial reasoning puzzles.',
        schedule: [
          'Month 1: In-depth study of Physics, Chemistry, and Life Sciences.',
          'Month 2: Solve 100+ topic-wise questions daily. Settle coding.',
          'Month 3: Attempt 30 full-length mocks on PrepGrind.'
        ],
        tips: ['Master all science numerical equations and chemistry reactions.', 'Draft handwritten summary booklets for plant/animal kingdom.', 'Target scoring 85+ marks consistently on PrepGrind.']
      },
      '6months': {
        title: '6-Month Selection Strategy',
        summary: 'Exhaustively study all shift databases and build conceptual speed.',
        schedule: [
          'Month 1 & 2: Detailed theory classes. Complete all units.',
          'Month 3: Attempt all 100+ shifts of the Group D exam.',
          'Month 4: Reduce question solving times to under 35 seconds.',
          'Month 5 & 6: Settle 50+ simulated mocks, track zonal scores.'
        ],
        tips: ['Re-solve all previous board papers with deep calculations logs.', 'Draft chemistry chemical reaction notes & plant physiology registers.', 'Track daily score progress via diagnostic charts on PrepGrind.']
      },
      '12months': {
        title: '12-Month Mastery Program',
        summary: 'Complete zero-to-hero curriculum study and rigorous daily mock schedules.',
        schedule: [
          'Phase 1 (Month 1-4): Study complete NCERT 9th & 10th science modules.',
          'Phase 2 (Month 5-8): Solve 8,000+ science & math questions.',
          'Phase 3 (Month 9-10): Solve all past shift papers under timing.',
          'Phase 4 (Month 11-12): Attempt 80+ simulated full mocks.'
        ],
        tips: ['Cover all NCERT science chapters and diagrams completely.', 'Build solid quantitative calculations tables (up to 30x30 squares).', 'Attempt weekly All India Live Mocks to check global ranks.']
      }
    },
    'RPF Constable': {
      '7days': {
        title: '7-Day GK & Constitution Revision',
        summary: 'Review core Indian Constitution parts and rapidly revise historical periods.',
        schedule: [
          'Day 1 & 2: Revise Indian Constitution core articles. Take 1 polity quiz.',
          'Day 3: Focus on Indian History—freedom struggle movements, Delhi Sultanate.',
          'Day 4: Attempt 1 simulated RPF mock on PrepGrind.',
          'Day 5: Revise basic arithmetic (Percentages, Profit & Loss).',
          'Day 6: Study geography river systems, classical dance styles.',
          'Day 7: REST! Verify admit card instructions.'
        ],
        tips: ['Quick check of historical dates and constitution timelines.', 'Attempt 2 RPF mocks on PrepGrind to calibrate speed.', 'Review basic quant ratio & averages tables.']
      },
      '15days': {
        title: '15-Day RPF Speedup Plan',
        summary: 'Focus on General Awareness sections. Balance spatial visualization reasoning.',
        schedule: [
          'Days 1-5: Solve 4 previous year papers. Log all GK questions.',
          'Days 6-10: Review history and geography static tables. Practice 20 arithmetic questions.',
          'Days 11-14: Settle 4 RPF full mocks. Target a 100+ score.',
          'Day 15: Run through GK topper capsules.'
        ],
        tips: ['Focus heavily on spatial reasoning puzzles.', 'Study static GK charts (parks, rivers, national reserves).', 'Practice arithmetic sign-shift calculations daily.']
      },
      '30days': {
        title: '30-Day Selection Accelerator',
        summary: 'Build high accuracy in the 50-mark General Awareness block.',
        schedule: [
          'Week 1: Focus on General Awareness (Polity, History). Take daily quizzes.',
          'Week 2: Arithmetic chapter mastery. Practice 30 questions daily.',
          'Week 3: Solve 12 previous year shifts under RPF CBT timings.',
          'Week 4: Final simulated mock runs, revise capsules.'
        ],
        tips: ['Attempt daily GA quizzes on Indian Constitution.', 'Solve 15 math sectional sheets on commercial calculations.', 'Maintain physical fitness routines alongside written study.']
      },
      '3months': {
        title: '3-Month Comprehensive Plan',
        summary: 'Master GK theory in Month 1, focus on Arithmetic formulas in Month 2.',
        schedule: [
          'Month 1: In-depth study of Indian History, Geography, and Constitution.',
          'Month 2: Solve 150+ topic-wise questions daily. Settle coding.',
          'Month 3: Attempt 25 full-length mocks on PrepGrind.'
        ],
        tips: ['Draft GK index cards for daily reviews.', 'Practice reasoning analogies and visual memory items daily.', 'Attempt 20 FLTs and target a 105+ score on PrepGrind.']
      },
      '6months': {
        title: '6-Month Selection Blueprint',
        summary: 'Complete GK theory courses. Refine competitive test-taking mechanics.',
        schedule: [
          'Month 1 & 2: Detailed GK & Polity theory classes.',
          'Month 3: Attempt all previous shifts of the RPF Constable exam.',
          'Month 4: Reduce question solving times to under 30 seconds.',
          'Month 5 & 6: Settle 45+ simulated mocks, track zonal scores.'
        ],
        tips: ['Read detailed polity journals and history toppers handbooks.', 'Perform daily 15-minute speed runs in arithmetic.', 'Track zone cutoffs weekly to strategically position board choices.']
      },
      '12months': {
        title: '12-Month Toppers Program',
        summary: 'Comprehensive written and physical preparation alignment.',
        schedule: [
          'Phase 1 (Month 1-4): Theoretical GK, history & polity mastery.',
          'Phase 2 (Month 5-8): Solve 10,000+ topic questions.',
          'Phase 3 (Month 9-10): Solve all past shift papers under timing.',
          'Phase 4 (Month 11-12): Attempt 70+ simulated full mocks.'
        ],
        tips: ['Cover Indian history, polity, constitution, geography completely.', 'Practice 5000+ advanced GK question cards.', 'Re-attempt old mocks every two months to ensure retention.']
      }
    },
    'RRB JE': {
      '7days': {
        title: '7-Day CBT-1 Engineering Revision',
        summary: 'Revise mathematical calculus formulas and chemistry reactions.',
        schedule: [
          'Day 1 & 2: Revise core technical math (Matrices, Trigonometry).',
          'Day 3: Focus on Physics laws—Newton laws, optics equations.',
          'Day 4: Attempt 1 simulated JE mock on PrepGrind.',
          'Day 5: Revise reasoning puzzles, coding shift variations.',
          'Day 6: Study environmental updates.',
          'Day 7: REST! Verify admit card instructions.'
        ],
        tips: ['Quick check of technical math and science constants.', 'Attempt 2 JE mocks on PrepGrind to calibrate speed.', 'Review basic engineering physics formulas.']
      },
      '15days': {
        title: '15-Day CBT-1 Blueprint',
        summary: 'Solve past JE shift papers, review physics numerical formulas.',
        schedule: [
          'Days 1-5: Solve 5 official previous year shifts.',
          'Days 6-10: Review chemistry reactions. Practice 15 math questions.',
          'Days 11-14: Settle 4 JE full mocks. Target a 90+ score.',
          'Day 15: Run through technical science capsules.'
        ],
        tips: ['Target solving technical science mechanics.', 'Revise weekly current affairs highlights.', 'Revise reasoning syllogisms and direction rotations.']
      },
      '30days': {
        title: '30-Day High Impact Plan',
        summary: 'Intensive practice of basic 10th science and arithmetic.',
        schedule: [
          'Week 1: Focus on Quant chapters. Take daily sectional quizzes.',
          'Week 2: Study Physics dynamics, chemical indicators.',
          'Week 3: Solve 10 JE CBT-1 previous year papers on PrepGrind.',
          'Week 4: Final simulated mock runs, review percentiles.'
        ],
        tips: ['Attempt daily science quizzes on Chemistry & Physics.', 'Solve 15 math sectional sheets on commercial calculations.', 'Maintain physical fitness routines alongside written study.']
      },
      '3months': {
        title: '3-Month Comprehensive Plan',
        summary: 'Master technical science in Month 1, focus on Mathematics in Month 2.',
        schedule: [
          'Month 1: In-depth study of Physics, Chemistry, and environmental sciences.',
          'Month 2: Solve 150+ topic-wise questions daily. Settle coding.',
          'Month 3: Attempt 25 full-length mocks on PrepGrind.'
        ],
        tips: ['Draft technical science summary capsules.', 'Attempt 15 CBT-1 full-length simulated tests.', 'Re-solve all incorrect math questions in the mock log weekly.']
      },
      '6months': {
        title: '6-Month CBT-1 & CBT-2 Path',
        summary: 'Simultaneously cover CBT-1 non-tech modules and establish technical engineering base.',
        schedule: [
          'Month 1 & 2: Detailed CBT-1 theory classes.',
          'Month 3: Attempt all previous shifts of the JE exam.',
          'Month 4: Perform CBT-2 basic engineering theory revisions.',
          'Month 5 & 6: Settle 45+ simulated mocks, track zonal scores.'
        ],
        tips: ['Resolve engineering basic notes weekly.', 'Master CBT-1 speed grids to secure comfortable qualifying marks.', 'Participate in 15 All India Live Challenges on PrepGrind.']
      },
      '12months': {
        title: '12-Month Professional Topper Path',
        summary: 'Holistic coverage of tech and non-tech syllabus.',
        schedule: [
          'Phase 1 (Month 1-4): Theoretical non-tech CBT-1 & engineering mastery.',
          'Phase 2 (Month 5-8): Solve 10,000+ topic questions.',
          'Phase 3 (Month 9-10): Solve all past shift papers under timing.',
          'Phase 4 (Month 11-12): Attempt 80+ simulated full mocks.'
        ],
        tips: ['Master engineering core textbooks.', 'Build highly detailed, personal formula & tech index books.', 'Maintain 98+ accuracy percentile in all CBT-1 mock runs.']
      }
    },
    'RRB ALP': {
      '7days': {
        title: '7-Day ALP Science Revision',
        summary: 'Revise physics work, power, and energy equations.',
        schedule: [
          'Day 1 & 2: Revise core physics numerical formulas. Take 1 science quiz.',
          'Day 3: Focus on Life Sciences—human body anatomy, plant biology.',
          'Day 4: Attempt 1 simulated ALP CBT-1 mock on PrepGrind.',
          'Day 5: Revise arithmetic tables—LCM/HCF, ratio proportions.',
          'Day 6: Study sports awards, static GK national parks lists.',
          'Day 7: REST! Verify admit card instructions.'
        ],
        tips: ['Focus heavily on physics formula sheets.', 'Revise BODMAS calculation rules to avoid basic algebra mistakes.', 'Attempt 2 timed practice sets on PrepGrind to calibrate speed.']
      },
      '15days': {
        title: '15-Day ALP Revision',
        summary: 'Solve past ALP shifts. Focus heavily on physics numericals.',
        schedule: [
          'Days 1-5: Solve 5 official previous year shifts.',
          'Days 6-10: Review chemistry reactions. Practice 15 math questions.',
          'Days 11-14: Settle 4 ALP full mocks. Target a 65+ score.',
          'Day 15: Run through science topper capsules.'
        ],
        tips: ['Focus on science numerical problems.', 'Study sports awards of past 1 year.', 'Attempt 6 speed-booster sets.']
      },
      '30days': {
        title: '30-Day ALP Crash Blueprint',
        summary: 'Increase test tempo on PrepGrind. Transition into mock environments.',
        schedule: [
          'Week 1: Focus on Quant arithmetic chapters. Take daily quizzes.',
          'Week 2: Study Physics mechanics, electricity, and chemistry.',
          'Week 3: Solve 10 ALP CBT-1 previous year papers on PrepGrind.',
          'Week 4: Final simulated mock runs, review percentiles.'
        ],
        tips: ['Daily 60-minute quick mocks on PrepGrind.', 'Review speed ratios.', 'Revise handwritten formulas daily.']
      },
      '3months': {
        title: '3-Month CBT Preparation',
        summary: 'Month 1: General science concepts. Month 2: Mental ability coding, series. Month 3: Mocks.',
        schedule: [
          'Month 1: In-depth study of Physics, Chemistry, and Life Sciences.',
          'Month 2: Solve 100+ topic-wise questions daily. Settle logic.',
          'Month 3: Attempt 20 full-length mocks on PrepGrind.'
        ],
        tips: ['Create physics & chemistry personal short formula registers.', 'Solve daily 30 reasoning questions.', 'Complete 20 premium ALP mocks under 60-minute limits.']
      },
      '6months': {
        title: '6-Month Comprehensive Path',
        summary: 'Comprehensive theory coverage of Basic Science & Engineering.',
        schedule: [
          'Month 1 & 2: Detailed science & engineering theory classes.',
          'Month 3: Attempt all previous shifts of the ALP exam.',
          'Month 4: Perform engineering drawing basic revisions.',
          'Month 5 & 6: Settle 40+ simulated mocks, track zonal scores.'
        ],
        tips: ['Exexhaustively study engineering drawing and IT literacy capsules.', 'Attempt 40 ALP CBT-1 mocks on PrepGrind.', 'Track shift cutoffs across zonal boards to refine zone targets.']
      },
      '12months': {
        title: '12-Month Elite ALP Program',
        summary: 'Complete zero-to-hero preparation cycle for both CBT-1 and CBT-2.',
        schedule: [
          'Phase 1 (Month 1-4): Theoretical science & technical trade mastery.',
          'Phase 2 (Month 5-8): Solve 10,000+ topic questions.',
          'Phase 3 (Month 9-10): Solve all past shift papers under timing.',
          'Phase 4 (Month 11-12): Attempt 75+ simulated full mocks.'
        ],
        tips: ['Cover all technical trade syllabus topics deeply.', 'Master all past ALP papers (CBT-1 & CBT-2 shifts).', 'Ensure top rankings in weekly All India Live Challenges.']
      }
    }
  };

  // PYQs Data (8 shifts per selected exam - exact years: 2025, 2024, 2023, 2022)
  const pyqData: Record<string, { year: string; shift: string; title: string; link: string; analytics: string; avgScore: string }[]> = {
    'RRB NTPC': [
      { year: '2025', shift: 'Shift 1 (CBT-1)', title: 'RRB NTPC Official Paper - 28 Feb 2025', link: 'https://prepgrind.com', analytics: '45,280 candidates attempted', avgScore: 'Avg Score: 68.5' },
      { year: '2025', shift: 'Shift 2 (CBT-1)', title: 'RRB NTPC Official Paper - 15 Mar 2025', link: 'https://prepgrind.com', analytics: '38,150 candidates attempted', avgScore: 'Avg Score: 64.2' },
      { year: '2024', shift: 'Shift 1 (CBT-1)', title: 'RRB NTPC Official Paper - 16 Jul 2024', link: 'https://prepgrind.com', analytics: '41,920 candidates attempted', avgScore: 'Avg Score: 67.8' },
      { year: '2024', shift: 'Shift 2 (CBT-1)', title: 'RRB NTPC Solved Shift - 28 Aug 2024', link: 'https://prepgrind.com', analytics: '29,450 candidates attempted', avgScore: 'Avg Score: 71.4' },
      { year: '2023', shift: 'Shift 1 (CBT-1)', title: 'RRB NTPC Official Paper - 02 Feb 2023', link: 'https://prepgrind.com', analytics: '36,890 candidates attempted', avgScore: 'Avg Score: 62.9' },
      { year: '2023', shift: 'Shift 2 (CBT-1)', title: 'RRB NTPC Official Paper - 15 Feb 2023', link: 'https://prepgrind.com', analytics: '39,120 candidates attempted', avgScore: 'Avg Score: 65.5' },
      { year: '2022', shift: 'Shift 1 (CBT-1)', title: 'RRB NTPC Official Paper - 03 Jun 2022', link: 'https://prepgrind.com', analytics: '32,540 candidates attempted', avgScore: 'Avg Score: 63.8' },
      { year: '2022', shift: 'Shift 2 (CBT-1)', title: 'RRB NTPC Official Paper - 14 Jun 2022', link: 'https://prepgrind.com', analytics: '35,110 candidates attempted', avgScore: 'Avg Score: 66.2' }
    ],
    'RRB Group D': [
      { year: '2025', shift: 'Shift 1 (CBT)', title: 'RRB Group D Official Shift - 12 Jan 2025', link: 'https://prepgrind.com', analytics: '68,240 attempted', avgScore: 'Avg: 58.5' },
      { year: '2025', shift: 'Shift 2 (CBT)', title: 'RRB Group D Official Shift - 18 Jan 2025', link: 'https://prepgrind.com', analytics: '62,110 attempted', avgScore: 'Avg: 56.4' },
      { year: '2024', shift: 'Shift 1 (CBT)', title: 'RRB Group D Solved Paper - 17 Sep 2024', link: 'https://prepgrind.com', analytics: '55,900 attempted', avgScore: 'Avg: 62.1' },
      { year: '2024', shift: 'Shift 2 (CBT)', title: 'RRB Group D Solved Paper - 22 Oct 2024', link: 'https://prepgrind.com', analytics: '49,230 attempted', avgScore: 'Avg: 60.8' },
      { year: '2023', shift: 'Shift 1 (CBT)', title: 'RRB Group D Official Shift - 25 Aug 2023', link: 'https://prepgrind.com', analytics: '61,840 attempted', avgScore: 'Avg: 55.9' },
      { year: '2023', shift: 'Shift 2 (CBT)', title: 'RRB Group D Official Shift - 08 Sep 2023', link: 'https://prepgrind.com', analytics: '59,200 attempted', avgScore: 'Avg: 57.2' },
      { year: '2022', shift: 'Shift 1 (CBT)', title: 'RRB Group D Official Shift - 19 Sep 2022', link: 'https://prepgrind.com', analytics: '54,380 attempted', avgScore: 'Avg: 54.8' },
      { year: '2022', shift: 'Shift 2 (CBT)', title: 'RRB Group D Official Shift - 06 Oct 2022', link: 'https://prepgrind.com', analytics: '51,450 attempted', avgScore: 'Avg: 56.9' }
    ],
    'RPF Constable': [
      { year: '2025', shift: 'Shift 1 (CBT)', title: 'RPF Constable Official Shift - 10 Jan 2025', link: 'https://prepgrind.com', analytics: '28,150 attempted', avgScore: 'Avg: 82.5' },
      { year: '2025', shift: 'Shift 2 (CBT)', title: 'RPF Constable Official Shift - 25 Jan 2025', link: 'https://prepgrind.com', analytics: '24,980 attempted', avgScore: 'Avg: 78.4' },
      { year: '2024', shift: 'Shift 1 (CBT)', title: 'RPF Constable Solved Shift - 22 Jul 2024', link: 'https://prepgrind.com', analytics: '26,450 attempted', avgScore: 'Avg: 80.9' },
      { year: '2024', shift: 'Shift 2 (CBT)', title: 'RPF Constable Solved Paper - 18 Aug 2024', link: 'https://prepgrind.com', analytics: '19,230 attempted', avgScore: 'Avg: 85.1' },
      { year: '2023', shift: 'Shift 1 (CBT)', title: 'RPF Constable Official Shift - 28 Feb 2023', link: 'https://prepgrind.com', analytics: '22,450 attempted', avgScore: 'Avg: 77.9' },
      { year: '2023', shift: 'Shift 2 (CBT)', title: 'RPF Constable Official Shift - 04 Mar 2023', link: 'https://prepgrind.com', analytics: '21,120 attempted', avgScore: 'Avg: 76.8' },
      { year: '2022', shift: 'Shift 1 (CBT)', title: 'RPF Constable Official Shift - 18 May 2022', link: 'https://prepgrind.com', analytics: '20,540 attempted', avgScore: 'Avg: 79.2' },
      { year: '2022', shift: 'Shift 2 (CBT)', title: 'RPF Constable Official Shift - 25 May 2022', link: 'https://prepgrind.com', analytics: '23,110 attempted', avgScore: 'Avg: 81.4' }
    ],
    'RRB JE': [
      { year: '2025', shift: 'Shift 1 (CBT-1)', title: 'RRB JE Official CBT-1 Paper - 12 Jan 2025', link: 'https://prepgrind.com', analytics: '32,540 attempted', avgScore: 'Avg: 65.5' },
      { year: '2025', shift: 'Shift 2 (CBT-1)', title: 'RRB JE Official CBT-1 Paper - 28 Jan 2025', link: 'https://prepgrind.com', analytics: '29,180 attempted', avgScore: 'Avg: 62.4' },
      { year: '2024', shift: 'Shift 1 (CBT-1)', title: 'RRB JE Solved CBT-1 Shift - 30 Jul 2024', link: 'https://prepgrind.com', analytics: '31,450 attempted', avgScore: 'Avg: 64.9' },
      { year: '2024', shift: 'Shift 2 (CBT-1)', title: 'RRB JE Technical Solved Paper - 15 Aug 2024', link: 'https://prepgrind.com', analytics: '18,900 attempted', avgScore: 'Avg: 68.2' },
      { year: '2023', shift: 'Shift 1 (CBT-1)', title: 'RRB JE Official CBT-1 Paper - 02 Mar 2023', link: 'https://prepgrind.com', analytics: '27,540 attempted', avgScore: 'Avg: 61.8' },
      { year: '2023', shift: 'Shift 2 (CBT-1)', title: 'RRB JE Official CBT-1 Paper - 15 Mar 2023', link: 'https://prepgrind.com', analytics: '28,120 attempted', avgScore: 'Avg: 63.5' },
      { year: '2022', shift: 'Shift 1 (CBT-1)', title: 'RRB JE Official CBT-1 Paper - 24 Jun 2022', link: 'https://prepgrind.com', analytics: '25,380 attempted', avgScore: 'Avg: 60.9' },
      { year: '2022', shift: 'Shift 2 (CBT-1)', title: 'RRB JE Official CBT-1 Paper - 28 Jun 2022', link: 'https://prepgrind.com', analytics: '26,110 attempted', avgScore: 'Avg: 62.8' }
    ],
    'RRB ALP': [
      { year: '2025', shift: 'Shift 1 (CBT-1)', title: 'RRB ALP Official Paper - 09 Jan 2025', link: 'https://prepgrind.com', analytics: '52,450 attempted', avgScore: 'Avg: 48.5' },
      { year: '2025', shift: 'Shift 2 (CBT-1)', title: 'RRB ALP Official Paper - 23 Jan 2025', link: 'https://prepgrind.com', analytics: '48,120 attempted', avgScore: 'Avg: 46.2' },
      { year: '2024', shift: 'Shift 1 (CBT-2)', title: 'RRB ALP Solved CBT-2 Stage B - 21 Jul 2024', link: 'https://prepgrind.com', analytics: '32,540 attempted', avgScore: 'Avg: 52.9' },
      { year: '2024', shift: 'Shift 2 (CBT-1)', title: 'RRB ALP Stage 1 Solved Paper - 15 Aug 2024', link: 'https://prepgrind.com', analytics: '28,110 attempted', avgScore: 'Avg: 50.4' },
      { year: '2023', shift: 'Shift 1 (CBT-1)', title: 'RRB ALP Official Paper - 20 Mar 2023', link: 'https://prepgrind.com', analytics: '45,380 attempted', avgScore: 'Avg: 45.9' },
      { year: '2023', shift: 'Shift 2 (CBT-1)', title: 'RRB ALP Official Paper - 31 Mar 2023', link: 'https://prepgrind.com', analytics: '42,120 attempted', avgScore: 'Avg: 47.1' },
      { year: '2022', shift: 'Shift 1 (CBT-2)', title: 'RRB ALP Solved CBT-2 Stage A - 22 Jun 2022', link: 'https://prepgrind.com', analytics: '31,540 attempted', avgScore: 'Avg: 51.8' },
      { year: '2022', shift: 'Shift 2 (CBT-2)', title: 'RRB ALP Solved CBT-2 Stage A - 28 Jun 2022', link: 'https://prepgrind.com', analytics: '29,870 attempted', avgScore: 'Avg: 50.1' }
    ]
  };

  // Handwritten Notes Data
  const topperNotes = [
    { title: 'Quantitative Aptitude Comprehensive Short Tricks Register', size: '12.8 MB', pages: '240 pages', rating: '4.9 ★', category: 'Maths', desc: 'Handwritten formulas, speed calculations methods, and unit digit tricks across all 18 arithmetic modules.' },
    { title: 'General Science Physics & Chemistry Core Numerical Capsules', size: '15.2 MB', pages: '190 pages', rating: '4.8 ★', category: 'Science', desc: 'CBSE 10th-standard mechanics formulas, optics ray diagrams, balance equation codes, and structural elements indices.' },
    { title: 'Reasoning Logical Coding & Puzzle Distribution Notebook', size: '8.5 MB', pages: '145 pages', rating: '4.9 ★', category: 'Reasoning', desc: 'Topper shortcuts for seating arrangements, complex chinese coding systems, and syllogisms Venn diagram tricks.' },
    { title: 'Indian Constitution & Core Polity Landmark Amendments', size: '6.4 MB', pages: '112 pages', rating: '4.9 ★', category: 'General Knowledge', desc: 'All 395 Articles, core amendments, scheduling timelines, and President/Governor executive codes.' },
    { title: 'Indian History & Freedom Struggle Chronology Charts', size: '7.8 MB', pages: '135 pages', rating: '4.8 ★', category: 'General Knowledge', desc: 'Indus valley physical map, ancient dynasties timelines, medieval battle charts, and national movements logs (1857-1947).' },
    { title: 'General Life Sciences Human Physiology & Cell structures', size: '9.2 MB', pages: '160 pages', rating: '4.9 ★', category: 'Science', desc: 'Handwritten sketches of plant/animal cells, detailed digestion/circulatory logs, and chemical compound properties.' }
  ];

  // Cheat Sheets Data
  const cheatSheets = [
    { title: 'Indian Constitution: 100 Most Important Articles Cheat Sheet', description: 'Important constitutional articles, parts, scheduling indices, and recent constitutional amendments structured in a high-density tabular outline.', size: '2.5 MB' },
    { title: 'Periodic Table & Chemistry Reaction Quick Formulas Cheat Sheet', description: 'Chemical compounds nomenclatures, periodic grouping properties, element valency indicators, and common balancing formulas.', size: '3.1 MB' },
    { title: 'Geometry & Advanced Mensuration Quick Revision Cheat Sheet', description: 'Complete 2D/3D surface area and volume equations, trigonometric ratios, heights/distances values, and coordinate scales.', size: '2.8 MB' },
    { title: 'General Physics Units, Constants, and Mechanics Equations Cheat Sheet', description: 'Force equations, optics refractive indices, sound frequencies, work-energy ratios, and SI conversions charts.', size: '2.2 MB' },
    { title: 'Verbal Reasoning sign shifts and Jumbling shortcuts Cheat Sheet', description: 'Alphabet grid placement codes (A-Z forward/reverse values), blood relation symbolic trees, and Venn diagram course of actions.', size: '1.9 MB' },
    { title: 'Static GK Rivers, Mountain Passes, and National Parks Cheat Sheet', description: 'High-density physical lists of major Indian river origins, Himalayan passes heights, and tiger reserves maps.', size: '3.5 MB' }
  ];

  // Current Affairs Data
  const currentAffairs = [
    { month: 'April 2026', title: 'Monthly Current Affairs Topper Capsule', type: 'Full Booklet', downloadCount: '15.2K downloads', desc: 'Summits, economic indicators, space projects, and national policies of April 2026.' },
    { month: 'March 2026', title: 'Monthly Current Affairs Topper Capsule', type: 'Full Booklet', downloadCount: '18.4K downloads', desc: 'Detailed sports awards, bilateral defense mock exercises, and central schemes budget allocations.' },
    { month: 'February 2026', title: 'Monthly Current Affairs Topper Capsule', type: 'Full Booklet', downloadCount: '16.9K downloads', desc: 'Zonal railway updates, international cabinet leaders, national awards, and economic indices.' },
    { month: 'January 2026', title: 'Monthly Current Affairs Topper Capsule', type: 'Full Booklet', downloadCount: '19.1K downloads', desc: 'Detailed republic day events highlights, scientific launches, global parameters reports, and banking policies.' },
    { month: 'Weekly Update', title: 'Railway Zonal Special GK & Current Affairs Capsule', type: 'GK Booklet', downloadCount: '12.5K downloads', desc: 'Specialized historical facts and zone milestones of Indian Railway systems for targeted board exams.' },
    { month: 'Annual Special', title: 'Union Budget 2026 & Economic Survey Highlights Booklet', type: 'GK Booklet', downloadCount: '22.8K downloads', desc: 'High-density budget indices, tax brackets, railway development layouts, and GDP projection charts.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ textAlign: 'left', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/study-material" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Study Material</Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: '600' }}>Topper Premium Vault</span>
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-xl)', color: '#fff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            <Zap size={14} color="#facc15" style={{ animation: 'bounce 1s infinite' }} /> 100% Free Topper Resources Added
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '800' }}>
                Ultimate <span style={{ color: '#facc15' }}>Study Material</span> & Toppers' Premium Vault
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Supercharge your railway preparation with our complete study vault curated by senior railway educators. Access official syllabus checklists, strategic revision schedules, previous year question papers (PYQs), handwritten notes, and current affairs booklets.
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Select your targeted exam below to unlock specific, comprehensive study capsules, cheat sheets, and solved PYQ files tailored to match the latest recruitment boards.
              </p>
            </div>

            {/* Quick Stats in Hero */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center', color: '#fff' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>10K+</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Free PDFs</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>50+</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Shift PYQs</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>100%</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Free Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steady Exams Selector Card (Horizontal, placed BELOW the first/hero section) */}
      <div style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Select Targeted Railway Exam
            </span>
          </div>

          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            {examsList.map((exam) => (
              <button 
                key={exam.id} 
                className={`explorer-tab ${selectedExam === exam.id ? 'active' : ''}`}
                onClick={() => setSelectedExam(exam.id)}
                style={{ 
                  fontSize: '0.95rem', 
                  padding: '0.75rem 1.5rem', 
                  fontWeight: '800',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--border-color)',
                  fontFamily: 'Outfit',
                  boxShadow: selectedExam === exam.id ? '0 4px 12px rgba(212, 83, 63, 0.15)' : 'none'
                }}
              >
                {exam.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Massive Content Grid Layout */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '5rem 0' }}>
        <div className="container">

          {/* TWO-COLUMN GRID: Left Column (Syllabus Scrollable) & Middle/Right Columns (Other Info) */}
          <div className="responsive-grid-12" style={{ gap: '2.5rem', alignItems: 'start'  }}>
            
            {/* LEFT COLUMN: Sticky Sidebar featuring Checklist & PrepGrind Special Promotion Ad */}
            <div style={{ 
              gridColumn: 'span 4', 
              position: 'sticky', 
              top: '6rem', 
              alignSelf: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }} className="explorer-sidebar">
              
              {/* Syllabus Scrollable Container */}
              <div style={{
                maxHeight: '400px',
                overflowY: 'auto',
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }} className="scrollbar-styled">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <BookOpen size={20} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    {selectedExam} Syllabus Checklist
                  </h3>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  Tick off each finished module from the official RRB syllabus outline:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {syllabusData[selectedExam]?.map((item, index) => {
                    const [subject, content] = item.subject.split(' (');
                    return (
                      <div key={index} style={{ borderBottom: index !== syllabusData[selectedExam].length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: '1rem' }}>
                        <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.6rem', fontFamily: 'Outfit' }}>
                          {subject}
                        </span>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {item.subtopics.map((topic, tIdx) => {
                            const [topicTitle, topicDesc] = topic.split(': ');
                            return (
                              <div key={tIdx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8rem', lineHeight: '1.35' }}>
                                <span style={{ 
                                  width: '14px', 
                                  height: '14px', 
                                  borderRadius: '3px', 
                                  backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                                  color: 'var(--primary)', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center', 
                                  fontSize: '0.55rem',
                                  fontWeight: '900',
                                  flexShrink: 0,
                                  marginTop: '0.1rem',
                                  border: '1px solid var(--primary)'
                                }}>✓</span>
                                <div>
                                    <span style={{ fontWeight: '750', color: 'var(--text-main)' }}>{topicTitle}: </span>
                                    <span style={{ color: 'var(--text-muted)' }}>{topicDesc}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic PrepGrind Sidebar Promotion Ad (fills the left column space perfectly) */}
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
                    Access 50,000+ Mocks
                  </h5>

                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: 'rgba(255,255,255,0.9)', 
                    lineHeight: '1.4', 
                    marginBottom: '1rem' 
                  }}>
                    Unlock bilingual tests, sectional strategies, and full detailed solution keys. Register now!
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    color: '#facc15' 
                  }}>
                    <span>Get Free Access</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </a>

            </div>

            {/* MIDDLE & RIGHT COLUMNS: Other Info (Span 8) */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>

              {/* SECTION A: CBT Exam Structure */}
              <div style={{ 
                backgroundColor: 'var(--surface)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '2.5rem', 
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <Award size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    {selectedExam} Structural Parameters
                  </h3>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Familiarize yourself with the exam clock structure and negative score rules to design your speed strategy:
                </p>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '1.25rem', 
                  marginBottom: '2rem',
                  backgroundColor: 'var(--bg-color)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Questions</span>
                    <p style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', margin: '0.15rem 0 0 0', fontFamily: 'Outfit' }}>
                      {examStructureData[selectedExam]?.totalQs} Qs
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Marks</span>
                    <p style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', margin: '0.15rem 0 0 0', fontFamily: 'Outfit' }}>
                      {examStructureData[selectedExam]?.totalMarks} Marks
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CBT Duration</span>
                    <p style={{ fontSize: '1.15rem', fontWeight: '850', color: 'var(--text-main)', margin: '0.15rem 0 0 0', fontFamily: 'Outfit' }}>
                      {examStructureData[selectedExam]?.duration}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Negative Marking</span>
                    <p style={{ fontSize: '0.85rem', fontWeight: '850', color: '#d03801', margin: '0.15rem 0 0 0', lineHeight: '1.3' }}>
                      {examStructureData[selectedExam]?.negativeMarking}
                    </p>
                  </div>
                </div>

                <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Sectional Questions Breakdown
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {examStructureData[selectedExam]?.sections.map((section, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '1rem 1.25rem', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--surface)'
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-main)', display: 'block' }}>{section.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>{section.weightage}</span>
                      </div>
                      <span style={{ fontWeight: '850', fontSize: '1rem', color: 'var(--primary)', fontFamily: 'Outfit' }}>{section.qs} Qs</span>
                    </div>
                  ))}
                </div>

                <div style={{ 
                  padding: '1.25rem', 
                  backgroundColor: 'var(--primary-light)', 
                  borderRadius: 'var(--radius-md)', 
                  borderLeft: '4px solid var(--primary)',
                  fontSize: '0.85rem',
                  lineHeight: '1.5'
                }}>
                  <span style={{ fontWeight: '800', color: 'var(--primary)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Normalization & Selection Parameters
                  </span>
                  <p style={{ color: 'var(--text-main)', fontWeight: '500', marginBottom: '0.4rem' }}>
                    {examStructureData[selectedExam]?.normalizedRules}
                  </p>
                  <p style={{ color: 'var(--text-main)', fontWeight: '700', margin: '0' }}>
                    {examStructureData[selectedExam]?.stage2Note}
                  </p>
                </div>
              </div>

              {/* SECTION B: Revision & Preparation Strategies */}
              <div style={{ 
                backgroundColor: 'var(--surface)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '2.5rem', 
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <TrendingUp size={24} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    Revision & Study Roadmap Strategies
                  </h3>
                </div>

                {/* Strategy Tabs */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0.4rem', 
                  flexWrap: 'wrap', 
                  marginBottom: '2rem',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '0.75rem'
                }}>
                  {[
                    { id: '7days', name: '7 Days Revision' },
                    { id: '15days', name: '15 Days Revision' },
                    { id: '30days', name: '30 Days Plan' },
                    { id: '3months', name: '3 Months' },
                    { id: '6months', name: '6 Months' },
                    { id: '12months', name: '12 Months' }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveStrategyTab(tab.id)}
                      className={`explorer-tab ${activeStrategyTab === tab.id ? 'active' : ''}`}
                      style={{ 
                        fontSize: '0.85rem', 
                        padding: '0.5rem 1rem', 
                        fontWeight: '800',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                {strategyData[selectedExam]?.[activeStrategyTab] && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    
                    {/* Day-by-day actions */}
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: '850', color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'Outfit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={18} /> Plan Schedule Checklist
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                        {strategyData[selectedExam][activeStrategyTab].summary}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                        {strategyData[selectedExam][activeStrategyTab].schedule.map((day, dIdx) => (
                          <div 
                            key={dIdx} 
                            style={{ 
                              backgroundColor: 'var(--bg-color)', 
                              borderRadius: 'var(--radius-md)', 
                              padding: '1.125rem 1.25rem', 
                              borderLeft: '3px solid var(--primary)',
                              fontSize: '0.875rem',
                              lineHeight: '1.5',
                              color: 'var(--text-main)',
                              fontWeight: '600'
                            }}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Topper checklist */}
                    <div style={{ 
                      backgroundColor: 'var(--bg-color)', 
                      borderRadius: 'var(--radius-lg)', 
                      padding: '1.75rem',
                      border: '1px solid var(--border-color)'
                    }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'Outfit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Shield size={18} color="var(--primary)" /> Actionable Topper Tips
                      </h4>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {strategyData[selectedExam][activeStrategyTab].tips.map((tip, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.875rem', lineHeight: '1.4' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: '900' }}>✓</span>
                            <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* SECTION C: Solved PYQs Shifts */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={22} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                      {selectedExam} Solved PYQ Papers
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
                  {pyqData[selectedExam]?.map((paper, idx) => (
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      key={idx} 
                      style={{ 
                        backgroundColor: 'var(--surface)', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: 'var(--radius-xl)', 
                        padding: '1.5rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      className="card-hover-effect"
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                          <span style={{ 
                            fontSize: '0.65rem', 
                            padding: '0.2rem 0.5rem', 
                            backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                            color: 'var(--primary)', 
                            borderRadius: '4px', 
                            fontWeight: '800' 
                          }}>
                            {paper.year}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                            {paper.shift}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.35', marginBottom: '1rem', fontFamily: 'Outfit' }}>
                          {paper.title}
                        </h4>

                        <div style={{ 
                          borderTop: '1px solid var(--border-color)', 
                          paddingTop: '0.5rem', 
                          marginBottom: '1rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          fontWeight: '600'
                        }}>
                          <span>{paper.analytics}</span>
                          <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{paper.avgScore}</span>
                        </div>
                      </div>

                      <div className="btn-primary" style={{ 
                        width: '100%', 
                        padding: '0.6rem', 
                        borderRadius: 'var(--radius-md)', 
                        fontWeight: '700', 
                        fontSize: '0.8rem',
                        textAlign: 'center',
                        justifyContent: 'center'
                      }}>
                        Attempt Paper <ArrowRight size={12} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* SECTION D: Handwritten Topper Notes */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <FileText size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    Premium Handwritten Topper Registers
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {topperNotes.map((note, idx) => (
                    <a 
                      href="https://prepgrind.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      key={idx} 
                      style={{ 
                        backgroundColor: 'var(--surface)', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: 'var(--radius-xl)', 
                        padding: '1.5rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      className="card-hover-effect"
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(212, 83, 63, 0.1)', color: 'var(--primary)', borderRadius: '4px', fontWeight: '800' }}>
                            {note.category}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: '#facc15', fontWeight: '700' }}>
                            {note.rating}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'Outfit', lineHeight: '1.3' }}>
                          {note.title}
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                          {note.desc}
                        </p>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifySelf: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.75rem' }}>
                          <span>{note.pages}</span>
                          <span>•</span>
                          <span>{note.size}</span>
                        </div>
                        <div className="btn-primary" style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-md)', fontWeight: '750', fontSize: '0.8rem', justifySelf: 'center', textAlign: 'center' }}>
                          <Download size={13} /> Download PDF Notes
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* SECTION E: Cheat Sheets */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <Zap size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    Quick Study Cheat Sheets
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {cheatSheets.map((sheet, idx) => (
                    <a 
                      href="https://prepgrind.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      key={idx} 
                      style={{ 
                        backgroundColor: 'var(--surface)', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: 'var(--radius-xl)', 
                        padding: '1.5rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      className="card-hover-effect"
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                            {sheet.size}
                          </span>
                          <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', backgroundColor: '#def7ec', color: '#03543f', borderRadius: '4px', fontWeight: '800' }}>
                            HIGH DENSITY
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'Outfit', lineHeight: '1.3' }}>
                          {sheet.title}
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                          {sheet.description}
                        </p>
                      </div>

                      <div className="btn-primary" style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-md)', fontWeight: '750', fontSize: '0.8rem', justifySelf: 'center', textAlign: 'center' }}>
                        <Download size={13} /> Download Cheat Sheet
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* SECTION F: Current Affairs Capsules */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <Globe size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    Current Affairs & GK Booklets
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  {currentAffairs.map((capsule, idx) => (
                    <a 
                      href="https://prepgrind.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      key={idx} 
                      style={{ 
                        backgroundColor: 'var(--surface)', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: 'var(--radius-xl)', 
                        padding: '1.5rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      className="card-hover-effect"
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {capsule.month}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                            {capsule.type}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'Outfit', lineHeight: '1.3' }}>
                          {capsule.title}
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                          {capsule.desc}
                        </p>
                      </div>

                      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                        <span>{capsule.downloadCount}</span>
                        <span style={{ color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                          PDF <Download size={12} />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* SECTION G: PYQs Call-to-action */}
              <div style={{ 
                textAlign: 'center', 
                padding: '2.5rem 2rem', 
                backgroundColor: 'var(--primary-light)', 
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(212, 83, 63, 0.15)'
              }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'Outfit', fontWeight: '850' }}>
                  Attempt Zonal CBT Papers on PrepGrind!
                </h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto 1.5rem auto', lineHeight: '1.5', fontWeight: '600' }}>
                  Practicing raw PDFs won't prepare you for clock constraints. Settle in for fully interactive simulated CBT mock shift papers with live zone scoreboards on PrepGrind.
                </p>
                <a 
                  href="https://prepgrind.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Attempt Solved PYQs Live <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>

          {/* SECTION H: FAQ Accordion Section (At the End, full-width) */}
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
                Study Vault FAQs
              </span>
              <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Everything you need to know about our toppers' premium notes registers, cheat sheets, monthly capsules, and syllabus downloads.
              </p>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: "Are all the study material PDFs on Railgrind 100% free of charge?",
                  a: "Yes! Every single topper note, periodic cheat sheet, solved shift paper, and current affairs booklet in this premium vault is completely free to read and download. There are no hidden subscription charges."
                },
                {
                  q: "Who curates and designs the handwritten notes in the toppers' vault?",
                  a: "Our handwritten notes are compiled from the actual class registers of previously selected toppers in RRB NTPC, ALP, and Group D exams, reviewed and refined by senior railway GK and Quant specialists."
                },
                {
                  q: "Do the PDF resources support bilingual options (English & Hindi)?",
                  a: "Absolutely. All major formula registers, daily GK cheat sheets, monthly current affairs capsules, and previous year mock files support fully translated bilingual options (English & Hindi) to cater to all aspirants."
                },
                {
                  q: "How often are the Current Affairs capsules and Budget booklets updated?",
                  a: "Our monthly Current Affairs books and weekly specialized GK booklets are updated every weekly cycle. Major central government allocations, budgets, and sports awards booklets are pushed within 24 hours of national updates."
                },
                {
                  q: "What is the benefit of the dynamic Syllabus Checklist in the left sidebar?",
                  a: "It acts as a real-time progress register. As you review chapters in physics, coordinate geometry, or polity articles, you can track exactly what percentage of the active exam syllabus remains."
                },
                {
                  q: "Can I print these toppers' notes and study files locally?",
                  a: "Yes, once downloaded, the PDF files are completely unlocked and optimized for standard A4 printing, allowing you to build your offline study registers."
                },
                {
                  q: "How do the 'Quick Study Cheat Sheets' differ from standard Toppers' Notes?",
                  a: "Standard toppers' notes are highly detailed, multi-page conceptual explanations. In contrast, Cheat Sheets are ultra-compact, high-density 2-page tabular summaries meant exclusively for final-day rapid revisions."
                },
                {
                  q: "How can I attempt these previous year shift papers (PYQs) as live mocks?",
                  a: "Simply click any solved paper card, which will direct you to PrepGrind. There, you can take the shift in a live CBT countdown browser with zero-latency, shift-based percentiles, and zone rankings."
                }
              ].map((faq, index) => (
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
