PROBLEMS WHEN TRYING TO DEPLOY RTO HEROKU:

remote: Building source:
remote: 
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 12.x...
remote:        Downloading and installing node 12.13.1...
remote:        Using default npm version: 6.12.1
remote:        
remote: -----> Installing dependencies
remote:        Prebuild detected (node_modules already exists)
remote:        Rebuilding any native modules
remote:        npm ERR! code ENOENT
remote:        npm ERR! syscall chmod
remote:        npm ERR! path /tmp/build_9ae52693ccd6dcc218bdcbd72cf74f35/node_modules/handlebars/bin/handlebars
remote:        npm ERR! errno -2
remote:        npm ERR! enoent ENOENT: no such file or directory, chmod '/tmp/build_9ae52693ccd6dcc218bdcbd72cf74f35/node_modules/handlebars/bin/handlebars'
remote:        npm ERR! enoent This is related to npm not being able to find a file.
remote:        npm ERR! enoent 
remote:        
remote:        npm ERR! A complete log of this run can be found in:
remote:        npm ERR!     /tmp/npmcache.NMIIo/_logs/2019-11-27T05_32_18_216Z-debug.log
remote: 
remote: -----> Build failed
remote:        
remote:        We're sorry this build is failing! You can troubleshoot common issues here:
remote:        https://devcenter.heroku.com/articles/troubleshooting-node-deploys
remote:        
remote:        Some possible problems:
remote:        
remote:        - node_modules checked into source control
remote:          https://blog.heroku.com/node-habits-2016#9-only-git-the-important-bits
remote:        
remote:        - Node version not specified in package.json
remote:          https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version
remote:        
remote:        Love,
remote:        Heroku
remote:        
remote:  !     Push rejected, failed to compile Node.js app.
remote: 
remote:  !     Push failed
remote: Verifying deploy...
remote: 
remote: !	Push rejected to radiant-river-01043.
remote: 
To https://git.heroku.com/radiant-river-01043.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/radiant-river-01043.git'