import { useEffect } from 'react';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Project from '@/components/Projects';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ heading, projects, footer }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout footer={footer} title={'xPathEdge | Work'}>
      <Header
        heading={'Let’s create great things together'}
        className={'mt-[10vh] pt-[5.6rem] pb-[4rem] md:pb-[8rem] lg:pb-[8rem]'}
      ></Header>
      <section className="bg-black text-white">
        <Container className={'max-width w-[100%]'}>
          <section className="space-y-[12rem] pb-[8rem] w-[100%] flex flex-col items-center relative">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              className="flex flex-wrap justify-center lg:justify-between gap-y-[8rem]  max-w-[114rem]"
            >
              {projects.map((project) => {
                return <Project project={project} />;
              })}
            </div>
            {/* <div className="flex justify-center w-[100%]">
              <div className="flex items-center space-x-[1.6rem]">
                <p className="text-[1.8rem]">View More</p>
                <svg className="w-[2.4rem] h-[2.4rem]">
                  <use href="/images/sprite.svg#icon-arrow" />
                </svg>
              </div>
            </div> */}
          </section>
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
  const res = await Promise.all([fetch(`${API_URL}/api/projects?${query}`), fetch(`${API_URL}/api/contact`)]);
  const info = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      projects: info[0].data,
      footer: info[1].data,
    },
  };
}
