import { MessageCircle, UtensilsCrossed, Star } from 'lucide-react';
import { RESTAURANT_INFO, buildWhatsAppLink } from '@/data/restaurant';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-brand" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/foto_01.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-transparent to-amber-900/40" />

      {/* Floating decorative shapes */}
      <div className="absolute top-32 right-10 w-32 h-32 rounded-full bg-amber-400/20 blur-2xl animate-float" />
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-red-500/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 border border-amber-300/30">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-amber-50">Aberto agora — Delivery ativo</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance mb-4">
              Pastelão
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-amber-300 font-bold mt-1">
                Sabor Brasileiro
              </span>
            </h1>

            <p className="text-base sm:text-lg text-amber-50/90 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Pastéis fritos na hora, pizzas, lanches e bebidas para deixar seu dia muito mais saboroso.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={buildWhatsAppLink('Olá! Gostaria de fazer um pedido no Pastelão Sabor Brasileiro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-base shadow-lg transition-all btn-press"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir pelo WhatsApp
              </a>
              <button
                onClick={() => onNavigate('pasteis')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass text-red-900 font-bold text-base border-2 border-white/40 hover:border-amber-300 transition-all btn-press"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Ver Cardápio
              </button>
            </div>

            {/* Quick info bar */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start text-amber-50/80 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Entrega rápida
              </span>
              <span className="w-1 h-1 rounded-full bg-amber-300/50" />
              <span>{RESTAURANT_INFO.whatsappDisplay}</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-1 lg:order-2 perspective-1000">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Main image container corrected */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-amber-300/30 preserve-3d animate-float p-1 bg-red-800/20">
                <img
                  src="/images/foto_01.jpeg"
                  alt="Pastelão Sabor Brasileiro"
                  className="w-full h-auto max-h-[290px] sm:max-h-[390px] lg:max-h-[440px] object-contain mx-auto"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 glass rounded-2xl px-4 py-2 border border-white/30 z-20">
                  <p className="text-xs font-semibold text-red-900">Frito na hora</p>
                  <p className="text-sm font-extrabold text-amber-700">Quentinho e crocante</p>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -top-4 -right-2 sm:-right-6 glass rounded-2xl px-3 py-2.5 shadow-xl border border-white/30 animate-float" style={{ animationDelay: '0.5s' }}>
                <p className="text-2xl">🥟</p>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-left-6 glass rounded-2xl px-3 py-2.5 shadow-xl border border-white/30 animate-float" style={{ animationDelay: '1.2s' }}>
                <p className="text-2xl">🍕</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-50 to-transparent" />
    </section>
  );
}
