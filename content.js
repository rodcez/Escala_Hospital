var listaDias = [];
var listaEnf = [];
var listaFuncoes = [];
var listaFuncoesDias = [];

window.escalaUi = {
    init: function () {

    },

    popularSelectMes: function () {
        $.each(SELECTMESDATA, function (key, value) {
            var $option = $("<option/>", {
                value: key,
                text: value
            });

            $("#selectMes").append($option);
        });
    },

    popularTableDias: function () {

        listaDias = window.escalaFunctions.getListaDias();

        for (var i = 0; i < listaDias.length; i++) {
            $("#tableDataEnf > tr").append('<th> ' + listaDias[i] + ' </th>');
        }
    },

    popularTableEnf: function () {

        listaEnf = window.escalaFunctions.getListaEnf();

        for (var x = 0; x < listaEnf.length; x++) {
            $("#tableEnf").append('<tr id="tr' + listaEnf[x].Id + '"></tr>');
            $("#tr" + listaEnf[x].Id).append('<th scope="row">' + (x + 1) + ' - ' + listaEnf[x].Nome + ' </th>');
        }

        if (listaEnf.length > 0) {
            $("#btnGerarFuncoes").removeAttr('disabled')
        }
    },

    popularTableBranco: function () {

        for (var x = 0; x < listaDias.length; x++) {
            for (var y = 0; y < listaEnf.length; y++) {
                $("#tr" + listaEnf[y].Id).append(
                    '<td>' +
                    '   <select class= "form-control-sm" id="select-' + x + '-' + y + '"> ' +
                    '       <option value="0"></option>' +
                    '       <option value="F">F</option>' +
                    '       <option value="AF">AF</option>' +
                    '       <option value="AC">AC</option>' +
                    '   </select>' +
                    '</td > ');
            }
        }
    },

    popularFuncoes: function () {
        listaFuncoesDia = window.escalaFunctions.getListaPreFuncoes();

        $("#tableEnf").empty();
        window.escalaUi.popularTableEnf();

        listaFuncoes = window.escalaFunctions.getListaFuncoes();

        for (var x = 0; x < listaDias.length; x++) {

            let funcoes = "SL,PP,P,P,RN,PATO,MC,MC,OBS,CTB,AC".split(",");

            let enfDisponiveisDia = listaFuncoesDias[x].funcoes.filter(function (funcao) {
                return funcao != "F" && funcao != "AF";
            });

            for (var y = 0; y < listaEnf.length; y++) {

                if (listaFuncoesDias[x].funcoes[y] == "0") {

                    let numRandom = Math.floor(Math.random() * funcoes.length);
                    let funcaoEnfDia = funcoes[numRandom];

                    var index = funcoes.indexOf(funcaoEnfDia);
                    if (index !== -1) funcoes.splice(index, 1);

                    $("#tr" + listaEnf[y].Id).append('<td>' + funcaoEnfDia + ' </td>');
                } else {
                    var index = funcoes.indexOf(listaFuncoesDias[x].funcoes[y]);
                    if (index !== -1) funcoes.splice(index, 1);

                    var html = "";

                    if (listaFuncoesDias[x].funcoes[y] == "F") {
                        html = HTMLBGTABLE.F;
                    }

                    if (listaFuncoesDias[x].funcoes[y] == "AF") {
                        html = HTMLBGTABLE.AF;
                    }

                    $("#tr" + listaEnf[y].Id).append('<td ' + html + '>' + listaFuncoesDias[x].funcoes[y] + ' </td>');
                }
            }

            $("#tableQntEnf > tr").append('<th>' + enfDisponiveisDia.length + '</th>');
        }
    },

    limparDadosTabela: function () {

        $("#tableDataEnf").empty();
        $("#tableDataEnf").append('<tr><th scope="col">Data: </th></tr>');

        $("#tableQntEnf").empty();
        $("#tableQntEnf").append('<tr><th scope="col">Funcionarios: </th></tr>');

        $("#tableEnf").empty();

        $("#btnGerarFuncoes").attr('disabled', 'disabled')
    }
};

window.escalaFunctions = {
    init: function () {
        window.escalaUi.popularSelectMes();
    },

    getListaDias: function () {
        var currentDate = new Date();
        var qntDiasMes = new Date(currentDate.getFullYear(), parseInt($("#selectMes").val()), 0).getDate();

        var dias = [];
        var selectPar = $("#selectParImpar").val() == "par";

        for (let i = 1; i < qntDiasMes; i++) {
            if (selectPar && i % 2 == 0)
                dias.push(i);
            else if (!selectPar && i % 2 != 0)
                dias.push(i);
        }

        return dias;
    },

    getListaEnf: function () {
        return ENFERMEIROS;
    },

    getListaFuncoes: function () {
        return FUNCOES;
    },

    getSequenciaEnfDia: function (enfNoDia) {
        let funcoes = "SL,PP,P,P,RN,PATO,MC,MC,OBS,CTB,AC".split(",");
        var funcoesNoDia = [];

        let numerosSorteados = [];

        let geradorNumero = function (lista) {
            if (lista.length >= enfNoDia)
                return;
            let novoNumero = Math.floor(Math.random() * enfNoDia + 1);
            if (lista.indexOf(novoNumero) < 0) {
                lista.push(novoNumero);
            }
            geradorNumero(lista);
        };

        geradorNumero(numerosSorteados);

        for (var i = 0; i < enfNoDia; i++) {
            funcoesNoDia.push(funcoes[numerosSorteados[i]]);
        }

        return funcoesNoDia;
    },

    getFuncaoEnfDia: function (posicaoDia, posicaoEnf) {

        var dadosEnf = listaEnf[posicaoEnf];

        let funcoes = "SL,PP,P,P,RN,PATO,MC,MC,OBS,CTB,AC".split(",");

        for (var i = 0; i < length; i++) {

        }








    },

    getListaPreFuncoes: function () {
        listaFuncoesDias = [];
        for (var x = 0; x < listaDias.length; x++) {

            var funcoesDia = {
                "dia": listaDias[x],
                "funcoes": [
                ]
            };

            for (var y = 0; y < listaEnf.length; y++) {
                funcoesDia.funcoes.push($('#select-' + x + '-' + y).val());
            }

            listaFuncoesDias.push(funcoesDia);
        }

    }

};

window.escalaEvents = {
    init: function () {

    },

    onChangeSelectMes: function () {
        window.escalaUi.limparDadosTabela();

        if ($("#selectMes").val() != "0") {
            window.escalaUi.popularTableDias();
            window.escalaUi.popularTableEnf();
            window.escalaUi.popularTableBranco();
        }
    },

    onChangeSelectParImpar: function () {
        if ($("#selectMes").val() != "0") {
            window.escalaUi.limparDadosTabela();
            window.escalaUi.popularTableEnf();
            window.escalaUi.popularTableBranco();
        }
    },

    onClickGerarFuncoes: function () {
        window.escalaUi.popularFuncoes();
    }
};

$(document).ready(function () {
    window.escalaFunctions.init();
    window.escalaUi.init();
    window.escalaEvents.init();
});
