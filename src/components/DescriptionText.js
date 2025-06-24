import { AUTO_REFRESH } from '../constants'

export default function DescriptionText() {
  return (
    <>
      {AUTO_REFRESH ? (
        <p className="text-muted mb-4">
          The metrics auto-update every <b>{AUTO_REFRESH / 1000} seconds</b>.
        </p>
      ) : null}
    </>
  )
}
