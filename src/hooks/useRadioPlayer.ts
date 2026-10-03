import { useEffect, useRef, useState, useCallback } from 'react';

interface RadioPlayerState {
  playing: boolean;
  loading: boolean;
  error: boolean;
  toggle: () => void;
  stop: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export function useRadioPlayer(streamUrl: string): RadioPlayerState {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = new Audio(streamUrl);
    audio.preload = 'none';
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;

    const onPlaying = () => {
      setPlaying(true);
      setLoading(false);
      setError(false);
    };
    const onPause = () => setPlaying(false);
    const onWaiting = () => setLoading(true);
    const onError = () => {
      setError(true);
      setLoading(false);
      setPlaying(false);
    };

    audio.addEventListener('playing', onPlaying);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('waiting', onWaiting);
    audio.addEventListener('error', onError);

    return () => {
      audio.pause();
      audio.removeEventListener('playing', onPlaying);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('waiting', onWaiting);
      audio.removeEventListener('error', onError);
    };
  }, [streamUrl]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      setError(false);
      setLoading(true);
      audio.play().catch(() => {
        setError(true);
        setLoading(false);
      });
    }
  }, [playing]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setPlaying(false);
  }, []);

  return { playing, loading, error, toggle, stop, audioRef };
}
