import {GET_CONTACTS_LOAD, GET_CONTACT, GET_CONTACTS_FAIL,GET_CONTACTS_SUCCESS , TOGGLE_TRUE ,TOGGLE_FALSE} from "../Constants/actionsType";


const initState = {
    contact: [],
    loadContacts: false,
    errors: [],
    isEdit: false,
    user:{}
}


const contactReducer = (state = initState, { type, payload }) =>{
 
    switch (type) {
        case GET_CONTACTS_LOAD:
            return { ...state, loadContacts: true}
         case GET_CONTACTS_SUCCESS: return {
                ...state,
                contacts: payload,
                loadContacts:false
        }
        
        case GET_CONTACTS_FAIL: return {
              ...state,
               errors: payload,
               loadContacts:false
        }
        
        case TOGGLE_TRUE: return {
            ...state,
            isEdit:true
             
        }
        
        case TOGGLE_FALSE: return {
            ...state,
            isEdit: false
        }
         
        case GET_CONTACT: return {
            ...state,
            user: payload
        }

    
        default:
           return state
    }
    


}