import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children, footer }) {
  return (
    <>
      <Navbar footer={footer} />
      {children}
      <Footer footer={footer} />
    </>
  );
}
