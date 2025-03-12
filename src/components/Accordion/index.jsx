import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Accordion({ items, activeItem = null }) {
  const [activeIndex, setActiveIndex] = useState(activeItem);
  useEffect(() => setActiveIndex(activeItem), [activeItem])

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className={`accordion-item rounded-2xl border border-solid border-gray-100 overflow-hidden ${activeIndex === index ? 'bg-[#FFC446]' : 'bg-transparent'} ${index === items.length - 1 ? 'mb-0' : 'mb-5 md:mb-6'}`}>
          <button onClick={() => toggleAccordion(index)} className={`accordion-button transition-none p-4 md:p-6 text-black text-start flex items-center justify-between w-full bg-transparent border-0 text-lg md:text-2xl !leading-normal font-normal ${activeIndex === index ? "!pb-0" : ""}`}>
            <span>{item.title}</span>
            {activeIndex != index ? (<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_7616_32)">
                <rect x="0.5" y="0.5" width="32" height="32" rx="8" fill="#030200" />
                <g clip-path="url(#clip1_7616_32)">
                  <path d="M16.3889 8.5V24.5" stroke="white" stroke-width="1.6" />
                  <path d="M8.5 16.6111H24.5" stroke="white" stroke-width="1.6" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_7616_32">
                  <rect x="0.5" y="0.5" width="32" height="32" rx="8" fill="white" />
                </clipPath>
                <clipPath id="clip1_7616_32">
                  <rect width="16" height="16" fill="white" transform="translate(8.5 8.5)" />
                </clipPath>
              </defs>
            </svg>

            ) : (<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_7616_10)">
              <path d="M0.5 8.5C0.5 4.08172 4.08172 0.5 8.5 0.5H24.5C28.9183 0.5 32.5 4.08172 32.5 8.5V24.5C32.5 28.9183 28.9183 32.5 24.5 32.5H8.5C4.08172 32.5 0.5 28.9183 0.5 24.5V8.5Z" fill="#030200"/>
              <g clip-path="url(#clip1_7616_10)">
              <path d="M8.5 16.4998H24.5" stroke="white" stroke-width="1.6"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_7616_10">
              <path d="M0.5 8.5C0.5 4.08172 4.08172 0.5 8.5 0.5H24.5C28.9183 0.5 32.5 4.08172 32.5 8.5V24.5C32.5 28.9183 28.9183 32.5 24.5 32.5H8.5C4.08172 32.5 0.5 28.9183 0.5 24.5V8.5Z" fill="white"/>
              </clipPath>
              <clipPath id="clip1_7616_10">
              <rect width="16" height="16" fill="white" transform="translate(8.5 8.5)"/>
              </clipPath>
              </defs>
              </svg>
              
            )}
          </button>
          {activeIndex === index &&
            <div className={`accordion-body p-4 md:p-6 !pt-0 mt-4 text-gray-300 text-base !leading-relaxed font-normal `}
              dangerouslySetInnerHTML={{ __html: item.body }}
            ></div>
          }
        </div>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.array,
  activeItem: PropTypes.number,
  className: PropTypes.string
}