import Link from "next/link"

interface DropdownProps {
  label: string
  items: { name: string, link: string }[]
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  return (
    <li className="relative group">
      <span className="cursor-pointer hover:text-gray-600 transition-colors">
        {label}
      </span>
      
      <div className="absolute left-0 w-full h-4 -bottom-4"></div>
      <ul className="absolute left-0 top-full pt-4 hidden w-48 bg-black shadow-lg group-hover:block z-50 rounded-md overflow-hidden">
        {items.map((item) => (
          <li key={item.name} className="hover:bg-blue-700 transition-colors">
            <Link href={item.link} className="block w-full p-3 text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Dropdown