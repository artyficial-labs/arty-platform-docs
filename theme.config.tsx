import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: () => {
    return (
    <Image
    alt= 'logo'
    src="/logo_white.png"
    height={90}
    width={180}
    />
    )
  },
  project: {
    link: 'https://github.com/artyficial-labs/arty-platform-docs',
  },
  chat: {
    link: 'https://discord.gg/d7j9un4s',
  },
  docsRepositoryBase: 'https://github.com/artyficial-labs/arty-platform-docs/tree/dev/',
  footer: {
    text: 'Artyficial Docs 2024',
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
        🎉 Artyficial Labs 2.0 is released. Read more →
      </a>
    )
  },
}


export default config
