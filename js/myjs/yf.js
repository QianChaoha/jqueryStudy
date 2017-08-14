function hideOrShow() {
    $(document).ready(function(){
        $("#hide").click(function(){
            $("p").hide();
        });
        $("#show").click(function(){
            $("p").show();
        });
    });
}
function hideOrShow1() {
    $(document).ready(function(){
        $("#hide").click(function(){
            $("p").toggle();
        });
    });
}
