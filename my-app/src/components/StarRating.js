import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export const StarRating = (props) => {
    const stars = [];
    const rating = props.rating/2;
    console.log('rating',rating)
    let fullStars = Math.floor(rating);
    console.log('fullStars', fullStars)
    let halfStar = 0;
    if (rating - fullStars > 0.7) {
        fullStars += 1;
    }
    else if (rating - fullStars >= 0.3 && rating - fullStars <= 0.7 ) {
        halfStar = 1;
    }
    console.log('halfStar', halfStar)
    const emptyStars = 5 - fullStars - halfStar;
    console.log('emptyStars', emptyStars)

    for (let i = 0; i < fullStars; i++) {
        stars.push(<BsStarFill key={i} />);
    }
    if (halfStar) {
        stars.push(<BsStarHalf key={fullStars} />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<BsStar key={i + fullStars + halfStar} />);
    }

    return <div>{stars}</div>;
    }
   