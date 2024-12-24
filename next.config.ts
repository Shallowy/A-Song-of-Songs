import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withTM = require("next-transpile-modules")(["echarts", "zrender"]);

module.exports = withTM({})

export default nextConfig;
