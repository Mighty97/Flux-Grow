import { HeaderLogoNav } from './component/Header'
import { Content } from './component/content'
import { TrustedBy } from './component/Trustedby'
import './App.css'



function App() {
  return (
    <div className='app-container'>
      <HeaderLogoNav />
      <Content />
      <TrustedBy />
    </div>
  )
}

export default App
