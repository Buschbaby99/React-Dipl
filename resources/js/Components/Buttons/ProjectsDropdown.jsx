import React from "react";
import { Menu } from "@headlessui/react";

const ProjectsDropdown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                    Projekte
                </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="ProjectHome"
                                className={`${
                                    active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                } block px-4 py-2 text-sm`}
                            >
                                Projekte
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="Statistic"
                                className={`${
                                    active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                } block px-4 py-2 text-sm relative z-100`}
                            >
                                Statistik
                            </a>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    );
};

export default ProjectsDropdown;
