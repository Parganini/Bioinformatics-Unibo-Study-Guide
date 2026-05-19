import React from "react";

export default function CourseIntroLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources } = shared;
  const copy = {
    en: {
      eyebrow: "Lesson 01 · Course introduction & setup",
      title: "Start the course with the map, the tools and the exam logic.",
      subtitle: "This first lesson orients the course: what molecular phylogenetics is, how the classes work, which materials and tools matter, and how to study without reducing the course to commands.",
      bigIdea: "The goal is to learn how biological data become phylogenetic inferences that can be interpreted and defended.",
      stats: [["6", "CFUs"], ["48", "total hours"], ["16", "classes"], ["3h", "per class"]],
      sections: {
        glance: ["Course at a glance", ["Molecular Phylogenetics B5791", "MSc in Bioinformatics", "Theory + practical sessions", "Slides, papers, books, GitHub, Drive and recordings"]],
        rhythm: ["How each lesson works", [["1h20", "theoretical explanation"], ["20 min", "pause"], ["1h20", "practical session"]]],
        toolkit: ["Software toolkit", [["Command line / environment", ["Conda", "MAFFT", "trimAl", "IQ-TREE"]], ["Visual / analysis tools", ["AliView", "FigTree", "Tracer", "R", "RStudio"]]]],
        exam: ["Exam format", [["22", "multiple choice questions · one point each · no penalty"], ["2", "open-ended synthesis questions · five points each"], ["Focus", "understanding, interpretation and practical reasoning"]]],
        study: ["How to study", ["Understand concepts before memorizing terms.", "Connect every practical step to the biological question.", "Review slides with the study guide, then test yourself with checkpoints.", "Use tools as part of the logic of inference, not as isolated commands."]],
        checklist: ["Before Lesson 02, I can...", ["Explain how the course is organized.", "Identify the main study materials.", "Recognize the tools used in practical sessions.", "Describe the exam format.", "Explain why interpretation matters more than memorizing commands."]]
      },
      roadmap: "Course roadmap",
    },
    es: {
      eyebrow: "Lección 01 · Introducción y setup",
      title: "Empieza el curso con el mapa, las herramientas y la lógica del examen.",
      subtitle: "Esta primera lección orienta la materia: qué es la filogenética molecular, cómo funcionan las clases, qué materiales y herramientas importan, y cómo estudiar sin reducir el curso a comandos.",
      bigIdea: "El objetivo es aprender cómo los datos biológicos se convierten en inferencias filogenéticas que pueden interpretarse y defenderse.",
      stats: [["6", "CFUs"], ["48", "horas totales"], ["16", "clases"], ["3h", "por clase"]],
      sections: {
        glance: ["Course at a glance", ["Molecular Phylogenetics B5791", "MSc in Bioinformatics", "Teoría + sesiones prácticas", "Slides, papers, libros, GitHub, Drive y grabaciones"]],
        rhythm: ["Cómo funciona cada clase", [["1h20", "explicación teórica"], ["20 min", "pausa"], ["1h20", "sesión práctica"]]],
        toolkit: ["Software toolkit", [["Línea de comandos / entorno", ["Conda", "MAFFT", "trimAl", "IQ-TREE"]], ["Herramientas visuales / análisis", ["AliView", "FigTree", "Tracer", "R", "RStudio"]]]],
        exam: ["Formato del examen", [["22", "preguntas multiple choice · un punto cada una · sin penalización"], ["2", "preguntas abiertas de síntesis · cinco puntos cada una"], ["Enfoque", "comprensión, interpretación y razonamiento práctico"]]],
        study: ["Cómo estudiar", ["Entiende los conceptos antes de memorizar términos.", "Conecta cada paso práctico con la pregunta biológica.", "Repasa las slides con la guía y luego usa checkpoints.", "Usa las herramientas como parte de la lógica de inferencia, no como comandos aislados."]],
        checklist: ["Antes de Lesson 02, puedo...", ["Explicar cómo está organizado el curso.", "Identificar los materiales principales de estudio.", "Reconocer las herramientas usadas en las prácticas.", "Describir el formato del examen.", "Explicar por qué interpretar importa más que memorizar comandos."]]
      },
      roadmap: "Ruta del curso",
    },
    fa: {
      eyebrow: "درس ۰۱ · معرفی درس و آماده‌سازی",
      title: "درس را با نقشهٔ راه، ابزارها و منطق امتحان شروع کنید.",
      subtitle: "این درس اول مسیر را مشخص می‌کند: تبارزایی مولکولی چیست، کلاس‌ها چگونه پیش می‌روند، چه منابع و ابزارهایی مهم‌اند، و چگونه بدون فروکاستن درس به چند دستور آن را مطالعه کنیم.",
      bigIdea: "هدف این است که یاد بگیریم داده‌های زیستی چگونه به استنباط‌های تبارزایی قابل تفسیر و قابل دفاع تبدیل می‌شوند.",
      stats: [["6", "واحد CFU"], ["48", "ساعت کل"], ["16", "جلسه"], ["3h", "برای هر جلسه"]],
      sections: {
        glance: ["نمای کلی درس", ["Molecular Phylogenetics B5791", "کارشناسی ارشد بیوانفورماتیک", "نظری + جلسه‌های عملی", "اسلایدها، مقاله‌ها، کتاب‌ها، GitHub، Drive و ضبط‌ها"]],
        rhythm: ["هر جلسه چگونه پیش می‌رود", [["1h20", "توضیح نظری"], ["20 min", "استراحت"], ["1h20", "جلسهٔ عملی"]]],
        toolkit: ["جعبه‌ابزار نرم‌افزاری", [["خط فرمان / محیط", ["Conda", "MAFFT", "trimAl", "IQ-TREE"]], ["ابزارهای تصویری / تحلیلی", ["AliView", "FigTree", "Tracer", "R", "RStudio"]]]],
        exam: ["ساختار امتحان", [["22", "سؤال چندگزینه‌ای · هرکدام یک امتیاز · بدون نمرهٔ منفی"], ["2", "سؤال بازِ ترکیبی · هرکدام پنج امتیاز"], ["تمرکز", "فهم، تفسیر و استدلال عملی"]]],
        study: ["چگونه مطالعه کنیم", ["پیش از حفظ واژه‌ها، مفهوم‌ها را بفهمید.", "هر گام عملی را به پرسش زیستی وصل کنید.", "اسلایدها را همراه راهنما مرور کنید و بعد با چک‌پوینت‌ها خود را بسنجید.", "ابزارها را بخشی از منطق استنباط بدانید، نه چند دستور جداگانه."]],
        checklist: ["پیش از درس ۰۲، می‌توانم...", ["توضیح دهم درس چگونه سازمان‌دهی شده است.", "منابع اصلی مطالعه را شناسایی کنم.", "ابزارهای استفاده‌شده در جلسه‌های عملی را بشناسم.", "ساختار امتحان را توضیح دهم.", "توضیح دهم چرا تفسیر مهم‌تر از حفظ دستورهاست."]]
      },
      roadmap: "نقشهٔ راه درس",
    }
  }[lang] || {};

  const renderCardList = (items) => <div className="grid gap-3 sm:grid-cols-2">{items.map(item => <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-bold leading-6 text-stone-700">{item}</div>)}</div>;

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{copy.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{copy.subtitle}</p>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <div className="grid grid-cols-2 gap-3">{copy.stats.map(([value,label]) => <div key={label} className="rounded-3xl bg-stone-50 p-4"><div className="text-4xl font-black text-red-700">{value}</div><div className="mt-1 text-sm font-bold leading-5 text-stone-600">{label}</div></div>)}</div>
              <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Big picture</div><p className="mt-2 text-lg font-bold leading-7">{copy.bigIdea}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.glance[0]}</div>{renderCardList(copy.sections.glance[1])}</article>
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.rhythm[0]}</div><div className="grid gap-3">{copy.sections.rhythm[1].map(([time,label]) => <div key={time} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-4"><span className="text-2xl font-black text-stone-950">{time}</span><span className="text-sm font-bold text-stone-600">{label}</span></div>)}</div></article>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.toolkit[0]}</div><div className="grid gap-4 md:grid-cols-2">{copy.sections.toolkit[1].map(([group, tools]) => <div key={group} className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><h3 className="text-xl font-black text-stone-950">{group}</h3><div className="mt-4 flex flex-wrap gap-2">{tools.map(tool => <span key={tool} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-black text-stone-700">{tool}</span>)}</div></div>)}</div></section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1fr]"><article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.exam[0]}</div><div className="space-y-3">{copy.sections.exam[1].map(([value,label]) => <div key={value} className="rounded-2xl border border-red-100 bg-red-50 p-4"><div className="text-2xl font-black text-red-700">{value}</div><div className="mt-1 text-sm font-bold leading-6 text-red-950">{label}</div></div>)}</div></article><article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.sections.study[0]}</div>{renderCardList(copy.sections.study[1])}</article></section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{copy.roadmap}</div><div className="grid gap-2 md:grid-cols-2">{titles.map((title, i) => <a key={title} href={`#/lesson/${String(i+1).padStart(2,"0")}`} className={`rounded-2xl border px-4 py-3 text-sm font-black ${i === 0 ? "border-red-200 bg-red-50 text-red-800" : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"}`}>{String(i+1).padStart(2,"0")} · {title}</a>)}</div></section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm"><div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-200">{copy.sections.checklist[0]}</div><div className="grid gap-3 md:grid-cols-2">{copy.sections.checklist[1].map(item => <label key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm font-bold leading-6 text-stone-100"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700"/><span>{item}</span></label>)}</div></section>

      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}
