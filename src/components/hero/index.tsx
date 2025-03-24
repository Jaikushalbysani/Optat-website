"use client"
import React, { useRef } from 'react';
import Bgsec from './bgsec';
import './index.css';
import Beams from './beams';  
import Hyper from './hyper';
import Marq from './marq';
import Background from './Background';
//import Border from './border';
import Contact from './Contact';

const oa = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738530548/oa_iruyx1.png';
const logo = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738526591/logocir_naxk2q.png';
const f2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738526946/f2_izfidg.png';
const f1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1738526781/wrkf1_mdt0kr.png';
const mf2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740585671/mf1_euzhlb.png';
const mf1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740585673/mf2_ml24nk.png';

export default function Homepage() {
    // Refs for different sections
    const automationsRef = useRef<HTMLDivElement | null>(null);
    const brandingRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    // Function to scroll to section
    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <Background />

            

            {/* Navbar with smooth scrolling */}
            <div className="navcon">
                <div className="navbar">
                    <img src={logo} alt="Logo" />
                    <h2 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</h2>
                    <h2 onClick={() => scrollToSection(automationsRef)}>Automations</h2>
                    <h2 onClick={() => scrollToSection(brandingRef)}>Branding</h2>
                    <h2 onClick={() => scrollToSection(contactRef)}>Contact</h2>
                </div>
            </div>

            <div className="title">
                    <h1>OPTAT</h1>
                </div> 

            {/* Sections */}
            <div className="retro">
                <Bgsec />

                <div className="bgsec">
                    
                </div>
            </div>    

  

            <div className="heroname">
                <Hyper />
                <img src={oa} alt="Hero" />
                <button>Unlock Possibilities!</button>
            </div>

            <div className="para">
                <p>Revolutionize your business with AI solutions. Automate, grow, and succeed — Say hello to the future of efficiency.</p>
            </div>
            <div ref={automationsRef} className="section">
            
            <div className="beamss">
            <div className="beams">
                <Beams />
            </div>
            </div>

          
            <div className="f1">
                <img src={f1} alt="Feature 1" />
            </div>
            <div className="f2">
                <img src={f2} alt="Feature 2" />
            </div>

            <div className="mf1">
                <img src={mf1} alt="Feature m1" />
            </div>
            <div className="mf1">
                <img src={mf2} alt="Feature m2" />
            </div>


            {/* Automations Section */}
            

                {/*<Border />*/}

            </div>

            {/* Branding Section */}

            <div className="testi">
            <Marq />
            </div>

            {/* Contact Section */}
            <div ref={contactRef} className="section contact">
                <Contact />
                <div className="icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is2_ftzlbe.png" alt="Instagram" />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is1_jqjcx7.png" alt="WhatsApp" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is3_p70kjl.png" alt="Twitter" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/ds18h1q0k/image/upload/v1738612113/is4_mbm74g.png" alt="YouTube" />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <h1>Copyright © Designed & Developed by Optat.work</h1>
            </div>
        </div>
    );
}
