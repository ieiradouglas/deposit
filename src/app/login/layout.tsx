'use client'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "../../components/Providers";


const inter = Inter({ subsets: ['latin'] })

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
      <head>
        <title>Deposit - Página de Login</title>
      </head>
      <body className={`${inter.className} h-screen bg-[#16161a] flex`}>
          <section className="max-w-[500px] flex flex-col justify-between items-center bg-[#7f5af0] p-4">
            <h1 className="uppercase font-bold text-3xl text-center mt-44 mx-5 text-white">Seu estoque em um clique.</h1>
            <h2 className="uppercase font-bold text-4xl text-center mx-5 text-white"> Acesso rápido, controle total.</h2>
            <img src="/empilhadeira.png" alt="Imagem de uma empilhadeira sendo pilotada por um homem." className="w-full mb-44"/>
          </section>
            <Providers>
              {children}
            </Providers>
      </body>
    </html>
  )
}
