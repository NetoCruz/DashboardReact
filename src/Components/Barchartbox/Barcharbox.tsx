
import './barcharbox.scss'
import { BarChart, Bar,  Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
  };
  

const Barcharbox =(props:Props) =>{
    return(
       <div className="barcharbox">
        <h1>{props.title}</h1>
        <div className="divchart">
            <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={props.chartData}>
          <Tooltip
          contentStyle={{backgroundColor:"#2a3447",borderRadius:'5px'}}
          labelStyle={{display:'none'}}
          cursor={{fill:'none'}}
          />
          <Bar dataKey={props.dataKey} fill={props.color}/>
        </BarChart>
      </ResponsiveContainer>
        </div>
       </div>
    )
   }
   
   export default Barcharbox

