function printBlock()
{
	writeCustomHeader("cspot_crit");
	with (document){
        write('<input type="hidden" id="tranDate" fdt="fdate" mneb1="N" vFldId="tranDate_ui" name="' + subGroupName + '.tranDate">');

	write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
	write('<tr>');
	write('<td>');
	write('<table border="0" cellspacing="0" cellpadding="0">');
	write('<tr>');
	write('<td class="page-heading"> Treasury cspot Module </td>');
	write('</tr>');
	write('</table>');
	write('<!-- DETAILSBLOCK-BEGIN -->');
	write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	write('<tr>');
	write('<td valign="top">');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="tableborder">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertable">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertabletop1">');
	write('<tr>');
	write('<td height="25" colspan="5" align="right">');
	write('<table border="0" cellspacing="0" cellpadding="0">');
	write('<tr>');
	write('<td align="right">');
	write('<a href="javascript:showHelpFile(\'crit_help.htm\');" id="sLnk1">');
	write('<img hotKeyId="finHelp" src="../Renderer/images/'+applangcode+'/help.gif" width="47" height="21" vspace="1" border="0" />');
	write('</a>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');

	write('<tr>');
	write('<td class="textlabel" style="width: 198px">' + jspResArr.get("FLT721009"));
	setMandatory("Y");
	write('</td>');

	write('<td class="textfield">');
	write('<select class="textfieldfont"  name="' + subGroupName + '.funcCode" id="funcCode" ' + cspotProps.get("funcCode_ENABLED") + '>');
	write('<option value="">' + jspResArr.get("FLT014741") + '</option>');
	write('<option value="A">A-Add</option>');
	write('<option value="M">M-MODIFY</option>');	
	write('<option value="D">D-Delete</option>');
	write('<option value="I">I-Inquire</option>');
	write('</select>');
	write('</td>');

        write('<td class="textlabel"> NRB Serial No.');
        setMandatory("Y");
        write('</td>');
        write('<td class="textfield">');
        write('<input  hotKeyId="calender1"  type="text" class="textfieldfont" name="' + subGroupName + '.nrbSerialNo" id="nrbSerialNo"  />');
        write('</td>');
	

	write('</tr>');
	write('<tr> <td class="textfield"></td></tr>');

/*
        write('<tr>');
        write('<td class="textlabel">Tran Id');
        setMandatory("Y");
        write('</td>');
        write('<td class="textfield">');
        write('<input  hotKeyId="calender1"  type="text" class="textfieldfont" name="' + subGroupName + '.tranId" id="tranId"  />');
        write('</td>');
        write('<td class="textlabel"> Tran Date');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" hotKeyId="calender1" fdt="uidate"  mnebl="false" name="' + subGroupName + '.tranDate_ui"  id="tranDate_ui">');
               write('<a  href="javascript:openDate(document.forms[0].tranDate_ui,BODDate)"   id="sLnk3"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender1" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
        write('</a>');

	write('</td>');

        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');
	write('<br>');
*/

	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('<!-- DETAILSBLOCK-END -->');
	write('</td>');
	write('</tr>');
	write('</table>');
	} //End with()
} //End function

function printFooterBlock()
{
	with (document) {
	if ((sReferralMode == 'I')||(sReferralMode == 'S')){
	write('<div align="left" class="ctable">');
	if (sReferralMode == 'S'){
	write('<input type="button" class="Button" id="Submit" value="SUBMIT" onClick="javascript:return doRefSubmit(this);" hotKeyId="Submit" >');
	}
	writeRefFooter();
	write('<input type="button" class="Button" id="_BackRef_" value="CANCEL" onClick="javascript:return doSubmit(this.id);" hotKeyId="Cancel" >');
	write('</div>');
	}else{
	write('<div class="ctable">');
	write('<input id="Accept" name="Go" type="button" class="button"	onClick="javascript:return cspot_crit_ONCLICK1(this,this);"" value="Go" hotKeyId="Go">');
	write('<input id="Clear" name="Clear" type="button" class="button" value="Clear"	onClick="javascript:return cspot_crit_ONCLICK2(this,this);"">');
	writeFooter();
	write('</div>');
	}
	} //End with()
}//End function

function fnOnLoad()
{
	var ObjForm = document.forms[0];

	pre_ONLOAD('cspot_crit',this);

	var funcName = "this."+"locfnOnLoad";
	if(eval(funcName) != undefined){
		eval(funcName).call(this);
	}


	fnPopUpExceptionWindow(ObjForm.actionCode);
	if((typeof(WF_IN_PROGRESS) != "undefined") && (WF_IN_PROGRESS == "PEAS")){
		checkCustErrExecNextStep(Message);
	}

	post_ONLOAD('cspot_crit',this);
	document.forms[0].funcCode.focus();
}

function fnCheckMandatoryFields()
{
	var ObjForm = document.forms[0];

	return true;
}



function cspot_crit_ONCLICK1(obj,p1)
{
	var retVal = "";
	if (preEventCall('cspot_crit',obj) == false) { 
		return false;
	}
	if ((retVal =  fnValAndSubmit(p1)) == false) {
		return false;
	}
	if (postEventCall('cspot_crit',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function cspot_crit_ONCLICK2(obj,p1)
{
	var retVal = "";
	if (preEventCall('cspot_crit',obj,'ONCLICK') == false) {
			return false;
	}
	if (preEventCallForLocale('cspot_crit',obj,'ONCLICK') == false) {
			return false;
	}
	if ((retVal = fnOnButtonClick(p1)) == false) {
			return false;
	}
	if (postEventCallForLocale('cspot_crit',obj,'ONCLICK') == false) {
			return false;
	}
	if (postEventCall('cspot_crit',obj,'ONCLICK') == false) {
			return false;
	}
	return (retVal == undefined) ? true : retVal;

}

function fnOnButtonClick(objBtn) 
{

	objForm = document.forms[0];

	if(objBtn.id == 'Clear') 
	{
		if(confirm(finbranchResArr.get("FAT000360"))) {
		objForm.actionCode.value = objBtn.id;
		formReset(objForm);
		objForm.submit();
		}
	}
	else 
	{
		if(!fnValidateForm())
			return false;
		doSubmit(objBtn.id);
	}
	return true;
}

