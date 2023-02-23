import React,{useState} from 'react';

const RatingForm = (props)=>{
    const [selectedVal,setSelectValue]=React.useState('');
    const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  const handleMouseDown = event => {};
return(
    <div>
        This is gonna be the rating form
        <select onChange={(e)=>{setSelectValue(e.target.value)}} >
            <option defaultValue={null}></option>
            <option value="Less">Less</option>
            <option value="Greater">Greater</option>
        </select>
         {/* https://www.robinwieruch.de/react-slider/ */}
        <div ref={sliderRef} className="relative rounded-md bg-gray-300 h-3">
            <div ref={thumbRef} onMouseDown={handleMouseDown} className="absolute top-0 left-0 w-3 h-5 rounded-md bg-purple-600 opacity-50 cursor-pointer"></div>
        </div>
    </div>
)
}
export default RatingForm;