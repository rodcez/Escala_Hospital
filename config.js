
/*
        Arquivo de configurações da escala 
 */

const ENFERMEIROS = [
/*
               Id:  Identificador do funcionário (Somente no sistema)
             Nome:  Nome do usuário
          Funcoes:  Preferência de função [0: Nunca, 1:Mínimo, 2:Normal, 3:Máxima]
        Afinidade:  Positiva/Negativa com algum funcionário [Colocar o Id do funcionário]
*/
    {
        "Id": 1,
        "Nome": "CAMILA PAUL",
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
            "Ligacao": [4]
        }
    },
    {
        "PP": {
            "Id": 2,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [2, 3]
        }
    },
    {
        "P": {
            "Id": 3,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [2, 3]
        }
    },
    {
        "RN": {
            "Id": 4,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [1]
        }
    },
    {
        "PATO": {
            "Id": 5,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [2, 3]
        }
    },
    {
        "M/C": {
            "Id": 6,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [2, 3]
        }
    },
    {
        "OBS": {
            "Id": 7,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [2, 3]
        }
    },
    {
        "CTB": {
            "Id": 8,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
            "Ligacao": [2, 3]
        }
    },
    {
        "AC": {
            "Id": 9,
            "AlocacaoDiaria": 1,
            "AdicionalPrioridade": 1,
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
    "0": "Selecione",
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
