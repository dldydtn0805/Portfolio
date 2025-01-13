import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const Labs = () => {
    return  <div className="row-start-2 row-end-12">
        <Link to="tetris">Tetris</Link>
        <div className="h-full overflow-hidden">
            <Outlet></Outlet>
        </div>
    </div>
}

export default Labs