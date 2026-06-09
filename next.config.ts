import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // nodemailer uses dynamic requires that don't bundle cleanly; load it at
  // runtime from node_modules instead of bundling it into the server action.
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
