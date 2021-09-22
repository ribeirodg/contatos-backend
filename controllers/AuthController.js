
    const AuthController = {
    registrar: (req, res)=>{
       console.log('registrando...');
    //    return res.send('registrando...');
    },
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}
AuthController.registrar();
module.exports = AuthController;