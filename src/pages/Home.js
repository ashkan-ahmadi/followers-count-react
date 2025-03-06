import { useEffect, useState } from 'react'
import MetricBox from '../components/MetricBox'
import MetricBoxDisabled from '../components/MetricBoxDisabled'

const Home = () => {
  const [instagramCount, setInstagramCount] = useState(0)
  const [tikTokCount, setTikTokCount] = useState(0)
  const [isLoading, setIsLoading] = useState()

  // prettier-ignore
  const urls = [
    // 'https://cors-anywhere.herokuapp.com/https://csrng.net/csrng/csrng.php?min=100&max=30000',
    // 'https://cors-anywhere.herokuapp.com/https://csrng.net/csrng/csrng.php?min=100&max=30000',
    // 'https://cors-anywhere.herokuapp.com/https://csrng.net/csrng/csrng.php',
    // 'https://cors-anywhere.herokuapp.com/https://csrng.net/csrng/csrng.php',
    // 'https://cors-anywhere.herokuapp.com/https://csrng.net/csrng/csrng.php',
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const requests = urls.map(url =>
          fetch(url, {
            headers: {
              'X-Requested-With': 'Foo',
            },
          })
            .then(response => response.json())
            .catch(error => console.error(`Error fetching ${url}:`, error))
        )

        // there is an issue with too many requests. will probably have to set up custom api myself

        Promise.allSettled(requests).then(results => {
          results.forEach((result, index) => {
            // console.log(result.value)
            if (result.status === 'fulfilled') {
              // console.log(result)
              const randomNumber = result?.value[0]?.random
              if (index === 0) setInstagramCount(randomNumber)
              if (index === 1) setTikTokCount(randomNumber)
            }
          })
        })
      } catch (error) {
        // console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // fetchData() // Fetch immediately

    // const interval = setInterval(fetchData, 3000)

    // return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  useEffect(() => {
    async function fetchD() {
      try {
        setIsLoading(true)

        setInstagramCount(prev => prev + 32353)
        setTikTokCount(prev => prev + 455)
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }

    // fetchD() // Fetch immediately

    const interval = setInterval(fetchD, 2000)
  }, [])

  return (
    <>
      <main className="bg-body-tertiary vh-100" data-bs-theme="dark">
        <section className="container py-4">
          <h1 className="text-light mb-4">Stats</h1>
          <p className="m-0 text-light opacity-50 mb-4">The metrics are updated every 1 hour. Next update will be in 43 minutes.</p>
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6 col-xxl-4">
              <MetricBox heading="@instagram" metric={instagramCount} iconClassName="instagram" isLoading={isLoading} />
            </div>
            <div className="col-12 col-md-6 col-xxl-4">
              <MetricBox heading="@tiktok" metric={tikTokCount} iconClassName="tiktok" isLoading={isLoading} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
