import MetricBox from '../components/MetricBox'

const Home = () => {
  const cards = [
    { id: 1, heading: '@instagram', icon: 'instagram' },
    { id: 2, heading: '@tiktok', icon: 'tiktok' },
    { id: 3, heading: '@twitter', icon: 'twitter' },
  ]

  return (
    <>
      <main className="bg-body-tertiary vh-100 bg-light">
        <section className="container py-4">
          <h1 className="mb-4">Followers</h1>
          <p className="opacity-50 mb-4">The metrics are updated every 60 minutes. Next update will be in 43 minutes.</p>
          <div className="row g-4">
            {cards.length ? (
              cards.map(card => (
                <div className="col-12 col-md-6 col-xl-4 col-xxl-3 " key={card.id}>
                  <MetricBox heading={card?.heading} icon={card?.icon} />
                </div>
              ))
            ) : (
              <p>No cards found</p>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
