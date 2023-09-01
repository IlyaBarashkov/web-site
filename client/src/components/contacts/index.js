import './index.css';
import { useState } from 'react';
import { CiMail, CiPhone } from 'react-icons/ci';

export default function Contacts() {
  const redirectTo = (url) => {
    window.location = url;
  }

  const [socials] = useState([
    {
      icon: CiMail,
      redirect: () => {
        redirectTo("mailto:inbarashkov@gmail.com")
      },
      title: 'mail'
    },
    {
      icon: CiPhone,
      redirect: () => {
        redirectTo("tel:+79263814022")
      },
      title: 'phone'
    }
  ])

  return (
      <section className="app-contact">
        <h3 className="app-contact__title">CONTACT ME</h3>
        <div className="app-contact__social">
          {socials.map(social => {
            const Component = social.icon;
            return <Component key={social.title} className="app-contact__icon" onClick={social.redirect}/>
          })}
        </div>
      </section>
  )
}