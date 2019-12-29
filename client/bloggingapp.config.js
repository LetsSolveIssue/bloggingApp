module.exports = {
    apps : [{
      name        : "blogging app",
      script      : "npm run start",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
       "NODE_ENV": "production"
      }
    }]
  }