"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import * as Tone from 'tone';
import { parseTab, parseBPM } from '@/lib/utils/tab-parser';

export function useLickPlayer(tab: string, tempo: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const partRef = useRef<Tone.Part | null>(null);
  const reverbRef = useRef<Tone.Reverb | null>(null);

  // Initialize synth on mount with realistic guitar sound
  useEffect(() => {
    // Use PluckSynth for more realistic guitar-like plucked sound
    synthRef.current = new Tone.PolySynth(Tone.PluckSynth, {
      attackNoise: 1,
      dampening: 4000,
      resonance: 0.9
    }).toDestination();

    // Add some reverb for more natural sound
    reverbRef.current = new Tone.Reverb({
      decay: 1.5,
      wet: 0.2
    }).toDestination();

    synthRef.current.connect(reverbRef.current);

    // Set volume
    synthRef.current.volume.value = -6;

    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      if (partRef.current) {
        partRef.current.dispose();
      }
      if (reverbRef.current) {
        reverbRef.current.dispose();
      }
    };
  }, []);

  const play = useCallback(async () => {
    if (!synthRef.current || isPlaying) return;

    setIsLoading(true);

    try {
      // Start Tone.js context (required for audio)
      await Tone.start();

      // Extract BPM from tempo string
      const bpm = parseBPM(tempo);

      // Parse the tab to get notes with correct BPM
      const notes = parseTab(tab, bpm);

      if (notes.length === 0) {
        console.warn('No notes found in tab');
        setIsLoading(false);
        return;
      }

      console.log(`Playing ${notes.length} notes at ${bpm} BPM`);

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
          time,
          note.velocity
        );
      }, notes.map(n => [n.time, n]));

      // Set up callback when part finishes
      partRef.current.loop = false;

      setIsPlaying(true);
      setIsLoading(false);

      // Start the transport
      Tone.Transport.start();
      partRef.current.start(0);

      // Calculate total duration
      const lastNote = notes[notes.length - 1];
      const totalDuration = lastNote.time + lastNote.duration + 0.5;

      // Stop after the lick finishes
      setTimeout(() => {
        Tone.Transport.stop();
        Tone.Transport.position = 0; // Reset position
        setIsPlaying(false);
      }, totalDuration * 1000);

    } catch (error) {
      console.error('Error playing lick:', error);
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, [tab, tempo, isPlaying]);

  const stop = useCallback(() => {
    if (partRef.current) {
      partRef.current.stop();
    }
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    setIsPlaying(false);
  }, []);

  return {
    play,
    stop,
    isPlaying,
    isLoading
  };
}
