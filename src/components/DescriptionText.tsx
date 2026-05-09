export default function DescriptionText({ refreshRate }) {
  return (
    <>
      <p className="text-muted mb-4">
        The metrics auto-update every <b>{refreshRate} seconds</b>.
      </p>
    </>
  )
}
