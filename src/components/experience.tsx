import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import relativeTime from 'dayjs/plugin/relativeTime'
import { JOBS_LIST } from 'constants/jobs'
import { title, text } from 'constants/animation'

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const calcDateIn = ({ end, start, dateNow }) => {
  const dateEnd = end ? dayjs(`${end}/01`) : dateNow
  const dayStart = dayjs(`${start}/01`)
  const dateDiff = dateEnd.diff(dayStart)
  const result = end
    ? dayjs().millisecond(dateDiff).toNow(true)
    : dayjs().millisecond(dateDiff).fromNow(true)

  return result
}

const Experience = () => {
  dayjs.extend(relativeTime)
  const dateNow = dayjs()

  return (
    <div className="flex flex-col h-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={title}
        className="col-span-2 text-4xl mt-10 font-bold"
      >
        Experience
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={container}>
        {JOBS_LIST.map(({ title, company, start, end, description }, index) => (
          <motion.div variants={text} key={index} className="mt-5">
            <div className="text-gray-900 dark:text-gray-200 font-medium text-lg">
              {`${title} @ ${company}`}
            </div>
            <div className="text-gray-900 dark:text-gray-200 font-medium">
              {`${start} - ${end || 'Present'} (${calcDateIn({
                end,
                start,
                dateNow
              })})`}
            </div>

            <div className="mt-2.5 dark:text-gray-400 text-gray-600">{description}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        className="flex justify-center mt-5 lg:mt-auto font-medium text-2xl"
        initial="hidden"
        animate="visible"
        variants={title}
        href="/paulo-avra-resume-2021.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        Read more on my resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </motion.a>
    </div>
  )
}

export { Experience }
