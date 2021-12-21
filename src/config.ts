export const SITE = {
  title: 'FullStack Documentation',
  description: 'Documentación del proyecto nutriguide.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: '', header: true },
    { text: 'Proyecto', header: true },
    { text: 'Introduction', link: 'en/introduction' },
    { text: 'backend', link: 'en/backend' },
    { text: 'frontend', link: 'en/frontend' },

    { text: 'Apuntes', header: true },
    { text: 'Instalación de nginx', link: 'en/nginx' },
    { text: 'Comandos de docker', link: 'en/docker1' },
    { text: 'Instalación docker', link: 'en/docker2' },
    { text: 'Configuración cloud', link: 'en/cloud' },
    { text: 'Conexión SSH con DigitalOcean', link: 'en/ssh' },
    { text: 'Doas', link: 'en/doas' },
    { text: 'Go', link: 'en/go' },
  ],
};
