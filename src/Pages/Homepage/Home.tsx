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
      <div className="box box4">Chartbox</div>
      <div className="box box5"><Chartbox {...chartBoxConversion} /></div>
      <div className="box box6"><Chartbox {...chartBoxRevenue} /></div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
 )
}

export default Home