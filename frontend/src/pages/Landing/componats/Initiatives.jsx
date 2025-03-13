import React from 'react'

export default function Initiatives() {
    return (
        <>
            <element id="582f7c25-a4d0-41a0-ad7b-848d763e18fa" data-section-id="582f7c25-a4d0-41a0-ad7b-848d763e18fa">


                <div id="root">
                    <section id="initiatives" className="py-16 bg-white dark:bg-neutral-900">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Initiatives</h2>
                                <div className="w-24 h-1 bg-[#1a4b8c] mx-auto mb-6"></div>
                                <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
                                    BJS carries out impactful initiatives across several key domains to address pressing social needs and foster community development.
                                </p>
                            </div>

                            <div className="max-w-6xl mx-auto">
                                <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                                    <button className="tab-button px-4 py-2 rounded-full text-sm font-medium bg-[#1a4b8c] text-white focus:outline-none focus:ring-2 focus:ring-[#1a4b8c] focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-colors" data-tab="disaster">
                                        Disaster Response
                                    </button>
                                    <button className="tab-button px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#1a4b8c] focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-colors" data-tab="social">
                                        Social Development
                                    </button>
                                    <button className="tab-button px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#1a4b8c] focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-colors" data-tab="education">
                                        Education Initiatives
                                    </button>
                                    <button className="tab-button px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#1a4b8c] focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-colors" data-tab="mulyavardhan">
                                        Mulyavardhan
                                    </button>
                                </div>

                                <div className="tab-content-container">
                                    <div className="tab-content block" id="disaster-content">
                                        <div className="bg-gray-50 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg">
                                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                                <div className="p-8 md:p-10">
                                                    <div className="flex items-center mb-6">
                                                        <div className="w-12 h-12 flex-shrink-0 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                                            </svg>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Disaster Response</h3>
                                                    </div>

                                                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                                        <p>
                                                            BJS has been a lead player in relief and rehabilitation efforts during all major disasters in India and its neighbourhood since 1993, including several droughts in the past decade and more recently the Covid-19 pandemic.
                                                        </p>
                                                        <p>
                                                            Our disaster response team works with a structured approach, focusing on immediate relief, long-term rehabilitation, and building community resilience to better withstand future disasters.
                                                        </p>

                                                        <div className="mt-6">
                                                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Interventions</h4>
                                                            <ul className="space-y-2">
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Emergency response and coordination during natural disasters</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Medical relief and healthcare support during emergencies</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Rehabilitation programs for affected communities</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Covid-19 pandemic response initiatives</span>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="mt-8">
                                                            <a href="#" className="inline-flex items-center text-[#1a4b8c] dark:text-blue-400 font-medium hover:underline">
                                                                <span>Learn more about our disaster response</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="relative bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
                                                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                                                    <div className="p-8 text-center">
                                                        <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                                            </svg>
                                                        </div>

                                                        <h4 className="text-xl font-bold text-white mb-4">Impact Metrics</h4>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">28+</div>
                                                                <p className="text-white/80 text-sm">Major disaster interventions</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">300K+</div>
                                                                <p className="text-white/80 text-sm">People supported</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">120+</div>
                                                                <p className="text-white/80 text-sm">Medical camps organized</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">12</div>
                                                                <p className="text-white/80 text-sm">States covered</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-content hidden" id="social-content">
                                        <div className="bg-gray-50 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg">
                                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                                <div className="p-8 md:p-10">
                                                    <div className="flex items-center mb-6">
                                                        <div className="w-12 h-12 flex-shrink-0 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Social Development</h3>
                                                    </div>

                                                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                                        <p>
                                                            BJS's early work transformed into a mass movement that has been instrumental in freeing several communities from the shackles of undesirable social customs responsible for dowry deaths and female foeticide.
                                                        </p>
                                                        <p>
                                                            Our social development initiatives focus on addressing deep-rooted social issues through awareness, advocacy, and community engagement to bring about sustainable change.
                                                        </p>

                                                        <div className="mt-6">
                                                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Programs</h4>
                                                            <ul className="space-y-2">
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Anti-dowry and women empowerment campaigns</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Water conservation and management projects</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Community health programs and awareness</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Rural development and livelihood initiatives</span>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="mt-8">
                                                            <a href="#" className="inline-flex items-center text-[#1a4b8c] dark:text-blue-400 font-medium hover:underline">
                                                                <span>Learn more about our social initiatives</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="relative bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                                                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                                                    <div className="p-8 text-center">
                                                        <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                                            </svg>
                                                        </div>

                                                        <h4 className="text-xl font-bold text-white mb-4">Impact Statistics</h4>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">500+</div>
                                                                <p className="text-white/80 text-sm">Communities impacted</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">40K+</div>
                                                                <p className="text-white/80 text-sm">Women empowered</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">200+</div>
                                                                <p className="text-white/80 text-sm">Water conservation projects</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">15K+</div>
                                                                <p className="text-white/80 text-sm">Health check-ups conducted</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-content hidden" id="education-content">
                                        <div className="bg-gray-50 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg">
                                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                                <div className="p-8 md:p-10">
                                                    <div className="flex items-center mb-6">
                                                        <div className="w-12 h-12 flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                                            </svg>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education Initiatives</h3>
                                                    </div>

                                                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                                        <p>
                                                            BJS's education initiatives are designed to create holistic learning environments that focus not just on academic excellence but also on character building and value education.
                                                        </p>
                                                        <p>
                                                            Through innovative educational models and teacher training programs, we strive to transform the education landscape and create future-ready citizens.
                                                        </p>

                                                        <div className="mt-6">
                                                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Programs</h4>
                                                            <ul className="space-y-2">
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>School transformation programs</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Teacher training and development</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Digital learning resources and infrastructure</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Career guidance and skill development for students</span>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="mt-8">
                                                            <a href="#" className="inline-flex items-center text-[#1a4b8c] dark:text-blue-400 font-medium hover:underline">
                                                                <span>Learn more about our education programs</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                                                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                                                    <div className="p-8 text-center">
                                                        <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                                            </svg>
                                                        </div>

                                                        <h4 className="text-xl font-bold text-white mb-4">Education Impact</h4>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                                                                <p className="text-white/80 text-sm">Schools transformed</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">15K+</div>
                                                                <p className="text-white/80 text-sm">Teachers trained</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">500K+</div>
                                                                <p className="text-white/80 text-sm">Students benefited</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">8</div>
                                                                <p className="text-white/80 text-sm">States covered</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-content hidden" id="mulyavardhan-content">
                                        <div className="bg-gray-50 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg">
                                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                                <div className="p-8 md:p-10">
                                                    <div className="flex items-center mb-6">
                                                        <div className="w-12 h-12 flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                                            </svg>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mulyavardhan</h3>
                                                    </div>

                                                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                                        <p>
                                                            Mulyavardhan is a flagship educational program by BJS that focuses on value education and citizenship development through an integrated and experiential learning approach.
                                                        </p>
                                                        <p>
                                                            The program helps children develop critical thinking, empathy, and social responsibility while imbibing constitutional values and democratic principles.
                                                        </p>

                                                        <div className="mt-6">
                                                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Program Features</h4>
                                                            <ul className="space-y-2">
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Value-based educational framework</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Integration with school curriculum</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Experiential learning methodologies</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Teacher training and support system</span>
                                                                </li>
                                                                <li className="flex items-start">
                                                                    <svg className="h-5 w-5 text-[#1a4b8c] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    <span>Assessment and evaluation framework</span>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="mt-8">
                                                            <a href="#" className="inline-flex items-center text-[#1a4b8c] dark:text-blue-400 font-medium hover:underline">
                                                                <span>Learn more about Mulyavardhan</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                                                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                                                    <div className="p-8 text-center">
                                                        <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                                            </svg>
                                                        </div>

                                                        <h4 className="text-xl font-bold text-white mb-4">Mulyavardhan Impact</h4>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">3500+</div>
                                                                <p className="text-white/80 text-sm">Schools implementing</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">12K+</div>
                                                                <p className="text-white/80 text-sm">Teachers trained</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">800K+</div>
                                                                <p className="text-white/80 text-sm">Students impacted</p>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-3xl font-bold text-white mb-1">6</div>
                                                                <p className="text-white/80 text-sm">States adopted</p>
                                                            </div>
                                                        </div>

                                                        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                            <p className="text-white/90 italic text-sm">
                                                                "Mulyavardhan has transformed how children learn about values, helping them become responsible citizens and compassionate individuals."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </element>
        </>
    )
}
