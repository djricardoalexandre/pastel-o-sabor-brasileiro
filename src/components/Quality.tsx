import { useScrollReveal } from '@/hooks/useScrollReveal';

const QUALITY_CARDS = [
  {
    icon: '🥖',
    title: 'Massa Preparada com Cuidado',
    description: 'Ingredientes e preparo pensados para garantir sabor e qualidade.',
  },
  {
    icon: '🧀',
    title: 'Recheio Caprichado',
    description: 'Produtos preparados para oferecer muito sabor em cada mordida.',
  },
  {
    icon: '🔥',
    title: 'Frito na Hora',
    description: 'Pastéis preparados na hora para chegar quentinhos e crocantes.',
  },
];

export default function Quality() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-16 sm:py-20 bg-stone-900 reveal ${visible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-2">Nossa Qualidade</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Feito com Carinho. Servido com Sabor.</h2>
          <p className="text-sm sm:text-base text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Do preparo da massa ao momento em que o pedido chega até você, cada detalhe é pensado para oferecer uma experiência saborosa, caprichada e feita com carinho.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {QUALITY_CARDS.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-stone-800/80 p-6 sm:p-8 text-center card-3d border border-amber-900/20"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-brand flex items-center justify-center text-3xl mb-4 shadow-brand group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
