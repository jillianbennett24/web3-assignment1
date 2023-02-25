 import React, { useState } from "react";
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';

const YearForm =(props)=>{
    const [year, setYear] = useState('');
    const [selectValue, setSelectValue] = React.useState('');
    
    const datetimeProps = {
        placeholder: "Year",
        className: "w-16 border-2 border-slate-400 rounded-md p-2 mb-2",
        width: "20px",
        borderRadius: "4px",
    }

   const onClick=()=>{
    props.filterYear(selectValue,year);
   }
//   useEffect( () => {

//   })
  
    return(
        <div className="flex flex-col items-center">
            <div className="block mb-2 text-gray-400">Year:</div>
            <div className="flex flex-col items-center">
                <select onChange={(e)=>{setSelectValue(e.target.value)}} className="border-2 border-slate-400 rounded-md p-2 mb-2">
                    <option defaultValue={null}></option>
                    <option value="Before">Before</option>
                    <option value="After">After</option>
                </select>
               
                <Datetime dateFormat="YYYY" timeFormat={false} onChange={(date) => {setYear(date.year())}}  inputProps={datetimeProps}/>
            </div>
            {/* <h5>You selected {selectValue} year: {year}</h5> */}
            <button type="button" 
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-4 border-b-4 border-blue-600 hover:border-blue-700 rounded-md mt-4 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 " 
                onClick={onClick}> 
                Search By Year
            </button>
            
        </div>
    )
}
export default YearForm;