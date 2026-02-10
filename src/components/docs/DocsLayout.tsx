import { NavLink } from 'react-router-dom';

export default function DocsLayout({ children }:any) {
    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
                <div className="p-6 font-bold text-lg">
                    My Docs
                </div>

                <nav className="px-4 space-y-1">
                    <SidebarLink title="Introduction" />
                    <SidebarLink title="Getting Started" />
                    <SidebarLink title="Installation" />
                    <SidebarLink title="Configuration" />
                    <SidebarLink title="API Reference" />
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

function SidebarLink({ title }: any) {
    return (
        <NavLink
            to="#"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
            {title}
        </NavLink>
    );
}
