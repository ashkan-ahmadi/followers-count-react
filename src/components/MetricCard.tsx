import useFetchData from '../hooks/useFetchData'
import { formatNumber } from '../utils/utils'
import Icon from './Icon'
import PreviousValueLine from './PreviousValueLine'
import UpdateNowButton from './UpdateNowButton'

export default function MetricCard(props) {
  const { heading, icon, shouldAutoRefresh, refreshRate } = props || {}

  // by default useFetchData does NOT auto-update. Pass an optional interval time to enable and set interval rate
  const { currentValue, previousValue, isLoading, fetchValue } = useFetchData(shouldAutoRefresh, refreshRate)

  // defaults to user's locale
  // use Chrome > Sensors > Location to override default locale
  const numberFormatter = formatNumber(undefined, {})
  const numberFormatterAsPercent = formatNumber(undefined, {
    style: 'percent',
    maximumFractionDigits: 2,
  })

  return (
    <div className={`card border-0 shadow-sm position-relative h-100`}>
      <div className="card-body">
        <Icon icon={icon} />
        <h2 className="h6 fw-light mb-0">{heading}</h2>
        <p className={`card-text fs-4 fw-semibold mb-0`}>{numberFormatter.format(currentValue)}</p>

        <PreviousValueLine previousValue={previousValue} currentValue={currentValue} numberFormatterAsPercent={numberFormatterAsPercent} />
      </div>
      <UpdateNowButton fetchValue={fetchValue} isLoading={isLoading} />
    </div>
  )
}
