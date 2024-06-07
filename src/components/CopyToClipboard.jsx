import React, { useState } from 'react';
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function CopyToClipboard() {
  const [textToCopy, setTextToCopy] = useState('4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY');
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        // Reset the copied state after 30 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch(err => {
        console.error('Failed to copy to clipboard: ', err);
      });
  };

  return (
    <div className="copytoclipboard-inner d-flex flex-wrap align-items-end gap-3 gap-lg-4">
      <div className='me-1 me-lg-2 w-100 w-sm-auto'>
        <h4>CONTRACT ADDRESS </h4>
        <div className="copytoclipboard">
          <p className='d-flex'>
            <strong>CA:</strong> {textToCopy}
          </p>
          <button onClick={handleCopyToClipboard}>
            {!isCopied && (
              <span>
                <LuCopy />
              </span>
            )}
            {isCopied && (
              <span className='copied'>
                <LuCopyCheck /> <span className='copyedTxt'></span>
              </span>
            )}
          </button>
        </div>
      </div>
      <div className='w-100 w-sm-auto'>
        <a href="#" className="boxed-btn transparent">Ticker : $PIZPEPE</a>
      </div>
    </div>
  );
}