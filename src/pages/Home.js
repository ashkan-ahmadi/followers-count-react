import Cards from '../components/Cards'
import DescriptionText from '../components/DescriptionText'
import Header from '../components/Header'
import InfoAlertBox from '../components/InfoAlertBox'

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
          <Header />

          <DescriptionText />

          <InfoAlertBox />

          <Cards cards={cards} />
        </section>
      </main>
    </>
  )
}

export default Home
