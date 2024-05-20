$(function(){
    $("#footer-placeholder").load("footer.html", function(response, status, xhr) {
      if (status == "error") {
        console.log("Error loading footer.html: " + xhr.status + " " + xhr.statusText);
      }
    });
  });
  