// React
import { useEffect, useState } from 'react';

// Next JS
import Link from 'next/link';

// Components
import Container from '@/global//layouts/Container';
import Dropdown from '@/global//components/Dropdown';

// AOS
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Career({ careers }) {
  useEffect(() => {
    AOS.init();
  }, []);
  //
  const options = ['design', 'engineering', 'operations'];
  const [selectedOption, setSelectedOption] = useState(null);
  //
  const filterCareers = (option) => {
    if (!option || option === 'All') {
      return careers; // Return all careers if nothing is selected or 'All' is selected
    } else {
      return careers.filter((position) => position.category.toLowerCase() === option.toLowerCase());
    }
  };
  //
  const filteredCareers = filterCareers(selectedOption);
  //
  return (
    <section className="bg-[#191919] text-white">
      <Container>
        <section className="space-y-[3.2rem] md:space-y-[12rem] pb-[10%] relative">
          <Dropdown name={'All'} options={options} option={selectedOption} select={setSelectedOption} />
          <div className="space-y-[18rem]">
            {filteredCareers.map((position) => (
              <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-easing="ease-in-out">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <h2 className="text-[4.8rem] font-bold font-IBMPlexMono" cursor-class="overlay">
                    {position.name}
                  </h2>
                  <h6 className="text-[#676767] uppercase font-IBMPlexMono text-[1.6rem]" cursor-class="overlay">
                    REMOTE
                  </h6>
                </div>
                <p className="text-[1.8rem] md:text-[2rem] mt-[2.4rem] mb-[7.2rem]" cursor-class="overlay">
                  {position.role}
                </p>
                <div className="flex items-center space-x-[1.6rem]">
                  <Link href={`/careers/${position.slug}`}>
                    <p className="text-[1.8rem]">Learn More</p>
                  </Link>
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
