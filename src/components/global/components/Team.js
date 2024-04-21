import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

import { API_URL } from '@/config/index';

import 'aos/dist/aos.css';

export default function Team({ member }) {
  // const [active, setActive] = useState(false);

  // const handleMouseOver = () => {
  //   setActive(true);
  // };

  // const handleMouseOut = () => {
  //   setActive(false);
  // };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="lg:w-[32.19%] "
      // onMouseOut={handleMouseOut}
      // onMouseOver={handleMouseOver}
    >
      <div className="w-[100%] lg:h-[36.729rem] relative">
        <img src={`${API_URL}/storage/${member.image}`} className="w-[96.19%] relative z-[2]" alt="" />
        <div className="h-[6.4rem] w-[6.4rem] bg-[#aa0000] absolute z-[1] right-0 bottom-[-1.6rem] lg:bottom-0"></div>
      </div>
      <h4 className="font-IBMPlexMono text-[2rem] tracking-[.1rem] font-semibold mt-[4rem] ">{member.name}</h4>
      <p className="text-1.4rem font-[200] tracking-[.4rem] uppercase">{member.title}</p>
    </div>
  );
}
