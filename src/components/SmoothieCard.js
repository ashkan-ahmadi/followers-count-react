import { Link } from 'react-router-dom'
import supabase from '../config/supabaseConfig'

export default function SmoothieCard(props) {
  const {
    smoothie: { id, title, method, rating },
    updateSmoothiesAfterDeletion,
  } = props

  async function handleDelete() {
    try {
      // IMPORTANT: if you do not use .select(), data will return null
      const { data, error } = await supabase.from('smoothies').delete().eq('id', id).select()

      console.log(data)

      if (error) {
        console.error(error)
        throw new Error(error)
      }

      if (!data) {
        // IMPORTANT: do not use this validation if you aren't using .select()
        return
      }

      updateSmoothiesAfterDeletion(id)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="smoothie-card">
      <h3>{title}</h3>
      <p>{method}</p>
      <div className="rating">{rating}</div>
      <Link to={`/${id}`}>
        <i className="material-icons">edit</i>
      </Link>
      <i className="material-icons" onClick={handleDelete}>
        delete
      </i>
    </div>
  )
}
