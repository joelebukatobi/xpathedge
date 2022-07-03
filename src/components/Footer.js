import Container from '@/components/Container';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className=" h-[100vh] bg-black text-white pt-[12rem] pb-[10.4rem]">
      <Container className={'h-[100%] flex flex-col justify-between'}>
        <div className="w-[60%] space-y-[.8rem]">
          <h3 className="text-[5.8rem] font-bold font-IBMPlexMono">Have an idea you’d want to execute?</h3>
          <div className="flex items-center space-x-[1.6rem]">
            <h4 className="text-[2.4rem]">Let's get started</h4>
            <svg className="w-[2.4rem] h-[2.4rem]">
              <use href="/images/sprite.svg#icon-arrow" />
            </svg>
          </div>
        </div>
        <div className=" space-y-[12rem]">
          <div className="flex justify-between">
            <div className="w-[27.63%] space-y-[1.6rem]">
              <h4 className="text-[2.4rem] font-bold font-Mulish">hello@xpathedge.com</h4>
              <h5 className="text-[2rem]">110 W Randol Mill Rd Suite 230 Arlington, TX 76011</h5>
            </div>
            <ul className="w-[38.6%] flex gap-x-[10.4rem] flex-wrap">
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
          <div className="flex space-x-[4rem]">
            <p className="text-[1.6rem] text-grey">Terms & Conditions</p>
            <p className="text-[1.6rem] text-grey">Privacy Policy</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
