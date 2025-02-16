import { useState } from 'react'
import supabase from '../config/supabaseConfig'
import { useNavigate } from 'react-router-dom'
import { showErrorToast, showSuccessToast } from '../utils/utils'

const Create = () => {
  // https://reactrouter.com/6.29.0/hooks/use-navigate
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  // const [formError, setFormError] = useState(null)

  async function handleSubmit(e) {
    try {
      e.preventDefault()

      setIsLoading(true)
      if (!title || !method || !rating) {
        showErrorToast('You must fill in all required fields.')
        // setFormError('Fill in all fields')
        return
      }

      const response = await supabase
        .from('smoothies')
        .insert([
          {
            title: title,
            method: method,
            rating: rating,
          },
        ])
        .select()

      const { data, error } = response || {}

      console.log(response)

      if (error) {
        console.error(error)
        throw new Error(error)
      }

      if (!data) {
        return
      }

      // const { id } = data || {}

      showSuccessToast('Created successfully')

      navigate('/')
    } catch (error) {
      showErrorToast('There was an error. Please try again.')
      // setFormError('There was an error with updating. Please try again.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container py-5">
      <h1>Create</h1>

      <form onSubmit={handleSubmit} className="row g-4">
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
            placeholder=""
            onChange={e => {
              setTitle(e.target.value)
            }}
            disabled={isLoading}
          />
        </div>

        <div className="col-12">
          <label htmlFor="method" className="form-label">
            Method
          </label>
          <textarea className="form-control" name="method" id="method" value={method} onChange={e => setMethod(e.target.value)} disabled={isLoading}></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="rating" className="form-label">
            Rating (0 to 10)
          </label>
          <input type="text" inputMode="numeric" className="form-control" id="rating" name="rating" min="0" max="10" step="1" value={rating} onChange={e => setRating(e.target.value)} disabled={isLoading} />
        </div>
        <div className="col-12">
          <button disabled={isLoading} className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </main>
  )
}

export default Create
