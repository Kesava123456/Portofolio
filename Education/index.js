import {Chrono} from 'react-chrono'
import Navbar from '../Navbar/index.js'

import './index.css'


const items=[{title:'2020-2024'},{title:'2018-2020'},{title:'-2018'}]
  
const Education =()=>{
  return(
  <>
  <Navbar/>
    <div className='education-bg'>
    <div className="TimelineContainer">
      <div className='ResponsiveContainer'>
        <div className='HeaderContainer'>
          <div className='classHeading'>
            Education
          </div>
        </div>
        <Chrono
          theme={{
            primary:'gray',
          }}
          items={items}
          mode="VERTICAL_ALTERNATING"
        >
        <div className='education-card'>
            <h4 className='education-para'>BTech, Computer Science</h4>
            <h1 className='education-head'>Rajiv Gandhi University of Knowledge technologies, Rk valley</h1>
            <p>CGPA : 9.5/10</p>
        </div>
        <div>
            <h4  className='education-para'>PUC, Computer Science</h4>
            <h1 className='education-head'>Rajiv Gandhi University of Knowledge technologies, Rk valley</h1>
            <p>CGPA : 8.23/10</p>
        </div>
        <div>
            <h4  className='education-para'>SSC</h4>
            <h1 className='education-head'>JMJ English medium high school</h1>
            <p>CGPA : 9.5/10</p>
        </div>
        </Chrono>
      </div>
    </div>
    </div>
    )
  </>
  )
}
export default Education