import { DependencyList, useEffect } from 'react'

export default function useEffectAsync(effect: () => Promise<void>, deps?: DependencyList) {
  useEffect(() => {
    effect()
  }, deps)
}
