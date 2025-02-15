export default function SmoothieCard(props) {
  const {
    smoothie: { title, method, rating },
  } = props
  return (
    <div className="smoothie-card">
      <h3>{title}</h3>
      <p>{method}</p>
      <div className="rating">{rating}</div>
    </div>
  )
}
