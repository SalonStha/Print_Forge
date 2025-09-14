import { getAllCategories } from "@/app/lib/categories";
import { Category } from "@/app/types";
import Link from "next/link";

export default function CategoryList() {
    const categories = getAllCategories();
    return (
        <div className="mx-auto max-w-7xl px-4 mt-20">
        <div className="flex justify-center mb-8">
          <h2 className="font-bold text-gray-900 lg:text-2xl text-xl">View Categories</h2>
        </div>
        <div className="grid space-y-3 md:grid-cols-2 lg:grid-cols-4 lg:space-y-3 lg:gap-x-3 md:space-y-3 md:gap-x-3">
          {
            categories?.map((category: Category) => (
              <div key={category.slug} className="group relative">
                <Link href={`/3d_models?category=${category.slug}`}>
                  <div className="flex flex-col items-center bg-gray-100 border-gray-100 border-1 rounded-lg p-10 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-md text-gray-800 truncate font-semibold">
                      {category.displayName}
                    </h3>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
}