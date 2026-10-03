import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Team() {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} id="sobre" className={`py-16 sm:py-20 bg-white reveal ${visible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-2">Nossa Equipe</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800 mb-3">Por Trás de Cada Sabor</h2>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96 group">
          <img
            src="https://images.pexels.com/photos/15441279/pexels-photo-15441279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Equipe da pastelaria trabalhando"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-center">
            <p className="text-base sm:text-lg text-amber-50 font-medium max-w-2xl mx-auto leading-relaxed">
              Uma equipe que trabalha todos os dias para levar sabor, qualidade e carinho para a sua mesa.
            </p>
          </div>
        </div>
        <p className="text-center text-xs text-stone-400 mt-4 italic">
          * Foto ilustrativa — preparada para ser substituída por fotos reais do estabelecimento.
        </p>
      </div>
    </section>
  );
}
