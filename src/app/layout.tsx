import './globals.css'

export const metadata = {
  title: 'Roooms',
  description: "Yangicha uy joylashuvi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(92529245, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
        }}
      />
      <script src="//code.jivosite.com/widget/v4PzJgphJT" async></script>
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/92529245" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript> */}
    </html>
  )
}
