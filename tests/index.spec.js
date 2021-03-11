const index = require('./../src/index')
describe('Testes automatizados', () => {
    describe('Função de soma deve retornar true', () => {
        it('should sum 1 + 1 = 2', () => {
            const a = 1
            const b = 1 
            const result = index.soma(a, b)

            expect(result).toBe(2)

        });
    });
});

