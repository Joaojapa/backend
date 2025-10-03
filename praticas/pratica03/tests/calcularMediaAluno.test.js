const { calcularMediaAluno } = require('../src/calcularMediaAluno');

<<<<<<< HEAD
describe ("Teste da media dos alunos", () => {

it("Quando a1 ou a2 não forem informadas", () => {
    expect(() => calcularMediaAluno(undefined, undefined, 1)).toThrow(Error);
    expect(() => calcularMediaAluno(undefined, 5, 1)).toThrow(Error);
    expect(() => calcularMediaAluno(7, undefined, 1)).toThrow(Error);
}) 

it("Quando a1 ou a2 forem negativos", () => {
    expect(() => calcularMediaAluno(-2, -2, 1)).toThrow(Error)
    expect(() => calcularMediaAluno(5, -2, 1)).toThrow(Error)
    expect(() => calcularMediaAluno(-2, 9, 1)).toThrow(Error)
})

it("Quando a3 não for informado", () => {
    expect(calcularMediaAluno(9, 9)).toBeCloseTo(9)
})

it("Quando a3 for negativa", () => {
    expect(() => calcularMediaAluno(5, 2, -4)).toThrow(Error)
})

it("Quando a combinação de A3 for melhor com A1", () => {
    expect(calcularMediaAluno(6, 2, 7)).toBeCloseTo(6.6)
    expect(calcularMediaAluno(7, 1, 6)).toBeCloseTo(6.4)
})

it("Quando a combinação de A3 for melhor com A2", () => {
    expect(calcularMediaAluno(1, 4, 7)).toBeCloseTo(5.8)
    expect(calcularMediaAluno(2, 6, 7)).toBeCloseTo(6.6)
})

})
=======
test('A função calcularMediaAluno deve estar definida', () => {
  expect(calcularMediaAluno).toBeDefined();
});

test('Deve lançar erro se a1 ou a2 não forem informadas', () => {
  expect(() => calcularMediaAluno(undefined, 8, 7))
    .toThrow('Notas a1 ou a2 não informadas');
  expect(() => calcularMediaAluno(5, undefined, 7))
    .toThrow('Notas a1 ou a2 não informadas');
});

test('Deve lançar erro se a1 ou a2 forem negativas', () => {
  expect(() => calcularMediaAluno(-5, 8, 7))
    .toThrow('Notas a1 ou a2 não podem ser negativas');
  expect(() => calcularMediaAluno(5, -8, 7))
    .toThrow('Notas a1 ou a2 não podem ser negativas');
});

test('Deve lançar erro se a3 for negativa', () => {
  expect(() => calcularMediaAluno(6, 9, -3))
    .toThrow('Nota a3 não pode ser negativa');
});

test('Cálculo da média quando a3 não é informada', () => {
  const resultado = calcularMediaAluno(6, 9); 
  expect(resultado).toBeCloseTo(6 * 0.4 + 9 * 0.6); 
});

test('Cálculo da média quando a3 é informada', () => {
  const a1 = 6;
  const a2 = 9;
  const a3 = 3;
  const mediaAritmetica = (a1 + a2 + a3) / 3;
  const combinacaoA1A3 = (a1 + a3) / 2;
  const combinacaoA2A3 = (a2 + a3) / 2;
  const esperado = Math.max(mediaAritmetica, combinacaoA1A3, combinacaoA2A3);

  const resultado = calcularMediaAluno(a1, a2, a3);
  expect(resultado).toBeCloseTo(esperado);
});

test('Cálculo da média quando a3 é informada e melhor combinação é a1 com a3', () => {
  const a1 = 7;
  const a2 = 5;
  const a3 = 9;
  const mediaAritmetica = (a1 + a2 + a3) / 3;
  const combinacaoA1A3 = (a1 + a3) / 2;
  const combinacaoA2A3 = (a2 + a3) / 2;
  const esperado = Math.max(mediaAritmetica, combinacaoA1A3, combinacaoA2A3);

  const resultado = calcularMediaAluno(a1, a2, a3);
  expect(resultado).toBeCloseTo(esperado);
});

test('Cálculo da média quando a3 é informada e melhor combinação é a3 com a2', () => {
  const a1 = 4;
  const a2 = 8;
  const a3 = 10;
  const mediaAritmetica = (a1 + a2 + a3) / 3;
  const combinacaoA1A3 = (a1 + a3) / 2;
  const combinacaoA2A3 = (a2 + a3) / 2;
  const esperado = Math.max(mediaAritmetica, combinacaoA1A3, combinacaoA2A3);

  const resultado = calcularMediaAluno(a1, a2, a3);
  expect(resultado).toBeCloseTo(esperado);
});
>>>>>>> b0866b5a7306cd53f159dcc2cf65fd811478b948
