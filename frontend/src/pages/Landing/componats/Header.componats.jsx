'use client'

import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { useState } from 'react'
// import { isCompositeComponent } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import { AllInOneLogoHeader } from '../../../components/Logo/Logo'


const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', },
    { name: 'Contact sales', href: '#', },
]

export const PublicHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <element id="43de5634-a4a8-4a7c-bb66-73e99fc6853e" data-section-id="43de5634-a4a8-4a7c-bb66-73e99fc6853e">


                <div id="root">
                    <section id="header">
                        <nav className="bg-white dark:bg-neutral-900 shadow-md fixed w-full z-50">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 flex items-center">
                                            <a href="#" className="text-xl font-bold text-[#1a4b8c] dark:text-white">BJS</a>
                                        </div>
                                    </div>


                                    <div className="hidden md:flex md:items-center md:space-x-4">

                                        <Link to={'/auth/signin/'} className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-[#1a4b8c] hover:bg-gray-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 transition duration-300">Sign In</Link>
                                        <Link to={'/auth/signup'} className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-[#1a4b8c] text-white hover:bg-[#15407a] dark:bg-[#1a4b8c] dark:hover:bg-[#15407a] transition duration-300">Sign Up</Link>
                                    </div>


                                    <div className="flex md:hidden items-center">
                                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1a4b8c] hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 transition duration-300" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">
                                            <span className="sr-only">Open main menu</span>

                                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                            </svg>

                                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:hidden" id="mobile-menu">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-900">

                                    <a href="#signin" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#1a4b8c] hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 transition duration-300">Sign In</a>
                                    <a href="#signup" className="block px-3 py-2 rounded-md text-base font-medium bg-[#1a4b8c] text-white hover:bg-[#15407a] dark:bg-[#1a4b8c] dark:hover:bg-[#15407a] transition duration-300">Sign Up</a>
                                </div>
                            </div>
                        </nav>
                    </section>
                </div>

            </element>
        </>
    )
}
