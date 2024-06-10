import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './useQuery.ts'

// Create a new instance of QueryClient

// Render the app using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)
