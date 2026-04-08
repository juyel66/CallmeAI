import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.21.224.1", "10.10.13.88"],
  output: "export",
  
 

  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

  
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
  

    ],
  },
};

export default nextConfig;