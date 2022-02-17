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
                style={{"height": "80%"}}
                direction={'vertical'}
                slidesPerView='auto'
                spaceBetween={30}
                mousewheel={true}
                pagination={{"clickable": true}}
                className="mySwiper"
                simulateTouch={true}
            >
                <SwiperSlide><Hello/></SwiperSlide>
                <SwiperSlide><Skills/></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </>
    </Root>
  );
}

export default App;
