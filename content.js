var listaDias = [];
var listaEnf = [];
var listaFuncoes = [];

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
            $("#tr" + listaEnf[x].Id).append('<th scope="row" colspan="3">' + (x + 1) + ' - ' + listaEnf[x].Nome + ' </th>');
        }

        if (listaEnf.length > 0) {
            $("#btnGerarFuncoes").removeAttr('disabled')
        }
    },

    popularTableBranco: function () {

        for (var x = 0; x < listaDias.length; x++) {
            for (var y = 0; y < listaEnf.length; y++) {
                $("#tr" + listaEnf[y].Id).append('<td> <select class="form-control-sm" id="exampleFormControlSelect1">' +
                    '<option></option>' +
                    '<option>PAT</option>' +
                    '</select > </td > ');
            }
        }
    },

    popularFuncoes: function () {
        $("#tableEnf").empty();
        window.escalaUi.popularTableEnf();

        listaFuncoes = window.escalaFunctions.getListaFuncoes();

        for (var x = 0; x < listaDias.length; x++) {
            var sequenciaDia = window.escalaFunctions.getSequenciaEnfDia(9);

            for (var y = 0; y < listaEnf.length; y++) {
                $("#tr" + listaEnf[y].Id).append('<td>' + sequenciaDia[y] + ' </td>');
            }
        }
    },

    limparDadosTabela: function () {

        $("#tableDataEnf").empty();
        $("#tableDataEnf").append('<tr><th scope="col" colspan="3">Data: </th></tr>');

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
