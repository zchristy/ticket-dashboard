import { createBrowserRouter } from 'react-router'
import App from './App.tsx'
import OverviewPage from './pages/Overview.tsx'
import TicketsPage from './pages/Tickets.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: OverviewPage },
      { path: 'tickets', Component: TicketsPage }
    ]
  },
]);