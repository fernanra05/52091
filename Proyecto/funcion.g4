grammar funcion ;

// Reglas sintácticas (parser rules)
funcion: functionDeclaration;

functionDeclaration: 'function' Identifier '(' parameterList? ')' '{' functionBody '}';

parameterList: Identifier (',' Identifier)*;

functionBody: statement*;

statement: expressionStatement
         | consoleStatement;

expressionStatement: expression ';';

consoleStatement: 'console' '.' 'log' '(' expression ')' ';';

expression: term (('+' | '-') term)*;

term: Identifier
    | Number
    | '(' expression ')';

// Reglas léxicas (lexer rules)
Identifier: Letter (Letter | Digit | '_')*;

Number: Digit+;

// Letras y dígitos
fragment Letter: [a-zA-Z];
fragment Digit: [0-9];

// Ignorar espacios, tabulaciones y saltos de línea
WS: [ \t\r\n]+ -> skip;
