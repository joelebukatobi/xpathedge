import { useState } from 'react';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

export default function index({ heading, text }) {
  const [active, setActive] = useState(false);
  return (
    <Layout>
      <Header
        heading={'Imagination is the only limitation'}
        text={`Tailor-made technological solutions, creative expressions, and flawless executions. Let’s disrupt the norm,
            together.`}
      />

      <Container className={'max-width w-[100%]'}>
        <section className="space-y-[12rem] py-[18rem] w-[100%] flex flex-col items-center relative">
          <div className="flex items-center space-x-[1.6rem] max-w-[114rem] w-[100%]">
            <p className="uppercase text-[2.2rem] font-black tracking-[.8rem]">Projects</p>
            <hr className="h-[.2rem] w-[32rem] bg-black border-none" />
          </div>
          <div className="flex justify-between max-w-[114rem]">
            <div className="space-y-[4.8rem] w-[44.56%]">
              <div
                className="h-[60.3rem] w-[100%] bg-zicron relative"
                onMouseOver={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
              >
                {active && (
                  <div className="h-[16rem] w-[16rem] absolute  z-10 rounded-[100%] right-[88.77%] bottom-[6.4rem] flex items-center justify-center bg-red">
                    <p className="text-white text-[2rem]">View</p>
                  </div>
                )}
              </div>
              <div className="space-y-[1.6rem]">
                <h4 className="text-[2.4rem] font-bold capitalize ">Campus Manager</h4>
                <p className="text-[1.6rem]">
                  The Campus Manager (TCM) is a flagship product of XPathEdge Solutions which covers all phases of a
                  student’s life cycle at an institute of learning; from admission to graduation, and beyond.
                </p>
              </div>
            </div>
            <div className="space-y-[4.8rem] w-[44.56%]">
              <div
                className="h-[60.3rem] w-[100%] bg-zicron relative"
                onMouseOver={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
              >
                {active && (
                  <div className="h-[16rem] w-[16rem] absolute  z-10 rounded-[100%] right-[88.77%] bottom-[6.4rem] flex items-center justify-center bg-red">
                    <p className="text-white text-[2rem]">View</p>
                  </div>
                )}
              </div>
              <div className="space-y-[1.6rem]">
                <h4 className="text-[2.4rem] font-bold capitalize ">Campus Manager</h4>
                <p className="text-[1.6rem]">
                  The Campus Manager (TCM) is a flagship product of XPathEdge Solutions which covers all phases of a
                  student’s life cycle at an institute of learning; from admission to graduation, and beyond.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[100%]">
            <div className="flex items-center space-x-[1.6rem]">
              <p className="text-[1.8rem]">View More</p>
              <svg className="w-[2.4rem] h-[2.4rem]">
                <use href="/images/sprite.svg#icon-arrow" />
              </svg>
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <section className="py-[10.4rem] space-y-[7.2rem]">
          <div className="flex items-center space-x-[1.6rem]">
            <p className="uppercase text-[2.2rem] font-black tracking-[.8rem]">Our Services</p>
            <hr className="h-[.2rem] w-[32rem] bg-black border-none" />
          </div>
          <div className="space-y-[6.4rem] w-[100%]">
            <div className="w-[100%]  flex justify-between pt-[8.8rem]">
              <div className="space-y-[4.8rem] w-[48.33%]">
                <h2 className="text-[6.8rem] font-IBMPlexMono font-bold">Web & Mobile Apps Design</h2>
                <p className="text-[1.6rem] w-[81.6%]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos.
                </p>
              </div>
              <div className="space-y-[4.8rem] w-[48.33%]">
                <h2 className="text-[6.8rem] font-IBMPlexMono font-bold">Identity Branding</h2>
                <p className="text-[1.6rem] w-[81.6%]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos.
                </p>
              </div>
            </div>
            <div className="flex justify-between pt-[8.8rem]">
              <div className="space-y-[4.8rem] w-[48.33%]">
                <h2 className="text-[6.8rem] font-IBMPlexMono font-bold">Mobile Apps Dev</h2>
                <p className="text-[1.6rem] w-[81.6%]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos.
                </p>
              </div>
              <div className="space-y-[4.8rem] w-[48.33%]">
                <h2 className="text-[6.8rem] font-IBMPlexMono font-bold">IT Consultancy</h2>
                <p className="text-[1.6rem] w-[81.6%]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
