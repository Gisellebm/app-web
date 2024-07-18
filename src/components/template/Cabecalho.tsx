import Carrinho from "./Carrinho";
import Logo from "./Logo";


export default function Cabecalho() {
    return (
        <header className="flex justify-between items-center bg-zinc-800 H-20 PX-10">
            <Logo />
            <Carrinho />
        </header>
    )
}