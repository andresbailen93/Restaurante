            $(document).ready(function () {

                var fecha = new Date();
                var dia = fecha.getDay();
                var day = "";
           

                $.getJSON("js/cartajson.json", function (data) {
                    var html = [];
                    //Seleccionar día de la semana
            
                    switch (dia) {
                        case 0:
                            day = "Domingo";
                            dia=dia+6;
                            break;
                        case 1:
                            day = "Lunes";
                            dia=dia-1;
                            break;
                        case 2:
                            day = "Martes";
                             dia=dia-1;
                            break;
                        case 3:
                            day = "Miercoles";
                             dia=dia-1;
                            break;
                        case 4:
                            day = "Jueves";
                             dia=dia-1;
                            break;
                        case 5:
                            day = "Viernes";
                             dia=dia-1;
                            break;
                        case 6:
                            day = "Sabado";
                             dia=dia-1;
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
