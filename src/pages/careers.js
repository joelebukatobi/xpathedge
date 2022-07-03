import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

export default function index({ heading }) {
  return (
    <Layout>
      <Header heading={'Join our team of magicians'} className={'pb-[5%]'}></Header>
      <section className="bg-black text-white">
        <Container>
          <section className="space-y-[12rem] pb-[10%] relative">
            <div className="flex items-center space-x-[1.6rem]">
              <p className="uppercase text-[2.2rem] font-bold tracking-[.8rem] ">All</p>
              <svg className="w-[4rem] h-[4rem]">
                <use href="/images/sprite.svg#icon-chevron-down" />
              </svg>
            </div>
            <div className="space-y-[18rem]">
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="text-[4.8rem] font-bold font-IBMPlexMono">Product Designer</h2>
                  <h6 className="text-grey uppercase font-IBMPlexMono text-[1.6rem]">REMOTE</h6>
                </div>
                <p className="text-[2rem] mt-[2.4rem] mb-[7.2rem]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos temporibus consequatur minus amet. Ut pariatur enim et dolore
                  voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam amet assumenda est vero
                  sint eos temporibus consequatur minus amet.
                </p>
                <div className="flex items-center space-x-[1.6rem]">
                  <p className="text-[1.8rem]">Let's get started</p>
                  <svg className="w-[2.4rem] h-[2.4rem]">
                    <use href="/images/sprite.svg#icon-arrow" />
                  </svg>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="text-[4.8rem] font-bold font-IBMPlexMono">Data Analyst</h2>
                  <h6 className="text-grey uppercase font-IBMPlexMono text-[1.6rem]">REMOTE</h6>
                </div>
                <p className="text-[2rem] mt-[2.4rem] mb-[7.2rem]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos temporibus consequatur minus amet. Ut pariatur enim et dolore
                  voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam amet assumenda est vero
                  sint eos temporibus consequatur minus amet.
                </p>
                <div className="flex items-center space-x-[1.6rem]">
                  <p className="text-[1.8rem]">Let's get started</p>
                  <svg className="w-[2.4rem] h-[2.4rem]">
                    <use href="/images/sprite.svg#icon-arrow" />
                  </svg>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="text-[4.8rem] font-bold font-IBMPlexMono">Product Manager</h2>
                  <h6 className="text-grey uppercase font-IBMPlexMono text-[1.6rem]">REMOTE</h6>
                </div>
                <p className="text-[2rem] mt-[2.4rem] mb-[7.2rem]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos temporibus consequatur minus amet. Ut pariatur enim et dolore
                  voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam amet assumenda est vero
                  sint eos temporibus consequatur minus amet.
                </p>
                <div className="flex items-center space-x-[1.6rem]">
                  <p className="text-[1.8rem]">Let's get started</p>
                  <svg className="w-[2.4rem] h-[2.4rem]">
                    <use href="/images/sprite.svg#icon-arrow" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </Layout>
  );
}
