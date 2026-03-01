
interface ItemsListProps {
    value: string;

}

export default function ItemsList(props: ItemsListProps) {

    return(
        <div className="h-8 w-full flex items-center justify-center bg-zinc-300 rounded-xl mb-2 p-3" >
            <p className="w-full text-left " >{props.value}</p>
            <button className="text-red-700 hover:underline cursor-pointer " >Deletar</button>
        </div>
    )
}
