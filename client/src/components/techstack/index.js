import './index.css';
import { useState } from 'react';
import VueLogo from './vue-logo.svg';
import NuxtLogo from './nuxt-logo.svg';
import NodeLogo from './node-logo.svg';
import NestLogo from './nest-logo.svg';

export default function TechStack() {
  const [techStack] = useState([
    {
      alt: 'Vue.js',
      src: VueLogo
    },
    {
      alt: 'Nuxt.js',
      src: NuxtLogo
    },
    {
      alt: 'Node.js',
      src: NodeLogo
    },
    {
      alt: 'Nest.js',
      src: NestLogo
    }
  ])

  return (
      <section className="app-tech-stack">
        <h3 className="app-tech-stack__title">TECH STACK</h3>
        <div className="app-tech-stack__container">
          {techStack.map(tech => {
            return <img key={tech.alt} src={tech.src} alt={tech.alt} className="app-tech-stack__item"></img>
          })
          }
        </div>
      </section>
  )
}