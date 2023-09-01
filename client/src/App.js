import { useRef } from 'react';
import { About } from './components/about';
import TechStack from './components/techstack';
import Contacts from './components/contacts';
import Welcome from './components/welcome';

export default function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="app">
        <Welcome handleClick={handleClick} />
        <About ref={ref}/>
        <TechStack />
        <Contacts />
      </div>
  );
}
