import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";
import { asyncWrapProviders } from "async_hooks";
import listaValidada from './http-validacao.js';

const caminho = process.arg

async function impreLista(valida,resultado,nome = '') {
    if(valida == true){
        console.log(chalk.yellow
        (´lista de links validada ${chalk.bgCyan.black(nome)}´),
        await listaValidada(resultado))
    }else{
    console.log(chalk.yellow
        (`Lista link ${chalk.bgCyan(nome)}`)
        ,resultado)
        console.log(resultado)
}
}

async function processaTexto(argumentos){
    let caminho = argumentos[2]
    const valida = argumentos[3] === '--valida';

    try{
        fs.lstatSync(caminho)
    } catch (erro){
        if(erro.code === "ENOENT"){
            console.log(chalk.red('Arquivo não existente'))
        }
        return;
    }
    if(fs.lstatSync(caminho).isFile()){
          const resultado = await pegaArquivo(caminho)
          imprimeLista(valida,resultado)
          ;
    }else if(fs.lstatSync(caminho).isDirectory()) {
       const arquivos = await fs.promises.readdir(caminho)
       arquivos.forEach(async(nomeDeArquivo)=>{
        const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
        imprimeLista(valida,lista,nomeDeArquivo)
    })
       
    }

}

processaTexto(caminho)