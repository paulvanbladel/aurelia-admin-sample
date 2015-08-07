## aureliadmin sample application

### How to install?
```
git clone https://github.com/paulvanbladel/aurelia-admin-sample.git
cd aurelia-admin-sample
cd server
npm install
cd ../client
npm install
jspm install
cd ..
```
### add an authentication configuration
The sample is in a way prepared to run with aurelia-aut. Therefor, it needs server side a configuration file for the development environemnt. This file is not in the github repo because it contains my personal security info. (suggestions for a better approach welcome :) )
```
cd server/config
copy config.production.js config.development.js
```
### How to run
```
cd client
gulp watch
```


