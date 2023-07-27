import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Deposit',
  description: 'Seu gerenciador de estoque.',
}

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode,
}) {
  return (
    <html lang="pt_BR">
      <body>
        {children}
      </body>
    </html>
  )
}
