import Makza from '../../../../public/images/Makza.png'
import Matdongsan from '../../../../public/images/Matdongsan.png'
import Zigeumini from '../../../../public/images/Zigeumini.png'
import Miniscreen from '../../../../public/images/Miniscreen.png'

const About = () => {
    return <div className="bg-gray-100 text-gray-900 min-h-screen p-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Developer Lee</h1>
      <p className="text-center text-gray-600 mt-2">
        Develop a program people want to use and make it essential.
      </p>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <hr className="m-2"></hr>
        <p>mail : <a href="mailto:dldydtn0805@naver.com" className="text-blue-500">dldydtn0805@naver.com</a></p>
        <p>git : <a href="https://github.com/dldydtn0805" target="_blank" rel="noopener noreferrer" className="text-blue-500">github.com/dldydtn0805</a></p>
        <p>blog : <a href="https://velog.io/@kingsoo0307/posts" target="_blank" rel="noopener noreferrer" className="text-blue-500">velog.io/@kingsoo0307/posts</a></p>
      </div>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <hr className="m-2"></hr>
        <h3 className="text-xl font-medium mt-2">FrontEnd</h3>
        <p className="text-gray-700">React | Next.js</p>
        <p className="text-gray-700">TypeScript</p>
        <h3 className="text-xl font-medium mt-2">BackEnd</h3>
        <p className="text-gray-700">Django | MySQL</p>
        <p className="text-gray-700">Python</p>
        <h3 className="text-xl font-medium mt-2">Client</h3>
        <p className="text-gray-700">Unreal Engine 4</p>
        <p className="text-gray-700">C++</p>
        <h3 className="text-xl font-medium mt-2">Collaboration</h3>
        <p className="text-gray-700">Git | Jira | Figma</p>
      </div>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Toy Project</h2>
        <hr className="m-2"></hr>
        {/* <img src={Makza} alt="" /> */}
        <p><a href="https://chromewebstore.google.com/detail/miniscreen/hkbkhopmbecilgmfacgbihohlfhhbpin" target="_blank" rel="noopener noreferrer" className="text-blue-500">MINISCREEN</a>: Chrome 브라우저 위에 작은 스크린을 띄울 수 있게 해주는 확장 프로그램</p>
      </div>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Team Projects</h2>
        <hr className="m-2"></hr>
        <p><a href="https://www.notion.so/a046152e2b6d41fe8cc0622a11943e25?pvs=21" target="_blank" rel="noopener noreferrer" className="text-blue-500">맛동산</a>: 맛집 기록 및 공유 서비스</p>
        <p><a href="https://www.notion.so/a50663ad14b9406f8ba39263fa40187f?pvs=21" target="_blank" rel="noopener noreferrer" className="text-blue-500">지금이니</a>: 차트 기반 모의 주식 투자 게임</p>
        <p><a href="https://www.notion.so/02343edb2c8347dcb29ddb2de50c0d4a?pvs=21" target="_blank" rel="noopener noreferrer" className="text-blue-500">막자</a>: 간단한 디펜스 게임</p>
      </div>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Etc</h2>
        <hr className="m-2"></hr>
        <h3 className="text-xl font-medium mt-2">Education</h3>
        <p className="text-gray-700">경희대학교 언론정보학 | SSAFY</p>
        <h3 className="text-xl font-medium mt-2">Certificate</h3>
        <p className="text-gray-700">SQLD</p>
      </div>
    </div>
  </div>
}

export default About