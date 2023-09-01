import './index.css'
import { useState, forwardRef } from 'react';

export const About  = forwardRef((props, ref) => {
  const [aboutMe] = useState({
    left: `Hi! I'm Ilya Barashkov, a software engineer in web development. I have loved coding for decades as a hobby. Now I love it even more as a profession. Since 2018 I'm working as a full-stack developer creating nicely and logically structured UI and API, building the reliable and efficient backend.`,
    right: `My way into the profession was fast and effective because I was lucky to have wonderful mentors. Now, as an act of acknowledgment, I am helping newcomers to get into web development with mentorship by myself and I'm trying my best to match my teachers.`
  })

  return (
      <section ref={ref} className="app-about">
        <h3 className="app-about__title">ABOUT ME</h3>
        <div className="app-about__photo"></div>
        <div className="app-about__text app-about__text-container">
          <p className="app-about__text app-about__text--left">{ aboutMe.left }</p>
          <p className="app-about__text app-about__text--right">{ aboutMe.right }</p>
        </div>
      </section>
  )
})