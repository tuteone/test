// JavaScript Document
//
function track_special(gevent) {
	//track
	var g_tracks1= '<img src="https://www.google-analytics.com/collect?v=1&tid=UA-73415119-1&cid=100&t=event&ec=xiiwelcome&';
	var g_tracks2='">'; 
	var g_tracks = g_tracks1 + 'ea=' + gevent + '&el=' + promo_code + g_tracks2;
	document.getElementById("gtrack").innerHTML = g_tracks;
	
}
function tute_promo(){
		
	
	
	//alert(temp1);
	var temp2 = '<input id="t_promo" type="hidden" name="label:Promo_Code"   style="color:#000 !important;" value="';
	var temp3 = '">';
	var promo = temp2 + promo_code + temp3 ;
	document.getElementById("pnj").innerHTML = promo;
	
	
}
function tute_source(reqmnt){
		
	
	
	//alert(temp1);  <input type="hidden" name="leadsource" value="+2 2018">
	var temp2 = '<input type="hidden" name="leadsource" value="';
	var temp3 = '">';
	var promo = temp2 + reqmnt + temp3 ;
	document.getElementById("pnl").innerHTML = promo;
	
	//track
	var g_track1= '<img src="https://www.google-analytics.com/collect?v=1&tid=UA-73415119-1&cid=100&t=event&ec=xiiwelcome&';
	var g_track2='">'; 
	var g_track = g_track1 + 'ea=' + reqmnt + '&el=' + promo_code + g_track2;
	document.getElementById("gtrack").innerHTML = g_track;
	
	
	
}

			function tute_replete(){
				rplm({
					title: "Join TuteOne Course to get this!",
					text: '<h4> WhatsApp – 8547481148 </h4><a href=" http://tuteone.com/plus_two_tuition.html" class="btn btn-primary">Visit WEBSITE</a>',
					type: 'info',
					html: true,
					modalNOverlay: 'white',
					confirmButtonText: 'Skip',
					allowOutsideClick: true,
				});
			};
function book_replete(need){
				var book1= 'h';
				//var re = new RegExp(/^.*\//);
				//var re1 = re.exec(window.location.href);
				//var re2 = re1 + '1.txt' ;
				
				//var book2= readTextFile("1.txt");
			   //var book3=  book2 ;
			   tute_source(need);
			   tute_promo();
				var bookingForm = $('.bookingForm').html();
				rplm({
					title: "Get Best Deal from TuteOne",
					text: bookingForm,
					html: true,
					showCancelButton: false,
					showConfirmButton: false,
					animation: "tada",
					overlay: 'blur',
					modalNOverlay: 'custom',
					customModalColor: '#2a1846',
		            allowOutsideClick: true,
				});
			};
function lms_replete(){
				rplm({
					title: "",
					text: '<img src="images/lms.jpg" alt="Codecanyon" height="500"></a>',
					html: true,
					width: '400px',
					showConfirmButton: false,
					animation: 'bounce',
					allowOutsideClick: true,
					modalNOverlay: 'black',
					overlay: 'blur',
				});
			};