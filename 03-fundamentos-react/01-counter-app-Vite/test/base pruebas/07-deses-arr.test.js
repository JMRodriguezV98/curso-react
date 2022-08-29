import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Prueba 07-deses-arr', () => {
    test('debe retornar un string y un arreglo', () => {

        const [ letters, numbers ] = retornaArreglo();
        
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        console.log(typeof letters)

    })
})