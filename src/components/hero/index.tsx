import React from 'react'
import Bgsec from './bgsec'
import './index.css'
import Beams from './beams';  
import Hyper from './hyper';
import Marq from './marq';
import Background from './Background';
import Border from './border'
const oa = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738530548/oa_iruyx1.png';
const logo = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738526591/logocir_naxk2q.png';
const f2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738526946/f2_izfidg.png';
const f1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738526781/wrkf1_mdt0kr.png';


export default function Homepage() {
    return (
        <div className="hero">
            <Background></Background>
            <div className="navcon">
            <div className="navbar">
                <img src={logo} alt="" />
                <h2>Home</h2>
                <h2>Automations</h2>
                <h2>Branding</h2>
                <h2>Contact</h2>
            </div> 
            </div>


            <div className="retro">
                <Bgsec />

                <div className="bgsec">
                    
                </div>
            </div>       

            <div className="heroname">
                <Hyper/>
                <img src={oa} alt="" />
                <button>Unlock Possibilities!</button>

            </div>

            <div className="para">
                <p>Revolutionize your business with AI solutions. Automate, grow, and succeed — Say hello to the future of efficiency.</p>
            </div>

            <div className="beams">
                <Beams/>
            </div>

            <div className="f1">
                <img src={f1} alt="" />
            </div>
            <div className="f2">
                <img src={f2} alt="" />
            </div>
 
            <div className="notion">
                <Border/>
            </div>

            <div className="test">
                <Marq/>
            </div>

            <div className="contact">
                <h2>Contact us</h2>

                        <div className="icons">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is2_ftzlbe.png" alt="" />
                            </a>
                            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is1_jqjcx7.png" alt="" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is3_p70kjl.png" alt="" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is4_mbm74g.png" alt="" />
                            </a>
                </div>
            </div>

            <div className="footer">
                <h1>Copyright©Designed & Developed by Optat.work</h1>
            </div>

        </div>


    )
}
