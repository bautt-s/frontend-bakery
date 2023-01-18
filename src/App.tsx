import NavBar from './components/NavBar'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="App">
        <div className="h-screen flex flex-col">
          <NavBar />

          <div className="w-full grow overflow-hidden">
              <Carousel />
          </div>
        </div>
    </div>
  );
}

export default App;