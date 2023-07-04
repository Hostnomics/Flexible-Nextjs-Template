
import Image from 'next/image'
import Link from 'next/link';
import { footerLinks } from '../constants/constants';
// import React from 'react'
// import '../app/globals.css'



type ColumnProps = {
    title: string;
    links: Array<string>;
}

//Added FooterColumn Utility/Helper Compoennt 28:40 with immediate return () instead of {}
const FooterColumn = ({title, links}: ColumnProps) => (
    // <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <div className="footer_column">
    
        <h4 className="font-semibold"><b>{title}</b></h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <><Link href="/" key={link}>{link}<br></br></Link></>)}
        </ul>
    </div>
)


//Built out (26:27): https://youtu.be/986hztrfaSQ?t=1587
const Footer = () => {
  return (
    <section className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
            <div className="flex items-start flex-col">

                <Image
                    src="/logo-purple.svg"
                    width={115}
                    height={38}               
                    alt="Flexibble"
                />
                <p className="text-start text-sm font-normal mt-5 max-w-xs">
                    Flexibble is the world's leading community for patients to send and fill their prescriptions on the blockchain.
                </p>
            </div>  

            <div className="flex flex-wrap gap-12">
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

                <div className="flex-1 flex flex-col gap-4">
                        <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                        <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                </div>

                <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
                <div className="flex-1 flex flex-col gap-4">
                        <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                        <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                </div>

            </div>     
        </div>


        {/* <div className="flexBetween max-sm:flex-col w-full text-sm font-normal"> */}
        <div className="flexBetween footer_copyright">
            <p>@ 2023 Flexibble. All rights reserved</p>
            <p className="text-gray">
                <span className="text-black font-semibold">10,214</span> projects submitted
            </p>
        </div>
    </section>
)

}

export default Footer;