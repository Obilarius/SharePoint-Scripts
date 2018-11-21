<script language="javascript" type="text/javascript">

_spBodyOnLoadFunctionNames.push("hideFields");

function findacontrol(FieldName) {
   var arr = document.getElementsByTagName("nobr");//get all comments
   for (var i=0;i < arr.length; i++ )
   {
      // now match the field name
      if (arr[i].innerHTML.indexOf(FieldName) > 0) {
         return arr[i];
      }
   }
}

function hideFields() {
   // uncomment the next line if you are troubleshooting
   // debugger;
   var control;
   // Add the two lines below for each control to be hidden
   //control = findacontrol("<Column Name>");
   //control.parentNode.parentNode.parentNode.style.display="none";
}
</script>


<!-- Source: http://www.cleverworkarounds.com/2008/02/07/more-sharepoint-branding-customisation-using-javascript-part-1/ -->
