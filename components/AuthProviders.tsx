// import React from 'react'
// At 46:53: https://youtu.be/986hztrfaSQ?t=2813
// WHENEVER YOU USE ANY HOOKS YOU CAN NOT RENDER IT ON THE SERVER 
// BECAUSE THEY LEVERAGE CLIENT SIDE FUNCTIONALITIES.
"use client";
import {useState, useEffect} from 'react';

// (47:09) - So we can also import getProviders and signIn from next-auth/react
import {getProviders,signIn} from 'next-auth/react'; 


type Provider = {   //(48:31)
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => { 

    const [providers,setProviders] = useState<Providers | null>(null);

    //Just call at the start (page load). (50:35)
    useEffect(() => {
      const fetchProviders = async () => {
        const res = await getProviders(); //comes directly from next auth imported above 'getProviders'
          console.log("AuthProviders.tsx component's fetchProviders res is: ",res);
        setProviders(res); 
      }

      fetchProviders(); //(51:15)
    }, []);  //Just call at the start (page load) BY SETTING THE dependency array [] to be empty!


    if(providers){
      return (
        <div>
          {Object.values(providers).map((provider: Provider, i) => (
              <button key={i} onClick={() => signIn(provider?.id)}>{provider.id}</button>
          ))}
        </div>
      )
    }
}

export default AuthProviders