function printBlock()
{
	writeCustomHeader("cspot_res");
	with (document){
	write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0">');
	write('<tr>');
	write('<td class="page-heading">Treasury cspot Module </td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('<table class="ctable1" width="100%" border="0" cellspacing="0" cellpadding="0">');
	write('<tr class="rowspacing">');
	write('<td colspan="5">&nbsp;</td>');
	write('</tr>');
	write('</table>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="ctable">');
	write('<tr>');
	write('<td valign="top">');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="tableborder">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertable">');
	write('<tr class="textfielddisplaylabel1" valign="middle">');
	write('<td colspan="5">');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="resultpage">');
	write('<tr>');
	write('<td width="3%">');
	write('<img class="img" src="../Renderer/images/info.gif" width="29" height="29" align="right" border="0">');
	write('</img></td>');
	if(Message != "NULL"){
	write('<td width="97%" style="color:black"> ' + Message + '</td>');
	}
	else if(Message == ""){
	write('<td style="color:red">Set the value for the variable RESULT_MSG using the userhook SetOrbOut in script.</td>');
	}
	else{
	write('<td style="color:red">&nbsp;&nbsp;&nbsp;</td>');
	}
	write('</tr>');
	write('</table>');
	write('</td></tr>');
	write('</table></td></tr>');
	write('</table></td></tr>');
	write('</table></td></tr>');
	write('</table>');
	} //End with()
} //End function

function printFooterBlock()
{
	with (document) {
	write('<div class="ctable">');
	write('<input id="Ok" name="Ok" type="button" class="button" value="Ok"	onClick="javascript:return cspot_res_ONCLICK1(this);"" hotKeyId="Go">');
	write('</a>');
	write('</a>');
	write('</a>');
//write('<input id="PrintReceipt" name="PrintReceipt" type="button" class="button" value="PrintReceipt" onClick="javascript:return cspot_res_ONCLICK2(this);"" hotKeyId="PrintReceipt">');
	writeFooter();
	write('</div>');
	}
}//End function


function cspot_res_ONCLICK1(obj)
{
	var retVal = "";
	if (preEventCall('cspot_res',obj) == false) { 
		return false;
	}
	if ((retVal = fnLastButtonClick()) == false) {
		return false;
	}
	if (postEventCall('cspot_res',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function cspot_res_ONCLICK2(obj)
{
	
	
	//alert("obj passed ::"+obj);
	var inputNameValues = "BeginChequeNo|"+BeginChequeNo;
        //alert("RAAM");
	var outputNames     = "";
        //var scrName         = "cspot_receipt.scr";
        var retVal          = appFnExecuteScript(inputNameValues, outputNames, scrName,false);
        //alert("After script calling");
	var scrRes 	    = retVal.split('|');
	//alert(scRes);
        var Status          = scrRes[5];
	
}

