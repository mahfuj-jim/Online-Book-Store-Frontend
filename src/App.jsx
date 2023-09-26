import './App.css'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Category from './components/category/category'
import NewRelease from './components/new_release/new_release'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <Category></Category>
      <NewRelease></NewRelease>
      <Footer></Footer>
    </div>
  )
}

export default App
