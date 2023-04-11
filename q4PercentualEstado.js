const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const totalFaturamento = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
  
  const percentualRepresentacao = Object.entries(faturamento).reduce((acc, [estado, valor]) => {
    const percentual = ((valor / totalFaturamento) * 100).toFixed(2) + ' %';
    acc[estado] = percentual;
    return acc;
  }, {});
  
  const somaPercentuais = Object.values(percentualRepresentacao).reduce((acc, curr) => acc + parseFloat(curr), 0).toFixed(2);
  
  console.log(percentualRepresentacao);
  console.log(`Soma dos percentuais: ${somaPercentuais}%`);