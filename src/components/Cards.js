import MetricCard from './MetricCard'

export default function Cards(props) {
  const { cards } = props || {}
  return (
    <>
      {cards?.length ? (
        <div className="row g-4">
          {cards.map(card => (
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 " key={card.id}>
              <MetricCard heading={card?.heading} icon={card?.icon} />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning">No cards found</div>
      )}
    </>
  )
}
