export default function Spinner() {
  return (
    // Changed div to span since p cannot have a div as a child
    <span className="spinner-border opacity-50" role="status">
      <span className="visually-hidden">Loading</span>
    </span>
  )
}
