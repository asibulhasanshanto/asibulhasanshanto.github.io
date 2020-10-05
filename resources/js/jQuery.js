$(document).ready(function(){
  $("#btn_stystem_v").click(function(){
    $("#level_arc").css("display", "none");
    $("#system_v").css("display", "block");;
    $("#btn_stystem_v").addClass("btn_active")
    $("#btn_level_arc").removeClass("btn_active")

  });
  $("#btn_level_arc").click(function(){
    $("#system_v").css("display", "none");
    $("#level_arc").css("display", "block");
    $("#btn_level_arc").addClass("btn_active")
    $("#btn_stystem_v").removeClass("btn_active")
  });
});