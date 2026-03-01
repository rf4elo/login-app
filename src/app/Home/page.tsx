
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ToDoForm } from "./components/ToDoForm";
import { auth } from "@/lib/auth"
import { Header } from "./components/Header"



export default async function Home() {

  // SESSION VERIFICATION
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) {
    redirect("/")
  }

  return(
    <main className="min-h-screen flex flex-col items-center justify-center gap-5 relative " >

      <Header userName={session.user.name} userEmail={session.user.email} />

      <ToDoForm/>
    </main>
  )
}
