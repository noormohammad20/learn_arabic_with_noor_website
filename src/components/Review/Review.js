import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './Review.css'
const Review = ({ review }) => {
    const { img, name, address, description } = review

    return (
        <Col>
            <Card className='card'>
                <Card.Img
                    style={{ height: '90px', width: '90px' }}
                    className='img-fluid rounded-circle img-thumbnail mx-auto' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{address}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Review