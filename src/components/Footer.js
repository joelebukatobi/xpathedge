import { useEffect } from 'react';
import Container from '@/components/Container';
import Link from 'next/link';
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Footer({ footer }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" h-[100vh] bg-black text-white pt-[12rem] pb-[10.4rem]">
        <Container className={'h-[100%] flex flex-col justify-between'}>
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="lg:w-[60%] space-y-[.8rem]"
          >
            <h3 className="text-[3.2rem] md:text-[5.8rem] font-bold font-IBMPlexMono" cursor-class="overlay">
              {footer.attributes.heading}
            </h3>
            <div className="flex items-center space-x-[1.6rem]">
              <h4 className="text-[2.4rem]">
                <Link href="/contact">{footer.attributes.caption}</Link>
              </h4>
              <svg className="w-[2.4rem] h-[2.4rem]">
                <use href="/images/sprite.svg#icon-arrow" />
              </svg>
            </div>
          </div>
          <div className="space-y-[2.4rem] md:space-y-[12rem]" cursor-class="overlay">
            <div className="flex flex-col space-y-[4rem] md:space-y-[0] md:flex-row justify-between">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[27.63%] space-y-[1.6rem]"
              >
                <h4 className="text-[2.4rem] font-bold font-Mulish">{footer.attributes.email}</h4>
                <h5 className="text-[2rem]">{footer.attributes.address}</h5>
              </div>
              <ul
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-easing="ease-in-out"
                className="w-[100%] md:w-[38.6%] flex gap-x-[4rem] md:gap-x-[10.4rem] flex-wrap"
              >
                <li className="text-[2rem] md:w-[15%]">
                  <a href={`${footer.attributes.linkedin}` ?? ''}>LinkedIn</a>
                </li>
                <li className="text-[2rem] md:w-[15%]">
                  <a href={`${footer.attributes.twitter}` ?? ''}>Twitter</a>
                </li>
                <li className="text-[2rem] md:w-[15%]">
                  <a href={`${footer.attributes.behance}` ?? ''}>Behance</a>
                </li>
                <li className="text-[2rem] md:w-[15%]">
                  <a href={`${footer.attributes.instagram}` ?? ''}>Instagram</a>
                </li>
                <li className="text-[2rem] md:w-[15%]">
                  <a href={`${footer.attributes.facebook}` ?? ''}>Facebook</a>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              className="flex space-x-[4rem]"
            >
              <p className="text-[1.6rem] text-grey">Terms & Conditions</p>
              <p className="text-[1.6rem] text-grey">Privacy Policy</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
