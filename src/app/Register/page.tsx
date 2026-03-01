import { RegisterForm } from "./components/RegisterForm"
import Link from "next/link";



export default function Home() {

  return (
    <main className="flex justify-center items-center min-h-screen" >
      <div className="min-w-75">

        <h1 className="text-center text-indigo-600 font-bold text-5xl ">REGISTER</h1>

        <RegisterForm/>

        <p className="text-center ">Já tem uma conta? <Link href={"/"} className="text-indigo-600 underline" >Entre!</Link></p>

      </div>
    </main>
  )
}
