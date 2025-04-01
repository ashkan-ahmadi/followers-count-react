import MetricCard from '../components/MetricCard'
import { AUTO_REFRESH } from '../constants'

const Home = () => {
  // ids are fake values
  const cards = [
    { id: 1, heading: '@instagram', icon: 'instagram' },
    { id: 2, heading: '@tiktok', icon: 'tiktok' },
    { id: 3, heading: '@twitter', icon: 'twitter' },
    { id: 4, heading: '@youtube', icon: 'youtube' },
    { id: 5, heading: '@github', icon: 'github' },
    { id: 6, heading: '@linkedin', icon: 'linkedin' },
    { id: 7, heading: '@reddit', icon: 'reddit' },
    { id: 8, heading: '@threads', icon: 'threads' },
  ]

  return (
    <>
      <main className="bg-body-tertiary vh-100 bg-light">
        <section className="container py-4">
          <h1 className="mb-4">Followers</h1>

          {AUTO_REFRESH ? <p className="text-muted mb-4">The metrics auto-update every {AUTO_REFRESH / 1000} seconds.</p> : null}

          <div className="row g-4">
            {cards.length ? (
              cards.map(card => (
                <div className="col-12 col-md-6 col-xl-4 col-xxl-3 " key={card.id}>
                  <MetricCard heading={card?.heading} icon={card?.icon} />
                </div>
              ))
            ) : (
              <div className="alert alert-warning">No cards found</div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
