"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import * as Tone from 'tone';
import { parseTab } from '@/lib/utils/tab-parser';

export function useLickPlayer(tab: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const partRef = useRef<Tone.Part | null>(null);

  // Initialize synth on mount
  useEffect(() => {
    // Clean guitar-like synth settings
    synthRef.current = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: 'triangle'
      },
      envelope: {
        attack: 0.005,
        decay: 0.3,
        sustain: 0.4,
        release: 0.8
      }
    }).toDestination();

    // Set volume
    synthRef.current.volume.value = -8;

    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      if (partRef.current) {
        partRef.current.dispose();
      }
    };
  }, []);

  const play = useCallback(async () => {
    if (!synthRef.current || isPlaying) return;

    setIsLoading(true);

    try {
      // Start Tone.js context (required for audio)
      await Tone.start();

      // Parse the tab to get notes
      const notes = parseTab(tab);

      if (notes.length === 0) {
        console.warn('No notes found in tab');
        setIsLoading(false);
        return;
      }

      // Stop any existing part
      if (partRef.current) {
        partRef.current.stop();
        partRef.current.dispose();
      }

      // Create a new Part with the notes
      partRef.current = new Tone.Part((time, note) => {
        synthRef.current?.triggerAttackRelease(
          note.note,
          note.duration,
          time
        );
      }, notes.map(n => [n.time, n]));

      // Set up callback when part finishes
      partRef.current.loop = false;

      setIsPlaying(true);
      setIsLoading(false);

      // Start the part
      Tone.Transport.start();
      partRef.current.start(0);

      // Calculate total duration
      const lastNote = notes[notes.length - 1];
      const totalDuration = lastNote.time + lastNote.duration + 0.5;

      // Stop after the lick finishes
      setTimeout(() => {
        Tone.Transport.stop();
        setIsPlaying(false);
      }, totalDuration * 1000);

    } catch (error) {
      console.error('Error playing lick:', error);
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, [tab, isPlaying]);

  const stop = useCallback(() => {
    if (partRef.current) {
      partRef.current.stop();
    }
    Tone.Transport.stop();
    setIsPlaying(false);
  }, []);

  return {
    play,
    stop,
    isPlaying,
    isLoading
  };
}
