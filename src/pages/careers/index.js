//
import Image from 'next/image';

// Components
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Careers from '@/global//components/Careers';

// Images
import CareerImageWeb from '@/images//career-img-web.png';
import CareerImageMobile from '@/images//career-img-mobile.png';

import { API_URL } from '@/config/index';
import Container from '@/global//layouts/Container';
const qs = require('qs');

export default function index({ careers, contact }) {
  return (
    <Layout contact={contact} title={'xPathEdge | Career'}>
      <Header heading={'Join our team of magicians'} text={``} className={'mt-[10vh] pt-[5.6rem] lg:pb-0'}></Header>

      <div className="w-100 px-[3.2rem] pb-[4rem] lg:px-0 lg:pt-[8rem] lg:pb-[9.6rem] bg-[#191919]">
        <Image width={''} height={''} src={CareerImageWeb} className="w-[100%] hidden lg:block" alt="" />
        {/* <div className="hidden lg:block w-[20%] h-[100%]">
          <img className="h-[100%] w-[100%]" src="/images/career-img-one.png" alt="" />
        </div> */}
        <Image width={''} height={''} src={CareerImageMobile} className="lg:hidden w-[100%]" alt="" />

        {/* <div className="hidden lg:block w-[20%] h-[100%]">
          <img className="h-[100%] w-[100%]" src="/images/career-img-three.png" alt="" />
        </div> */}
      </div>
      {careers.length === 0 ? (
        <div className="bg-[#191919] pt-[16rem] pb-[4rem]">
          <Container>
            <div className="w-[80.96%]">
              <p className="text-[#979797] text-[2rem] text-[2.4rem]">
                We're thrilled you're interested in joining our team at xPathEdge!
              </p>
              <h2 className="text-[3.2rem] lg:text-[4.8rem] font-IBMPlexMono text-white tracking-[-.24rem] font-extrabold">
                Unfortunately, we don't have any open positions at the moment.
              </h2>
            </div>
          </Container>
        </div>
      ) : (
        <Careers careers={careers} />
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([fetch(`${API_URL}/api/careers`), fetch(`${API_URL}/api/contact/xpathedge`)]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      careers: data[0].positions,
      contact: data[1].contact,
    },
  };
}
