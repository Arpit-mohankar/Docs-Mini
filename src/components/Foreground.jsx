import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const containerRef = useRef(null); // Create a ref for the container

  const data = [
    {
      desc: 'College projects',
      size: '0.9mb',
      close: false,
      tag: { isopen: true, tagtitle: 'Download Now', tagcolor: 'blue', iconcolor: 'blue' }
    },
    {
      desc: 'personal stuff',
      size: '0.9mb',
      close: false,
      tag: { isopen: true, tagtitle: 'Download Now', tagcolor: 'green', iconcolor: 'green' }
    },
    {
      desc: 'Images',
      size: '0.9mb',
      close: true,
      tag: { isopen: false, tagtitle: 'Download Now', tagcolor: 'blue', iconcolor: 'blue' }
    }
  ];

  return (
    <div ref={containerRef} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card
          key={index}
          desc={item.desc}
          size={item.size}
          close={item.close}
          tag={item.tag}
          reference={containerRef} // Pass the container reference as a prop
        />
      ))}
    </div>
  );
}

export default Foreground;
