function printBlock()
{
	//alert(nrbSerialNo)
	writeCustomHeader("cspot_det");
	with (document){
	write('<input type="hidden" id="matDate" fdt="fdate" mneb1="N" vFldId="matDate_ui" name="' + subGroupName + '.matDate">');
        write('<input type="hidden" id="cspotDate" fdt="fdate" mneb1="N" vFldId="cspotDate_ui" name="' + subGroupName + '.cspotDate">');  
	write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
	write('<tr>');
	write('<td>');

	write('<table border="0" cellspacing="0" cellpadding="0">');
	write('<tr>');
	write('<td class="page-heading"> Treasury cspot Module  </td>');
	write('</tr>');
	write('</table>');
	write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	write('<tr>');
	write('<td class="textlabel">' + jspResArr.get("FLT0002350") + '</td>');
	write('<td class="textfielddisplaylabel">');
	if(funcCode != "D")
	{
		write('<label id="compField">' + fnGetFuncCodeDesc(funcCode) + '</label>');
	}
	else
	{
		write('<label id="compField">Reject By Verifier</label>');
		//write('<label id="compField">Reject By Verifier</label>;
	}
	write('</td>')
	write('<td class="textlabel"> NRB SRL No :');
	write('</td>');

write('<td class="textfielddisplaylabel">');
                write('<label id="compField">' + nrbSerialNo + '</label>');
        write('</td>')




	write('</tr>');
	write('</table>');
	write('<br />');

	write('<!-- DETAILSBLOCK-BEGIN -->');
	write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	write('<tr>');
	write('<td valign="top">');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table">');
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
	write('<a href="javascript:showHelpFile(\'det_help.htm\');" id="sLnk1">');
	write('<img  hotKeyId="finHelp" src="../Renderer/images/'+applangcode+'/help.gif" width="47" height="21" vspace="1" border="0" />');
	write('</a>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</br>');

	







	




if(funcCode=='A'){

	write('<tr>');


	




 




	write('<td class="textlabel">Deal Date');
        setMandatory("Y");
        write('</td>');
        write('<td class="textfield">');
        write('<input  hotKeyId="calender1"  type="date" class="textfieldfont" fdt="uidate"  mnebl="false" onBlur="javascript:return cspot_det_ONBLUR1(this,this,this);" name="' + subGroupName + '.cspotDate_ui" id="cspotDate_ui"  />');
        write('<a  href="javascript:openDate(document.forms[0].cspotDate_ui,BODDate)"   id="sLnk3"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender1" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
        write('</a>');
        write('</td>');
write('</tr>');


	write('<tr>')
		write('<td class="textlabel">Value Date');
        setMandatory("Y");
        write('</td>');
        write('<td class="textfield">');
        write('<input  hotKeyId="calender1"  type="text" class="textfieldfont" fdt="uidate"  mnebl="false" onBlur="javascript:return cspot_det_ONBLUR1(this,this,this);" name="' + subGroupName + '.cspotDate_ui" id="cspotDate_ui"  />');
        write('<a  href="javascript:openDate(document.forms[0].cspotDate_ui,BODDate)"   id="sLnk3"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender1" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
        write('</a>');
        write('</td>');
write('</tr>');






	write('<tr>')

write('<td class="textlabel">Account Number ');
	setMandatory("Y");
	write(' </td>');
        write('<td class="textfield">');
        write('<input name="' + subGroupName + '.accId" id="accId" hotKeyId="search2" type="text" class="textfieldfont" size=" 21 " maxlength="16">');
        write('&nbsp');
         write('<a id="sLnk5" target="_self" href="javascript:showAccountIdList(document.forms[0].accId,\'F\',null);">');
        write('<img hotKeyId="search2" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16" height="17" border="0"></a>');
        write('</td>');
        write('</tr>');




	write('<tr>')
		write('<td class="textlabel"> Amount purchase/sold');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');
		

		write('<td class="textlabel"> Counter Farty');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Second Cmcy');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');

		write('<td class="textlabel"> Deal Rate');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Our Agent');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Their Agent');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Nostro Recievable');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Nostro Payable');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Their Bank');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Swift R Bank');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');


		write('<td class="textlabel"> Beneficiary Bank');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');

		write('<td class="textlabel"> Fax/Swift/Conf');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');

		write('<td class="textlabel"> Payment (CCY Sold)');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');

		write('<td class="textlabel"> Commission NRB');
        setMandatory("Y");
        write('<td class="textfield">');
        write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
        write('</a>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');





}









