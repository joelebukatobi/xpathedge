import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Careers from '@/global//components/Careers';

import { API_URL } from '@/config/index';
import Container from '@/global//layouts/Container';
const qs = require('qs');

export default function index({ careers, contact }) {
  return (
    <Layout contact={contact} title={'xPathEdge | Career'}>
      <Header
        heading={'Join our team of magicians'}
        text={`Work is more than a desk and can definitely be more than a to-do list. We are creating great things, and we are always looking for great people to join us.`}
        className={'mt-[10vh] pt-[5.6rem] lg:pb-0'}
      ></Header>

      <div className="w-100 h-[72rem] pt-[8rem] pb-[9.6rem] bg-[#191919] flex align-center justify-center gap-x-[4rem] overflow-hidden">
        <div className="w-[22.43%]">
          <img className="h-[100%]" src="/images/career-img-one.png" alt="" />
        </div>
        <div className="w-[52.36%] overflow-hidden">
          <img className=" w-[100%]" src="/images/career-img-two.png" alt="" />
        </div>
        <div className="w-[22.43%]">
          <img className="h-[100%]" src="/images/career-img-three.png" alt="" />
        </div>
      </div>
      {careers.length !== 0 ? (
        <div className="bg-[#191919] pt-[16rem] pb-[4rem]">
          <Container>
            <div className="w-[80.96%]">
              <p className="text-[#979797] text-[2.4rem]">
                We're thrilled you're interested in joining our team at xPathEdge!
              </p>
              <h2 className="text-[4.8rem] font-IBMPlexMono text-white tracking-[-.24rem]">
                We're thrilled you're interested in joining our team at XpathEdge!
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
