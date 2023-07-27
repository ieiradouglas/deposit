/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    GOOGLE_ID:process.env.GOOGLE_ID,
    GOOGLE_SECRET:process.env.GOOGLE_SECRET,
    SECRET:process.env.SECRET
  }
}

module.exports = nextConfig
