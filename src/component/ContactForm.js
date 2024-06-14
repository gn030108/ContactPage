import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {

  const dispatch = useDispatch()
  
  const [name,setName] = useState("")
  const [phone,setPhone] = useState(0)

  const addContact = (event)=>{
    event.preventDefault();
    dispatch({type:"addContact", payload:{name,phone}})
    console.log(name,phone)
    console.log("추가")
  }

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control onChange={(event)=>setName(event.target.value)} type="text" placeholder="이름을 입력해주세요"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control onChange={(event)=>setPhone(event.target.value)} type="number" placeholder="전화번호를 입력해주세요"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm