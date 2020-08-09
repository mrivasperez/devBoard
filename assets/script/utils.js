//update the output panel (iframe)
function updateOutput() {
  //we will manipulate the iframe to load css, and html
  $("iframe")
    .contents()
    .find("html")
    .html(
      "<html><head><style type = 'text/css'>" +
        $("#cssPanel").val() +
        "</style></head><body>" +
        $("#htmlPanel").val() +
        "</body></html>"
    );
  //make the javascript code run on the iframe
  document
    .getElementById("outputPanel")
    .contentWindow.eval($("#javascriptPanel").val());
}

//on click remove or add .active
$(".toggleButton").click(function () {
  //add or remove active class on click
  $(this).toggleClass("active");
  //create variable with panel id + "Panel"
  var panelID = $(this).attr("id") + "Panel";
  //select ID to toggle class of hidden
  $("#" + panelID).toggleClass("hidden");
  //get number of panels currently on screen with class of "hidden"
  var numberOfActivePanels = 4 - $(".hidden").length;
  //change width of panels based on numberOfActivePanel
  $(".panel").width($(window).width() / numberOfActivePanels - 10);
  updateOutput();
});

//resize the panels to be heigh of window
$(".panel").height($(window).height() - $("#header").height() - 21);
//resite the panels to be width of window
$(".panel").width($(window).width() / 2 - 10);

//make the output automatically update as user types in textarea(s)
$("textarea").on("change keyup paste", function () {
  updateOutput();
});
