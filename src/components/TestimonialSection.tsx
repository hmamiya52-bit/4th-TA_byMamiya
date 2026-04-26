const testimonials = [
  {
    source: "陸技講座",
    text: "知ってることを前提に講義を行わないので理系分野を勉強してこなかった自分でもとても理解がし易く非常にありがたいです。",
  },
  {
    source: "陸技講座",
    text: "典型的文系の私でも分かりやすく、得意な暗記に持ち込んで勝負する方法を教えてくれるので、分かりやすい上に、やる気？闘志？の支えになります。本当にありがとうございます",
  },
  {
    source: "陸技講座",
    text: "結構ゴリゴリ解き進めてしまうクセがあるのでそれを叩き直せてもらえてよかった。",
  },
  {
    source: "陸技動画",
    text: "ここ分からんなあ、って時にちょうど動画がアップされてすごく助かった。モチベアップにつながった。",
  },
  {
    source: "陸技動画",
    text: "要点を捉えている動画で覚えるべきところ、重要なところがとてもわかりやすかったです。動画にすることでゆっくり見ることや巻き戻して見るとこができとてもありがたかったです。",
  },
  {
    source: "APグループワーク",
    text: "グループで解答すると違う考え方ができたのが新鮮だった。",
  },
  {
    source: "APグループワーク",
    text: "午後問題のコツを掴めたような気がします",
  },
  {
    source: "AP動画",
    text: "勉強方法や、午後問題の分野選択等非常に勉強になりました!最後にやるべきことや、動画のまとめがあったのも良かったです。",
  },
  {
    source: "AP動画",
    text: "動画だと、場所を問わず自分のペースで視聴できるので良かった。また、スケジュール感が把握でき、大変参考になった",
  },
  {
    source: "AP動画",
    text: "動画で一緒に解けるので、実際にどう解くかの流れが分かってとても良かったです。",
  },
  {
    source: "FE講座",
    text: "アルゴリズムの考え方については、プログラミングへの理解が深まると同時に、物事の解決へのアプローチ方法としても自身に取り入れられる要素として得られたように感じた。",
  },
  {
    source: "FE講座",
    text: "当初は資格を取ることだけを目標に講座を受講していたが、回数を重ねるうちに、自分の知識が拡大していることが感じられ、ネットワークに関し、より興味を持てるようになった。アルゴリズムについては、知識を身に付けるだけでなく、様々な視点から物事を解決していく能力に活かせると思った。",
  },
  {
    source: "FE講座後4/26",
    text: "●●隊　名誉第2小隊長\nご無沙汰しております。\n在職中はたいへんお世話になりました〇〇です。\n\n本日、基本情報技術者試験のリベンジをしてきたところ、合格点を取ることができました！\n\n間宮さんの間宮塾のおかげで、無事合格することができました。ほんとうにありがとうございました！",
  },
];

const cardThemes = [
  {
    card: "border-sky-200/80 bg-sky-50/90 dark:border-sky-400/25 dark:bg-sky-400/10",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-400/15 dark:text-sky-100",
  },
  {
    card: "border-teal-200/80 bg-teal-50/90 dark:border-teal-400/25 dark:bg-teal-400/10",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-400/15 dark:text-teal-100",
  },
  {
    card: "border-amber-200/80 bg-amber-50/90 dark:border-amber-400/25 dark:bg-amber-400/10",
    badge: "bg-amber-100 text-amber-900 dark:bg-amber-400/15 dark:text-amber-100",
  },
  {
    card: "border-rose-200/80 bg-rose-50/90 dark:border-rose-400/25 dark:bg-rose-400/10",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-400/15 dark:text-rose-100",
  },
  {
    card: "border-violet-200/80 bg-violet-50/90 dark:border-violet-400/25 dark:bg-violet-400/10",
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-400/15 dark:text-violet-100",
  },
  {
    card: "border-emerald-200/80 bg-emerald-50/90 dark:border-emerald-400/25 dark:bg-emerald-400/10",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-100",
  },
  {
    card: "border-cyan-200/80 bg-cyan-50/90 dark:border-cyan-400/25 dark:bg-cyan-400/10",
    badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-400/15 dark:text-cyan-100",
  },
  {
    card: "border-lime-200/80 bg-lime-50/90 dark:border-lime-400/25 dark:bg-lime-400/10",
    badge: "bg-lime-100 text-lime-900 dark:bg-lime-400/15 dark:text-lime-100",
  },
  {
    card: "border-orange-200/80 bg-orange-50/90 dark:border-orange-400/25 dark:bg-orange-400/10",
    badge: "bg-orange-100 text-orange-900 dark:bg-orange-400/15 dark:text-orange-100",
  },
  {
    card: "border-pink-200/80 bg-pink-50/90 dark:border-pink-400/25 dark:bg-pink-400/10",
    badge: "bg-pink-100 text-pink-800 dark:bg-pink-400/15 dark:text-pink-100",
  },
  {
    card: "border-indigo-200/80 bg-indigo-50/90 dark:border-indigo-400/25 dark:bg-indigo-400/10",
    badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-400/15 dark:text-indigo-100",
  },
  {
    card: "border-fuchsia-200/80 bg-fuchsia-50/90 dark:border-fuchsia-400/25 dark:bg-fuchsia-400/10",
    badge: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-400/15 dark:text-fuchsia-100",
  },
  {
    card: "border-stone-200/80 bg-stone-50/90 dark:border-stone-400/25 dark:bg-stone-400/10",
    badge: "bg-stone-100 text-stone-800 dark:bg-stone-400/15 dark:text-stone-100",
  },
];

export function TestimonialSection() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold text-brand">Voices</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">受講者の生の声</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            過去の講義のアンケートで届いた受講者の感想の一部を掲載しています。
          </p>
        </div>

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => {
            const theme = cardThemes[index % cardThemes.length];

            return (
            <article
              key={`${testimonial.source}-${testimonial.text}`}
              className={`mb-5 break-inside-avoid rounded-lg border p-5 shadow-sm ${theme.card}`}
            >
              <p className="mt-1 whitespace-pre-line text-sm leading-7 text-ink">{testimonial.text}</p>
              <p className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${theme.badge}`}>
                {testimonial.source}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
