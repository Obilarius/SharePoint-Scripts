var par = getQueryVariable("s");
par = decodeURI(par);

// Change Textfield Value with URL Parameter
var txtField = document.getElementById("ctl00_m_g_28dbbac1_6325_4d20_96fb_437ee317582a_ctl00_ctl01_ctl01_ctl00_ctl00_ctl04_ctl00_ctl00_TextField")
txtField.value = par;
txtField.disabled = true;

// Change Lookup Value with URL Parameter
var objSelect = document.getElementById("ctl00_m_g_28dbbac1_6325_4d20_96fb_437ee317582a_ctl00_ctl01_ctl02_ctl00_ctl00_ctl04_ctl00_Lookup");
setSelectedValue(objSelect, par);

function setSelectedValue(selectObj, valueToSet) {
  for (var i = 0; i < selectObj.options.length; i++) {
    if (selectObj.options[i].text == valueToSet) {
      selectObj.options[i].selected = true;
      return;
    }
  }
}


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
}