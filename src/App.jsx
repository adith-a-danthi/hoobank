import { Hero, Navbar } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="px-6 sm:px-16 flex justify-center items-center">
      <div className="box-width">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="box-width">
        <Hero />
      </div>
    </div>
  </div>
);

export default App;
