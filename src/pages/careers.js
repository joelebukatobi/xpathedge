import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Careers from '@/components/Careers';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ careers, footer }) {
  return (
    <Layout footer={footer}>
      <Header
        heading={'Join our team of magicians'}
        text={`Work is more than a desk and can definitely be more than a to-do list. We are creating great things, and we are always looking for great people to join us.`}
        className={'mt-[10vh] pt-[5.6rem] pb-[8rem]'}
      ></Header>
      <Careers careers={careers} />
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
  const res = await Promise.all([fetch(`${API_URL}/api/careers?${query}`), fetch(`${API_URL}/api/contact`)]);
  const info = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      careers: info[0].data,
      footer: info[1].data,
    },
  };
}
