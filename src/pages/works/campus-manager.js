// Next
import Link from 'next/link';
import Image from 'next/image';

//Components
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';

// Image
import CMLoginPage from '@/images//campus-manager-one.png';
import CMResultPage from '@/images//campus-manager-two.png';
import CMMgmtPage from '@/images//campus-manager-three.png';

// Environment Variables
import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ careers, contact }) {
  return (
    <Layout contact={contact} title={'xPathEdge | Career'}>
      <Header className={'mt-[10vh] pt-[5.6rem] lg:pb-[8rem] !bg-white'}>
        <h4 className="font-IBMPlexMono text-[2.8rem] text-black font-bold">Campus Manager</h4>
        <h1 className="font-IBMPlexMono text-black text-[6.8rem] font-regular">Revolutionize Student Engagement</h1>
      </Header>
      <section className="bg-[#012FF4] py-[11.2rem] flex align-center justify-center">
        <Image src={CMLoginPage} height={''} width={''} />
      </section>
      <Container>
        <section className="flex justify-between py-[16rem]">
          <div className="w-[19.10%]">
            <h3 className="font-IBMPlexMono text-[4.8rem]">The Challenge</h3>
          </div>

          <div className="w-[68.71%]">
            <p className="text-[2rem]">
              The development of The Campus Manager (TCM) was driven by the need to address the challenges inherent in
              traditional campus management systems. These challenges stemmed from manual administrative processes,
              inefficient data management, and unreliable attendance tracking methods prevalent in educational
              institutions. One of the primary challenges that prompted the creation of TCM was the reliance on manual
              administrative procedures. In traditional systems, administrative tasks such as student registration, fee
              payment processing, and course scheduling were predominantly carried out manually. This not only consumed
              a significant amount of time and resources but also left room for human error, leading to inaccuracies in
              data and inefficiencies in workflow.
            </p>
            <div className="flex items-center space-x-[1.6rem] mt-[5.6rem]">
              <p className="text-[1.8rem] text-black">
                <Link href="/contact">View Live Website</Link>
              </p>
              <svg className="w-[2.4rem] h-[2.4rem]">
                <use href="/images/sprite.svg#icon-arrow" />
              </svg>
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <section className="flex justify-between">
          <div className="h-[56rem] w-[56rem] bg-[#012ff4]"></div>
          <div className="h-[56rem] w-[56rem] bg-[#012ff4]"></div>
        </section>
      </Container>

      <Container>
        <section className="flex justify-between py-[16rem]">
          <div className="w-[26.6%]">
            <h3 className="font-IBMPlexMono text-[4.8rem]">Product Goal and Objectives</h3>
          </div>

          <div className="w-[68.71%] space-y-[4rem]">
            <p className="text-[2rem]">
              <strong> Data Storage Digitization and Process Automation:</strong> To guarantee that administrative,
              educational, and payment procedures undergo digitization, and repetitive tasks are automated to alleviate
              workload while ensuring that all data remains accessible at any time and from any location, subject to the
              user's privileges.
            </p>
            <p className="text-[2rem]">
              <strong>Effortless Data Management and Accessibility:</strong>
              Utilizing a school management system like TCM ensures the smooth handling of data for hundreds or
              thousands of students within an institution, eliminating the risk of data loss. This implies that numerous
              student records can be securely stored, and accessing data is as simple as a click.  
            </p>
            <p className="text-[2rem]">
              <strong> Accurate and Fraud-Resistant Attendance Tracking:</strong>
              The Face Recognition attendance feature within TCM ensures the unique registration of each individual
              based on their biostatistics, thereby eliminating any potential compromise in attendance records.
            </p>
          </div>
        </section>
      </Container>

      <Container>
        <section className="flex justify-between">
          <div className="h-[56rem] w-[56rem] bg-[#012ff4]"></div>
          <div className="h-[56rem] w-[56rem] bg-[#012ff4]"></div>
        </section>
      </Container>

      <Container>
        <section className="bg-[#012FF4] py-[11.2rem] flex align-center justify-center my-[8rem]">
          <Image src={CMResultPage} height={''} width={''} />
        </section>
      </Container>

      <Container>
        <section className="bg-[#012FF4] py-[11.2rem] flex align-center justify-center">
          <Image src={CMMgmtPage} height={''} width={''} />
        </section>
      </Container>

      <section className="py-[20rem] flex  justify-between gap-x-[4rem] overflow-hidden w-[100%]">
        <p className="text-[14.8rem] italic font-[200] w-[100%]">
          Next <span className="font-medium">Project</span>
        </p>
        <p className="text-[14.8rem] italic font-[200] w-[100%]">
          Next <span className="font-medium">Project</span>
        </p>
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
