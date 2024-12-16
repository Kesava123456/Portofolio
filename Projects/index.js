import {Chrono} from 'react-chrono'
import Navbar from '../Navbar/index.js'

import './index.css'


const items=[{title:'Nxt Trendz',cardTitle: "Go to web",  url:"https://kkesava.ccbp.tech/login"},
  {title:'Online Event Booking platform'},{title:'Shoppers Stop'}]
  
const Projects =()=>{
    return(
    <>
    <Navbar/>
    <div className='education-bg'>
    <div className="TimelineContainer">
      <div className='ResponsiveContainer'>
        <div className='HeaderContainer'>
        </div>
        <Chrono
          theme={{
            titleColor: 'White',
          }}
          items={items} 
          mode="VERTICAL"
        >
       <div>
            <h1  className='education-para'>E-Commerse Applicatoin</h1>
            <ul>
              <li>FrontEnd Tech :</li>
              <ul>
              <li>Html, Css, Javscript, React js</li>
              </ul>
              <li>BackEnd Tech :</li>
              <ul>
              <li>RESP API's</li>
              </ul>
            </ul>
            <ul>
              <li>Technologies I used were HTML, CSS, Bootstrap, react .js, SQL, and Node.js</li>
            </ul>
        </div>
        <div>
            <h1  className='education-para'>Online Event Booking platform</h1>
            <ul>
              <li>FrontEnd Tech :</li>
              <ul>
              <li>Html, Css, Javscript, React js</li>
              </ul>
              <li>BackEnd Tech :</li>
              <ul>
              <li>SQL, Node js</li>
              </ul>
            </ul>
            <ul>
              <li>Technologies I used were HTML, CSS, Bootstrap, react .js, SQL, and Node.js</li>
            </ul>
        </div>
        <div>
            <h1  className='education-para'>E-commerce Application</h1>
            <ul>
              <li>To build this Application, i used Web technologies.</li>
              <li>This is Clothing e commerce Webiste developed by web technologies, providing lot of
              mens fahions,and users can easily order.</li>
            </ul>
        </div>
        
        </Chrono>
      </div>
    </div>
    </div>
   
    </>
    )
}
export default Projects