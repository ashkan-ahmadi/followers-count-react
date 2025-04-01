import { AUTO_REFRESH } from '../constants'
import useFetchData from '../hooks/useFetchData'
import { formatNumber, HOUR_IN_MILLISECONDS, SECOND_IN_MILLISECONDS } from '../utils/utils'
import Icon from './Icon'
import PreviousValueLine from './PreviousValueLine'
import UpdateNowButton from './UpdateNowButton'

export default function MetricCard(props) {
  const { heading, icon } = props || {}

  // by default useFetchData does NOT auto-update. Pass an optional interval time to enable and set interval rate
  const { currentValue, previousValue, loading, fetchValue } = useFetchData(AUTO_REFRESH)

  // defaults to user's locale
  const numberFormatter = formatNumber(undefined, {})
  const numberFormatterAsPercent = formatNumber(undefined, {
    style: 'percent',
    maximumFractionDigits: 2,
  })

  return (
    <div className="card border-0 shadow-sm position-relative h-100">
      <div className="card-body">
        <Icon icon={icon} />
        <h2 className="h6 fw-light mb-0">{heading}</h2>
        <p className={`card-text fs-4 fw-semibold mb-0 ${loading ? 'placeholder-glow' : ''}`}>{loading ? <span className="placeholder col-5"></span> : numberFormatter.format(currentValue)}</p>

        <PreviousValueLine previousValue={previousValue} currentValue={currentValue} numberFormatterAsPercent={numberFormatterAsPercent} />
      </div>
      <UpdateNowButton fetchValue={fetchValue} />
    </div>
  )
}
