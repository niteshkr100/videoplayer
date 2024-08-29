'use client';

// Vplayer page


import React, { useState, useEffect } from 'react';
import "../style/vplayer.css";
import { subtitleStyles } from '../constant/subtitleStyles'; // Import the subtitle styles

const Vplayer = () => {
  const [subtitleColor, setSubtitleColor] = useState('#FFFFFF'); // Default subtitle text color is white
  const [subtitleBgColor, setSubtitleBgColor] = useState('#000000'); // Default subtitle background color is black
  const [subtitleFontFamily, setSubtitleFontFamily] = useState('Arial'); // Default font family
  const [subtitleFontSize, setSubtitleFontSize] = useState('16px'); // Default font size (changed to pixels)

  useEffect(() => {
    // Update the subtitle style in the CSS variables
    document.documentElement.style.setProperty('--subtitle-color', subtitleColor);
    document.documentElement.style.setProperty('--subtitle-bg-color', subtitleBgColor);
    document.documentElement.style.setProperty('--subtitle-font-family', subtitleFontFamily);
    document.documentElement.style.setProperty('--subtitle-font-size', subtitleFontSize);
  }, [subtitleColor, subtitleBgColor, subtitleFontFamily, subtitleFontSize]);

  const handleStyleChange = (e) => {
    const selectedStyle = subtitleStyles.find(style => style.name === e.target.value);
    if (selectedStyle) {
      setSubtitleFontFamily(selectedStyle.fontFamily);
    }
  };

  const handleFontSizeChange = (e) => {
    setSubtitleFontSize(`${e.target.value}px`);
  };

  return (
    <div className='h-[1000px] w-full flex justify-center items-center flex-col mb-10'>
      <div>
        <video
          controls
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
          className='flex justify-center items-center'
        >
          <track 
            kind="subtitles" 
            src="/subtitles.vtt" 
            srclang="en" 
            label="English"
            default 
          />
          <track 
            kind="subtitles" 
            src="/subtitleshindi.vtt" 
            srclang="hi" 
            label="Hindi"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="colorPicker" className='text-white'>
            <span className='mx-5'>Choose subtitle color: </span>
            <input
              id="colorPicker"
              type="color"
              value={subtitleColor}
              onChange={(e) => setSubtitleColor(e.target.value)}
              className='rounded border-black mx-5'
            />
          </label>
          <br />
          <label htmlFor="bgColorPicker" className='text-white'>
            <span className='mx-5'>Choose subtitle background color: </span>
            <input
              id="bgColorPicker"
              type="color"
              value={subtitleBgColor}
              onChange={(e) => setSubtitleBgColor(e.target.value)}
              className='rounded border-black '
            />
          </label>
          <br />
          <div>
            <label htmlFor="stylePicker" className='text-white rounded-xl mx-5'>
              Choose subtitle style:  
            </label>
            <select id="stylePicker" onChange={handleStyleChange}>
              {subtitleStyles.map((style) => (
                <option key={style.name} value={style.name}>
                  {style.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="fontSizePicker" className='text-white rounded-xl mx-5'>
              Choose subtitle font size:  
            </label>
            <input
              id="fontSizePicker"
              type="number"
              min="1"
              max="32"
              value={parseInt(subtitleFontSize)}
              onChange={handleFontSizeChange}
              className='rounded border-black mx-5  '
            />
            <span className='text-white ml-2'>px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vplayer;
