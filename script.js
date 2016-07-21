$(function(){
	vph = $(window).height();
	$('.page').height(vph);
	$('.page').css('max-height', vph);
});
$("#search").click(function(){
	var str=$("#searchTerm").val();
    // console.log(str);
    var url="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+str+"&type=video&key=AIzaSyA2KbIZ7xMj_cTKsqGa87VW14TEaMkKKsQ&maxResults=10";
	$.getJSON(url,function(data) {
		var arrayofsearch = data.items;
    	// console.log(arrayofsearch);
    	var html = "<table border=1px ><tr><th>Thumbnail</th><th>Title</th><th>Link</th></tr>";
        for(var i=0;i<arrayofsearch.length;i++){
        	console.log(arrayofsearch[i].snippet.thumbnails.default.url);	
            html += "<tr><td><img src='"+arrayofsearch[i].snippet.thumbnails.default.url+"'</td><td>"+arrayofsearch[i].snippet.title+"</td><td><a href='https://www.youtube.com/watch?v="+arrayofsearch[i].id.videoId+"' target=\"_blank\" class=\"btn btn-primary\">Play Video</a></td></tr>";
        }
        html += "</table>";     
        $("#data").html(html);
    });
});