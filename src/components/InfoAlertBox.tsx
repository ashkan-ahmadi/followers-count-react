export default function InfoAlertBox() {
  return (
    <div className="alert alert-primary d-flex gap-2 align-items-center mb-4">
      <div>
        <i className="bi bi-info-circle-fill"></i>
      </div>
      <p className="mb-0">
        You can use the <code>Chrome DevTools &gt; Sensors &gt; Location</code> to override the locale and modify the number formatting.
      </p>
    </div>
  )
}
