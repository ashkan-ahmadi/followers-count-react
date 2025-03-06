import MetricBox from '../components/MetricBox'

const Home = () => {
  const cards = [
    { id: 1, heading: '@instagram', icon: 'instagram' },
    { id: 2, heading: '@tiktok', icon: 'tiktok' },
    { id: 3, heading: '@twitter', icon: 'twitter' },
  ]

  return (
    <>
      <main className="bg-body-tertiary vh-100" data-bs-theme="dark">
        <section className="container py-4">
          <h1 className="text-light mb-4">Followers</h1>
          <p className="text-light opacity-50 mb-4">The metrics are updated every 60 minutes. Next update will be in 43 minutes.</p>
          <div className="row g-4">
            {cards.length
              ? cards.map(card => (
                  <div className="col-12 col-md-6 col-xxl-4" key={card.id}>
                    <MetricBox heading={card?.heading} icon={card?.icon} />
                  </div>
                ))
              : 'No cards found'}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
