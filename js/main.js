$(document).ready(function () {



    $('#count-sum').click(function () {

        let suma = 0;

        $('.salary').each(function (index) {

            let wyplata;

            wyplata = parseInt($(this).html());
            suma = suma + wyplata;
            console.log(suma);
        });

        $('#sum').text(suma);
    });
});
