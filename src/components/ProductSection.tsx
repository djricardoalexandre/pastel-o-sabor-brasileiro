import { MessageCircle } from 'lucide-react';
import { Product } from '@/data/menu';
import { buildWhatsAppLink } from '@/data/restaurant';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const orderLink = buildWhatsAppLink(`Olá! Gostaria de pedir: ${product.name}`);

  return (
    <div className="group relative rounded-2xl bg-white overflow-hidden shadow-md card-3d">
      <div className="relative h-44 sm:h-48 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-700 to-amber-600 flex items-center justify-center">
            <span className="text-6xl drop-shadow-lg" aria-hidden="true">{product.emoji}</span>
          </div>
        )}
        {product.tag && (
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-red-700 text-amber-50 text-[10px] font-bold uppercase tracking-wide shadow-md">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-extrabold text-stone-800 text-base leading-tight">{product.name}</h3>
        {product.description && (
          <p className="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">{product.description}</p>
        )}
        {product.sizes && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.sizes.map((size) => (
              <span key={size} className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-700">
                {size}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-end mt-3">
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs transition-all btn-press shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
  bgClass?: string;
}

export default function ProductSection({ id, title, subtitle, description, products, bgClass = 'bg-white' }: ProductSectionProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} id={id} className={`py-16 sm:py-20 ${bgClass} reveal ${visible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-2">{subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800 mb-3">{title}</h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="text-center text-xs text-stone-400 mt-6 italic">
          Consulte opções e valores pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
