import { ISocial } from 'models/social'

const Icon = ({ title, path, link }: ISocial) => (
  <div className="px-4 py-2 mt-2 md:mt-0">
    <a href={link}>
      <svg
        role="img"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="hover:text-gray-500 transform hover:scale-125 duration-300 ease-in-out"
        fill="currentColor"
      >
        <title>{title}</title>
        <path d={path} />
      </svg>
    </a>
  </div>
)

export { Icon }
