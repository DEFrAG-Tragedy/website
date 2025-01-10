module.exports = {
    apps: [
      {
        name: 'Defrag Viewer',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs',
        env: {
          'API_BASE_URL': 'http://localhost:8080/exist/apps/DEFrAG',
          'NODE_ENV': 'development'
        },
        env_production: {
          'API_BASE_URL': 'https://editor.defragtragedy.eu/exist/apps/DEFrAG',
          'NODE_ENV': 'production'
        }
      }
    ]
  }