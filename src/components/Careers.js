import { useEffect } from 'react';
import Container from '@/components/Container';
import Dropdown from '@/components/Dropdown';
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Career({ careers }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const options = ['design', 'engineering', 'operations'];
  return (
    <section className="bg-black text-white">
      <Container>
        <section className="space-y-[3.2rem] md:space-y-[12rem] pb-[10%] relative">
          <Dropdown name={'All'} options={options} />
          <div className="space-y-[18rem]">
            {careers.map((career) => (
              <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-easing="ease-in-out">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <h2 className="text-[4.8rem] font-bold font-IBMPlexMono" cursor-class="overlay">
                    {career.attributes.position}
                  </h2>
                  <h6 className="text-grey uppercase font-IBMPlexMono text-[1.6rem]" cursor-class="overlay">
                    REMOTE
                  </h6>
                </div>
                <p className="text-[1.8rem] md:text-[2rem] mt-[2.4rem] mb-[7.2rem]" cursor-class="overlay">
                  {career.attributes.description}
                </p>
                <div className="flex items-center space-x-[1.6rem]">
                  <a href={career.attributes.link}>
                    <p className="text-[1.8rem]">Learn More</p>
                  </a>
                  <svg className="w-[2.4rem] h-[2.4rem]">
                    <use href="/images/sprite.svg#icon-arrow" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
