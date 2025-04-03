import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/NOME_DO_REPO/", // 🔥 Substitua pelo nome exato do seu repositório!
  build: {
    outDir: "dist",
  },
});
