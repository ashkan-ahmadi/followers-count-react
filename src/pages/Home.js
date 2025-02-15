import SmoothieCard from '../components/SmoothieCard'
import supabase from '../config/supabaseConfig'

import { useEffect, useState } from 'react'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    async function fetchSmoothes() {
      // .select() means select all (like SELECT *)
      const { data, error } = await supabase.from('smoothies').select()

      if (error) {
        setFetchError('Could not fetch smoothies')
        setSmoothies(null)
        console.log(error)
      }

      if (data) {
        console.log(data)
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothes()
  }, [])

  return (
    <div className="page home">
      <h2>Home</h2>

      {fetchError && <p>{fetchError}</p>}

      {smoothies && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {smoothies.map(smoothie => (
              <SmoothieCard key={smoothie?.id} smoothie={smoothie} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
