import React,{useState} from 'react';
import Box from "@mui/material/Box";
/** https://mui.com/material-ui/react-slider/ */
import Slider from "@mui/material/Slider";


const RatingForm = (props)=>{
  //rating range
  const [value, setValue] = useState([0, 10]);

  //set labels for the rating range slider
  const ratingMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 2.5,
      label: '2.5',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 7.5,
      label: '7.5',
    },
    {
      value: 10,
      label: '10',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buttonClicked =()=>{
      props.filterRating(value);  
  }
  
  return (
        <div className="flex flex-col items-center mt-2">
          <Box sx={{ width: 150 }} className="">
            <Slider
              getAriaLabel={() => "Average Rating range"}
              value={value}
              min={0}
              max={10}
              step={0.5}
              onChange={handleChange}
              valueLabelDisplay="auto"
              marks={ratingMarks}
            />
          </Box>
          <button type="button" onClick={buttonClicked} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-4 border-b-4 border-blue-600 hover:border-blue-700 rounded-md mt-4 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0">
            Search
          </button>
      </div>
    );
}
export default RatingForm;