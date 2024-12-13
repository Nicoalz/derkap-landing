import localFont from 'next/font/local'

export const champFont = localFont({
  src: [
    {
      path: './Champ.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Champ.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Champ.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-champ'
})