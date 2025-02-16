import SmoothieCard from '../components/SmoothieCard'
import supabase from '../config/supabaseConfig'

import { useEffect, useState } from 'react'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  function updateSmoothiesAfterDeletion(id) {
    setSmoothies(prev => {
      return prev.filter(smoothie => smoothie.id !== id)
    })
  }

  useEffect(() => {
    async function fetchSmoothies() {
      // .select() means select all (like SELECT *)
      // ascending false means bigger id comes before the smaller id (newer row first)
      const { data, error } = await supabase.from('smoothies').select().order('id', { ascending: false })

      if (error) {
        setFetchError('Could not fetch smoothies')
        setSmoothies(null)
        console.log(error)
      }

      if (data) {
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothies()
  }, [])

  return (
    <div className="page home">
      <h2>Home</h2>

      {fetchError && <p>{fetchError}</p>}

      {smoothies && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {smoothies.map(smoothie => (
              <SmoothieCard key={smoothie?.id} smoothie={smoothie} updateSmoothiesAfterDeletion={updateSmoothiesAfterDeletion} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
