
describe('Pruebas en <DemoComponent />', () => { 
    
    test('Esta prueba no debe de fallar', () => {
    
        //1: Inicializacion
        const message1 = 'Hola Mundo'
        
        //2. Estimulo
        const mesagge2 = message1.trim();
    
        // 3.Observar el comportamiento... Esperado
        expect( message1 ).toBe( mesagge2 )
    
    });
    
})