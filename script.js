var week = {
	"A":WEEKA,
	"B":WEEKB
}
$().ready(function(){

	$("#header").click(function(){
		console.log("Clicked!")
		if($('#MainMenu').css('display') == "none"){
			$(".box").slideUp(400,function(){
				$("#MainMenu").fadeIn(400);
				$("#MainMenu").children().fadeIn(400);
			})
		}
	})

	$("#TimeSearch .submit").click(function(){
		$("#TimeSearch .output p").remove();
		var query = $( "#day" ).val() + ":" + $( "#period" ).val()
		var results = week[$( "#week" ).val()][query]
		results = results.join(", ")
		$("#TimeSearch .output").append("<p>"+ results +"</p>")
	})

	$("#timeMode").click(function(){
		$("#MainMenu").slideUp(400,function(){
			$("#TimeSearch").fadeIn(400)
		})
	})
})
