/**
 * Transposes a guitar tablature by a given offset (number of frets)
 * Handles various tab notations: bends, hammer-ons, pull-offs, etc.
 */
export function transposeLick(tabContent: string, offset: number): string {
  if (offset === 0) return tabContent;

  let transposed = tabContent;

  // Handle bends with target: 5b(7) becomes (5+offset)b(7+offset)
  transposed = transposed.replace(/(\d+)b\((\d+)\)/g, (match, fret, target) => {
    const newFret = parseInt(fret) + offset;
    const newTarget = parseInt(target) + offset;
    return newFret >= 0 ? `${newFret}b(${newTarget})` : match;
  });

  // Handle hammer-on/pull-off: 5h8p5 becomes (5+offset)h(8+offset)p(5+offset)
  transposed = transposed.replace(/(\d+)([hp])(\d+)/g, (match, fret1, technique, fret2) => {
    const newFret1 = parseInt(fret1) + offset;
    const newFret2 = parseInt(fret2) + offset;
    if (newFret1 < 0 || newFret2 < 0) return match;
    return `${newFret1}${technique}${newFret2}`;
  });

  // Handle regular fret numbers (not already handled)
  // Match numbers that are not inside parentheses and not already part of bend/hammer notation
  transposed = transposed.replace(/(?<![b(hp\d])(\d+)(?![)\dhp])/g, (match, num) => {
    const fret = parseInt(num);
    if (fret === 0 && offset < 0) return match;
    const newFret = fret + offset;
    return newFret >= 0 ? newFret.toString() : match;
  });

  return transposed;
}
