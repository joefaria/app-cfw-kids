import '@testing-library/jest-dom/vitest'
import { beforeEach, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, val: string) => {
      store[key] = String(val)
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
  configurable: true,
})

beforeEach(() => {
  localStorageMock.clear()
})

afterEach(() => {
  cleanup()
})
