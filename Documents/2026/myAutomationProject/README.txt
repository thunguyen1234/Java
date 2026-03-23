1. set up playwright project
npm init playwright@latest
2. install playwright recommendation tool
3. connect with github repo
git remote add origin https://github.com/thunguyen1234/myAutomationProject.git
4. Set up dotenv
open terminal and run: npm install dotenv

POM:
playwright-api-project/
├── .env                     # Lưu URL, Username, Password
├── playwright.config.js     # Cấu hình Playwright
├── data/
│   └── clients.data.json    # Chứa test data (payload) cho CRUD
├── utils/
│   └── TokenManager.js      # Xử lý logic token (cấp mới/tái sử dụng)
├── api/
│   ├── BaseApi.js           # Chứa các hàm CRUD chung (GET, POST, PUT, DELETE)
│   ├── ClientsApi.js        # Kế thừa từ BaseApi, dành riêng cho endpoints của Clients
│   └── UsersApi.js          # Kế thừa từ BaseApi...
└── tests/
    └── clients.crud.spec.js # File viết test case cho Clients
