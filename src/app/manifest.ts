import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asimpta",
    short_name: "Asimpta",
    description: "Soluções digitais sob medida",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F4EF",
    theme_color: "#1F4A45",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
