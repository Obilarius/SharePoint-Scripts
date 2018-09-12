<script type="text/javascript">
    /*
    Priority
    author: Sascha Walzenbach
    date: 2018/09/12
    email: sascha@walzenbach.com
    */

    // Variables
    var high = "(1) Hoch";
    var med  = "(2) Normal";
    var low  = "(3) Niedrig";

    var colorHigh = "#f9b3b3";
    var colorMed  = "#f7f9b3";
    var colorLow  = "#b3f9c0";



    var NodeSet = document.getElementsByTagName("TD");
    var CellContent = "";
    var i = 0;
    while (i < NodeSet.length){
        try {
            CellContent = NodeSet[i].innerText || NodeSet[i].textContent;
            if (CellContent == high) { NodeSet[i].style.backgroundColor = colorHigh; }
            else if (CellContent == med) { NodeSet[i].style.backgroundColor = colorMed; }
            else if (CellContent == low) { NodeSet[i].style.backgroundColor = colorLow; }
        } 
        catch(err){}
        i=i+1;
    }


</script>
