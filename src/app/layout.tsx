import type { Metadata } from 'next';
import '@/styles/globals.css';
import { CartProvider } from '@/lib/CartContext';

export const metadata: Metadata = {
  title: 'RE:SET | The Ultimate Void Edition',
  description: 'Premium JJK-inspired anime streetwear. Gojo-approved. Curse-resistant fabric. Limited drops.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&family=Oxanium:wght@400;600;700&family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ if(typeof emailjs !== 'undefined') emailjs.init("vvwQQcIy8xrsxA980"); })();`,
          }}
        />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
