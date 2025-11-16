// Scale data and configurations
export interface ScaleData {
  notes: string[];
  type: 'Menor' | 'Maior';
}

export interface DiagramPosition {
  pos1: number;
  pos2: number;
  pos3: number;
  pos4: number;
  pos5: number;
}

export const scaleData: Record<string, ScaleData> = {
  'Am': { notes: ['A', 'C', 'D', 'E', 'G'], type: 'Menor' },
  'Em': { notes: ['E', 'G', 'A', 'B', 'D'], type: 'Menor' },
  'Dm': { notes: ['D', 'F', 'G', 'A', 'C'], type: 'Menor' },
  'Gm': { notes: ['G', 'B♭', 'C', 'D', 'F'], type: 'Menor' },
  'Cm': { notes: ['C', 'E♭', 'F', 'G', 'B♭'], type: 'Menor' },
  'A': { notes: ['A', 'C#', 'D', 'E', 'G'], type: 'Maior' },
  'E': { notes: ['E', 'G#', 'A', 'B', 'D'], type: 'Maior' },
  'D': { notes: ['D', 'F#', 'G', 'A', 'C'], type: 'Maior' },
  'G': { notes: ['G', 'B', 'C', 'D', 'F'], type: 'Maior' },
  'C': { notes: ['C', 'E', 'F', 'G', 'B♭'], type: 'Maior' }
};

export const diagramPositions: Record<string, DiagramPosition> = {
  'Am': { pos1: 5, pos2: 8, pos3: 12, pos4: 0, pos5: 2 },
  'Em': { pos1: 12, pos2: 3, pos3: 7, pos4: 7, pos5: 9 },
  'Dm': { pos1: 10, pos2: 13, pos3: 5, pos4: 5, pos5: 7 },
  'Gm': { pos1: 3, pos2: 6, pos3: 10, pos4: 10, pos5: 0 },
  'Cm': { pos1: 8, pos2: 11, pos3: 3, pos4: 3, pos5: 5 },
  'A': { pos1: 5, pos2: 8, pos3: 12, pos4: 0, pos5: 2 },
  'E': { pos1: 12, pos2: 3, pos3: 7, pos4: 7, pos5: 9 },
  'D': { pos1: 10, pos2: 13, pos3: 5, pos4: 5, pos5: 7 },
  'G': { pos1: 3, pos2: 6, pos3: 10, pos4: 10, pos5: 0 },
  'C': { pos1: 8, pos2: 11, pos3: 3, pos4: 3, pos5: 5 }
};

export const transposeOffsets: Record<string, number> = {
  'Am': 0,
  'Em': 7,
  'Dm': 5,
  'Gm': -2,
  'Cm': 3,
  'A': 0,
  'E': 7,
  'D': 5,
  'G': -2,
  'C': 3
};

// Using only minor keys since pentatonic positions are the same for relative major/minor
export const keys = ['Am', 'Em', 'Dm', 'Gm', 'Cm'] as const;
export type Key = typeof keys[number];

export const positions = [
  { value: '1', label: 'Posição 1 (Padrão Box)' },
  { value: '2', label: 'Posição 2 (Extensão)' },
  { value: '3', label: 'Posição 3 (Oitava)' },
  { value: '4', label: 'Posição 4 (Cordas Soltas)' },
  { value: '5', label: 'Posição 5 (Conexão)' },
  { value: 'full', label: 'Braço Completo)' }
] as const;
