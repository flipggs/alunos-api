const { isEmail } = require("validator");
const { v4: uuidv5 } = require('uuid')
let alunosData = require("./alunosData");

let id = 4;
let token = '';

exports.getAlunos = (req, res) => {
    res.send(alunosData.alunos);
};

exports.postAlunos = (req, res) => {
    let { alunos } = alunosData;

    const errors = validationsCreateUser(req.body, alunos);
    
    if (errors.length)
        return res.status(400).json({ status: 400, errors });

    id++;
    const obj = {
        id,
        ...req.body
    };

    const { password, ...rest } = obj;

    alunos.push(obj);
    res.send(rest);
};

exports.postLogin = (req, res) => {
    const { body } = req;
    let { alunos } = alunosData;

    const user = alunos.find(item => item.password === body.password && item.email === body.email);

    if (!user) {
        return res.status(400).json({ status: 400, errors: ["Usuário ou senha inválidos"] });
    }

    const { id, nome, email } = user;
    token = `${uuidv5()}${uuidv5()}${uuidv5()}${uuidv5()}${uuidv5()}`;
    res.send({
        token,
        user: {
            id, 
            nome, 
            email
        }
    });
    

}

function validationsCreateUser(body, alunos) {
    const { nome, email, password } = body;
    let errors = [];
    if (alunos.some(item => item.email === email)) errors.push("Email já existe");

    if (!nome || !email || !password) errors.push("O campo nome, email e password são obrigatórios");

    if (nome.length < 3 || nome.length > 255)
        errors.push("O campo nome deve ter entre 3 e 255 caracteres");
    
    if (!isEmail(email))
        errors.push("Email inválido");

    if (password.length < 6 || password.length > 50)
        errors.push("A senha precisa ter entre 6 e 50 caracteres");

    return errors;
}