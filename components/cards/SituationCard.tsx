'use client'

import { Lightbulb, SpeakerHigh, Question } from '@phosphor-icons/react'
import type { SituationCard as SituationCardType } from '@/lib/content/types'
import { AGE_LABEL, AGE_COLORS } from './card-config'
import { cn } from '@/lib/utils'

interface Props {
  card: SituationCardType
  showHint?: boolean
  showParentMode?: boolean
  className?: string
}

const SCENARIO_SIZE: Record<string, string> = {
  '0-5':   'text-2xl leading-snug',
  '6-8':   'text-xl leading-relaxed',
  '9-11':  'text-lg leading-relaxed',
  '12-14': 'text-base leading-relaxed',
}

export function SituationCard({ card, showHint = false, showParentMode = false, className }: Props) {
  const colors = AGE_COLORS[card.ageGroup]
  const scenarioSize = SCENARIO_SIZE[card.ageGroup] ?? 'text-base leading-relaxed'

  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-[1.5rem] shadow-xl', className)}
      style={{ border: `3px solid ${colors.border}` }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ backgroundColor: colors.border }}
      >
        <span
          className="rounded-full px-3 py-1 text-xs font-bold"
          style={{ backgroundColor: colors.badge, color: colors.badgeText }}
        >
          {AGE_LABEL[card.ageGroup]}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn(
                'block h-2 w-2 rounded-full',
                i <= card.difficulty ? 'bg-white' : 'bg-white/30'
              )}
            />
          ))}
        </div>
      </div>

      {/* Scenario zone */}
      <div className="px-5 py-6" style={{ backgroundColor: colors.bg }}>
        <p className={cn('font-semibold text-zinc-800', scenarioSize)}>
          {card.scenario}
        </p>
      </div>

      {/* Question */}
      <div
        className="flex items-start gap-2 px-5 py-4 dark:bg-zinc-900"
        style={{ backgroundColor: 'white' }}
      >
        <Question size={18} weight="bold" className="mt-0.5 shrink-0 text-zinc-400" />
        <p className="text-sm font-semibold text-zinc-600">{card.question}</p>
      </div>

      {/* Parent narration */}
      {showParentMode && card.ageGroup === '0-5' && card.parentNarration && (
        <div className="mx-4 mb-4 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
          <SpeakerHigh size={16} weight="fill" className="mt-0.5 shrink-0 text-amber-500" />
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-500">Como o pai conta</p>
            <p className="text-sm italic text-amber-900">&ldquo;{card.parentNarration}&rdquo;</p>
          </div>
        </div>
      )}

      {/* Hint */}
      {showHint && card.hint && (
        <div className="mx-4 mb-4 flex items-start gap-2 rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3">
          <Lightbulb size={15} weight="fill" className="mt-0.5 shrink-0 text-zinc-400" />
          <p className="text-sm text-zinc-500">{card.hint}</p>
        </div>
      )}

      {/* Footer */}
      <div
        className="flex flex-wrap items-center gap-1.5 border-t px-5 py-3"
        style={{ borderColor: colors.border, backgroundColor: 'white' }}
      >
        {card.themes.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: colors.badge, color: colors.badgeText }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
