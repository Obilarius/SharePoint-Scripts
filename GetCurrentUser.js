document.getElementById("ctl00_PlaceHolderMain_g_1c4a4cd6_8150_462b_9af8_078ee3de3ecc_ff3_1_ctl00_ctl00_UserField_downlevelTextBox").value = getCurrentUser();

function getCurrentUser() {
  var tags = document.getElementsByTagName('a');

  for (var i = 0; i < tags.length; i++) {
    if (tags[i].innerText.substr(0, 10) == 'Willkommen') {
      return tags[i].innerText.substr(11, tags[i].innerText.length);
    } else if (tags[i].innerText.substr(0, 7) == 'Welcome') {
      return tags[i].innerText.substr(8, tags[i].innerText.length);
    }
  }
}