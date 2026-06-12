# app-cfw-kids

App web para ensinar crianças a Confissão de Fé de Westminster (CFW) e os catecismos de forma dinâmica e divertida.

## Contexto do produto

Mecânica central: jogo de cartas estilo Pokemon/Yu-Gi-Oh. O jogador recebe situações da vida real e precisa usar "cartas" da Confissão de Fé de Westminster ou dos catecismos para responder corretamente.

- Público: crianças segmentadas por faixa etária (incluindo modo pai para 0-5)
- Base bíblica: versão ARA (Almeida Revista e Atualizada)
- Conteúdo: CFW (33 caps) + Catecismo Breve (107 Q&A) + Catecismo Maior (196 Q&A)
- Visual: figuras, exemplos, histórias contextualizados por idade
- Plataforma: web app (browser-first, mobile-friendly)

## Faixas etárias

| Faixa | Label | Mecânica |
|-------|-------|---------|
| 0-5 anos | Sementes | Modo pai: pai lê em voz alta, filho interage por imagens. Cartas têm dica para o pai e pergunta de conversa. |
| 6-8 anos | Pequenos Guerreiros | Leitura emergente: texto curto, imagens grandes, mecânica simples |
| 9-11 anos | Aprendizes | Texto médio, mecânica padrão |
| 12-14 anos | Exploradores | Texto completo da CFW/catecismos, nuance doutrinária |

## Princípios de design (Apple HIG)

Fonte: `Alpinist/2-materia-prima/Livros/Apple Human Interface Guidelines - Apple/`

### Fundamentais
- **Interface invisível**: a UI se faz invisível, deferindo ao conteúdo doutrinário.
- **Progressive disclosure**: não mostrar todo o conteúdo de uma vez; revelar conforme a criança progride.
- **Hierarquia visual clara**: informação mais importante no topo e no lado leading. Usar tamanho, peso e cor para hierarquia.
- **Conteúdo preenche a tela**: jogo em tela cheia, sem elementos competindo com as cartas.

### Tipografia (por faixa)
- Mínimo 17pt para texto de jogo no iOS (11pt absoluto mínimo).
- 0-5 anos: texto enorme (pais lendo), foco total em imagens.
- 6-8 anos: fontes grandes, máximo 3 palavras por linha de destaque.
- 9-11 anos: hierarquia clara título / conteúdo / referência.
- 12-14 anos: texto completo, hierarquia com labels.
- Evitar pesos Ultralight/Thin/Light. Usar Regular, Medium, Semibold ou Bold.
- Nunca misturar mais de 2 famílias de fonte.

### Movimento
- Animações com propósito: flip de carta, feedback de acerto/erro, transição de tela.
- Breve e preciso: animação de feedback curta comunica melhor que animação proeminente.
- Sempre permitir cancelar/pular animação.
- Não adicionar movimento a interações frequentes (ex: selecionar uma opção no menu).
- Complementar com áudio/visual alternativo — não usar movimento como único feedback.

### Jogos (HIG: Designing for Games)
- Entrar direto no jogo: após selecionar faixa etária, a criança começa a jogar imediatamente.
- Tutorial integrado ao jogo, não tela separada de instruções.
- Adiar pedidos de permissão e avaliação — esperar a criança jogar primeiro.
- Tap targets mínimos: 44x44pt no iOS.
- Layout dinâmico com constraints relativas, nunca fixo.
- Suportar retrato e paisagem onde possível.

### Acessibilidade
- Nunca depender apenas de cor para comunicar acerto/erro. Usar ícone + cor + animação.
- Contraste adequado: texto sobre fundos coloridos das cartas precisa passar WCAG AA.
- Tamanho de fonte escalável por faixa (e respeitar Dynamic Type quando possível).

### Modo Pai (0-5)
- Interface diferente: pai segura o dispositivo, não a criança.
- Dica para o pai aparece em destaque: como usar aquela carta na conversa.
- Pergunta de conversa sugerida: o pai faz ao filho, cria vínculo.
- Texto da carta simplificado ao máximo (uma verdade, uma imagem).

## Regras de conteúdo

- Todo texto bíblico usa a versão ARA
- `fullText`: texto original fiel ao documento (CFW/catecismo)
- `summaries`: versão simplificada por faixa etária, gerada e salva no data file
- Nenhuma distorção doutrinária: summary simplifica linguagem, nunca altera doutrina
- Situações baseadas em cenários reais do cotidiano infantil/familiar

## Stack

- Next.js 16 + Tailwind v4 + TypeScript
- shadcn/ui (16 componentes base)
- next-themes (dark mode)
- Supabase (auth + banco de dados — a implementar)
- Phosphor Icons (@phosphor-icons/react — a instalar)
- Framer Motion (animações — a instalar)
- Vitest + Testing Library (testes unitários)

## Estrutura de pastas

```
app/
  (game)/          -- mecânica do jogo por faixa etária
  (learn)/         -- modo estudo/revisão de cartas
  (parent)/        -- modo pai (faixa 0-5)
  (admin)/         -- gestão de cartas e conteúdo
components/
  cards/           -- DoctrineCard, SituationCard, ParentCard
  game/            -- motor do jogo (deck, hand, play)
  shared/          -- ThemeProvider, layouts compartilhados
  ui/              -- shadcn/ui
lib/
  content/         -- types.ts, catecismo-breve.ts, cfw-chapters.ts
  game/            -- lógica de regras, pontuação, progressão
  db/              -- queries Supabase
public/
  cards/           -- arte das cartas por tipo e faixa etária
src/
  test/            -- setup.ts (vitest)
```

## Comandos

```bash
npm run dev            # desenvolvimento local
npm run build          # build de produção (deve passar antes de qualquer push)
npm run lint           # lint
npm run typecheck      # TypeScript sem emit
npm run test           # testes unitários
npm run test:coverage  # testes com cobertura
```

## Git

- Remote: `git@github.com:joefaria/app-cfw-kids.git`
- Workflow: GitHub Flow. Branch por feature, PR para main.
- CI: `.github/workflows/review.yml` roda em todo PR (typecheck → lint → audit → testes → build)
- Nomenclatura: `feat/`, `fix/`, `refactor/`, `chore/`, `docs/`
- Commit: Conventional Commits. Build local deve passar antes de push.
- Deploy: Vercel conectado ao repo (a configurar)

## Projeto independente do monorepo astra

Git init próprio em `astra/projetos/app-cfw-kids/`. Não faz parte do git do monorepo.
