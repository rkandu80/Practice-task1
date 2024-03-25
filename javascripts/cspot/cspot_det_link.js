<!--	This is getting executing on click of submit and validate button -->

function fnValidateData() {

	if (!fnCheckMandatoryFields())
	{
		return false;
		
	}
/*	
	var issuDate = document.forms[0].issuDate.value;
	if(!fnCompareDates(issuDate,BODDate))
	{
	       alert("Issue Date should not be Greater than Today's Date");
	       document.forms[0].issuDate.focus();
               return false;
	}

	if(document.forms[0].pay.value == "")
	{
		alert("Enter Payee Name");
		document.forms[0].pay.focus();
		return false;
	}

        var reqDate = document.forms[0].reqDate.value;
        if(!fnCompareDates(reqDate,BODDate))
        {
               alert("Request Date should not be Greater than Today's Date");
               document.forms[0].reqDate.focus();
               return false;
        }	
	
	if(document.forms[0].chrge.value == "")
	{
        alert("Enter Charge Amount");
        document.forms[0].chrge.focus();
        return false;
	}
	
	if(isNaN(document.forms[0].chrge.value ))
      	{
                alert("Amount must be the numeric");
	        document.forms[0].chrge.focus();
		return false;
        }	
*/
		return true;	
	
}
