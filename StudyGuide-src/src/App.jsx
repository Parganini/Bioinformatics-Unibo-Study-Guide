import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import CourseIntroLesson from "./lessons/phylogenetics/Lesson01.jsx";
import TreeThinkingLesson from "./lessons/phylogenetics/Lesson02.jsx";


const LANGS = [
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "es", label: "Español", short: "ES", dir: "ltr" },
  { code: "fa", label: "فارسی", short: "FA", dir: "rtl" },
];

const UI = {
  en: {
    studyHub: "Study Hub",
    hubSubtitle: "One polished home for your course study guides, progress tracking, quick review tools and exam preparation.",
    subjects: "Subjects",
    continue: "Continue",
    open: "Open",
    progress: "Progress",
    lastOpened: "Last opened",
    quickReview: "Quick review",
    examMode: "Exam mode",
    resources: "Resources",
    modules: "Modules",
    lessons: "Lessons",
    studyTools: "Study tools",
    completed: "Completed",
    notCompleted: "Not completed",
    markComplete: "Mark complete",
    markNotComplete: "Mark not complete",
    backToHub: "Back to Study Hub",
    backToDashboard: "Back to dashboard",
    openFullPage: "Open original full page",
    legacyNote: "This lesson content is preserved from the original guide and displayed inside the new unified shell.",
    search: "Search lessons or concepts...",
    appliedML: "Applied Machine Learning",
    appliedMLDesc: "Lecture notes, practical material, recordings, exam preparation and progress tracking.",
    phylo: "Molecular Phylogenetics",
    phyloDesc: "Trilingual study guide with modules, flashcards, quizzes, glossary tools and progress tracking.",
    builtFor: "Course study guides",
    uniform: "Study guide",
    studyPath: "Study path",
    tools: ["Glossary", "Flashcards", "Common mistakes", "Concept maps", "Practice questions"],
    sourceTitle: "Study plan",
    sourceText: "Choose a course, continue where you left off, or use quick review tools before an exam.",
    publishedFolders: "Courses",
  },
  es: {
    studyHub: "Study Hub",
    hubSubtitle: "Un inicio más bonito para tus guías de estudio, con progreso, repaso rápido y preparación de examen en un mismo lugar.",
    subjects: "Materias",
    continue: "Continuar",
    open: "Abrir",
    progress: "Progreso",
    lastOpened: "Última abierta",
    quickReview: "Repaso rápido",
    examMode: "Modo examen",
    resources: "Recursos",
    modules: "Módulos",
    lessons: "Lecciones",
    studyTools: "Herramientas de estudio",
    completed: "Completada",
    notCompleted: "No completada",
    markComplete: "Marcar completada",
    markNotComplete: "Marcar no completada",
    backToHub: "Volver al Study Hub",
    backToDashboard: "Volver al dashboard",
    openFullPage: "Abrir página original completa",
    legacyNote: "Este contenido se conserva de la guía original y se muestra dentro del nuevo contenedor unificado.",
    search: "Buscar lecciones o conceptos...",
    appliedML: "Applied Machine Learning",
    appliedMLDesc: "Apuntes de clase, material práctico, grabaciones, preparación de examen y seguimiento de progreso.",
    phylo: "Filogenética Molecular",
    phyloDesc: "Guía trilingüe con módulos, flashcards, quizzes, glosario y seguimiento de progreso.",
    builtFor: "Guías de curso",
    uniform: "Guía de estudio",
    studyPath: "Ruta de estudio",
    tools: ["Glosario", "Flashcards", "Errores comunes", "Mapas conceptuales", "Preguntas de práctica"],
    sourceTitle: "Plan de estudio",
    sourceText: "Elige una materia, continúa donde te quedaste o usa herramientas de repaso antes del examen.",
    publishedFolders: "Materias",
  },
  fa: {
    studyHub: "مرکز مطالعه",
    hubSubtitle: "یک خانهٔ منظم برای راهنماهای مطالعه، پیگیری پیشرفت، مرور سریع و آمادگی امتحان.",
    subjects: "درس‌ها",
    continue: "ادامه",
    open: "باز کردن",
    progress: "پیشرفت",
    lastOpened: "آخرین مورد بازشده",
    quickReview: "مرور سریع",
    examMode: "حالت امتحان",
    resources: "منابع",
    modules: "ماژول‌ها",
    lessons: "درس‌ها",
    studyTools: "ابزارهای مطالعه",
    completed: "کامل‌شده",
    notCompleted: "کامل‌نشده",
    markComplete: "علامت کامل‌شده",
    markNotComplete: "علامت کامل‌نشده",
    backToHub: "بازگشت به مرکز مطالعه",
    backToDashboard: "بازگشت به داشبورد",
    openFullPage: "باز کردن صفحهٔ اصلی کامل",
    legacyNote: "این محتوای درس از راهنمای قبلی حفظ شده و داخل پوستهٔ یکپارچهٔ جدید نمایش داده می‌شود.",
    search: "جستجوی درس‌ها یا مفاهیم...",
    appliedML: "یادگیری ماشین کاربردی",
    appliedMLDesc: "یادداشت‌های درس، مواد عملی، ضبط‌ها، آمادگی امتحان و پیگیری پیشرفت.",
    phylo: "تبارزایی مولکولی",
    phyloDesc: "راهنمای سه‌زبانه با ماژول‌ها، فلش‌کارت‌ها، آزمونک‌ها، واژه‌نامه و پیگیری پیشرفت.",
    builtFor: "راهنماهای درسی",
    uniform: "راهنمای مطالعه",
    studyPath: "مسیر مطالعه",
    tools: ["واژه‌نامه", "فلش‌کارت‌ها", "خطاهای رایج", "نقشه‌های مفهومی", "پرسش‌های تمرینی"],
    sourceTitle: "برنامهٔ مطالعه",
    sourceText: "یک درس را انتخاب کنید، از جایی که متوقف شده‌اید ادامه دهید، یا پیش از امتحان از ابزارهای مرور سریع استفاده کنید.",
    publishedFolders: "درس‌ها",
  },
};

