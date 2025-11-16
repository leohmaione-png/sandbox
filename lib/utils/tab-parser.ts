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

interface Note {
  note: string;
  time: number;
  duration: number;
}

/**
 * Converts a fret position on a string to a musical note
 */
function fretToNote(stringName: string, fret: number): string {
  const stringIndex = STRING_MAP[stringName];
  if (stringIndex === undefined) return '';

  const openNote = STANDARD_TUNING[stringIndex];
  const [noteName, octave] = [openNote[0], parseInt(openNote[1])];

  // Chromatic scale starting from the open string
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const noteIndex = notes.indexOf(noteName);

  // Calculate the resulting note
  let resultIndex = noteIndex + fret;
  let resultOctave = octave;

  while (resultIndex >= 12) {
    resultIndex -= 12;
    resultOctave++;
  }

  return notes[resultIndex] + resultOctave;
}

/**
 * Parses a tablature string and extracts notes with timing
 */
export function parseTab(tab: string): Note[] {
  const lines = tab.trim().split('\n');
  const notes: Note[] = [];

  // Filter out annotation lines and empty lines
  const tabLines = lines.filter(line => {
    const trimmed = line.trim();
    return trimmed.match(/^[eEADGBdgb]\|/) !== null;
  });

  if (tabLines.length === 0) return notes;

  // Process each string line
  tabLines.forEach(line => {
    const stringMatch = line.match(/^([eEADGBdgb])\|(.*)\|/);
    if (!stringMatch) return;

    const stringName = stringMatch[1];
    const content = stringMatch[2];

    // Find all numbers (frets) in the line
    let position = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content[i];

      // Check if it's a number
      if (char.match(/\d/)) {
        // Check for two-digit numbers
        let fret = parseInt(char);
        if (i + 1 < content.length && content[i + 1].match(/\d/)) {
          fret = parseInt(char + content[i + 1]);
          i++; // Skip next digit
        }

        // Calculate time based on position in the line
        const time = position * 0.15; // 150ms per position

        const note = fretToNote(stringName, fret);
        if (note) {
          notes.push({
            note,
            time,
            duration: 0.3 // Default duration
          });
        }
      }

      position++;
    }
  });

  // Sort notes by time
  notes.sort((a, b) => a.time - b.time);

  return notes;
}
