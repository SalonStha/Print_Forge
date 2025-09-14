import { ModelDetailPageProps } from "@/app/types";
import { getModelById } from "@/app/lib/models";
import Image from "next/image";

export default async function ModelsDetailPage({ params }: ModelDetailPageProps) {
    const { id } = await params
    const modelDetail = await getModelById(id)
    return (
        <section className="py-8 bg-white md:py-16 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <Image
                            src={modelDetail.image}
                            alt={modelDetail.name}
                            width={300}
                            height={300}
                            className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                        />
                    </div>
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <div className="flex gap-2 items-center mb-5">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/263/263417.png"
                                width={30}
                                height={30}
                                alt="Flash Sale"
                            />
                            <p className="text-[16px] font-medium">{modelDetail.likes}</p>
                        </div>
                        <h1
                            className="text-3xl font-semibold text-gray-900 md:text-4xl"
                        >
                            {modelDetail.name}
                        </h1>
                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <p className="px-3 py-2 bg-indigo-500 rounded-lg inline-block text-white">
                                {modelDetail.category}
                            </p>
                        </div>
                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                        <p className="text-gray-800 text-md md:text-lg line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">{modelDetail.description}</p>
                        <div className="flex gap-5 items-center">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/591/591576.png"
                                width={30}
                                height={30}
                                alt="Flash Sale"
                            />
                            <p className="text-[16px] font-medium">
                                Added on: {new Date(modelDetail.dateAdded).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}