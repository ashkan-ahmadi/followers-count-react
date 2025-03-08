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
  })

  const changePercent = (currentValue - previousValue) / previousValue
  const positiveChange = currentValue - previousValue > 0
  const noChange = currentValue - previousValue == 0
  const negativeChange = currentValue - previousValue < 0
  const iconClass = positiveChange ? 'bi-caret-up-fill' : negativeChange ? 'bi-caret-down-fill' : noChange ? 'bi-dash' : ''
  const textColorClass = positiveChange ? 'text-success' : negativeChange ? 'text-danger' : noChange ? '' : ''
  // const changeNumber = currentValue - previousValue

  return (
    <div className="card border-0 shadow-sm position-relative">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="h6 fw-light">{heading}</h2>
            <p className={`card-text fs-4 fw-semibold mb-0 ${loading ? 'placeholder-glow' : ''}`}>{loading ? <span className="placeholder col-5"></span> : numberFormatter.format(currentValue)}</p>
            {/* TODO: why doesnt it work? figure out the dependency array on useFetchData */}

            {previousValue ? (
              <>
                {/* <i className={`bi ${iconClass} ${textColorClass} me-2`} aria-hidden="true"></i> */}
                {/* {changeNumber} (previousValue: {numberFormatter.format(previousValue)}) {numberFormatterAsPercent.format(changePercent)} */}
                <i className={`bi ${iconClass} ${textColorClass} me-2`} aria-hidden="true"></i>
                {numberFormatterAsPercent.format(changePercent)} vs last update
              </>
            ) : (
              ''
            )}
          </div>
          <div className="col-auto">
            <i className={`fs-5 bi bi-${icon}`} aria-hidden="true"></i>
          </div>
        </div>
        <button className="position-absolute top-0 end-0 btn btn-link" onClick={() => fetchValue()}>
          <i className="bi bi-arrow-clockwise"></i>
          <span className="visually-hidden">Update now</span>
        </button>
      </div>
    </div>
  )
}
