/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/(x|twitter)",
        destination: "https://x.com/adamdotdev",
        permanent: false,
      },
      {
        source: "/twitch",
        destination: "https://twitch.tv/adamdotdev",
        permanent: false,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@adamdotdev",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/adamdotdev/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
