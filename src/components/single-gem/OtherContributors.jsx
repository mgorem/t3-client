import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import avatar1 from "../../assets/contributor1.jpg";
import avatar2 from "../../assets/contributor2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OtherContributors = () => {
  <input type="email" placeholder="Email" name="email" />;

  return (
    <div className="text-center bg-tertiary">
      <p className="text-primary text-2xl text-md text-bold pt-5">
        Other Contributors
      </p>
      <h1 className="md:text-4xl text-2xl mt-1 font-semibold text-primary">
        Contributors in the Gem Journey
      </h1>
      <div className="my-6 text-primary">
        <Swiper
          loop={true}
          grabCursor={true}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={30}
          slidesPerView={4}
          //   centeredSlides={true}
          pagination={{ clickable: true }}
          className="mySwiper pt-20 px-4 py-20"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-x1 rounded-lg p-8">
              <img className="w-20 mx-auto" src={avatar1} alt="avatar1" />
              <h3 className="text-tertiary font-semibold">Contributor 1</h3>
              <p className="text-rose-600  text-md">Gem Dealer</p>
              <p className="text-rose-600  text-md">Role: </p>
              <p className="text-secondary-600 text-md leading normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore nam, animi quidem eligendi temporibus iure deleniti
                saepe dolores veritatis voluptas quae labore maiores quisquam
                culpa quibusdam ullam amet ex eaque.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-x1 rounded-lg p-8">
              <img className="w-20 mx-auto" src={avatar2} alt="avatar2" />
              <h3 className="text-tertiary font-semibold">Contributor 2</h3>
              <p className="text-rose-600  text-md">Gem Buyer</p>
              <p className="text-rose-600  text-md">Role: </p>
              <p className="text-secondary-600  text-md leading normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore nam, animi quidem eligendi temporibus iure deleniti
                saepe dolores veritatis voluptas quae labore maiores quisquam
                culpa quibusdam ullam amet ex eaque.
              </p>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="flex flex-col justify-center shadow-x1 rounded-lg p-8">
              <img className="w-20 mx-auto" src={avatar3} alt="avatar3" />
              <h3 className="text-tertiary font-semibold">Contributor 3</h3>
              <p className="text-rose-600  text-md">Gem Processor</p>
              <p className="text-secondary-600  text-md leading normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore nam, animi quidem eligendi temporibus iure deleniti
                saepe dolores veritatis voluptas quae labore maiores quisquam
                culpa quibusdam ullam amet ex eaque.
              </p>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="flex flex-col justify-center shadow-x1 rounded-lg p-8">
              <img className="w-20 mx-auto" src={avatar3} alt="avatar3" />
              <h3 className="text-tertiary font-semibold">Contributor 1</h3>
              <p className="text-rose-600  text-md">Gem Cutter</p>
              <p className="text-secondary-600  text-md leading normal my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore nam, animi quidem eligendi temporibus iure deleniti
                saepe dolores veritatis voluptas quae labore maiores quisquam
                culpa quibusdam ullam amet ex eaque.
              </p>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default OtherContributors;