const AMLB_GROUPS = [
  { title: "Lecture 01", subtitle: "Course introduction and conceptual foundations", lessons: [
    { id: "lecture1", num: "01", title: "Lecture 01", date: "05 Mar 2026", desc: "Introduction to ML, AI vs ML vs DL, T/E/P framework, supervised and unsupervised learning", file: "Lecture01.html" },
  ]},
  { title: "Lecture 02", subtitle: "Core supervised learning foundations", lessons: [
    { id: "lecture2a", num: "02A", title: "Lecture 02A", date: "06 Mar 2026", desc: "Gradient descent, learning rate, convexity, multivariate linear regression, feature scaling", file: "Lecture02A.html" },
    { id: "lecture2b", num: "02B", title: "Lecture 02B", date: "06 Mar 2026", desc: "Classification, logistic regression, sigmoid function, decision boundaries, logistic cost", file: "Lecture02B.html" },
  ]},
  { title: "Lecture 03", subtitle: "Hands-on Python and data tools", lessons: [
    { id: "lecture3", num: "03", title: "Lecture 03", date: "12 Mar 2026", desc: "Python basics, data structures, Jupyter / Colab workflow, Pandas essentials", file: "Lecture03.html" },
  ]},
  { title: "Lecture 04", subtitle: "Regularization, diagnostics, evaluation, bias–variance and learning curves", lessons: [
    { id: "lecture4a", num: "04A", title: "Lecture 04A", date: "13 Mar 2026", desc: "Multiclass classification, one-vs-all, overfitting and regularization", file: "Lecture04A.html" },
    { id: "lecture4b", num: "04B", title: "Lecture 04B", date: "13 Mar 2026", desc: "Model evaluation, train/CV/test sets, bias vs variance and learning curves", file: "Lecture04B.html" },
  ]},
  { title: "Lecture 05", subtitle: "Metrics for skewed classes and Colab / GPU / TPU environment", lessons: [
    { id: "lecture5a", num: "05A", title: "Lecture 05A", date: "27 Mar 2026", desc: "Skewed classes, confusion matrix, precision, recall, F1 score, ROC and AUC", file: "Lecture05A.html" },
    { id: "lecture5b", num: "05B", title: "Lecture 05B", date: "27 Mar 2026", desc: "Google Colab, runtimes, CPU vs GPU vs TPU, and hardware overview", file: "Lecture05B.html" },
  ]},
  { title: "Lectures 06–08", subtitle: "Data preparation, NumPy, evaluation and model comparison", lessons: [
    { id: "lecture7", num: "07", title: "Lecture 07", date: "31 Mar 2026", desc: "NumPy arrays, slicing, broadcasting, and the full ML pipeline", file: "Lecture07.html" },
    { id: "lecture6", num: "06", title: "Lecture 06", date: "01 Apr 2026", desc: "EDA, real-world data cleaning, feature scaling, and linear regression workflow", file: "Lecture06.html" },
    { id: "lecture8", num: "08", title: "Lecture 08", date: "10 Apr 2026", desc: "Resampling, classification and regression metrics, comparing models, tuning hyperparameters", file: "Lecture08.html" },
  ]},
  { title: "Exam Support", subtitle: "Revision strategy and interactive mock written tests", lessons: [
    { id: "examprep", num: "EX", title: "Exam Preparation", date: "—", desc: "How the written exam works, what concepts matter most, and how to study efficiently", file: "ExamPrep.html" },
    { id: "practiceexam", num: "P1", title: "Practice Exam 1", date: "—", desc: "Interactive mock written test with explanations and final score review", file: "PracticeExam.html" },
    { id: "practiceexam2", num: "P2", title: "Practice Exam 2", date: "—", desc: "Second mock exam with new questions on foundations, metrics, and evaluation", file: "PracticeExam2.html" },
    { id: "practiceexam3", num: "P3", title: "Practice Exam 3", date: "—", desc: "Broader mock exam covering more topics across the course", file: "PracticeExam3.html" },
  ]},
];

const PHYLO_TITLES = {
  en: ["Course introduction", "Tree thinking", "Molecular phylogenetics", "Orthology and taxon sampling", "Sequence alignment and filtering", "Distance vs character methods", "Models of sequence evolution", "Maximum Likelihood", "Bayesian Inference", "Support metrics", "Complex models", "Discordance, ILS and coalescent", "Biases in phylogenetics", "Divergence time analyses", "Inferring selection", "Trait evolution on phylogenies"],
  es: ["Introducción al curso", "Tree thinking", "Filogenética molecular", "Ortología y muestreo taxonómico", "Alineamiento y filtrado", "Distancia vs métodos por caracteres", "Modelos de evolución de secuencias", "Maximum Likelihood", "Inferencia Bayesiana", "Métricas de soporte", "Modelos complejos", "Discordancia, ILS y coalescente", "Sesgos en filogenética", "Análisis de tiempos de divergencia", "Inferir selección", "Evolución de rasgos en filogenias"],
  fa: ["معرفی درس", "تفکر درختی", "تبارزایی مولکولی", "ارتولوژی و نمونه‌برداری تاکسونی", "هم‌ترازسازی و فیلترکردن", "روش‌های فاصله‌ای در برابر کاراکتری", "مدل‌های تکامل توالی", "بیشینه درست‌نمایی", "استنباط بیزی", "معیارهای پشتیبانی", "مدل‌های پیچیده", "ناسازگاری، ILS و هم‌نیاگرایی", "سوگیری‌ها در تبارزایی", "تحلیل زمان‌های واگرایی", "استنباط انتخاب", "تکامل صفات روی تبارزایی‌ها"],
};

