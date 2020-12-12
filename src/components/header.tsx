import { useState } from 'react'
import { Icon } from 'components/icon'
import { GITHUB, LINKEDIN } from 'constants/social'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className="w-full mb-4 text-black lg:mb-8 dark:text-white">
      <div
        x-data="{ open: true }"
        className="flex flex-col mx-auto md:items-center md:justify-between md:flex-row"
      >
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-2xl font-bold tracking-tighter text-gray-500 uppercase dark:text-white md:text-sm lg:text-3xl">
              Paulo Avramenko
            </h1>
          </a>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline m-"
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
        </nav>
      </div>
    </div>
  )
}

export { Header }
