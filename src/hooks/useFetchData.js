import { useEffect, useState } from 'react'
import { getRandomNumber, sleep } from '../utils/utils'

export default function useFetchData() {
  const [currentValue, setCurrentValue] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchValue() {
    try {
      setLoading(true)

      // simulating slow API response to see the loading spinner
      await sleep(500)

      // FIXME: not sure why this part doesn't run
      // number always returns null even on the re-renders
      if (currentValue) {
        setPreviousValue(currentValue)
      }

      // Fetch a random number
      // NOT USING FETCH TO AVOID CORS FOR NOW
      const randomNumber = getRandomNumber(2322, 988478)
      setCurrentValue(randomNumber)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  // fetch number on the very first use of the hook
  // subsequent fetches are handled by the useEffect below through setInterval
  useEffect(() => {
    fetchValue()

    // fetch number on the very first use of the hook
    const interval = setInterval(fetchValue, 2000) // Refresh at an interval
    return () => clearInterval(interval)
  }, [])

  return { currentValue, previousValue, loading, error }
}
