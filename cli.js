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