import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// custom component that converts a rating out of 10 to a star rating out of 5
export const StarRating = (props) => {
    const stars = []
    const rating = props.rating/2
    // set the number of full stars based on the "whole" number of the rating
    let fullStars = Math.floor(rating)
    let halfStar = 0

    //if the remainder is greater than 0.7, add a full star
    if (rating - fullStars > 0.7) {
        fullStars += 1
    }
    //if the remainder is between 0.3 and 0.7, add a half star
    else if (rating - fullStars >= 0.3 && rating - fullStars <= 0.7 ) {
        halfStar = 1
    }
    //calculate the number of empty stars needed
    const emptyStars = 5 - fullStars - halfStar
    
    //create an array of stars based on the number of full, half, and empty stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<BsStarFill key={i} />)
    }
    if (halfStar) {
        stars.push(<BsStarHalf key={fullStars} />)
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<BsStar key={i + fullStars + halfStar} />)
    }

    // return the array of stars embedded in html
    return <span className='flex justify-between'>{stars.map(star => <span className='mr-1'>{star}</span>)}</span>
    }
   