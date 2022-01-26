import * as React from "react";
import SwiperCore, {
    Mousewheel, Navigation, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import Hello from "./Hello.tsx";

const Home = (props) => {

    SwiperCore.use([Mousewheel,Pagination, Navigation]);
    return(
        <>
            <Swiper
                onSwiper={props.setSwiper}
                style={{"height": "95%"}}
                direction={'vertical'}
                slidesPerView='auto'
                spaceBetween={30}
                mousewheel={true}
                pagination={{"clickable": true}}
                className="mySwiper"
                simulateTouch={true}
            >
                <SwiperSlide><Hello/></SwiperSlide>
                <SwiperSlide><button onClick={() => {
                    props.swiper.slideTo(2);
                }}/></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Home;