
/*
        Arquivo de configurações da escala 
 */

const ENFERMEIROS = [
/*
               Id:  Identificador do funcionário (Somente no sistema)
             Nome:  Nome do usuário
          Funcoes:  Preferência de função [0: Nunca, 1:Mínimo, 2/Vazio:Normal, 3:Máxima]
        Afinidade:  Positiva/Negativa com algum funcionário [Colocar o Id do funcionário]
*/
    {
        "Id": 1,
        "Nome": "NOME EXEMPLO 1",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 2,
        "Nome": "NOME EXEMPLO 2",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 3,
        "Nome": "NOME EXEMPLO 3",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 4,
        "Nome": "NOME EXEMPLO 4",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 5,
        "Nome": "NOME EXEMPLO 5",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 6,
        "Nome": "NOME EXEMPLO 6",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 7,
        "Nome": "NOME EXEMPLO 7",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 8,
        "Nome": "NOME EXEMPLO 8",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    },
    {
        "Id": 9,
        "Nome": "NOME EXEMPLO 9",
        "Funcoes": [
            { "PP": 1 },
            { "AC": 3 },
            { "P": 2 },
            { "OBS": 0 },
        ],
        "Afinidade": [
            { "Positiva": [2] },
            { "Negativa": [3] },
        ]
    }
];


const FUNCOES = [
/*
                         Id:    Idenficador da função (Somente no sistema)
             AlocacaoDiaria:    Quantidade de alocações que a função terá no dia    
        AdicionalPrioridade:    Prioridade caso tenha funcionário adicional no dia
                    Ligacao:    Vínculo entre funções [Colocar o Id da sala] 
 */
    {
        "SL": {
            "Id": 1,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [3,4]
        }
    },
    {
        "PP": {
            "Id": 2,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 3,
            "Ligacao": [3,4]
        }
    },
    {
        "P": {
            "Id": 3,
            "AlocacaoDiaria": 2,
            "AdicionalPrioridade": 3,
            "Ligacao": [1, 2]
        }
    },
    {
        "RN": {
            "Id": 4,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 2,
            "Ligacao": [1,2]
        }
    },
    {
        "PATO": {
            "Id": 5,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 3,
            "Ligacao": [2, 3]
        }
    },
    {
        "MC": {
            "Id": 6,
            "AlocacaoDiaria": 2,
            "AdicionalPrioridade": 3,
            "Ligacao": [2, 3]
        }
    },
    {
        "OBS": {
            "Id": 7,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 3,
            "Ligacao": [2, 3]
        }
    },
    {
        "CTB": {
            "Id": 8,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 3,
            "Ligacao": [2, 3]
        }
    },
    {
        "AC": {
            "Id": 9,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 3,
            "Ligacao": [2, 3]
        }
    },
    {
        "F": {
            "Id": 0,
            "AlocacaoDiaria": 0,
            "AdicionalPrioridade": 0,
            "Ligacao": []
        }
    },
    {
        "AT": {
            "Id": 0,
            "AlocacaoDiaria": 0,
            "AdicionalPrioridade": 0,
            "Ligacao": []
        }
    }
];



const SELECTMESDATA = {
    "0": "Selecione...",
    "1": "Janeiro",
    "2": "Fevereiro",
    "3": "Março",
    "4": "Abril",
    "5": "Maio",
    "6": "Junho",
    "7": "Julho",
    "8": "Agosto",
    "9": "Setembro",
    "10": "Outubro",
    "11": "Novembro",
    "12": "Dezembro",
};
