import MainHero from './components/MainHero/MainHero'
import Layout from './components/Layout/Layout'
import FutureSection from './components/FutureSection/FutureSection'
import InfrastructureSection from './components/InfrastructureSection/InfrastructureSection'
import DetailsSection from './components/DetailsSection/DetailsSection'

function App() {
    return (
        <div className="App">
            <Layout>
                <MainHero />
                <FutureSection />
                <InfrastructureSection />
                <DetailsSection />
            </Layout>
        </div>
    )
}

export default App
