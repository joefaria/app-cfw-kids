'use client'

import { BookOpen, Star, ChatDots } from '@phosphor-icons/react'
import type { DoctrineCard as DoctrineCardType } from '@/lib/content/types'
import type { AgeGroup } from '@/lib/content/types'
import { AGE_CONFIG, SOURCE_LABEL } from './age-config'
import { cn } from '@/lib/utils'

interface Props {
  card: DoctrineCardType
  ageGroup: AgeGroup
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

export function DoctrineCard({ card, ageGroup, showParentMode = false, className }: Props) {
  const cfg = AGE_CONFIG[ageGroup]
  const summary = card.summaries[ageGroup] ?? card.fullText

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
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide',
              cfg.colorBadge,
              cfg.colorBadgeText
            )}
          >
            {SOURCE_LABEL[card.source]}
          </span>
          <span className="text-xs opacity-60">{card.reference}</span>
        </div>
        <DifficultyDots level={card.difficulty} />
      </div>

      {/* Title */}
      <h2 className={cn('font-bold leading-tight', cfg.titleSize)}>{card.title}</h2>

      {/* Summary */}
      <p className={cn('font-medium', cfg.summarySize)}>{summary}</p>

      {/* Verse */}
      <div className="flex flex-col gap-1 rounded-xl border border-current/10 bg-white/30 px-4 py-3 dark:bg-black/20">
        <div className="flex items-center gap-1.5 text-xs font-semibold opacity-60">
          <BookOpen size={13} weight="bold" />
          {card.verse}
        </div>
        <p className="text-sm italic leading-snug opacity-80">&ldquo;{card.verseText}&rdquo;</p>
      </div>

      {/* Full text — only for 12-14 */}
      {ageGroup === '12-14' && card.fullText !== summary && (
        <details className="group">
          <summary className="cursor-pointer text-xs font-semibold opacity-50 hover:opacity-80">
            Texto completo
          </summary>
          <p className="mt-2 text-sm leading-relaxed opacity-75">{card.fullText}</p>
        </details>
      )}

      {/* Parent mode — only when ageGroup is 0-5 */}
      {showParentMode && ageGroup === '0-5' && card.parentTip && (
        <div className="flex flex-col gap-3 rounded-xl border border-amber-300/50 bg-white/40 px-4 py-3 dark:bg-black/20">
          <div className="flex items-start gap-2">
            <Star size={15} weight="fill" className="mt-0.5 shrink-0 text-amber-500" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider opacity-60">Dica para o pai</p>
              <p className="text-sm leading-snug">{card.parentTip}</p>
            </div>
          </div>
          {card.parentQuestion && (
            <div className="flex items-start gap-2">
              <ChatDots size={15} weight="fill" className="mt-0.5 shrink-0 text-amber-500" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-60">Pergunta de conversa</p>
                <p className="text-sm italic leading-snug">{card.parentQuestion}</p>
              </div>
            </div>
          )}
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
