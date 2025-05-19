import fs from 'fs';
import readline from 'readline';
import funcionLexer from './generated/funcionLexer.js';
import funcionParser from './generated/funcionParser.js';
import funcionVisitor from './generated/funcionVisitor.js';
import CustomfuncionVisitor from './CustomfuncionVisitor.js';
import  {CharStreams, CommonTokenStream } from "antlr4";


async function main() {
    let input;
    let rutaArchivo = 'input.txt';

    // Permitir al usuario ingresar la ruta del archivo de entrada
    rutaArchivo = await leerRutaArchivo();

    try {
        input = fs.readFileSync(rutaArchivo, 'utf8');
    } catch (err) {
        console.log(`No se pudo leer el archivo "${rutaArchivo}". Puedes escribir la entrada manualmente.`);
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new funcionLexer(inputStream);

    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();

    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("------------------------------------------------------------");
    console.log("| Lexema                   | Token                         |");
    console.log("------------------------------------------------------------");
    for (let token of tokens) {
        const tokenType = funcionLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)}           | ${tokenType.padEnd(30)}|`);
    }
    console.log("-------------------------------------------------------");

    // Rehacer flujo léxico
    inputStream = CharStreams.fromString(input);
    lexer = new funcionLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new funcionParser(tokenStream);
    let tree = parser.funcion(); // Cambia 'dsl' por la regla inicial de tu gramática
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // ✅ Crear el contexto que simula el "estado" del sistema
        const contexto = {
            intentosFallidos: 5,     // Cambia para probar lógica
            fueraDeHorario: true,
            accesoSensibles: true,
            esAdmin: false
        };

        const visitor = new CustomfuncionVisitor(contexto); // Cambiado a CustomfuncionVisitor
        visitor.visit(tree);
    }
}

function leerRutaArchivo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question('Ingrese la ruta del archivo de entrada (ej: ../input-correcto1.txt): ', (answer) => {
            rl.close();
            resolve(answer.trim() || 'input.txt');
        });
    });
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
