import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

export default function index({ heading, text }) {
  return (
    <Layout>
      <Header heading={'Imagination is the only limitation'}>
        <div className="flex justify-between mt-[10%]">
          <h5 className="text-[1.8rem] uppercase  font-bold tracking-[.8rem]">our mission</h5>
          <p className="text-[2.4rem] w-[56.49%]">
            We believe every organization should have a competitive edge for increased value. We collaborate with you to
            deliver quality work while helping you achieve a competitive advantage in your industry.
          </p>
        </div>
      </Header>

      <Container>
        <section className="py-[10.4rem] space-y-[7.2rem]">
          <div className="flex items-center space-x-[1.6rem]">
            <p className="uppercase text-[2.2rem] font-bold tracking-[.8rem]">Our Services</p>
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

      <section className="bg-black text-white py-[18rem]">
        <Container>
          <div className="space-y-[8.8rem]">
            <div className="flex items-center space-x-[1.6rem]">
              <p className="uppercase text-[2.2rem] font-bold tracking-[.8rem]">Why Choose Us?</p>
              <hr className="h-[.2rem] w-[32rem] bg-white border-none" />
            </div>
            <div className="flex justify-between">
              <p className="text-[1.8rem] w-[49.12%]">
                Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam
                amet assumenda est vero sint eos. Ut pariatur enim et dolore voluptatem sed placeat omnis ut
                voluptatibus ratione quo quisquam tempora nam amet assumenda est vero sint eos.
              </p>
              <ul className="w-[40.52%] space-y-[2.4rem] ">
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-red flex items-center justify-center">
                    <svg>
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione.
                  </p>
                </li>
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-red flex items-center justify-center">
                    <svg>
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione.
                  </p>
                </li>
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-red flex items-center justify-center">
                    <svg>
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
