import { IMenuItem, ISocials } from '@/types';

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    'Finančnému sprostredkovaniu sa venujeme už od roku 2010 a vlastná značka je prirodzeným vyústením našej kvalitnej práce. Sme lokálna značka, ktorá stavia na tom, že naše mesto nie je veľké a dobré i zlé referencie sa šíria rýchlosťou blesku. My Vám garantujeme 100% odbornosť, osobný prístup a spokojnosť. Stojíme si za našou prácou a sme v nej fakt dobrí.',
  quickLinks: [
    {
      text: 'Features',
      url: '#features'
    },
    {
      text: 'Pricing',
      url: '#pricing'
    },
    {
      text: 'Testimonials',
      url: '#testimonials'
    }
  ],
  email: 'address@yoursite.com',
  telephone: '+1 (123) 456-7890',
  socials: {
    twitter: 'https://twitter.com/Twitter',
    facebook: 'https://facebook.com',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com'
  }
};
