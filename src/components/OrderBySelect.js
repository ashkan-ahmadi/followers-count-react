export default function OrderBySelect(props) {
  const { orderBy, setOrderBy } = props || {}

  function handleSelectChange(e) {
    setOrderBy(e.target.value)
  }

  return (
    <>
      <p>Order by:</p>
      <select name="orderBy" id="orderBy" className="form-control" onChange={handleSelectChange} value={orderBy}>
        <option disabled>Order by</option>
        <option value="created_at">Created</option>
        <option value="title">Title</option>
        <option value="rating">Rating</option>
      </select>
    </>
  )
}
