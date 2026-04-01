npm i git
npm i playwright@latest
npx playwright test tests/login.spec.js --ui
setup .env: npm i dotenv
code gen: 
npx playwright codegen https://ntuuat.service-now.com/login.do
