								function writeMessage(messageLayer, message) {
					var context = messageLayer.getContext();
					messageLayer.clear();
					context.font = "18pt Calibri";
					context.fillStyle = "black";
					context.fillText(message, 10, 25);
				}

				//
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
				box.on("dragstart", function() {
					writeMessage(messageLayer, "dragstart");
				});
				box.on("dragend", function() {
					writeMessage(messageLayer, "dragend");
				});

				boxLayer.add(box);

				stage.add(messageLayer);
				stage.add(boxLayer);

				var amplitude = 150;
				var period = 2000;
				// in ms
				var centerX = stage.getWidth() / 2 - 80;

				stage.onFrame(function(frame) {
					box.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
					boxLayer.draw();
				});

				//Start Animation
				document.getElementById('start').addEventListener('click', function() {
					stage.start();
				}, false);

				// resume transition
				document.getElementById('stop').addEventListener('click', function() {
					stage.stop();
				}, false);