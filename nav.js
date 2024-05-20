$(function(){
    $("#nav-placeholder").load("nav.html", function(response, status, xhr) {
      if (status == "error") {
        console.log("Error loading nav.html: " + xhr.status + " " + xhr.statusText);
      }
    });
  });
  