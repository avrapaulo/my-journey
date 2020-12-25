import { IIcon } from 'models/social'

const SkillIcon = ({ title, path, link }: IIcon) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  </a>
)

export { SkillIcon }
