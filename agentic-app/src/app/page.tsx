import Image from "next/image";

const highlights = [
  {
    title: "تنظيف وتعقيم فائق",
    description: "جلسة واحدة مع أجهزة AirFlow المتطورة ومواد لطيفة على اللثة.",
  },
  {
    title: "ابتسامة هوليود",
    description: "عدسات خزفية مخصصة بدقة عالية لنتائج طبيعية ودائمة.",
  },
  {
    title: "رعاية للأطفال",
    description: "أطباء متخصصون يقدمون تجربة ممتعة وخالية من الخوف للصغار.",
  },
];

const checklist = [
  "نغمة بصرية مستوحاة من الطب الحديث",
  "نسبة ١:١ مثالية لمنشورات انستغرام",
  "نص عربي واضح مع دعوة قوية للحجز",
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-emerald-50 px-6 py-16 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-6 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px] xl:gap-16">
        <section className="flex flex-col gap-6 text-right">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-cyan-600 shadow-sm ring-1 ring-cyan-100">
            <span className="size-2 rounded-full bg-emerald-400" />
            جاهز للنشر على انستغرام
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            بوست إبداعي لمجمع نوران الطبي بخدمة طب الأسنان المتكاملة
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            تصميم يبرز الثقة والراحة، مع ألوان هادئة ورسائل واضحة تركز على
            أحدث تقنيات العناية بالأسنان وطاقم المجمع المتخصص.
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-slate-600">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200"
              >
                <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-emerald-400 text-sm font-semibold text-white shadow-sm">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-4 rounded-3xl bg-white/70 p-6 shadow-lg ring-1 ring-white/60 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600">
                  <Image
                    src="/icon-tooth.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  {highlight.title}
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-[56px] bg-gradient-to-br from-cyan-500/20 via-white to-emerald-400/20 blur-2xl" />
          <article className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[48px] bg-white shadow-[0_30px_120px_-40px_rgba(15,118,110,0.45)] ring-1 ring-white/80">
            <div className="absolute -top-32 -right-10 h-64 w-64 rounded-full bg-cyan-300/40 blur-3xl" />
            <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
            <div className="relative flex h-full flex-col px-8 py-9">
              <header className="flex items-center justify-between gap-4 text-slate-700">
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-inner ring-1 ring-white/70">
                    <Image
                      src="/logo.svg"
                      alt="شعار مجمع نوران الطبي"
                      width={56}
                      height={56}
                    />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      مجمع نوران الطبي
                    </p>
                    <p className="text-sm text-slate-500">
                      قسم طب الأسنان المتخصص
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  #ابتسامتك_أجمل
                </span>
              </header>

              <div className="relative mt-10 flex flex-1 flex-col overflow-hidden rounded-[36px] bg-gradient-to-br from-white via-cyan-50 to-emerald-100 p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-cyan-700 shadow-sm ring-1 ring-white/60">
                      تقييم شامل مجاني
                    </span>
                    <span className="text-sm font-medium text-emerald-600">
                      حتى 30 يونيو
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold leading-snug text-slate-900">
                    ابتسامة مشرقة مع أحدث تقنيات{" "}
                    <span className="text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">
                      طب الأسنان
                    </span>
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600">
                    عيادات رقمية بالكامل، أطباء استشاريون، وتقنيات مريحة لعلاج
                    اللثة والتجميل دون ألم. رعاية متكاملة تبدأ من التشخيص الدقيق
                    وحتى المتابعة بعد العلاج.
                  </p>
                </div>
                <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                  <div className="grid gap-3 text-sm font-medium text-slate-700">
                    <div className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-white/60">
                      <p className="text-xs text-cyan-600">مواعيد مرنة</p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        يومياً ٩ ص - ١٠ م
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-white/60">
                      <p className="text-xs text-cyan-600">خدمة الطوارئ</p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        على مدار الساعة
                      </p>
                    </div>
                  </div>
                  <div className="relative flex h-40 w-40 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-emerald-200/50 blur-xl" />
                    <Image
                      src="/dentist.svg"
                      alt="طبيبة أسنان"
                      width={220}
                      height={220}
                      className="relative h-40 w-40 object-contain"
                    />
                  </div>
                </div>
              </div>

              <footer className="mt-8 flex items-center justify-between gap-4 rounded-3xl bg-white/80 px-6 py-4 text-sm font-medium text-slate-600 shadow-inner ring-1 ring-white/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-500">
                    Nuran Clinic
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    جدة | حي الروضة | 920012345
                  </p>
                </div>
                <a
                  href="https://wa.me/966920012345"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:shadow-emerald-500/40"
                >
                  احجز موعدك الآن
                </a>
              </footer>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
