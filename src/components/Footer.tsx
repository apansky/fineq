import Link from 'next/link';
import React from 'react';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <Link href="/" className="flex items-center gap-2 mb-4">
          <svg id="Vrstva_1" data-name="Vrstva 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.68 28.35" width={98} height={28}>
            <path d="M11.34,0c.39,0,.72.14,1,.42.28.28.42.61.42,1s-.14.72-.42,1-.61.42-1,.42c-3.78,0-5.67,1.89-5.67,5.67v1.06h4.27c.39,0,.72.14,1,.42s.42.61.42,1-.14.72-.42,1c-.28.28-.61.42-1,.42h-4.27v14.53c0,.39-.14.72-.42,1s-.61.42-1,.42-.72-.14-1-.42c-.28-.28-.42-.61-.42-1v-14.53h-1.42c-.39,0-.72-.14-1-.42-.28-.28-.42-.61-.42-1s.14-.72.42-1c.28-.28.61-.42,1-.42h1.42v-1.06C2.83,2.83,5.67,0,11.34,0Z"/>
            <path d="M18.78,4.25c0,.48-.17.9-.52,1.25s-.76.52-1.25.52-.9-.17-1.25-.52c-.35-.35-.52-.76-.52-1.25s.17-.9.52-1.25c.35-.35.76-.52,1.25-.52s.9.17,1.25.52c.35.35.52.76.52,1.25ZM15.59,9.92c0-.39.14-.72.42-1,.28-.28.61-.42,1-.42s.72.14,1,.42c.28.28.42.61.42,1v17.01c0,.39-.14.72-.42,1s-.61.42-1,.42-.72-.14-1-.42c-.28-.28-.42-.61-.42-1V9.92Z"/>
            <path d="M22.68,9.92c0-.39.14-.72.42-1,.28-.28.61-.42,1-.42s.72.14,1,.42c.28.28.42.61.42,1v1.15c1.77-1.71,3.9-2.57,6.38-2.57s4.71.9,6.51,2.7c1.8,1.8,2.7,3.97,2.7,6.51v9.21c0,.39-.14.72-.42,1s-.61.42-1,.42-.72-.14-1-.42c-.28-.28-.42-.61-.42-1v-9.21c0-1.76-.62-3.26-1.87-4.51-1.25-1.25-2.75-1.87-4.51-1.87s-3.26.62-4.51,1.87c-1.25,1.25-1.87,2.75-1.87,4.51v9.21c0,.39-.14.72-.42,1s-.61.42-1,.42-.72-.14-1-.42c-.28-.28-.42-.61-.42-1V9.92Z"/>
            <path className="cls-1" fill="#ed8224" d="M45.35,0h17.01c.39,0,.72.14,1,.42.28.28.42.61.42,1s-.14.72-.42,1-.61.42-1,.42h-15.59v9.92h11.34c.39,0,.72.14,1,.42.28.28.42.61.42,1s-.14.72-.42,1-.61.42-1,.42h-11.34v9.92h15.59c.39,0,.72.14,1,.42.28.28.42.61.42,1s-.14.72-.42,1-.61.42-1,.42h-17.01c-.39,0-.72-.14-1-.42-.28-.28-.42-.61-.42-1V1.42c0-.39.14-.72.42-1,.28-.28.61-.42,1-.42Z"/>
            <path className="cls-1" fill="#ed8224" d="M87.47,25.16c-2.55,2.13-5.54,3.19-8.96,3.19-3.91,0-7.25-1.38-10.02-4.15-2.77-2.77-4.15-6.11-4.15-10.02s1.38-7.25,4.15-10.02,6.11-4.15,10.02-4.15,7.25,1.38,10.02,4.15c2.77,2.77,4.15,6.11,4.15,10.02,0,3.43-1.06,6.41-3.19,8.96l2.8,2.8c.26.28.39.61.39.99s-.14.72-.42,1-.61.42-1,.42-.73-.14-1.03-.43l-2.76-2.76ZM85.45,23.14l-2.99-2.99c-.27-.28-.41-.62-.41-1.01s.14-.72.42-1c.28-.28.61-.42,1-.42s.73.14,1.01.41l2.99,2.99c1.58-1.98,2.37-4.3,2.37-6.94,0-3.13-1.11-5.8-3.32-8.02-2.21-2.22-4.89-3.32-8.02-3.32s-5.8,1.11-8.02,3.32c-2.22,2.21-3.32,4.89-3.32,8.02s1.11,5.8,3.32,8.02c2.21,2.22,4.89,3.32,8.02,3.32,2.65,0,4.96-.79,6.94-2.37Z"/>
          </svg>
        </Link>
        <p className="mt-3.5 text-foreground-accent">
          {footerDetails.subheading}
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Rýchle linky</h4>
        <ul className="text-foreground-accent">
          {footerDetails.quickLinks.map(link => (
            <li key={link.text} className="mb-2">
              <Link href={link.url} className="hover:text-primary transition-colors">{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Kontakujte nás</h4>
        {footerDetails.email && <a href={`mailto:${footerDetails.email}`}  className="block text-foreground-accent hover:text-primary transition-colors">Email: {footerDetails.email}</a>}
        {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-primary transition-colors">Telefón: {footerDetails.telephone}</a>}
        {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
                {Object.keys(footerDetails.socials).map(platformName => {
                    if (platformName && footerDetails.socials[platformName]) {
                        return (
                            <Link
                                href={footerDetails.socials[platformName]}
                                key={platformName}
                                aria-label={platformName}
                            >
                                {getPlatformIconByName(platformName)}
                            </Link>
                        )
                    }
                })}
            </div>
        )}
      </div>
      </div>
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