const PHYLO_MODULES = {
  en: [
    ["01", "Foundations", "Tree of life, tree thinking, clades, homology, homoplasy and molecular characters.", [1,2,3], ["MRCA", "clade", "root", "homology"]],
    ["02", "From genes to alignments", "Taxon sampling, orthology, orthogroups, sequence alignment, filtering and distances.", [4,5,6], ["orthology", "alignment", "filtering", "distance"]],
    ["03", "Inference methods", "Models of sequence evolution, Maximum Likelihood and Bayesian Inference.", [7,8,9], ["GTR", "likelihood", "MCMC", "posterior"]],
    ["04", "Confidence and complexity", "Support metrics, complex models, discordance, ILS, coalescent theory and bias.", [10,11,12,13], ["bootstrap", "TBE", "ILS", "bias"]],
    ["05", "Evolutionary applications", "Divergence time analyses, selection and modelling trait evolution on phylogenies.", [14,15,16], ["clock", "dN/dS", "Mk", "traits"]],
  ],
  es: [
    ["01", "Fundamentos", "Tree of life, tree thinking, clados, homología, homoplasia y caracteres moleculares.", [1,2,3], ["MRCA", "clado", "raíz", "homología"]],
    ["02", "De genes a alineamientos", "Muestreo taxonómico, ortología, orthogroups, alineamiento, filtrado y distancias.", [4,5,6], ["ortología", "alineamiento", "filtrado", "distancia"]],
    ["03", "Métodos de inferencia", "Modelos de evolución de secuencias, Maximum Likelihood e Inferencia Bayesiana.", [7,8,9], ["GTR", "likelihood", "MCMC", "posterior"]],
    ["04", "Confianza y complejidad", "Métricas de soporte, modelos complejos, discordancia, ILS, coalescente y sesgos.", [10,11,12,13], ["bootstrap", "TBE", "ILS", "sesgo"]],
    ["05", "Aplicaciones evolutivas", "Tiempos de divergencia, selección y modelado de evolución de rasgos en filogenias.", [14,15,16], ["reloj", "dN/dS", "Mk", "rasgos"]],
  ],
  fa: [
    ["01", "مبانی", "درخت حیات، تفکر درختی، کلادها، همولوژی، هموپلازی و کاراکترهای مولکولی.", [1,2,3], ["MRCA", "کلاد", "ریشه", "همولوژی"]],
    ["02", "از ژن‌ها تا هم‌ترازسازی", "نمونه‌برداری تاکسونی، ارتولوژی، ارتوگروه‌ها، هم‌ترازسازی، فیلتر و فاصله‌ها.", [4,5,6], ["ارتولوژی", "هم‌ترازسازی", "فیلتر", "فاصله"]],
    ["03", "روش‌های استنباط", "مدل‌های تکامل توالی، بیشینه درست‌نمایی و استنباط بیزی.", [7,8,9], ["GTR", "درست‌نمایی", "MCMC", "پسین"]],
    ["04", "اطمینان و پیچیدگی", "معیارهای پشتیبانی، مدل‌های پیچیده، ناسازگاری، ILS، هم‌نیاگرایی و سوگیری.", [10,11,12,13], ["bootstrap", "TBE", "ILS", "سوگیری"]],
    ["05", "کاربردهای تکاملی", "زمان واگرایی، انتخاب و مدل‌سازی تکامل صفات روی تبارزایی‌ها.", [14,15,16], ["ساعت", "dN/dS", "Mk", "صفات"]],
  ],
};


const PHYLO_SLIDE_LINKS = {
  1: "https://drive.google.com/file/d/1BtsEdfSn60OVFtj08iG5V8CvIARle5Ud/view?usp=drivesdk",
  2: "https://drive.google.com/file/d/1IzlPw9RP3hwWPSY4IM2xzGPLrRz55OaW/view?usp=drivesdk",
  3: "https://drive.google.com/file/d/10nMZQCGWbWFhDQIBq6mq898gqJLhL2nB/view?usp=drivesdk",
  4: "https://drive.google.com/file/d/1NvwbLKbjdkBFyBq1cZWcJve_9KafPMyQ/view?usp=drivesdk",
  5: "https://drive.google.com/file/d/12chFqpBP3f9gANusGztlvsYAi6ng00Kk/view?usp=drivesdk",
  6: "https://drive.google.com/file/d/1vBSjDQE18zpb2yJ4-F91D87EjHx0VNZi/view?usp=drivesdk",
  7: "https://drive.google.com/file/d/1WSAlYeiJI6sU89LQnz17356tZP2ExoCo/view?usp=drivesdk",
  8: "https://drive.google.com/file/d/18NBVWpUBxkRfeyZ8ZjbvB_qYDr04Z3ev/view?usp=drivesdk",
  9: "https://drive.google.com/file/d/111pZtNa0ich2jGaVxRlYSBU1T7Lf0j4K/view?usp=drivesdk",
  10: "https://drive.google.com/file/d/17_mNBtE2owaRsIboLBWGbBDau6TKMxjj/view?usp=drivesdk",
  11: "https://drive.google.com/file/d/12vAPxnca4yzyVPh_KBvv-jEu2Rp0M4Ht/view?usp=drivesdk",
  12: "https://drive.google.com/file/d/1faf8N6KAYPwP08v1A-R1TsNSlL5Z0Ufl/view?usp=drivesdk",
  13: "https://drive.google.com/file/d/1PR9G6FS2Qu2CtSHZ8Rkvzx5M4RyR7Im6/view?usp=drivesdk",
  14: "https://drive.google.com/file/d/1RawGJtn2TM6a2mBloOx0pn8m8NbdI6gR/view?usp=drivesdk",
  15: "https://drive.google.com/file/d/1bxbQC6Pluz4FeSHpSulfc2GMCSRsuAfm/view?usp=drivesdk",
  16: "https://drive.google.com/file/d/1p0D7uy8DKynUejNLDNZr51brvTM0SlYz/view?usp=drivesdk",
};

const PHYLO_ALL_SLIDES_LINK = "https://drive.google.com/file/d/1yzDWi9XNii3FSHTrr0vxcP4DGayv7OGJ/view?usp=drivesdk";
const PHYLO_RECORDINGS_LINK = "https://www.youtube.com/playlist?list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe";

// null means that this lesson does not have an individual recording available yet.
const PHYLO_RECORDING_LINKS = {
  1: null,
  2: "https://www.youtube.com/watch?v=B-9LPCeWK1o&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=2",
  3: "https://www.youtube.com/watch?v=a1Od5IfqdBw&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=2",
  4: "https://www.youtube.com/watch?v=7dhFrrPurYM&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=3",
  5: null,
  6: "https://www.youtube.com/watch?v=TP2nNjLkPr0&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=4",
  7: null,
  8: "https://www.youtube.com/watch?v=xOIssujTS1c&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=5",
  9: "https://www.youtube.com/watch?v=zIOsT_4nuj0&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=6",
  10: "https://www.youtube.com/watch?v=z7GYp-i8AEc&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=7",
  11: "https://www.youtube.com/watch?v=wyAdXbeyJVM&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=8",
  12: null,
  13: "https://www.youtube.com/watch?v=CnzE47dpyik&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=9",
  14: "https://www.youtube.com/watch?v=OkkvUteBeF8&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=10",
  15: "https://www.youtube.com/watch?v=XGsa968Vti8&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=11",
  16: "https://www.youtube.com/watch?v=PEtVcPdJybQ&list=PLZSGWjLWZL3Kw8VPmITZpgRqxmarkn0Xe&index=12",
};

