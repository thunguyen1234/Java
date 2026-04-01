const {BasePage} = require('../base/BasePage');
class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.usernameInput = '#user_name';
        this.passwordInput = '#user_password';
        this.loginButton = page.getByRole('button', {name: 'Log in'});
        this.errorMessage = page.getByText('User name or password invalid');
    }
    //specific actions: a helper method just for logging in
    async login(username, password){
        await this.enterText(this.usernameInput, username);
        await this.enterText(this.passwordInput, password);
        await this.click(this.loginButton);
    }
    //helper to get error if login fails
    async getErrorMessage(){
        return await this.getText(this.errorMessage);
    }
}
module.exports = {LoginPage};