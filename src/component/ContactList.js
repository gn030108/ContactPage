import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {

  const [filterList,setFilterList] = useState([]);
  const contactList = useSelector(state=>state.contactList)
  const word = useSelector(state=>state.word)

  useEffect(()=>{
    if(word===""){
      setFilterList(contactList)
    }else if (word!==""){
      let list = contactList.filter((item)=>item.name.includes(word));
      setFilterList(list)
    }
  },[word,contactList])

  return (
    <div>
      <SearchBox/>
      {filterList.map((item,index)=>(
        <ContactItem item={item} key={index}/>
      ))}
    </div>
  )
}

export default ContactList