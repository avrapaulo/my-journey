import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ToggleDarkMode } from 'components/toggle-dark-mode'
import { SocialIcon } from 'components/icons/social'
import { GITHUB, LINKEDIN, GMAIL } from 'constants/social'

const logoVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const iconVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="w-full mb-4 text-black lg:mb-8 dark:text-white">
      <div className="flex flex-col mx-auto md:items-center md:justify-between md:flex-row">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex flex-row items-center justify-between p-4"
        >
          <Link href="/">
            <a>
              <Image src="/sticker.png" alt="Logo sticker" width={100} height={100} />
            </a>
          </Link>
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
        </motion.div>
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={container}
          className={`${
            !isNavOpen ? 'hidden' : ''
          } flex-col flex-grow pb-4 m-auto md:pb-0 md:flex md:justify-end md:flex-row`}
        >
          <motion.div variants={iconVariants}>
            <SocialIcon {...LINKEDIN} />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SocialIcon {...GITHUB} />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SocialIcon {...GMAIL} />
          </motion.div>
          <motion.div variants={iconVariants}>
            <ToggleDarkMode />
          </motion.div>
        </motion.nav>
      </div>
    </div>
  )
}

export { Header }
