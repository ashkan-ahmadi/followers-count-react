import Switch from './Switch'

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
        <p className="m-0 fw-bold">Auto refresh?</p>
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
