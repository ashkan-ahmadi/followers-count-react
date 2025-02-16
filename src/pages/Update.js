import { useEffect, useState } from 'react'
import supabase from '../config/supabaseConfig'
import { useParams, useNavigate } from 'react-router-dom'
import { sleep } from '../utils/utils'

const Update = () => {
  // return all the params - built into RRD
  const params = useParams()

  // https://reactrouter.com/6.29.0/hooks/use-navigate
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const { id } = params || {}

  useEffect(() => {
    async function fetchSmoothie() {
      try {
        setIsLoading(true)

        // await new Promise(r => setTimeout(r, 2000))

        // eq stands for equals similar to "where('id', id)"
        // single means return as an object, not in an array which is default
        const { data, error } = await supabase.from('smoothies').select().eq('id', id).single()

        if (error) {
          console.error(error)
          throw new Error(error)
        }

        if (!data) {
          return
        }

        console.log(data)

        const { title, method, rating } = data || {}

        setTitle(title)
        setMethod(method)
        setRating(rating)
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

  async function handleSubmit(e) {
    try {
      e.preventDefault()

      setIsLoading(true)

      // just in case to ensure there is no alert or indication
      setIsSuccess(false)
      setFormError(false)

      // await sleep()

      if (!title || !method || !rating) {
        setFormError('Fill in all fields')
        return
      }

      const { data, error } = await supabase
        .from('smoothies')
        .update({
          title: title,
          method: method,
          rating: rating,
        })
        .eq('id', id)
        .select()

      if (error) {
        console.error(error)
        setFormError('There was an error with updating. Please try again.')
        throw new Error(error)
      }

      if (!data) {
        return
      }

      // we have to set this to true so that it disappears and the success alert appears
      setIsLoading(false)

      setIsSuccess(true)

      // it stops so the user can see the Success alert
      await sleep()

      navigate('/')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="page update">
      <form onSubmit={handleSubmit}>
        {formError && !isLoading && !isSuccess && <p className="alert alert-danger">{formError}</p>}

        {isLoading && <p className="alert alert-info">Loading ... please wait!</p>}

        {isSuccess && !isLoading && !formError && <p className="alert alert-success">Success</p>}

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
      </form>
    </div>
  )
}

export default Update
