import menu from './data.js';
import './index.css';

export default function Filter({ category }) {
    
    function display(id, title, price, img, desc) {
    
        return (
            <div key={id} className='flex flex-col justify-between items-center gap-2 rounded-md overflow-hidden  w-96 h-96'>
              <div className='h-60 w-full'>
                <div className='absolute float-right bg-orange-400 rounded-br-xl text-xl p-1'>${price}</div>
                <img className='h-60 w-full object-cover ' src={img} alt={title} />
              </div>
              <div className=' h-36 bg-white flex flex-col justify-start gap-2 p-3 '>
                  <div className='capitalize text-xl font-semibold'>{title}</div>
                  <div className='text-gray-600' >{desc}</div>
              </div>
            </div>
        );
  }

  return (
    <div className='w-full flex justify-between flex-wrap gap-8 px-16 ' >
      {category === "All"
        ? menu.map((item) => display(item.id, item.title, item.price, item.img, item.desc))
        : menu.map((item) =>
            item.category === category ? (display(item.id, item.title, item.price, item.img, item.desc)
            ) : null
          )}
    </div>
  );
}
