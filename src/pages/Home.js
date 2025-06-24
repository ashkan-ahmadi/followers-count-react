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

          {AUTO_REFRESH ? (
            <p className="text-muted mb-4">
              The metrics auto-update every <b>{AUTO_REFRESH / 1000} seconds</b>.
            </p>
          ) : null}

          <div class="alert alert-primary d-flex gap-2 align-items-center mb-4">
            <div>
              <i class="bi bi-info-circle-fill"></i>
            </div>
            <p className="mb-0">
              You can use the <code>Chrome DevTools &gt; Sensors &gt; Location</code> to override the locale and modify the number formatting.
            </p>
          </div>

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
        </section>
      </main>
    </>
  )
}

export default Home
