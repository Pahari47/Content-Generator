/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:i8tEf1mcwZzM@ep-gentle-frog-a1sju8m3.ap-southeast-1.aws.neon.tech/AI-Content-Genaretor?sslmode=require',
    }
  };
  