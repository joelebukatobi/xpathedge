import { useEffect } from 'react';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Services from '@/components/Services';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ heading, text, footer, services }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout footer={footer}>
      <Header heading={'Imagination is the only limitation'}>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          className="flex justify-between mt-[10%]"
        >
          <h5 className="text-[1.8rem] uppercase  font-bold tracking-[.8rem]">our mission</h5>
          <p className="text-[2.4rem] w-[56.49%]">
            We believe every organization should have a competitive edge for increased value. We collaborate with you to
            deliver quality work while helping you achieve a competitive advantage in your industry.
          </p>
        </div>
      </Header>

      <Services works={services} />
      <section className="bg-black text-white py-[18rem]">
        <Container>
          <div className="space-y-[8.8rem]">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex items-center space-x-[1.6rem]"
            >
              <p className="uppercase text-[2.2rem] font-bold tracking-[.8rem]">Why Choose Us?</p>
              <hr className="h-[.2rem] w-[32rem] bg-white border-none" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex justify-between"
            >
              <p className="text-[1.8rem] w-[49.12%]">
                At Xpathedge, our approach to conceptualizing ideas and creating solutions is specific to every client.
                We are consistently innovating with every brief in a bid to create processes that ease your workflow in
                the realization of your bottom line.
              </p>
              <ul
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="w-[40.52%] space-y-[2.4rem] "
              >
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
export async function getServerSideProps() {
  const query = qs.stringify(
    {
      populate: ['*'],
      sort: ['createdAt:asc'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await Promise.all([fetch(`${API_URL}/api/contact`), fetch(`${API_URL}/api/services?${query}`)]);
  const info = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      footer: info[0].data,
      services: info[1].data,
    },
  };
}
