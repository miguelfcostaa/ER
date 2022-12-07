//const Math = require('Math');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60; //3 dias em segundos
const createToken = (id) =>{
    return jwt.sign({id},'#secret-Signature-For-Payload',{
        expiresIn: maxAge
    });
};

const ecraPrincipal_get = (req,res) =>{  
    res.render('ecraPrincipal');
};

const ecraPrincipalSetup_get = (req,res) =>{
    res.render('ecraPrincipalSetup');
};

const ecraPrincipalPhone_get = (req,res) =>{  
    res.render('ecraPrincipalPhone');
};

const ecraVolante_get = (req,res) =>{  
    res.render('ecraVolante');
};

const ecraPrincipal_post = (req,res) =>{  
    const{media,phone} = req.body;
    console.log('BODY: ', req.body);
    
    try{
        var num = Math.random() * 10;
        const token = createToken(num);
        console.log('BODY: ', req.body);
        console.log('TOKEN: ', token);
        res.cookie('jwt',token,{httpOnly: true,maxAge:maxAge * 1000});
        res.status(201).json({option:num});
    }catch(err){
        console.log(err);
    }
};

const ecraVolante_post = (req,res) =>{  
    res.render('ecraVolante');
};

module.exports = {
    ecraPrincipal_get,
    ecraVolante_get,
    ecraPrincipal_post,
    ecraPrincipalPhone_get
}