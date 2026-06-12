// Faixas etárias
// 0-5: modo pai — pai lê, criança interage via imagens. Cartas têm dicas para o pai.
// 6-8: leitura emergente — texto curto, imagens grandes, mecânica simples
// 9-11: independente — texto médio, mecânica padrão
// 12-14: avançado — texto completo da CFW/catecismos, mecânica com nuance doutrinária
export type AgeGroup = '0-5' | '6-8' | '9-11' | '12-14'

export type Difficulty = 1 | 2 | 3

export type ContentSource = 'cfw' | 'catecismo-breve' | 'catecismo-maior'

// Temas doutrinários para filtro e matching
export type DoctrineTheme =
  | 'escritura'
  | 'deus'
  | 'trindade'
  | 'criacao'
  | 'providencia'
  | 'queda'
  | 'pecado'
  | 'salvacao'
  | 'jesus'
  | 'espirito-santo'
  | 'fe'
  | 'arrependimento'
  | 'justificacao'
  | 'santificacao'
  | 'oracao'
  | 'igreja'
  | 'sacramentos'
  | 'lei'
  | 'mandamentos'
  | 'gloria'
  | 'morte-e-ressurreicao'
  | 'familia'
  | 'obediencia'

// Carta de Doutrina — a carta que a criança "joga" em resposta a uma situação
export interface DoctrineCard {
  id: string

  // Origem no documento-fonte
  source: ContentSource
  reference: string       // ex: "CFW 2.1" | "CB 1" | "CM 7"
  chapter?: number        // CFW: número do capítulo
  question?: number       // Catecismos: número da pergunta
  paragraph?: number      // CFW: número do parágrafo dentro do capítulo

  // Texto
  title: string           // curto e memorável: "Deus é eterno"
  fullText: string        // texto original fiel ao documento
  summaries: Record<AgeGroup, string>  // versão simplificada por faixa etária

  // Bíblia (ARA)
  verse: string           // referência: "João 3:16"
  verseText: string       // texto completo da ARA

  // Jogo
  ageGroups: AgeGroup[]   // em quais faixas essa carta aparece
  difficulty: Difficulty
  themes: DoctrineTheme[]

  // Modo pai (faixa 0-5)
  parentTip?: string      // como apresentar essa verdade a um filho de 0-5 anos
  parentQuestion?: string // pergunta de conversa que o pai faz ao filho

  // Arte (gerado depois)
  imagePrompt?: string    // descrição para geração de arte da carta
}

// Carta de Situação — o desafio apresentado à criança
export interface SituationCard {
  id: string

  scenario: string        // "Seu amigo diz que Deus não existe porque não dá pra ver..."
  question: string        // "Qual verdade você usaria para responder?"

  ageGroup: AgeGroup
  difficulty: Difficulty
  themes: DoctrineTheme[]

  // IDs das DoctrineCards que respondem corretamente essa situação
  acceptedDoctrineIds: string[]

  // Modo pai (faixa 0-5): o pai lê isso para o filho
  parentNarration?: string  // versão para o pai narrar em voz alta

  hint?: string           // dica visível para difficulty 1
}

// Sessão de jogo de uma criança
export interface GameSession {
  id: string
  userId: string
  ageGroup: AgeGroup
  startedAt: string       // ISO date
  completedAt?: string

  situationsPresented: string[]   // SituationCard IDs
  correctAnswers: string[]        // DoctrineCard IDs jogados corretamente
  score: number
  xp: number
}

// Progresso acumulado por criança
export interface PlayerProgress {
  userId: string
  ageGroup: AgeGroup
  unlockedCards: string[]         // DoctrineCard IDs desbloqueados
  masteredCards: string[]         // acertou 3+ vezes
  totalXp: number
  sessionsCompleted: number
  themesExplored: DoctrineTheme[]
}
