import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.heroui.dev" },
      { protocol: "https", hostname: "images.adsttc.com" }
    ],
  },
  
  // Configuración para mejor debugging
  serverExternalPackages: [],
  
  // Habilitar source maps para debugging
  productionBrowserSourceMaps: true,
  
  // Webpack config simplificado para mejor stack traces
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      // Mantener nombres de funciones para mejor debugging
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
      
      // Habilitar source maps en servidor
      config.devtool = 'source-map';
    }
    
    return config;
  },
};

export default nextConfig;