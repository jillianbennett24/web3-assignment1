 import React, { useState } from "react";
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';

const YearForm =(props)=>{
    const [year, setYear] = useState('');
    const [selectValue, setSelectValue] = React.useState("");
    

    // const handleChange =(e)=>{
    //     const value = e.target.value;
    //   setSelectValue(value);
    // }
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
            {props.filterYear(selectValue,year)}
        </div>
    )
}
export default YearForm;