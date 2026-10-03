import { Home, UtensilsCrossed, Radio, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/restaurant';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  radioPlaying: boolean;
}

export default function BottomNav({ activeSection, onNavigate, radioPlaying }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass border-t border-red-900/10 pb-safe">
      <div className="flex items-center justify-around h-16">
        <button
          onClick={() => onNavigate('inicio')}
          className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg transition-all btn-press ${
            activeSection === 'inicio' ? 'text-red-800' : 'text-stone-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Início</span>
        </button>

        <button
          onClick={() => onNavigate('pasteis')}
          className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg transition-all btn-press ${
            ['pasteis', 'pizzas', 'lanches', 'bebidas'].includes(activeSection) ? 'text-red-800' : 'text-stone-500'
          }`}
        >
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-[10px] font-bold">Cardápio</span>
        </button>

        <button
          onClick={() => onNavigate('radio')}
          className={`relative flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg transition-all btn-press ${
            activeSection === 'radio' ? 'text-red-800' : 'text-stone-500'
          }`}
        >
          <Radio className="w-5 h-5" />
          <span className="text-[10px] font-bold">Rádio</span>
          {radioPlaying && (
            <span className="absolute top-0 right-2 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          )}
        </button>

        <a
          href={buildWhatsAppLink('Olá! Gostaria de fazer um pedido no Pastelão Sabor Brasileiro.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg text-green-600 btn-press"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
