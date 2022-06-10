function preload()
{
     
}

function setup()
{
     canvas = createCanvas(300,300);
     canvas.center();
}

function draw()
{
rect(0,0,50,50);
}

function takesnapshot()
{
 save('myfilterimage.png');
}