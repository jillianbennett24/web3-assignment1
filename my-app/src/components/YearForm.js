 import React, { useState } from "react";
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';

const YearForm =(props)=>{
    const [year, setYear] = useState('');
    const [selectValue, setSelectValue] = React.useState('');
    

   const onClick=()=>{
    props.filterYear(selectValue,year);
   }
//   useEffect( () => {

//   })
  
    return(
        <div>
            year
            <div>
                <select onChange={(e)=>{setSelectValue(e.target.value)}} >
                    <option defaultValue={null}></option>
                    <option value="Less">Less</option>
                    <option value="Greater">Greater</option>
                </select>
               
                <Datetime dateFormat="YYYY" onChange={(date) => {setYear(date.year())}} />
            </div>
            <h5>You selected {selectValue} year: {year}</h5>
            <button type="button" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded mt-2 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 " onClick={onClick}> Search By Year</button>
            
        </div>
    )
}
export default YearForm;