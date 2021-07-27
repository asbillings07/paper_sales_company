import { useState, useEffect } from 'react'

export const useSetError = (initialValue = false, itemToCheck) => {
  const [error, setError] = useState(initialValue)

  useEffect(() => {
    if (itemToCheck.length > 0) {
      setError(false)
    }
  }, [itemToCheck])

  return [error, setError]
}
