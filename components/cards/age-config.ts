import type { AgeGroup } from '@/lib/content/types'

export interface AgeConfig {
  label: string
  sublabel: string
  color: string          // Tailwind bg class
  colorText: string      // Tailwind text class
  colorBorder: string    // Tailwind border class
  colorBadge: string     // Tailwind bg for badge
  colorBadgeText: string
  summarySize: string    // Tailwind text size for summary
  titleSize: string
}

export const AGE_CONFIG: Record<AgeGroup, AgeConfig> = {
  '0-5': {
    label: 'Sementes',
    sublabel: '0–5 anos',
    color: 'bg-amber-50 dark:bg-amber-950',
    colorText: 'text-amber-900 dark:text-amber-100',
    colorBorder: 'border-amber-200 dark:border-amber-800',
    colorBadge: 'bg-amber-100 dark:bg-amber-900',
    colorBadgeText: 'text-amber-800 dark:text-amber-200',
    summarySize: 'text-2xl leading-snug',
    titleSize: 'text-3xl',
  },
  '6-8': {
    label: 'Pequenos Guerreiros',
    sublabel: '6–8 anos',
    color: 'bg-emerald-50 dark:bg-emerald-950',
    colorText: 'text-emerald-900 dark:text-emerald-100',
    colorBorder: 'border-emerald-200 dark:border-emerald-800',
    colorBadge: 'bg-emerald-100 dark:bg-emerald-900',
    colorBadgeText: 'text-emerald-800 dark:text-emerald-200',
    summarySize: 'text-xl leading-relaxed',
    titleSize: 'text-2xl',
  },
  '9-11': {
    label: 'Aprendizes',
    sublabel: '9–11 anos',
    color: 'bg-blue-50 dark:bg-blue-950',
    colorText: 'text-blue-900 dark:text-blue-100',
    colorBorder: 'border-blue-200 dark:border-blue-800',
    colorBadge: 'bg-blue-100 dark:bg-blue-900',
    colorBadgeText: 'text-blue-800 dark:text-blue-200',
    summarySize: 'text-lg leading-relaxed',
    titleSize: 'text-xl',
  },
  '12-14': {
    label: 'Exploradores',
    sublabel: '12–14 anos',
    color: 'bg-violet-50 dark:bg-violet-950',
    colorText: 'text-violet-900 dark:text-violet-100',
    colorBorder: 'border-violet-200 dark:border-violet-800',
    colorBadge: 'bg-violet-100 dark:bg-violet-900',
    colorBadgeText: 'text-violet-800 dark:text-violet-200',
    summarySize: 'text-base leading-relaxed',
    titleSize: 'text-lg',
  },
}

export const SOURCE_LABEL: Record<string, string> = {
  'cfw': 'CFW',
  'catecismo-breve': 'Cat. Breve',
  'catecismo-maior': 'Cat. Maior',
}

export const DIFFICULTY_LABEL: Record<number, string> = {
  1: 'Fácil',
  2: 'Médio',
  3: 'Difícil',
}
