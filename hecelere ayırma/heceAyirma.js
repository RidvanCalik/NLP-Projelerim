var sesliHarfler=["a","e","ı","i","u","ü","o","ö","A","E","I","İ","U","Ü","O","Ö"];
var hecelereAyrilmis=[];
function heceAyir(cumle){
	var kelimeler=cumle.split(" ");
	for(i in kelimeler){
		var harfler=kelimeler[i].split("");
		for(var harfS=0; harfS<harfler.length; harfS++){
			
			if(sesliHarfler.includes(harfler[harfS])){
				hecelereAyrilmis.push(harfler[harfS]);
				if( harfS==harfler.length-1){
					break;
				}
				if(sesliHarfler.includes(harfler[harfS+1])){
					hecelereAyrilmis.push("&nbsp;");
				}
				else if(sesliHarfler.includes(harfler[harfS+2])){
					hecelereAyrilmis.push("&nbsp;");
				}
				else{
					hecelereAyrilmis.push(harfler[harfS+1]+" ");
					harfS++;
				}
			}
			else{
				hecelereAyrilmis.push(harfler[harfS]);
			}
		}
		hecelereAyrilmis.push("&nbsp;&nbsp;&nbsp;&nbsp;");
	}
	var A=hecelereAyrilmis.join("");
	hecelereAyrilmis=[];
	var A=A.toString();
	return A;
	
}