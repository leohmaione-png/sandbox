# Guitar Notebook

Your interactive guitar learning companion - master scales, licks, and techniques from legendary guitarists.

## 🎸 Recursos

- **Escala Pentatônica Interativa**: Visualize diagramas em diferentes tons e posições
- **Licks de Guitarristas Lendários**: Aprenda frases no estilo de:
  - Zakk Wylde (Pinch Harmonics, Agressivo)
  - Jimmy Page (Blues Rock, Melódico)
  - Eric Clapton (Blues Puro, Feeling)
  - Jimi Hendrix (Psicodélico, Inovador)
- **Transposição Automática**: Todos os tabs se adaptam ao tom selecionado
- **Níveis de Dificuldade**: Licks organizados por nível (Iniciante, Intermediário, Avançado)
- **Interface Moderna**: Construído com Next.js, TypeScript e shadcn/ui

## 🚀 Tecnologias

- **Next.js 15** - Framework React para produção
- **TypeScript** - Type safety e melhor DX
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes reutilizáveis e acessíveis
- **Lucide Icons** - Ícones modernos

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Deploy

Este projeto está configurado para deploy na Vercel:

1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o repositório `sandbox`
4. Deploy automático!

## 🎯 Estrutura do Projeto

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/
│   ├── layout/            # Componentes de layout (Navigation, Hero)
│   ├── pentatonic/        # Componentes da seção pentatônica
│   ├── features/          # Outras seções (Greek Modes, Exercises, etc)
│   └── ui/                # Componentes shadcn/ui
├── lib/
│   ├── data/              # Dados (escalas, licks, diagramas)
│   └── utils/             # Utilitários (transposição, geração de diagramas)
└── old-site/              # Backup do site HTML original
```

## 🎵 Como Usar

1. **Selecione o Tom**: Escolha entre Am, Em, Dm, Gm, Cm, A, E, D, G, C
2. **Escolha a Posição**: 5 posições da pentatônica + visualização do braço completo
3. **Veja os Diagramas**: Atualizados automaticamente com números de traste corretos
4. **Explore os Licks**: Alterne entre guitarristas e pratique os licks
5. **Observe a Transposição**: Todos os tabs mudam conforme o tom selecionado

## 📝 Próximos Passos

- [ ] Implementar seção de Modos Gregos
- [ ] Adicionar seção de Exercícios Técnicos
- [ ] Completar seção de Progressões de Blues
- [ ] Adicionar player de áudio para licks
- [ ] Modo escuro/claro toggle
- [ ] Sistema de favoritos para licks

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

---

Desenvolvido com ❤️ e 🎸
