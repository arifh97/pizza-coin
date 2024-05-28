import React, { useState } from 'react';
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function CopyToClipboard() {
  const [textToCopy, setTextToCopy] = useState('Buj59cjUKa211uZodeTRe9uWJUs814YSYaDgjNQ1PRGt');
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
    <div className="copytoclipboard-inner mt-3 pt-2">
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
  );
}