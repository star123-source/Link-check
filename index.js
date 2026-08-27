import fs from 'fs';
import chalk from 'chalk';
import { executionAsyncResource } from 'async_hooks';

function tratarErro(erro){
    throw new Error(chalk.red(erro.code,'Esse arquivo não existe'));  
}

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s)]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultado = capturas.map(capturas=>{
        return ({[captura[1]]:captura[2]})
    })

    return resultado.length !== ? resultado: "Não foi encontrado links no arquivo"

}

// async ^ await
async function pegaArquivo(caminhoDoArquivo){

    try{
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo,enconding)
        //console.log(chalk.green(texto));
        return extraiLinks(texto)
    }catch(erro){
        tratarErro(erro)
    }
}
//('./mooks/texto.md')

export default pegaArquivo;
