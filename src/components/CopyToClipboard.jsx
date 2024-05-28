import React, { useState, useEffect } from 'react';
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function CopyToClipboard() {
  const [textToCopy, setTextToCopy] = useState('Buj59cjUKa211uZodeTRe9uWJUs814YSYaDgjNQ1PRGt');
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Shortened version of the token based on screen size
  const shortenedText = isMobile
    ? `${textToCopy.substring(0, 10)}…${textToCopy.substring(textToCopy.length - 18)}`
    : `${textToCopy.substring(0, 10)}…${textToCopy.substring(textToCopy.length - 30)}`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        // Reset the copied state after 1 second
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
      <h4>CONTRACT ADDRESS</h4>
      <div className="copytoclipboard">
        <p className='d-flex'>
          <strong>CA:</strong> {shortenedText}
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
