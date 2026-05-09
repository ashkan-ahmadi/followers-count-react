import { useState, useEffect } from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import AutoRefresh from './components/auto-refresh/AutoRefresh'
import { CardsData } from './types/types'

export default function Home() {
  const [shouldAutoRefresh, setShouldAutoRefresh] = useState<boolean>(false)
  const [refreshRate, setRefreshRate] = useState<number>(30)
  const [timeLeftToAutoRefresh, setTimeLeftToAutoRefresh] = useState<number>(refreshRate)
  // console.log(refreshRate)

  useEffect(() => {
    const timeNow = Date.now()
    const timeToRefresh = timeNow + refreshRate

    setTimeLeftToAutoRefresh(timeToRefresh + timeNow)
  }, [refreshRate, shouldAutoRefresh])
  return (
    <>
      <main className="bg-body-tertiary vh-100 bg-light">
        <section className="container py-4">
          <Header />

          <AutoRefresh setShouldAutoRefresh={setShouldAutoRefresh} shouldAutoRefresh={shouldAutoRefresh} setRefreshRate={setRefreshRate} refreshRate={refreshRate} />

          <div className="progress mb-3" role="progressbar" aria-label="Example with label" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: `${refreshRate}%` }}>
              {timeLeftToAutoRefresh}
            </div>
          </div>

          <Cards cards={cards} shouldAutoRefresh={shouldAutoRefresh} refreshRate={refreshRate} />
        </section>
      </main>
    </>
  )
}

// ids are fake values
const cards: CardsData = [
  { id: 1, platform: 'instagram', icon: 'instagram' },
  { id: 2, platform: 'tiktok', icon: 'tiktok' },
  { id: 3, platform: 'twitter', icon: 'twitter' },
  { id: 4, platform: 'youtube', icon: 'youtube' },
  { id: 5, platform: 'github', icon: 'github' },
  { id: 6, platform: 'linkedin', icon: 'linkedin' },
  { id: 7, platform: 'reddit', icon: 'reddit' },
  { id: 8, platform: 'threads', icon: 'threads' },
]
