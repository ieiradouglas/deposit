'use client'
import Layout from '../app/layout'
import { Input, InputLeftAddon, InputGroup, Stack, Button } from '@chakra-ui/react'
import Link from 'next/link'


export default function Home() {

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

              <div className="flex gap-3">
                <Button onClick={(e)=>e.preventDefault()} type="submit" className="min-w-[180px] bg-[rgb(127,90,240)] hover:bg-[rgba(255,255,255,0.8)]">Entrar</Button>
                <Link href="/cadastro"><Button className="min-w-[180px] bg-[rgb(127,90,240)] hover:bg-[rgba(255,255,255,0.8)]">Novo por aqui?</Button></Link>
              </div>

            </form>
          </section>
  )
}
