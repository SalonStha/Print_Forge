import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
    return (
        <>
            <section>
                <div className="flex flex-col md:flex-row gap-[20px] p-[20px] md:gap-[40px] max-w-7xl mx-auto justify-center lg:gap-[50px] xl:gap-[250px]">
                    <div className="place-self-center lg:col-span-7">
                        <p
                            className="max-w-2xl mb-6 lg:mb-8 md:text-md lg:text-lg sm:text-md font-medium hidden md:block"
                        >
                            Your go-to platform for 3D printing files
                        </p>
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl"
                        >
                            Discover what&apos;s possible with 3D printing
                        </h1>
                        <p
                            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-lg sm:text-md"
                        >
                            Join our community of creators and explore a vast library of user-submitted models.
                        </p>
                        <Link
                            className="group relative inline-flex items-center overflow-hidden rounded-sm bg-indigo-600 px-8 py-3 text-white focus:ring-3 focus:outline-hidden"
                            href="/3d_models"
                        >
                            <span className="pointer-events-none absolute right-[-1.5rem] opacity-0 transition-all duration-300 group-hover:right-4 group-hover:opacity-100">
                                <svg
                                    className="size-5 shadow-sm"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                            <span className="text-md font-medium transition-all duration-300 rounded-lg group-hover:mr-6">
                                Browse Models
                            </span>
                        </Link>
                    </div>
                    <div className="lg:mt-0 place-self-center lg:col-span-5">
                        <Image
                            src="/mobile-home-page-hero-img.png"
                            alt="Hero Image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
