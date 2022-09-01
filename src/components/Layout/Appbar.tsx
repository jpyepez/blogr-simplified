import { Bars3Icon } from '@heroicons/react/24/solid'

const Appbar = () => {
    return (
        <header className="absolute flex justify-between mt-8 px-4 w-full">
            <h1 className="text-white font-bold text-3xl">Blogr</h1>
            <Bars3Icon className="w-8 text-white" />
        </header>
    )
}

export default Appbar
