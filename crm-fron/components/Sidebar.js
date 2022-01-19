import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import classes from  '../styles/Home.module.css'
import logo from '../public/img/pngwing.com.png'




const Sidebar = () => {

    // routing de next
    const router = useRouter();

    // console.log(router.pathname)

    return (
        <aside  className={`bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5 flex flex-col ${classes.sidebar}`} >
            

            <nav className="mt-5 list-none my-10 pt-5">
                <li className={router.pathname === "/pedidos" ? "bg-blue-800 p-2" : "p-2"}>
                    <Link href="/pedidos">
                        <a className="text-white block text-2xl">
                            Pedidos
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/" ? "bg-blue-800 p-2" : "p-2"}>
                    <Link href="/">
                        <a className="text-white block text-2xl">
                            Productos
                        </a>
                    </Link>
                </li>
            </nav>
          
            <div className='my-10'>
                 <p className='text-white bold'> Done with : MongoDB | Apollo server and Client | GraphQl | Next.js | React.js</p>
            </div>
        
         <div className='text-center mt-auto'>
               <a className={`bg-blue-800 ${classes.personallink}`} href='https://russell-h-jam.netlify.app/' target="_blank">Visit Portfolio</a>
                   
         </div>
        </aside>
    );
}

export default Sidebar;