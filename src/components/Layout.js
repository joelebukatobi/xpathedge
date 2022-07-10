import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children, footer }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer footer={footer} />
    </>
  );
}
