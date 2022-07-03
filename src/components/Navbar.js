import { useState } from 'react';
import Container from '@/components/Container';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Container className={'max-w-[100vw] fixed top-[0rem] z-[50] py-[1.6rem] bg-black'}>
      <Container className={'max-w-[144rem] w-[100%]'}>
        <section className={open ? `h-[100vh] [w-100%]` : `h-[auto] w-[100%] md:px-[3.2rem]`}>
          <div className="flex items-center justify-between h-[8.8vh]">
            <Link href="/">
              <svg className="h-[8.8rem] w-[12rem] cursor-pointer">
                <image href="/images/icon-logo.svg" />
              </svg>
            </Link>
            <div onClick={toggle} className="flex items-center cursor-pointer">
              <p className={open ? `hidden` : `font-medium text-[1.6rem] text-white text- mr-[.8rem]`}>Menu</p>
              <svg className="h-[2.4rem] w-[2.4rem] ">
                <use href={open ? `/images/sprite.svg#icon-close` : `/images/sprite.svg#icon-menu`} />
              </svg>
            </div>
          </div>
        </section>
        <section
          className={open ? `fixed h-[91.2vh] top-0 left-0 w-[100%] flex items-center mt-[8.8vh] text-white` : `hidden`}
        >
          <Container className={'h-[100%] w-[100%]'}>
            <div className="flex items-center h-[100%] w-[100%] justify-between">
              <div className="w-[38.59%] space-y-[16rem]">
                <div className="space-y-[5.6rem]">
                  <svg className="h-[13.4rem] w-[11.3rem] cursor-pointer">
                    <use href="/images/sprite.svg#logo-large-transition" />
                  </svg>
                  <div className="w-[71.59%] space-y-[1.6rem]">
                    <h4 className="text-[2.4rem] font-bold font-Mulish">hello@xpathedge.com</h4>
                    <h5 className="text-[2rem]">110 W Randol Mill Rd Suite 230 Arlington, TX 76011</h5>
                  </div>
                </div>
                <ul className=" flex gap-x-[10.4rem] gap-y-[4rem] flex-wrap">
                  <li className="text-[2rem] w-[15%]">
                    <Link href="">LinkedIn</Link>
                  </li>
                  <li className="text-[2rem] w-[15%]">
                    <Link href="">Twitter</Link>
                  </li>
                  <li className="text-[2rem] w-[15%]">
                    <Link href="">Behance</Link>
                  </li>
                  <li className="text-[2rem] w-[15%]">
                    <Link href="">Instagram</Link>
                  </li>
                  <li className="text-[2rem] w-[15%]">
                    <Link href="">Facebook</Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute h-[16rem] w-[16rem] bg-white rounded-[100%] top-[-6.3%] z-[-1] right-[72.5%]"></div>
                <ul className="space-y-[4.8rem]">
                  <li className="capitalize font-bold font-IBMPlexMono text-[7.8rem]">
                    <Link href="/work" passHref>
                      <a>
                        <span className="text-black">Wo</span>rk
                      </a>
                    </Link>
                  </li>
                  <li className="capitalize font-bold font-IBMPlexMono text-[7.8rem]">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="capitalize font-bold font-IBMPlexMono text-[7.8rem]">
                    <Link href="/careers">Career </Link>
                  </li>
                  <li className="capitalize font-bold font-IBMPlexMono text-[7.8rem]">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </Container>
  );
}
