const userDb = [
    {
        "userName": "user1",
        "password": "pass1"
    }
]


const LoginService = {
    login: function(name, password) {
        console.log("name=", name, "\npass=", password);

        const user = userDb.find(u => u.userName === name)
        if (user && user.password === password) {
            
            sessionStorage.setItem("userLoggedIn", true);
            sessionStorage.setItem("userName", name);
            console.log("Login successful for user ", name);
            return true;
        }
        return false;
    },

    logout: function(name) {
        console.log("name=", name);
    }

};

export default LoginService;