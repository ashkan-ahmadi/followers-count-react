type Props = {
  setShouldAutoRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Switch({ setShouldAutoRefresh }: Props) {
  return (
    // flex-shrink-0 doesnt allow it to shrink
    <div className="form-check form-switch flex-shrink-0">
      <input className="form-check-input" type="checkbox" id="checkNativeSwitch" onChange={e => setShouldAutoRefresh(e.target.checked)} />
      <label className="form-check-label" htmlFor="checkNativeSwitch">
        Auto Refresh
      </label>
    </div>
  )
}
