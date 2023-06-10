"use client"

import './navbar.scss';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../assets/logo.png';

const Navbar = () => {

  const [activeClass, setActiveClass] = useState('/');
  const handleActiveMenuItem = (value) => {
    setActiveClass(value);
  }

  return (
    <nav className="nav-container">

      <Link href="/" >
        <div className="logo">
          <Image src={Logo} width={95} height={94} />
        </div>
      </Link>

      <div className="nav-elements">

        <Link onClick={() => handleActiveMenuItem('/')} className={activeClass === '/' ? 'active' : ''} href="/">Home</Link>

        <Link onClick={() => handleActiveMenuItem('/services')} className={activeClass === '/services' ? 'active' : ''} href="/services"> Services</Link>

        <Link onClick={() => handleActiveMenuItem('/projects')} className={activeClass === '/projects' ? 'active' : ''} href="/projects">Projects</Link>

        <Link onClick={() => handleActiveMenuItem('/products')} className={activeClass === '/products' ? 'active' : ''} href="/products">Products</Link>

        <Link onClick={() => handleActiveMenuItem('/about')} className={activeClass === '/about' ? 'active' : ''} href="/about">About Us</Link>

      </div>
      <Link href="/contact" className='nav-btn' onClick={() => handleActiveMenuItem('/contact')}>Contact Us</Link>



    </nav>
  );
};

export default Navbar;
