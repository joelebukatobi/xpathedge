import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ footer }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:1337/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'joelebuka@gmail.com',
        from: 'joelebuka@gmail.com',
        subject: 'xPathEdge Contact Form',
        name: name,
        email: email,
        company: company,
        text: message,
      }),
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      // return;
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout footer={footer}>
      <section className="bg-black text-white pt-[16%] md:pt-[32%] lg:pt-[16%] pb-[5%]">
        <Container>
          <h3 className="mt-[12vh] md:mt-[0] text-[2rem] uppercase fold-bold font-IBMPlexMono">
            Let’s bring your ideas to life.
          </h3>
          <h1 className="text-[3.2rem] md:text-[6.4rem] lg:text-[8.8rem]  font-bold mb-[8rem] md:mb-[12rem] font-IBMPlexMono">
            Get in touch.<span className="text-red">_</span>
          </h1>

          <div className="flex flex-col space-y-[4rem] md:space-y-[0] md:flex-row justify-between">
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="md:w-[33.94%] text-[1.8rem]"
            >
              Our Team is geared towards solving even the most complex ideas. Talk to us about your needs
            </p>
            <form
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="md:w-[57.63%] space-y-[2.4rem]"
              onSubmit={handleSubmit}
            >
              <input
                className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{' '}
              <input
                className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />{' '}
              <input
                className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Company"
                id="company"
                value={company}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[24rem] text-[1.6rem] p-[3.2rem]"
                placeholder="Tell us about the project"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="flex items-center w-[100%] xl:w-[40%] justify-end mx-auto relative">
                <div className="flex items-center absolute">
                  <h3 className="w-[100%] text-[2.4rem] mr-[4.8rem]">
                    Send <span className="text-red">Message</span>
                  </h3>
                  <svg className="h-[2.4rem] w-[2.4rem]">
                    <use href="/images/sprite.svg#icon-arrow" />
                  </svg>
                </div>
                <div className="h-[16rem] w-[16rem] bg-white rounded-[100%]"></div>
              </button>
            </form>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([fetch(`${API_URL}/api/contact`)]);
  const info = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      footer: info[0].data,
    },
  };
}
