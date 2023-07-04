
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'
import { NavLinks } from '../constants/constants'

//Built out at at (18:12): https://youtu.be/986hztrfaSQ?t=1092

const Navbar = () => {

//Set up to null, come back later (24:38) (if logged in, profile pic, otherwise login)
    const session = {}

  return (
    <nav className="flexBetween navbar">
       <div className="flex-1 flexStart gap-10">
            Navbar
            <Link href="/">
                <Image 
                    src="/logo.svg"
                    width={115}
                    height={43}
                    alt="logo"
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {/* use => () for immed return instead of {} (22:15) */}
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))
                }
            </ul>
        </div>

        <div className="flexCenter gap-4">
              {session ? (
                <>
                    UserPhoto 

                    <Link href="/create-project">
                        Share Work
                    </Link>
                </>
              ) : (
                <AuthProviders />
              )}  
        </div>
    </nav>
  )
}

export default Navbar