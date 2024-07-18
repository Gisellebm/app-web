import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";


export default function Carrinho() {
    return (
        <Link href="/carrinho">
            <div className="relative">
                <IconShoppingCart size={32} stroke={1}/>
                <div 
                    className="absolute -right-2..5 -top-2.5 size-6 bg-red-500 rounded-full
                    flex justify-center items-center text-xs">
                        99
                </div>
            </div>
        </Link>
    )
}