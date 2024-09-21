import React from "react";

type Props = { incrementar: (val: number) => void };

/*
& El React.memo va a ser lo que diga "Memorizame este componente" pa que no se re-renderize, tiene otro parametro que no hemos usado, que es para que cuando esas props cambien ENTONCES renderice 
& Importa con el useCallBack, porque como ya estamos guardando la funcion, no queremos que aparte se re-renderice el componente
*/

export const Incrementar = React.memo(({ incrementar }: Props) => {
	console.log("Incrementar se esta Redibujando");
	/*
	+ El probelma que solciona useCallBack es que a diferencia de useMemo, no andamos "Memorizando" el valor de variables, si no la direccion de funciones
	+ ya que estas funciones al ser realmente variables const, constantemente cambian de direccion, con el useCallBack las podemos guardar/memorizar
	
	+ Por eso mismo, el log de arriba se dibujaba de forma constante antes de eso, porque el parametro que se recibe es una funcion
	+ Otro ejemplo puede ser, ya que este componente es el que se encarga de la funcion, para que lo vamos a re-renderizar? si es un simple boton y ya? funciona y listo
	+ Ahi entra el useCallBack denuevo
	*/

	return <button onClick={() => incrementar(10)}>+1</button>;
});
