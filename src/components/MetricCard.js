import useFetchData from '../hooks/useFetchData'
import { formatNumber, HOUR_IN_MILLISECONDS } from '../utils/utils'

export default function MetricCard(props) {
  const { heading, icon } = props || {}

  // by default useFetchData does NOT auto-update. Pass an optional interval time to enable and set interval rate
  const { currentValue, previousValue, loading, fetchValue } = useFetchData(HOUR_IN_MILLISECONDS)

  // defaults to user's locale
  const numberFormatter = formatNumber(undefined, {})
  const numberFormatterAsPercent = formatNumber(undefined, {
    style: 'percent',
    maximumFractionDigits: 2,
  })

  const changePercent = (currentValue - previousValue) / previousValue
  const positiveChange = currentValue - previousValue > 0
  const noChange = currentValue - previousValue == 0
  const negativeChange = currentValue - previousValue < 0
  const iconClass = positiveChange ? 'bi-caret-up-fill' : negativeChange ? 'bi-caret-down-fill' : noChange ? 'bi-dash' : ''
  const textColorClass = positiveChange ? 'text-success' : negativeChange ? 'text-danger' : noChange ? '' : ''
  // const changeNumber = currentValue - previousValue

  return (
    <div className="card border-0 shadow-sm position-relative h-100">
      <div className="card-body">
        <i className={`bi bi-${icon} align-items-center bg-light d-inline-flex feature-icon fs-5 justify-content-center mb-3 rounded-5`} style={{ width: '3rem', height: '3rem' }} aria-hidden="true"></i>
        <h2 className="h6 fw-light mb-0">{heading}</h2>
        <p className={`card-text fs-4 fw-semibold mb-0 ${loading ? 'placeholder-glow' : ''}`}>{loading ? <span className="placeholder col-5"></span> : numberFormatter.format(currentValue)}</p>
        {/* TODO: why doesnt it work? figure out the dependency array on useFetchData */}

        {previousValue ? (
          <>
            {/* <i className={`bi ${iconClass} ${textColorClass} me-2`} aria-hidden="true"></i> */}
            {/* {changeNumber} (previousValue: {numberFormatter.format(previousValue)}) {numberFormatterAsPercent.format(changePercent)} */}
            <p className="small m-0">
              <i className={`bi ${iconClass} ${textColorClass} me-2`} aria-hidden="true"></i>
              <span className={`${textColorClass}`}>{numberFormatterAsPercent.format(changePercent)}</span> <span className="text-muted">vs last update</span>
            </p>
          </>
        ) : (
          ''
        )}
      </div>
      <button className="position-absolute top-0 end-0 btn btn-link" onClick={() => fetchValue()}>
        <i className="bi bi-arrow-clockwise"></i>
        <span className="visually-hidden">Update now</span>
      </button>
    </div>
  )
}
