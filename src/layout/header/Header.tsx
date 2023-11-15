import React from 'react'
import style from './header.module.scss';

const Header = () => {

  const navbar = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Categories',
      link: '/'
    },
    {
      title: 'Destination',
      link: '/'
    },
    {
      title: 'Blog',
      link: '/'
    },
    {
      title: 'Pages',
      link: '/'
    },
    {
      title: 'Dashboard',
      link: '/'
    },
    {
      title: 'Contact',
      link: '/'
    },
  ]


  return (
    <div className={style['header-container']}>
      <section className={style['header-title']}> 
        <h1>E Commerce</h1>
      </section>
      <section className={style['header-navbar']}>
        {navbar?.map((item,index) => (
          <div key={index}>
            {item?.title}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Header