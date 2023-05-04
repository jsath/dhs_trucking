import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import img3 from './Imgs/day-backside.jpg'
import img2 from './Imgs/day-side.jpg'
import img1 from './Imgs/sunset.jpg'



function App() {

  const images = [
    img1,
    img2, 
    img3, 
  ];


  return (
    <>
    <Navbar/>
    <Carousel images={images} />
    </>
  );
}

export default App;
