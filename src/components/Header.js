import Container from '@/components/Container';

export default function Header({ heading, text, children, className }) {
  return (
    <section className={`${className} bg-black py-[16%] flex items-center text-white `}>
      <Container>
        <div className="space-y-[2.4rem]">
          <h1 className="text-[8.8rem] font-IBMPlexMono font-bold ">{heading}</h1>
          <h4 className="text-[2.4rem] font-normal w-[72.4%;]">{text}</h4>
        </div>
        {children}
      </Container>
    </section>
  );
}
