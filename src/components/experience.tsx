import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { JOBS_LIST } from 'constants/jobs'

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
      <div className="col-span-2 text-4xl mt-10 font-bold">Experience</div>
      {JOBS_LIST.map(({ title, company, start, end, description }) => (
        <div key={company} className="mt-5">
          <div className="text-gray-900 dark:text-gray-200 font-medium text-lg">
            {' '}
            {`${title} @ ${company}`}
          </div>
          <div className="text-gray-900 dark:text-gray-200 font-medium">{`${start} - ${
            end || 'Present'
          } (${calcDateIn({
            end,
            start,
            dateNow
          })})`}</div>

          <div className="mt-2.5 dark:text-gray-400 text-gray-600">{description}</div>
        </div>
      ))}
      <div className="text-center mt-5 lg:mt-auto font-medium text-2xl">See more</div>
    </div>
  )
}

export { Experience }
