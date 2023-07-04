import { footerLinks } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type ColumnProps = {
    title: string;
    links: Array<string>;
}

//Added FooterColumn Utility/Helper Compoennt 28:40 with immediate return () instead of {}
const FooterColumn = ({title, links}: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link href="/" key={link}>
                {link}
            </Link>)}
        </ul>
    </div>
)


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
            <div className="flex flex-wrap gap-12">
                <FooterColumn 
                    title={footerLinks[0].title}
                    links={footerLinks[0].links}
                />
            </div>      
        </div>
    </footer>
  )
}

export default Footer