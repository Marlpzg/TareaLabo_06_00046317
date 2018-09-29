var convertor = {
    Convertir: (medida, unidad, uniConv, tipoUni) => {
        let resultado = null;
        unidad = unidad.toLowerCase();
        uniConv = uniConv.toLowerCase();
        tipoUni = tipoUni.toUpperCase();

        if(!isNaN(parseFloat(medida))){
            if(tipoUni == "L"){

                if(unidad == "m" && uniConv == "cm"){
                    resultado = medida*100.0;
                }else if(unidad == "cm" && uniConv == "m"){
                    resultado = medida/100.0;
                }else if(unidad == "km" && uniConv == "m"){
                    resultado = medida*1000.0;
                }else if(unidad == "m" && uniConv == "km"){
                    resultado = medida/1000.0;
                }else if(unidad == "ft" && uniConv == "m"){
                    resultado = medida*0.3048;
                }else if(unidad == "m" && uniConv == "ft"){
                    resultado = medida/0.3048;
                }

            }else if(tipoUni == "T"){

                if(unidad == "c" && uniConv == "f"){
                    resultado = (medida*1.8)+32;
                }else if(unidad == "f" && uniConv == "c"){
                    resultado = (medida-32)/1.8;
                }else if(unidad == "k" && uniConv == "f"){
                    resultado = ((medida-273.15)*1.8)+32;
                }else if(unidad == "f" && uniConv == "k"){
                    resultado = ((medida-32)/1.8)+273.15;
                }else if(unidad == "c" && uniConv == "k"){
                    resultado = medida+273.15;
                }else if(unidad == "k" && uniConv == "c"){
                    resultado = medida-273.15;
                }

            }else{
                console.log("No se ingreso un tipo de unidad válido.")
            }
        }else{
            console.log("Debe ingresar un valor numérico para la medida.");
        }

        if(resultado == null){
            console.log("No se pudo realizar la conversión especificada.");
        }else{
            console.log(medida+unidad+" = "+(resultado)+uniConv);
        }
    }
}