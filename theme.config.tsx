import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://research.artyficiallabs.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <link rel="icon" type="image/png" href="/arty.png" hrefLang="en" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Artyficial Research'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Creative AI Research'}
        />
      </>
    )
  },
  logo: () => {
    return (
      <NextImage alt="logo" src="/logo_white.png" height={170} width={200} />
    );
  },
  // Rest of the configuration remains the same
  project: {
    link: 'https://github.com/artyficial-labs/arty-platform-docs',
  },
  chat: {
    link: 'https://discord.gg/fYsFXz8ywm',
  },
  docsRepositoryBase: 'https://github.com/artyficial-labs/arty-platform-docs/tree/main/',
  footer: {
    text: 'Copyright © Artyficial Labs 2024',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – artyficial labs',
    }
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://artyficiallabs.com" target="_blank">
        🎉 Artyficial Labs Beta v1.0.0 is released. Sign up →
      </a>
    )
  },
}


export default config
