import { useState, useEffect } from 'react';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Success from '@/global//components/Success';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

import { SMTP_PASSWORD, SMTP_USERNAME } from '@/config//index';

export default function index({ contact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/contact/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        company: company,
      }),
    });

    if (res.status === 200) {
      setOpen(true);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout contact={contact} title={'xPathEdge | Contact'}>
        <section className="bg-black text-white pt-[16%] md:pt-[32%] lg:pt-[16%] pb-[5%]">
          <Container>
            <div cursor-class="overlay">
              <h3 className="mt-[12vh] md:mt-[0] text-[2rem] uppercase fold-bold font-IBMPlexMono">
                Let’s bring your ideas to life.
              </h3>
              <h1 className="text-[3.2rem] md:text-[6.4rem] lg:text-[8.8rem]  font-bold mb-[8rem] md:mb-[12rem] font-IBMPlexMono">
                Get in touch.<span className="text-red"></span>
              </h1>
            </div>
            <div className="flex flex-col space-y-[4rem] md:space-y-[0] md:flex-row justify-between">
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[33.94%] text-[1.8rem]"
                cursor-class="overlay"
              >
                Our Team is geared towards solving even the most complex ideas. Talk to us about your needs
              </p>
              <form
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[57.63%]"
                cursor-class="no-border"
                onSubmit={handleSubmit}
              >
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="text"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="tel"
                  placeholder="Phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="text"
                  placeholder="Company"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
                <textarea
                  className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[24rem] text-[1.6rem] py-[1.6rem] px-[3.2rem] mb-[2.4rem] online-none"
                  placeholder="Tell us about the project"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button className="flex justify-end items-center w-[100%] h-[4.8rem] mt-[4rem] text-[2.4rem] cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </Container>
        </section>
      </Layout>
      <Success toggle={toggle} className={open ? '' : 'hidden'} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([fetch(`${API_URL}/api/contact/xpathedge`)]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      contact: data[0].contact,
    },
  };
}
