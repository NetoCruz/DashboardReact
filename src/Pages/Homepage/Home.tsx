import Chartbox from '../../Components/Chartbox/Chartbox'
import Topbox from '../../Components/Topbox/Topbox'
import './Home.scss'
import {
   barChartBoxRevenue,
   barChartBoxVisit,
   chartBoxConversion,
   chartBoxProduct,
   chartBoxRevenue,
   chartBoxUser,
 } from "../../data";
import Barcharbox from '../../Components/Barchartbox/Barcharbox';
import PieChartBox from '../../Components/PieChartBox/pieChartBox';
import BigChartBox from '../../Components/Bigchartbox/BigChartBox';
 
const Home =() =>{
 return(
    <div className="home">
      <div className="box box1">
         <Topbox
         />
         </div>
      <div className="box box2">
         <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><Chartbox {...chartBoxConversion} /></div>
      <div className="box box6"><Chartbox {...chartBoxRevenue} /></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><Barcharbox {...barChartBoxVisit}/></div>
      <div className="box box9"><Barcharbox {...barChartBoxRevenue}/></div>
    </div>
 )
}

export default Home