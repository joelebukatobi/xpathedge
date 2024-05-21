// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
// Components
import Layout from '@/admin//layouts/Layout';
import Input from '@/admin//element/Input';
import Textarea from '@/admin//element/Textarea';
const Editor = dynamic(() => import('@/admin//components/Editor'), { ssr: false });
// Config & Helpers
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers//index';
// External Libraries
import { ToastContainer, toast } from 'react-toastify';

export default function index({ token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from formconst
  const [position, setPosition] = useState('');
  const [companyOverview, setCompanyOverview] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [salary, setSalary] = useState('');
  const [benefits, setBenefits] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [link, setLink] = useState('');
  // Handles submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/careers`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        position: position,
        company_overview: companyOverview,
        job_description: jobDescription,
        responsibilities: responsibilities,
        qualifications: qualifications,
        salary: salary,
        benefits: benefits,
        category: category,
        type: type,
        link: link,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Position created successfully');
      setTimeout(() => {
        navigate.push('/admin/careers');
      }, 5000);
    } else {
      toast.error(`Error: ${data.message}`);
    }
  };
  return (
    <Layout>
      <div className="w-full">
        <ToastContainer autoClose={4000} position="bottom-right" theme="colored" />
        <header className="flex flex-col ">
          <div className="flex items-center mb-[1.6rem]">
            <h3 className="text-black/90 mr-[1.6rem] capitalize">New Position</h3>
            <figcaption role="button" className="tag" onClick={handleSubmit}>
              <p>Save</p>
            </figcaption>
          </div>

          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/careers">
              <h5 className="text-black/70 hover:text-black">Careers &nbsp;</h5>
            </Link>
          </div>
        </header>
        <form action="" className="mt-[4rem]">
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'Position'}
              placeholder={'Enter the position'}
              type={'text'}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />

            <Input
              label={'Position Type'}
              placeholder={'Remote, Onsite or Hybrid'}
              type={'text'}
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
          </div>
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'Application Link'}
              placeholder={'Enter a link starting with http:// or https://'}
              type={'text'}
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
            <div className="w-full">
              <label className="text-black/70" htmlFor="role">
                Category
              </label>
              <section className="!w-full border-[.16rem] !h-[4.8rem] border-[#ECECEC] rounded-[.4rem] mt-[.8rem] pr-[.8rem] mb-[2.4rem] flex items-center">
                <select
                  name="role"
                  className="w-full bg-white outline-none rounded-[.4rem] pl-[.8rem] mb-0"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value={'design'}>Design</option>
                  <option value={'engineering'}>Engineering</option>
                  <option value={'operation'}>Operations</option>
                </select>
              </section>
            </div>
          </div>

          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Textarea
              label={'Company Description'}
              placeholder={'Company Description'}
              type={'text'}
              value={companyOverview}
              onChange={(e) => setCompanyOverview(e.target.value)}
              required
              className={'mb-[2.4rem]'}
              classTextArea={'!h-[16rem] mt-[.8rem]'}
            />
            <Textarea
              label={'Company Description'}
              placeholder={'Company Overview'}
              type={'text'}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
              className={'mb-[2.4rem]'}
              classTextArea={'!h-[16rem] mt-[.8rem]'}
            />
          </div>
          <div className="mt-[2.4rem]">
            <label className="text-black/70">Responsiblities</label>
            <div className="mt-[.8rem]">
              <Editor onChange={setResponsibilities} value={responsibilities} />
            </div>
          </div>
          <div className="mt-[2.4rem]">
            <label className="text-black/70">Qualifications</label>
            <div className="mt-[.8rem]">
              <Editor onChange={setQualifications} value={qualifications} />
            </div>
          </div>

          <div className="mt-[2.4rem]">
            <Input
              label={'Salary'}
              placeholder={'Enter the salary range'}
              type={'text'}
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
          </div>
          <div className="mt-[2.4rem]">
            <label className="text-black/70">Benefits</label>
            <div className="mt-[.8rem]">
              <Editor onChange={setBenefits} value={benefits} />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  return {
    props: {
      token,
    },
  };
}
