import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Hero, Info, Projects, Resellers, Footer } from './components';

const App = () => {
  return (
    <>
      <Hero />
      <Info />
      <Projects />
      <Resellers />
      <Footer />
    </>
  );
};

export default App;
