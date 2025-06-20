import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Proxy all API requests to your backend
      '/api': {
        target: 'http://localhost:8000', // Your backend server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'), // Rewrites /api to /api/v1
        secure: false, // For development with self-signed certificates
      },
      // Add more proxies if needed for other endpoints
    },
  },
});