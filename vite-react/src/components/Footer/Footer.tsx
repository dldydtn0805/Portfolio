import { Link } from "react-router-dom"

const Footer = () => {
    return <div className="row-start-12 row-end-12">
        <div className="flex justify-center items-center lg:justify-end text-center h-full text-xs lg:text-lg">
            <Link to="/"className="p-4">ABOUT</Link>
            <Link to="/articles" className="p-4">ARTICLE</Link>
            <Link to="/projects"className="p-4">PROJECT</Link>
            <Link to="/labs"className="p-4">LABS</Link>
        </div>
    </div>
}
export default Footer