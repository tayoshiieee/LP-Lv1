import { Footer } from '../component/Footer';
import { Header } from '../component/Header';
import { Section01 } from '@/component/main/Section01';
import { Section02 } from '@/component/main/Section02';
import { Section03 } from '@/component/main/Section03';
import { Section04 } from '@/component/main/Section04';
import { Section05 } from '@/component/main/Section05';

const Home: React.FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Home;
