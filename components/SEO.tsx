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
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='msapplication-TileColor' content='#9747FF' />
      <meta name='theme-color' content='#ffffff' />
      <title>{title}</title>
      <meta name='apple-mobile-web-app-title' content={title} />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='description' content={description} />
      <meta
        name='keyword'
        content='Défis amusants, Application fun, Amusement entre amis, Partage et rire, Compétition amicale, Moments hilarants, Défis en groupe, Connecter avec ses amis, Fun quotidien, Plateforme interactive'
      />
      <meta name='google' content='notranslate' />

      {/* OGTAGS */}
      <meta
        property='og:site_name'
        content='Derkap - Défis Fun Entre Amis'
      />
      <meta property='og:title' content={title} />
      <meta property='og:locale' content='fr_FR' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:bsite' />

      {/* TWITTER CARDS  */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:title'
        content={title}
      />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:domain' content='derkap.fr' />

      {/* SEO */}
      <link rel='canonical' href={url} />
    </Head>
  );
};

export default SEO;
