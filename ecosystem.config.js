module.exports = {
    apps: [{
        name: process.env.APP_NAME || 'ebs.qverselearning.org',
        script: 'node_modules/.bin/next',
        args: 'start',
        instances: 1, // or : instances: 'max',
        exec_mode: 'fork', //or : exec_mode: 'cluster',        
            
        // Next.js reads .env.production automatically when NODE_ENV=production.
        // PM2 only needs to set PORT and NODE_ENV here.
        env: {
            PORT: process.env.APP_PORT || 3012,
            NODE_ENV: 'production',
        },
    }],
};