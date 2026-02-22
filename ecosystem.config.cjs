module.exports = {
  apps: [{
    name: 'tkfruits-website',
    script: 'npm',
    args: 'start',
    cwd: '/home/frappe/frappe-bench/apps/tkfruits/tkfruits/',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3010
    },
    error_file: '/home/frappe/frappe-bench/logs/tkfruits-website-error.log',
    out_file: '/home/frappe/frappe-bench/logs/tkfruits-website-out.log',
    log_file: '/home/frappe/frappe-bench/logs/tkfruits-website.log',
    time: true
  }]
};
