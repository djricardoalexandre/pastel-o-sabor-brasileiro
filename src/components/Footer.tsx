import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO, buildWhatsAppLink } from '@/data/restaurant';

export default function Footer() {
  return (
    <footer className="bg-stone-900 pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="rounded-2xl bg-white/95 p-2 shadow-lg">
              <img
                src="/images/logo_PASTELAO.png"
                alt="Pastelão Sabor Brasileiro"
                className="h-20 w-36 object-contain object-center rounded-xl"
              />
            </div>
          </div>

          <p className="text-amber-400 font-semibold text-lg italic mb-6">"{RESTAURANT_INFO.slogan}"</p>

          <a
            href={buildWhatsAppLink('Olá! Gostaria de fazer um pedido no Pastelão Sabor Brasileiro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all btn-press shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir pelo WhatsApp
          </a>
        </div>

        {/* Contact info grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-800/60">
            <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-stone-500 font-semibold uppercase">Telefone</p>
              <p className="text-sm text-white font-bold">{RESTAURANT_INFO.whatsappDisplay}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-800/60">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-stone-500 font-semibold uppercase">Endereço</p>
              <p className="text-sm text-white font-bold">{RESTAURANT_INFO.address}</p>
              <p className="text-sm text-stone-400">{RESTAURANT_INFO.city}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-700/50 mb-6" />

        <p className="text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Pastelão Sabor Brasileiro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
