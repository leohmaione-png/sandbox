export type LickLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Lick {
  id: string;
  title: string;
  level: LickLevel;
  tab: string;
  tempo: string;
  description: string;
  notes?: string;
}

export interface Guitarist {
  id: string;
  name: string;
  style: string;
  tags: string[];
  description: string;
  licks: Lick[];
}

export const guitarists: Guitarist[] = [
  {
    id: 'zakk',
    name: 'Zakk Wylde',
    style: 'Zakk Wylde Style',
    tags: ['Pinch Harmonics', 'Agressivo', 'Power'],
    description: 'Características: Pinch harmonics (harmônicos artificiais), bends agressivos, uso pesado da pentatônica, precisão técnica e força.',
    licks: [
      {
        id: 'zakk-1',
        title: 'Pinch Harmonic Attack',
        level: 'intermediate',
        tab: `e|--------------------------------|
B|--------------------------------|
G|---5PH---7PH---5PH--------------|
D|-----------------------7---5----|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '90-120 BPM',
        description: 'Toque a nota normalmente, mas com o polegar da mão direita tocando levemente a corda logo após a palheta. Som agressivo característico do Zakk!',
        notes: 'PH = Pinch Harmonic (harmônico artificial)'
      },
      {
        id: 'zakk-2',
        title: 'Wide Vibrato Power Lick',
        level: 'advanced',
        tab: `e|--------------------------------|
B|--------------------------------|
G|---5---7b(9)~~~~----------------|
D|----------------7---5---7---5---|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '80-110 BPM',
        description: 'Bend grande (2 casas!) seguido de vibrato wide. Use força! Depois descida rápida.',
        notes: 'b(9) = bend de 1 tom inteiro, ~~~~ = vibrato largo e agressivo'
      },
      {
        id: 'zakk-3',
        title: 'Pentatonic Fury',
        level: 'advanced',
        tab: `e|--------------------------------|
B|---8-5-------8-5----------------|
G|-------7-5-------7-5-7-5--------|
D|-------------------------7-5-7-5|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '120-160 BPM',
        description: 'Descida agressiva pela pentatônica. Palhetada alternada perfeita é essencial. Ataque forte!',
        notes: 'Palhetada alternada rápida e precisa!'
      },
      {
        id: 'zakk-4',
        title: 'Double Stop Power',
        level: 'intermediate',
        tab: `e|---5PH-----8PH-----5PH----------|
B|---5-------8-------5------------|
G|--------------------------------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '90-120 BPM',
        description: 'Toque as duas cordas juntas aplicando pinch harmonic. Som massivo!',
        notes: 'Double stops com pinch harmonics!'
      }
    ]
  },
  {
    id: 'page',
    name: 'Jimmy Page',
    style: 'Jimmy Page Style',
    tags: ['Blues Rock', 'Melódico', 'Expressivo'],
    description: 'Características: Bends melódicos e expressivos, uso criativo da pentatônica, frases vocais, dinâmica entre notas sustentadas e rápidas.',
    licks: [
      {
        id: 'page-1',
        title: 'Expressive Bend Phrase',
        level: 'intermediate',
        tab: `e|--------------------------------|
B|---5~~~-------------------------|
G|--------7b(8)~~~---7---5--------|
D|-------------------------7------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '70-100 BPM',
        description: 'Comece com vibrato na corda B, depois bend expressivo na corda G. Deixe as notas respirarem!',
        notes: '~~~ = vibrato expressivo'
      },
      {
        id: 'page-2',
        title: 'Melodic Climb',
        level: 'intermediate',
        tab: `e|--------------------------------|
B|---5---8---5--------------------|
G|-------------7b(8)r7---5--------|
D|-------------------------7---5--|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '80-110 BPM',
        description: 'Frase melódica ascendente com bend e release. Muito usado pelo Page!',
        notes: 'r = release do bend'
      },
      {
        id: 'page-3',
        title: 'Sustained Note Magic',
        level: 'beginner',
        tab: `e|--------------------------------|
B|---8~~~~~~~~~~~~----------------|
G|----------------7---5---7-------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '60-90 BPM',
        description: 'Nota longa com vibrato seguida de frase descendente. Controle de dinâmica!',
        notes: 'Vibrato controlado e expressivo'
      },
      {
        id: 'page-4',
        title: 'Rock Signature Lick',
        level: 'advanced',
        tab: `e|--------------------------------|
B|---8b(10)r8-5-------------------|
G|--------------7-5---------------|
D|------------------7-5---7-------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '100-130 BPM',
        description: 'Bend completo com release seguido de descida melódica. Classic Page!',
        notes: 'b(10) = bend de 1 tom'
      }
    ]
  },
  {
    id: 'clapton',
    name: 'Eric Clapton',
    style: 'Eric Clapton Style',
    tags: ['Blues Puro', 'Feeling', 'Suave'],
    description: 'Características: Feeling blues autêntico, bends sutis e precisos, vibrato controlado, notas "cantadas", economia de movimento.',
    licks: [
      {
        id: 'clapton-1',
        title: 'Classic Blues Bend',
        level: 'beginner',
        tab: `e|--------------------------------|
B|--------------------------------|
G|---7b(8)~~~---7---5-------------|
D|--------------------7---5-------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '60-90 BPM',
        description: 'Bend de meio tom com vibrato controlado. A essência do blues!',
        notes: 'b(8) = bend de meio tom'
      },
      {
        id: 'clapton-2',
        title: 'Smooth Descent',
        level: 'intermediate',
        tab: `e|--------------------------------|
B|---8~~~---5---------------------|
G|------------7~~~---5------------|
D|---------------------7~~~---5---|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '70-100 BPM',
        description: 'Descida suave pela pentatônica com vibrato em cada nota. Deixe as notas cantarem!',
        notes: 'Vibrato sutil em cada nota sustentada'
      },
      {
        id: 'clapton-3',
        title: 'Triple Stop Blues',
        level: 'intermediate',
        tab: `e|---5----------------------------|
B|---5----------------------------|
G|---5---7b(8)~~~---7---5---------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '80-110 BPM',
        description: 'Triple stop (três cordas) seguido de bend. Som cheio característico!',
        notes: 'Toque as três cordas juntas'
      },
      {
        id: 'clapton-4',
        title: 'Blues Turnaround',
        level: 'advanced',
        tab: `e|--------------------------------|
B|---8-5--------------------------|
G|-------7-5---7b(8)r7-5----------|
D|------------------------7---5---|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '90-120 BPM',
        description: 'Turnaround clássico de blues com bend e release. Ótimo para finais de progressão!',
        notes: 'r = release suave do bend'
      }
    ]
  },
  {
    id: 'hendrix',
    name: 'Jimi Hendrix',
    style: 'Jimi Hendrix Style',
    tags: ['Psicodélico', 'Inovador', 'Rítmico'],
    description: 'Características: Mistura de ritmo e lead, uso criativo de efeitos, hammer-ons e pull-offs frequentes, cordas soltas, frases únicas.',
    licks: [
      {
        id: 'hendrix-1',
        title: 'Hammer-On Groove',
        level: 'intermediate',
        tab: `e|--------------------------------|
B|---5h8p5------------------------|
G|---------7-5--------------------|
D|-------------7-5---7------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '90-120 BPM',
        description: 'Hammer-on e pull-off rápidos seguidos de descida. Técnica característica!',
        notes: 'h = hammer-on, p = pull-off'
      },
      {
        id: 'hendrix-2',
        title: 'Open String Magic',
        level: 'beginner',
        tab: `e|---0---3---5--------------------|
B|---0---3---5--------------------|
G|--------------------------------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '80-110 BPM',
        description: 'Uso de cordas soltas para sonoridade única. Muito Hendrix!',
        notes: '0 = corda solta'
      },
      {
        id: 'hendrix-3',
        title: 'Psychedelic Run',
        level: 'advanced',
        tab: `e|--------------------------------|
B|---8-5-------8-5----------------|
G|-------7-5h7----7-5h7-5---------|
D|------------------------7-5-----|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '100-140 BPM',
        description: 'Sequência rápida com hammer-ons. Som psicodélico característico!',
        notes: 'Palhetada alternada + hammer-ons'
      },
      {
        id: 'hendrix-4',
        title: 'Rhythmic Lead Fusion',
        level: 'advanced',
        tab: `e|--------------------------------|
B|---5---8---5--------------------|
G|---5---7---5---7b(8)r7-5--------|
D|-------------------------7------|
A|--------------------------------|
E|--------------------------------|`,
        tempo: '110-140 BPM',
        description: 'Mistura de acordes e lead. Toque rítmico com melodia!',
        notes: 'Combine ritmo e melodia'
      }
    ]
  }
];
