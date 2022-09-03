import { Bars3Icon } from '@heroicons/react/24/solid'
import AppDialog from '../AppDialog/AppDialog'

const Appbar = () => {
    return (
        <header className="absolute flex justify-between mt-8 px-4 w-full">
            <h1 className="text-white font-bold text-3xl">Blogr</h1>
            <AppDialog trigger={<Bars3Icon className="w-8 text-white" />} />
        </header>
    )
}

export default Appbar
