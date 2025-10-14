import NextIcon from '../assets/next icon.png'
import MegaPhoneIcon from '../assets/megaphone icon.png'

export function Content() {
  return (
    <div className="content-container" >  
      <div className="next-container" >
        <img src={MegaPhoneIcon} alt="" />
        <p className="next-text" >Now supporting Next.Js 15.4</p>
        <img src={NextIcon} alt="" />
      </div>
      <div className='header-text' >
        <h1>Grow Organically Without Doing Anything</h1>
      </div>
      <div className='paragraph-text' >
        <p>Flux grow is an autonomous content engine that delivers full blog optimization without any manual input, freeing businesses to focus on what matters.</p>
      </div>
      <div className='content-buttons' >
        <button>Start your Project</button>
          <button>Request a Demo<img src={NextIcon} alt="" /></button>
      </div>
    </div>
  )
}