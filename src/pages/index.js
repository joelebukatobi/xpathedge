import { useEffect } from 'react';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Project from '@/components/Projects';
import Services from '@/components/Services';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ heading, text, services, projects, footer }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout footer={footer}>
      <Header
        heading={'Imagination is the only limitation'}
        text={`Tailor-made technological solutions, creative expressions, and flawless executions. Let’s disrupt the norm,
            together.`}
      />

      <Container className={'max-width w-[100%]'}>
        <section className="space-y-[12rem] py-[18rem] w-[100%] flex flex-col items-center relative">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="flex items-center space-x-[1.6rem] max-w-[114rem] w-[100%]"
          >
            <p className="uppercase text-[2.2rem] font-black tracking-[.8rem]">Projects</p>
            <hr className="h-[.2rem] w-[32rem] bg-black border-none" />
          </div>
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

      <Services works={services} />
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
  const res = await Promise.all([
    fetch(`${API_URL}/api/services?${query}`),
    fetch(`${API_URL}/api/projects?${query}`),
    fetch(`${API_URL}/api/contact`),
  ]);
  const info = await Promise.all(res.map((res) => res.json()));
  console.log(res);
  return {
    props: {
      services: info[0].data,
      projects: info[1].data,
      footer: info[2].data,
    },
  };
}
