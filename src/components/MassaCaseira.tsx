import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function MassaCaseira() {
  const { ref, visible } = useScrollReveal();

  const images = [
    { src: 'https://images.pexels.com/photos/34413649/pexels-photo-34413649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Massa sendo aberta' },
    { src: 'https://images.pexels.com/photos/34413615/pexels-photo-34413615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Preparo artesanal' },
    { src: 'https://images.pexels.com/photos/35068371/pexels-photo-35068371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Forno aceso' },
    { src: 'https://images.pexels.com/photos/31587831/pexels-photo-31587831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Pizza pronta' },
  ];

  return (
    <section ref={ref} className={`py-16 sm:py-20 bg-amber-50 reveal ${visible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-2">Massa Caseira</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800 mb-3">Massa Caseira, Sabor de Verdade</h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Uma boa pizza começa pela massa. Por isso, valorizamos uma massa preparada com cuidado, textura agradável e bordas douradas para deixar cada pedaço ainda mais especial.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg card-3d h-56 sm:h-64"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
