import React, { useState } from 'react'
import { Button, Col, Row,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const SearchBox = () => {

  const dispatch=useDispatch()

  const [word,setWord] = useState()

  const filter=()=>{
    dispatch({type:"filterWord", payload:{word}})
  }


  return (
    <Row>
      <Form.Label>이름 검색</Form.Label>
      <Col lg={10}>
        <Form.Control onChange={(event)=>setWord(event.target.value)} type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col lg={2}>
        <Button onClick={filter}>찾기</Button>
      </Col>
    </Row>
  )
}

export default SearchBox