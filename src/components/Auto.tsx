type Props = {
  shouldAutoRefresh: boolean
  setShouldAutoRefresh: React.Dispatch<React.SetStateAction<boolean>>
  refreshRate: number
  setRefreshRate: React.Dispatch<React.SetStateAction<number>>
}

export default function AutoRefresh({ shouldAutoRefresh, setShouldAutoRefresh, refreshRate, setRefreshRate }: Props) {
  return (
    <div className="alert alert-info">
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <p className="m-0 fw-bold">Auto refresh?</p>
          {shouldAutoRefresh && (
            <p className="text-muted mb-0 small">
              The metrics auto-update every <b>{refreshRate} seconds</b>.
            </p>
          )}
        </div>
        <div className="">
          <div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="checkNativeSwitch" onChange={e => setShouldAutoRefresh(e.target.checked)} />
              <label className="form-check-label" htmlFor="checkNativeSwitch">
                On
              </label>
            </div>
            {shouldAutoRefresh && (
              <div>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
