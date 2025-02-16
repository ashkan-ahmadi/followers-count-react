import { useEffect, useState } from 'react'
import supabase from '../config/supabaseConfig'
import { useParams, useNavigate } from 'react-router-dom'
import { showErrorToast, showSuccessToast, sleep } from '../utils/utils'

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
        await sleep(4000)

        // eq stands for equals similar to "where('id', id)"
        // single means return as an object, not in an array which is default
        const response = await supabase.from('smoothies').select().eq('id', id).single()

        const { data, error } = response || {}

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
      await sleep(4000)

      // just in case to ensure there is no alert or indication
      setIsSuccess(false)
      setFormError(false)

      if (!title || !method || !rating) {
        setFormError('Fill in all fields')
        return
      }

      const response = await supabase
        .from('smoothies')
        .update({
          title: title,
          method: method,
          rating: rating,
        })
        .eq('id', id)
        .select()

      const { data, error } = response || {}

      if (error) {
        console.error(error)

        throw new Error(error)
      }

      if (!data) {
        return
      }

      // we have to set this to true so that it disappears and the success alert appears
      setIsLoading(false)

      setIsSuccess(true)

      showSuccessToast('Updated successfully')

      navigate('/')
    } catch (error) {
      showErrorToast('There was an error. Please try again.')
      setFormError('There was an error with updating. Please try again.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container py-5">
      <form onSubmit={handleSubmit} className="row g-4">
        {/* {formError && !isLoading && !isSuccess && <p className="alert alert-danger">{formError}</p>} */}

        {isLoading && <p className="alert alert-info">Loading ... please wait!</p>}

        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            disabled={isLoading}
            placeholder=""
            onChange={e => {
              setTitle(e.target.value)
            }}
          />
        </div>

        <div className="col-12">
          <label htmlFor="method" className="form-label">
            Method
          </label>
          <textarea className="form-control" name="method" id="method" value={method} disabled={isLoading} onChange={e => setMethod(e.target.value)}></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="rating" className="form-label">
            Rating (0 to 10)
          </label>
          <input type="number" className="form-control" id="rating" name="rating" min="0" max="10" step="1" value={rating} disabled={isLoading} onChange={e => setRating(e.target.value)} />
        </div>
        <div className="col-12">
          <button disabled={isLoading} className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </main>
  )
}

export default Update
