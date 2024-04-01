class Vehicle {
    constructor(x, y) {
        // For more detailed comments on how pos, vel, acc, and addForce work
        // see the Dot example from 2-15-24.

        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);

        // this.target = target;
        this.maxSpeed = 5;
        this.maxForce = 0.05;

        this.dim = 0 + random(5);

        this.hue = random(100, 200);
        this.saturation = 70;
        this.brightness = 80;

        this.range = 100;

        this.mass = 1;

        background(0, 0, 100);
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    getCloseVehicles() {
        let closeVehicles = [];
        for (let vehicle of vehicles) {
            if (vehicle !== this) {
                if (dist(vehicle.pos.x, vehicle.pos.y, this.pos.x, this.pos.y) < this.range) {
                    closeVehicles.push(vehicle);
                }
            }
        }
        return closeVehicles;
    }

    cohesion(closeVehicles) {
        if (closeVehicles.length > 0) {
            let sumPositions = createVector(0, 0);
            for (let vehicle of closeVehicles) {
                sumPositions.add(vehicle.pos);
            }
            sumPositions.div(closeVehicles.length);

            let desired = p5.Vector.sub(sumPositions, this.pos);
            desired.setMag(this.maxSpeed);
            let steeringForce = p5.Vector.sub(desired, this.vel);
            steeringForce.limit(this.maxForce);
            return steeringForce;
            
        }

        return createVector(0,0);
    }

    separation(closeVehicles) {
        let sumOfAnglesToVehicles = createVector(0, 0);
        for (let vehicle of closeVehicles) {
            let dirToVehicle = p5.Vector.sub(vehicle.pos, this.pos);
            sumOfAnglesToVehicles.add(dirToVehicle);
        }
        if (closeVehicles.length !== 0) {
            sumOfAnglesToVehicles.div(closeVehicles.length);
        }
        sumOfAnglesToVehicles.setMag(this.maxSpeed);
        sumOfAnglesToVehicles.mult(-1);
        
        // compute steering force
        let steeringForce = p5.Vector.sub(sumOfAnglesToVehicles, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }

    alignment(closeVehicles) {
        let sumOfVelocities = createVector(0, 0);
        for (let vehicle of closeVehicles) {
            sumOfVelocities.add(vehicle.vel);
        }
        if (closeVehicles.length > 0) {
            sumOfVelocities.div(closeVehicles.length);
        }
        sumOfVelocities.setMag(this.maxSpeed);
        
        // compute steering force
        let steeringForce = p5.Vector.sub(sumOfVelocities, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }

    // https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN
    flock(boids) {
        let alignment = this.alignment(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);
    
    
        this.acc.add(alignment);
        this.acc.add(cohesion);
        this.acc.add(separation);
      }

    update() {

        if (this.pos.y<height-400){
            let closeVehicles = this.getCloseVehicles();
            // What actions is this agent pursuing?
            let cohesionForce = this.cohesion(closeVehicles);
            cohesionForce.mult(1);
            this.addForce(cohesionForce);

            let separationForce = this.separation(closeVehicles);
            separationForce.mult(1);
            this.addForce(separationForce);

            let alignmentForce = this.alignment(closeVehicles);
            let n = noise(frameCount * 0.1);
        
            alignmentForce.mult(n);
            this.addForce(alignmentForce);

            this.flock(closeVehicles);
            this.dim = map(this.pos.y, 0, height, 2, 20)
              // MOVEMENT
            this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
            this.vel.limit(this.maxSpeed);
            this.pos.add(this.vel); // Apply velocity to position

            this.acc.set(0,0);
        }
        else{
            this.pos.y=random(height-350);
        }
    }

    show() {
        push();

        translate(this.pos.x, this.pos.y);

        // Heading is the amount of rotation
        let angle = this.vel.heading();
        rotate(angle);

        fill(this.hue, this.saturation, this.brightness);

        // Draw a triangle
        // beginShape();
        // vertex(this.dim, 0);
        // vertex(-this.dim, this.dim/2);
        // vertex(-this.dim, -this.dim/2);
        // circle(0,0,20);
        // ellipse(-20,0,40,20);
        // line(0,0,10,-40)
        // line(0,0,-10,-40)

        // endShape();

        circle(0,0,20);
        ellipse(-20,0,40,20);
        line(0,0,10,-40)
        line(0,0,-10,-40)

        pop();
    }
}