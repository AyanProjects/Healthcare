const config = {
  isEnvProduction: process.env.NODE_ENV === "production",
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
  s3Bucket: process.env.S3_BUCKET,
  s3Config: {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    endpoint: {
      hostname: process.env.AWS_HOST,
      protocol: process.env.AWS_SCHEME,
      port: process.env.AWS_PORT
    }
  }
};

export default config;
