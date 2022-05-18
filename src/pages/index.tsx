import { Footer } from '../component/Footer';
import { Header } from '../component/Header';
import { Section01 } from '@/component/main/Section01';
import { Section02 } from '@/component/main/Section02';

const Home: React.FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Section01 />
      <Section02 />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Home;
