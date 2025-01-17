import 'bootstrap/dist/css/bootstrap.min.css'
import MeteoNav from './components/MeteoNav'
import MeteoFooter from './components/MeteoFooter'
import MeteoSearch from './components/MeteoSearch'
import MeteoMainSection from './components/MeteoMainSection'

function App() {


  return (
    <>
      <MeteoNav />
      <MeteoSearch/>

      <MeteoMainSection />

      <MeteoFooter />
    </>
  )
}

export default App
