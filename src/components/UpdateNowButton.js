export default function UpdateNowButton(props) {
  const { fetchValue } = props || {}

  return (
    <button className="position-absolute top-0 end-0 btn btn-link" onClick={() => fetchValue()}>
      <i className="bi bi-arrow-clockwise"></i>
      <span className="visually-hidden">Update now</span>
    </button>
  )
}
