'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathName = usePathname();
    console.log(pathName); 
    return (
        <header className="bg-white border-b-1 shadow-lg border-gray-200" style={{position : "sticky", zIndex : "100", top : "0"}}>
            <nav className="flex justify-between p-4">
                <div className="relative">
                    <Link href="/">
                    {/* Desktop logo */}
                    <Image
                        src="/printforge-logo-1.png"
                        alt="PrintForge Logo"
                        className="h-auto hidden md:block"
                        width={200}
                        height={40}
                    />
                    {/* Mobile logo */}
                    <Image
                        src="/printforge-logo-mobile.png"
                        alt="PrintForge Logo"
                        className="h-auto block md:hidden"
                        width={40}
                        height={40}
                    />
                    </Link>
                </div>
                <ul className="flex items-center gap-6">
                    <Link
                        href="/3d_models"
                        className={pathName === '/3d_models' ? "is-active text-yellow-500" : "font-semibold text-[15px] hover:text-yellow-600"}
                    >
                        3D MODELS
                    </Link>
                    <Link
                        href="/about"
                        className={pathName === '/about' ? "is-active text-yellow-500" : "font-semibold text-[15px] hover:text-yellow-600"}
                    >
                        ABOUT
                    </Link>
                </ul>
            </nav>
        </header>
    );
}