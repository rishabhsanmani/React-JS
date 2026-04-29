import image3 from './assets/img3.jpg'
import image4 from './assets/img4.jpg'


function App(){
  return(
    <>
      <img src="img1.jpg" alt="" /><br />
      <img src="img2.jpg" alt="" /><br />
      <img src={image3} alt="" /><br />
      <img src={image4} alt="" /><br />
    </>
  )
}

export default App