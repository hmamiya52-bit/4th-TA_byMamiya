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
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.source}-${testimonial.text}`}
              className="mb-5 break-inside-avoid rounded-lg border border-line bg-surface p-5 shadow-sm"
            >
              <p className="mt-1 whitespace-pre-line text-sm leading-7 text-ink">{testimonial.text}</p>
              <p className="mt-4 inline-flex rounded-full bg-badge px-3 py-1 text-xs font-bold text-badgeText">
                {testimonial.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
