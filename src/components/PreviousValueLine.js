export default function PreviousValueLine(props) {
  const { previousValue, currentValue, numberFormatterAsPercent } = props || {}

  const changePercent = (currentValue - previousValue) / previousValue
  const isPositiveChange = currentValue - previousValue > 0
  const isNoChange = currentValue - previousValue == 0
  const isNegativeChange = currentValue - previousValue < 0
  const iconClass = isPositiveChange ? 'bi-caret-up-fill' : isNegativeChange ? 'bi-caret-down-fill' : isNoChange ? 'bi-dash' : ''
  const textColorClass = isPositiveChange ? 'text-success' : isNegativeChange ? 'text-danger' : isNoChange ? '' : ''

  // we don't want to display anything if there is nothing from before
  if (!previousValue) {
    return null
  }

  return (
    <>
      <p className="small m-0">
        <i className={`bi ${iconClass} ${textColorClass} me-2`} aria-hidden="true"></i>
        <span className={`${textColorClass}`}>{numberFormatterAsPercent.format(changePercent)}</span> <span className="text-muted">vs last update</span>
      </p>
    </>
  )
}
