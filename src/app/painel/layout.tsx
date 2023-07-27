
import {Providers} from '../../components/Providers' 

export const metadata = {
  title: 'Deposit - Dashboard',
  description: 'Dashboard da aplicação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}


