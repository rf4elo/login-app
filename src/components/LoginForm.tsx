"use client"

import { authClient } from "@/lib/auth-client"
import { useState } from "react"
import { useRouter } from "next/navigation"



export function LoginForm() {

    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")

    const router = useRouter()


    async function onSubmit() {
        let formData = {
            emailData: email,
            passwordData: pass,
        }

        if(email == "" || pass == "") {
            alert("PREENCHA TODOS OS CAMPOS")
        } else if(!email.includes("@")) {
            alert("EMAIL INVÁLIDO")
        } else if(pass.length < 8) {
            alert("A SENHA DEVE CONTER AO MENOS 8 DIGITOS")
        } else {

            const { data, error } = await authClient.signIn.email({
                email: formData.emailData,
                password: formData.passwordData,
            }, {
                onRequest: (ctx) => {
                    // LOADING ANIMATION
                },
                onSuccess: (ctx) => {
                    router.replace("/Home")
                },
                onError: (ctx) => {
                    alert(`${ctx.error.status} | ${ctx.error.message}`)
                },
            })

        }

    }


    return(
        <div className="flex flex-col gap-7 my-7 " >
            
            <div className="input-field">
                <input type="text" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" />
                <label htmlFor="emailInput" >Email</label>
            </div>
            
            <div className="input-field">
                <input type="password" id="passInput" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="" />
                <label htmlFor="passInput" >Password</label>
            </div>

            <input className="h-10 text-white font-bold bg-indigo-600 rounded-xl cursor-pointer " type="submit" onClick={onSubmit} value="Log In" />

        </div>
    )
}
