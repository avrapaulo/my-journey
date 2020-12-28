import { motion } from 'framer-motion'
import { SkillIcon } from 'components/icons/skill'
import { SKILL_LIST } from 'constants/skill'
import { logos, skillBarTitle } from 'constants/animation'

const SkillsSideBar = () => (
  <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={skillBarTitle}
      className="mt-10 lg:mt-0 mb-5 lg:mb-5 w-full text-center lg:col-span-2 text-4xl font-bold"
    >
      Skills
    </motion.div>

    {SKILL_LIST.map(({ path, title, link }, index) => (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logos}
        key={index}
        className={`lg:col-span-${(index + 1) % 3 ? '1' : '2'} m-5 lg:m-2`}
      >
        <SkillIcon key={index} path={path} title={title} link={link} />
      </motion.div>
    ))}
  </>
)
export { SkillsSideBar }
