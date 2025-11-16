export type LickLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Lick {
  id: string;
  title: string;
  level: LickLevel;
  tab: string;
  tempo: string;
  description: string;
  notes?: string;
  hasBlueNotes: boolean;
}

export interface LickCategory {
  id: string;
  level: LickLevel;
  name: string;
  description: string;
  licks: Lick[];
}

export const lickCategories: LickCategory[] = [
  {
    id: 'beginner',
    level: 'beginner',
    name: 'Iniciante',
    description: 'Licks fundamentais para começar. Foco em movimentos simples e memorização das posições.',
    licks: [
      {
        id: 'beginner-1',
        title: 'Pentatônica Pura - Subida Simples',
        level: 'beginner',
        hasBlueNotes: false,
        tab: `e|--------------------------------|
B|--------------------------------|
G|---5---7------------------------|
D|----------5---7-----------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '60-90 BPM',
        description: 'Movimento básico ascendente usando apenas notas da pentatônica pura. Sem blue notes. Perfeito para iniciantes.',
        notes: 'Use palhetada alternada: para baixo, para cima, para baixo, para cima'
      },
      {
        id: 'beginner-2',
        title: 'Descida Clássica',
        level: 'beginner',
        hasBlueNotes: false,
        tab: `e|--------------------------------|
B|---8---5------------------------|
G|-----------7---5----------------|
D|-------------------7---5--------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '60-90 BPM',
        description: 'Descida melódica pela pentatônica. Um dos padrões mais usados no rock e blues.',
        notes: 'Toque com feeling, não tenha pressa'
      },
      {
        id: 'beginner-3',
        title: 'Introdução à Blue Note',
        level: 'beginner',
        hasBlueNotes: true,
        tab: `e|--------------------------------|
B|--------------------------------|
G|---5---6---7---5----------------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '70-100 BPM',
        description: 'Primeiro contato com a blue note (b5). Note o som "sujo" e característico do blues na casa 6.',
        notes: '6 na corda G = blue note (b5). Essa nota dá o sabor do blues!'
      },
      {
        id: 'beginner-4',
        title: 'Bend Básico',
        level: 'beginner',
        hasBlueNotes: false,
        tab: `e|--------------------------------|
B|--------------------------------|
G|---7b(8)---7---5----------------|
D|-------------------7------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '60-90 BPM',
        description: 'Primeiro bend (1/2 tom). Empurre a corda para cima até alcançar o som da casa 8.',
        notes: 'b(8) = bend de meio tom. Use o dedo anular com apoio dos outros dedos'
      }
    ]
  },
  {
    id: 'intermediate',
    level: 'intermediate',
    name: 'Intermediário',
    description: 'Licks que combinam técnicas. Introdução a bends maiores, slides e blue notes.',
    licks: [
      {
        id: 'intermediate-1',
        title: 'Lick de Blues Clássico',
        level: 'intermediate',
        hasBlueNotes: true,
        tab: `e|--------------------------------|
B|---8---5------------------------|
G|-----------6b(7)---5------------|
D|-----------------------7---5----|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '70-100 BPM',
        description: 'Lick clássico de blues usando a blue note com bend. Muito usado por B.B. King e Eric Clapton.',
        notes: 'Casa 6 na corda G = blue note. Faça o bend até meio tom (casa 7)'
      },
      {
        id: 'intermediate-2',
        title: 'Double Stop Blues',
        level: 'intermediate',
        hasBlueNotes: false,
        tab: `e|---5----------------------------|
B|---5---8---5--------------------|
G|---5---7---5--------------------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '80-110 BPM',
        description: 'Toque duas cordas simultaneamente. Som cheio característico do blues rock.',
        notes: 'Toque as cordas B e G juntas. Use o dedo indicador em barra'
      },
      {
        id: 'intermediate-3',
        title: 'Rock Lick com Blue Note',
        level: 'intermediate',
        hasBlueNotes: true,
        tab: `e|--------------------------------|
B|--------------------------------|
G|---5---6---5--------------------|
D|-------------7---5---7----------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '90-120 BPM',
        description: 'Combinação de blue note com descida rápida. Muito usado no rock clássico.',
        notes: 'A blue note (casa 6) adiciona tensão que resolve na descida'
      },
      {
        id: 'intermediate-4',
        title: 'Bend e Release',
        level: 'intermediate',
        hasBlueNotes: false,
        tab: `e|--------------------------------|
B|---8b(10)r8---5-----------------|
G|----------------7---5-----------|
D|----------------------7---5-----|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '80-110 BPM',
        description: 'Bend de 1 tom completo com release. Técnica essencial para expressividade.',
        notes: 'b(10) = bend de 1 tom, r = release (solte o bend voltando ao tom original)'
      },
      {
        id: 'intermediate-5',
        title: 'Turnaround com Blue Note',
        level: 'intermediate',
        hasBlueNotes: true,
        tab: `e|--------------------------------|
B|--------------------------------|
G|---5---6b(7)r6---5--------------|
D|-------------------7---5--------|
A|-------------------------7------|
E|--------------------------------|`,
        tempo: '70-100 BPM',
        description: 'Turnaround clássico usando bend na blue note. Perfeito para finais de progressão.',
        notes: 'Blue note com bend e release cria tensão e resolução'
      }
    ]
  },
  {
    id: 'advanced',
    level: 'advanced',
    name: 'Avançado',
    description: 'Licks complexos com técnicas avançadas. Combinações rápidas, bends múltiplos e frases longas.',
    licks: [
      {
        id: 'advanced-1',
        title: 'Speed Run Pentatônico',
        level: 'advanced',
        hasBlueNotes: false,
        tab: `e|--------------------------------|
B|---8-5-------8-5----------------|
G|-------7-5-------7-5-7-5--------|
D|-------------------------7-5----|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '120-160 BPM',
        description: 'Descida rápida pela pentatônica. Requer palhetada alternada precisa e velocidade.',
        notes: 'Palhetada alternada estrita! Comece devagar e aumente gradualmente'
      },
      {
        id: 'advanced-2',
        title: 'Blue Note Explosion',
        level: 'advanced',
        hasBlueNotes: true,
        tab: `e|--------------------------------|
B|---8-5--------------------------|
G|-------6b(7)r6-5---6---5--------|
D|---------------------7---5------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '90-130 BPM',
        description: 'Múltiplos bends na blue note com resolução. Som autêntico de blues.',
        notes: 'Controle preciso dos bends é essencial. Cada bend deve alcançar exatamente meio tom'
      },
      {
        id: 'advanced-3',
        title: 'Lick de Entrada Clássico',
        level: 'advanced',
        hasBlueNotes: true,
        tab: `e|--------------------------------|
B|--------------------------------|
G|---5-6-5------------------------|
D|---------7-5-7-5-7-6-5----------|
A|-----------------------7-5------|
E|---------------------------7-5--|`,
        tempo: '100-140 BPM',
        description: 'Lick longo que viaja por várias cordas. Inclui blue notes (casa 6 na corda G e D).',
        notes: 'Blue notes nas casas 6 das cordas G e D. Muito usado por guitarristas de blues rock'
      },
      {
        id: 'advanced-4',
        title: 'Wide Bend Expressivo',
        level: 'advanced',
        hasBlueNotes: false,
        tab: `e|--------------------------------|
B|--------------------------------|
G|---7b(9)~~~~---7---5------------|
D|---------------------7b(9)~~~---|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '70-110 BPM',
        description: 'Bends de 1 tom com vibrato largo. Extremamente expressivo.',
        notes: 'b(9) = bend de 1 tom completo. ~~~~ = vibrato largo e controlado'
      },
      {
        id: 'advanced-5',
        title: 'Combo Blues/Rock Definitivo',
        level: 'advanced',
        hasBlueNotes: true,
        tab: `e|-------------------8------------|
B|---8b(10)r8-5---8---------------|
G|---5-6b(7)r6-5------------------|
D|---------------7---5------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '90-130 BPM',
        description: 'Combinação avançada: bends, blue notes, double stops. O melhor do blues e rock em um lick.',
        notes: 'Múltiplas técnicas: bend de 1 tom na corda B, blue note bend na G, finalizando com double stop'
      }
    ]
  }
];
