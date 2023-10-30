import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import { FreeMode, Pagination } from 'swiper';

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Craft a compelling brand identity that resonates with your audience and sets you apart in the digital landscape.',
    link: '/contact', // Add the link for the "Branding" page here
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Create visually stunning designs that captivate and leave a lasting impression on your digital platforms.',
    link: '/contact', // Add the link for the "Design" page here
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Bring your digital vision to life with our expert web and app development services, ensuring functionality and user-friendliness.',
    link: '/contact', // Add the link for the "Development" page here
  },
  {
    icon: <RxRocket />,
    title: 'Digital Marketing',
    description: 'Drive online growth and engagement through strategic digital marketing campaigns that deliver results.',
    link: '/contact', // Add the link for the "Digital Marketing" page here
  },
  {
    icon: <RxReader />,
    title: 'SEO',
    description: 'Boost your online visibility and reach your target audience with our strategic SEO solutions.',
    link: '/contact', // Add the link for the "SEO" page here
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={item.link}>
              <div className='bg-[rgba(0,0,0,0.37)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(0,0,0,0.6)] transition-all duration-300'>
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

