import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Product from './components/Product'
import Footer from './components/footer'
import About from './about'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
  <Navbar />
  <Search />
  <Product />
  <About />
  <Footer />
  </>
)