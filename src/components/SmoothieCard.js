import { Link } from 'react-router-dom'
import supabase from '../config/supabaseConfig'

export default function SmoothieCard(props) {
  const {
    smoothie: { id, title, method, rating },
  } = props

  async function handleDelete() {
    try {
      const { data, error } = await supabase.from('smoothies').delete().eq('id', id).select()

      if (error) {
        console.error(error)
        throw new Error(error)
      }

      if (!data) {
        return
      }

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
