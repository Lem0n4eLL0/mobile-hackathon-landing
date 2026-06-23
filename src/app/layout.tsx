import localFont from 'next/font/local'
import type { Metadata } from 'next'
import '@/styles/index.css'
import clsx from 'clsx'

const ysDisplayFont = localFont({
  src: [
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Bold.woff',
      weight: '700',
    },
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Bold.woff2',
      weight: '700',
    },
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Medium.woff',
      weight: '500',
    },
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Medium.woff2',
      weight: '500',
    },
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Regular.woff',
      weight: '400',
    },
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Light.woff',
      weight: '300',
    },
    {
      path: '../utils/fonts/YSDisplay/YSDisplay-Light.woff2',
      weight: '300',
    },
  ],
  variable: '--main-title-font',
})

const ysTextFont = localFont({
  src: [
    {
      path: '../utils/fonts/YSText/YSText-Bold.woff',
      weight: '700',
    },
    {
      path: '../utils/fonts/YSText/YSText-Bold.woff2',
      weight: '700',
    },
    {
      path: '../utils/fonts/YSText/YSText-Bold-Italic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../utils/fonts/YSText/YSText-Bold-Italic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../utils/fonts/YSText/YSText-Medium.woff',
      weight: '500',
    },
    {
      path: '../utils/fonts/YSText/YSText-Medium.woff2',
      weight: '500',
    },
    {
      path: '../utils/fonts/YSText/YSText-Medium-Italic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../utils/fonts/YSText/YSText-Medium-Italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../utils/fonts/YSText/YSText-Regular.woff',
      weight: '400',
    },
    {
      path: '../utils/fonts/YSText/YSText-Regular.woff2',
      weight: '400',
    },
    {
      path: '../utils/fonts/YSText/YSText-Regular-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../utils/fonts/YSText/YSText-Regular-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../utils/fonts/YSText/YSText-Light.woff',
      weight: '300',
    },
    {
      path: '../utils/fonts/YSText/YSText-Light.woff2',
      weight: '300',
    },
  ],
  variable: '--main-text-font',
})

export const metadata: Metadata = {
  title: 'Yandex Mobile Runtime',
  description: 'Фестиваль практики и технобатлов для мобильных разработчиков',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        ysDisplayFont.className,
        ysDisplayFont.variable,
        ysTextFont.className,
        ysTextFont.variable
      )}
    >
      <body>{children}</body>
    </html>
  )
}
