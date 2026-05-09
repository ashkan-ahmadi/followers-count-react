export type Card = {
  id: number
  platform: 'instagram' | 'tiktok' | 'twitter' | 'youtube' | 'github' | 'linkedin' | 'reddit' | 'threads'
  icon: 'instagram' | 'tiktok' | 'twitter' | 'youtube' | 'github' | 'linkedin' | 'reddit' | 'threads'
}
export type CardsData = Card[]
