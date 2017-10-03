export function getAnalyzed ( text ) {
	var tokens = [];

	var types = [
		{ type: "число", chars: "+-–0123456789.," },
		{ type: "іншомовне слово", chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_`" },
		{ type: "слово", chars: "абвгдеєжзиіїйклмнопрстуфхцчшщьюяАБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ0123456789-_`" },
		{ type: "розділовий знак", chars: "`~_=+-.,!@#$%^&*(){}[];\/|<>\"':?—" },
		{ type: "інше", chars: "—–`~_=+-.,!@#$%^&*(){}[];\/|<>\"':?абвгдеєжзиіїйклмнопрстуфхцчшщьюяАБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ0123456789-_`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"}
	];

	var currToken = "";
	var currTypes = types.slice();

	for (var i = 0, leni = text.length; i < leni; i++) {

		if(types[3].chars.indexOf(text[i]) > 0){
			tokens.push({ val: text[i], type: "розділовий знак" });
			continue;
		}
  		
		if(!/\s/.test(text[i]) || i == leni-1){

			currToken += text[i];

			for(var j = 0, lenj = currTypes.length; j < lenj; j++)
				if(currTypes[j].chars.indexOf(text[i]) < 0){
					var index = currTypes.indexOf(currTypes[j])
					currTypes.splice(index, 1);
					lenj--;
				}

		} else {

			var currType = "";

			if(currTypes.length <= 0)
				currType = "інше"
			else
				currType = currTypes[0].type;

			tokens.push({ val: currToken, type: currType });
			currToken = "";
			currTypes = types.slice();
		}

	}

	tokens.push({ val: currToken, type: currType });


	return tokens;
};