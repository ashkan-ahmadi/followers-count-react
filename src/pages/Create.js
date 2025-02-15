import { useState } from 'react'
import supabase from '../config/supabaseConfig'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  // https://reactrouter.com/6.29.0/hooks/use-navigate
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  async function handleSubmit(e) {
    try {
      e.preventDefault()

      setIsLoading(true)
      if (!title || !method || !rating) {
        setFormError('Fill in all fields')
        return
      }

      const { data, error } = await supabase
        .from('smoothies')
        .insert([
          {
            title: title,
            method: method,
            rating: rating,
          },
        ])
        .select()

      if (error) {
        console.error(error)
        throw new Error(error)
      }

      if (!data) {
        return
      }

      console.log(data)

      const { id } = data || {}

      navigate('/')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(true)
    }
  }

  return (
    <div className="page create">
      <h2>Create</h2>

      <form onSubmit={handleSubmit}>
        {formError && <p>{formError}</p>}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder=""
          onChange={e => {
            setTitle(e.target.value)
          }}
          disabled={isLoading}
        />
        <label htmlFor="method">Method</label>
        <textarea name="method" id="method" value={method} onChange={e => setMethod(e.target.value)} disabled={isLoading}></textarea>

        <label htmlFor="rating">Rating (0 to 10)</label>
        <input type="number" id="rating" name="rating" min="0" max="10" step="1" value={rating} onChange={e => setRating(e.target.value)} disabled={isLoading} />

        <button disabled={isLoading}>Create</button>
      </form>
    </div>
  )
}

export default Create
