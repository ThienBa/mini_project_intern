export default function LoadingSkeleton() {
    return (
        <div className="loading-skeleton">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent block md:flex items-center justify-between">
                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                    <div className="w-full space-x-2 flex justify-between">
                        <div className="h-7 bg-gray-200 rounded-lg dark:bg-gray-600 w-32" />
                        <div className="h-7 bg-gray-200 rounded-lg dark:bg-gray-700 w-32" />
                        <div className="h-7 bg-gray-200 rounded-lg dark:bg-gray-700 w-32" />
                    </div>
                </div>
                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                    <div className="w-full space-x-2 flex justify-between">
                        <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-600 w-40" />
                    </div>
                </div>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                        <thead className="align-bottom">
                            <tr>
                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                        <div className="w-full space-x-2 flex justify-between">
                                            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                        </div>
                                    </div>
                                </th>
                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                        <div className="w-full space-x-2 flex justify-between">
                                            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                        </div>
                                    </div>
                                </th>
                                <th className="hidden md:table-cell px-4 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                        <div className="w-full space-x-2 flex justify-between">
                                            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                        </div>
                                    </div>
                                </th>
                                <th className="hidden md:table-cell px-2 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                        <div className="w-full space-x-2 flex justify-between">
                                            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                        </div>
                                    </div>
                                </th>
                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                </th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="hidden md:inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl">
                                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                <div className="w-full space-x-2 flex justify-between">
                                                    <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="font-bold mb-0 text-sm leading-normal dark:text-white">
                                                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                    <div className="w-full space-x-2 flex justify-between">
                                                        <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="px-2.5 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td className="hidden md:table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="hidden md:inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl">
                                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                <div className="w-full space-x-2 flex justify-between">
                                                    <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="font-bold mb-0 text-sm leading-normal dark:text-white">
                                                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                    <div className="w-full space-x-2 flex justify-between">
                                                        <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="px-2.5 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td className="hidden md:table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="hidden md:inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl">
                                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                <div className="w-full space-x-2 flex justify-between">
                                                    <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="font-bold mb-0 text-sm leading-normal dark:text-white">
                                                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                    <div className="w-full space-x-2 flex justify-between">
                                                        <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="px-2.5 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td className="hidden md:table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="hidden md:inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl">
                                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                <div className="w-full space-x-2 flex justify-between">
                                                    <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="font-bold mb-0 text-sm leading-normal dark:text-white">
                                                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                    <div className="w-full space-x-2 flex justify-between">
                                                        <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="px-2.5 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td className="hidden md:table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="hidden md:inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl">
                                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                <div className="w-full space-x-2 flex justify-between">
                                                    <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="font-bold mb-0 text-sm leading-normal dark:text-white">
                                                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                    <div className="w-full space-x-2 flex justify-between">
                                                        <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="px-2.5 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td className="hidden md:table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="hidden md:inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl">
                                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                <div className="w-full space-x-2 flex justify-between">
                                                    <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="font-bold mb-0 text-sm leading-normal dark:text-white">
                                                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                    <div className="w-full space-x-2 flex justify-between">
                                                        <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="px-2.5 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td className="hidden md:table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="flex px-2 py-1">
                                        <div className="hidden md:inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl">
                                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                <div className="w-full space-x-2 flex justify-between">
                                                    <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="font-bold mb-0 text-sm leading-normal dark:text-white">
                                                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                                    <div className="w-full space-x-2 flex justify-between">
                                                        <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <span className="px-2.5 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td className="hidden md:table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                    <div className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                            <div className="w-full space-x-2 flex justify-between">
                                                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-600 w-30" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="pagination gap-2">
                        <li className="previous disabled">
                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                <div className="flex items-center w-full space-x-2">
                                    <div className="h-10 bg-gray-300 rounded-lg dark:bg-gray-700 w-20" />
                                </div>
                            </div>
                        </li>
                        <li className="previous disabled">
                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                <div className="flex items-center w-full space-x-2">
                                    <div className="h-10 bg-gray-300 rounded-lg dark:bg-gray-600 w-10" />
                                </div>
                            </div>
                        </li>
                        <li className="previous disabled">
                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                <div className="flex items-center w-full space-x-2">
                                    <div className="h-10 bg-gray-300 rounded-lg dark:bg-gray-600 w-10" />
                                </div>
                            </div>
                        </li>
                        <li className="previous disabled">
                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                <div className="flex items-center w-full space-x-2">
                                    <div className="h-10 bg-gray-300 rounded-lg dark:bg-gray-600 w-10" />
                                </div>
                            </div>
                        </li>
                        <li className="previous disabled">
                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                <div className="flex items-center w-full space-x-2">
                                    <div className="h-10 bg-gray-300 rounded-lg dark:bg-gray-600 w-10" />
                                </div>
                            </div>
                        </li>
                        <li className="previous disabled">
                            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                                <div className="flex items-center w-full space-x-2">
                                    <div className="h-10 bg-gray-300 rounded-lg dark:bg-gray-700 w-20" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
