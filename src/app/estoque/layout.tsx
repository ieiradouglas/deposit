
import {Providers} from '../../components/Providers' 
import Navbar from '../../components/Navbar'         

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
          <Navbar/> 
          {children}
        </Providers>
      </body>
    </html>
  )
}


