import { Link } from "react-router-dom"

const headerComponent = () => {
    return <div className="row-start-12 row-end-12">
        <div className="flex justify-center items-center lg:justify-end text-center h-full text-xs lg:text-lg">
            <Link to="/"className="p-4">ABOUT</Link>
            <Link to="/article" className="p-4">ARTICLE</Link>
            <Link to="/project"className="p-4">PROJECT</Link>
            <Link to="/game"className="p-4">GAME</Link>
        </div>
    </div>
}
export default headerComponent