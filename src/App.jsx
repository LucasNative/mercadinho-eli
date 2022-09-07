import { Header } from './components/Header';
import bannerFrango from './assets/bannerFrangoNovo.png'
import bannerPadaria from './assets/bannerPadariaNovo.png';
import bannerSuino from './assets/bannerSuinoNovo.png'

import { Carousel } from './components/Carousel';

export function App() {

  const slides = [
    bannerPadaria,
    bannerFrango,
    bannerSuino
  ];

  return (
    <div>
      <Header />
      <Carousel slides={slides} />
    </div>
  );
}

