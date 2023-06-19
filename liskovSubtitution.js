//https://www.youtube.com/watch?v=dJQMqNOC4Pc
class Bird { 
	fly() {
		console.log('I can fly');
	}
}


class Duck extends Bird {
	quack() {
		console.log('I can quack');
	}
}

class Peguin extends Bird {
	swim() {
		console.log('I can swim');
	}

	fly() {
		throw new Error('I can not fly');
	}
}

function makebirdFly(bird) {
	bird.fly();
}

const duck = new Duck();
const peguin = new Peguin();

makebirdFly(duck);
makebirdFly(peguin);

