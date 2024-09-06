import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import NotDoneYet from "./components/NotDoneYet"




const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <NotDoneYet />
      
    </main>
  )
}

export default App
