$(document).ready(function () {
    $("#home, #suhu, #uang, #luas").click(function () {
        $("#home").removeClass("active")
        $("#suhu").removeClass("active")
        $("#uang").removeClass("active")
        $("#luas").removeClass("active")

        $("#page_home").addClass("d-none")
        $("#page_suhu").addClass("d-none")
        $("#page_uang").addClass("d-none")
        $("#page_luas").addClass("d-none")

        if (this.id) {
            $(this.id).addClass("active")
            $("#page_"+this.id).removeClass("d-none")
        }
    })

    $("#submit-konversi").click(function () {
        konversi()
    })

    $("#validationCustom02").change(function () {
        nilai = $("#validationCustom02").val()
        var nilai = data.result.toLocaleString('en-US')
    })

})

function startCalc() {
    interval = setInterval("calc()",1);}
    function calc(){
        v_alas = $("#alas").val();
        v_tinggi = $("#tinggi").val();
        v_jari = $("#jari").val();
        v_sisi = $("#sisi").val();
        v_panjang = $("#panjang").val();
        v_lebar = $("#lebar").val();
        v_celcius = $("#celcius").val();
        v_celcius2 = $("#celcius2").val();

        $("#luas_segitiga").val(v_alas * v_tinggi / 2);
        $("#luas_lingkaran").val(v_jari * v_jari * 22 / 7);
        $("#luas_persegi").val(v_sisi * v_sisi);
        $("#luas_persegip").val(v_panjang * v_lebar);
        $("#hasil_reamur").val(v_celcius * 0.8);
        $("#hasil_fahrenheit").val(1.8 * v_celcius2 + 32);
}

function stopCalc() {
    clearInterval(interval);
}

function konversi() {
    to = $("#validationCustom03").val();
    from = $("#validationCustom01").val();
    amount = $("#validationCustom02").val();
    $('#spinner-div').show()
    $.ajax({
		url: "https://api.apilayer.com/exchangerates_data/convert?to=" + to + "&from=" + from + "&amount=" + amount,
		headers: {
			"apikey": "yDFEskufVqZl9BbMeciqkSsEoGxwaAkD"
		},
		type: "GET",
		contentType: "application/json",
		dataType: 'json',
		success: function (data, textStatus, jqXHR) {
            var usFormat = data.result.toLocaleString('en-US')
            $("#validationCustom04").val(usFormat);
            $('#spinner-div').hide();
		},
		error: function (jqXHR, textStatus, errorThrown) {
            console.log("ERROR", jqXHR.responseJSON.processStatus)
            errorHandler(jqXHR);
		}
	});
}
