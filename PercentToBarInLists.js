<script type="text/javascript">
    /*
    Percent to Bar
    author: Sascha Walzenbach
    date: 2018/09/12
    email: sascha@walzenbach.com
    */

    function PercentToBar(NodeSet, HTMLregexp) {
        var CellContent = "";
        var i = 0;
        while (i < NodeSet.length){
            try {
                CellContent = NodeSet[i].innerText || NodeSet[i].textContent;
                if (HTMLregexp.test(CellContent) && CellContent != "0%") { 
                    var childNode = NodeSet[i].getElementsByTagName("div")[0];
                    childNode.style.backgroundColor = "#EBEFF8";
                    childNode.style.width = CellContent;
                    childNode.style.float = "right"; 
                    childNode.style.paddingBottom = "2px";
                    childNode.style.paddingTop = "2px";
                    childNode.style.paddingRight = "2px";
                    childNode.style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='#EBEFF8', endColorstr='#DCE4F3')";
                }
            } 
            catch(err){}
            i=i+1;
        }
    }


    // Percent in Lists
    var regexpTD = new RegExp("^[0-1]{0,1}[0-9]{0,2}%$");
    PercentToBar(document.getElementsByTagName("TD"),regexpTD);


</script>
