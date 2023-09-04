import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";
import mannu from "../../images/Ellipse8(2).png";
import akhil from "../../images/Ellipse8.png";
import rakesh from "../../images/Ellipse8(1).png";
import ariana from "../../images/ariana.png";
import { ReadCard } from "./reviewsCard";
import { VideoCard } from "./reviewsVideo";

// interface Type {
//     effect:string;
//     grabCursor:boolean;
//     centeredSlides:boolean;
//     loop:boolean;
//     slidesPerView:number;
// }

export const Reviews = () => {
    return (<div className="reviews-container">
      <div className="programs-heading">
    <h1>Get inspired by someone like you</h1>
    <p>Who is now living their dream at top-tech companies</p>
    </div>
    <div style={{paddingLeft:200, paddingRight:200}}>
        {/* @ts-ignore */}
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={2}
        coverflowEffect=
        {{
                rotate:0,
                stretch:0,
                depth:80,
                modifier:1,
            }}
            pagination={{el:'.swiper-pagination', clickable:true}}
            
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',}}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
        >
            <div className="swiper-button-prev slider-arrow"></div>
            <SwiperSlide>
                <VideoCard imgsrc={mannu} name="Mannu" career="Kaam Wali Bai" 
                content="Loh agai apki favourite kaam wali bai" 
                    video="https://www.youtube.com/embed/G0TMTsdaX40?si=LV-AFcfYoN_herRj" videoTitle="Bosscoder" link="https://www.youtube.com/@BosscoderAcademy"/>
            </SwiperSlide>
            <SwiperSlide>
                <ReadCard imgsrc={akhil} name="Akhil reddy" career="Paan Ki Dukaan" 
                content="Bhai ye company wale meri dukan se udhaar ka paan khate hain, pese ni diye mere inhon ne, jab bhi ao tou koi naya bahana, mujhe mere pese dilwa do bs kese bhi kr k, mere chote chote bache hain"/>
            </SwiperSlide>
            <SwiperSlide>
              <ReadCard imgsrc={rakesh} name="Rakesh Kumar" 
              career="Sheeda Mechanic" 
              content="Mera coding se koi taluq wasta ni hai Bhai, 
                    mien tou rasheed paiyen ki dukan pe mechanic hun, 
                    cycle k puncture k pese ni diye abhi tk inhon ne, 
                    bs wohi lene aya tha kabse mujhe idhar bitha k rakha hua hai"/>
            </SwiperSlide>
            <SwiperSlide>
            <VideoCard imgsrc={ariana} name="Ariana Grande" career="The Singer" 
            content="I Know It's Irrelevant But Who Cares ?" 
            video="https://www.youtube.com/embed/zbZY55Pkmk0?si=E4VnRCrsXm36fAc1" 
            videoTitle="7 Rings" link="https://www.youtube.com/@ArianaGrande"/>
            </SwiperSlide>
            <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </Swiper></div>
        <button className="reviews-btn">READ MORE REVIEWS</button>
    </div>)
}