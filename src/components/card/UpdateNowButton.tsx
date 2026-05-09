export default function UpdateNowButton(props) {
  const { fetchValue, isLoading } = props || {}

  return (
    <button
      className={`position-absolute top-0 end-0 btn border-0 ${!isLoading && 'btn-link'}`}
      onClick={() => {
        if (!isLoading) {
          fetchValue()
        }
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="spinner-grow spinner-grow-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <i className={`bi ${isLoading ? 'bi-hourglass-split' : 'bi-arrow-clockwise'}`}></i>
          <span className="visually-hidden">Update</span>
        </>
      )}
    </button>
  )
}
