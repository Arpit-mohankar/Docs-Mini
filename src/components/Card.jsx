import React from 'react';
import { FaFile } from 'react-icons/fa';
import { MdOutlineFileDownload, MdOutlineClose } from 'react-icons/md';
import { motion } from "framer-motion";

function Card({ desc, size, close, tag, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{ type: "spring", stiffness: 5, damping: 10 }}
       className={`flex-shrink-0 relative overflow-hidden w-60 h-72 rounded-[12px] bg-zinc-700/40 px-5 py-5 z-1 ${tag.tagcolor === 'blue' ? "text-cyan-200" : 'text-green-600'} border-cyan-300 border-solid outline-2px`}>
        <FaFile />
        <p className='text-sm text-zinc-200 leading-tight my-10 font-semibold'>{desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 border-teal-100 border-solid'>
          <div className='flex items-center justify-between px-2 py-1 text-zinc-300 font-semibold'>
            <h5>{size}</h5>
            {close ? <MdOutlineClose /> : <MdOutlineFileDownload />}
          </div>
          {tag.isopen ? (
            <div className={`tag w-full px-3 py-3 ${tag.tagcolor === 'blue' ? "bg-cyan-200" : 'bg-green-600'} flex items-center justify-center`}>
              <h3 className='text-sm text-black font-serif'>{tag.tagtitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
