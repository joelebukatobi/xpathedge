import { useState, useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Projects({ project }) {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="space-y-[4.8rem] md:w-[75%] lg:w-[44.56%]"
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <div className="h-[60rem] w-[100%] bg-zicron relative">
        {active && (
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            className="h-[10.4rem] w-[10.4rem] md:h-[16rem] md:w-[16rem] absolute  z-10 rounded-[100%] right-[unset] left-[-3.2rem] md:left-[unset] md:right-[88.77%] bottom-[6.4rem] flex items-center justify-center cursor-pointer bg-red"
          >
            <p className="text-white text-[2rem]">
              <Link href="">View</Link>
            </p>
          </div>
        )}
      </div>
      <div className="space-y-[1.6rem]">
        <h4 className="text-[2.4rem] font-bold capitalize ">{project.attributes.name}</h4>
        <p className="text-[1.6rem]">{project.attributes.description}</p>
      </div>
    </div>
  );
}