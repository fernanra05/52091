import funcionVisitor from "./generated/funcionVisitor.js";

class CustomfuncionVisitor extends funcionVisitor {
    constructor(contexto = {}) {
        super();
        this.contexto = contexto;
    }

    visitFuncion(ctx) {
        return this.visit(ctx.functionDeclaration());
    }

    visitFunctionDeclaration(ctx) {
        const name = ctx.Identifier().getText();
        const params = ctx.parameterList() ? this.visit(ctx.parameterList()) : [];
        console.log(`Ejecutando función: ${name}(${params.join(", ")})`);
        return this.visit(ctx.functionBody());
    }

    visitParameterList(ctx) {
        return ctx.Identifier().map(id => id.getText());
    }

    visitFunctionBody(ctx) {
        let result;
        for (const stmt of ctx.statement()) {
            result = this.visit(stmt);
        }
        return result;
    }

    visitStatement(ctx) {
        if (ctx.expressionStatement()) {
            return this.visit(ctx.expressionStatement());
        }
        if (ctx.consoleStatement()) {
            return this.visit(ctx.consoleStatement());
        }
    }

    visitExpressionStatement(ctx) {
        return this.visit(ctx.expression());
    }

    visitConsoleStatement(ctx) {
        const value = this.visit(ctx.expression());
        console.log(value);
        return value;
    }

    visitExpression(ctx) {
        let value = this.visit(ctx.term(0));
        for (let i = 1; i < ctx.term().length; i++) {
            const op = ctx.getChild(2 * i - 1).getText();
            const right = this.visit(ctx.term(i));
            if (op === '+') value += right;
            else if (op === '-') value -= right;
        }
        return value;
    }

    visitTerm(ctx) {
        if (ctx.Identifier()) {
            const name = ctx.Identifier().getText();
            return this.contexto[name] ?? 0;
        }
        if (ctx.Number()) {
            return parseInt(ctx.Number().getText(), 10);
        }
        if (ctx.expression()) {
            return this.visit(ctx.expression());
        }
    }
}

export default CustomfuncionVisitor;