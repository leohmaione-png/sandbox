// Diagram templates - Relative patterns (offsets from starting fret)
export interface DiagramPattern {
  e: number[];
  B: number[];
  G: number[];
  D: number[];
  A: number[];
  E: number[];
}

export interface DiagramTemplate {
  title: string;
  info: string;
  pattern: DiagramPattern | null;
}

export const diagramTemplates: Record<string, DiagramTemplate> = {
  '1': {
    title: 'Posição 1 - Padrão Box',
    info: 'Posição mais usada no blues. Memorize este padrão primeiro!',
    pattern: {
      e: [0, 3, 4],
      B: [0, 3, 4],
      G: [0, 2, 4],
      D: [0, 2, 4],
      A: [0, 2, 4],
      E: [0, 3, 4]
    }
  },
  '2': {
    title: 'Posição 2 - Extensão',
    info: 'Extensão natural da Posição 1. Ótima para frases ascendentes.',
    pattern: {
      e: [0, 2, 4],
      B: [0, 2, 4],
      G: [0, 3, 4],
      D: [0, 3, 4],
      A: [0, 3, 4],
      E: [0, 2, 4]
    }
  },
  '3': {
    title: 'Posição 3 - Oitava',
    info: 'Repete o padrão da Posição 1 em região mais aguda.',
    pattern: {
      e: [0, 3, 4],
      B: [0, 2, 4],
      G: [0, 2, 4],
      D: [0, 2, 4],
      A: [0, 3, 4],
      E: [0, 3, 4]
    }
  },
  '4': {
    title: 'Posição 4 - Cordas Soltas',
    info: 'Região grave. Ótima para riffs pesados e som encorpado.',
    pattern: {
      e: [0, 3, 5],
      B: [0, 1, 3, 5],
      G: [0, 2, 5],
      D: [0, 2, 5],
      A: [0, 2, 5],
      E: [0, 3, 5]
    }
  },
  '5': {
    title: 'Posição 5 - Conexão',
    info: 'Posição de transição. Use para conectar diferentes regiões do braço.',
    pattern: {
      e: [0, 1, 3, 4],
      B: [0, 2, 3, 4],
      G: [1, 2, 3, 4],
      D: [1, 2, 3, 4],
      A: [1, 2, 3, 4],
      E: [0, 1, 3, 4]
    }
  },
  'full': {
    title: 'Braço Completo',
    info: 'Visão completa da escala. Use para entender conexões entre posições.',
    pattern: null
  }
};
