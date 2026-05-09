import { useEffect, useState } from 'react'
import Switch from './Switch'

type Props = {
  shouldAutoRefresh: boolean
  setShouldAutoRefresh: React.Dispatch<React.SetStateAction<boolean>>
  refreshRate: number
  setRefreshRate: React.Dispatch<React.SetStateAction<number>>
}

export default function AutoRefresh({ shouldAutoRefresh, setShouldAutoRefresh, refreshRate, setRefreshRate }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(refreshRate)

  useEffect(() => {
    // Skip running a timer when auto-refresh is off.
    if (!shouldAutoRefresh) return

    // Full bar again whenever the user turns auto-refresh on or changes the interval length.
    setSecondsLeft(refreshRate)

    const id = window.setInterval(() => {
      // Drive the progress bar: 100% → 0% over refreshRate seconds, then start the next cycle.
      setSecondsLeft(prev => (prev <= 1 ? refreshRate : prev - 1))
    }, 1000)

    return () => clearInterval(id)
  }, [refreshRate, shouldAutoRefresh])

  const progressPercent = refreshRate > 0 ? Math.min(100, Math.max(0, (secondsLeft / refreshRate) * 100)) : 0

  return (
    <div className="alert alert-info">
      <div className="d-flex justify-content-between align-items-center">
        <div className="w-50">
          <p className="m-0 fw-bold">Auto refresh?</p>

          {shouldAutoRefresh && (
            <div className="progress mt-2" role="progressbar" aria-label="Seconds until next auto refresh" aria-valuenow={Math.round(progressPercent)} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%', maxWidth: '300px' }}>
              <div className="progress-bar" style={{ width: `${progressPercent}%` }}>
                {secondsLeft}s left
              </div>
            </div>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center gap-3">
          {shouldAutoRefresh && (
            <div className="input-group">
              <input
                type="number"
                min={1}
                step={1}
                className="form-control"
                placeholder="Every ... seconds"
                value={refreshRate}
                onChange={e => {
                  const value = Number(e.target.value)

                  // writing 0 or negative means non-stop running
                  if (value >= 1) {
                    setRefreshRate(value)
                  }
                }}
              />
              <span className="input-group-text" id="basic-addon2">
                seconds
              </span>
            </div>
          )}
          <Switch setShouldAutoRefresh={setShouldAutoRefresh} />
        </div>
      </div>
    </div>
  )
}
