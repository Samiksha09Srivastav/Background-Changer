import { useState } from 'react';

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div 
        style={{backgroundColor: color}}
        className="body-container w-full h-screen"
      >
        <div 
          className=" flex fixed bottom-12 flex-wrap inset-x-0 px-2 justify-center "
        >
          <div 
            className="flex flex-wrap gap-3 justify-center bg-white px-3 py-2 rounded-3xl"
          >
            <button 
              onClick={()=> setColor("red")}
              className="outline-none px-4 py-2 bg-red-600 rounded-3xl text-white "
            > 
              red
            </button>
            <button 
              onClick={()=> setColor("green")}
              className="outline-none px-4 py-2 bg-green-600 rounded-3xl text-white "
            > 
              green
            </button>
            <button 
              onClick={()=> setColor("blue")}
              className="outline-none px-4 py-2 bg-blue-600 rounded-3xl text-white "
            > 
              blue
            </button>
            <button 
              onClick={()=> setColor("pink")}
              className="outline-none px-4 py-2 bg-pink-600 rounded-3xl text-white "
            > 
              pink
            </button>
            <button 
              onClick={()=> setColor("orange")}
              className="outline-none px-4 py-2 bg-orange-600 rounded-3xl text-white "
            > 
              orange
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
