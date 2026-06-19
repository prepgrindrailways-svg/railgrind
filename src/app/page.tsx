"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { BookOpen, FileText, MonitorPlay, PenTool, LayoutList, Flame, ArrowRight, BellRing, Calendar, Quote, Users, Trophy, Award, Star, BarChart, Link as LinkIcon, Download, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import React from "react";
import Marquee from "@/components/Marquee";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";

export default function Home() {
  const examsData = [
    {
      id: 'rrb-ntpc',
      title: 'RRB NTPC',
      desc: 'Non-Technical Popular Categories for various zonal railways.',
      vacancies: '35,000+ Vacancies',
      eligibility: '12th / Grad',
      about: 'RRB NTPC is conducted to recruit candidates for various non-technical posts like Clerk, Station Master, etc.',
      prelimsSyllabus: 'General Awareness (40), Mathematics (30), General Intelligence & Reasoning (30).',
      mainsSyllabus: 'General Awareness (50), Mathematics (35), General Intelligence & Reasoning (35).',
      stats: 'Over 1.2 Crore applicants compete annually.',
      notification: 'APRIL 2026',
      prelims: 'JUNE 2026',
      level: 'NATIONAL LEVEL'
    },
    {
      id: 'rrb-group-d',
      title: 'RRB Group D',
      desc: 'Level 1 posts in various departments of Indian Railways.',
      vacancies: '1,00,000+ Vacancies',
      eligibility: '10th / ITI',
      about: 'RRB Group D recruits for Level-1 posts like Track Maintainer, Helper/Assistant, and Assistant Pointsman.',
      prelimsSyllabus: 'General Science (25), Mathematics (25), General Intelligence & Reasoning (30), General Awareness (20).',
      mainsSyllabus: 'Single stage CBT followed by Physical Efficiency Test (PET).',
      stats: 'Highest number of vacancies in Indian Railways.',
      notification: 'MAY 2026',
      prelims: 'AUGUST 2026',
      level: 'NATIONAL LEVEL'
    },
    {
      id: 'rrb-alp',
      title: 'RRB ALP',
      desc: 'Assistant Loco Pilot and Technician posts across zones.',
      vacancies: 'CBT 1 & 2',
      eligibility: 'Tech / Engg',
      about: 'RRB ALP is for candidates seeking a career as Assistant Loco Pilot or Technician in the Indian Railways.',
      prelimsSyllabus: 'Mathematics, General Intelligence & Reasoning, General Science, General Awareness.',
      mainsSyllabus: 'Part A: Math, Reasoning, Basic Science & Engineering. Part B: Relevant Trade.',
      stats: 'Highly competitive technical examination.',
      notification: 'MARCH 2026',
      prelims: 'JULY 2026',
      level: 'NATIONAL LEVEL'
    },
    {
      id: 'rpf-constable',
      title: 'RPF Constable',
      desc: 'Constable posts in Railway Protection Force.',
      vacancies: 'Physical Test',
      eligibility: '10th Pass',
      about: 'Recruitment for Constable (Executive) in Railway Protection Force and Railway Protection Special Force.',
      prelimsSyllabus: 'General Awareness (50), Arithmetic (35), General Intelligence & Reasoning (35).',
      mainsSyllabus: 'Followed by Physical Efficiency Test (PET) and Physical Measurement Test (PMT).',
      stats: 'Demands high physical fitness and agility.',
      notification: 'APRIL 2026',
      prelims: 'JULY 2026',
      level: 'NATIONAL LEVEL'
    },
    {
      id: 'rrb-je',
      title: 'RRB JE',
      desc: 'Junior Engineer posts across different engineering domains.',
      vacancies: 'High Salary',
      eligibility: 'Diploma / B.Tech',
      about: 'RRB JE is a premium technical exam for recruiting Junior Engineers, Depot Material Superintendents, etc.',
      prelimsSyllabus: 'Mathematics (30), General Intelligence & Reasoning (25), General Awareness (15), General Science (30).',
      mainsSyllabus: 'General Awareness (15), Physics & Chemistry (15), Basics of Computers (10), Environment (10), Technical Abilities (100).',
      stats: 'Top choice for engineering graduates in railways.',
      notification: 'JUNE 2026',
      prelims: 'OCTOBER 2026',
      level: 'NATIONAL LEVEL'
    },
    {
      id: 'rpf-si',
      title: 'RPF SI',
      desc: 'Sub Inspector posts in Railway Protection Force.',
      vacancies: 'Officer Grade',
      eligibility: 'Graduate',
      about: 'Recruitment for Sub-Inspector (Executive) in Railway Protection Force and Railway Protection Special Force.',
      prelimsSyllabus: 'General Awareness (50), Arithmetic (35), General Intelligence & Reasoning (35).',
      mainsSyllabus: 'Followed by Physical Efficiency Test (PET) and Physical Measurement Test (PMT).',
      stats: 'High prestige uniform job in Indian Railways.',
      notification: 'APRIL 2026',
      prelims: 'AUGUST 2026',
      level: 'NATIONAL LEVEL'
    }
  ];

  const [selectedExam, setSelectedExam] = useState<any>(examsData[0]);

  const resourcesData = [
    {
      id: 'test-series',
      title: 'Test Series',
      desc: 'Sectional and full-length test series to evaluate your preparation level accurately.',
      icon: <FileText size={24} />,
      features: ['Detailed solutions & analytics', 'Latest exam pattern based'],
      about: 'Our premium Test Series is crafted by subject matter experts to mirror the exact difficulty and pattern of RRB exams. It includes topic-wise, sectional, and full-length mocks.',
      recommended: 'Essential for complete preparation.',
      linkText: 'Practice Now',
      extraData: '10,000+ Questions • 50+ Full Mocks'
    },
    {
      id: 'live-tests',
      title: 'Live Tests',
      desc: 'Participate in All India Live Tests and compete with thousands of aspirants in real-time.',
      icon: <MonitorPlay size={24} />,
      features: ['All India Rank & Percentile', 'Real exam environment'],
      about: 'Simulate the exact pressure of the actual CBT exam. Live tests are conducted every weekend with a strict window, giving you a true measure of where you stand globally.',
      recommended: 'Take one every weekend.',
      linkText: 'Join Live Test',
      extraData: 'All India Ranking • Real-time Analytics'
    },
    {
      id: 'study-material',
      title: 'Study Material',
      desc: 'High-quality, curated study notes and PDFs covering all subjects comprehensively.',
      icon: <BookOpen size={24} />,
      features: ['Downloadable PDFs', 'Topic-wise formula sheets'],
      about: 'Skip the hassle of compiling notes. Our curated study materials give you crisp, to-the-point theory, standard formulas, and shortcuts specifically designed for Railways.',
      recommended: 'Use for daily revision.',
      linkText: 'Get Materials',
      extraData: '500+ PDFs • Updated Monthly'
    },
    {
      id: 'pyqs',
      title: 'Previous Year Questions',
      desc: 'Practice with previous year questions to keep you ahead of the curve.',
      icon: <Flame size={24} />,
      features: ['Shift-wise real papers', 'Subject-wise breakdown'],
      about: 'The best predictor of future exams is past exams. We have compiled and solved every official shift paper from 2018 onwards to help you spot repeating trends.',
      recommended: 'Must complete before attempting full mocks.',
      linkText: 'Explore PYQs',
      extraData: '10+ Years Papers • Bilingual Solutions'
    },
    {
      id: 'expert-blogs',
      title: 'Expert Blogs',
      desc: 'Strategies, tips, and insights from toppers to help you crack the exams with high ranks.',
      icon: <PenTool size={24} />,
      features: ['Topper interviews', 'Time management tips'],
      about: 'Learn from those who have already cracked the exam. Our blogs feature interviews, detailed study schedules, and mindset tips to keep you motivated and on track.',
      recommended: 'Read during study breaks.',
      linkText: 'Read Blogs',
      extraData: 'Weekly Articles • Expert Strategies'
    },
    {
      id: 'current-updates',
      title: 'Current Updates',
      desc: 'Stay informed with the latest notifications, admit cards, and results.',
      icon: <LayoutList size={24} />,
      features: ['Instant notifications', 'Exam date announcements'],
      about: 'Never miss a deadline. Get real-time updates directly from official RRB/RRC boards regarding recruitment notifications, syllabus changes, and result declarations.',
      recommended: 'Check weekly.',
      linkText: 'View Updates',
      extraData: 'Official Links • Real-time Alerts'
    }
  ];

  const [selectedResource, setSelectedResource] = useState<any>(resourcesData[0]);

  const schedulesData = [
    { 
      id: 'sched-ntpc', 
      exam: 'RRB NTPC (Graduate & UG)', 
      desc: 'Upcoming schedule for Non-Technical Popular Categories (Level 2 to Level 6).',
      phases: [
        { title: 'Official Notification', date: 'July 2025', details: 'The detailed Centralized Employment Notice (CEN) outlining exact post-wise vacancies, eligibility criteria, and syllabus is expected to be published on the official RRB websites.' },
        { title: 'CBT 1 (Prelims)', date: 'Nov-Dec 2025', details: 'A 90-minute computer-based test covering Mathematics, General Intelligence & Reasoning, and General Awareness. This acts as a screening stage.' },
        { title: 'CBT 2 (Mains)', date: 'March 2026', details: 'A more rigorous 120-question test for those who clear CBT 1. The difficulty level varies depending on the Pay Level (Levels 2 to 6) you are shortlisted for.' },
        { title: 'Typing / Aptitude Test', date: 'May 2026', details: 'Depending on the post (e.g., Station Master requires an Aptitude Test, while Junior Clerk requires a Typing Skill Test), this qualifying round is held for final selection.' }
      ]
    },
    { 
      id: 'sched-group-d', 
      exam: 'RRB Group D (Level 1)', 
      desc: 'Schedule for the massive Level 1 recruitment drive (Track Maintainer, Helper, etc).',
      phases: [
        { title: 'Notification Release', date: 'Oct 2024', details: 'The official CEN for Level 1 posts. Historically, this attracts over 1 crore applications nationwide.' },
        { title: 'CBT (Single Stage)', date: 'Nov 2025 - Jan 2026', details: 'Unlike NTPC, Group D usually has only one CBT. It heavily focuses on General Science (10th standard level) alongside Math and Reasoning.' },
        { title: 'PET (Physical Test)', date: 'April 2026', details: 'Candidates must carry a weight (e.g., 35kg for males) for a set distance and run 1000 meters within a strict time limit.' },
        { title: 'Document Verification', date: 'June 2026', details: 'Final stage where educational certificates, caste certificates, and medical fitness are thoroughly verified.' }
      ]
    },
    { 
      id: 'sched-alp', 
      exam: 'RRB ALP', 
      desc: 'Schedule for Assistant Loco Pilot recruitment (CEN 01/2024).',
      phases: [
        { title: 'Notification', date: 'Jan 2024', details: 'CEN 01/2024 was released with an initial number of vacancies which were later revised and increased significantly.' },
        { title: 'CBT 1', date: 'July-Aug 2024', details: 'The first stage screening test focusing on Math, Reasoning, Science, and Current Affairs.' },
        { title: 'CBT 2', date: 'Nov 2024', details: 'Consists of Part A (core subjects + Basic Science & Engineering) and Part B (Qualifying Trade Test based on your ITI/Diploma specialization).' },
        { title: 'CBAT (Psycho Test)', date: 'Feb 2025', details: 'Computer-Based Aptitude Test specifically designed to test focus, reaction time, and decision-making skills crucial for driving trains.' }
      ]
    },
    { 
      id: 'sched-je', 
      exam: 'RRB JE', 
      desc: 'Expected schedule for Junior Engineer, DMS, and CMA posts.',
      phases: [
        { title: 'Notification', date: 'March 2024', details: 'CEN 03/2024 released for technical graduates and diploma holders across various engineering disciplines.' },
        { title: 'CBT 1', date: 'Sep 2024', details: 'A non-technical screening test to filter out candidates before the core engineering examination.' },
        { title: 'CBT 2', date: 'Dec 2024', details: 'A comprehensive 150-question test containing 100 questions from technical abilities specific to the engineering domain.' },
        { title: 'Document Verification', date: 'Feb 2025', details: 'Shortlisted candidates based on CBT 2 performance undergo document checks and strict medical examinations.' }
      ]
    },
    { 
      id: 'sched-rpf', 
      exam: 'RPF SI & Constable', 
      desc: 'Recruitment schedule for Sub Inspector and Constable in Railway Protection Force.',
      phases: [
        { title: 'Notification', date: 'April 2024', details: 'Official notifications CEN RPF 01/2024 & 02/2024 published for uniform personnel recruitment.' },
        { title: 'CBT', date: 'Sep-Oct 2024', details: 'A 90-minute examination covering General Awareness, Arithmetic, and General Intelligence.' },
        { title: 'PMT / PET', date: 'Jan 2025', details: 'Physical Measurement Test and Physical Efficiency Test involving 1600m run, high jump, and long jump.' },
        { title: 'Medical Examination', date: 'March 2025', details: 'Rigorous medical fitness test aligned with police and security forces standards.' }
      ]
    }
  ];
  const [selectedSchedule, setSelectedSchedule] = useState<any>(schedulesData[0]);

  const cutOffData = [
    { 
      id: 'cut-ntpc', 
      exam: 'RRB NTPC (CBT 1)', 
      total: 100, 
      desc: 'Normalized cut off marks for CBT 1 to qualify for CBT 2 (varies by RRB Zone).',
      cutoffs: [
        { category: 'General (UR)', score: '78-83', details: 'Unreserved category cut-offs are consistently the highest, especially in highly sought-after zones like Allahabad and Chandigarh.' },
        { category: 'OBC (NCL)', score: '74-79', details: 'Other Backward Classes (Non-Creamy Layer) see very fierce competition, often tracking just a few points below the UR category.' },
        { category: 'EWS', score: '72-76', details: 'Economically Weaker Sections cut-offs have been gradually increasing over the years as awareness and certification availability grows.' },
        { category: 'SC', score: '65-70', details: 'Scheduled Caste cut-offs usually offer a moderate relaxation compared to the unreserved categories, varying significantly by regional zone.' },
        { category: 'ST', score: '60-65', details: 'Scheduled Tribe cut-offs are generally the lowest among major categories, though technical posts might still see competitive scoring.' }
      ]
    },
    { 
      id: 'cut-groupd', 
      exam: 'RRB Group D', 
      total: 100, 
      desc: 'Normalized cut off marks required to qualify for the Physical Efficiency Test (PET).',
      cutoffs: [
        { category: 'General (UR)', score: '68-74', details: 'Due to the sheer volume of applicants (often 1+ Crore), the UR cutoff for Group D remains highly competitive.' },
        { category: 'OBC (NCL)', score: '62-68', details: 'The OBC cutoff is slightly relaxed but requires solid performance in Science and Math sections to clear.' },
        { category: 'EWS', score: '60-65', details: 'EWS candidates generally experience a 5-8 mark relaxation compared to UR in Group D exams.' },
        { category: 'SC', score: '55-60', details: 'SC category candidates need a consistent performance, focusing heavily on basic science and reasoning to secure this score.' },
        { category: 'ST', score: '50-55', details: 'The ST cutoff is the most relaxed, providing accessible entry into Level 1 posts with moderate preparation.' }
      ]
    },
    { 
      id: 'cut-alp', 
      exam: 'RRB ALP (CBT 1)', 
      total: 75, 
      desc: 'CBT 1 cut offs out of 75 marks. Highly dependent on the chosen RRB zone.',
      cutoffs: [
        { category: 'General (UR)', score: '45-52', details: 'Scoring 45+ out of 75 usually ensures qualification for CBT 2 in most railway zones for the ALP post.' },
        { category: 'OBC (NCL)', score: '40-48', details: 'OBC candidates need to target around 60% accuracy to comfortably clear the screening stage.' },
        { category: 'EWS', score: '40-45', details: 'The EWS cutoff for technical exams like ALP often mirrors or sits just below the OBC cutoff.' },
        { category: 'SC', score: '35-40', details: 'SC category cutoffs are comparatively lower, requiring basic proficiency across all subjects to clear the 75-mark test.' },
        { category: 'ST', score: '30-35', details: 'ST candidates have the lowest barrier for CBT 1, but must still clear the qualifying trade test in CBT 2.' }
      ]
    },
    { 
      id: 'cut-je', 
      exam: 'RRB JE (CBT 1)', 
      total: 100, 
      desc: 'First stage CBT cut off marks for engineering graduates to reach CBT 2.',
      cutoffs: [
        { category: 'General (UR)', score: '72-78', details: 'Engineering graduates drive intense competition, making the UR cutoff for JE very high across almost all zones.' },
        { category: 'OBC (NCL)', score: '68-74', details: 'OBC cutoffs remain highly competitive due to the large pool of diploma and B.Tech applicants.' },
        { category: 'EWS', score: '65-70', details: 'A moderate relaxation for EWS, but still requires excellent performance in non-technical subjects like General Awareness.' },
        { category: 'SC', score: '60-65', details: 'SC cutoffs sit around the 60% mark, demanding a balanced preparation strategy.' },
        { category: 'ST', score: '55-60', details: 'ST cutoffs for Junior Engineer posts are generally the lowest but require consistent study to achieve.' }
      ]
    },
    { 
      id: 'cut-rpf', 
      exam: 'RPF SI', 
      total: 120, 
      desc: 'Out of 120 marks. RPF SI traditionally sees very high competition and cut-offs.',
      cutoffs: [
        { category: 'General (UR)', score: '95-102', details: 'RPF SI is one of the most competitive exams. Scoring above 95 out of 120 is essential for UR candidates.' },
        { category: 'OBC (NCL)', score: '92-98', details: 'The OBC cutoff is remarkably close to UR, requiring near-perfect accuracy in reasoning and arithmetic.' },
        { category: 'EWS', score: '90-95', details: 'EWS candidates must also perform exceptionally well, as the margin for error in RPF exams is very small.' },
        { category: 'SC', score: '85-90', details: 'SC cutoffs are higher than typical railway exams due to the attractive nature of the Sub-Inspector profile.' },
        { category: 'ST', score: '80-85', details: 'Even for ST candidates, a score of 80+ out of 120 is required, reflecting the overall high standard of the exam.' }
      ]
    }
  ];
  const [selectedCutOff, setSelectedCutOff] = useState<any>(cutOffData[0]);

  const vacanciesData = [
    { 
      id: 'vac-groupd', 
      exam: 'Group D (Level 1)', 
      total: '32,438', 
      desc: 'Major recruitment cycle (CEN 08/2024) across all Indian Railway zones.',
      roles: [
        { title: 'Track Maintainer Grade IV', details: 'The backbone of railway safety. Involves physically demanding field work inspecting and maintaining railway tracks to prevent derailments.' },
        { title: 'Helper / Assistant', details: 'Deployed in various technical departments (Electrical, Mechanical, Engineering) to assist technicians and engineers in maintenance yards.' },
        { title: 'Assistant Pointsman', details: 'Crucial for station operations. Responsible for operating track switches (points) and guiding train movements within the station yard.' },
        { title: 'Hospital Attendant', details: 'Posted in Railway Hospitals and dispensaries to assist medical staff and patients, ensuring smooth healthcare operations for railway employees.' }
      ]
    },
    { 
      id: 'vac-ntpc', 
      exam: 'NTPC (Grad & UG)', 
      total: '11,558', 
      desc: 'Combined vacancies for Under-Graduate and Graduate posts for 2024-2025.',
      roles: [
        { title: 'Station Master', details: 'A highly prestigious Level 6 post. Responsible for the safe and efficient operation of trains at a given station, managing signals, and overseeing station staff.' },
        { title: 'Goods Train Manager', details: 'Formerly known as Goods Guard (Level 5). In charge of freight trains, ensuring the safe delivery of goods, checking formations, and communicating with the Loco Pilot.' },
        { title: 'Commercial Apprentice', details: 'A premium Level 6 training post leading to supervisory roles in the commercial department, handling ticketing, parcel, and goods operations.' },
        { title: 'Junior Clerk cum Typist', details: 'An undergraduate Level 2 post involving clerical duties, data entry, and record maintenance in various railway administrative offices.' }
      ]
    },
    { 
      id: 'vac-alp', 
      exam: 'Assistant Loco Pilot', 
      total: '18,799', 
      desc: 'Significant increase in vacancies (CEN 01/2024) to meet operational demands.',
      roles: [
        { title: 'ALP (Electrical)', details: 'Operates electric locomotives. Responsible for assisting the main Loco Pilot, monitoring electrical parameters, calling out signals, and conducting minor troubleshooting on the run.' },
        { title: 'ALP (Mechanical)', details: 'Operates diesel locomotives. Tasks include checking fuel levels, monitoring engine temperatures, assisting with braking systems, and observing track conditions.' }
      ]
    },
    { 
      id: 'vac-je', 
      exam: 'Junior Engineer', 
      total: '7,951', 
      desc: 'Premium technical vacancies (CEN 03/2024) for engineering diploma and degree holders.',
      roles: [
        { title: 'JE (Civil)', details: 'In charge of maintaining civil infrastructure, including tracks, bridges, and station buildings. A highly responsible field job ensuring structural safety.' },
        { title: 'JE (Electrical / Mechanical)', details: 'Responsible for maintaining locomotives, train coaches, overhead equipment (OHE), and electrical installations across the railway network.' },
        { title: 'Depot Material Superintendent', details: 'Manages railway store depots. Responsible for the procurement, storage, and distribution of spare parts and materials needed for railway operations.' },
        { title: 'Chemical & Metallurgical Asst.', details: 'Works in railway laboratories conducting chemical analysis and metallurgical tests on materials like steel rails and lubricating oils to ensure quality control.' }
      ]
    },
    { 
      id: 'vac-rpf', 
      exam: 'RPF Recruitment', 
      total: '4,660', 
      desc: 'Uniformed services recruitment under Railway Protection Force (CEN 01/2024 & 02/2024).',
      roles: [
        { title: 'Sub-Inspector (SI)', details: '452 vacancies. A leadership role involving the investigation of railway crimes, managing constable squads, and ensuring the security of railway property and passengers.' },
        { title: 'Constable', details: '4,208 vacancies. The frontline security personnel of the railways. Responsibilities include escorting trains, crowd control at stations, and preventing theft.' }
      ]
    }
  ];
  const [selectedVacancy, setSelectedVacancy] = useState<any>(vacanciesData[0]);

  const salariesData = [
    { 
      id: 'sal-je', 
      exam: 'RRB JE', 
      desc: 'Excellent starting salary for Junior Engineers, complete with comprehensive railway perks.',
      components: [
        { name: 'Basic Pay (Level 6)', amount: '₹35,400', details: 'The foundational starting salary as per the 7th Pay Commission for Level 6 technical posts.' },
        { name: 'Dearness Allowance (DA)', amount: '₹17,700', details: 'Currently calculated at around 50% of Basic Pay to offset inflation. This is revised twice a year.' },
        { name: 'HRA & Transport', amount: '₹8,000+', details: 'House Rent Allowance depends on the city tier (X, Y, Z). Transport Allowance aids with commuting costs.' },
        { name: 'Estimated In-Hand', amount: '₹52,000 - ₹58,000', details: 'Net take-home pay after standard deductions like NPS (New Pension Scheme) and income tax.' }
      ]
    },
    { 
      id: 'sal-rpf', 
      exam: 'RPF Sub-Inspector', 
      desc: 'Includes specialized allowances like Ration Money and Risk Allowance for uniformed personnel.',
      components: [
        { name: 'Basic Pay (Level 6)', amount: '₹35,400', details: 'Standard Level 6 entry pay for Sub-Inspectors.' },
        { name: 'Ration Money & Risk', amount: '₹5,000+', details: 'Uniformed personnel receive a monthly Ration Money Allowance and a Risk Allowance due to the nature of police duties.' },
        { name: 'DA & HRA', amount: '₹25,000+', details: 'Standard Dearness and House Rent allowances based on the posting location.' },
        { name: 'Estimated In-Hand', amount: '₹55,000 - ₹62,000', details: 'Net salary reflecting the robust allowances granted to security forces.' }
      ]
    },
    { 
      id: 'sal-ntpc', 
      exam: 'NTPC (Station Master)', 
      desc: 'Station Masters receive additional Night Duty and Holiday shift allowances.',
      components: [
        { name: 'Basic Pay (Level 6)', amount: '₹35,400', details: 'Station Master is one of the highest-paying undergraduate/graduate posts in the NTPC category.' },
        { name: 'Night Duty & Holiday Allow.', amount: '₹3,000+', details: 'Since railway stations operate 24/7, Station Masters frequently earn extra for night shifts and working on national holidays.' },
        { name: 'DA & HRA', amount: '₹25,000+', details: 'Standard Dearness and House Rent allowances.' },
        { name: 'Estimated In-Hand', amount: '₹55,000 - ₹60,000', details: 'A highly lucrative and prestigious non-technical salary profile.' }
      ]
    },
    { 
      id: 'sal-alp', 
      exam: 'Assistant Loco Pilot', 
      desc: 'ALP salaries heavily depend on the Running Allowance (Mileage) which significantly boosts the take-home pay.',
      components: [
        { name: 'Basic Pay (Level 2)', amount: '₹19,900', details: 'While the initial basic pay is Level 2, the actual take-home is drastically higher due to running allowances.' },
        { name: 'Mileage Allowance (KMA)', amount: '₹10,000 - ₹15,000', details: 'ALPs are paid an extra allowance based on the total kilometers driven each month. This forms a massive chunk of their salary.' },
        { name: 'DA & HRA', amount: '₹12,000+', details: 'Standard DA (on Basic + 30% of Basic as running pay element) and HRA.' },
        { name: 'Estimated In-Hand', amount: '₹35,000 - ₹45,000', details: 'Varies wildly depending on how many trips the Loco Pilot makes in a given month.' }
      ]
    },
    { 
      id: 'sal-groupd', 
      exam: 'Group D (Level 1)', 
      desc: 'Starting salary for Level 1 staff with regular increments and promotion scopes.',
      components: [
        { name: 'Basic Pay (Level 1)', amount: '₹18,000', details: 'The entry-level basic pay for Track Maintainers, Assistants, and Pointsmen.' },
        { name: 'DA (Approx 50%)', amount: '₹9,000', details: 'Standard inflation offset allowance.' },
        { name: 'Hard Duty Allowance', amount: '₹2,700+', details: 'Track Maintainers specifically receive a Risk and Hardship allowance due to the physical nature of track patrolling.' },
        { name: 'Estimated In-Hand', amount: '₹25,000 - ₹28,000', details: 'A secure government salary with excellent medical and travel perks attached.' }
      ]
    }
  ];
  const [selectedSalary, setSelectedSalary] = useState<any>(salariesData[0]);

  const perksData = [
    { 
      id: 'perk-alp', 
      exam: 'Running Staff (ALP)', 
      desc: 'Operating staff receive unique running allowances that often make up 30-40% of their total salary.',
      benefits: [
        { title: 'Kilometerage Allowance (KMA)', details: 'Paid for every kilometer driven. This is the biggest perk for ALPs, significantly boosting their monthly take-home pay.' },
        { title: 'Allowance In Lieu of Running Room (ALRR)', details: 'Provided when running staff are stationed away from their headquarters and running rooms are unavailable.' },
        { title: 'Breach of Rest Allowance', details: 'Compensates staff if they are called for duty before completing their statutory rest period.' },
        { title: 'Night Duty Allowance', details: 'Extra pay calculated on an hourly basis for duties performed between 22:00 hrs and 06:00 hrs.' }
      ]
    },
    { 
      id: 'perk-je', 
      exam: 'Technical Staff (JE/SSE)', 
      desc: 'Engineers receive specific field allowances and accelerated promotions to Senior Section Engineer (SSE).',
      benefits: [
        { title: 'Project Allowance', details: 'Granted to engineers working on major construction or infrastructure projects in challenging locations.' },
        { title: 'National Holiday Allowance', details: 'Given for attending duty on gazetted national holidays to maintain uninterrupted train services.' },
        { title: 'Hard Duty Allowance', details: 'Specifically given to JE (Civil/Track) who endure harsh weather and difficult terrain during track maintenance.' },
        { title: 'Higher Transport Allowance', details: 'Engineers often receive better transport allowances due to frequent travel required within their jurisdiction.' }
      ]
    },
    { 
      id: 'perk-rpf', 
      exam: 'RPF Personnel', 
      desc: 'Security personnel get specialized allowances to compensate for the demanding nature of uniformed duty.',
      benefits: [
        { title: 'Ration Money Allowance (RMA)', details: 'A fixed monthly cash allowance provided to meet food and dietary requirements essential for physical fitness.' },
        { title: 'Uniform Allowance', details: 'An annual grant to purchase and maintain the official uniforms, boots, and other necessary gear.' },
        { title: 'Risk and Hardship Allowance', details: 'Compensates for the inherent dangers of policing, crowd control, and anti-theft operations on railway property.' },
        { title: 'Family Free Railway Passes', details: 'RPF personnel receive complimentary travel passes allowing their families to travel free of cost on trains.' }
      ]
    },
    { 
      id: 'perk-all', 
      exam: 'Universal Railway Perks', 
      desc: 'Standard benefits available to all permanent Indian Railway employees, regardless of grade.',
      benefits: [
        { title: 'Privilege Passes & PTOs', details: 'Employees receive set numbers of free passes and Privilege Ticket Orders (discounted tickets) every year for themselves and family.' },
        { title: 'Comprehensive Medical Facilities', details: 'Access to completely free healthcare at world-class Railway Hospitals for the employee and dependent family members.' },
        { title: 'Railway Quarters or HRA', details: 'Employees are either provided subsidized government housing (Railway Quarters) or a House Rent Allowance (HRA) if quarters are unavailable.' },
        { title: 'New Pension Scheme (NPS)', details: 'A robust retirement benefit where both the employee and the government contribute monthly towards a secure pension fund.' }
      ]
    }
  ];
  const [selectedPerk, setSelectedPerk] = useState<any>(perksData[0]);

  const storiesData = [
    { id: 'story-rahul', name: "Rahul Sharma (Station Master, RRB NTPC)", exam: "RRB NTPC (CBT 2 Score: 89/120)", text: "I struggled initially with the sheer volume of General Awareness. The Railgrind daily current affairs and the shift-wise PYQ mocks were my saviors. I practiced over 50 full-length tests before the actual CBT 2, which made the real exam feel like just another mock. I secured a Station Master post in my home state!", advice: "For NTPC, Time Management in the Mathematics and Reasoning sections is critical so you can comfortably read all General Awareness questions. Never guess blindly, negative marking will ruin your normalized score." },
    { id: 'story-priya', name: "Priya Singh (Track Maintainer, Group D)", exam: "RRB Group D (Raw Score: 76/100)", text: "Being from an arts background, Science was my weakest link. Railgrind’s topic-wise physics and chemistry PDFs broke down concepts to the 10th-grade level perfectly. The All India Live Tests helped me gauge my standing among thousands of peers. Balancing CBT prep with my daily 2km runs for the PET was exhausting, but absolutely worth it.", advice: "Do not wait for the CBT results to start preparing for the Physical Efficiency Test (PET). Start running daily. For the CBT, master 10th-standard NCERT Science books." },
    { id: 'story-amit', name: "Amit Kumar (Assistant Loco Pilot)", exam: "RRB ALP (Cleared CBAT Psycho Test)", text: "The technical CBT 2 (Part B) is qualifying, but it is notoriously tricky. Railgrind's trade-specific question banks helped me clear it with ease. However, the real challenge was the CBAT (Psycho Test). The battery tests require intense focus. The simulated Psycho Tests on Railgrind trained my brain to react faster under the strict time limits.", advice: "Do not neglect the Trade Test (Part B of CBT 2) while chasing high scores in Part A. For the CBAT, practice on a desktop computer, not a mobile phone, to simulate the actual exam environment." },
    { id: 'story-neha', name: "Neha Gupta (Sub-Inspector, RPF)", exam: "RPF SI (Selected in first attempt)", text: "RPF SI has one of the toughest cut-offs. I knew I had to score 100+ out of 120. I relied heavily on Railgrind's advanced Arithmetic and Reasoning modules. Their short tricks saved me minutes in the exam. The physical test (800m run) was grueling, but the mental toughness I built through rigorous daily mock tests carried me through.", advice: "Accuracy is everything in RPF exams. Attempt questions in three rounds: do the easy ones first, skip the lengthy arithmetic for the second round, and only take calculated risks in the final minutes." }
  ];
  const [selectedStory, setSelectedStory] = useState<any>(storiesData[0]);

  const notificationsData = [
    { date: "June 19, 2026", title: "RRB Group D 2026 City Intimation Slip Released. Check your exam city now.", badge: "New" },
    { date: "June 15, 2026", title: "RPF SI Physical Measurement Test (PMT) Schedule Published.", badge: "Schedule" },
    { date: "June 10, 2026", title: "RRB NTPC CBT 2 Admit Cards now available for download.", badge: "Admit Card" },
    { date: "June 05, 2026", title: "RRB ALP Revised Vacancies list published. Check updated zone-wise vacancies.", badge: "Update" },
    { date: "May 28, 2026", title: "RRB JE 2026 Application Correction Window closes today.", badge: "Alert" }
  ];

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Railgrind",
    "alternateName": "Railgrind AI",
    "image": "https://railgrind.com/logo.png",
    "url": "https://railgrind.com",
    "telephone": "9325216364",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Makhmalabad road, Panchavati, Nashik",
      "addressLocality": "Nashik",
      "postalCode": "422003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.9975,
      "longitude": 73.7898
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "18:30"
    }
  };

  const productSchema = {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Free SSC, Banking & Railway Mock Test to Achieve Top Rank - Railgrind",
    "url": "https://railgrind.com",
    "image": "https://railgrind.com/logo.png",
    "sameAs": ["https://twitter.com/railgrind", "https://facebook.com/railgrind", "https://youtube.com/railgrind"],
    "description": "Railgrind's Free AI-powered mock tests to help you rank among toppers. Practice with the most accurate AI-scored mock tests online.",
    "sku": "PG-001",
    "brand": { "name": "Railgrind" },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5.0" },
      "author": { "@type": "Person", "name": "Railgrind Team" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5.0",
      "reviewCount": "15420"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Railgrind",
    "url": "https://railgrind.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://railgrind.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* SEO Structured JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <h1>Your Ultimate Guide to<br />Railway Exam Success</h1>
          <p>
            The definitive single spot for all your railway exam needs. Discover the latest updates, read expert blogs and preparation tips, and supercharge your ranking with full-length mock exams, sectional practice tests, and premium study materials.
          </p>
          <div className="hero-actions">
            <Link href="/exams" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
              Explore Exams
            </Link>
            <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
              Start Preparation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <div style={{ 
        backgroundColor: 'var(--primary)', 
        padding: '0.6rem 0', 
        overflow: 'hidden', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.05)'
      }}>
        <Marquee speed="45s">
          {[
            "RRB NTPC", "RRB Group D", "RRB ALP", "RPF Constable", "RRB JE", "RPF SI", 
            "RRB SSE", "RRB Paramedical", "RRB NTPC Graduate", "RRB NTPC Undergraduate"
          ].map((exam, i) => (
            <div key={i} style={{ 
              color: '#fff', 
              fontWeight: '800', 
              fontSize: '1.15rem', 
              letterSpacing: '1px',
              padding: '0 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              whiteSpace: 'nowrap',
              fontFamily: 'Outfit'
            }}>
              <span>{exam}</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '1.5rem' }}>•</span>
            </div>
          ))}
        </Marquee>
      </div>

      <section className="section" style={{ padding: '3.5rem 0', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Users size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>1 Lac+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Students Enrolled</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Trophy size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>25,000+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Total Selections</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Award size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>Exam Wise</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Dedicated Preparation</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: '#f59e0b', gap: '0.2rem' }}>
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>4.9/5</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Student Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Popular Railway Exams</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Select an exam below to explore syllabus, eligibility, and preparation guides.
            </p>
          </div>
          
          <AutoScrollCarousel>
            {examsData.map((exam) => (
              <div 
                key={exam.id} 
                className="card" 
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '300px',
                  border: selectedExam?.id === exam.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedExam?.id === exam.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedExam?.id === exam.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedExam(exam)}
              >
                <div className="card-icon"><LayoutList size={24} /></div>
                <h3>{exam.title}</h3>
                <p>{exam.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: '600' }}>{exam.vacancies}</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontWeight: '600' }}>{exam.eligibility}</span>
                </div>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Details <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedExam && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ flex: '1 1 300px' }}>
                  <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>{selectedExam.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{selectedExam.desc}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center', padding: '0.75rem 1.25rem', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.5px' }}>NOTIFICATION</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-main)' }}>{selectedExam.notification}</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '0.75rem 1.25rem', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.5px' }}>PRELIMS</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-main)' }}>{selectedExam.prelims}</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '0.75rem 1.25rem', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.5px' }}>LEVEL</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-main)' }}>{selectedExam.level}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                      <BookOpen size={20} color="var(--primary)" /> About {selectedExam.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{selectedExam.about}</p>
                  </div>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                      <BarChart size={20} color="var(--primary)" /> Exam Stats
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{selectedExam.stats}</p>
                  </div>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                      <Calendar size={20} color="var(--primary)" /> Key Dates & Info
                    </h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                      <li>Official Notification: {selectedExam.notification}</li>
                      <li>Prelims Expected: {selectedExam.prelims}</li>
                      <li>Application Mode: Online</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                      <BookOpen size={20} color="var(--primary)" /> Prelims Syllabus
                    </h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6', backgroundColor: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                      {selectedExam.prelimsSyllabus}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                      <BookOpen size={20} color="var(--primary)" /> Mains Syllabus
                    </h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6', backgroundColor: 'var(--surface)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                      {selectedExam.mainsSyllabus}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.25rem' }}>
                      <LinkIcon size={20} color="var(--primary)" /> Exam Quick Links
                    </h4>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
                        <MonitorPlay size={18} /> Explore Mock Tests
                      </a>
                      <button className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem', cursor: 'pointer', border: '1px solid var(--border-color)' }}>
                        <Download size={18} /> Syllabus PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Resources We Provide</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              A complete toolkit to master your railway exams, from mock tests to expert blogs.
            </p>
          </div>
          
          <AutoScrollCarousel>
            {resourcesData.map((resource) => (
              <div 
                key={resource.id} 
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '300px',
                  border: selectedResource?.id === resource.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedResource?.id === resource.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedResource?.id === resource.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedResource(resource)}
              >
                <div className="card-icon">{resource.icon}</div>
                <h3>{resource.title}</h3>
                <p style={{ marginBottom: '0.75rem' }}>{resource.desc}</p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                  {resource.features.map((f: string, i: number) => <li key={i}>{f}</li>)}
                </ul>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {resource.linkText} <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedResource && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ flex: '1 1 300px' }}>
                  <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>{selectedResource.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{selectedResource.desc}</p>
                </div>
                <div>
                  <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {selectedResource.linkText} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                    <BookOpen size={20} color="var(--primary)" /> About this Resource
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{selectedResource.about}</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                    <Star size={20} color="var(--primary)" /> Recommended For
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{selectedResource.recommended}</p>
                  
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', marginTop: '1.5rem', fontSize: '1.25rem' }}>
                    <Trophy size={20} color="var(--primary)" /> Key Highlights
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', fontWeight: '600' }}>{selectedResource.extraData}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container" style={{ paddingBottom: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <BellRing color="var(--primary)" size={32} />
              Latest Notifications & Updates
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Stay updated with the latest news, exam dates, and official announcements from RRB and RPF.
            </p>
          </div>
          
          <div className="vertical-ticker-wrapper" style={{ height: '400px', overflow: 'hidden', position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="vertical-ticker-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[...notificationsData, ...notificationsData].map((update, index) => (
                <a href="https://indianrailways.gov.in/" target="_blank" rel="noopener noreferrer" key={index} style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  flexShrink: 0,
                  gap: '1rem',
                  padding: '1.5rem', 
                  backgroundColor: 'var(--bg-color)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  textDecoration: 'none',
                }}
                className="card-hover-effect"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', fontWeight: '600' }}>
                      <Calendar size={16} /> {update.date}
                    </div>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.75rem', 
                      backgroundColor: update.badge === 'New' ? '#ef4444' : 'var(--primary-light)', 
                      color: update.badge === 'New' ? 'white' : 'var(--primary)', 
                      borderRadius: '999px', 
                      fontWeight: '700' 
                    }}>
                      {update.badge}
                    </span>
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.5' }}>
                    {update.title}
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600' }}>
                    Read More <ArrowRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="btn-secondary">View All Updates <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Popular Test Series Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <BookOpen color="var(--primary)" size={32} />
              Popular Test Series
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Attempt the most highly rated mock tests curated by our expert educators.
            </p>
          </div>

          <AutoScrollCarousel>
            {[
              {
                category: "Railways",
                title: "RRB NTPC (CBT 1 + CBT 2) Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "34 Tests Free",
                attempts: "1,10,481 Attempts",
                rating: "4.8",
                reviews: "1,964",
                languages: "English + 7 Languages",
                link: "https://prepgrind.com"
              },
              {
                category: "Railways",
                title: "RRB Group D Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "25 Tests Free",
                attempts: "1,84,321 Attempts",
                rating: "4.7",
                reviews: "3,842",
                languages: "English + 9 Languages",
                link: "https://prepgrind.com"
              },
              {
                category: "Railways",
                title: "RPF Constable Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "18 Tests Free",
                attempts: "72,145 Attempts",
                rating: "4.6",
                reviews: "1,104",
                languages: "English + 5 Languages",
                link: "https://prepgrind.com"
              },
              {
                category: "Railways",
                title: "RRB JE Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "12 Tests Free",
                attempts: "45,920 Attempts",
                rating: "4.8",
                reviews: "852",
                languages: "English + 4 Languages",
                link: "https://prepgrind.com"
              }
            ].map((item, index) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} style={{
                minWidth: '320px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              className="card-hover-effect"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ 
                      width: '2.5rem', 
                      height: '2.5rem', 
                      backgroundColor: 'var(--primary-light)', 
                      color: 'var(--primary)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <BookOpen size={18} />
                    </div>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.6rem', 
                      backgroundColor: 'var(--primary-light)', 
                      color: 'var(--primary)', 
                      borderRadius: 'var(--radius-sm)', 
                      fontWeight: '700' 
                    }}>
                      {item.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', lineHeight: '1.4', marginBottom: '1.25rem', color: 'var(--text-main)', fontFamily: 'Outfit' }}>
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '600' }}>
                      <FileText size={16} color="var(--primary)" />
                      <span>{item.fullMocks}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '600' }}>
                      <FileText size={16} color="var(--primary)" />
                      <span>{item.sectionals}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '600' }}>
                      <FileText size={16} color="var(--primary)" />
                      <span>{item.practice}</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.6rem', backgroundColor: '#def7ec', borderRadius: 'var(--radius-sm)', color: '#03543f', fontWeight: '700' }}>
                      {item.free}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                        <Users size={15} color="var(--primary)" />
                        <span>{item.attempts}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontWeight: '700' }}>
                        <Star size={15} fill="#f59e0b" color="#f59e0b" /> {item.rating} <span style={{ color: 'var(--text-muted)', fontWeight: '400' }}>({item.reviews})</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <Globe size={15} color="var(--primary)" />
                      <span>{item.languages}</span>
                    </div>
                  </div>
                </div>

                <div className="btn-primary" style={{ 
                  width: '100%', 
                  padding: '0.85rem', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: '700', 
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(212, 83, 63, 0.2)',
                }}>
                  View Test Series
                </div>
              </a>
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      <section className="section pattern-dots" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Expected Exam Schedules</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Anticipated dates for each phase of major railway exams.</p>
          </div>
          
          <AutoScrollCarousel>
            {schedulesData.map((item) => (
              <div 
                key={item.id} 
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '280px',
                  border: selectedSchedule?.id === item.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedSchedule?.id === item.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedSchedule?.id === item.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedSchedule(item)}
              >
                <div className="card-icon"><Calendar size={24} /></div>
                <h3>{item.exam}</h3>
                <p style={{ marginBottom: '0.75rem' }}>{item.desc}</p>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Schedule <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedSchedule && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>{selectedSchedule.exam} Schedule</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {selectedSchedule.phases?.map((phase: any, idx: number) => (
                  <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>{phase.title}</h4>
                      <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', backgroundColor: 'var(--primary-light)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{phase.date}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{phase.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Average Cut Off Marks (All Categories)</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Target scores required for selection across different categories in each exam.</p>
          </div>

          <AutoScrollCarousel>
            {cutOffData.map((item) => (
              <div 
                key={item.id} 
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '280px',
                  border: selectedCutOff?.id === item.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedCutOff?.id === item.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedCutOff?.id === item.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedCutOff(item)}
              >
                <div className="card-icon"><BarChart size={24} /></div>
                <h3>{item.exam}</h3>
                <p style={{ marginBottom: '0.75rem' }}>{item.desc}</p>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Cut Offs <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedCutOff && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>{selectedCutOff.exam} Cut Offs</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Total Marks: {selectedCutOff.total}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {selectedCutOff.cutoffs?.map((item: any, idx: number) => (
                  <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>{item.category}</h4>
                      <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)' }}>{item.score}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Expected Vacancies</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Historical and projected vacancy numbers for each major railway exam.</p>
          </div>

          <AutoScrollCarousel>
            {vacanciesData.map((item) => (
              <div 
                key={item.id} 
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '280px',
                  border: selectedVacancy?.id === item.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedVacancy?.id === item.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedVacancy?.id === item.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedVacancy(item)}
              >
                <div className="card-icon"><Users size={24} /></div>
                <h3>{item.exam}</h3>
                <p style={{ marginBottom: '0.75rem' }}>{item.desc}</p>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Roles <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedVacancy && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '2.2rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>{selectedVacancy.exam} Details</h3>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>{selectedVacancy.total} Vacancies</div>
              </div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Key Roles Included:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {selectedVacancy.roles?.map((role: any, idx: number) => (
                  <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                    <h5 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{role.title}</h5>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{role.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Starting In-Hand Salaries</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Average monthly take‑home pay including basic, DA, HRA and other allowances.</p>
          </div>

          <AutoScrollCarousel>
            {salariesData.map((item) => (
              <div 
                key={item.id} 
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '280px',
                  border: selectedSalary?.id === item.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedSalary?.id === item.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedSalary?.id === item.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedSalary(item)}
              >
                <div className="card-icon"><Award size={24} /></div>
                <h3>{item.exam}</h3>
                <p style={{ marginBottom: '0.75rem' }}>{item.desc}</p>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Breakdown <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedSalary && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>{selectedSalary.exam} Salary Breakdown</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {selectedSalary.components?.map((comp: any, idx: number) => (
                  <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>{comp.name}</h4>
                      <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)' }}>{comp.amount}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{comp.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Key Perks & Allowances</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Special benefits attached to each railway post.</p>
          </div>

          <AutoScrollCarousel>
            {perksData.map((item) => (
              <div 
                key={item.id} 
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '280px',
                  border: selectedPerk?.id === item.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedPerk?.id === item.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedPerk?.id === item.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedPerk(item)}
              >
                <div className="card-icon"><Star size={24} /></div>
                <h3>{item.exam}</h3>
                <p style={{ marginBottom: '0.75rem' }}>{item.desc}</p>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Perks <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedPerk && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)', fontFamily: 'Outfit, sans-serif' }}>{selectedPerk.exam} Allowances</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {selectedPerk.benefits?.map((benefit: any, idx: number) => (
                  <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                      <Star size={18} color="var(--primary)" /> {benefit.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{benefit.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section pattern-dots" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Success Stories</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Hear from our top achievers who cracked their dream railway exams using our platform.
            </p>
          </div>
          
          <AutoScrollCarousel>
            {storiesData.map((story) => (
              <div 
                key={story.id} 
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  minWidth: '320px',
                  border: selectedStory?.id === story.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedStory?.id === story.id ? 'var(--primary-light)' : 'var(--bg-color)',
                  transform: selectedStory?.id === story.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease-in-out'
                }}
                onClick={() => setSelectedStory(story)}
              >
                <div className="card-icon"><Quote size={24} /></div>
                <h3>{story.name}</h3>
                <p style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Cleared {story.exam}</p>
                <div className="card-link" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Read Story <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>

          {selectedStory && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px' }}>
                  <Quote size={40} color="var(--primary-light)" style={{ marginBottom: '1rem' }} />
                  <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    "{selectedStory.text}"
                  </p>
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1.1rem' }}>{selectedStory.name}</div>
                    <div style={{ color: 'var(--text-muted)' }}>{selectedStory.exam}</div>
                  </div>
                </div>
                <div style={{ flex: '1 1 300px', backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    <Star size={20} color="var(--primary)" /> Pro Tip
                  </h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {selectedStory.advice}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: 'var(--primary-light)', padding: '4rem 2rem', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ color: 'var(--primary)' }}>Ready to accelerate your preparation?</h2>
            <p style={{ color: 'var(--text-main)', maxWidth: '600px', margin: '1rem auto 2rem', fontSize: '1.125rem' }}>
              Take the next step towards your dream railway job. Practice with the most authentic mock tests on Railgrind.
            </p>
            <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
              Visit Railgrind.com
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)', borderTop: '1px solid var(--border-color)', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Got questions? We've got answers. Explore our comprehensive FAQs to clear your doubts about Railway Exams and Railgrind.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              {
                q: "What is the age limit for RRB NTPC exams?",
                a: "Typically, it is 18 to 30 years for undergraduate posts and 18 to 33 years for graduate posts. There are age relaxations for OBC (3 years), SC/ST (5 years), and other reserved categories as per government norms."
              },
              {
                q: "Can a 12th pass candidate apply for RRB NTPC?",
                a: "Yes! Several popular posts under RRB NTPC such as Junior Clerk cum Typist, Accounts Clerk cum Typist, Junior Time Keeper, Trains Clerk, and Commercial cum Ticket Clerk only require a 12th standard pass qualification."
              },
              {
                q: "What is the educational qualification required for RRB Group D?",
                a: "Candidates must have cleared 10th standard (Matriculation) or possess an ITI credential from an institution recognized by NCVT/SCVT, or hold a National Apprenticeship Certificate (NAC) granted by NCVT."
              },
              {
                q: "Is there any negative marking in RRB exams?",
                a: "Yes, there is negative marking in most RRB exams (NTPC, Group D, ALP, JE). For every incorrect answer, 1/3rd (0.33) of the marks assigned to that question will be deducted."
              },
              {
                q: "How many stages are there in the RRB ALP recruitment process?",
                a: "The Assistant Loco Pilot (ALP) recruitment consists of 5 stages: First Stage CBT (CBT 1), Second Stage CBT (CBT 2), Computer-Based Aptitude Test (CBAT), Document Verification (DV), and a comprehensive Medical Examination."
              },
              {
                q: "What is the exam syllabus and pattern for RPF Constable?",
                a: "The RPF Constable exam consists of 120 multiple-choice questions to be completed in 90 minutes. It tests three subjects: General Awareness (50 questions), Arithmetic (35 questions), and General Intelligence & Reasoning (35 questions)."
              },
              {
                q: "Is the RRB JE exam held in offline mode?",
                a: "No, the Junior Engineer (JE) exam, like all major modern Railway exams, is conducted entirely online as a Computer-Based Test (CBT)."
              },
              {
                q: "What physical standards are required for RPF SI (Sub Inspector)?",
                a: "For General/OBC males, the minimum height required is 165 cm (chest 80 cm unexpanded, 85 cm expanded). For females, the minimum height is 157 cm. There are relaxations for SC/ST and hill area candidates."
              },
              {
                q: "How and when can I download the Railway Exam admit card?",
                a: "Admit cards are generally released on the official regional RRB websites exactly 4 days before your scheduled exam date. You will need your registration number and password/date of birth to download it."
              },
              {
                q: "How many regional RRBs are there and which one should I apply to?",
                a: "There are 21 regional Railway Recruitment Boards (like RRB Chandigarh, RRB Mumbai, RRB Bangalore, etc.). You can apply to only one RRB for a specific notification. It is recommended to choose based on vacancy distributions and your regional preference."
              },
              {
                q: "Can I change my chosen exam language after submitting the application form?",
                a: "No, the medium of exam chosen during the application submission is final and cannot be modified. However, questions are typically visible in English as well as your selected regional language during the CBT."
              },
              {
                q: "How does Railgrind help in cracking Railway Exams?",
                a: "Railgrind offers a comprehensive preparation ecosystem: high-quality full-length mock tests based on the latest patterns, sectional tests, downloadable study PDFs, All India live tests with accurate percentile rankings, and shift-wise PYQ practices."
              }
            ].map((faq, idx) => (
              <details key={idx} className="faq-details">
                <summary className="faq-summary">
                  {faq.q}
                </summary>
                <div className="faq-content">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
