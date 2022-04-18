import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Review from '../Review/Review'
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='reviews-title'>Valuable Reviews</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </Row>

        </div>
    )
}

export default Reviews