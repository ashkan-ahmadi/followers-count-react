import { Link } from 'react-router-dom'

export default function SmoothieCard(props) {
  const {
    smoothie: { id, title, method, rating },
  } = props
  return (
    <div className="smoothie-card">
      <h3>{title}</h3>
      <p>{method}</p>
      <div className="rating">{rating}</div>
      <Link to={`/${id}`}>
        <i className="material-icons">edit</i>
      </Link>
    </div>
  )
}
