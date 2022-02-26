import * as React from "react";
import "swiper/css";
import "swiper/css/pagination"
import Navbar from './components/Navbar.jsx';
import styled from 'styled-components';
import './App.css';
import {useState} from "react";
import SwiperCore, {Mousewheel, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Hello from "./components/layouts/Hello.jsx";
import Skills from "./components/layouts/Skills";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";


const Root = styled.div`
    background-color: #13171C;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: aliceblue;
`;

function App() {
  SwiperCore.use([Mousewheel,Pagination, Navigation]);
  const [swiper, setSwiper] = useState(0);

  function swipe(slide){
      swiper.slideTo(slide);
  }

  return (
    <Root>
      <Navbar swipe={swipe}/>
        <>
            <Swiper
                onSwiper={setSwiper}
                style={{"height": "90%"}}
                direction={'vertical'}
                slidesPerView='auto'
                spaceBetween={30}
                mousewheel={true}
                pagination={{"clickable": true}}
                className="mySwiper"
            >
                <SwiperSlide><Hello/></SwiperSlide>
                <SwiperSlide><Skills/></SwiperSlide>
                <SwiperSlide><Projects/></SwiperSlide>
                <SwiperSlide><Contact/></SwiperSlide>
            </Swiper>
        </>
    </Root>
  );
}

export default App;
