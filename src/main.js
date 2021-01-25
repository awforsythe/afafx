var comp = app.project.items.addComp('Hello', 1920, 1080, 1.0, 60.0, 60.0);
var textLayer = comp.layers.addText('This is a test comp to verify\nthat afafx is working');
comp.openInViewer();
