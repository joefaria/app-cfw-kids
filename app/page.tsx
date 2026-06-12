import { DoctrineCard } from '@/components/cards/DoctrineCard'
import { SituationCard } from '@/components/cards/SituationCard'
import { DOCTRINE_CARDS, SITUATION_CARDS } from '@/lib/content'
import type { AgeGroup } from '@/lib/content/types'

const AGE_GROUPS: { id: AgeGroup; label: string }[] = [
  { id: '0-5', label: '0–5 anos (modo pai)' },
  { id: '6-8', label: '6–8 anos' },
  { id: '9-11', label: '9–11 anos' },
  { id: '12-14', label: '12–14 anos' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900 px-4 py-12">
      <div className="mx-auto max-w-2xl space-y-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            CFW Kids
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Preview dos componentes de carta por faixa etária
          </p>
        </div>

        {AGE_GROUPS.map(({ id, label }) => {
          const docCard = DOCTRINE_CARDS.find((c) => c.ageGroups.includes(id))
          const sitCard = SITUATION_CARDS.find((c) => c.ageGroup === id)
          if (!docCard || !sitCard) return null

          return (
            <section key={id} className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                {label}
              </h2>
              <SituationCard
                card={sitCard}
                showHint
                showParentMode={id === '0-5'}
              />
              <DoctrineCard
                card={docCard}
                ageGroup={id}
                showParentMode={id === '0-5'}
              />
            </section>
          )
        })}
      </div>
    </main>
  )
}
