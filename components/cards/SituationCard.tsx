'use client'

import { Lightbulb, SpeakerHigh } from '@phosphor-icons/react'
import type { SituationCard as SituationCardType } from '@/lib/content/types'
import { AGE_CONFIG } from './age-config'
import { cn } from '@/lib/utils'

interface Props {
  card: SituationCardType
  showHint?: boolean
  showParentMode?: boolean
  className?: string
}

function DifficultyDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex gap-1" aria-label={`Dificuldade ${level} de 3`}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={cn(
            'block h-2 w-2 rounded-full',
            i <= level ? 'bg-current opacity-80' : 'bg-current opacity-20'
          )}
        />
      ))}
    </div>
  )
}

export function SituationCard({ card, showHint = false, showParentMode = false, className }: Props) {
  const cfg = AGE_CONFIG[card.ageGroup]

  return (
    <article
      className={cn(
        'flex flex-col gap-4 rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md',
        cfg.color,
        cfg.colorBorder,
        cfg.colorText,
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide',
            cfg.colorBadge,
            cfg.colorBadgeText
          )}
        >
          {cfg.label}
        </span>
        <DifficultyDots level={card.difficulty} />
      </div>

      {/* Scenario */}
      <p className={cn('font-medium', cfg.summarySize)}>{card.scenario}</p>

      {/* Question */}
      <p className="text-sm font-semibold opacity-70">{card.question}</p>

      {/* Parent narration — only when 0-5 mode */}
      {showParentMode && card.ageGroup === '0-5' && card.parentNarration && (
        <div className="flex items-start gap-2 rounded-xl border border-amber-300/50 bg-white/40 px-4 py-3 dark:bg-black/20">
          <SpeakerHigh size={15} weight="fill" className="mt-0.5 shrink-0 text-amber-500" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider opacity-60">Como o pai conta</p>
            <p className="text-sm italic leading-snug">{card.parentNarration}</p>
          </div>
        </div>
      )}

      {/* Hint — revealed after attempt */}
      {showHint && card.hint && (
        <div className="flex items-start gap-2 rounded-xl border border-current/10 bg-white/30 px-4 py-3 dark:bg-black/20">
          <Lightbulb size={15} weight="fill" className="mt-0.5 shrink-0 opacity-60" />
          <p className="text-sm opacity-75">{card.hint}</p>
        </div>
      )}

      {/* Theme tags */}
      <div className="flex flex-wrap gap-1.5">
        {card.themes.map((theme) => (
          <span
            key={theme}
            className={cn(
              'rounded-full px-2 py-0.5 text-xs opacity-70',
              cfg.colorBadge,
              cfg.colorBadgeText
            )}
          >
            {theme}
          </span>
        ))}
      </div>
    </article>
  )
}
