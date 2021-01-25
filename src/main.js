const DEFAULT_OPTIONS = {
    compWidth: 1920,
    compHeight: 1080,
    pixelAspect: 1.0,
    frameRate: 60.0,
};

const testOptions = { frameRate: 30.0 };

const options = { ...DEFAULT_OPTIONS, ...testOptions };
const comp = app.project.items.addComp('Hello', options.compWidth, options.compHeight, options.pixelAspect, 60.0, options.frameRate);
const textLayer = comp.layers.addText('This is a test comp to verify\nthat afafx is working');
comp.openInViewer();
