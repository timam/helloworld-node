module.exports = {
    apps : [{
      name: 'Al-Amin-Api',
      script: './app.js',
      exec_mode : 'cluster',
      instances: 1,
      autorestart: true,
      watch: false,
      ignore_watch: ["log", "node_modules"],
      max_restarts : 3,
      kill_timeout : 20000,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'development',
        PORT:  3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }]
  };
  