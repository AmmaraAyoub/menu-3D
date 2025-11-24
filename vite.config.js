import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/menu-3D/",   // 🔥 EXACTEMENT TON REPO (respecte la majuscule du D)
});
