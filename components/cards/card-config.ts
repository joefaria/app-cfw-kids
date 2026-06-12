import type { DoctrineTheme, AgeGroup } from '@/lib/content/types'
import type { ComponentType } from 'react'
import {
  Sun, Globe, Warning, Heart, Scroll, Fire,
  Star, BookOpen, Shield, ChatDots, Drop, Crown,
  Users, ArrowCounterClockwise, Scales, Cross,
  Sparkle,
} from '@phosphor-icons/react'

interface IconProps {
  size?: number
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  className?: string
}

export interface ThemeVisual {
  artFrom: string
  artTo: string
  titleBg: string
  frameBorder: string
  tagBg: string
  tagText: string
  Icon: ComponentType<IconProps>
}

export const THEME_VISUALS: Partial<Record<DoctrineTheme, ThemeVisual>> & { default: ThemeVisual } = {
  deus: {
    artFrom: '#F59E0B', artTo: '#B45309',
    titleBg: '#92400E',
    frameBorder: '#F59E0B',
    tagBg: '#FEF3C7', tagText: '#78350F',
    Icon: Sun,
  },
  trindade: {
    artFrom: '#FB923C', artTo: '#C2410C',
    titleBg: '#9A3412',
    frameBorder: '#FB923C',
    tagBg: '#FFEDD5', tagText: '#7C2D12',
    Icon: Sparkle,
  },
  criacao: {
    artFrom: '#34D399', artTo: '#065F46',
    titleBg: '#064E3B',
    frameBorder: '#34D399',
    tagBg: '#D1FAE5', tagText: '#064E3B',
    Icon: Globe,
  },
  providencia: {
    artFrom: '#38BDF8', artTo: '#0369A1',
    titleBg: '#0C4A6E',
    frameBorder: '#38BDF8',
    tagBg: '#E0F2FE', tagText: '#0C4A6E',
    Icon: Shield,
  },
  queda: {
    artFrom: '#94A3B8', artTo: '#1E293B',
    titleBg: '#1E293B',
    frameBorder: '#94A3B8',
    tagBg: '#F1F5F9', tagText: '#1E293B',
    Icon: Warning,
  },
  pecado: {
    artFrom: '#F87171', artTo: '#991B1B',
    titleBg: '#7F1D1D',
    frameBorder: '#F87171',
    tagBg: '#FEE2E2', tagText: '#7F1D1D',
    Icon: Warning,
  },
  jesus: {
    artFrom: '#60A5FA', artTo: '#1D4ED8',
    titleBg: '#1E3A8A',
    frameBorder: '#60A5FA',
    tagBg: '#DBEAFE', tagText: '#1E3A8A',
    Icon: Cross,
  },
  salvacao: {
    artFrom: '#818CF8', artTo: '#3730A3',
    titleBg: '#312E81',
    frameBorder: '#818CF8',
    tagBg: '#EEF2FF', tagText: '#312E81',
    Icon: Heart,
  },
  fe: {
    artFrom: '#C084FC', artTo: '#6D28D9',
    titleBg: '#4C1D95',
    frameBorder: '#C084FC',
    tagBg: '#F3E8FF', tagText: '#4C1D95',
    Icon: Heart,
  },
  arrependimento: {
    artFrom: '#2DD4BF', artTo: '#0F766E',
    titleBg: '#0F766E',
    frameBorder: '#2DD4BF',
    tagBg: '#CCFBF1', tagText: '#0F766E',
    Icon: ArrowCounterClockwise,
  },
  justificacao: {
    artFrom: '#A78BFA', artTo: '#5B21B6',
    titleBg: '#4C1D95',
    frameBorder: '#A78BFA',
    tagBg: '#EDE9FE', tagText: '#4C1D95',
    Icon: Scales,
  },
  santificacao: {
    artFrom: '#FB7185', artTo: '#9F1239',
    titleBg: '#881337',
    frameBorder: '#FB7185',
    tagBg: '#FFE4E6', tagText: '#881337',
    Icon: Fire,
  },
  oracao: {
    artFrom: '#22D3EE', artTo: '#0E7490',
    titleBg: '#164E63',
    frameBorder: '#22D3EE',
    tagBg: '#CFFAFE', tagText: '#164E63',
    Icon: ChatDots,
  },
  igreja: {
    artFrom: '#4ADE80', artTo: '#15803D',
    titleBg: '#14532D',
    frameBorder: '#4ADE80',
    tagBg: '#DCFCE7', tagText: '#14532D',
    Icon: Users,
  },
  sacramentos: {
    artFrom: '#93C5FD', artTo: '#1D4ED8',
    titleBg: '#1E3A8A',
    frameBorder: '#93C5FD',
    tagBg: '#DBEAFE', tagText: '#1E3A8A',
    Icon: Drop,
  },
  lei: {
    artFrom: '#FCD34D', artTo: '#B45309',
    titleBg: '#78350F',
    frameBorder: '#FCD34D',
    tagBg: '#FEF9C3', tagText: '#713F12',
    Icon: Scroll,
  },
  mandamentos: {
    artFrom: '#FDE68A', artTo: '#92400E',
    titleBg: '#78350F',
    frameBorder: '#FDE68A',
    tagBg: '#FEF9C3', tagText: '#713F12',
    Icon: Scroll,
  },
  gloria: {
    artFrom: '#FBBF24', artTo: '#92400E',
    titleBg: '#78350F',
    frameBorder: '#FBBF24',
    tagBg: '#FEF3C7', tagText: '#78350F',
    Icon: Crown,
  },
  escritura: {
    artFrom: '#D97706', artTo: '#78350F',
    titleBg: '#431407',
    frameBorder: '#D97706',
    tagBg: '#FEF3C7', tagText: '#78350F',
    Icon: BookOpen,
  },
  'espirito-santo': {
    artFrom: '#F0ABFC', artTo: '#86198F',
    titleBg: '#701A75',
    frameBorder: '#F0ABFC',
    tagBg: '#FAE8FF', tagText: '#701A75',
    Icon: Sparkle,
  },
  'morte-e-ressurreicao': {
    artFrom: '#6EE7B7', artTo: '#0D9488',
    titleBg: '#0F766E',
    frameBorder: '#6EE7B7',
    tagBg: '#CCFBF1', tagText: '#0F766E',
    Icon: Star,
  },
  familia: {
    artFrom: '#FCA5A5', artTo: '#DC2626',
    titleBg: '#991B1B',
    frameBorder: '#FCA5A5',
    tagBg: '#FEE2E2', tagText: '#991B1B',
    Icon: Users,
  },
  obediencia: {
    artFrom: '#86EFAC', artTo: '#15803D',
    titleBg: '#14532D',
    frameBorder: '#86EFAC',
    tagBg: '#DCFCE7', tagText: '#14532D',
    Icon: Shield,
  },
  default: {
    artFrom: '#9CA3AF', artTo: '#374151',
    titleBg: '#1F2937',
    frameBorder: '#6B7280',
    tagBg: '#F3F4F6', tagText: '#1F2937',
    Icon: Star,
  },
}

