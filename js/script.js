function myFunction(sw)
{
	var valor;

	const limite = 1.5;

	var x_one = Number(document.getElementById("input-one").value);
	var w_two = Number(document.getElementById("input-two").value);
	var x_three = Number(document.getElementById("input-three").value);
	var w_four = Number(document.getElementById("input-four").value);
	var x_five = Number(document.getElementById("input-five").value);
	var w_six = Number(document.getElementById("input-six").value);
	var x_seven = Number(document.getElementById("input-seven").value);
	var w_eight = Number(document.getElementById("input-eight").value);
	var x_nine = Number(document.getElementById("input-nine").value);
	var w_ten = Number(document.getElementById("input-ten").value);

	var entradas = [x_one, x_three, x_five, x_seven, x_nine];
	var pesos =  [w_two, w_four, w_six, w_eight, w_ten];

	if(sw != 0)
	{
		let suma = 0;

		for (var i = 0; i < entradas.length; i++)
		{
			suma += entradas[i] * pesos[i];
		}

		if(suma > limite)
		{
			valor = "La persona comprara el helado";
		}
		else
		{
			valor = "La persona no comprara el helado";
		}

	}
	else
	{
		valor = "vacio";

		document.getElementById("input-one").value = "";
		document.getElementById("input-two").value = "";
		document.getElementById("input-three").value = "";
		document.getElementById("input-four").value = "";
		document.getElementById("input-five").value = "";
		document.getElementById("input-six").value = "";
		document.getElementById("input-seven").value = "";
		document.getElementById("input-eight").value = "";
		document.getElementById("input-nine").value = "";
		document.getElementById("input-ten").value = "";
	}

	document.getElementById("text").innerHTML = valor;

}