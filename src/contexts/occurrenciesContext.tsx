import React, {createContext, useContext, useState} from 'react';

const OccurrencyContext = createContext({});

const initalOccurencies = [
  {
    code: '1',
    name: 'Receitas',
    type: 'receitas',
    occurrency: false,
    childrens: [],
  },
  {
    code: '2',
    name: 'Despesas',
    type: 'despesas',
    occurrency: false,
    childrens: [],
  },
];
export function OcurrencyProvider({children}) {
  const [occurrencies, setOccurrencies] = useState(initalOccurencies);

  // Função para gerar o próximo código disponível para uma conta filha
  function gerarCodigoPai(paiCodigo, contas) {
    // Separar os níveis do código em um array
    const niveis = paiCodigo.split('.');

    // Verificar se o código já está no máximo
    if (niveis[niveis.length - 1] === '999') {
      return null;
    }

    // Incrementar o último nível do código
    const novoCodigo = `${niveis.slice(0, -1).join('.')}.${
      +niveis[niveis.length - 1] + 1
    }`;

    // Verificar se já existe uma conta com o mesmo código
    const contaExistente = contas.find(conta => conta.codigo === novoCodigo);
    if (contaExistente) {
      return gerarCodigoPai(paiCodigo, contas);
    }

    return novoCodigo;
  }
  function gerarCodigoFilha(paiCodigo, contas) {
    // Encontrar a última filha do pai para determinar o próximo código sequencial
    const filhasDoPai = contas.filter(conta =>
      conta.codigo.startsWith(`${paiCodigo}.`),
    );
    let ultimoCodigoFilha = `${paiCodigo}.0`;
    filhasDoPai.forEach(conta => {
      const codigo = conta.codigo;
      const codigoFilha = parseInt(
        codigo.substring(codigo.lastIndexOf('.') + 1),
      );
      if (
        codigoFilha >
        parseInt(
          ultimoCodigoFilha.substring(ultimoCodigoFilha.lastIndexOf('.') + 1),
        )
      ) {
        ultimoCodigoFilha = codigo;
      }
    });

    // Determinar o próximo código sequencial
    const proximoCodigoFilha =
      parseInt(
        ultimoCodigoFilha.substring(ultimoCodigoFilha.lastIndexOf('.') + 1),
      ) + 1;

    // Verificar se já existe uma conta com o mesmo código
    const contaExistente = contas.find(
      conta => conta.codigo === `${paiCodigo}.${proximoCodigoFilha}`,
    );
    if (contaExistente) {
      return gerarCodigoFilha(paiCodigo, contas);
    }

    return `${paiCodigo}.${proximoCodigoFilha}`;
  }

  return (
    <OccurrencyContext.Provider
      value={{
        occurrencies,
        gerarCodigoPai,
        gerarCodigoFilha,
        setOccurrencies,
      }}>
      {children}
    </OccurrencyContext.Provider>
  );
}

export function useOccurrencies() {
  const context = useContext(OccurrencyContext);

  if (!context) {
    throw new Error('Cannot use a OccurenceContext here');
  }

  return context;
}
