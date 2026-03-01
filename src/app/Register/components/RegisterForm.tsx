"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"


export function RegisterForm() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [confirm, setConfirm] = useState<string>("")

    const router = useRouter()


    async function onSubmit() {
        
        let formData = {
            nameData: name,
            emailData: email,
            passwordData: pass,
        }


        if(name == "" || email == "" || pass == "" || confirm == "") {
            alert("PREENCHA TODOS OS CAMPOS")
        } else if(!email.includes("@")) {
            alert("EMAIL INVÁLIDO")
        } else if(pass.length < 8) {
            alert("A SENHA DEVE CONTER AO MENOS 8 DIGITOS")
        } else if(pass != confirm) {
            alert("AS SENHAS DEVEM SER IGUAIS")
        } else {


            const { data, error } = await authClient.signUp.email({
                email: formData.emailData,
                name: formData.nameData,
                password: formData.passwordData,
                callbackURL: "/Home",
            }, {
                onRequest: (ctx) => {
                    // ANIMAÇÃO DE CARREGAMENTO
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
                <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} id="nameInput" placeholder="" />
                <label htmlFor="nameInput" >Name</label>
            </div>

            <div className="input-field">
                <input type="text" value={email} onChange={(evt) => setEmail(evt.target.value)} id="emailInput" placeholder="" />
                <label htmlFor="emailInput" >Email</label>
            </div>
            
            <div className="input-field">
                <input type="password" value={pass} onChange={(evt) => setPass(evt.target.value)}id="passInput" placeholder="" />
                <label htmlFor="passInput" >Password</label>
            </div>

            <div className="input-field">
                <input type="password" value={confirm} onChange={(evt) => setConfirm(evt.target.value)} id="confirmInput" placeholder="" />
                <label htmlFor="confirmInput" >Confirm password</label>
            </div>

            <input className="h-10 text-white font-bold bg-indigo-600 rounded-xl cursor-pointer " type="submit" onClick={onSubmit} value="Register" />

        </div>
    )
}
