export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar: Only visible to Admins */}
      <aside className="w-64 bg-teal-800 text-white p-4">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Manage Orders</li>
        </ul>
      </aside>
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-8">
        <div className="rounded-lg bg-white p-6 shadow">
          {children}
        </div>
      </main>
    </div>
  );
}