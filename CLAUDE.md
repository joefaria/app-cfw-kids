# app-cfw-kids

App web para ensinar crianças a Confissão de Fé de Westminster (CFW) e os catecismos de forma dinâmica e divertida.

## Contexto do produto

Mecânica central: jogo de cartas estilo Pokemon/Yu-Gi-Oh. O jogador recebe situações da vida real e precisa usar "cartas" da Confissão de Fé de Westminster ou dos catecismos para responder corretamente.

- Público: crianças segmentadas por faixa etária
- Base bíblica: versão ARA (Almeida Revista e Atualizada)
- Conteúdo: CFW + Catecismo Maior + Catecismo Breve
- Visual: figuras, exemplos, histórias contextualizado por idade
- Plataforma: web app (browser-first, mobile-friendly)

## Stack

- Next.js + Tailwind v4 + TypeScript
- Supabase (auth + banco de dados)
- Phosphor Icons (@phosphor-icons/react)
- Framer Motion (animações)

## Estrutura de pastas (planejada)

```
app/
  (game)/          -- mecânica do jogo
  (learn)/         -- modo estudo/revisão
  (admin)/         -- gestão de cartas e conteúdo
components/
  cards/           -- componentes de carta (CFW, catecismo, situação)
  game/            -- motor do jogo
  ui/              -- shadcn/ui + componentes base
lib/
  content/         -- dados da CFW, catecismos, versículos ARA
  game/            -- lógica de regras, pontuação, progressão
  db/              -- queries Supabase
public/
  cards/           -- arte das cartas por tipo e faixa etária
```

## Faixas etárias (referência)

| Faixa | Label |
|-------|-------|
| 6-8 anos | Pequenos Guerreiros |
| 9-11 anos | Aprendizes |
| 12-14 anos | Exploradores |

## Regras de conteúdo

- Todo texto bíblico usa a versão ARA
- Linguagem adaptada por faixa etária (simplificada para menores)
- Nenhuma distorção doutrinária: texto da CFW/catecismos sempre fiel ao original
- Cartas de situação baseadas em cenários reais do cotidiano infantil

## Comandos

```bash
npm run dev        # desenvolvimento local
npm run build      # build de produção
npm run lint       # lint
```

## Git remote

```
https://github.com/joefaria/app-cfw-kids
```

## Notas de operação

- Projeto independente do monorepo astra (git init próprio)
- Deploy planejado: Vercel conectado ao repo joefaria/app-cfw-kids
