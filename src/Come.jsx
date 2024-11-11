import React ,{useContext} from 'react'
import Context from './Context'
const Come = () => {
    let a = useContext(Context)
    
    
  return (
    <div>come
        <h1>
            {
                a
            }
        </h1>
    </div>
  )
}

export default Come