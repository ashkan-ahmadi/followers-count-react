import { useEffect, useState } from 'react'
import supabase from '../config/supabaseConfig'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
  // return all the params - built into RRD
  const params = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')

  const { id } = params || {}

  useEffect(() => {
    async function fetchSmoothie() {
      // eq stands for equals similar to "where('id', id)"
      // single means return as an object, not in an array which is default
      const { data, error } = await supabase.from('smoothies').select().eq('id', id).single()

      if (error) {
        console.log(error)
        //replace = true means replace the URL
        navigate('/', { replace: true })
      }
      if (data) {
        console.log(data)
        const { title, method, rating } = data || {}

        setTitle(title)
        setMethod(method)
        setRating(rating)
      }
    }

    fetchSmoothie()
  }, [id, navigate])

  return (
    <div className="page update">
      <form>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Title"
          onChange={e => {
            setTitle(e.target.value)
          }}
        />

        <textarea name="method" id="method" value={method} onChange={e => setMethod(e.target.value)}></textarea>

        <input type="number" id="rating" min="0" max="10" step="1" value={rating} onChange={e => setRating(e.target.value)} />

        <button>Update</button>

        {/* {formError && <p>{formError}</p>} */}
      </form>
    </div>
  )
}

export default Update
