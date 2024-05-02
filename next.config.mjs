/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  // output: "export",
  images: {
    loader: "akamai",
    unoptimized:true,
    path: "",
    // unoptimized:true
  },
  // assetPrefix: "./",
};

export default nextConfig;