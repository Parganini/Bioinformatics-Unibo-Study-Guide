import React from "react";

export default function TreeThinkingLesson({ lang, t, isDone, toggle, lessonNo, titles, shared }) {
  const { LessonNavigation, LessonResources, MiniTreeIcon } = shared;
  const copy = {
    en: {
      eyebrow: "Lesson 02 · Phylogenetics 101 · Tree thinking",
      title: "Learn to read trees as evolutionary hypotheses, not as visual ladders.",
      subtitle: "This lesson builds the language and intuition needed to interpret phylogenetic trees: characters, clades, nodes, branches, rooting, tree types, polytomies, quartets and the most common reading mistakes.",
      tags: ["synapomorphy", "clade", "MRCA", "root", "outgroup", "topology", "quartet"],
      mrcaLabel: "Core rule",
      mrca: "Relatedness is read from the branching pattern: taxa are closer when they share a more recent common ancestor, not when their labels are drawn near each other.",
      sections: {
        big: ["Big picture", "A phylogenetic tree is a hypothesis about historical relationships. Evolution happened in the past and cannot be directly observed, so trees are inferred from data and can change when new evidence or better models are used."],
        hierarchy: ["Systematics, taxonomy, phylogenetics and cladistics", [
          ["Systematics", "The broadest field: it includes taxonomy and phylogenetics."],
          ["Taxonomy", "The theory and practice of identifying, describing, naming and classifying organisms."],
          ["Phylogenetics", "The reconstruction of evolutionary history and relationships among species or other biological entities."],
          ["Cladistics", "An approach within phylogenetics focused on common ancestry and shared derived traits."],
        ], "A useful hierarchy is: Systematics > Phylogenetics > Cladistics. All cladistics is phylogenetics, but not all phylogenetics is cladistics."],
        characters: ["Characters and evidence", "Characters are useful for phylogeny when their distribution reflects descent. The key distinction is whether a trait is derived or ancestral, and whether it is shared by the taxa being compared.", [
          ["Synapomorphy", "Shared derived trait inherited from the most recent common ancestor of a group. Synapomorphies define clades and are strong evidence of relationship."],
          ["Autapomorphy", "Unique derived trait found in a single taxon. It helps diagnose that lineage, but does not tell us which other taxa it is closest to."],
          ["Symplesiomorphy", "Shared ancestral trait inherited from an older ancestor. It can be misleading because it does not indicate close relationship inside the focal group."],
          ["Plesiomorphy", "An ancestral character state retained by multiple taxa. By itself, it does not define a specific clade."],
        ]],
        clades: ["Types of groups", [
          ["Monophyletic group", "Contains the most recent common ancestor of the group and all of its descendants. This is a clade."],
          ["Paraphyletic group", "Contains the common ancestor but excludes some descendants."],
          ["Polyphyletic group", "Combines lineages from separate origins; the most recent common ancestor also has descendants outside the proposed group."],
        ]],
        sampling: ["Ingroup and outgroup", [
          ["Ingroup", "The focal set of tips assumed in advance to represent the clade we want to study."],
          ["Outgroup", "Tips assumed to fall outside the focal clade. The outgroup helps give direction to the tree and is commonly used for rooting."],
        ]],
        anatomy: ["Tree anatomy", [
          ["Node", "A point at the end of branches. Internal nodes usually represent hypothetical ancestors, and can also be understood as bipartitions or splits."],
          ["Tip / terminal node / OTU", "The sampled sequences, species, populations or individuals used to build the tree."],
          ["Branch", "A connection between nodes and tips. The branching structure is the topology, which carries the relationship information."],
          ["Bipartition / split", "A division of the tips produced by an internal branch. Support metrics often evaluate these splits."],
          ["Rotation", "Internal nodes can be rotated without changing the tree. The same relationships can be drawn with different tip orders."],
        ]],
        treeTypes: ["Tree types and scale", [
          ["Cladogram", "Shows only branching order. Branch lengths do not represent time or amount of change."],
          ["Phylogram", "Branch lengths are scaled to amount of evolutionary change, such as nucleotide substitutions per site."],
          ["Chronogram / timetree", "Branch lengths are scaled to time. This is the output of divergence time analyses."],
        ]],
        rooting: ["Rooting and direction", [
          ["Root", "A specific internal node representing the most recent common ancestor of all tips. It is the oldest part of the tree and gives evolutionary direction."],
          ["Rooted tree", "A tree where ancestor–descendant direction can be interpreted."],
          ["Unrooted tree", "A tree showing relationships without direction; it does not specify the oldest point."],
          ["Outgroup rooting", "Uses an external taxon to place the root."],
          ["Midpoint rooting", "Places the root halfway between the two most distant tips; useful as an approximation, but assumption-dependent."],
        ]],
        complexity: ["Polytomies, triplets and quartets", [
          ["Dichotomous / bifurcating tree", "Every internal node splits into two descendant lineages."],
          ["Polytomy", "A node with more than two descendants. It usually represents unresolved relationships."],
          ["Triplet", "The simplest rooted statement of relationships among three taxa."],
          ["Quartet", "The simplest ambiguous unrooted comparison among four taxa. The possible splits are AB|CD, AC|BD and AD|BC."],
        ]],
        traps: ["Common misconceptions", [
          ["Adjacent tips are closest", "False. Tip order is not the evidence. Follow branches back to the most recent common ancestor."],
          ["Top or bottom means ancestor", "False. Tips are sampled lineages; they are not ancestors of other tips."],
          ["Trees are ladders", "False. Terms like primitive, lower, ancient or more advanced applied to living lineages encourage ladder-thinking."],
          ["Branch length always means time", "False. It depends on the type of tree and whether a scale is shown."],
        ]],
        exam: ["Exam cues", [
          ["shared derived trait", "Think: synapomorphy; useful for defining clades."],
          ["shared ancestral trait", "Think: symplesiomorphy; often misleading for close relationships."],
          ["all descendants included", "Think: monophyly."],
          ["some descendants excluded", "Think: paraphyly."],
          ["branching pattern only", "Think: cladogram."],
          ["substitutions per site", "Think: phylogram."],
          ["million years", "Think: chronogram."],
        ]],
        checklist: ["Before Lesson 03, I can...", [
          "Explain why phylogenetic trees are hypotheses.",
          "Distinguish synapomorphy, autapomorphy, symplesiomorphy and plesiomorphy.",
          "Define monophyly, paraphyly and polyphyly.",
          "Identify nodes, tips, branches, root and bipartitions on a tree.",
          "Explain why rotating a node does not change the tree.",
          "Distinguish cladogram, phylogram and chronogram.",
          "Use MRCA logic to compare relatedness among tips.",
          "Avoid ladder-thinking and other common tree-reading mistakes."
        ]]
      }
    },
    es: {
      eyebrow: "Lección 02 · Phylogenetics 101 · Tree thinking",
      title: "Aprende a leer árboles como hipótesis evolutivas, no como escaleras visuales.",
      subtitle: "Esta lección construye el vocabulario y la intuición necesarios para interpretar árboles filogenéticos: caracteres, clados, nodos, ramas, enraizamiento, tipos de árbol, politomías, cuartetos y errores comunes de lectura.",
      tags: ["synapomorphy", "clado", "MRCA", "raíz", "outgroup", "topología", "cuarteto"],
      mrcaLabel: "Regla central",
      mrca: "La relación se lee desde el patrón de ramificación: los taxones son más cercanos si comparten un ancestro común más reciente, no si sus etiquetas aparecen juntas en el dibujo.",
      sections: {
        big: ["Big picture", "Un árbol filogenético es una hipótesis sobre relaciones históricas. La evolución ocurrió en el pasado y no puede observarse directamente, así que los árboles se infieren a partir de datos y pueden cambiar con nueva evidencia o mejores modelos."],
        hierarchy: ["Systematics, taxonomy, phylogenetics y cladistics", [
          ["Systematics", "El campo más amplio: incluye taxonomy y phylogenetics."],
          ["Taxonomy", "La teoría y práctica de identificar, describir, nombrar y clasificar organismos."],
          ["Phylogenetics", "La reconstrucción de la historia evolutiva y las relaciones entre especies u otras entidades biológicas."],
          ["Cladistics", "Un enfoque dentro de phylogenetics centrado en ancestry común y shared derived traits."],
        ], "Una jerarquía útil es: Systematics > Phylogenetics > Cladistics. Toda cladistics es phylogenetics, pero no toda phylogenetics es cladistics."],
        characters: ["Caracteres y evidencia", "Los caracteres son útiles para filogenia cuando su distribución refleja descendencia. La clave es distinguir si un rasgo es derivado o ancestral, y si está compartido por los taxones comparados.", [
          ["Synapomorphy", "Rasgo derivado compartido heredado del ancestro común más reciente de un grupo. Las synapomorphies definen clados y son evidencia fuerte de relación."],
          ["Autapomorphy", "Rasgo derivado único de un solo taxón. Ayuda a diagnosticar ese linaje, pero no indica con qué otros taxones está más relacionado."],
          ["Symplesiomorphy", "Rasgo ancestral compartido heredado de un ancestro más antiguo. Puede ser engañoso porque no indica relación cercana dentro del grupo focal."],
          ["Plesiomorphy", "Estado ancestral de un carácter retenido por varios taxones. Por sí solo no define un clado específico."],
        ]],
        clades: ["Tipos de grupos", [
          ["Grupo monofilético", "Contiene el ancestro común más reciente del grupo y todos sus descendientes. Esto es un clado."],
          ["Grupo parafilético", "Contiene el ancestro común, pero excluye algunos descendientes."],
          ["Grupo polifilético", "Combina linajes de orígenes separados; el ancestro común más reciente también tiene descendientes fuera del grupo propuesto."],
        ]],
        sampling: ["Ingroup y outgroup", [
          ["Ingroup", "El conjunto focal de tips que asumimos de antemano como el clado que queremos estudiar."],
          ["Outgroup", "Tips que asumimos fuera del clado focal. El outgroup ayuda a dar dirección al árbol y suele usarse para enraizarlo."],
        ]],
        anatomy: ["Anatomía del árbol", [
          ["Nodo", "Punto en el extremo de ramas. Los nodos internos suelen representar ancestros hipotéticos y también pueden entenderse como biparticiones o splits."],
          ["Tip / nodo terminal / OTU", "Las secuencias, especies, poblaciones o individuos muestreados para construir el árbol."],
          ["Rama", "Conexión entre nodos y tips. La estructura de ramificación es la topología, que contiene la información de relación."],
          ["Bipartición / split", "División de los tips producida por una rama interna. Muchas métricas de soporte evalúan estos splits."],
          ["Rotación", "Los nodos internos pueden rotarse sin cambiar el árbol. Las mismas relaciones pueden dibujarse con distinto orden de tips."],
        ]],
        treeTypes: ["Tipos de árbol y escala", [
          ["Cladograma", "Muestra solo el orden de ramificación. Las longitudes de rama no representan tiempo ni cantidad de cambio."],
          ["Filograma", "Las longitudes de rama están escaladas a cantidad de cambio evolutivo, por ejemplo sustituciones nucleotídicas por sitio."],
          ["Cronograma / timetree", "Las longitudes de rama están escaladas a tiempo. Es el tipo de árbol usado en análisis de tiempos de divergencia."],
        ]],
        rooting: ["Raíz y dirección", [
          ["Raíz", "Nodo interno específico que representa el ancestro común más reciente de todos los tips. Es la parte más antigua del árbol y da dirección evolutiva."],
          ["Árbol enraizado", "Árbol donde puede interpretarse dirección ancestro–descendiente."],
          ["Árbol no enraizado", "Árbol que muestra relaciones sin dirección; no especifica cuál es el punto más antiguo."],
          ["Outgroup rooting", "Usa un taxón externo para colocar la raíz."],
          ["Midpoint rooting", "Coloca la raíz a mitad de camino entre los dos tips más distantes; es una aproximación, pero depende de supuestos."],
        ]],
        complexity: ["Politomías, tripletes y cuartetos", [
          ["Árbol dicotómico / bifurcante", "Cada nodo interno se divide en dos linajes descendientes."],
          ["Politomía", "Nodo con más de dos descendientes. Normalmente representa relaciones no resueltas."],
          ["Triplete", "La declaración enraizada más simple de relaciones entre tres taxones."],
          ["Cuarteto", "La comparación no enraizada ambigua más simple entre cuatro taxones. Los splits posibles son AB|CD, AC|BD y AD|CB."],
        ]],
        traps: ["Errores comunes", [
          ["Los tips adyacentes son los más cercanos", "Falso. El orden de tips no es la evidencia. Sigue las ramas hasta el ancestro común más reciente."],
          ["Arriba o abajo significa ancestro", "Falso. Los tips son linajes muestreados; no son ancestros de otros tips."],
          ["Los árboles son escaleras", "Falso. Términos como primitivo, inferior, antiguo o más avanzado aplicados a linajes actuales fomentan ladder-thinking."],
          ["La longitud de rama siempre significa tiempo", "Falso. Depende del tipo de árbol y de si se muestra una escala."],
        ]],
        exam: ["Pistas de examen", [
          ["shared derived trait", "Piensa: synapomorphy; útil para definir clados."],
          ["shared ancestral trait", "Piensa: symplesiomorphy; suele engañar al inferir relaciones cercanas."],
          ["todos los descendientes incluidos", "Piensa: monofilia."],
          ["algunos descendientes excluidos", "Piensa: parafilia."],
          ["solo patrón de ramificación", "Piensa: cladograma."],
          ["substitutions per site", "Piensa: filograma."],
          ["million years", "Piensa: cronograma."],
        ]],
        checklist: ["Antes de Lesson 03, puedo...", [
          "Explicar por qué los árboles filogenéticos son hipótesis.",
          "Distinguir synapomorphy, autapomorphy, symplesiomorphy y plesiomorphy.",
          "Definir monofilia, parafilia y polifilia.",
          "Identificar nodos, tips, ramas, raíz y biparticiones en un árbol.",
          "Explicar por qué rotar un nodo no cambia el árbol.",
          "Distinguir cladograma, filograma y cronograma.",
          "Usar lógica de MRCA para comparar cercanía evolutiva entre tips.",
          "Evitar ladder-thinking y otros errores comunes de lectura."
        ]]
      }
    },
    fa: {
      eyebrow: "درس ۰۲ · مبانی تبارزایی · تفکر درختی",
      title: "درخت‌ها را به‌عنوان فرضیه‌های تکاملی بخوانید، نه نردبان‌های بصری.",
      subtitle: "این درس واژگان و شهود لازم برای تفسیر درخت‌های تبارزایی را می‌سازد: کاراکترها، کلادها، گره‌ها، شاخه‌ها، ریشه‌گذاری، انواع درخت، چندشاخه‌ای‌ها، کوارتت‌ها و خطاهای رایج خواندن درخت.",
      tags: ["سیناپومورفی", "کلاد", "MRCA", "ریشه", "برون‌گروه", "توپولوژی", "کوارتت"],
      mrcaLabel: "قاعدهٔ اصلی",
      mrca: "خویشاوندی از الگوی انشعاب خوانده می‌شود: تاکسون‌ها وقتی نزدیک‌ترند که نیای مشترک جدیدتری داشته باشند، نه وقتی که برچسب‌هایشان کنار هم رسم شده باشد.",
      sections: {
        big: ["نمای کلی", "درخت تبارزایی یک فرضیه دربارهٔ روابط تاریخی است. تکامل در گذشته رخ داده و مستقیم مشاهده نمی‌شود؛ بنابراین درخت‌ها از داده‌ها استنباط می‌شوند و با شواهد جدید یا مدل‌های بهتر می‌توانند تغییر کنند."],
        hierarchy: ["سیستماتیک، تاکسونومی، تبارزایی و کلادیستیک", [
          ["سیستماتیک", "گسترده‌ترین حوزه؛ شامل تاکسونومی و تبارزایی است."],
          ["تاکسونومی", "نظریه و عمل شناسایی، توصیف، نام‌گذاری و طبقه‌بندی جانداران."],
          ["تبارزایی", "بازسازی تاریخ تکاملی و روابط میان گونه‌ها یا دیگر واحدهای زیستی."],
          ["کلادیستیک", "رویکردی درون تبارزایی که بر نیای مشترک و صفات مشتق مشترک تمرکز دارد."],
        ], "یک سلسله‌مراتب مفید چنین است: سیستماتیک > تبارزایی > کلادیستیک. همهٔ کلادیستیک تبارزایی است، اما همهٔ تبارزایی کلادیستیک نیست."],
        characters: ["کاراکترها و شواهد", "کاراکترها زمانی برای تبارزایی مفیدند که توزیع آن‌ها بازتاب تبار و فرود باشد. نکتهٔ کلیدی این است که صفت مشتق است یا اجدادی، و آیا میان تاکسون‌های مورد مقایسه مشترک است یا نه.", [
          ["سیناپومورفی", "صفت مشتق مشترک که از نزدیک‌ترین نیای مشترک یک گروه به ارث رسیده است. سیناپومورفی‌ها کلادها را تعریف می‌کنند و شاهد قوی رابطه‌اند."],
          ["اتاپومورفی", "صفت مشتق منحصربه‌فرد یک تاکسون. آن دودمان را تشخیص می‌دهد، اما نمی‌گوید با کدام تاکسون‌ها نزدیک‌تر است."],
          ["سیمپلزیومورفی", "صفت اجدادی مشترک که از نیایی قدیمی‌تر به ارث رسیده است. می‌تواند گمراه‌کننده باشد، چون رابطهٔ نزدیک درون گروه کانونی را نشان نمی‌دهد."],
          ["پلزیومورفی", "حالت اجدادی یک کاراکتر که در چندین تاکسون حفظ شده است. به‌تنهایی کلاد خاصی را تعریف نمی‌کند."],
        ]],
        clades: ["انواع گروه‌ها", [
          ["گروه تک‌تبار", "نزدیک‌ترین نیای مشترک گروه و همهٔ نوادگانش را شامل می‌شود. این یک کلاد است."],
          ["گروه پیراتبار", "نیای مشترک را شامل می‌شود، اما بعضی نوادگان را حذف می‌کند."],
          ["گروه چندتبار", "دودمان‌هایی با منشأ جدا را کنار هم می‌گذارد؛ نزدیک‌ترین نیای مشترک آن‌ها نوادگانی بیرون از گروه پیشنهادی نیز دارد."],
        ]],
        sampling: ["درون‌گروه و برون‌گروه", [
          ["درون‌گروه", "مجموعهٔ کانونی نوک‌ها که از پیش آن را کلاد مورد مطالعه فرض می‌کنیم."],
          ["برون‌گروه", "نوک‌هایی که بیرون از کلاد کانونی فرض می‌شوند. برون‌گروه به جهت‌دهی و ریشه‌گذاری درخت کمک می‌کند."],
        ]],
        anatomy: ["آناتومی درخت", [
          ["گره", "نقطه‌ای در انتهای شاخه‌ها. گره‌های داخلی معمولاً نیاهای فرضی را نشان می‌دهند و می‌توانند به‌عنوان دوپاره‌سازی یا split نیز فهمیده شوند."],
          ["نوک / گره انتهایی / OTU", "توالی‌ها، گونه‌ها، جمعیت‌ها یا افراد نمونه‌برداری‌شده برای ساخت درخت."],
          ["شاخه", "ارتباط میان گره‌ها و نوک‌ها. ساختار شاخه‌بندی همان توپولوژی است و اطلاعات رابطه را حمل می‌کند."],
          ["دوپاره‌سازی / split", "تقسیم نوک‌ها که توسط یک شاخهٔ داخلی ایجاد می‌شود. بسیاری از معیارهای پشتیبانی همین splitها را ارزیابی می‌کنند."],
          ["چرخش", "گره‌های داخلی را می‌توان چرخاند بدون اینکه درخت تغییر کند. همان روابط با ترتیب متفاوت نوک‌ها قابل رسم‌اند."],
        ]],
        treeTypes: ["انواع درخت و مقیاس", [
          ["کلادوگرام", "فقط ترتیب شاخه‌بندی را نشان می‌دهد. طول شاخه‌ها زمان یا مقدار تغییر را نشان نمی‌دهند."],
          ["فیلوگرام", "طول شاخه‌ها بر اساس مقدار تغییر تکاملی مقیاس‌بندی شده‌اند، مثلاً جانشینی نوکلئوتیدی به ازای هر جایگاه."],
          ["کرونوگرام / درخت زمانی", "طول شاخه‌ها بر اساس زمان مقیاس‌بندی شده‌اند. این نوع در تحلیل زمان‌های واگرایی به کار می‌رود."],
        ]],
        rooting: ["ریشه‌گذاری و جهت", [
          ["ریشه", "گرهٔ داخلی خاصی که نزدیک‌ترین نیای مشترک همهٔ نوک‌ها را نشان می‌دهد. قدیمی‌ترین بخش درخت است و جهت تکاملی می‌دهد."],
          ["درخت ریشه‌دار", "درختی که در آن جهت نیا–نواده قابل تفسیر است."],
          ["درخت بی‌ریشه", "درختی که روابط را بدون جهت نشان می‌دهد و نقطهٔ قدیمی‌تر را مشخص نمی‌کند."],
          ["ریشه‌گذاری با برون‌گروه", "از یک تاکسون خارجی برای قرار دادن ریشه استفاده می‌کند."],
          ["ریشه‌گذاری نقطهٔ میانی", "ریشه را میان دو نوکِ دورتر قرار می‌دهد؛ یک تقریب است و به فرض‌ها وابسته است."],
        ]],
        complexity: ["چندشاخه‌ای‌ها، تریپلت‌ها و کوارتت‌ها", [
          ["درخت دوشاخه / bifurcating", "هر گرهٔ داخلی به دو دودمان نواده تقسیم می‌شود."],
          ["چندشاخه‌ای / polytomy", "گره‌ای با بیش از دو نواده. معمولاً نشان‌دهندهٔ روابط حل‌نشده است."],
          ["تریپلت", "ساده‌ترین بیان ریشه‌دار رابطه میان سه تاکسون."],
          ["کوارتت", "ساده‌ترین مقایسهٔ بی‌ریشه و مبهم میان چهار تاکسون. splitهای ممکن AB|CD، AC|BD و AD|CB هستند."],
        ]],
        traps: ["خطاهای رایج", [
          ["نوک‌های کنار هم نزدیک‌ترین‌اند", "نادرست. ترتیب نوک‌ها شاهد رابطه نیست. شاخه‌ها را تا نزدیک‌ترین نیای مشترک دنبال کنید."],
          ["بالا یا پایین یعنی نیا", "نادرست. نوک‌ها دودمان‌های نمونه‌برداری‌شده‌اند؛ نیاهای نوک‌های دیگر نیستند."],
          ["درخت‌ها نردبان‌اند", "نادرست. واژه‌هایی مثل ابتدایی، پایین‌تر، باستانی یا پیشرفته‌تر برای دودمان‌های زنده تفکر نردبانی ایجاد می‌کنند."],
          ["طول شاخه همیشه یعنی زمان", "نادرست. به نوع درخت و وجود مقیاس بستگی دارد."],
        ]],
        exam: ["نشانه‌های امتحانی", [
          ["shared derived trait", "سیناپومورفی؛ برای تعریف کلادها مفید است."],
          ["shared ancestral trait", "سیمپلزیومورفی؛ معمولاً برای روابط نزدیک گمراه‌کننده است."],
          ["همهٔ نوادگان شامل‌اند", "تک‌تبارگی."],
          ["بعضی نوادگان حذف شده‌اند", "پیراتبارگی."],
          ["فقط الگوی شاخه‌بندی", "کلادوگرام."],
          ["substitutions per site", "فیلوگرام."],
          ["million years", "کرونوگرام."],
        ]],
        checklist: ["پیش از درس ۰۳، می‌توانم...", [
          "توضیح دهم چرا درخت‌های تبارزایی فرضیه‌اند.",
          "سیناپومورفی، اتاپومورفی، سیمپلزیومورفی و پلزیومورفی را تفکیک کنم.",
          "تک‌تبارگی، پیراتبارگی و چندتبارگی را تعریف کنم.",
          "گره‌ها، نوک‌ها، شاخه‌ها، ریشه و دوپاره‌سازی‌ها را در درخت تشخیص دهم.",
          "توضیح دهم چرا چرخاندن یک گره درخت را تغییر نمی‌دهد.",
          "کلادوگرام، فیلوگرام و کرونوگرام را تفکیک کنم.",
          "با منطق MRCA نزدیکی تکاملی میان نوک‌ها را مقایسه کنم.",
          "از تفکر نردبانی و خطاهای رایج خواندن درخت پرهیز کنم."
        ]]
      }
    }
  }[lang] || null;

  const c = copy || copy?.es;
  const sections = c.sections;
  const card = (title, body, tone = "stone") => {
    const tones = {
      stone: "border-stone-200 bg-stone-50 text-stone-900",
      red: "border-red-100 bg-red-50 text-red-950",
      dark: "border-stone-800 bg-stone-950 text-white",
      green: "border-emerald-100 bg-emerald-50 text-emerald-950",
      amber: "border-amber-100 bg-amber-50 text-amber-950",
    };
    return <div key={title} className={`rounded-3xl border p-5 ${tones[tone] || tones.stone}`}><h3 className="text-lg font-black">{title}</h3><p className="mt-2 text-sm font-semibold leading-6 opacity-80">{body}</p></div>;
  };
  const definitionGrid = (items, tone = "stone") => <div className="grid gap-4 md:grid-cols-2">{items.map(([title, body]) => card(title, body, tone))}</div>;

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} />
      <LessonResources lang={lang} lessonNo={lessonNo} />

      <section className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#fffaf0]/92 shadow-xl shadow-stone-900/5">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">{c.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight text-stone-950 md:text-6xl">{c.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{c.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">{c.tags.map(tag => <span key={tag} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700">{tag}</span>)}</div>
          </div>
          <div className="border-t border-stone-200 bg-white/70 p-5 lg:border-l lg:border-t-0">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-5 shadow-inner">
              <MiniTreeIcon active/>
              <div className="mt-5 rounded-3xl bg-stone-950 p-5 text-white">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{c.mrcaLabel}</div>
                <p className="mt-2 text-lg font-bold leading-7">{c.mrca}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.big[0]}</div>
        <p className="text-xl font-bold leading-9 text-stone-800">{sections.big[1]}</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.hierarchy[0]}</div>
          {definitionGrid(sections.hierarchy[1])}
          <div className="mt-4 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-black leading-7 text-red-950">{sections.hierarchy[2]}</div>
        </article>
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.characters[0]}</div>
          <p className="mb-5 leading-7 text-stone-600">{sections.characters[1]}</p>
          {definitionGrid(sections.characters[2])}
        </article>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.clades[0]}</div>
          <div className="grid gap-4 md:grid-cols-3">{sections.clades[1].map(([title, body], i) => card(title, body, i === 0 ? "green" : i === 1 ? "amber" : "red"))}</div>
        </article>
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.sampling[0]}</div>
          <div className="space-y-4">{sections.sampling[1].map(([title, body]) => card(title, body))}</div>
        </article>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.anatomy[0]}</div>
        {definitionGrid(sections.anatomy[1])}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.treeTypes[0]}</div>
          <div className="space-y-4">{sections.treeTypes[1].map(([title, body]) => card(title, body))}</div>
        </article>
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.rooting[0]}</div>
          <div className="space-y-4">{sections.rooting[1].map(([title, body]) => card(title, body))}</div>
        </article>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.complexity[0]}</div>
          {definitionGrid(sections.complexity[1])}
        </article>
        <article className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-200">{sections.traps[0]}</div>
          <div className="space-y-4">{sections.traps[1].map(([title, body]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5"><h3 className="text-lg font-black">⚠️ {title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-stone-300">{body}</p></div>)}</div>
        </article>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">{sections.exam[0]}</div>
        <div className="overflow-hidden rounded-[2rem] border border-stone-200">
          {sections.exam[1].map(([cue, meaning], i) => <div key={cue} className={`grid gap-2 px-5 py-4 text-sm md:grid-cols-[0.8fr_1.2fr] ${i % 2 ? "bg-stone-50" : "bg-white"}`}><div className="font-black text-stone-950">{cue}</div><div className="font-semibold leading-6 text-stone-600">{meaning}</div></div>)}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-sm md:p-8">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-200">{sections.checklist[0]}</div>
        <div className="grid gap-3 md:grid-cols-2">{sections.checklist[1].map(item => <label key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm font-bold leading-6 text-stone-100"><input type="checkbox" className="mt-1 h-4 w-4 accent-red-700"/><span>{item}</span></label>)}</div>
      </section>

      <LessonNavigation lang={lang} lessonNo={lessonNo} titles={titles} isDone={isDone} toggle={toggle} placement="bottom" />
    </main>
  );
}
