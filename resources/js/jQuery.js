$(document).ready(function(){
    
    //level setup toggle buttons
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
    
//    upload video preview
$ ("#upload-video-input").change(function () {
   var fileInput = document.getElementById('upload-video-input');
   var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
   $("#upload-video-preview").attr("src", fileUrl);
    
    $('#upload-video-preview').css("display","block");
    $('#upload-video-description').css("display","block");
    
});
    
      //page setting
  $("#btn_social-setting").click(function(){
    $("#faq-part").css("display", "none");
    $("#about-us-part").css("display", "none");
    $("#social-setting-part").css("display", "block");
      
    $("#btn_social-setting").addClass("btn_active");
    $("#btn_faq").removeClass("btn_active");
      $("#btn_about_us").removeClass("btn_active");

  });
    $("#btn_faq").click(function(){
    $("#faq-part").css("display", "block");
    $("#about-us-part").css("display", "none");
    $("#social-setting-part").css("display", "none");
      
        
    $("#btn_social-setting").removeClass("btn_active");
    $("#btn_about_us").removeClass("btn_active");
      $("#btn_faq").addClass("btn_active");

  });
    
    $("#btn_about_us").click(function(){
    $("#faq-part").css("display", "none");
    $("#about-us-part").css("display", "block");
    $("#social-setting-part").css("display", "none");
      
        
    $("#btn_social-setting").removeClass("btn_active");
    $("#btn_faq").removeClass("btn_active");
      $("#btn_about_us").addClass("btn_active");

  });
    
});