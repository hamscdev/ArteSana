class UserModel {

    constructor (names, password, email, lastName){
        this.names = names;
        this.password = password;
        this.email = email;
        this.lastName = lastName;
    }


}

module.exports = UserModel

// docker run --name artesanabd -e POSTGRES_PASSWORD=m75tTx2Y8v5U -p 5432:5432 -d 4cb0803077dd