export function getThemeVisual(theme?: DoctrineTheme): ThemeVisual {
  if (!theme) return THEME_VISUALS.default
  return THEME_VISUALS[theme] ?? THEME_VISUALS.default
}

export const SOURCE_LABEL: Record<string, string> = {
  'cfw': 'CFW',
  'catecismo-breve': 'Cat. Breve',
  'catecismo-maior': 'Cat. Maior',
}

export const AGE_LABEL: Record<AgeGroup, string> = {
  '0-5': 'Sementes',
  '6-8': 'Pequenos Guerreiros',
  '9-11': 'Aprendizes',
  '12-14': 'Exploradores',
}

export const AGE_COLORS: Record<AgeGroup, { bg: string; border: string; text: string; badge: string; badgeText: string }> = {
  '0-5':   { bg: '#FFFBEB', border: '#FCD34D', text: '#78350F', badge: '#FEF3C7', badgeText: '#92400E' },
  '6-8':   { bg: '#F0FDF4', border: '#86EFAC', text: '#14532D', badge: '#DCFCE7', badgeText: '#166534' },
  '9-11':  { bg: '#EFF6FF', border: '#93C5FD', text: '#1E3A8A', badge: '#DBEAFE', badgeText: '#1D4ED8' },
  '12-14': { bg: '#FAF5FF', border: '#C4B5FD', text: '#4C1D95', badge: '#EDE9FE', badgeText: '#6D28D9' },
}
