import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import NextImage from 'next/image'

const config: DocsThemeConfig = {
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
  head: () => {
    return (
      <>
        <link rel="icon" type="image/png" href="/arty.png" hrefLang="en" />
      </>
    )
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
