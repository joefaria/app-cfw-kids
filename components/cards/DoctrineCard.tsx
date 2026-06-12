'use client'

import { BookOpen, Star } from '@phosphor-icons/react'
import type { DoctrineCard as DoctrineCardType, AgeGroup } from '@/lib/content/types'
import { getThemeVisual, SOURCE_LABEL } from './card-config'
import { cn } from '@/lib/utils'

interface Props {
  card: DoctrineCardType
  ageGroup: AgeGroup
  showParentMode?: boolean
  className?: string
}

const SUMMARY_SIZE: Record<AgeGroup, string> = {
  '0-5':   'text-2xl leading-snug',
  '6-8':   'text-xl leading-relaxed',
  '9-11':  'text-lg leading-relaxed',
  '12-14': 'text-base leading-relaxed',
}

export function DoctrineCard({ card, ageGroup, showParentMode = false, className }: Props) {
  const visual = getThemeVisual(card.themes[0])
  const summary = card.summaries[ageGroup] ?? card.fullText
  const Icon = visual.Icon

  return (
    <div
      className={cn('relative w-full rounded-[1.5rem] overflow-hidden shadow-xl', className)}
      style={{ border: `3px solid ${visual.frameBorder}` }}
    >
      {/* Art zone */}
      <div
        className="relative flex h-44 items-end overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${visual.artFrom}, ${visual.artTo})` }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Large icon — centered, floating */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={104} weight="duotone" className="text-white/50" />
        </div>

        {/* Top-left: source badge */}
        <div className="absolute top-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
          {SOURCE_LABEL[card.source]}
        </div>

        {/* Top-right: difficulty */}
        <div className="absolute top-3 right-3 flex flex-col items-center gap-1 rounded-full bg-black/40 p-2 backdrop-blur-sm">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn(
                'block h-1.5 w-1.5 rounded-full',
                i <= card.difficulty ? 'bg-white' : 'bg-white/25'
              )}
            />
          ))}
        </div>

        {/* Title pill — overlaps art zone bottom */}
        <div
          className="relative z-10 mx-4 mb-[-1px] rounded-t-xl px-4 pt-2 pb-1"
          style={{ backgroundColor: visual.titleBg }}
        >
          <h2 className="font-extrabold leading-tight tracking-tight text-white"
            style={{ fontSize: ageGroup === '0-5' ? '1.25rem' : '1.1rem' }}
          >
            {card.title}
          </h2>
          <p className="text-xs font-medium text-white/60">{card.reference}</p>
        </div>
      </div>

      {/* Content zone */}
      <div className="flex flex-col gap-4 bg-white px-5 py-5 dark:bg-zinc-900">
        {/* Summary */}
        <p className={cn('font-semibold text-zinc-800 dark:text-zinc-100', SUMMARY_SIZE[ageGroup])}>
          {summary}
        </p>

        {/* Verse */}
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800">
          <div className="mb-1 flex items-center gap-1.5">
            <BookOpen size={12} weight="bold" className="text-zinc-400" />
            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">{card.verse}</span>
          </div>
          <p className="text-sm italic leading-snug text-zinc-600 dark:text-zinc-300">
            &ldquo;{card.verseText}&rdquo;
          </p>
        </div>

        {/* Full text (12-14 only) */}
        {ageGroup === '12-14' && card.fullText !== summary && (
          <details className="text-sm text-zinc-500">
            <summary className="cursor-pointer font-semibold hover:text-zinc-700">Texto completo da CFW</summary>
            <p className="mt-2 leading-relaxed">{card.fullText}</p>
          </details>
        )}

        {/* Parent mode */}
        {showParentMode && ageGroup === '0-5' && card.parentTip && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800 dark:bg-amber-950">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-500">Dica para o pai</p>
            <p className="text-sm text-amber-900 dark:text-amber-100">{card.parentTip}</p>
            {card.parentQuestion && (
              <>
                <p className="mb-1 mt-3 text-xs font-bold uppercase tracking-wide text-amber-500">Pergunta sugerida</p>
                <p className="text-sm italic text-amber-900 dark:text-amber-100">&ldquo;{card.parentQuestion}&rdquo;</p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 border-t border-zinc-100 bg-white px-5 py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap gap-1.5">
          {card.themes.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ backgroundColor: visual.tagBg, color: visual.tagText }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="ml-auto flex gap-0.5">
          {[1, 2, 3].map((i) => (
            <Star
              key={i}
              size={13}
              weight={i <= card.difficulty ? 'fill' : 'regular'}
              className={i <= card.difficulty ? 'text-amber-400' : 'text-zinc-200 dark:text-zinc-700'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
