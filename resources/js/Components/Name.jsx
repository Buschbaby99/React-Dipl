
export default function Name({ auth }) {
    return (
        <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="ml-3 relative">
            <span className="inline-flex rounded-md">
                <span
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                >
                    {auth.user.name}
                </span>
            </span>
            </div>
        </div>
    );
}

