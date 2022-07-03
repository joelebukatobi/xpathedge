import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

export default function index() {
  return (
    <Layout>
      <section className="bg-black text-white pt-[16%] pb-[5%]">
        <Container>
          <h3 className="text-[2.4rem] uppercase fold-bold font-IBMPlexMono">Let’s bring your ideas to life.</h3>
          <h1 className="text-[8.8rem] font-bold mb-[12rem] font-IBMPlexMono">Get in touch</h1>

          <div className="flex justify-between">
            <p className="w-[33.94%] text-[1.8rem]">
              Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora nam
              amet assumenda est vero sint eos temporibus consequatur minus amet.
            </p>
            <form className="w-[57.63%] space-y-[2.4rem]">
              <input
                className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Name"
              />
              <input
                className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Email"
              />{' '}
              <input
                className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Phone"
              />{' '}
              <input
                className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem]"
                type="text"
                placeholder="Company"
              />
              <textarea
                name=""
                id=""
                className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[24rem] text-[1.6rem] p-[3.2rem]"
                placeholder="Tell us about the project"
              ></textarea>
            </form>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
