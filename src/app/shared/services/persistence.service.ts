import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  constructor() {}

  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Error saving to localStorage', error)
    }
  }

  get(key: string): unknown {
    try {
      const localStorageItem = localStorage.getItem(key)
      return localStorageItem ? JSON.parse(localStorageItem) : null
    } catch (error) {
      console.error('Error getting data from localStorage', error)
      return null
    }
  }
}
