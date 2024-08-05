import Image from 'next/image'
import vercel from '@/public/vercel.svg'

export default function Footer(){
    return(
        <footer className="w-full h-80 bg-secondary items-center flex justify-around">
            <div className=""></div>
            <div className="">
                <Image alt='logo' height={256} width={256} src={vercel} />
            </div>
            <div className=""></div>
        </footer>
    )
}