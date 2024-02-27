export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login:React.ReactNode
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div className="flex flex-col justify-center items-center">
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div>
            {notifications}
        </div>
      </div>
    </div>
  ):(<div>
    {login}
  </div>);
}
