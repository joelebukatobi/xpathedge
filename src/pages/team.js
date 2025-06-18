import { useEffect } from 'react';
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Services from '@/global//components/Services';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
import Team from '@/global//components/Team';

export default function index({ heading, text, contact, services, teams }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const team = [
    {
      id: 1,
      name: 'Tomide Adeloye',
      role: 'Chief Executive Officer',
      imageUrl:
        'https://res.cloudinary.com/dnsmfoqta/image/upload/v1750284524/Calendar_Image_from_Teams_2_caejsc.jpg',
    },
    {
      id: 2,
      name: 'Olaitan Odufuwa',
      role: 'Chief Technology Officer',
      imageUrl:
        'https://res.cloudinary.com/dnsmfoqta/image/upload/v1750284526/Calendar_Image_from_Teams_4_yxksn3.jpg',
    },
    {
      id: 3,
      name: 'Dorcas Oluwatomisin',
      role: 'Head of Human Resources',
      imageUrl:
        'https://res.cloudinary.com/dnsmfoqta/image/upload/v1750284526/Calendar_Image_from_Teams_3_re2hal.jpg',
    },
    {
      id: 4,
      name: 'Olumide Akinyemi',
      role: 'Product Manager',
      imageUrl:
        'https://res.cloudinary.com/dnsmfoqta/image/upload/v1750284526/Calendar_Image_from_Teams_ylc41k.jpg',
    },
    {
      id: 5,
      name: 'Younger Oluwawibe',
      role: 'Product Designer',
      imageUrl:
        'https://res.cloudinary.com/dnsmfoqta/image/upload/v1750284525/My_Portrait_from_Calendar_idhnis.jpg',
    },
    {
      id: 6,
      name: 'Victor Abuka',
      role: 'Software Engineer',
      imageUrl:
        'https://res.cloudinary.com/dnsmfoqta/image/upload/v1750284526/Calendar_Image_from_Teams_5_wvzxxu.jpg',
    },
    // {
    //   id: 7,
    //   name: 'Eve Adams',
    //   role: 'Software Engineer',
    //   imageUrl: 'https://placehold.co/400x400/FFC733/000000/png?text=SWE3+E.A.',
    // },
    {
      id: 8,
      name: 'Adenike Kolawole',
      role: 'Accountant',
      imageUrl:
        'https://res.cloudinary.com/dnsmfoqta/image/upload/v1750284523/Calendar_Image_from_Teams_1_ikebfa.jpg',
    },
    // {
    //   id: 9,
    //   name: 'Grace Black',
    //   role: 'Accountant',
    //   imageUrl:
    //     'https://placehold.co/400x400/DEB887/000000/png?text=Acct2+G.B.',
    // },
    // {
    //   id: 10,
    //   name: 'Henry Green',
    //   role: 'UX/UI Designer',
    //   imageUrl:
    //     'https://placehold.co/400x400/5F9EA0/FFFFFF/png?text=Designer+H.G.',
    // },
    // {
    //   id: 11,
    //   name: 'Ivy Blue',
    //   role: 'Marketing Specialist',
    //   imageUrl:
    //     'https://placehold.co/400x400/D2691E/FFFFFF/png?text=Marketing+I.B.',
    // },
  ];

  return (
    <Layout contact={contact} title={'xPathEdge | Team'}>
      <Header
        heading="Meet The Dream Team."
        text="Great ideas come to life when passionate people work together."
        className={'mt-44 pb-10 pt-10'}
      />
      <Container
        className={
          'my-20 flex md:flex-row flex-wrap gap-x-4 gap-y-10 items-center flex-col'
        }
      >
        {team.map((member) => {
          return (
            <div key={member.id} className="flex-1 mb-8">
              {/* Changed from fixed height to aspect-video (16:9) or aspect-square (1:1) etc. */}
              <div className="w-[35rem] h-[35rem] relative aspect-square">
                {' '}
                {/* Try aspect-video for a wider look (16:9) */}
                <img
                  src={member.imageUrl}
                  className="w-full h-full object-cover absolute z-[2]"
                  alt={member.name}
                />
                <div className="h-[6.4rem] w-[6.4rem] bg-[#aa0000] absolute z-10 -right-6 bottom-[-1.6rem] lg:-bottom-4" />
              </div>
              <h4 className="font-IBMPlexMono text-[2rem] tracking-[.1rem] font-semibold mt-[4rem] ">
                {member.name}
              </h4>
              <p className="text-1.4rem font-[200] tracking-[.4rem] uppercase">
                {member.role}
              </p>
            </div>
          );
        })}
      </Container>
      <section className="bg-[#f8f8f8] py-[4rem]">
        <Container>
          <div className="text-center">
            <h2 className="text-[2.4rem] font-bold mb-[2rem]">Join Our Team</h2>
            <p className="text-[1.6rem] mb-[2rem]">
              Interested in joining us? Check out our careers page for open
              positions.
            </p>
            <a
              href="/careers"
              className="inline-block bg-black text-white px-[2rem] py-[1rem] rounded"
            >
              View Careers
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([
    fetch(`${API_URL}/api/services`),
    fetch(`${API_URL}/api/contact/xpathedge`),
    fetch(`${API_URL}/api/teams`),
  ]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      services: data[0].services || [],
      contact: data[1].contact || {},
      teams: data[2].members || [],
    },
  };
}
