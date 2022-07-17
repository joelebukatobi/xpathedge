import { useEffect } from 'react';
import Container from '@/components/Container';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function Services({ works }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <section className="pt-[10.4rem] pb-[16rem] space-y-[16rem] lg:space-y-[7.2rem]">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className="flex items-center space-x-[1.6rem]"
        >
          <p className="uppercase text-[2.2rem] font-black tracking-[.8rem]">Our Services</p>
          <hr className="h-[.2rem] w-[32rem] bg-black border-none" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          className="flex flex-wrap gap-y-[8rem]  justify-center lg:justify-between w-[100%]"
        >
          {works.map((service) => (
            <div className="space-y-[.8rem] lg:space-y-[4.8rem] md:w-[75%] lg:w-[48%]">
              <h2 className="text-[4rem] lg:text-[6.8rem] font-IBMPlexMono font-bold ">{service.attributes.service}</h2>
              <p className=" text-[1.6rem] md:w-[81.6%]">{service.attributes.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
