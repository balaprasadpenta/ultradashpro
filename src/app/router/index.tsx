import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const RootLayout = lazy(() => import("../../components/layouts/root-layout"),);
const DashboardLayout = lazy(() => import("../../components/layouts/dashboard-layout"));
const ProtectedRoute = lazy(() => import("./protected-route"));
const LoginPage = lazy(() => import("../../routes/auth/login-page"));
const Dashboardpage = lazy(() => import("../../routes/dashboard/dashboard-page"));
const WatchlistPage = lazy(() => import("../../routes/watchlist/watchlist-page"));
const AnalyticsPage = lazy(() => import("../../routes/analytics/analytics-page"));
const SettingsPage = lazy(() => import("../../routes/settings/settings-page"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,

    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: "/",
                element: <Dashboardpage />,
              },
              {
                path: "/dashboard",
                element: <Dashboardpage />,
              },
              {
                path: "/watchlist",
                element: <WatchlistPage />,
              },
              {
                path: "/analytics",
                element: <AnalyticsPage />,
              },
              {
                path: "/settings",
                element: <SettingsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
