import { DiagramPattern } from '../data/diagram-templates';

export function generateDiagramPattern(pattern: DiagramPattern, startingFret: number): string {
  const strings = ['e', 'B', 'G', 'D', 'A', 'E'] as const;
  const lines: string[] = [];

  // Calculate the range of frets we need to show
  const allFrets: number[] = [];
  strings.forEach(str => {
    pattern[str].forEach(offset => {
      allFrets.push(startingFret + offset);
    });
  });
  const minFret = Math.min(...allFrets);
  const maxFret = Math.max(...allFrets);

  // Build each string line
  strings.forEach(str => {
    const stringPattern = pattern[str];
    let line = `${str}|`;

    // Build the visual representation
    for (let fret = minFret; fret <= maxFret; fret++) {
      const offset = fret - startingFret;
      if (stringPattern.includes(offset)) {
        // This fret has a note
        const fretStr = fret.toString();
        if (fretStr.length === 1) {
          line += `---${fretStr}---`;
        } else {
          line += `--${fretStr}---`;
        }
      } else {
        // Empty fret (no note here)
        line += `-------`;
      }
    }
    line += '|';
    lines.push(line);
  });

  return lines.join('\n');
}

export function generateFullFretboard(offset: number): string {
  // Define the Am pattern (offset 0)
  const basePattern = {
    e: [0, 3, 5, 8, 10, 12, 15],
    B: [0, 1, 5, 8, 10, 13, 15],
    G: [0, 1, 2, 5, 7, 9, 12, 14],
    D: [0, 2, 5, 7, 9, 10, 14],
    A: [0, 2, 5, 7, 10, 12, 14, 15],
    E: [0, 3, 5, 8, 10, 12, 15]
  };

  const strings = ['e', 'B', 'G', 'D', 'A', 'E'] as const;
  const lines: string[] = [];

  strings.forEach(str => {
    let line = `${str}|`;

    // Show frets 0-15
    for (let fret = 0; fret <= 15; fret++) {
      const transposedFret = (fret + offset) % 12;
      const originalFrets = basePattern[str].map(f => f % 12);

      if (originalFrets.includes(transposedFret) || basePattern[str].includes(fret)) {
        const fretStr = fret.toString();
        if (fretStr.length === 1) {
          line += `-${fretStr}-`;
        } else {
          line += `${fretStr}-`;
        }
      } else {
        line += `---`;
      }
    }
    line += '|';
    lines.push(line);
  });

  return lines.join('\n');
}