//         write('<td class="textlabel">Treasury cspot Id');
//         setMandatory("Y");
//         write('</td>');
//         write('<td class="textfield">');
//         write('<input class="textfieldfont" type="text" OnLoad="return fetchdata()" isNaN maxlength="20" name="' + subGroupName + '.cspotId"  id="cspotId" ' + cspotProps.get("cspotId_ENABLED") + '>'); 
//         write('</td>');
// 	write('<td class="columnwidth"> </td>');
// 	write('<td class="textlabel"> </td>');
// 	write('<td class="textfield"> </td>'); 
//         write('</tr>'); 
//         write('<tr>');


//         write('<td class="textlabel">cspot Amount');
//         setMandatory("Y");
//         write('</td>');
//         write('<td class="textfield">');
//         write('<input class="textfieldfont" type="text" isNaN maxlength="70" name="' + subGroupName + '.cspotAmt"  id="cspotAmt" >');
//         write('</td>');
//         write('<td class="textlabel"> Interest Amount');
//         setMandatory("Y");
//         write('<td class="textfield">');
//         write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.intAmt"  id="intAmt">');   
//         write('</a>');
//         write('</td>');
//         write('<td class="columnwidth"> </td>');
//         write('<td class="textlabel"> </td>');
//         write('<td class="textfield"> </td>');
//         write('</tr>');
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         write('<tr>');


//         write('<td class="textlabel">cspot Date');
//         setMandatory("Y");
//         write('</td>');
//         write('<td class="textfield">');
//         write('<input  hotKeyId="calender1"  type="text" class="textfieldfont" fdt="uidate"  mnebl="false" onBlur="javascript:return cspot_det_ONBLUR1(this,this,this);" name="' + subGroupName + '.cspotDate_ui" id="cspotDate_ui"  />');
//         write('<a  href="javascript:openDate(document.forms[0].cspotDate_ui,BODDate)"   id="sLnk3"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender1" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
//         write('</a>');
//         write('</td>');




//         write('<td class="textlabel"> Period in Days');
//         setMandatory("Y");
//         write('<td class="textfield">');
//         write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.prdInDays"  id="prdInDays">');
//         write('</a>');
//         write('</td>');
//         write('<td class="columnwidth"> </td>');
//         write('<td class="textlabel"> </td>');
//         write('<td class="textfield"> </td>');
//         write('</tr>');




// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//        	write('<td class="textlabel">Maturity Date');
// 	setMandatory("Y");
// 	write('<td class="textfield">');
// 	write('<input class="textfieldfont" type="text" isNaN maxlength="10" name="' + subGroupName + '.matDate_ui"  id="matDate_ui" ' + cspotProps.get("chrge_ENABLED") + '>');
//         write('<a  href="javascript:openDate(document.forms[0].matDate_ui,BODDate)"   id="sLnk3"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender1" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
//         write('</a>');








//if any problem occurs delete the comment from this 6 lines

//	write('</a>');
//	write('</td>');
//	write('<td class="columnwidth"> </td>');
//	write('<td class="textlabel"> </td>');
//	write('<td class="textfield"> </td>');
//	write('</tr>');  














	

