import React from 'react';
import { ReactDOM, createPortal } from 'react-dom';

export default function Modal({children}) {
  return createPortal(
    <div className='modal'>
        {children}
    </div>,
    document.getElementById('modal')
  )
}
