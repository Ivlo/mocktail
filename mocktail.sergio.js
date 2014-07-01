//ver con Sergio plugins clases JS

//http://spinejs.com/docs/events

var UIBehavior = function(){
  this.id = _.uniqueId("behavior_")
}

var UiElement = function() {
  this.behaviour = []
}

UiElement.prototype.addBehaviour = function(behavior) {
  this.behaviour.push(behavior);
}

UiElement.prototype.searchBehaviour = function(element) {
    console.log(this.behaviour);
}

UiElement.prototype.deleteBehaviour = function(element) {
    console.log(this.behaviour)
}


var obj1 = new UiElement(),
    behavior = new UIBehavior();
obj1.addBehaviour(behavior)




///////////


//ver con Sergio plugins clases JS

//http://spinejs.com/docs/events

var Collection = function(){
  this.data = []
}

var UIElement = function() {
  this.behaviors = new Collection();
}

Collection.prototype.add = function(behavior) {
  this.behaviour.push(behavior);
}

Collection.prototype.search = function(element) {
    console.log(this.behaviour);
}

Collection.prototype.delete = function(element) {
    console.log(this.behaviour)
}


var obj1 = new UiElement(),
    behavior = new UIBehavior();
obj1.behaviors.add(behavior)




tag no este en la instancia que este a la hora de añadir el behaviour
para esto tagueo esto haciendo un objeto donde guardo el mapeo


get_byTag esta mal tiene que haber un solo tag por instancia y tiene que buscar en el mapeo

get_Behavior_By_Tag es getBehaviourByType necesito la propiedad type y nicetype.

Borrar elementos de un array no de un objeto con delete

llamo al metodo delete de todos los behaviours