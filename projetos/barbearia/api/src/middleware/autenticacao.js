import jwd from 'jsonwebtoken'

//Assinatura do meu servidor, só o servidor tem essa chave
const SECRET_KEY = 'sua_chave_secreta';
export function autenticarToken(req, res, next) {
    const cabecalho = req.headers['authorization'];

    //extrair o token, que por padrão vem no formato BEARER
    //bearer ihsifokijsdosjido
    //token = ihsifokijsdosjido
    const token = cabecalho && cabecalho.split(' ')[1]

    //validação se o token esta autorizado.
    if (!token) {
        return res.status(401).json({message: 'Token não fornecido'})
    }

    //caso o token seja valido e se a assinatura for igual a secret_key
    //Ele permite o acesso 
    jwd.verify(token, SECRET_KEY, (error, usuario) => {
        //token e valido ou se expirou
        if (error) {
            return res.status(403).json({message: 'Token inválido ou expirado'})
        }

        req.usuario = usuario
        //Passa para a proxima função ou rota
        next()
    })
}