import React from 'react';
import { Input } from "@/components/ui/input"

const Search = () => {
    return (
        <div>
            <Input type="text" placeholder="Search..." className='w-[200px] border border-orange-400/20 bg-amber-100/40 text-gray-800 dark:text-white'/>
        </div>
    )
}

export default Search
