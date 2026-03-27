import { Pool } from 'pg';

const BD = new Pool({
    user:'postgres',
    host:'localhost',
    database: 'bd_finan_control_3b',
    port: 5432,
    password: 'admin'
})

const testarConexao = async () =>{
    try{
        const cliente = await BD.connect();
        console.log('Conexão realizada com sucesso!');
        cliente.release();
    }
    catch(error){
        console.error('Erro ao conectar ao banco de dados', error.menssage);
    }
} 

export {BD, testarConexao};