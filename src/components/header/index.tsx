'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import SearchRight from './searchRight'
import { menuData } from '@/constants'

import { CiMenuBurger, CiSearch } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Link href="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="header__nav">
            <nav className="header__menu">
              <ul>
                {menuData.map((item, index: number) => (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <SearchRight isSearchMobile={false} />
          <div className="header__menu__mobile">
            <span onClick={() => setToggle(!toggle)}>{toggle ? <IoMdClose /> : <CiMenuBurger />}</span>
          </div>
        </div>
        <div className={`header__nav__mobile ${toggle ? 'active__nav' : ''}`}>
          <nav className="nav__mobile">
            <SearchRight isSearchMobile={toggle} />
            <ul>
              {menuData.map((item, index: number) => (
                <li key={index}>
                  <Link onClick={() => setToggle(!toggle)} href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
