import useFetchData from '../hooks/useFetchData'
import Spinner from './Spinner'

export default function MetricBox(props) {
  const { heading, icon } = props || {}

  const { number, loading } = useFetchData()

  const formatter = new Intl.NumberFormat('en-US', {
    // notation: 'compact',
    // compactDisplay: 'short',
    // style: 'decimal',
  })

  const metric = formatter.format(number)

  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="card-title">{heading}</h2>

            <p className="card-text fs-1 font-monospace fw-semibold">{loading ? <Spinner /> : metric}</p>
          </div>
          <div className="col-auto">
            <i className={`fs-1 bi bi-${icon}`}></i>
          </div>
        </div>
      </div>
    </div>
  )
}
