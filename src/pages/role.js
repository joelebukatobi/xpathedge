// Next
import Link from 'next/link';

//Components
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';

// Environment Variables
import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ careers, contact }) {
  return (
    <Layout contact={contact} title={'xPathEdge | Career'}>
      <Header
        heading={'Product Designer'}
        text={`Remote, Nigeria`}
        className={'mt-[10vh] pt-[5.6rem] lg:pb-0'}
      ></Header>
      <section className="bg-[#191919] pt-[8rem]">
        <Container className={'flex justify-between'}>
          <div className="w-[19.10%]">
            <ul className="space-y-[.8rem]">
              <li className="text-[#979797] text-[2rem]">Company Description</li>
              <li className="text-[#979797] text-[2rem]">Role</li>
              <li className="text-[#979797] text-[2rem]">Responsiblities</li>
              <li className="text-[#979797] text-[2rem]">About You</li>
            </ul>
            <div className="flex items-center space-x-[1.6rem] mt-[5.6rem]">
              <h4 className="text-[1.8rem] text-white">
                <Link href="/contact">Apply Now</Link>
              </h4>
              <svg className="w-[2.4rem] h-[2.4rem]">
                <use href="/images/sprite.svg#icon-arrow" />
              </svg>
            </div>
          </div>
          <div className="w-[75.19%] space-y-[8rem]">
            <div className="space-y-[.8rem] ">
              <h4 className="text-[2rem] text-white">Company Description</h4>
              <p className="text-[1.6rem] text-white leading-[3.2rem]">
                The Campus Manager (TCM) is a flagship product of XPathEdge Solutions which covers all phases of a
                student’s life cycle at an institute of learning; from admission to graduation, and beyond.
              </p>
            </div>
            <div className="space-y-[.8rem]">
              <h4 className="text-[2rem] text-white">Role </h4>
              <p className="text-[1.6rem] text-white leading-[3.2rem]">
                Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam
                amet assumenda est vero sint eos temporibus consequatur minus amet. Ut pariatur enim et dolore
                voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam amet assumenda est vero
                sint eos temporibus consequatur minus amet.
              </p>
            </div>
            <div className="space-y-[.8rem]">
              <h4 className="text-[2rem] text-white">Responsibilites</h4>
              <ul className="list-disc ml-[1.6rem] w-[59.20%]">
                <li className="text-[1.6rem] text-white leading-[3.2rem]">
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos temporibus consequatur minus amet. Ut pariatur enim et dolore
                  voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam amet assumenda est vero
                  sint eos temporibus consequatur minus amet.
                </li>
              </ul>
            </div>
            <div className="space-y-[.8rem]">
              <h4 className="text-[2rem] text-white">About You</h4>
              <p className="text-[1.6rem] text-white leading-[3.2rem]">
                Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam
                amet assumenda est vero sint eos temporibus consequatur minus amet. Ut pariatur enim et dolore
                voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam amet assumenda est vero
                sint eos temporibus consequatur minus amet.
              </p>
            </div>
          </div>
        </Container>
      </section>
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
