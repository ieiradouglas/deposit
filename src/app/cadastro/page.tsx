'use client'

import {Button} from '@chakra-ui/react'
import Link from 'next/link'

export default function Cadastro(){
 return (
   <main className="w-full h-full flex justify-center items-center">
    <Link className="absolute bottom-0 right-0 mr-6 mb-6" href='/'><Button className="min-w-[180px] min-h-[60px] bg-[rgb(127,90,240)] hover:bg-[rgba(255,255,255,0.8)]">Voltar</Button></Link>
    <h1> Página de cadastro</h1>
   </main>
 )
}