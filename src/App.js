import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import img1 from './Imgs/day-backside.jpg'
import img2 from './Imgs/night-side.jpg'
import img3 from './Imgs/day-side.jpg'
import img4 from './Imgs/lineup.jpg'
import img5 from './Imgs/sunset.jpg'



function App() {

  const images = [
    img1,
    img2, 
    img3, 
    img4, 
    img5
  ];


  return (
    <>
    <Navbar/>
    <Carousel images={images} />
    </>
  );
}

export default App;
