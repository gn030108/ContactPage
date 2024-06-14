import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row style={{padding:'10px'}}>
      <Col lg={2}>
        <img width={50} src='https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg' alt='이미지'/>
      </Col>
      <Col lg={10}>
      <div>{item.name}</div>
      <div>{item.phone}</div>
      </Col>
    </Row>
  )
}

export default ContactItem