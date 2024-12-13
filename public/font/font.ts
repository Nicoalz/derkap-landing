import localFont from 'next/font/local'

export const bricolageGrotesqueFont = localFont({
  src: [
    {
      path: './BricolageGrotesque.ttf',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-bricolage-grotesque'
})