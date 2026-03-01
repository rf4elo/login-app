
import { SignOutBtn } from "./SignOutBtn"



interface userSession{
    userName: string,
    userEmail: string,
}

export function Header(props: userSession) {



    return (
        <header className="fixed top-0 left-0 w-full bg-zinc-200 flex justify-center items-center gap-4 py-4" >
            <div>
                <h1>Nome: {props.userName}</h1>
                <h2>Email: {props.userEmail}</h2>
            </div>
            <SignOutBtn/>
        </header>
    )
}
