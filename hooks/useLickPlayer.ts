"use client";

import { useState, useCallback } from 'react';

export function useLickPlayer(tab: string, tempo: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const play = useCallback(async () => {
    // Temporarily disabled - audio playback under development
    console.log('Audio playback temporarily disabled');
  }, []);

  const stop = useCallback(() => {
    // Temporarily disabled - audio playback under development
    setIsPlaying(false);
  }, []);

  return {
    play,
    stop,
    isPlaying,
    isLoading
  };
}
