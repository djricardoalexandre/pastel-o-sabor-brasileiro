import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CategoryCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  onNavigate: (id: string) => void;
}

function CategoryCard({ id, icon, title, description, image, onNavigate }: CategoryCardProps) {
  return (
    <button
      onClick={() => onNavigate(id)}
      className="group relative rounded-3xl overflow-hidden bg-white shadow-lg card-3d text-left h-72 sm:h-80"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <span className="text-3xl mb-2">{icon}</span>
        <h3 className="text-xl font-extrabold text-white">{title}</h3>
        <p className="text-sm text-amber-100/80 mt-1">{description}</p>
        <div className="mt-3 inline-flex items-center gap-1 text-amber-300 font-bold text-sm group-hover:gap-2 transition-all">
          Ver categoria →
        </div>
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm">→</span>
      </div>
    </button>
  );
}

interface CategoriesProps {
  onNavigate: (id: string) => void;
}

export default function Categories({ onNavigate }: CategoriesProps) {
  const { ref, visible } = useScrollReveal();

  const categories = [
    { id: 'pasteis', icon: '🥟', title: 'Pastéis', description: 'Fritos na hora, crocantes e recheados.', image: 'https://images.pexels.com/photos/15010282/pexels-photo-15010282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: 'pizzas', icon: '🍕', title: 'Pizzas', description: 'Massa caseira e bordas douradas.', image: 'https://images.pexels.com/photos/14965994/pexels-photo-14965994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: 'lanches', icon: '🍔', title: 'Lanches', description: 'Hambúrgueres suculentos para qualquer hora.', image: 'https://images.pexels.com/photos/5179783/pexels-photo-5179783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: 'bebidas', icon: '🥤', title: 'Bebidas', description: 'Refrigerantes, sucos e bebidas geladas.', image: 'https://images.pexels.com/photos/5860659/pexels-photo-5860659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ];

  return (
    <section ref={ref} className={`py-16 sm:py-20 bg-amber-50 reveal ${visible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-2">Cardápio</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">Escolha o seu Sabor</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
