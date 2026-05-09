import { CardsData } from '../types/types'
import MetricCard from './card/MetricCard'

type Props = {
  cards: CardsData
  shouldAutoRefresh: boolean
  refreshRate: number
}
export default function Cards({ cards, shouldAutoRefresh, refreshRate }: Props) {
  return (
    <>
      {cards?.length ? (
        <div className="row g-4">
          {cards.map(card => (
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 " key={card.id}>
              <MetricCard heading={card?.platform} icon={card?.icon} shouldAutoRefresh={shouldAutoRefresh} refreshRate={refreshRate} />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning">No cards found</div>
      )}
    </>
  )
}
