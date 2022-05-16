import { Footer } from '../component/Footer';
import { Header } from '../component/Header';
import { Section01 } from '@/component/main/Section01';

const Home: React.FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Section01 />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Home;
