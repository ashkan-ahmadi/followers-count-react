import useFetchData from '../hooks/useFetchData'
import { formatNumber } from '../utils/utils'

export default function MetricCard(props) {
  const { heading, icon } = props || {}

  const { currentValue, previousValue, loading } = useFetchData()

  // defaults to user's locale
  const numberFormatter = formatNumber(undefined, {})

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="h6 fw-light">{heading}</h2>

            <p className={`card-text fs-4 fw-semibold mb-0 ${loading ? 'placeholder-glow' : ''}`}>{loading ? <span className="placeholder col-5"></span> : numberFormatter.format(currentValue)}</p>

            {/* TODO: why doesnt it work? figure out the dependency array on useFetchData */}
            <p className="small m-0">previously: {numberFormatter.format(previousValue)}</p>
          </div>
          <div className="col-auto">
            <i className={`fs-5 bi bi-${icon}`} aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
