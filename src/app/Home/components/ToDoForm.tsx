"use client"

import { useState } from "react";
import ItemsList from "./ItemList";


export function ToDoForm() {

    
    const [listValue, setListValue] = useState<any[]>([]);
    const [inputItem, setItem] = useState<string>("");


    const addItems = () => {
        if(inputItem.trim() !== "") {
            setListValue([...listValue, inputItem]);
            setItem("");
        }
    }

    return (
        <div>

            <h1 className="text-center text-5xl font-bold text-indigo-900 " >Lista de Tarefas</h1>

            <div className="min-h-87.5 min-w-162.5 p-5 " > { /* INPUTS PARA TAREFAS */ }
                <div className="flex bg-zinc-100 rounded-3xl border-b-indigo-950 border-b-4 px-4 py-2 " >

                    <input className="outline-none p-3 w-full " type="text" placeholder="Adicione uma nova tarefa..." value={inputItem} onChange={(e) => setItem(e.target.value)} />

                    <button className="flex items-center justify-center px-4 min-h-full bg-zinc-300 rounded-2xl cursor-pointer hover:bg-zinc-400 hover:text-white transition-all " onClick={addItems} >Enviar</button>

                </div>
                <div className="bg-zinc-200 min-h-12.5 max-h-100 w-11/12 m-auto py-2 px-6 rounded-b-3xl overflow-y-auto " > { /* TAREFAS */ }

                    {listValue.map((item, index) => (
                    <span key={index} >
                        <ItemsList value={item} />
                    </span>
                    ))}


                </div>
            </div>
        </div>
    )
    
}
