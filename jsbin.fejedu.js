// $('document').ready(function() {
// 	var options = { 
// 		videoId: 'e4dgBk8XTIk', 
// 		start: 0 
// 	};
//   $('#wrapper').tubular(options);	
	$('#header').load('http://invisibleglue.com/tiffanytripp/jsbin-header.html', function(){
		console.log('Header was loaded');
	});
	$('#navbar').load('http://invisibleglue.com/navbar.html', function(){
		console.log('Navbar was loaded');
	});
	
	
// 	$(document).on(' window.onPlayerStateChange.PLAYING', function(){
//     console.log('playing');
// 	});
	

	
// });

 


$(document).ready(function(){
    //init
    var loaderAnimation = $("#html5Loader").LoaderAnimation({
        onComplete: function(){
            console.log("preloader animation completed!");
        }
    });

    $.html5Loader({
        filesToLoad: 'http://invisibleglue.com/tiffanytripp/js/files.json',
        onUpdate: loaderAnimation.update,
        onComplete: function () {
            console.log("All the assets are loaded!");
            },
        onElementLoaded: function(obj, elm) {
            var vid = document.getElementById("myVideo");
            $("#myVideo").on('canplaythrough', function (){
                console.log(vid.readyState + " - Video is loaded");
                    $(this)[0].play();
            });   
        }
    });

    
});