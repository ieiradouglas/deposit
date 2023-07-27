'use client'

import Head from 'next/head'
import {useSession, signOut} from 'next-auth/react'
import { Input, InputLeftAddon, InputGroup, Stack, Button } from '@chakra-ui/react'
import {redirect} from 'next/navigation'

import Navbar from '../../components/Navbar'

export default function Painel(){
  // Status options: "authenticated" | "loading" | "unauthenticated"
  const {data:session, status} = useSession()
    
    if (status==='authenticated')
      return(
        <>
          <Navbar/> 
          <section className="w-full h-full flex items-center justify-center">
            <h1 className="text-lg font-bold">Painel</h1>
          </section>
        </>
      )

   

      if (status==='unauthenticated')
      return(
          redirect('/login')
      )
  }
  


