import './globals.css'
import { NextIntlClientProvider } from 'next-intl/client';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ lang: 'uz' }, { lang: 'ru' }];
}

export const metadata = {
  title: 'Roooms',
  description: "Yangicha uy joylashuvi",
}

export default async function RootLayout({
  children,
  params
}: {
    children: React.ReactNode
    params: { lang: string }
  }) {
  
  let messages;
  try {
    messages = (await import(`../../messages/${params.lang}.json`)).default;
  } catch (error) {
    notFound();
  }
  
  return (
    <html lang={params.lang}>
      <body>
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
