// vite.config.ts
import { reactRouter } from "file:///home/momme/Desktop/esh.elevensoft.dev/node_modules/@react-router/dev/dist/vite.js";
import tailwindcss from "file:///home/momme/Desktop/esh.elevensoft.dev/node_modules/@tailwindcss/vite/dist/index.mjs";
import { defineConfig } from "file:///home/momme/Desktop/esh.elevensoft.dev/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///home/momme/Desktop/esh.elevensoft.dev/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    allowedHosts: ["a1d0-161-22-57-86.ngrok-free.app"],
    hmr: {
      overlay: false
    }
  },
  build: {
    target: "esnext",
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router", "react-router-dom"],
          ui: ["@radix-ui/react-icons", "lucide-react"],
          utils: ["clsx", "class-variance-authority", "tailwind-merge"]
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router", "react-router-dom"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tb21tZS9EZXNrdG9wL2VzaC5lbGV2ZW5zb2Z0LmRldlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbW9tbWUvRGVza3RvcC9lc2guZWxldmVuc29mdC5kZXYvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbW9tbWUvRGVza3RvcC9lc2guZWxldmVuc29mdC5kZXYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZWFjdFJvdXRlciB9IGZyb20gXCJAcmVhY3Qtcm91dGVyL2Rldi92aXRlXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3RhaWx3aW5kY3NzKCksIHJlYWN0Um91dGVyKCksIHRzY29uZmlnUGF0aHMoKV0sXG4gIHNlcnZlcjoge1xuICAgIGFsbG93ZWRIb3N0czogWydhMWQwLTE2MS0yMi01Ny04Ni5uZ3Jvay1mcmVlLmFwcCddLFxuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgcm91dGVyOiBbJ3JlYWN0LXJvdXRlcicsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgdWk6IFsnQHJhZGl4LXVpL3JlYWN0LWljb25zJywgJ2x1Y2lkZS1yZWFjdCddLFxuICAgICAgICAgIHV0aWxzOiBbJ2Nsc3gnLCAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JywgJ3RhaWx3aW5kLW1lcmdlJ11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXInLCAncmVhY3Qtcm91dGVyLWRvbSddXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxTQUFTLG1CQUFtQjtBQUNoVSxPQUFPLGlCQUFpQjtBQUN4QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxjQUFjLENBQUM7QUFBQSxFQUN2RCxRQUFRO0FBQUEsSUFDTixjQUFjLENBQUMsa0NBQWtDO0FBQUEsSUFDakQsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDN0IsUUFBUSxDQUFDLGdCQUFnQixrQkFBa0I7QUFBQSxVQUMzQyxJQUFJLENBQUMseUJBQXlCLGNBQWM7QUFBQSxVQUM1QyxPQUFPLENBQUMsUUFBUSw0QkFBNEIsZ0JBQWdCO0FBQUEsUUFDOUQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxTQUFTLGFBQWEsZ0JBQWdCLGtCQUFrQjtBQUFBLEVBQ3BFO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
