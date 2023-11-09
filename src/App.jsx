import { useState } from 'react';
import Filter from './filter.jsx';
import './index.css';

function App() {
  const[ category, setCategory ] = useState("All");
  return (
    <div className='app pt-5 flex flex-col justify-start items-center gap-10 bg-slate-200 '>
      <h1 className=' text-3xl border-b-8 rounded-lg border-orange-300 pb-2'>Food Menu</h1>
      <div className='flex justify-between items-center gap-6 h-14 ' >
          <button className='btns' onClick={()=>setCategory("All")}>All</button>
          <button className='btns' onClick={()=>setCategory("breakfast")}>Breakfast</button>
          <button className='btns' onClick={()=>setCategory("lunch")}>Lunch</button>
          <button className='btns' onClick={()=>setCategory("shakes")}>Shakes</button>
      </div>
      <Filter category={category} />
    </div>
  )
}

export default App
