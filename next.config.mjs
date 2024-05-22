import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
//   output: 'export',
//   typescript: {
//     ignoreBuildErrors: true,
//   },
  images: {
    domains: ['img.phimapi.com', 'img.ophim.live', 'apii.online'],
  },
}

export default withNextVideo(nextConfig);