import { useEffect, useState } from 'react'
import { getRandomNumber, sleep } from '../utils/utils'

export default function useFetchData() {
  const [number, setNumber] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // const URL = 'http://studentfy.local/wp-json/sf/v1/forms/contact'

  async function fetchNumber() {
    try {
      setLoading(true)

      // simulating slow API response to see the loading spinner
      await sleep()

      const randomNumber = getRandomNumber(2322, 988478)

      setNumber(randomNumber)

      // NOT USING FETCH TO AVOID CORS FOR NOW

      // const req = await fetch(URL, {
      //   method: 'GET',
      //   credentials: 'include', // or "same-origin" if both are on the same domain
      // })
      // const res = await req.json()

      // console.log(res)

      // if (!res?.success) {
      //   throw new Error('Unsuccessful fetch')
      // }

      // setNumber(res?.data?.value)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNumber()
    const interval = setInterval(fetchNumber, 1000 * 60 * 60) // Refresh every 60 minutes
    return () => clearInterval(interval)
  }, [])

  return { number, loading, error }
}
