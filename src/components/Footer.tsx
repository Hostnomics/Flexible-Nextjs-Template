import Image from 'next/image'
import React from 'react'

//Built out (26:27): https://youtu.be/986hztrfaSQ?t=1587

const Footer = () => {
  return (
    <footer className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
            <div className="flex items-start flex-col">
{/* https://youtu.be/986hztrfaSQ?t=1659 */}
                <Image
                    src="/logo-purple.svg"
                    width={115}
                    height={38}               
                    alt="puple-logo"
                />
                <p className="text-start text-sm font-normal mt-5 max-w-xs">
                    Flexibble is the world's leading community for patients to send and fill their prescriptions on the blockchain.
                </p>
            </div>        
        </div>
    </footer>
  )
}

export default Footer