import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <aside>
        <h2>ultradash Pro</h2>

        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/watchlist">WatchList</NavLink>
          <NavLink to="/analytics">Analytics</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
