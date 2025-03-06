export default function MetricBox(props) {
  const { heading, metric, iconClassName, isLoading } = props || {}

  const formatter = new Intl.NumberFormat('en-US', {
    // notation: 'compact',
    // compactDisplay: 'short',
    // style: 'decimal',
  })

  const m = formatter.format(metric)
  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="card-title">{heading}</h2>

            {isLoading ? (
              <p class="card-text placeholder-glow m-0">
                <span class="placeholder col-4 placeholder-lg fs-1"></span>
                <span className="visually-hidden">Loading...</span>
              </p>
            ) : (
              <p className="card-text fs-1 font-monospace fw-semibold m-0">{m}</p>
            )}
          </div>
          <div className="col-auto">
            <i className={`fs-1 bi bi-${iconClassName}`}></i>
          </div>
        </div>
      </div>
    </div>
  )
}
