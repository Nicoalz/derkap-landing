import Head from 'next/head';

const SEO = ({
  title = 'Derkap - L’App de Défis Fun pour s’Éclater Entre Amis !',
  description = 'Relevez des défis hilarants avec vos amis grâce à Derkap ! Votez, personnalisez vos groupes, et partagez des moments de fun inoubliables. Rires garantis, sans prise de tête !',
  image = '/ogimage.webp',
  url = 'https://derkap.fr/',
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
      <meta name='apple-mobile-web-app-title' content='Derkap' />

      <meta name='msapplication-TileColor' content='#9747FF' />
      <meta name='theme-color' content='#f8ece0' />
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

      <meta name='description' content={description} />
      <meta
        name='keyword'
        content='Défis amusants, Application fun, Amusement entre amis, Partage et rire, Compétition amicale, Moments hilarants, Défis en groupe, Connecter avec ses amis, Fun quotidien, Plateforme interactive'
      />
      <meta name='google' content='notranslate' />

      {/* OGTAGS */}
      <meta property='og:site_name' content='Derkap - Défis Fun Entre Amis' />
      <meta property='og:title' content={title} />
      <meta property='og:locale' content='fr_FR' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:bsite' />

      {/* TWITTER CARDS  */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:domain' content='derkap.fr' />

      {/* FAVICON */}
      <link
        rel='icon'
        type='image/png'
        href='/favicon/favicon-96x96.png'
        sizes='96x96'
      />
      <link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />

      {/* SEO */}
      <link rel='canonical' href={url} />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
