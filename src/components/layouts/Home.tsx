import SwiperCore, {
    Mousewheel,Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import Hello from "./Hello.tsx";

const Home = () => {
    SwiperCore.use([Mousewheel,Pagination]);

    return(
        <>
            <Swiper style={{"height": "95%"}} direction={'vertical'} slidesPerView='auto' spaceBetween={30} mousewheel={true} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide><Hello/></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Home;