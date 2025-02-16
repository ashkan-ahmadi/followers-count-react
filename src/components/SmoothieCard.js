import { Link } from 'react-router-dom'
import supabase from '../config/supabaseConfig'
import { showErrorToast, showSuccessToast } from '../utils/utils'

export default function SmoothieCard(props) {
  const {
    smoothie: { id, title, method, rating },
    updateSmoothiesAfterDeletion,
  } = props

  async function handleDelete() {
    try {
      // IMPORTANT: if you do not use .select(), data will return null
      const response = await supabase.from('smoothies').delete().eq('id', id).select()

      const { data, error } = response || {}

      console.log(response)

      if (error) {
        console.error(error)
        throw new Error(error?.message)
      }

      if (!data) {
        // IMPORTANT: do not use this validation if you aren't using .select()
        return
      }

      showSuccessToast('Deleted successfully')

      // update the UI
      updateSmoothiesAfterDeletion(id)
    } catch (error) {
      showErrorToast('There was an error. Please try again.')
      console.error(error)
    }
  }
  return (
    <div className="smoothie-card">
      <h3>{title}</h3>
      <p>{method.length > 200 ? `${method.substring(0, 200)}...` : method}</p>
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
