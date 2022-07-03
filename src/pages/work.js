import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

export default function index({ heading }) {
  return (
    <Layout>
      <Header heading={'Let’s create great things together'} className={'pb-[0rem]'}></Header>
      <section className="bg-black text-white pt-[1.6rem]">
        <Container>
          <section className="space-y-[12rem] pb-[10%] relative">
            <div className="flex items-center space-x-[1.6rem]">
              <p className="uppercase text-[2.2rem] font-bold tracking-[.8rem]">All Projects</p>
              <svg className="w-[4rem] h-[4rem]">
                <use href="/images/sprite.svg#icon-chevron-down" />
              </svg>
            </div>
            <div className="flex justify-between">
              <div className="space-y-[4.8rem] w-[44.56%]">
                <div className="h-[60.3rem] w-[100%] bg-zicron relative">
                  <div className="h-[16rem] w-[16rem] absolute  z-10 rounded-[100%] right-[90%] bottom-[6.4rem] flex items-center justify-center bg-red">
                    <p className="text-white text-[2rem]">View</p>
                  </div>
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
                <div className="h-[60.3rem] w-[100%] bg-zicron"></div>
                <div className="space-y-[1.6rem]">
                  <h4 className="text-[2.4rem] font-bold capitalize ">Campus Manager</h4>
                  <p className="text-[1.6rem]">
                    The Campus Manager (TCM) is a flagship product of XPathEdge Solutions which covers all phases of a
                    student’s life cycle at an institute of learning; from admission to graduation, and beyond.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </Layout>
  );
}
