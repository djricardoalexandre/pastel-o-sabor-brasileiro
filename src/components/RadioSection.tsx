import { Play, Pause, Loader2, Radio, Volume2 } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RadioSectionProps {
  playing: boolean;
  loading: boolean;
  error: boolean;
  onToggle: () => void;
}

export default function RadioSection({ playing, loading, error, onToggle }: RadioSectionProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-16 sm:py-20 bg-gradient-to-br from-stone-900 via-red-950 to-stone-900 reveal ${visible ? 'is-visible' : ''}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-2">Rádio</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Peça seu Lanche e Ouça a Rádio</h2>
          <p className="text-sm sm:text-base text-stone-400 max-w-xl mx-auto leading-relaxed">
            Faça seu pedido enquanto acompanha a programação da Rádio Imigrantes FM 87,9.
          </p>
        </div>

        {/* Player */}
        <div className="relative rounded-3xl bg-stone-800/80 glass-dark p-6 sm:p-8 border border-amber-900/30 shadow-2xl overflow-hidden">
          {/* Decorative glow */}
          {playing && (
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/20 blur-3xl animate-pulse" />
          )}

          <div className="relative flex items-center gap-4 sm:gap-6">
            {/* Play/Pause button */}
            <button
              onClick={onToggle}
              disabled={loading}
              className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-brand flex items-center justify-center shadow-brand btn-press disabled:opacity-60"
              aria-label={playing ? 'Pausar rádio' : 'Tocar rádio'}
            >
              {loading ? (
                <Loader2 className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-spin" />
              ) : playing ? (
                <Pause className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="white" />
              ) : (
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
              )}
              {playing && !loading && (
                <span className="absolute inset-0 rounded-full border-2 border-amber-300 animate-pulse-ring" />
              )}
            </button>

            {/* Radio logo */}
            <div className="shrink-0 rounded-xl bg-white p-1.5 shadow-lg ring-2 ring-amber-400/70">
              <img
                src="/images/logo_radio.jpeg"
                alt="Rádio Imigrantes FM 87,9"
                className="h-20 w-32 sm:h-24 sm:w-40 object-contain rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Radio className="w-4 h-4 text-amber-400 shrink-0" />
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wide truncate">
                  {RESTAURANT_INFO.radio.name}
                </p>
                {playing && !loading && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Ao Vivo
                  </span>
                )}
              </div>
              <p className="text-lg sm:text-xl font-extrabold text-white truncate">
                FM {RESTAURANT_INFO.radio.frequency}
              </p>
              {error ? (
                <p className="text-xs text-red-400 mt-1">Não foi possível conectar. Tente novamente.</p>
              ) : (
                <p className="text-xs text-stone-400 mt-1">
                  {loading ? 'Conectando...' : playing ? 'Tocando agora' : 'Toque para ouvir'}
                </p>
              )}
            </div>

            {/* Equalizer / Volume icon */}
            <div className="shrink-0 hidden sm:block">
              {playing && !loading && !error ? (
                <div className="flex items-end gap-1 h-5 animate-equalizer">
                  <span className="w-1 bg-amber-400 rounded-full" />
                  <span className="w-1 bg-amber-400 rounded-full" />
                  <span className="w-1 bg-amber-400 rounded-full" />
                  <span className="w-1 bg-amber-400 rounded-full" />
                </div>
              ) : (
                <Volume2 className="w-6 h-6 text-stone-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
