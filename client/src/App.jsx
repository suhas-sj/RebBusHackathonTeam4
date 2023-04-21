import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [svgSize, setSvgSize] = useState({ height: 45, width: 45 });

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    function handleResize() {
      setSvgSize({
        height: window.innerHeight * 0.1,
        width: window.innerWidth * 0.1
      });
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header class="sticky top-0 z-30 w-full px-1 py-1 bg-white  shadow-xl">
        <nav className="bg-gray-800" id="header">
          <div class="max-w-screen-lg flex items-center justify-center mx-auto p-4">
            <svg fill="#ffffff" height={svgSize.height}
      width={svgSize.width} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.4 490.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path> </g> </g></svg>
            <div id='title' className=' text-white mx-2 fono text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Detectify</div>
          </div>
        </nav>
      </header>

      <div className='flex items-center justify-center h-screen mx-8'>
        <div className="overflow-hidden shadow-xl bg-white flex flex-col md:flex-row rounded-3xl">
          <div className="px-6 py-4 max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <img src='public/img.jpg' className='transition duration-500 transform hover:scale-105 rounded-lg' />
          </div>
          <div className="pr-4  pt-4 pb-2 flex items-center justify-center flex-col">
            <div>
              <span id="text-1" className='inline-block text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Object detected is:</span>
            </div>
            <div>
              <span id="text-2" className="inline-block py-1 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-700 mr-2 mb-2 mx-2">flower</span>
            </div>
            {/* <div>
              <img src={data.image} alt="image received" />
              <h2>{data.title}</h2>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
