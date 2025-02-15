import { useEffect, useState } from 'react'
import supabase from '../config/supabaseConfig'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
  // return all the params - built into RRD
  const params = useParams()

  // https://reactrouter.com/6.29.0/hooks/use-navigate
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')

  const { id } = params || {}

  useEffect(() => {
    async function fetchSmoothie() {
      try {
        setIsLoading(true)

        await new Promise(r => setTimeout(r, 2000))

        // eq stands for equals similar to "where('id', id)"
        // single means return as an object, not in an array which is default
        const { data, error } = await supabase.from('smoothies').select().eq('id', id).single()

        if (error) {
          console.error(error)
          throw new Error(error)
        }
        if (data) {
          console.log(data)
          const { title, method, rating } = data || {}

          setTitle(title)
          setMethod(method)
          setRating(rating)
        }
      } catch (error) {
        console.error(error)
        // Specifying replace: true will cause the navigation to replace the current entry in the history stack instead of adding a new one.

        navigate('/', { replace: true })
      } finally {
        setIsLoading(false)
      }
    }

    fetchSmoothie()
  }, [id, navigate])

  return (
    <div className="page update">
      <form>
        {isLoading && <p>Loading information ... please wait!</p>}

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          disabled={isLoading}
          placeholder=""
          onChange={e => {
            setTitle(e.target.value)
          }}
        />

        <label htmlFor="method">Method</label>
        <textarea name="method" id="method" value={method} disabled={isLoading} onChange={e => setMethod(e.target.value)}></textarea>

        <label htmlFor="rating">Rating (0 to 10)</label>
        <input type="number" id="rating" name="rating" min="0" max="10" step="1" value={rating} disabled={isLoading} onChange={e => setRating(e.target.value)} />

        <button disabled={isLoading}>Update</button>

        {/* {formError && <p>{formError}</p>} */}
      </form>
    </div>
  )
}

export default Update