const PHYLO_TRANSCRIPT_LINKS = {
  1: "https://docs.google.com/document/d/1NhWsCuZRupr9Fx0uxqSICa9xFehtqh6RTTY7CuyzfrE/edit?usp=drivesdk",
  2: "https://docs.google.com/document/d/1BINjTQWm-TmXJv0nD2gLSrBzZAW4FM4Tz2ho0fl-hgA/edit?usp=drivesdk",
  3: "https://docs.google.com/document/d/13uQUsZkS7XkYzr3TAOLkoSrL0PkaWqZ7C8f-RwHB7IM/edit?usp=drivesdk",
  4: "https://docs.google.com/document/d/1Y5exc7rUYPuJr0H9iWvQ89scxcuhe3HvdwCvVzuX8aA/edit?usp=drivesdk",
  5: "https://docs.google.com/document/d/1gzdPHewhfrO_LQ0PFiTfP3qFijzAr-DHQaB-FaMsXyA/edit?usp=drivesdk",
  6: "https://docs.google.com/document/d/1CFbn_DjTf6ECN3mlJ-uk1TcJbZ4WzPvWSNteODi8rYE/edit?usp=drivesdk",
  7: "https://docs.google.com/document/d/1ojOmeOMNJV39vQQa0zZ2xOnOXyZKW7J48fw6XV-emno/edit?usp=drivesdk",
  8: "https://docs.google.com/document/d/10Bwfo7muihJ0kAVJ9czrbC8smiHBTedEEux_EzMnPlU/edit?usp=drivesdk",
  9: "https://docs.google.com/document/d/1muT20sFBQO8p2dVi_39ysctxg7QJzPQxp3jwxfJkUcE/edit?usp=drivesdk",
  10: "https://docs.google.com/document/d/1F53DzXmPiEQ9FCkhKDPc33hNH1BEw5ftfE43zQbVI14/edit?usp=drivesdk",
  11: "https://docs.google.com/document/d/1YIZmzSsZ3W0Ja1nJ4Q8MdlP9AqUwegFtIVsMucXkNjs/edit?usp=drivesdk",
  12: "https://docs.google.com/document/d/1Kvtcy27qMiZDA3zXS0_DUIFQak-k6H25yFn6d3rVgyA/edit?usp=drivesdk",
  13: "https://docs.google.com/document/d/1mo-7KVbVpxy_Rr7BiQbB2YxfNEUZdPpvj9FcSddjmSA/edit?usp=drivesdk",
  14: "https://docs.google.com/document/d/1i1PslkkPKhdqg3YNJ2WkPWm4YpxC7hpWyZiOaU57y4U/edit?usp=drivesdk",
  15: "https://docs.google.com/document/d/18kH6wDueLF-pC-xYMY7Ig9hztLXBfKg2Bnl8tv-5WU4/edit?usp=drivesdk",
  // Lesson 16 did not have an MP-prefixed document in the Transcriptions folder;
  // this is the exact L16 Google Doc from that folder.
  16: "https://docs.google.com/document/d/1t6VnEXxrR1GrEGuu8srlFByxDS0rYWku2Av-lbUr_sk/edit?usp=drivesdk",
};

function phyloResourceCopy(lang) {
  return {
    en: {
      lessonMaterial: "Class material",
      dashboardTitle: "Course resources",
      dashboardBody: "Slides, recordings and transcripts for the phylogenetics course.",
      slides: "Slides",
      allSlides: "All slides",
      transcript: "Transcript",
      transcripts: "Transcripts",
      recording: "Recording",
      recordings: "Recordings",
      slidesDesc: "Official PDF slides for this lesson.",
      allSlidesDesc: "Combined PDF with the course slides.",
      transcriptDesc: "Written class transcript for review.",
      recordingDesc: "Recording for this lesson.",
      recordingsDesc: "Course recording playlist.",
      open: "Open",
      comingSoon: "Coming soon",
      noRecording: "No recording available",
      noRecordingDesc: "There is no individual recording for this lesson yet.",
    },
    es: {
      lessonMaterial: "Material de clase",
      dashboardTitle: "Recursos del curso",
      dashboardBody: "Slides, grabaciones y transcripciones de Filogenética.",
      slides: "Slides",
      allSlides: "Todas las slides",
      transcript: "Transcripción",
      transcripts: "Transcripciones",
      recording: "Grabación",
      recordings: "Grabaciones",
      slidesDesc: "PDF oficial de slides de esta lección.",
      allSlidesDesc: "PDF combinado con las slides del curso.",
      transcriptDesc: "Transcripción escrita de la clase para repasar.",
      recordingDesc: "Grabación correspondiente a esta lección.",
      recordingsDesc: "Playlist de grabaciones del curso.",
      open: "Abrir",
      comingSoon: "Próximamente",
      noRecording: "Sin grabación disponible",
      noRecordingDesc: "Esta clase todavía no tiene una grabación individual disponible.",
    },
    fa: {
      lessonMaterial: "مواد کلاس",
      dashboardTitle: "منابع درس",
      dashboardBody: "اسلایدها، ضبط‌ها و رونویسی‌های درس تبارزایی.",
      slides: "اسلایدها",
      allSlides: "همهٔ اسلایدها",
      transcript: "رونویسی",
      transcripts: "رونویسی‌ها",
      recording: "ضبط کلاس",
      recordings: "ضبط‌ها",
      slidesDesc: "PDF رسمی اسلایدهای این درس.",
      allSlidesDesc: "PDF ترکیبی اسلایدهای درس.",
      transcriptDesc: "رونویسی نوشتاری کلاس برای مرور.",
      recordingDesc: "ضبط مربوط به این درس.",
      recordingsDesc: "فهرست پخش ضبط‌های درس.",
      open: "باز کردن",
      comingSoon: "به‌زودی",
      noRecording: "ضبطی موجود نیست",
      noRecordingDesc: "برای این جلسه هنوز ضبط جداگانه‌ای موجود نیست.",
    },
  }[lang] || {
    lessonMaterial: "Class material",
    dashboardTitle: "Course resources",
    dashboardBody: "Slides, recordings and transcripts for the course.",
    slides: "Slides",
    allSlides: "All slides",
    transcript: "Transcript",
    transcripts: "Transcripts",
    recording: "Recording",
    recordings: "Recordings",
    slidesDesc: "Official PDF slides for this lesson.",
    allSlidesDesc: "Combined PDF with the course slides.",
    transcriptDesc: "Written class transcript for review.",
    recordingDesc: "Recording for this lesson.",
      recordingsDesc: "Course recording playlist.",
    open: "Open",
    comingSoon: "Coming soon",
    noRecording: "No recording available",
    noRecordingDesc: "There is no individual recording for this lesson yet.",
  };
}

function currentMode() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("/amlb/")) return "amlb";
  if (path.includes("/mp/")) return "mp";
  return "hub";
}

function getInitialLang() {
  return localStorage.getItem("studyhub_lang") || localStorage.getItem("phylo_lang") || "es";
}
function getJSON(key, fallback = {}) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function setJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function allAmlLessons() { return AMLB_GROUPS.flatMap(g => g.lessons); }
function clamp(n) { return Math.max(0, Math.min(100, Math.round(n))); }
function useHash() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

