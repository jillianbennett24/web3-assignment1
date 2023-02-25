import React,{useState} from 'react';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


/** https://mui.com/material-ui/react-slider/ */


const valuetext = (value) => {
    return `${value}`;
  }
const RatingForm = (props)=>{
    const [value, setValue] = useState([0, 10]);

    const ratingMarks = [
      {
        value: 0,
        label: '0',
      },
      // {
      //   value: 1,
      //   label: '1',
      // },
      // {
      //   value: 2,
      //   label: '2',
      // },
      {
        value: 2.5,
        label: '2.5',
      },
      // {
      //   value: 3,
      //   label: '3',
      // },
      // {
      //   value: 4,
      //   label: '4',
      // },
      {
        value: 5,
        label: '5',
      },
      // {
      //   value: 6,
      //   label: '6',
      // },
      // {
      //   value: 7,
      //   label: '7',
      // },
      {
        value: 7.5,
        label: '7.5',
      },
      // {
      //   value: 8,
      //   label: '8',
      // },
      // {
      //   value: 9,
      //   label: '9',
      // },
      {
        value: 10,
        label: '10',
      },
    ];
  
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
              getAriaValueText={valuetext}
              marks={ratingMarks}
              classes={{
                markLabel: {color: 'white'},
              }}
            />
          </Box>
          <button type="button" onClick={buttonClicked} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-4 border-b-4 border-blue-600 hover:border-blue-700 rounded-md mt-4 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0">
            Search
          </button>
      </div>
    );
}
export default RatingForm;