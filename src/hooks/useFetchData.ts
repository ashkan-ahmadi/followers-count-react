import { useEffect, useState } from 'react'
import { getRandomNumber, sleep } from '../utils/utils'

export default function useFetchData(shouldAutoRefresh: boolean, refreshRate: number) {
  const [currentValue, setCurrentValue] = useState<number>(0)
  const [previousValue, setPreviousValue] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  async function fetchValue() {
    try {
      setIsLoading(true)

      // simulating slow API response to see the loading spinner
      // This way, different metrics load not at once
      await sleep(getRandomNumber(1000, 1750))

      // Fetch a random number
      // NOT USING FETCH TO AVOID CORS FOR NOW
      const randomNumber = getRandomNumber(193823, 232323232)

      // we do it this way so the interval works
      // Doing this below does NOT work for the interval
      // setPreviousValue(currentValue)
      // setCurrentValue(randomNumber)
      setCurrentValue(prevCurrent => {
        if (prevCurrent) {
          setPreviousValue(prevCurrent) // Update previousValue inside functional update
        }
        return randomNumber
      })

      // setPreviousValue(currentValue)
      // setCurrentValue(randomNumber)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  // fetch number on the very first use of the hook
  // subsequent fetches are handled by the useEffect below through setInterval
  useEffect(() => {
    fetchValue()
  }, [])

  useEffect(() => {
    // fetch number on the very first use of the hook

    if (shouldAutoRefresh) {
      const interval = setInterval(() => {
        fetchValue()
      }, refreshRate * 1_000) // Refresh at an interval
      return () => clearInterval(interval)
    }
  }, [shouldAutoRefresh, refreshRate])

  return { currentValue, previousValue, isLoading, error, fetchValue }
}