if(funcCode == "M" || funcCode=="I" || funcCode=="D"){
        write('<tr>');
	write('<td class="textlabel">Deal Date');
        setMandatory("Y");
        write('</td>');
        write('<td class="textfield">');
        write('<input  hotKeyId="calender1"  type="date" class="textfieldfont" fdt="uidate"  mnebl="false" onBlur="javascript:return cspot_det_ONBLUR1(this,this,this);" name="' + subGroupName + '.cspotDate_ui" id="cspotDate_ui"  />');
        write('<a  href="javascript:openDate(document.forms[0].cspotDate_ui,BODDate)"   id="sLnk3"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender1" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
        write('</a>');
        write('</td>');
write('</tr>');




        write('<tr>');
        write('<td class="textlabel">Reference Number ');
	setMandatory("Y");
	write(' </td>');
        write('<td class="textfield">');
        write('<input name="' + subGroupName + '.accId" id="accId" hotKeyId="search2" type="text" class="textfieldfont" size=" 21 " maxlength="16">');
        write('&nbsp');
         write('<a id="sLnk5" target="_self" href="javascript:showAccountIdList(document.forms[0].accId,\'F\',null);">');
        write('<img hotKeyId="search2" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16" height="17" border="0"></a>');
        write('</td>');
        write('</tr>');



}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
	if(funcCode !='I'){
	write('<div class="ctable">');
	write('<input id="Submit" name="Submit" type="button" class="button"	onClick="javascript:return cspot_det_ONCLICK2(this,this);"" value="Submit" hotKeyId="Submit">');
	write('<input id="Cancel" name="Cancel" type="button" class="button" value="Cancel"	onClick="javascript:return cspot_det_ONCLICK4(this,this.id);"" hotKeyId="Cancel">');
	}else{
	write('&nbsp;<input class="button" type="button" id="Back" value="BACK" onClick="javascript:return doSubmit(this.id)" hotKeyId="Ok">');
	}
	writeFooter();
	write('</div>');
	}
	} //End with()
}//End function

function fnOnLoad()
{
	var ObjForm = document.forms[0];
	pre_ONLOAD('cspot_det',this)
   {
   }

	var funcName = "this."+"locfnOnLoad";
	if(eval(funcName) != undefined){
	eval(funcName).call(this);
	}
	{
	}

	fnPopulateControlValues();

	fnAssignDateOnLoad(ObjForm);

	fnPopUpExceptionWindow(ObjForm.actionCode);
	if((typeof(WF_IN_PROGRESS) != "undefined") && (WF_IN_PROGRESS == "PEAS")){
	checkCustErrExecNextStep(Message);
	}

	post_ONLOAD('cspot_det',this);
}

function fnCheckMandatoryFields()
{
	var ObjForm = document.forms[0];
	return true;
}

function fnPopulateControlValues() 
{
	var ObjForm = document.forms[0];
}


function fnCheckControls()
{
	var ObjForm = document.forms[0];
}

function cspot_det_ONCHANGE1(obj,p1,p2)
{
	var retVal = "";
	if (pre_ONCHANGE('cspot_det',obj) == false) { 
		return false;
	}
	if ((retVal = onBlurFormatDate(p1)) == false) {
		return false;
	}
	if ((retVal = fnAssignDateOnEnter(p2)) == false) {
		return false;
	}
	if (post_ONCHANGE('cspot_det',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function cspot_det_ONCLICK2(obj,p1)
{
	var retVal = "";
	if (preEventCall('cspot_det',obj) == false) { 
		return false;
	}
	if ((retVal =  fnValAndSubmit(p1)) == false) {
		return false;
	}
	if (postEventCall('cspot_det',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}
function cspot_det_ONCLICK4(obj,p1)
{

	var retVal = "";
	if (preEventCall('cspot_det',obj) == false) { 
		return false;
	}
	if ((retVal =  doSubmit(p1)) == false) {
		return false;
	}
	if (postEventCall('cspot_det',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function cspot_det_ONBLUR1(obj,p1,p2)
{

		var retVal = "";
		if (pre_ONBLUR('cspot_det',obj) == false) {
			return false;
		}
		if ((retVal = onBlurFormatDate(p1)) == false) {
			return false;
		}
		if ((retVal = fnAssignDateOnEnter(p2)) == false) {
			return false;
		}
		if (post_ONBLUR('cspot_det',obj) == false) {
			return false;
		}
		return (retVal == undefined) ? true : retVal;
}




    




