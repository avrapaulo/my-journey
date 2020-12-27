import Image from 'next/image'
import { Experience } from 'components/experience'
import { SkillIcon } from 'components/icons/skill'
import { SKILL_LIST } from 'constants/skill'

const HomePage = () => (
  <div className="flex-1 mx-auto">
    <div className="grid gap-4 lg:gap-x-10 lg:gap-y-28 grid-cols-1 lg:grid-cols-12">
      <div className="row-span-1 col-span-full lg:col-span-8">
        <div className="flex justify-center h-full">
          <h1 className="text-center font-medium m-auto text-5xl">
            Hey there, I&rsquo;m <span className="font-bold">Paulo Avramenko</span> software
            developer, focused primarily on the JavaScript.
          </h1>
        </div>
      </div>
      <div className="row-span-1 row-start-1 lg:row-start-auto col-span-full lg:col-span-4">
        <div className="flex flex-wrap justify-center xl:py-5">
          <Image src="/me.png" alt="Paulo Avramenko" width={420} height={450} />
        </div>
      </div>
      <div className="row-span-1 col-span-full lg:col-span-3">
        <div className="flex flex-wrap lg:grid lg:grid-cols-2 lg:justify-items-center">
          <div className="mt-10 lg:mt-0 mb-5 lg:mb-5 w-full text-center lg:col-span-2 text-4xl font-bold">
            Skills
          </div>
          {SKILL_LIST.map(({ path, title, link }, index) => (
            <div className={`lg:col-span-${(index + 1) % 3 ? '1' : '2'} m-5 lg:m-2`} key={index}>
              <SkillIcon key={index} path={path} title={title} link={link} />
            </div>
          ))}
        </div>
      </div>
      <div className="row-span-1 col-span-full lg:col-span-9 flex flex-col">
        <div className="col-span-2 text-4xl mb-5 font-bold">About Me</div>
        <div className="text-lg dark:text-gray-400 text-gray-600">
          I’ve been developing and working since 2016. I am very proud of my career paths, though I
          believe the best is yet to come. Raising my standards for new challenges, I aspire to grow
          as a developer continuously learning more about latest technologies and developments that
          are coming out of the tech ecosystem. I believe in a combination of humbleness, passion,
          dedication, hard work, and fun for a successful path.
        </div>
        <Experience />
      </div>
    </div>
  </div>
)

export default HomePage
