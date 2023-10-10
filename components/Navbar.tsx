
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'
import { NavLinks } from '../constants/constants' 

//import getCurrentUser function from lib/session and use it to get current user 'session' at (1:07:10): https://youtu.be/986hztrfaSQ?si=D5ARYMCDozDb35K7&t=4030
// import { getCurrentUser } from '@/lib/session' 
import { getCurrentUser } from '../lib/session' 

//Built out at at (18:12): https://youtu.be/986hztrfaSQ?t=1092

const Navbar = async () => {

//Set up to null, come back later (24:38) (if logged in, profile pic, otherwise login)
    // const session = {}; //default "active session"
    // const session = {}; //default "active session"
    // const session = null; //default "active session"
//At (1:07:05) actually get current user's session status via lib/session.ts function getCurrentuser
    // const session = await getCurrentUser; //default "active session"
    // CALL getCurrentUser session with brackets () so we can call session.user ? below
    const session = await getCurrentUser(); //default "active session"


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
              {/* {session ? (  ==> this will always return true (1:08:08) */}
            {session?.user ? (
                <>
                    {/* UserPhoto  */}
                    {session?.user?.image && (
                        <Image 
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt={session.user.name}
                        />
                    )}

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