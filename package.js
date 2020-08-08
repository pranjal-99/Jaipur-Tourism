// $(document).ready(function(){

var href=["http://rtdc.tourism.rajasthan.gov.in/Client/PackageTourDetail.aspx?PackageTourid=Best%20of%20Wild%20Life%20Package",
"http://rtdc.tourism.rajasthan.gov.in/Client/PackageTourDetail.aspx?PackageTourid=Rajasthan%20Package",
"http://rtdc.tourism.rajasthan.gov.in/Client/PackageTourDetail.aspx?PackageTourid=Religious%20Tour",
"http://rtdc.tourism.rajasthan.gov.in/Client/PackageTourDetail.aspx?PackageTourid=Exotic%20Rajasthan",
"http://rtdc.tourism.rajasthan.gov.in/Client/PackageTourDetail.aspx?PackageTourid=Desert%20Package",
"http://rtdc.tourism.rajasthan.gov.in/Client/PackageTourDetail.aspx?PackageTourid=Pearls%20of%20Rajasthan"];
// console.log(href)
var totalnumber=$("button").length;
for(var i=1;i<totalnumber;i++) {
			// console.log(href);
		var index=i;
		openweb(index);
		
	}
// });
function openweb(index) {
	console.log(index)
	$("button")[index].addEventListener("click",function(){
			window.open(href[index-1]);
	});
}