var week = {
	"A":WEEKA,
	"B":WEEKB
}
$().ready(function(){

	$("#header").click(function(){
		console.log("Clicked!")
		if($('#MainMenu').css('display') == "none"){
			$(".box").slideUp(400)
			function fadein(){
				$("#MainMenu").children().show();
				$("#MainMenu").fadeIn();
			}
			setTimeout(fadein,500)
		}
	})

	$("#TimeSearch .submit").click(function(){
		$("#TimeSearch .output p").remove()
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

	$("#roomMode").click(function(){
		$("#MainMenu").slideUp(400,function(){
			$("#RoomSearch").fadeIn(400)
		})
	})

	$("#RoomSearch .submit").click(function(){
		$("#RoomSearch .output p, h3").remove()
		var query = $( "#roomCode" ).val()
		for(var w in week){
			var results = []
			for(var i in week[w]){
				if(week[w][i].indexOf(query) > -1){
					results.push(i)
				} 
			}
			console.log(results)
			results = results.join(", ")
			$("#RoomSearch .output").append("<h3>"+ "Week " + w +"</h3>")
			$("#RoomSearch .output").append("<p>"+ results +"</p>")
		}

	})
})

