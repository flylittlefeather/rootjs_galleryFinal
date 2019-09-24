/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}

function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the images in the imageArray

	// Pasted from the HTML for reference:<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
	// <figcaption>landscape-1.jpg</figcaption>
	// 	</figure >

	for (var imageIndex = 0; imageIndex < imageArray.length; imageIndex++) {
		var newFigure = $("<figure>");
		var figureClass = "imageGallery col-xs-12 col-sm-6 col-md-4";
		newFigure.addClass(figureClass);
		var currentPic = imageArray[imageIndex];
		newFigure.css('background-image', 'url(' + currentPic + ')');
		//create the elements needed for each picture, store the elements in variable

		$("#gallery").append(newFigure);
	//append the element to the #gallery section

		var newFigCaption = $("<figCaption>");
		newFigCaption.text(currentPic);

		newFigure.append(newFigCaption);
			}

	$("#gallery>figure").on('click', displayImage)
	//attach a click handler to the figure you create.  call the "displayImage" function.

	// side note: make sure to remove the hard coded html in the index.html when you are done!

	}

function addModalCloseHandler(){
	$('img').click(function(){
			$("#galleryModal").modal("hide")
	} )
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}

function displayImage(){
	var imageSourceUrl = $(this).css('background-image');
	//find the url of the image by grabbing the background-image source, store it in a variable

	var indexNumber = imageSourceUrl.lastIndexOf("/")+1;
	var urlName=imageSourceUrl.slice(indexNumber);
	//grab the direct url of the image by getting rid of the other pieces you don't need

	var imageNameNumber=urlName.lastIndexOf(".");
	var nonPathName=urlName.slice(0, imageNameNumber)
	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
	// pexels-photo-132037
	//take a look at the lastIndexOf method


	//From the HTML:  <h4 class="modal-title">landscape-10</h4>
 $(".modal-title").text(nonPathName);
	//change the modal-title text to the name you found above

var indexNameWithImages = imageSourceUrl.lastIndexOf("/images")
var nameWithImages = imageSourceUrl.slice(indexNameWithImages+1, indexNameWithImages.length);


var modalSourceName = nameWithImages.slice(0, -2)
	$("img").attr('src', modalSourceName)
	//change the src of the image in the modal to the url of the image that was clicked on


	$('#galleryModal').modal('show')
	//show the modal with JS.  Check for more info here:
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}
