var demo2 = function() {

	var stage = new Kinetic.Stage({
		container : "container",
		width : $(document).width() - 20,
		height : $(document).height() - 100,
		draggable : true
	});

	//
	var boxLayer = new Kinetic.Layer();
	var messageLayer = new Kinetic.Layer();
	var rectX = stage.getWidth() / 2 - 50;
	var rectY = stage.getHeight() / 2 - 25;

	var box = new Kinetic.Rect({
		x : rectX,
		y : rectY,
		width : 100,
		height : 50,
		fill : "#00D2FF",
		stroke : "black",
		strokeWidth : 4,
		draggable : true
	});

	// write out drag and drop events
	box.on("touchstart dragstart", function() {
		//writeMessage(messageLayer, "dragstart");
	});
	box.on("touchend dragend", function() {
		//writeMessage(messageLayer, "dragend");
	});

	boxLayer.add(box);

	stage.add(boxLayer);


}
