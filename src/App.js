import logo from './assets/logo.svg';
import mockups from './assets/illustration-mockups.svg';
import { TiSocialInstagramCircular, TiSocialFacebookCircular, TiSocialTwitterCircular } from "react-icons/ti";
import './App.css';

function App () {
  return (
    <>
      <div className='bg-image'></div>
      <div class="bg-image-mobile"></div>
      <img src={ logo } alt="logo" className='logo' />
      <div class="content">
        <img src={ mockups } alt="mockups" />
        <div class="content-text">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion. </p>
          <button className='btn'>Register</button>
        </div>
        <div class="social">
          <a href="/">
            <TiSocialFacebookCircular style={ { width: "50px", height: "50px" } } />
          </a>
          <a href="/">
            <TiSocialTwitterCircular style={ { width: "50px", height: "50px" } } />
          </a>
          <a href="/">
            <TiSocialInstagramCircular style={ { width: "50px", height: "50px" } } />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
