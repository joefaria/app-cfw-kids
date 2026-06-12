import { describe, it, expect } from 'vitest'
import { DOCTRINE_CARDS } from '../doctrine-cards'
import { SITUATION_CARDS } from '../situation-cards'
import { CATECISMO_BREVE } from '../catecismo-breve'
import { CFW_CAPITULOS } from '../cfw-chapters'
import type { AgeGroup } from '../types'

const AGE_GROUPS: AgeGroup[] = ['0-5', '6-8', '9-11', '12-14']

describe('CATECISMO_BREVE', () => {
  it('tem exatamente 107 perguntas', () => {
    expect(CATECISMO_BREVE).toHaveLength(107)
  })

  it('números são sequenciais de 1 a 107', () => {
    CATECISMO_BREVE.forEach((item, idx) => {
      expect(item.numero).toBe(idx + 1)
    })
  })

  it('todas as perguntas têm pergunta, resposta e ao menos um versículo', () => {
    CATECISMO_BREVE.forEach((item) => {
      expect(item.pergunta.length).toBeGreaterThan(0)
      expect(item.resposta.length).toBeGreaterThan(0)
      expect(item.versiculos.length).toBeGreaterThan(0)
    })
  })
})

describe('CFW_CAPITULOS', () => {
  it('tem exatamente 33 capítulos', () => {
    expect(CFW_CAPITULOS).toHaveLength(33)
  })

  it('números são sequenciais de 1 a 33', () => {
    CFW_CAPITULOS.forEach((cap, idx) => {
      expect(cap.numero).toBe(idx + 1)
    })
  })

  it('todos os capítulos têm título, temas e resumo', () => {
    CFW_CAPITULOS.forEach((cap) => {
      expect(cap.titulo.length).toBeGreaterThan(0)
      expect(cap.temas.length).toBeGreaterThan(0)
      expect(cap.resumo.length).toBeGreaterThan(0)
    })
  })
})

describe('DOCTRINE_CARDS', () => {
  it('tem ao menos 15 cartas no seed', () => {
    expect(DOCTRINE_CARDS.length).toBeGreaterThanOrEqual(15)
  })

  it('todos os IDs são únicos', () => {
    const ids = DOCTRINE_CARDS.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('todas as cartas têm summaries para todas as ageGroups que suportam', () => {
    DOCTRINE_CARDS.forEach((card) => {
      card.ageGroups.forEach((ag) => {
        expect(card.summaries[ag]).toBeDefined()
        expect(card.summaries[ag].length).toBeGreaterThan(0)
      })
    })
  })

  it('todas as cartas têm fullText, verse e verseText', () => {
    DOCTRINE_CARDS.forEach((card) => {
      expect(card.fullText.length).toBeGreaterThan(0)
      expect(card.verse.length).toBeGreaterThan(0)
      expect(card.verseText.length).toBeGreaterThan(0)
    })
  })

  it('difficulty está entre 1 e 3', () => {
    DOCTRINE_CARDS.forEach((card) => {
      expect(card.difficulty).toBeGreaterThanOrEqual(1)
      expect(card.difficulty).toBeLessThanOrEqual(3)
    })
  })

  it('cartas com ageGroup 0-5 têm parentTip e parentQuestion', () => {
    const parentCards = DOCTRINE_CARDS.filter((c) => c.ageGroups.includes('0-5'))
    parentCards.forEach((card) => {
      expect(card.parentTip).toBeDefined()
      expect(card.parentQuestion).toBeDefined()
    })
  })

  it('cobertura temática — ao menos um card por tema principal', () => {
    const themes = DOCTRINE_CARDS.flatMap((c) => c.themes)
    const required = ['deus', 'criacao', 'pecado', 'jesus', 'salvacao', 'fe', 'oracao']
    required.forEach((theme) => {
      expect(themes).toContain(theme)
    })
  })
})

describe('SITUATION_CARDS', () => {
  it('tem ao menos 15 situações no seed', () => {
    expect(SITUATION_CARDS.length).toBeGreaterThanOrEqual(15)
  })

  it('todos os IDs são únicos', () => {
    const ids = SITUATION_CARDS.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('todas as situações têm ao menos um acceptedDoctrineId', () => {
    SITUATION_CARDS.forEach((sit) => {
      expect(sit.acceptedDoctrineIds.length).toBeGreaterThan(0)
    })
  })

  it('todos os acceptedDoctrineIds referenciam cards existentes no seed', () => {
    const docIds = new Set(DOCTRINE_CARDS.map((c) => c.id))
    SITUATION_CARDS.forEach((sit) => {
      sit.acceptedDoctrineIds.forEach((id) => {
        expect(docIds.has(id), `Situação "${sit.id}" referencia doctrine ID "${id}" que não existe`).toBe(true)
      })
    })
  })

  it('há situações para todas as faixas etárias', () => {
    const groups = SITUATION_CARDS.map((s) => s.ageGroup)
    AGE_GROUPS.forEach((ag) => {
      expect(groups).toContain(ag)
    })
  })

  it('situações de faixa 0-5 têm parentNarration', () => {
    const parent = SITUATION_CARDS.filter((s) => s.ageGroup === '0-5')
    parent.forEach((sit) => {
      expect(sit.parentNarration).toBeDefined()
      expect((sit.parentNarration ?? '').length).toBeGreaterThan(0)
    })
  })

  it('difficulty está entre 1 e 3', () => {
    SITUATION_CARDS.forEach((sit) => {
      expect(sit.difficulty).toBeGreaterThanOrEqual(1)
      expect(sit.difficulty).toBeLessThanOrEqual(3)
    })
  })
})
