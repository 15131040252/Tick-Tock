function setup()
{
  createCanvas(1350 , 650);
}

function draw()
{
  background(660);
  background("yellow")

  let sc = second();
  fill(color('blue'));
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  console.log(scAngle);
  ellipseMode(RADIUS);
  arc(675 , 325 , 300 , 300 , 360, scAngle);

  let mn = minute();
  fill(color(''));
  angleMode(DEGREES);
  mnAngle = map(mn,0,60,0,360);
  console.log(mnAngle);
  ellipseMode(RADIUS);
  arc(675 , 325 , 200 , 200 , 360, mnAngle);

  let hr = hour();
  fill(color('green'));
  angleMode(DEGREES);
  hrAngle = map(hr,0,24,0,360);
  console.log(hrAngle);
  ellipseMode(RADIUS);
  arc(675 , 325 , 100 , 100 , 360, hrAngle);
}