function Background() {
  return <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(220,38,38,0.13),transparent_28%),radial-gradient(circle_at_90%_5%,rgba(15,118,110,0.12),transparent_25%),linear-gradient(180deg,#fffaf0_0%,#f8f1e6_48%,#f4eadb_100%)]" />;
}
function MiniTreeIcon({ active }) {
  return <svg viewBox="0 0 130 88" className="h-24 w-full"><path d="M14 44 H39" stroke="#111827" strokeWidth="6" strokeLinecap="round"/><path d="M39 44 L67 18" stroke="#111827" strokeWidth="6" strokeLinecap="round"/><path d="M39 44 L67 70" stroke="#111827" strokeWidth="6" strokeLinecap="round"/><path d="M67 18 H112" stroke="#111827" strokeWidth="6" strokeLinecap="round"/><path d="M67 18 L112 42" stroke="#111827" strokeWidth="6" strokeLinecap="round"/><path d="M67 70 H112" stroke="#111827" strokeWidth="6" strokeLinecap="round"/><circle cx="39" cy="44" r="8" fill={active ? "#dc2626" : "#d6d3d1"}/><circle cx="112" cy="18" r="7" fill="#0f766e"/><circle cx="112" cy="42" r="7" fill="#0284c7"/><circle cx="112" cy="70" r="7" fill="#d97706"/></svg>;
}
function ProgressBar({ value }) {
  return <div className="h-3 overflow-hidden rounded-full border border-stone-200 bg-stone-100"><div className="h-full rounded-full bg-red-700 transition-all" style={{ width: `${clamp(value)}%` }} /></div>;
}
function LangSwitcher({ lang, setLang }) {
  return <div className="flex rounded-full border border-stone-200 bg-white p-1 shadow-sm">{LANGS.map(item => <button key={item.code} onClick={() => setLang(item.code)} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${lang === item.code ? "bg-red-700 text-white" : "text-stone-500 hover:bg-stone-100"}`} title={item.label}>{item.short}</button>)}</div>;
}
function Header({ lang, setLang, mode, t }) {
  const header = {
    hub: {
      title: t.studyHub,
      subtitle: t.subjects,
      icon: "⌂",
      iconClass: "bg-stone-950",
    },
    amlb: {
      title: t.appliedML,
      subtitle: `${t.lessons} · ${t.examMode}`,
      icon: "ML",
      iconClass: "bg-violet-700",
    },
    mp: {
      title: t.phylo,
      subtitle: `${t.modules} · ${t.studyTools}`,
      icon: "Φ",
      iconClass: "bg-red-700",
    },
  }[mode] || { title: t.studyHub, subtitle: t.subjects, icon: "⌂", iconClass: "bg-stone-950" };

  return <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fffaf0]/88 backdrop-blur-xl"><div className="mx-auto flex w-[min(1180px,calc(100%-24px))] items-center justify-between gap-4 py-3"><a href={mode === "hub" ? "#top" : "../index.html"} className="flex items-center gap-3"><div className={`flex h-10 min-w-10 items-center justify-center rounded-2xl px-2 text-sm font-black text-white ${header.iconClass}`}>{header.icon}</div><div><div className="text-sm font-black leading-4 text-stone-950">{header.title}</div><div className="text-xs font-semibold text-stone-500">{header.subtitle}</div></div></a><nav className="hidden items-center gap-2 lg:flex"><a href={mode === "hub" ? "#subjects" : "#/"} className="rounded-full px-3 py-2 text-sm font-bold text-stone-600 transition hover:bg-white hover:text-red-700">{mode === "hub" ? t.subjects : t.modules}</a><a href={mode === "hub" ? "#tools" : "#/tools"} className="rounded-full px-3 py-2 text-sm font-bold text-stone-600 transition hover:bg-white hover:text-red-700">{t.studyTools}</a><a href={mode === "hub" ? "#tools" : "#/resources"} className="rounded-full px-3 py-2 text-sm font-bold text-stone-600 transition hover:bg-white hover:text-red-700">{t.resources}</a></nav><LangSwitcher lang={lang} setLang={setLang} /></div></header>;
}
function Stat({ label, value, note }) {
  return <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-5 shadow-sm"><div className="text-sm font-bold text-stone-500">{label}</div><div className="mt-2 text-4xl font-black tracking-tight text-stone-950">{value}</div>{note && <div className="mt-2 text-xs font-semibold text-stone-500">{note}</div>}</div>;
}
function Hero({ eyebrow, title, subtitle, actions, visual }) {
  return <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5"><div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"><div className="p-7 md:p-10 lg:p-12"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{eyebrow}</div><h1 className="max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{subtitle}</p>{actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}</div><div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0"><div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">{visual}</div></div></div></section>;
}

function HubApp({ t }) {
  return <main id="top" className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><Hero eyebrow={t.builtFor} title={<>{t.studyHub}</>} subtitle={t.hubSubtitle} actions={<><a href="AMLB/index.html" className="rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-900/10 transition hover:-translate-y-0.5 hover:bg-red-800">{t.appliedML}</a><a href="MP/index.html" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-black text-stone-800 transition hover:-translate-y-0.5 hover:shadow-md">{t.phylo}</a></>} visual={<div><div className="flex items-start justify-between gap-4"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{t.publishedFolders}</div><div className="mt-2 text-2xl font-black text-stone-950">AMLB · MP</div><div className="mt-1 text-sm font-semibold text-stone-500">{t.sourceText}</div></div><div className="rounded-2xl bg-stone-950 px-3 py-2 text-sm font-black text-white">2</div></div><div className="mt-6 rounded-[2rem] bg-[#fffaf0] p-4"><MiniTreeIcon active/><div className="mt-3"><ProgressBar value={50}/></div></div><div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{t.studyTools}</div><p className="mt-2 text-lg font-bold leading-7">{t.tools.join(" · ")}</p></div></div>} />
    <section id="subjects" className="mt-10"><div className="mb-6"><div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{t.subjects}</div><h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{t.subjects}</h2></div><div className="grid gap-5 md:grid-cols-2"><SubjectCard href="AMLB/index.html" title={t.appliedML} desc={t.appliedMLDesc} progressKey="aml_progress" total={allAmlLessons().length} icon="ML"/><SubjectCard href="MP/index.html" title={t.phylo} desc={t.phyloDesc} progressKey="phylo_progress_v2" total={16} icon="Φ"/></div></section>
    <section id="tools" className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8"><div className="mb-6"><div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{t.studyTools}</div><h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{t.quickReview}</h2><p className="mt-2 max-w-2xl leading-7 text-stone-600">{t.sourceText}</p></div><div className="grid gap-3 md:grid-cols-5">{t.tools.map(tool => <div key={tool} className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-black text-stone-800 shadow-sm">{tool}</div>)}</div></section></main>;
}
function SubjectCard({ href, title, desc, progressKey, total, icon }) {
  const progress = getJSON(progressKey, {});
  const count = Object.values(progress).filter(Boolean).length;
  const percent = total ? (count / total) * 100 : 0;
  return <a href={href} className="group rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between gap-4"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-950 text-lg font-black text-white">{icon}</div><span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{clamp(percent)}%</span></div><h3 className="mt-5 text-2xl font-black text-stone-950">{title}</h3><p className="mt-2 leading-7 text-stone-600">{desc}</p><div className="mt-5"><ProgressBar value={percent}/></div></a>;
}

function AMLBApp({ t, hash }) {
  const [progress, setProgress] = useState(() => getJSON("aml_progress", {}));
  const [query, setQuery] = useState("");
  const lessonFile = (hash.match(/^#\/lecture\/(.+)$/) || [])[1];
  const all = allAmlLessons();
  const completed = all.filter(l => progress[l.id]).length;
  const percent = all.length ? completed / all.length * 100 : 0;
  const next = all.find(l => !progress[l.id]) || all[0];
  const save = (nextProgress) => { setProgress(nextProgress); setJSON("aml_progress", nextProgress); };
  if (lessonFile) return <AMLBLegacyLesson t={t} file={lessonFile} progress={progress} save={save} />;
  const q = query.trim().toLowerCase();
  const groups = q ? AMLB_GROUPS.map(g => ({ ...g, lessons: g.lessons.filter(l => [l.title,l.desc,l.date,l.num].join(" ").toLowerCase().includes(q)) })).filter(g => g.lessons.length) : AMLB_GROUPS;
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><Hero eyebrow={t.appliedML} title={<>{t.appliedML} <span className="text-red-700">Guide</span></>} subtitle={t.appliedMLDesc} actions={<><a href={`#/lecture/${next.file}`} className="rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-900/10 transition hover:bg-red-800">{t.continue}: {next.title}</a><a href="#/tools" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-black text-stone-800 transition hover:shadow-md">{t.quickReview}</a></>} visual={<div><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{t.progress}</div><div className="mt-2 text-5xl font-black text-stone-950">{clamp(percent)}%</div><p className="mt-2 text-sm font-semibold text-stone-500">{completed} / {all.length} {t.completed.toLowerCase()}</p><div className="mt-5"><ProgressBar value={percent}/></div><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-stone-50 p-4"><div className="text-sm font-bold text-stone-500">{t.lessons}</div><div className="mt-1 text-2xl font-black">{all.length}</div></div><div className="rounded-2xl bg-stone-50 p-4"><div className="text-sm font-bold text-stone-500">{t.examMode}</div><div className="mt-1 text-2xl font-black">3</div></div></div></div>} />
    <section className="mt-10"><div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{t.modules}</div><h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{t.lessons}</h2></div><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.search} className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-red-300 focus:ring-4 focus:ring-red-100 md:w-80"/></div><div className="space-y-5">{groups.map(g => <AMLBGroup key={g.title} group={g} progress={progress} save={save} t={t}/>)}</div></section></main>;
}
function AMLBGroup({ group, progress, save, t }) {
  const done = group.lessons.every(l => progress[l.id]);
  return <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm"><div className="mb-4 flex items-start justify-between gap-4"><div><h3 className="text-2xl font-black text-stone-950">{group.title}{done ? " ✔" : ""}</h3><p className="mt-1 text-sm leading-6 text-stone-600">{group.subtitle}</p></div><MiniTreeIcon active={done}/></div><div className="grid gap-3 md:grid-cols-2">{group.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} isDone={!!progress[lesson.id]} href={`#/lecture/${lesson.file}`} toggle={() => save({ ...progress, [lesson.id]: !progress[lesson.id] })} t={t}/>)}</div></article>;
}
function LessonCard({ lesson, isDone, href, toggle, t }) {
  return <div className={`rounded-3xl border p-4 transition ${isDone ? "border-emerald-200 bg-emerald-50" : "border-stone-200 bg-stone-50 hover:bg-white"}`}><div className="flex items-start justify-between gap-3"><a href={href} className="min-w-0"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{lesson.date}</div><h4 className="mt-1 text-lg font-black text-stone-950">{lesson.title}</h4><p className="mt-2 text-sm leading-6 text-stone-600">{lesson.desc}</p></a><button onClick={toggle} className={`shrink-0 rounded-full px-3 py-1 text-xs font-black ${isDone ? "bg-emerald-600 text-white" : "bg-white text-stone-500 border border-stone-200"}`}>{isDone ? "✓" : "○"}</button></div></div>;
}
function AMLBLegacyLesson({ t, file, progress, save }) {
  const lesson = allAmlLessons().find(l => l.file === file) || { id: file, title: file, file, desc: "" };
  const isDone = !!progress[lesson.id];
  return <main className="mx-auto w-[min(1280px,calc(100%-24px))] pb-10 pt-5"><div className="mb-4 flex flex-col justify-between gap-3 rounded-[2rem] border border-stone-200 bg-white/90 p-4 shadow-sm md:flex-row md:items-center"><div><a href="#/" className="text-sm font-black text-red-700">← {t.backToDashboard}</a><h1 className="mt-1 text-2xl font-black text-stone-950">{lesson.title}</h1><p className="text-sm text-stone-500">{t.legacyNote}</p></div><div className="flex flex-wrap gap-2"><button onClick={() => save({ ...progress, [lesson.id]: !isDone })} className={`rounded-full px-4 py-2 text-sm font-black ${isDone ? "bg-emerald-600 text-white" : "bg-red-700 text-white"}`}>{isDone ? t.markNotComplete : t.markComplete}</button><a href={`legacy/${file}`} target="_blank" className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800">{t.openFullPage}</a></div></div><iframe src={`legacy/${file}`} title={lesson.title} className="h-[calc(100vh-170px)] w-full rounded-[2rem] border border-stone-200 bg-white shadow-xl"/></main>;
}


function ResourceCard({ title, description, href, action, disabled }) {
  const baseClass = "block rounded-3xl border p-5 shadow-sm transition";
  if (disabled || !href) {
    return (
      <div className={`${baseClass} border-stone-200 bg-stone-50 text-stone-400`}>
        <div className="text-lg font-black">{title}</div>
        <p className="mt-2 text-sm font-semibold leading-6">{description}</p>
        <span className="mt-4 inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-400">{action}</span>
      </div>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${baseClass} border-stone-200 bg-white text-stone-900 hover:-translate-y-1 hover:shadow-md`}>
      <div className="text-lg font-black">{title}</div>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{description}</p>
      <span className="mt-4 inline-flex rounded-full bg-red-700 px-4 py-2 text-xs font-black text-white">{action}</span>
    </a>
  );
}

function LessonResources({ lang, lessonNo }) {
  const copy = phyloResourceCopy(lang);
  const slides = PHYLO_SLIDE_LINKS[lessonNo];
  const transcript = PHYLO_TRANSCRIPT_LINKS[lessonNo];
  const recording = PHYLO_RECORDING_LINKS[lessonNo];
  const hasRecording = Boolean(recording);
  return (
    <section className="mb-8 rounded-[2rem] border border-stone-200 bg-white/90 p-5 shadow-sm md:p-6">
      <div className="mb-4">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.lessonMaterial}</div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ResourceCard title={copy.slides} description={copy.slidesDesc} href={slides} action={copy.open} />
        <ResourceCard title={copy.transcript} description={copy.transcriptDesc} href={transcript} action={transcript ? copy.open : copy.comingSoon} disabled={!transcript} />
        <ResourceCard
          title={copy.recording}
          description={hasRecording ? copy.recordingDesc : copy.noRecordingDesc}
          href={recording}
          action={hasRecording ? copy.open : copy.noRecording}
          disabled={!hasRecording}
        />
      </div>
    </section>
  );
}

function MPResourcesPanel({ lang }) {
  const copy = phyloResourceCopy(lang);
  return (
    <section id="resources" className="mt-10 rounded-[2.5rem] border border-stone-200 bg-white/75 p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.dashboardTitle}</div>
        <p className="max-w-2xl leading-7 text-stone-600">{copy.dashboardBody}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ResourceCard title={copy.allSlides} description={copy.allSlidesDesc} href={PHYLO_ALL_SLIDES_LINK} action={copy.open} />
        <ResourceCard title={copy.transcripts} description={copy.transcriptDesc} href={null} action={copy.comingSoon} disabled />
        <ResourceCard title={copy.recordings} description={copy.recordingsDesc} href={PHYLO_RECORDINGS_LINK} action={copy.open} />
      </div>
    </section>
  );
}

function MPApp({ t, lang, hash }) {
  const [progress, setProgress] = useState(() => getJSON("phylo_progress_v2", {}));
  const [query, setQuery] = useState("");
  const match = hash.match(/^#\/lesson\/(\d+)/);
  const lessonNo = match ? Number(match[1]) : null;
  const save = (next) => { setProgress(next); setJSON("phylo_progress_v2", next); };
  if (lessonNo) return <MPLessonPage lang={lang} lessonNo={lessonNo} progress={progress} save={save} t={t}/>;
  const titles = PHYLO_TITLES[lang] || PHYLO_TITLES.es;
  const modules = PHYLO_MODULES[lang] || PHYLO_MODULES.es;
  const count = Object.values(progress).filter(Boolean).length;
  const percent = 100 * count / 16;
  const activeLesson = Array.from({ length: 16 }, (_, i) => i + 1).find(n => !progress[`lesson${String(n).padStart(2,"0")}`]) || 1;
  const q = query.trim().toLowerCase();
  const filtered = q ? modules.map(m => ({ m, lessons: m[3].filter(n => `${n} ${titles[n-1]} ${m[1]} ${m[2]} ${m[4].join(" ")}`.toLowerCase().includes(q)) })).filter(x => x.lessons.length) : modules.map(m => ({ m, lessons: m[3] }));
  return <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12"><Hero eyebrow={t.phylo} title={<>{t.phylo} <span className="text-red-700">Study Guide</span></>} subtitle={t.phyloDesc} actions={<><a href={`#/lesson/${String(activeLesson).padStart(2,"0")}`} className="rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-900/10 transition hover:bg-red-800">{t.continue}: {String(activeLesson).padStart(2,"0")}</a><a href="#/tools" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-black text-stone-800 transition hover:shadow-md">{t.quickReview}</a></>} visual={<div><div className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{t.progress}</div><div className="mt-2 text-5xl font-black text-stone-950">{clamp(percent)}%</div><p className="mt-2 text-sm font-semibold text-stone-500">{count} / 16 {t.completed.toLowerCase()}</p><div className="mt-5"><ProgressBar value={percent}/></div><div className="mt-6 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{t.studyPath}</div><p className="mt-2 text-lg font-bold leading-7">data → alignment → model → tree → support → interpretation</p></div></div>} />
    <MPResourcesPanel lang={lang} />
    <section className="mt-10"><div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{t.modules}</div><h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{t.phylo}</h2></div><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.search} className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-red-300 focus:ring-4 focus:ring-red-100 md:w-80"/></div><div className="space-y-5">{filtered.map(({m, lessons}) => <MPModule key={m[0]} module={m} lessonNumbers={lessons} titles={titles} progress={progress} save={save} t={t} activeLesson={activeLesson}/>)}</div></section></main>;
}
function MPModule({ module, lessonNumbers, titles, progress, save, t, activeLesson }) {
  const [num, title, desc, allNums, tags] = module;
  const moduleProgress = allNums.filter(n => progress[`lesson${String(n).padStart(2,"0")}`]).length / allNums.length * 100;
  return <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm"><div className="grid gap-0 lg:grid-cols-[220px_1fr]"><div className="border-b border-stone-200 bg-stone-50 p-5 lg:border-b-0 lg:border-e"><div className="flex items-center justify-between gap-3"><div className="rounded-2xl bg-stone-950 px-3 py-2 text-lg font-black text-white">{num}</div><span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">{clamp(moduleProgress)}%</span></div><MiniTreeIcon active={moduleProgress > 0}/><ProgressBar value={moduleProgress}/></div><div className="p-5 md:p-6"><h3 className="text-2xl font-black tracking-tight text-stone-950">{title}</h3><p className="mt-2 max-w-2xl leading-7 text-stone-600">{desc}</p><div className="mt-4 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-black text-stone-600">{tag}</span>)}</div><div className="mt-5 grid gap-2">{lessonNumbers.map(n => { const id = `lesson${String(n).padStart(2,"0")}`; return <div key={n} className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 ${progress[id] ? "border-emerald-200 bg-emerald-50 text-emerald-800" : n === activeLesson ? "border-red-200 bg-red-50 text-red-800" : "border-stone-200 bg-stone-50 text-stone-600"}`}><a href={`#/lesson/${String(n).padStart(2,"0")}`} className="flex min-w-0 items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black shadow-sm">{String(n).padStart(2,"0")}</span><span className="text-sm font-black">{titles[n-1]}</span></a><button onClick={() => save({ ...progress, [id]: !progress[id] })} className="rounded-full bg-white px-3 py-1 text-xs font-black shadow-sm">{progress[id] ? "✓" : "○"}</button></div> })}</div></div></div></article>;
}

function phyloNavCopy(lang) {
  return {
    en: {
      previous: "Previous lesson",
      next: "Next lesson",
      back: "Back to dashboard",
      current: "Current lesson",
      completeTitle: "Finish this lesson",
      completeBody: "Mark your progress here when you are done reviewing this reading.",
      noPrevious: "First lesson",
      noNext: "Last lesson",
      lesson: "Lesson",
    },
    es: {
      previous: "Lección anterior",
      next: "Siguiente lección",
      back: "Volver al dashboard",
      current: "Lección actual",
      completeTitle: "Cerrar esta lección",
      completeBody: "Marca tu progreso aquí cuando termines de revisar esta lectura.",
      noPrevious: "Primera lección",
      noNext: "Última lección",
      lesson: "Lección",
    },
    fa: {
      previous: "درس قبلی",
      next: "درس بعدی",
      back: "بازگشت به داشبورد",
      current: "درس فعلی",
      completeTitle: "پایان این درس",
      completeBody: "وقتی مرور این درس تمام شد، پیشرفت خود را اینجا علامت بزنید.",
      noPrevious: "درس اول",
      noNext: "درس آخر",
      lesson: "درس",
    },
  }[lang] || {
    previous: "Previous lesson",
    next: "Next lesson",
    back: "Back to dashboard",
    current: "Current lesson",
    completeTitle: "Finish this lesson",
    completeBody: "Mark your progress here when you are done reviewing this reading.",
    noPrevious: "First lesson",
    noNext: "Last lesson",
    lesson: "Lesson",
  };
}

function LessonNavigation({ lang, lessonNo, titles, isDone, toggle, placement = "top" }) {
  const copy = phyloNavCopy(lang);
  const prevNo = lessonNo > 1 ? lessonNo - 1 : null;
  const nextNo = lessonNo < titles.length ? lessonNo + 1 : null;
  const formatNo = (n) => String(n).padStart(2, "0");
  const currentTitle = titles[lessonNo - 1] || "";
  const navButtonClass = "inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-black text-stone-800 transition hover:-translate-y-0.5 hover:shadow-md";
  const disabledClass = "inline-flex items-center justify-center rounded-full border border-stone-200 bg-stone-100 px-4 py-2 text-sm font-black text-stone-400";

  if (placement === "bottom") {
    return (
      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-6">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.completeTitle}</div>
            <h2 className="mt-2 text-2xl font-black text-stone-950">{formatNo(lessonNo)} · {currentTitle}</h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-stone-500">{copy.completeBody}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {prevNo ? <a href={`#/lesson/${formatNo(prevNo)}`} className={navButtonClass}>← {copy.previous}</a> : <span className={disabledClass}>{copy.noPrevious}</span>}
            <button onClick={toggle} className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 ${isDone ? "bg-emerald-600 shadow-emerald-900/10" : "bg-red-700 shadow-red-900/10"}`}>
              {isDone ? "✓ " + (lang === "fa" ? "کامل‌شده" : tSafeComplete(lang)) : (lang === "fa" ? "علامت کامل‌شده" : tSafeMarkComplete(lang))}
            </button>
            {nextNo ? <a href={`#/lesson/${formatNo(nextNo)}`} className="inline-flex items-center justify-center rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-stone-800">{copy.next} →</a> : <span className={disabledClass}>{copy.noNext}</span>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-6 rounded-[2rem] border border-stone-200 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <a href="#/" className="text-sm font-black text-red-700">← {copy.back}</a>
          <div className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-stone-400">{copy.current}</div>
          <div className="mt-1 text-xl font-black text-stone-950">{formatNo(lessonNo)} · {currentTitle}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {prevNo ? <a href={`#/lesson/${formatNo(prevNo)}`} className={navButtonClass}>← {copy.previous}</a> : <span className={disabledClass}>{copy.noPrevious}</span>}
          {nextNo ? <a href={`#/lesson/${formatNo(nextNo)}`} className={navButtonClass}>{copy.next} →</a> : <span className={disabledClass}>{copy.noNext}</span>}
        </div>
      </div>
    </section>
  );
}

function tSafeComplete(lang) {
  return lang === "es" ? "Completada" : "Completed";
}

function tSafeMarkComplete(lang) {
  return lang === "es" ? "Marcar completada" : "Mark complete";
}

function MPLessonPage({ lang, lessonNo, progress, save, t }) {
  const titles = PHYLO_TITLES[lang] || PHYLO_TITLES.es;
  const id = `lesson${String(lessonNo).padStart(2,"0")}`;
  const isDone = !!progress[id];
  const toggle = () => save({ ...progress, [id]: !isDone });
  const lessonShared = { LessonNavigation, LessonResources, MiniTreeIcon };
  if (lessonNo === 1) return <CourseIntroLesson lang={lang} t={t} isDone={isDone} toggle={toggle} lessonNo={lessonNo} titles={titles} shared={lessonShared}/>;
  if (lessonNo === 2) return <TreeThinkingLesson lang={lang} t={t} isDone={isDone} toggle={toggle} lessonNo={lessonNo} titles={titles} shared={lessonShared}/>;
  return (
    <main className="mx-auto w-[min(980px,calc(100%-24px))] pb-16 pt-8">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />
      <div className="rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Lesson {String(lessonNo).padStart(2,"0")}</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-950">{titles[lessonNo-1]}</h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">This page is ready to be filled using the same study-guide template: summary, key concepts, common traps, flashcards, quiz and checklist.</p>
      </div>
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}

function App() {
  const [lang, setLangState] = useState(getInitialLang);
  const mode = currentMode();
  const hash = useHash();
  const t = UI[lang] || UI.es;
  const dir = LANGS.find(x => x.code === lang)?.dir || "ltr";
  const setLang = (next) => { localStorage.setItem("studyhub_lang", next); localStorage.setItem("phylo_lang", next); setLangState(next); };
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = dir; }, [lang, dir]);
  return <div dir={dir} className="min-h-screen bg-[#f8f1e6] text-stone-900"><Background/><Header lang={lang} setLang={setLang} mode={mode} t={t}/>{mode === "amlb" ? <AMLBApp t={t} hash={hash}/> : mode === "mp" ? <MPApp t={t} lang={lang} hash={hash}/> : <HubApp t={t}/>}</div>;
}

createRoot(document.getElementById("root")).render(<App />);
