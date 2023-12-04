import { ProfileInterface } from './profile.interface'

export interface ArticlesInterface {
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: string[]
  title: string
  updatedAt: string
  author: ProfileInterface
}
