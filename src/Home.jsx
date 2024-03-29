import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <nav className="navbar">
        <img src='../logo.png' />
        <div>
            <p className='title'>C.R.I FLUID SYSTEM</p>
            <p className='desc'>Pumping trust. Worldwide</p>
        </div>
      </nav>
      <div className='main'>
        <img className='trophy' src='../trophy.png' />
        <div className='maindiv'>
            <p><b>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
            <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>
                    C.R.I is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.
                </li>
            </ul>
            <img className="photo" src='../photo.jpg' />
            <p>
                Government of india has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I Group received the award from smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
        </div>
      </div>
      <div className='twomain' style={{textAlign: "center"}}>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</p>
        <img className='product' src='../product.png' />
        <p>Valves-Pumps-Pipes-IoT Drivers & Controllers-Wires & Cables-Solar System-Motors</p>
      </div>
      <div style={{textAlign: "center"}} className="footer">
      <hr style={{backgroundColor: "red"}} />
        <p><b>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
        <p>CHEMICALS & PROCESS|POWER|WATER & WASTE WATER|OILS & GAS|PHARMA|SUGAR & DISTILLERIES|PAPER & PULP|MARINE & DEFENCE|METAL & MINING|FOOD & BEVERAGE|PETROCHEMICAL & REFINERIES|SOLAR|BUILDING|HVAC|FIRE FIGHTING|AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className="threemain">
        <div className="call">
          <i className="fa-solid fa-square-phone"></i>
          <p>Toll free 1800 200 1234</p>
        </div>
        <div className="facebook">
          <i className="fa-brands fa-square-facebook"></i>
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="website">
          <i className="fa-solid fa-globe"></i>
          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  )
}

export default Home
