import { Play, Pause, Loader2, X } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';

interface MiniPlayerProps {
  playing: boolean;
  loading: boolean;
  error: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function MiniPlayer({ playing, loading, error, onToggle, onClose }: MiniPlayerProps) {
  if (!playing && !loading) return null;

  return (
    <div className="fixed bottom-16 lg:bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1rem)] max-w-sm">
      <div className="flex items-center gap-3 p-3 rounded-2xl glass-dark border border-amber-900/30 shadow-2xl">
        {/* Play/Pause */}
        <button
          onClick={onToggle}
          disabled={loading}
          className="shrink-0 w-10 h-10 rounded-full gradient-brand flex items-center justify-center btn-press disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 text-white animate-spin" />
          ) : playing ? (
            <Pause className="w-5 h-5 text-white" fill="white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          )}
        </button>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-600 text-white text-[9px] font-bold uppercase shrink-0">
              <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
              Ao Vivo
            </span>
            <p className="text-xs font-bold text-white truncate">
              {RESTAURANT_INFO.radio.name} FM {RESTAURANT_INFO.radio.frequency}
            </p>
          </div>
          {error && <p className="text-[10px] text-red-400">Erro de conexão</p>}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
