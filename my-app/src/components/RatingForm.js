import React,{useState} from 'react';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


/** https://mui.com/material-ui/react-slider/ */


const valuetext = (value) => {
    return `${value}°C`;
  }
const RatingForm = (props)=>{
    const [value, setValue] = useState([0, 10]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      //console.log(newValue); 
     //console.log(event.target.value);
    
    };
    /**
     * this function is going to when the button is clicked submit the values to the filterRating 
     * function that is in App which will filter based on the rating ranger provided and alter the list of movies displayed
     */
    const buttonClicked =()=>{
        props.filterRating(value);
      
    }
    return (
        <div>
      <Box sx={{ width: 100 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          min={0}
          max={10}
          step={0.5}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <button type="button" onClick={buttonClicked} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search in selected range</button>
      </div>
    );
}
export default RatingForm;