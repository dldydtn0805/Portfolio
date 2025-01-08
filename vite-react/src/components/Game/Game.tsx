import { Outlet } from "react-router-dom"
const Game = () => {
    return  <div className="row-start-2 row-end-12">
        <div className="h-full overflow-scroll">
            <Outlet></Outlet>
        </div>
    </div>
}

export default Game