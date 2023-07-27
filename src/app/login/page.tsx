'use client'
import { Input, InputLeftAddon, InputGroup, Stack, Button, Spinner } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"

import {redirect} from 'next/navigation'
import {FcGoogle} from 'react-icons/fc'

export default function Home() {
  const {data: session, status} = useSession()
  
  if(status === 'authenticated')
  return(
    redirect('/painel')
  )

  if(status === 'loading')
  return(
    <section className="flex flex-1 justify-center items-center"> 
      <Spinner 
        thickness='4px'
        size='xl'
        color='rgb(127,90,240)'
      />
    </section>
  )

  return (
    <section className="flex flex-1 justify-center items-center"> 
      <form  className="flex flex-col gap-5 items-center justify-center w-full max-w-[350px]">
        <img src="/deposit_logo.svg" alt="Logo deposit" className="w-full max-w-[200px]"/>
        <h1 className="text-white uppercase font-bold text-4xl">Deposit</h1>

          <Stack spacing={4} className="text-[#fff]">
            
            <InputGroup>
              <InputLeftAddon children='E-mail:' className="min-w-[40px] text-black"/>
              <Input required type='email' placeholder='Digite seu e-mail...' />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children='Senha:' className="min-w-[40px] text-black"/>
              <Input required type='password' placeholder='Digite sua senha...' />
            </InputGroup>

          </Stack>

          <div className="flex flex-col gap-3">
            <Button onClick={(e)=>{e.preventDefault();console.log(process.env.NEXTAUTH_URL)}} type="submit" className="min-w-[180px] bg-[rgb(127,90,240)] hover:bg-[rgba(255,255,255,0.8)]">Entrar</Button>
            <Button onClick={()=>signIn('google', { callbackUrl: '/painel' })} className="min-w-[180px] hover:bg-[rgb(127,90,240)] bg-[rgba(255,255,255,0.8)]" leftIcon={<FcGoogle/>}>Continue com o Google</Button>
          </div>

      </form>
    </section>
  )
}

