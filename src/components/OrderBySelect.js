export default function OrderBySelect(props) {
  const { setOrderBy } = props || {}

  function handleSelectChange(e) {
    setOrderBy(e.target.value)
  }

  return (
    <>
      <p>Order by:</p>
      <select name="orderBy" id="orderBy" className="form-control" onChange={handleSelectChange}>
        <option disabled>Order by</option>
        <option value="created_at" selected>
          Created
        </option>
        <option value="title">Title</option>
        <option value="rating">Rating</option>
      </select>
    </>
  )
}
