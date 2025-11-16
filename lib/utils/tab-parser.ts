/**
 * Parses guitar tablature and converts to playable notes
 */

// Standard guitar tuning (from low E to high e)
const STANDARD_TUNING = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

// Map string names to array indices
const STRING_MAP: Record<string, number> = {
  'E': 0, // Low E
  'A': 1,
  'D': 2,
  'G': 3,
  'B': 4,
  'e': 5  // High e
};

// Chromatic notes
const CHROMATIC = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

interface Note {
  note: string;
  time: number;
  duration: number;
  velocity: number;
}

/**
 * Converts a fret position on a string to a musical note
 */
function fretToNote(stringName: string, fret: number): string {
  const stringIndex = STRING_MAP[stringName];
  if (stringIndex === undefined) return '';

  const openNote = STANDARD_TUNING[stringIndex];
  const noteName = openNote.slice(0, -1);
  const octave = parseInt(openNote.slice(-1));

  // Find the open note index in chromatic scale
  const noteIndex = CHROMATIC.indexOf(noteName);

  // Calculate the resulting note after adding frets
  let resultIndex = noteIndex + fret;
  let resultOctave = octave;

  while (resultIndex >= 12) {
    resultIndex -= 12;
    resultOctave++;
  }

  return CHROMATIC[resultIndex] + resultOctave;
}

/**
 * Parses a tablature string and extracts notes with timing
 */
export function parseTab(tab: string, bpm: number = 120): Note[] {
  const lines = tab.trim().split('\n');
  const notes: Note[] = [];

  // Filter to get only the tab lines (strings)
  const tabLines = lines.filter(line => {
    const trimmed = line.trim();
    return /^[eEADGBdgb]\|/.test(trimmed);
  });

  if (tabLines.length === 0) return notes;

  // Calculate note duration based on BPM (quarter note in seconds)
  const beatDuration = 60 / bpm;
  const noteDuration = beatDuration / 2; // Eighth note duration

  // Build a map of column -> notes played at that column
  const columnNotes = new Map<number, { string: string; fret: number }[]>();

  tabLines.forEach(line => {
    const match = line.match(/^([eEADGBdgb])\|(.*)\|/);
    if (!match) return;

    const stringName = match[1];
    const content = match[2];

    let i = 0;
    let column = 0;

    while (i < content.length) {
      const char = content[i];

      if (char.match(/\d/)) {
        // Found a number - check for two digits
        let fretStr = char;
        if (i + 1 < content.length && content[i + 1].match(/\d/)) {
          fretStr += content[i + 1];
          i++;
        }

        const fret = parseInt(fretStr);

        // Skip special notation characters after fret number (PH, b, h, p, r, ~, etc.)
        let skipChars = 0;
        while (i + 1 + skipChars < content.length) {
          const nextChar = content[i + 1 + skipChars];
          if (nextChar.match(/[PHbhpr~()\d]/)) {
            skipChars++;
          } else {
            break;
          }
        }
        i += skipChars;

        if (!columnNotes.has(column)) {
          columnNotes.set(column, []);
        }
        columnNotes.get(column)!.push({ string: stringName, fret });
      }

      i++;
      column++;
    }
  });

  // Convert column notes to timed notes
  const sortedColumns = Array.from(columnNotes.keys()).sort((a, b) => a - b);

  sortedColumns.forEach((column, index) => {
    const notesAtColumn = columnNotes.get(column)!;
    const time = index * noteDuration;

    notesAtColumn.forEach(({ string: stringName, fret }) => {
      const note = fretToNote(stringName, fret);
      if (note) {
        notes.push({
          note,
          time,
          duration: noteDuration * 0.9, // Slightly shorter for separation
          velocity: 0.8
        });
      }
    });
  });

  return notes;
}

/**
 * Extract BPM from tempo string like "90-120 BPM"
 */
export function parseBPM(tempoString: string): number {
  const match = tempoString.match(/(\d+)(?:-\d+)?\s*BPM/i);
  if (match) {
    return parseInt(match[1]);
  }
  return 120; // Default BPM
}
