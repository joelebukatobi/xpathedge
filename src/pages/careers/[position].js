// Next
import Link from 'next/link';

//Components
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';

// Environment Variables
import { API_URL } from '@/config/index';

export default function index({ role, contact }) {
  console.log(role);
  return (
    <Layout contact={contact} title={'xPathEdge | Career'}>
      <Header
        heading={role.position}
        text={`Nigeria, ${role.type}`}
        className={'mt-[10vh] pt-[5.6rem] lg:pb-0'}
      ></Header>
      <section className="bg-[#191919] pt-[8rem]">
        <Container className={'flex justify-between'}>
          <div className="w-[19.10%]">
            <ul className="hidden lg:block space-y-[.8rem]">
              <li className="text-[#979797] text-[2rem]">Company Description</li>
              <li className="text-[#979797] text-[2rem]">Role</li>
              <li className="text-[#979797] text-[2rem]">Responsiblities</li>
              <li className="text-[#979797] text-[2rem]">About You</li>
            </ul>
            <div className="hidden lg:flex items-center space-x-[1.6rem] mt-[5.6rem]">
              <h4 className="text-[1.8rem] text-white">
                <a href={role.link}>Apply Now</a>
              </h4>
              <svg className="w-[2.4rem] h-[2.4rem]">
                <use href="/images/sprite.svg#icon-arrow" />
              </svg>
            </div>
          </div>
          <div className="lg:w-[75.19%] space-y-[8rem]">
            <div className="space-y-[.8rem] ">
              <h4 className="text-[2rem] text-white">Company Description</h4>
              <p className="text-[1.6rem] text-white leading-[2.8rem]">{role.company_overview}</p>
            </div>
            <div className="space-y-[.8rem]">
              <h4 className="text-[2rem] text-white">Job Description </h4>
              <p className="text-[1.6rem] text-white leading-[2.8rem]">{role.job_description}</p>
            </div>
            <div className="space-y-[.8rem]">
              <h4 className="text-[2rem] text-white">Responsibilites</h4>
              <div
                className="ml-[1.6rem] text-[#ffffff] w-[90%] career-lists"
                dangerouslySetInnerHTML={{ __html: role.responsibilities }}
              />
            </div>
            <div className="space-y-[.8rem]">
              <h4 className="text-[2rem] text-white">Qualifications</h4>{' '}
              <div
                className="ml-[1.6rem] text-[#ffffff] w-[90%] career-lists"
                dangerouslySetInnerHTML={{ __html: role.qualifications }}
              />
            </div>
            <div className="space-y-[.8rem] ">
              <h4 className="text-[2rem] text-white">Salary</h4>
              <p className="text-[1.6rem] text-white leading-[3.2rem]">{role.salary}</p>
            </div>
            <div className="space-y-[.8rem]">
              <h4 className="text-[2rem] text-white">Benefits</h4>{' '}
              <div
                className="ml-[1.6rem] text-[#ffffff] w-[90%] career-lists"
                dangerouslySetInnerHTML={{ __html: role.benefits }}
              />
            </div>
            <div className="flex lg:hidden items-center space-x-[1.6rem] mt-[5.6rem]">
              <h4 className="text-[1.8rem] text-white">
                <a href={`${role.link}`}>Apply Now</a>
              </h4>
              <svg className="w-[2.4rem] h-[2.4rem]">
                <use href="/images/sprite.svg#icon-arrow" />
              </svg>
              s
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query: { position } }) {
  const res = await Promise.all([
    fetch(`${API_URL}/api/careers/${position}`),
    fetch(`${API_URL}/api/contact/xpathedge`),
  ]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      role: data[0].position,
      contact: data[1].contact,
    },
  };
}
