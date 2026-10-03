import { MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';
import { RESTAURANT_INFO, BUSINESS_HOURS, buildWhatsAppLink, isCurrentlyOpen } from '@/data/restaurant';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function DeliveryLocation() {
  const { ref, visible } = useScrollReveal();
  const open = isCurrentlyOpen();

  return (
    <>
      {/* Delivery section */}
      <section id="delivery" ref={ref} className={`py-16 sm:py-20 bg-gradient-to-br from-red-800 to-amber-700 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 border border-amber-300/30">
            <span className={`w-2.5 h-2.5 rounded-full ${open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
            <span className="text-xs font-bold text-amber-50">{open ? 'Aberto agora' : 'Fechado no momento'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Seu Pedido Chega Até Você</h2>
          <p className="text-base text-amber-50/90 mb-8 max-w-xl mx-auto">
            Escolha seus sabores, chame pelo WhatsApp e faça seu pedido.
          </p>
          <a
            href={buildWhatsAppLink('Olá! Gostaria de fazer um pedido no Pastelão Sabor Brasileiro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-xl transition-all btn-press"
          >
            <MessageCircle className="w-6 h-6" />
            Pedir pelo WhatsApp
          </a>
          <p className="text-amber-100 font-semibold mt-4">{RESTAURANT_INFO.whatsappDisplay}</p>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Location card */}
            <div className="group rounded-3xl bg-white p-6 sm:p-8 shadow-lg card-3d">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center shadow-brand">
                  <MapPin className="w-6 h-6 text-amber-50" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-stone-800">Onde Estamos</h3>
                  <p className="text-sm text-stone-500">Venha nos visitar</p>
                </div>
              </div>
              <p className="text-stone-700 font-semibold text-base">{RESTAURANT_INFO.address}</p>
              <p className="text-stone-500 text-sm mb-4">{RESTAURANT_INFO.city}</p>
              <a
                href={RESTAURANT_INFO.addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-amber-50 font-bold text-sm transition-all btn-press shadow-brand"
              >
                <Navigation className="w-4 h-4" />
                Como Chegar
              </a>
              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden h-48 bg-stone-200 flex items-center justify-center">
                <iframe
                  title="Mapa Pastelão Sabor Brasileiro"
                  src="https://www.google.com/maps?q=Ipiranga+do+Norte+MT&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Hours card */}
            <div className="group rounded-3xl bg-white p-6 sm:p-8 shadow-lg card-3d">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center shadow-brand">
                  <Clock className="w-6 h-6 text-amber-50" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-stone-800">Horário de Funcionamento</h3>
                  <p className="text-sm text-stone-500">Estamos prontos para atender</p>
                </div>
              </div>
              <div className="space-y-3">
                {BUSINESS_HOURS.map((entry, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 px-4 rounded-xl bg-amber-50 border border-amber-200/50"
                  >
                    <span className="font-bold text-stone-700 text-sm">{entry.days}</span>
                    <span className="text-stone-600 text-sm font-semibold">{entry.hours}</span>
                  </div>
                ))}
              </div>
              {/* Editable note for owner */}
              <p className="text-xs text-stone-400 mt-4 italic">
                * Horários de demonstração — facilmente editáveis no sistema.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
