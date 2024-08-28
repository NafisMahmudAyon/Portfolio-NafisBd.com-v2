'use client'

import { UseThemeSwitcher } from 'landing-page-ui';
import React from 'react'
import { MoonIcon, SunIcon } from '../Icons';

const DarkMode = () => {
  const [mode, setMode] = UseThemeSwitcher();
  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={`ml-3 flex items-center justify-center rounded-full p-1 bg-primaryColors ${mode === "light"
        ? "text-headingText"
        : "text-headingDarkText"
        }`}>
      {mode === "dark" ? (
        <SunIcon className={"fill-primaryColors"} />
      ) : (
          <MoonIcon className={"fill-primaryColors"} />
      )}
    </button>
  )
}

export default DarkMode