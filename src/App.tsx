import './App.css'
// import './components/home/page_one/PageOne'
import { PageOne } from './components/home/page_one/PageOne';
import { PageTwo } from './components/home/page_two/PageTwo';
import { PageThree } from './components/home/page_three/PageThree';
import { PageFour } from './components/home/page_four/PageFour';
import { PageFive } from './components/home/page_five/PageFive';

import React from "react";

const App: React.FC = () => {
  return (
    <div className="">
      <div className="">
        
      </div>
      <div>

        <section id="about" className="py-20 bg-gray-100 text-center">
          <PageOne />
        </section>

        <section id="services" className="py-20 bg-white text-center">
          <PageTwo />
        </section>

        <section id="services" className="py-20 bg-white text-center">
          <PageThree />
        </section>

        <section id="services" className="py-20 bg-white text-center">
          <PageFour />
        </section>

        <section id="services" className="py-20 bg-white text-center">
          <PageFive />
        </section>
      </div>
    </div>
  );
};

export default App;

