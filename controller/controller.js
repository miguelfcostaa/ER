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

const ecraPrincipalRadio_get = (req,res) =>{  
    res.render('ecraPrincipalRadio');
};

const ecraPrincipalMedia_get = (req,res) =>{  
    res.render('ecraPrincipalMedia');
};

const ecraPrincipalPhone_get = (req,res) =>{  
    res.render('ecraPrincipalPhone');
};

const ecraPrincipalSetup_get = (req,res) =>{
    res.render('ecraPrincipalSetup');
};

const ecraPrincipalSetupCompleto_get = (req,res) =>{
    res.render('ecraPrincipalSetupCompleto');
};

const ecraPrincipalGPS_get = (req,res) =>{  
    res.render('ecraPrincipalGPS');
};

const ecraPrincipalCar_get = (req,res) =>{  
    res.render('ecraPrincipalCar');
};

const ecraPrincipalMenu_get = (req,res) =>{  
    res.render('ecraPrincipalMenu');
};

const ecraVolante_get = (req,res) =>{  
    res.render('ecraVolante');
};

const ecraPrincipal_post = (req,res) =>{  
    const{phone} = req.body;
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
    ecraPrincipalRadio_get,
    ecraPrincipalMedia_get,
    ecraPrincipalPhone_get,
    ecraPrincipalSetup_get,
    ecraPrincipalGPS_get,
    ecraPrincipalCar_get,
    ecraPrincipalMenu_get,
    ecraPrincipalSetupCompleto_get

}