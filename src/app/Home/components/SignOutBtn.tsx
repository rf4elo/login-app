"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"


export function SignOutBtn() {

    const router = useRouter();

    async function SignOut() {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("/")
                }
            }
        })
    }

    return (
        <button onClick={SignOut} className="border-indigo-600 border-2 rounded-2xl p-3 bg-indigo-200 font-bold text-indigo-600 cursor-pointer " >Sign Out</button>
    )
}
