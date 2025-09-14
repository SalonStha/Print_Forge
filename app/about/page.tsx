import Image from "next/image";
import { Divider } from "@heroui/divider";

export default function About() {
    return (
        <main>
            <section className="flex flex-col items-start mx-auto space-y-6 pl-5 pr-5 pb-8">
                <div className="flex flex-col md:flex-row md:p-[40px] md:gap-[40px] lg:p-[48px] max-w-screen mx-auto justify-center lg:gap-[200px]">
                    <div className="mb-3 place-self-center lg:col-span-5">
                        <Image
                            src="/about-page-image.png"
                            alt="Hero Image"
                            width={600}
                            height={500}
                        />
                    </div>
                    <div className="place-self-center lg:col-span-7">
                        <p className="mb-5 font-normal text-gray-500">
                            ABOUT PRINTFORGE
                        </p>
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
                            Empowering makers worldwide
                        </h1>
                        <p
                            className="max-w-2xl text-gray-500 font-regular text-md md:text-lg lg:mb-8"
                        >
                            Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.<br /><br />

                            Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.
                        </p>
                    </div>
                </div>
                <Divider className="my-5" />
                <div className="mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="space-y-[40px] md:grid md:grid-cols-2 lg:grid-cols-3 lg:space-x-[px] md:gap-12 md:space-y-0 text-md md:text-lg">
                        <div>
                            <Image src="https://cdn-icons-png.flaticon.com/128/3171/3171906.png" alt="" width={40} height={40} className="mb-3" />
                            <h3 className="mb-2 font-bold">100K+ Models</h3>
                            <p className="text-gray-500 dark:text-gray-400">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                        </div>
                        <div>
                            <Image src="https://cdn-icons-png.flaticon.com/128/594/594903.png" alt="" width={40} height={40} className="mb-3" />
                            <h3 className="mb-2 font-bold">Active Community</h3>
                            <p className="text-gray-500 dark:text-gray-400">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                        </div>
                        <div>
                            <Image src="https://cdn-icons-png.flaticon.com/128/395/395841.png" alt="" width={40} height={40} className="mb-3" />
                            <h3 className="mb-2 font-bold">Free to Use</h3>
                            <p className="text-gray-500 dark:text-gray-400">Most models are free to download, with optional premium features for power users.</p>
                        </div>
                    </div>
                </div>
                <Divider className="my-10" />
                <div className="space-y-[20px] mx-auto max-w-4xl sm:py-16 lg:px-[40px]">
                    <h1 className="font-bold text-4xl md:text-5xl">Our vision</h1>
                    <p className="max-w-2xl text-gray-500 font-regular text-md md:text-lg lg:mb-8">At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what&apos;s possible with 3D printing.<br /><br />
                        Whether you&apos;re a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
                </div>
            </section>
        </main>
    )

}