import { IIcon } from 'models/social'

const SocialIcon = ({ title, path, link }: IIcon) => (
  <div className="my-1 md:my-0 mx-3">
    <a href={link}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="hover:text-gray-400 transform hover:scale-125 duration-300 ease-in-out w-9 h-9"
        fill="currentColor"
      >
        <title>{title}</title>
        <path d={path} />
      </svg>
    </a>
  </div>
)

export { SocialIcon }
