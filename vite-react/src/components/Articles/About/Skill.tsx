const Skill = () => {
    return <div>
        <h1 id="skills" className="text-center">⚒️ 기술 스택</h1>
        <hr />
        <div>
        <a href="https://reactjs.org/">
            <img
            className="w-24 lg:w-48"
            src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
            alt="React"
            />
        </a>
        <a href="https://www.typescriptlang.org/">
            <img
            className="w-24 lg:w-48"
            src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
            alt="TypeScript"
            />
        </a>
        
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">
            <img
            className="w-24 lg:w-48"
            src="https://img.shields.io/badge/WebSocket-5FA9E9?style=for-the-badge&logo=websocket&logoColor=white"
            alt="WebSocket"
            />
        </a>
        <a href="https://github.com/pmndrs/zustand">
            <img
            className="w-24 lg:w-48"
            src="https://img.shields.io/badge/Zustand-3CACAE?style=for-the-badge&logo=zustand&logoColor=white"
            alt="Zustand"
            />
        </a>
        <a href="https://react-query.tanstack.com/">
            <img
            className="w-24 lg:w-48"
            src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"
            alt="React Query"
            />
        </a>
        </div>
    </div>
}
export default Skill