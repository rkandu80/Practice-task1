<!--	This is getting executing on click of submit and validate button -->
function fnValidateData() {
		if (!fnCheckMandatoryFields())
		{
			return false;
		}

		if(document.forms[0].funcCode.value== "")
		{
			alert("Enter the Function Code");
			document.forms[0].funcCode.focus();
			return false;
		}

		return true;
}

