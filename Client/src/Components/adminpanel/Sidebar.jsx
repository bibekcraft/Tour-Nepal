import { NavLink } from "react-router-dom";
import place from '../../assets/place.png'
import guide from '../../assets/guide.png'
import details from '../../assets/details.png'
import diary from '../../assets/diary.png'
const Sidebar = () => {
    return (
        <aside className="flex flex-col w-64 h-screen bg-white shadow-lg">
            {/* Header Section */}
            <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-blue-900"></h1>
                <p className="mt-2 text-sm text-gray-500">Manage your inventory seamlessly</p>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 mt-6">
                <ul className="space-y-4">
 
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all ${
                                    isActive
                                        ? "text-blue-600 bg-gray-100"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                }`
                            }
                        >
                            <img src={guide} height={40} width={40}></img>
                            Add Category
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all ${
                                    isActive
                                        ? "text-blue-600 bg-gray-100"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                }`
                            }
                        >
                            <img src={place} height={40} width={40}></img>
                            Add Place
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all ${
                                    isActive
                                        ? "text-blue-600 bg-gray-100"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                    }`
                            }
                        >
                            <img src={details} height={40} width={40}></img>
                            Add Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                `flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all ${
                                    isActive
                                        ? "text-blue-600 bg-gray-100"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                    }`
                            }
                        >
                            <img src={diary} height={40} width={40}></img>
                            Add Journal
                        </NavLink>
                    </li>
                </ul>
            </nav>


        </aside>
    );
};

export default Sidebar;
