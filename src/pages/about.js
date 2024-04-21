import { useEffect } from 'react';
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Services from '@/global//components/Services';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
import Team from '@/global//components/Team';
const qs = require('qs');

export default function index({ heading, text, contact, services, teams }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout contact={contact} title={'xPathEdge | About'}>
      <Header heading={`Let’s create magic, together`} className={'mt-[10vh] pt-[5.6rem] pb-[8rem]'}>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          className="flex flex-col md:flex-row space-y-[1.6rem] md:space-y-[0] justify-between mt-[10%]"
        >
          <h5 className="text-[1.2rem] lg:text-[1.8rem] uppercase  font-bold tracking-[.4rem] lg:tracking-[.8rem]">
            our mission
          </h5>
          <p className="text-[1.6rem] md:text-[2.4rem] md:w-[56.49%]">
            We believe every organization is unique in its way and deserves an expert edge if it is to deliver any
            value. Our goal is to deliver excellence both in ideation and implementation, collaborate uniquely, and
            create tailored-made solutions to help our clients realize their desired goals.
          </p>
        </div>
      </Header>

      <Services services={services} />

      <section className="bg-[#191919] text-white py-[18rem]">
        <Container>
          <div className="space-y-[8.8rem]">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex items-center space-x-[1.6rem]"
            >
              <p className="uppercase text-[1.4rem] lg:text-[2.2rem] font-bold tracking-[.4rem] lg:tracking-[.8rem] ">
                Why Choose Us?
              </p>
              <hr className="h-[.2rem] w-[32.24%] lg:w-[32rem] bg-white border-none" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex flex-col md:flex-row justify-between space-y-[3.2rem] md:space-y-[0]"
            >
              <p className="text-[1.8rem] md:w-[49.12%]">
                At Xpathedge, our approach to conceptualizing ideas and creating solutions is specific to every client.
                We are consistently innovating with every brief in a bid to create processes that ease your workflow in
                the realization of your bottom line.
              </p>
              <ul
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[40.52%] space-y-[2.4rem] "
              >
                {/* <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    <strong>Integrity:</strong>
                    <br />
                    At xPathEdge, we ensure honest and fair deals with our clients.
                  </p>
                </li> */}
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    <strong>Professionalism:</strong>
                    <br />
                    We ensure innovation in product and service delivery so that our customers have the latest and up to
                    date technology.
                  </p>
                </li>
                {/* <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    <strong>Effictiveness:</strong>
                    <br />
                    We ensure that our services are valuable, effective, and efficient.
                  </p>
                </li> */}
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem] font">
                    <strong>Timeliness:</strong>
                    <br />
                    We ensure we meet deadlines in discharging our assigned duties to assure prompt service delivery
                    without compromising on quality.
                  </p>
                </li>
                {/* <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    <strong>Respect:</strong>
                    <br />
                    We highly regard the wishes of our clients in the process of delivering our products and services to
                    them. We also treat our clients with the courtesy and appreciation they deserve in every
                    interaction.
                  </p>
                </li> */}
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    <strong>Sustainability:</strong>
                    <br />
                    We ensure that the products and services we provide our clients are poised to achieve the global
                    Sustainable Development Goals (SDGs) that align with their organisational objectives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#191919] text-white py-[18rem]">
        <Container>
          <div className="space-y-[8.8rem]">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex items-center space-x-[1.6rem]"
            >
              <p className="uppercase text-[1.4rem] lg:text-[2.2rem] font-bold tracking-[.4rem] lg:tracking-[.8rem]">
                Meet the team
              </p>
              <hr className="h-[.2rem] w-[32.24%] lg:w-[32rem] bg-white border-none" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex flex-col md:flex-row justify-between space-y-[3.2rem] md:space-y-[0]"
            >
              <div className="md:w-[24.71%]">
                <p className="text-[1.8rem]">
                  Our team comprises the most experienced professionals poised to always deliver tailor-made solutions
                  to your business.
                </p>
              </div>
              <div className="lg:w-[21.73%]  pb-[1.6rem] lg:pb-0 lg:border-l-[.2rem] border-[#333333] lg:pl-[4rem]">
                <h4 className="text-[#aa0000] text-[2.4rem] font-medium leading-[3.2rem]">Team Members</h4>
                <h2 className="text-[4.8rem] font-extrabold mb-[2.4rem]">Location</h2>
                <ul className="space-y-[.8rem]">
                  <li className="text-[#979797] text-[1.8rem]">United State of America</li>
                  <li className="text-[#979797] text-[1.8rem]">United Kingdom</li>
                  <li className="text-[#979797] text-[1.8rem]">Nigeria</li>
                </ul>
              </div>
              <div className="lg:w-[33.04%] border-t-[.2rem] lg:border-0 pt-[4.8rem] lg:pt-0 lg:border-l-[.2rem] border-[#333333] lg:pl-[4rem]">
                <h4 className="text-[#aa0000] text-[2.4rem] font-medium leading-[3.2rem]">Collective Expertise of</h4>
                <h2 className="text-[4.8rem] font-extrabold mb-[2.4rem]">20 Years</h2>
                <ul className="space-y-[.8rem]">
                  <li className="text-[#979797] text-[1.8rem]">Software Engineering and Development</li>
                  <li className="text-[#979797] text-[1.8rem]">Product Design</li>
                  <li className="text-[#979797] text-[1.8rem]">Digital Marketing</li>
                  <li className="text-[#979797] text-[1.8rem]">Procurement</li>
                  <li className="text-[#979797] text-[1.8rem]">Business Development</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col lg:flex-row flex-wrap gap-x-[1.41%] gap-y-[10.4rem] mt-[14rem] w-100 ">
            {teams.map((member) => {
              return <Team member={member} key={member.id} />;
            })}
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
      services: data[0].services,
      contact: data[1].contact,
      teams: data[2].members,
    },
  };
}
