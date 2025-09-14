/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { getAllModels } from "../app/lib/models"
import type { Model } from "../app/types"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

// In-memory cache for models
let cachedModels: Model[] | null = null;

export default function Models3DPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [models, setModels] = useState<Model[]>([])
    const [filteredModels, setFilteredModels] = useState<Model[]>([])
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // Fetch models on component mount, using cache if available
    useEffect(() => {
        async function fetchModels() {
            setIsLoading(true)
            if (cachedModels) {
                setModels(cachedModels)
                setFilteredModels(cachedModels)
                setIsLoading(false)
            } else {
                const allModels = await getAllModels()
                cachedModels = allModels
                setModels(allModels)
                setFilteredModels(allModels)
                setIsLoading(false)
            }
        }
        fetchModels()
    }, [])

    // Update selected categories when URL params change
    useEffect(() => {
        const categories = searchParams.getAll('category')
        setSelectedCategories(categories)
    }, [searchParams])

    // Update URL when selected categories change
    useEffect(() => {
        const query = selectedCategories.length > 0
            ? `?category=${selectedCategories.join('&category=')}`
            : ''
        router.push(`/3d_models${query}`)
    }, [selectedCategories, router])

    // Debounce function for search
    const debounce = (func: (...args: any) => void) => {
        let timeoutId: NodeJS.Timeout
        return (...args: any) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func(...args), 1000)
        }
    }
    // Handle search filtering
    const handleSearch = useCallback((search: string) => {
        const lowerCaseQuery = search.toLowerCase()
        const filtered = models.filter((model: Model) =>
            model.name.toLowerCase().includes(lowerCaseQuery) ||
            model.description.toLowerCase().includes(lowerCaseQuery) ||
            model.category.toLowerCase().includes(lowerCaseQuery)
        )
        setFilteredModels(
            selectedCategories.length > 0
                ? filtered.filter((model: Model) => selectedCategories.includes(model.category))
                : filtered
        )
    }, [models, selectedCategories])

    // Debounced search handler
    const debouncedSearch = useCallback(debounce((search: string) => {
        handleSearch(search)
    }), [handleSearch])

    // Update search and trigger debounced search
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value
        setSearchQuery(search)
        debouncedSearch(search)
    }

    // Clear search query
    const handleClearSearch = () => {
        setSearchQuery("")
        debouncedSearch("")
    }

    // Update filtered models when categories or search change
    useEffect(() => {
        const filtered = models.filter((model: Model) =>
            selectedCategories.length > 0
                ? selectedCategories.includes(model.category)
                : true
        ).filter((model: Model) =>
            searchQuery
                ? model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                model.category.toLowerCase().includes(searchQuery.toLowerCase())
                : true
        )
        setFilteredModels(filtered)
    }, [selectedCategories, models, searchQuery])

    // Compute unique categories and sort them
    const categories = [...new Set(models.map((model: Model) => model.category))].sort()

    // Handle clear filters
    const handleClearFilters = () => {
        setSelectedCategories([])
        setSearchQuery("")
        router.push('/3d_models')
        setIsDrawerOpen(false)
    }

    // Handle checkbox change
    const handleCategoryChange = (category: string, checked: boolean) => {
        if (checked) {
            setSelectedCategories(prev => [...prev, category])
        } else {
            setSelectedCategories(prev => prev.filter(cat => cat !== category))
        }
    }

    // Skeleton Card Component
    const SkeletonCard = () => (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="relative aspect-square bg-gray-200"></div>
            <div className="p-4 flex flex-col justify-between">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                    <div className="flex gap-2 items-center">
                        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="max-w-7xl mx-auto pt-[40px] pb-[40px] pl-[20px] pr-[20px] lg:px-8">
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Render 6 skeleton cards to match grid layout */}
                    {Array.from({ length: 6 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            ) : (
                <>
                    <div className='flex items-center space-x-4'>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Discover amazing 3D models</h1>
                    </div>
                    <div className="flex items-center space-x-2 pt-6 pb-6">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="search"
                                id="default-search"
                                className="ps-10 px-6 py-3 text-sm rounded-xl bg-gray-50/2 border-2 border-gray-200 focus:outline focus:border-indigo-600/40 w-full"
                                placeholder="Search for 3d models........"
                                autoComplete="off"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                onClick={() => setIsDrawerOpen(false)}
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    className="absolute inset-y-0 end-0 flex items-center pe-5 cursor-pointer"
                                    onClick={handleClearSearch}
                                    aria-label="Clear search"
                                >
                                    <svg className="w-4 h-4 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <Link
                            className="lg:hidden group relative inline-flex items-center overflow-hidden rounded-xl bg-indigo-600 px-6 py-3 text-white focus:ring-3 focus:outline-hidden"
                            onClick={() => setIsDrawerOpen(true)}
                            href=""
                        >
                            <span className="pointer-events-none absolute right-[-1.5rem] opacity-0 transition-all duration-300 group-hover:right-4 group-hover:opacity-100">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/12518/12518242.png"
                                alt="Filter icon"
                                width={30} 
                                height={30} 
                                className="object-contain"
                            />
                            </span>
                            <span className="transition-all duration-300 rounded-lg group-hover:mr-6">
                                Filter
                            </span>
                        </Link>
                        {/* <button
                            type="button"
                            className="md:hidden bg-indigo-500 text-white p-3.5 rounded-xl hover:bg-indigo-600 transition-colors cursor-pointer flex items-center gap-2"
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/847/847453.png"
                                alt="Filter icon"
                                width={20} 
                                height={20} 
                                className="object-contain bg-white rounded-full"
                            />
                            Filter
                        </button> */}
                    </div>
                    <div className="flex gap-4">
                        {/* Category Filter Sidebar for Desktop */}
                        <aside className="hidden lg:block w-75 shrink-0">
                            <div className="bg-white rounded-xl shadow-xl p-4">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h2>
                                <form method="GET" className="space-y-3">
                                    {categories.map((category: string) => (
                                        <label key={category} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="category"
                                                value={category}
                                                checked={selectedCategories?.includes(category)}
                                                onChange={(e) => handleCategoryChange(category, e.target.checked)}
                                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                                            />
                                            <span className="text-md text-gray-700">{category.toUpperCase()}</span>
                                        </label>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={handleClearFilters}
                                        className="mt-2 w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                                    >
                                        Clear Filters
                                    </button>
                                </form>
                            </div>
                        </aside>
                        {/* Mobile Filter Drawer */}
                        <div
                            id="filter-drawer"
                            className={`lg:hidden fixed inset-x-0 bottom-0 transform ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out bg-gray-100 rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto z-50`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Filter by Category</h2>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => setIsDrawerOpen(false)}
                                >
                                    <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <form method="GET" className="space-y-3">
                                {categories.map((category: string) => (
                                    <label key={category} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="category"
                                            value={category}
                                            checked={selectedCategories?.includes(category)}
                                            onChange={(e) => handleCategoryChange(category, e.target.checked)}
                                            className="h-4 w-4 border-gray-300 rounded focus:ring-indigo-500! cursor-pointer"
                                        />
                                        <span className="text-md text-gray-700">{category.toUpperCase()}</span>
                                    </label>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleClearFilters}
                                    className="mt-2 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition-colors cursor-pointer"
                                >
                                    Clear Filters
                                </button>
                            </form>
                        </div>
                        {/* Model Grid or No Results Message */}
                        <div className="flex-1">
                            {filteredModels.length === 0 && !isLoading ? (
                                <div className="p-8 text-center max-w-lg mx-auto mt-8">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/128/6134/6134065.png"
                                        width={80}
                                        height={80}
                                        alt="No Results"
                                        className="mx-auto mb-4"
                                    />
                                    <h1 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h1>
                                    <p className="text-gray-600 mb-6">We could not find any 3D models matching your search. Try a different search term or clear filters to explore more models.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredModels.map((model: Model) => (
                                        <div key={model.id} className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                                            <Link href={`/3d_models/${model.id}`}>
                                                <div className="relative aspect-square overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={model.image}
                                                        alt={model.name}
                                                        width={300}
                                                        height={300}
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                                                    />
                                                </div>
                                                <div className="p-4 flex flex-col justify-between">
                                                    <h1 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 truncate">
                                                        {model.name}
                                                    </h1>
                                                    <p className="text-gray-800 text-sm md:text-md line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">{model.description}</p>
                                                    <div className="mt-3 space-y-4">
                                                        <p className="px-3 py-2 bg-indigo-500 rounded-lg inline-block text-white text-sm md:text-md">
                                                            {model.category}
                                                        </p>
                                                        <div className="flex gap-2 items-center">
                                                            <Image
                                                                src="https://cdn-icons-png.flaticon.com/128/263/263417.png"
                                                                width={30}
                                                                height={30}
                                                                alt="Flash Sale"
                                                            />
                                                            <p className="text-[16px] font-medium">{model.likes}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}