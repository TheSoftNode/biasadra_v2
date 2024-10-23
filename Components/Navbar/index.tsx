"use client"
import Link from "next/link"
import React, { useState, useCallback, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

interface NavLink
{
  name: string
  link: string
  isButton?: boolean
  isDropdown?: boolean
  dropdownItems?: { name: string; link: string }[]
}

const links: NavLink[] = [
  { name: "Home", link: "/" },
  {
    name: "Academic Boards",
    link: "",
    isDropdown: true,
    dropdownItems: [
      { name: "Ireland", link: "/Ireland" },
      { name: "Germany", link: "/Germany" },
      { name: "United Kingdom", link: "/UK" },
      { name: "Netherlands", link: "/Netherlands" },
      { name: "France", link: "/France" },
      { name: "Spain", link: "/Spain" },
      { name: "United States", link: "/USA" },
      { name: "Canada", link: "/Canada" },
    ],
  },
  {
    name: "AI Academy",
    link: "",
    isDropdown: true,
    dropdownItems: [
      { name: "AI4Energy", link: "/Energy" },
      { name: "AI4Art&Design", link: "/Art" },
    ],
  },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact" },
  { name: "Online Application", link: "https://docs.google.com/forms/d/1WD9wtTeykbfAASNj-UiruXLV-hiTkncWZ1BB6PfAqLg/edit?pli=1", isButton: true },
]

const NavBar: React.FC = () =>
{
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Close mobile menu when screen size changes to desktop
  useEffect(() =>
  {
    const handleResize = () =>
    {
      if (window.innerWidth >= 1024)
      {
        setIsNavOpen(false)
        setOpenDropdown(null)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() =>
  {
    if (isNavOpen)
    {
      document.body.style.overflow = 'hidden'
    } else
    {
      document.body.style.overflow = 'unset'
    }
    return () =>
    {
      document.body.style.overflow = 'unset'
    }
  }, [isNavOpen])

  const toggleNav = useCallback(() =>
  {
    setIsNavOpen(prev => !prev)
  }, [])

  const toggleDropdown = useCallback((name: string) =>
  {
    setOpenDropdown(prev => prev === name ? null : name)
  }, [])

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo section */}
            <div className="flex-shrink-0 relative z-10">
              <img src="/images/logo.jpg" alt="logo" className="h-8 w-auto md:h-10 lg:h-16 object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {links.map((item) => (
                <div key={item.name} className="relative group">
                  {item.isDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 py-2 transition-colors duration-200 group"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <div className="py-2 bg-white rounded-xl shadow-xl border border-gray-100">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.link}
                              className="block px-4 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      {item.isButton ? (
                        <Link
                          href={item.link}
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 font-medium"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link
                          href={item.link}
                          className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleNav}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-10"
              aria-expanded={isNavOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isNavOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isNavOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden"
            onClick={toggleNav}
          />
        )}

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="px-4 pt-20 pb-6 space-y-4">
              {links.map((item) =>
                item.isDropdown ? (
                  <div key={item.name} className="py-2">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-gray-900 font-medium hover:text-indigo-600 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`mt-2 transition-all duration-200 ease-in-out ${openDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.link}
                          onClick={toggleNav}
                          className="block px-8 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 text-sm font-medium transition-colors duration-150 rounded-lg"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={item.name} className="py-2">
                    {item.isButton ? (
                      <Link
                        href={item.link}
                        onClick={toggleNav}
                        className="block w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:shadow-md transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={toggleNav}
                        className="block px-4 py-2.5 text-gray-900 hover:text-indigo-600 font-medium transition-colors duration-150 rounded-lg hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default NavBar