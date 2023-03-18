import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {use} from 'react'
import Pokemon from './components/Pokemon'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <>
    <Pokemon/>
    </>
  )

}


