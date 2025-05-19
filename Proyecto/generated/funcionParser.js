// Generated from c:/Users/Fernando/Documents/FERNADO/SSL/Analizador/52091/FernandoRamirez/funcion.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import funcionListener from './funcionListener.js';
import funcionVisitor from './funcionVisitor.js';

const serializedATN = [4,1,15,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,1,1,1,3,1,25,8,1,1,1,1,
1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,35,8,2,10,2,12,2,38,9,2,1,3,5,3,41,8,3,10,
3,12,3,44,9,3,1,4,1,4,3,4,48,8,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,5,7,64,8,7,10,7,12,7,67,9,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,
75,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,11,12,74,0,18,1,0,0,0,2,20,
1,0,0,0,4,31,1,0,0,0,6,42,1,0,0,0,8,47,1,0,0,0,10,49,1,0,0,0,12,52,1,0,0,
0,14,60,1,0,0,0,16,74,1,0,0,0,18,19,3,2,1,0,19,1,1,0,0,0,20,21,5,1,0,0,21,
22,5,13,0,0,22,24,5,2,0,0,23,25,3,4,2,0,24,23,1,0,0,0,24,25,1,0,0,0,25,26,
1,0,0,0,26,27,5,3,0,0,27,28,5,4,0,0,28,29,3,6,3,0,29,30,5,5,0,0,30,3,1,0,
0,0,31,36,5,13,0,0,32,33,5,6,0,0,33,35,5,13,0,0,34,32,1,0,0,0,35,38,1,0,
0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,5,1,0,0,0,38,36,1,0,0,0,39,41,3,8,4,0,
40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,7,1,0,0,0,44,
42,1,0,0,0,45,48,3,10,5,0,46,48,3,12,6,0,47,45,1,0,0,0,47,46,1,0,0,0,48,
9,1,0,0,0,49,50,3,14,7,0,50,51,5,7,0,0,51,11,1,0,0,0,52,53,5,8,0,0,53,54,
5,9,0,0,54,55,5,10,0,0,55,56,5,2,0,0,56,57,3,14,7,0,57,58,5,3,0,0,58,59,
5,7,0,0,59,13,1,0,0,0,60,65,3,16,8,0,61,62,7,0,0,0,62,64,3,16,8,0,63,61,
1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,15,1,0,0,0,67,65,1,
0,0,0,68,75,5,13,0,0,69,75,5,14,0,0,70,71,5,2,0,0,71,72,3,14,7,0,72,73,5,
3,0,0,73,75,1,0,0,0,74,68,1,0,0,0,74,69,1,0,0,0,74,70,1,0,0,0,75,17,1,0,
0,0,6,24,36,42,47,65,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class funcionParser extends antlr4.Parser {

    static grammarFileName = "funcion.g4";
    static literalNames = [ null, "'function'", "'('", "')'", "'{'", "'}'", 
                            "','", "';'", "'console'", "'.'", "'log'", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "Identifier", 
                             "Number", "WS" ];
    static ruleNames = [ "funcion", "functionDeclaration", "parameterList", 
                         "functionBody", "statement", "expressionStatement", 
                         "consoleStatement", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = funcionParser.ruleNames;
        this.literalNames = funcionParser.literalNames;
        this.symbolicNames = funcionParser.symbolicNames;
    }



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, funcionParser.RULE_funcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.functionDeclaration();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, funcionParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(funcionParser.T__0);
	        this.state = 21;
	        this.match(funcionParser.Identifier);
	        this.state = 22;
	        this.match(funcionParser.T__1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 23;
	            this.parameterList();
	        }

	        this.state = 26;
	        this.match(funcionParser.T__2);
	        this.state = 27;
	        this.match(funcionParser.T__3);
	        this.state = 28;
	        this.functionBody();
	        this.state = 29;
	        this.match(funcionParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, funcionParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(funcionParser.Identifier);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 32;
	            this.match(funcionParser.T__5);
	            this.state = 33;
	            this.match(funcionParser.Identifier);
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, funcionParser.RULE_functionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24836) !== 0)) {
	            this.state = 39;
	            this.statement();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, funcionParser.RULE_statement);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.expressionStatement();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, funcionParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.expression();
	        this.state = 50;
	        this.match(funcionParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, funcionParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(funcionParser.T__7);
	        this.state = 53;
	        this.match(funcionParser.T__8);
	        this.state = 54;
	        this.match(funcionParser.T__9);
	        this.state = 55;
	        this.match(funcionParser.T__1);
	        this.state = 56;
	        this.expression();
	        this.state = 57;
	        this.match(funcionParser.T__2);
	        this.state = 58;
	        this.match(funcionParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, funcionParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.term();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===12) {
	            this.state = 61;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 62;
	            this.term();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, funcionParser.RULE_term);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.match(funcionParser.Identifier);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.match(funcionParser.Number);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.match(funcionParser.T__1);
	            this.state = 71;
	            this.expression();
	            this.state = 72;
	            this.match(funcionParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

funcionParser.EOF = antlr4.Token.EOF;
funcionParser.T__0 = 1;
funcionParser.T__1 = 2;
funcionParser.T__2 = 3;
funcionParser.T__3 = 4;
funcionParser.T__4 = 5;
funcionParser.T__5 = 6;
funcionParser.T__6 = 7;
funcionParser.T__7 = 8;
funcionParser.T__8 = 9;
funcionParser.T__9 = 10;
funcionParser.T__10 = 11;
funcionParser.T__11 = 12;
funcionParser.Identifier = 13;
funcionParser.Number = 14;
funcionParser.WS = 15;

funcionParser.RULE_funcion = 0;
funcionParser.RULE_functionDeclaration = 1;
funcionParser.RULE_parameterList = 2;
funcionParser.RULE_functionBody = 3;
funcionParser.RULE_statement = 4;
funcionParser.RULE_expressionStatement = 5;
funcionParser.RULE_consoleStatement = 6;
funcionParser.RULE_expression = 7;
funcionParser.RULE_term = 8;

class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_funcion;
    }

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_functionDeclaration;
    }

	Identifier() {
	    return this.getToken(funcionParser.Identifier, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_parameterList;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(funcionParser.Identifier);
	    } else {
	        return this.getToken(funcionParser.Identifier, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_functionBody;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitFunctionBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_statement;
    }

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(funcionParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(funcionParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




funcionParser.FuncionContext = FuncionContext; 
funcionParser.FunctionDeclarationContext = FunctionDeclarationContext; 
funcionParser.ParameterListContext = ParameterListContext; 
funcionParser.FunctionBodyContext = FunctionBodyContext; 
funcionParser.StatementContext = StatementContext; 
funcionParser.ExpressionStatementContext = ExpressionStatementContext; 
funcionParser.ConsoleStatementContext = ConsoleStatementContext; 
funcionParser.ExpressionContext = ExpressionContext; 
funcionParser.TermContext = TermContext; 
