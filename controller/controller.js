//const Math = require('Math');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const maxAge = 3 * 24 * 60 * 60; //3 dias em segundos
const createToken = (id) =>{
    return jwt.sign({id},'#secret-Signature-For-Payload',{
        expiresIn: maxAge
    });
};

const ecraPrincipal_get = (req,res) =>{  
    res.render('ecraPrincipal');
};

const ecraPrincipalPhone_get = (req,res) =>{  
    res.render('ecraPrincipalPhone');
};

const ecraPrincipalGps_get = (req,res) =>{  
    res.render('ecraPrincipalGPS');
};
ecraPrincipalGps_get
const ecraPrincipalSetup_get = (req,res) =>{
    res.render('ecraPrincipalSetup');
};

const ecraPrincipalSetupCompleto_get = (req,res) =>{
    res.render('ecraPrincipalSetupCompleto');
};

const ecraVolante_get = (req,res) =>{  
    res.render('ecraVolante');
};


const ecraPrincipalPhone_post = (req,res) =>{  
    const{user} = req.body;
    console.log('BODY: ', req.body);

    //res.cookie('user', Susan);
    //res.send('User connected!');
    
    try{
        console.log('BODY: ', req.body);
        res.cookie('user',user);
        res.status(201).json({user:user});
        //res.send('User connected!');
    }catch(err){
        console.log(err);
    }
};

const ecraPrincipalContactos_get = (req,res) => {
    const cookies = req.cookies;
    console.log('COOKIE: ',cookies);
    res.render('ecraPrincipalContactos',{user:cookies});
}

const ecraPrincipalContactos_post = (req,res) =>{
    const {user} = req.body;
    res.cookie('contacto',user);
    res.status(201).json({user:user});
}

const ecraChamada_get = (req,res) =>{
    const contacto = req.cookies;
    console.log('CONTACTOCOOKIE: ', contacto);
    res.render('chamada',{user:contacto});
}

const ecraChamada_post = (req,res) =>{
    const {end} = req.body;
    console.log('END: ', end);
    res.cookie('contacto','',{maxAge: 1});
    res.redirect('/ecraPrincipal/contactos');
}

const ecraVolante_post = (req,res) =>{  
    res.render('ecraVolante');
};

module.exports = {
    ecraPrincipal_get,
    ecraVolante_get,
    ecraPrincipalPhone_post,
    ecraPrincipalPhone_get,
    ecraPrincipalSetup_get,
    ecraPrincipalSetupCompleto_get,
    ecraPrincipalGps_get,
    ecraPrincipalContactos_get,
    ecraChamada_get,
    ecraPrincipalContactos_post,
    ecraChamada_post

}