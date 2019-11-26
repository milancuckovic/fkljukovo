function za()
	{
		alert("Hvala na interesovanju! Ne okolištajte kontaktirajte nas!")
    }
function ne()
    {
		alert("Hvala na odgovoru!");
	}
function utakmica(n)
    {		
	var utakmice=[{
            "domacin":"FK Ljukovo",
            "gost":"FK Brestač",
            "rezultat":"2:1",
			"stadion": "Ljukovo",
			"sudija": "Siniša Miljković",
			"strelci": "Mirko Novaković (FK Ljukovo) 14 minut, 25 minut, Jovan Mirković (FK Brestač) 87 minut"
        },
        {
            "domacin":"FK Hajduk Beška",
            "gost":"FK Ljukovo",
            "rezultat":"3:2",
			"stadion": "Beška",
			"sudija": "Siniša Miljković",
			"strelci": "Mirko Novaković (FK Ljukovo) 14 minut, 25 minut, Jovan Mirković (FK Brestač) 87 minut"
        },
	    {
            "domacin":"FK Ljukovo",
            "gost":"FK Železničarar",
            "rezultat":"4:0",
			"stadion": "Ljukovo",
			"sudija": "Siniša Miljković",
			"strelci": "Mirko Novaković (FK Ljukovo) 14 minut, 25 minut, Jovan Mirković (FK Brestač) 87 minut"
        },
		{
            "domacin":"FK Partizan Vitojevci",
            "gost":"FK Ljukovo",
            "rezultat":"2:2",
			"stadion": "Vitojevci",
			"sudija": "Siniša Miljković",
			"strelci": "Mirko Novaković (FK Ljukovo) 14 minut, 25 minut, Jovan Mirković (FK Brestač) 87 minut"
        },
		{
            "domacin":"FK Ljukovo",
            "gost":"FK Donji Srem",
            "rezultat":"1:3",
			"stadion": "Ljukovo",
			"sudija": "Siniša Miljković",
			"strelci": "Mirko Novaković (FK Ljukovo) 14 minut, 25 minut, Jovan Mirković (FK Brestač) 87 minut"
        }];
		
	var noviProzor=window.open("","Detalji utakmice","width=300,height=500");
	noviProzor.document.body.innerHTML="";
	switch(n+1)
	{
		case 1: noviProzor.document.write("Domaćin:"+utakmice[n].domacin+"<br>Gost:"+utakmice[n].gost+"<br>Rezultat:"+utakmice[n].rezultat+"<br>Stadion:"+utakmice[n].stadion+"<br>Sudija:"+utakmice[n].sudija+"<br>Stelci:"+utakmice[n].strelci+"<br>");	
			break;
		case 2:  noviProzor.document.write("Domaćin:"+utakmice[n].domacin+"<br>Gost:"+utakmice[n].gost+"<br>Rezultat:"+utakmice[n].rezultat+"<br>Stadion:"+utakmice[n].stadion+"<br>Sudija:"+utakmice[n].sudija+"<br>Stelci:"+utakmice[n].strelci+"<br>");
			break;
		case 3: noviProzor.document.write("Domaćin:"+utakmice[n].domacin+"<br>Gost:"+utakmice[n].gost+"<br>Rezultat:"+utakmice[n].rezultat+"<br>Stadion:"+utakmice[n].stadion+"<br>Sudija:"+utakmice[n].sudija+"<br>Stelci:"+utakmice[n].strelci+"<br>");
			break;
		case 4: noviProzor.document.write("Domaćin:"+utakmice[n].domacin+"<br>Gost:"+utakmice[n].gost+"<br>Rezultat:"+utakmice[n].rezultat+"<br>Stadion:"+utakmice[n].stadion+"<br>Sudija:"+utakmice[n].sudija+"<br>Stelci:"+utakmice[n].strelci+"<br>");
			break;
		case 5: noviProzor.document.write("Domaćin:"+utakmice[n].domacin+"<br>Gost:"+utakmice[n].gost+"<br>Rezultat:"+utakmice[n].rezultat+"<br>Stadion:"+utakmice[n].stadion+"<br>Sudija:"+utakmice[n].sudija+"<br>Stelci:"+utakmice[n].strelci+"<br>");
			break;
	}	
}
function posalji()
	{
		var email=document.getElementById('email').value;
		var naslov=document.getElementById('naslov').value;
		var poruka=document.getElementById('poruka').value;
		if(email != "" && naslov != "" && poruka != "")
		{
			alert("Vaša poruka je uspešno primljena! Hvala!"+email);
		}
		else
		{
			alert("Popunite sva polja!");
		}
	}