import { useEffect } from 'react';

// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';

// Components
import Container from '@/global//layouts/Container';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer({ contact }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const pathname = useRouter().pathname;
  return (
    <>
      <section className=" h-full bg-[#191919] text-white pt-[12rem] pb-[10.4rem]">
        <Container className={'h-[80%] xl:h-[100%] flex flex-col justify-between'}>
          {pathname === '/careers' || pathname === '/contact' ? null : (
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="lg:w-[60%] mb-[10.4rem]"
            >
              <h3
                className="text-[3.2rem] md:text-[5.8rem] font-bold font-IBMPlexMono mb-[1.6rem] lg:mb-0"
                cursor-class="overlay"
              >
                Have an idea you’d want to execute?
              </h3>
              <div className="flex items-center space-x-[1.6rem]">
                <h4 className="text-[2.4rem]">
                  <Link href="/contact">Lets get started</Link>
                </h4>
                <svg className="w-[2.4rem] h-[2.4rem]">
                  <use href="/images/sprite.svg#icon-arrow" />
                </svg>
              </div>
            </div>
          )}

          <div className="" cursor-class="overlay">
            <div className="flex flex-col mb-[4rem] lg:mb-[8rem] md:flex-row justify-between">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[27.63%] space-y-[.8rem] lg:space-y-[1.6rem] mb-[6.4rem] lg:mb-0"
              >
                <h4 className="text-[2.4rem] font-bold font-Mulish">{contact.email}</h4>
                <h5 className="text-[2rem]">{contact.address}</h5>
                <h5 className="text-[2rem]">+1 (469) 918-4632</h5>
              </div>
              <ul
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-easing="ease-in-out"
                className="w-[100%] md:w-[38.6%] flex gap-x-[4rem] md:gap-x-[10.4rem] flex-wrap  mb-[4rem]"
              >
                <li className="text-[2rem] md:w-[15%] mb-[.8rem]">
                  <a href={`${contact.linkedin}` ?? ''}>LinkedIn</a>
                </li>
                <li className="text-[2rem] md:w-[15%] mb-[.8rem]">
                  <a href={`${contact.twitter}` ?? ''}>Twitter</a>
                </li>
                <li className="text-[2rem] md:w-[15%] mb-[.8rem]">
                  <a href={`${contact.instagram}` ?? ''}>Instagram</a>
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
              <p className="text-[1.6rem] text-[#676767]">Terms & Conditions</p>
              <p className="text-[1.6rem] text-[#676767]">Privacy Policy</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
