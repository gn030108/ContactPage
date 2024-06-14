let initialState = {
  contactList : [],
  word : "",
};


function reducer (state=initialState,action){
  const {type,payload}=action
  switch(type){
    case "addContact" : 
      return {
        ...state, 
        contactList:[
          ...state.contactList,
            {
              name:payload.name, 
              phone:payload.phone
            },
          ]
      }
    case "filterWord" :
      return {...state,word:payload.word}
    default:
      return {...state}
  }

}

export default reducer