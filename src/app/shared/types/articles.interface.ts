import { ProfileInterface } from './profile.interface'
import { PopularTagType } from './popularTag.type'

export interface ArticlesInterface {
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: PopularTagType[]
  title: string
  updatedAt: string
  author: ProfileInterface
}
