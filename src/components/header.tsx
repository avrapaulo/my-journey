import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Icon } from 'components/icon'
import { GITHUB, LINKEDIN, GMAIL } from 'constants/social'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [mounted])

  return (
    <div className="w-full mb-4 text-black lg:mb-8 dark:text-white">
      <div className="flex flex-col mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between p-4">
          <a href="/">
            <img style={{ maxWidth: '100px' }} src="sticker.png" alt="" />
          </a>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                className={isNavOpen ? 'hidden' : ''}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                className={!isNavOpen ? 'hidden' : ''}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            !isNavOpen ? 'hidden' : ''
          } flex-col flex-grow pb-4 m-auto md:pb-0 md:flex md:justify-end md:flex-row`}
        >
          <Icon {...LINKEDIN} />
          <Icon {...GITHUB} />
          <Icon {...GMAIL} />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`inline-flex items-center w-16 h-8 rounded-full focus:outline-none bg-black transition-colors dark:bg-gray-400 md:ml-3 mt-0.5 ${
              mounted && theme === 'dark' ? 'justify-end' : ''
            }`}
          >
            <>
              <motion.div layout className="w-7 h-7 bg-white rounded-full mx-0.5" />
              <div className="flex justify-between absolute w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7 text-gray-800 dark:text-black z-10 ml-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7 text-white dark:text-black z-10 mr-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </>
          </button>
        </nav>
      </div>
    </div>
  )
}

export { Header }
