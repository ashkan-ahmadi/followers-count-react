import { useEffect, useState } from 'react'
import supabase from '../config/supabaseConfig'

import OrderBySelect from '../components/OrderBySelect'
import SmoothieCard from '../components/SmoothieCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)
  const [orderBy, setOrderBy] = useState('created_at') // created_at is the column name

  function updateSmoothiesAfterDeletion(id) {
    setSmoothies(prev => {
      return prev.filter(smoothie => smoothie.id !== id)
    })
  }

  useEffect(() => {
    async function fetchSmoothies() {
      // .select() means select all (like SELECT *)
      // ascending false means bigger id comes before the smaller id (newer row first)
      const { data, error } = await supabase.from('smoothies').select().order(orderBy, { ascending: false })

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
  }, [orderBy])

  return (
    <main className="container py-5">
      <h1>Home</h1>

      {fetchError && <p>{fetchError}</p>}

      {smoothies && (
        <>
          <OrderBySelect setOrderBy={setOrderBy} />
          <h2 className="mb-4">Smoothies</h2>
          <div className="row g-4">
            {smoothies.map(smoothie => (
              <div className="col-12 col-md-6 col-lg-4" key={smoothie?.id}>
                <SmoothieCard smoothie={smoothie} orderBy={orderBy} onDelete={updateSmoothiesAfterDeletion} />
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default Home
