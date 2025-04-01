export default function Icon(props) {
  const { icon } = props || {}
  return <i className={`bi bi-${icon} align-items-center bg-light d-inline-flex feature-icon fs-5 justify-content-center mb-3 rounded-5`} style={{ width: '3rem', height: '3rem' }} aria-hidden="true"></i>
}
