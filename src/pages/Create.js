import { useState } from 'react'
import supabase from '../config/supabaseConfig'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()

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

    if (data) {
      console.log(data)
      navigate('/')
    }
    if (error) {
      console.log(error)
    }
  }

  return (
    <div className="page create">
      <h2>Create</h2>

      <form onSubmit={handleSubmit}>
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

        <button>Create</button>

        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}

export default Create
