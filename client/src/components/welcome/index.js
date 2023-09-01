import axios from 'axios';
import './index.css';
import { FaArrowDown } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function Welcome({ handleClick }) {
  const [date, setDate] = useState('');
  useEffect(() => {
    axios.get('/today').then(({ data }) => {
      const { date, isWeekend } = data;
      setDate(`Today is ${date}. What a wonderful ${isWeekend ? 'weekend' : 'weekday'}!`);
    })
  }, []);

  return (
      <section className="app-home">
        <h2 className="app-home__title">WELCOME</h2>
        <p className="app-home__date">{date}</p>
        <FaArrowDown className="app-home__icon" onClick={handleClick}></FaArrowDown>
      </section>
  )
}