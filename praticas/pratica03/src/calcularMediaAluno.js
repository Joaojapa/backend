function calcularMediaAluno(a1, a2, a3) {
<<<<<<< HEAD

    if(a1 === undefined || a2 === undefined) throw Error ("As notas A1 e A2 devem ser informadas!")

    if(a1 < 0 || a2 < 0) throw new Error ("As notas A1 e A2 não podem ser negativas!")
    
    if(a3 === undefined){
        return a1 * 0.4 + a2 * 0.6
    }

    if(a3 < 0) throw new Error ("A nota A3 não pode ser negativa!")

    return Math.max(a1 * 0.4 + a3 * 0.6, a2 * 0.4 + a3 * 0.6)
=======
  
  if (a1 === undefined || a2 === undefined) {
    throw new Error('Notas a1 ou a2 não informadas');
  }

 
  if (a1 < 0 || a2 < 0) {
    throw new Error('Notas a1 ou a2 não podem ser negativas');
  }

  if (a3 !== undefined && a3 < 0) {
    throw new Error('Nota a3 não pode ser negativa');
  }

  
  if (a3 === undefined) {
    
    return a1 * 0.4 + a2 * 0.6;
  } else {
    
    const mediaAritmetica = (a1 + a2 + a3) / 3;
    const combinacaoA1A3 = (a1 + a3) / 2;
    const combinacaoA2A3 = (a2 + a3) / 2;

    return Math.max(mediaAritmetica, combinacaoA1A3, combinacaoA2A3);
  }
>>>>>>> b0866b5a7306cd53f159dcc2cf65fd811478b948
}

module.exports = { calcularMediaAluno };
