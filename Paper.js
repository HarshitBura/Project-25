class Paper{
	constructor(x,y,r)
	{
		var options = {
			'density':1.2,
			'friction': 0,
			'restitution':0.3
		  }

       
	
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		this.image=loadImage("paper.png");
		
		World.add(world, this.body);
		

	}
	display()
	{
			var paperpos=this.body.position;		
			push();
		    translate(paperpos.x, paperpos.y);
			rectMode(CENTER);
		    imageMode(CENTER);
          
			image(this.image, this.x, this.y, this.r);
			
			stroke('white')
			fill("blue");
			


			pop();
			
	}
	
}