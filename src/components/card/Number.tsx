import NumberFlow from '@number-flow/react'

type Props = {
  value: number
  className: string
}

export default function Number({ value, className }: Props) {
  return <NumberFlow value={value} className={className} />
}
