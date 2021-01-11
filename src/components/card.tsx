import { motion } from 'framer-motion'
import { Project } from 'models/project'

interface Props {
  isEmpty?: boolean
  delay?: number
  project?: Project
}

const homeImage = (delay: number) => ({
  hidden: { opacity: 0.5, x: -1000 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10, delay }
  }
})

const Card = ({ isEmpty, delay = 0, project }: Props) => (
  <motion.div
    variants={homeImage(delay)}
    initial="hidden"
    animate="visible"
    whileHover={!isEmpty && { scale: 0.95 }}
    className="relative flex justify-center items-center w-full h-full"
  >
    <div
      className="w-full h-full p-4 z-10 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 rounded-3xl border border-black dark:border-white border-solid border-opacity-20 dark:border-opacity-20"
      style={{ backdropFilter: 'blur(15px)' }}
    >
      {!isEmpty ? (
        <>
          <div className="mx-4 py-5 mt-10 sm:px-6 border-b border-white dark:border-black border-solid border-opacity-10 dark:border-opacity-10">
            <h3 className="antialiased text-center text-2xl leading-6 capitalize font-medium text-white dark:text-gray-900">
              {project.name}
            </h3>
          </div>
          <div className="px-6 py-5">
            <div className="grid">
              <div className="text-gray-200 dark:text-gray-900">{project.description}</div>
              <div className="text-sm my-7 text-gray-400 dark:text-gray-600">
                {project.languages.map(
                  (language, index) =>
                    `${language}${project.languages.length - 1 !== index ? ',' : ''} `
                )}
              </div>
            </div>
            <div className="flex justify-end mb-10">
              {project.links.webSite && (
                <a
                  className="text-white dark:text-black"
                  href={project.links.webSite}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              )}
              <a
                className="text-white dark:text-black mx-4"
                href={project.links.gitHub}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="overflow-visible w-8 h-8"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full text-3xl font-semibold flex justify-center items-center text-white dark:text-gray-900">
          Coming soon
        </div>
      )}
    </div>
    <div className="w-11/12 h-3/4 absolute bg-black dark:bg-white rounded-3xl" />
  </motion.div>
)

export { Card }
