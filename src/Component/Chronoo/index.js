import {Chrono} from 'react-chrono'
import { GrTechnology } from 'react-icons/gr'

const items = [
  {
    title: '2018',
    cardTitle: 'SSC',
    cardSubtitle: 'JMJ English Medium school',
    cardDetailedText:
      'CGPA:9.5',
  },
  {
    title: '2020',
    cardTitle: 'PUC',
    cardSubtitle: 'AP IIIT RGUKT RK VALLEY',
    cardDetailedText:
      'CGPA: 8.23',
  },
  {
    title: '2024',
    cardTitle: 'Bachelors Technology',
    cardSubtitle: 'AP IIIT RGUKT RK VALLEY \n Computer Science and Engineering',
    cardDetailedText:
      'CGPA: 8.0',
  }
]

const Chronoo = props => (
  <div className="chrono-container">
    <Chrono items={items}  mode="VERTICAL"/>
  </div>
)

export default Chronoo