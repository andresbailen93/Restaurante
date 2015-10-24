            $(document).ready(function () {

                var fecha = new Date();
                var dia = fecha.getDay();
                var day = "";


                $.getJSON("js/cartajson.json", function (data) {
                    var html = [];
                    //Seleccionar día de la semana
                    dia = dia - 1;
                    switch (dia) {
                        case 0:
                            day = "Lunes";
                            break;
                        case 1:
                            day = "Martes";
                            break;
                        case 2:
                            day = "Miercoles";
                            break;
                        case 3:
                            day = "Jueves";
                            break;
                        case 4:
                            day = "Viernes";
                            break;
                        case 5:
                            day = "Sabado";
                            break;
                        case 6:
                            day = "Domingo";
                            break;
                    }



                    $("#diaactual").append(day);
                    $("#imagen1").attr("src", data[dia].imagen1);
                    $("#imagen2").attr("src", data[dia].imagen2);
                    $("#imagen3").attr("src", data[dia].imagen3);
                    
                    $("#PrimerPlato").html(data[dia].PrimerPlato);
                    $("#SegundoPlato").html(data[dia].SegundoPlato);
                    $("#Postre").html(data[dia].Postre);

                });

            });
