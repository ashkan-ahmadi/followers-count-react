import { useEffect, useState } from 'react'
import { getRandomNumber, sleep } from '../utils/utils'

export default function useFetchData(autoFetch = 0) {
  const [currentValue, setCurrentValue] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchValue() {
    try {
      setLoading(true)

      // simulating slow API response to see the loading spinner
      await sleep(1000)

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
      setLoading(false)
    }
  }

  // fetch number on the very first use of the hook
  // subsequent fetches are handled by the useEffect below through setInterval
  useEffect(() => {
    fetchValue()
  }, [])

  useEffect(() => {
    // fetch number on the very first use of the hook

    if (autoFetch) {
      const interval = setInterval(() => {
        fetchValue()
      }, autoFetch) // Refresh at an interval
      return () => clearInterval(interval)
    }
  }, [])

  return { currentValue, previousValue, loading, error, fetchValue }
}
