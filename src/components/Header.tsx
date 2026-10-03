import { Download, Check, MessageCircle, Radio, Play, Pause, Loader2 } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/restaurant';

interface HeaderProps {
  canInstall: boolean;
  installed: boolean;
  onInstall: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  radioPlaying: boolean;
  radioLoading: boolean;
  onRadioToggle: () => void;
}

const NAV_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'pasteis', label: 'Pastéis' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'lanches', label: 'Lanches' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'sobre', label: 'Sobre nós' },
  { id: 'delivery', label: 'Delivery' },
];

export default function Header({
  canInstall,
  installed,
  onInstall,
  activeSection,
  onNavigate,
  radioPlaying,
  radioLoading,
  onRadioToggle,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-red-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo */}
          <button onClick={() => onNavigate('inicio')} className="flex items-center shrink-0 btn-press" aria-label="Ir para o início">
            <img
              src="/images/logo_PASTELAO.png"
              alt="Pastelão Sabor Brasileiro"
              className="h-12 w-[112px] sm:w-[132px] object-contain object-center"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all btn-press ${
                  activeSection === item.id
                    ? 'bg-red-800 text-amber-50'
                    : 'text-stone-700 hover:bg-red-50 hover:text-red-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[10px] font-extrabold uppercase tracking-wide text-red-800 whitespace-nowrap">
              Ouça a Imigrantes FM
            </span>
            <img
              src="/images/logo_radio.jpeg"
              alt="Rádio Imigrantes FM 87,9"
              className="hidden sm:block h-12 w-20 sm:h-14 sm:w-24 object-contain rounded-lg bg-white shadow-md ring-2 ring-amber-400/60"
            />
            <button
              onClick={onRadioToggle}
              disabled={radioLoading}
              aria-label={radioPlaying ? 'Pausar Rádio Imigrantes FM 87,9' : 'Ouvir Rádio Imigrantes FM 87,9'}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all btn-press border ${
                radioPlaying || radioLoading ? 'animate-pulse' : ''
              } ${
                radioPlaying
                  ? 'bg-red-800 text-amber-50 border-red-700 shadow-brand'
                  : 'bg-stone-100 text-red-800 border-red-900/10 hover:bg-red-50'
              }`}
            >
              {radioLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : radioPlaying ? (
                <Pause className="w-4 h-4" fill="currentColor" />
              ) : (
                <Play className="w-4 h-4" fill="currentColor" />
              )}
              <Radio className="w-4 h-4 hidden sm:block" />
              <span className="hidden md:inline">Rádio 87,9</span>
              {radioPlaying && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
            </button>

            {canInstall && !installed && (
              <button
                onClick={onInstall}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-gold transition-all btn-press animate-pulse"
              >
                <Download className="w-4 h-4" />
                <span className="hidden xs:inline sm:inline">Instalar App</span>
              </button>
            )}
            {installed && (
              <span className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-green-100 text-green-700 font-bold text-xs sm:text-sm">
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">App Instalado</span>
              </span>
            )}
            <a
              href={buildWhatsAppLink('Olá! Gostaria de fazer um pedido.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs sm:text-sm transition-all btn-press shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
