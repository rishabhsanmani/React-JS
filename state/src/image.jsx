import { useState } from 'react'


function Img(){
    let[image,setImage] = useState('favicon.svg')
    return(
        <>
           <img src="favicon.svg" onMouseEnter={()=>setImage('favicon.svg')} alt="" height={'100px'}/>
           <img src="random1.jpg" onMouseEnter={()=>setImage('random1.jpg')} alt="" height={'100px'}/>
           <img src="random2.jpg" onMouseEnter={()=>setImage('random2.jpg')} alt="" height={'100px'}/>
           <div >
                <img src={image} height={'200px'} alt="" />
           </div>
        </>
    )
}

export default Img