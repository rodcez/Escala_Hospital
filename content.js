var listaDias = [];

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

        $("#tableData").empty();
        $("#tableData").append('<tr><th scope="col">Data: </th></tr>');

        listaDias = window.escalaFunctions.getListaDias();

        for (var i = 0; i < listaDias.length; i++) {
            $("#tableData > tr").append('<th scope="col"> ' + listaDias[i] + ' </th>');
        }
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
    }
};

window.escalaEvents = {
    init: function () {

    },

    selectMesOnChange: function () {
        if ($("#selectMes").val() != "0")
            window.escalaUi.popularTableDias();
    },

    selectParImparOnChange: function () {
        if ($("#selectMes").val() != "0")
            window.escalaUi.popularTableDias();
    }
};

$(document).ready(function () {
    window.escalaFunctions.init();
    window.escalaUi.init();
    window.escalaEvents.init();
});
