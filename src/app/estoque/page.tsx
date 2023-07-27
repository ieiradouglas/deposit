'use client'

import {useSession} from 'next-auth/react'
import { Spinner  } from '@chakra-ui/react'
import {redirect} from 'next/navigation'

export default function Estoque(){
  // Status options: "authenticated" | "loading" | "unauthenticated"
  const {data:session, status} = useSession()
    
    if (status==='authenticated')
      return(
        <>
          <section className="w-full h-full flex items-center justify-center">
            <h1 className="text-lg font-bold">Estoque</h1>
          </section>
        </>
      )
      
      if(status === 'loading')
      return(
        <section className="flex flex-1 h-screen justify-center items-center"> 
          <Spinner 
            thickness='4px'
            size='xl'
            color='rgb(127,90,240)'
          />
        </section>
      )
      if (status==='unauthenticated')
      return(
          redirect('/login')
      )
  }
  


