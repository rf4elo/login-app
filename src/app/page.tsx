import { LoginForm } from "@/components/LoginForm"
import Link from "next/link"




export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen" >
      <div className="min-w-75">

        <h1 className="text-center text-indigo-600 font-bold text-5xl ">LOGIN</h1>

        <LoginForm/>

        <p className="text-center ">Não tem conta? <Link href={"/Register"} className="text-indigo-600 underline" >Crie uma!</Link></p>

      </div>
    </main>
  )
}
