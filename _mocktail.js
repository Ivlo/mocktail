var UIEntity = Class.extend({
  init:function(type) {
    this.id = _.uniqueId(this.entityType);
    this.type=type || '';
  },
});

var UIBehavior = UIEntity.extend({
  entityType:'behavior_'
  
})

var UIElement = UIEntity.extend({
  entityType:'element_',
  init: function(){
    this.behaviour = [];
    this._super();
  },
  addBehavior: function(element){
    this.behaviour.push(element);
  },
  getBehavior:function(element) {
    var behavior = null;

    for (i=0; i<this.behaviour.length; i++) {
      if (element == this.behaviour[i].id) {
        console.log(this.behaviour[i].id);
        behavior =  this.behaviour[i];
        break;
      }else {
        console.log("behaviour no encontrado")
      }
    }
    return behavior;
  },
  getBehaviorAt:function(at) {
    return this.behaviour[at];
  },
  getBehaviourByType:function(type) {
    if(!type) throw("No hay type");

    var _type=[];

      for (i=0; i<this.behaviour.length; i++) {
        if (type == this.behaviour[i].type) {
          _type.push(this.behaviour[i]);
          console.log(_type);
        }
      }
      return _type;
      
  },
  deleteBehaviour:function(element) {
    if(!element) throw("Necesito que me pases un elemento para borrar");

    for (i=0;i<this.behaviour.length;i++) {
      if (this.behaviour[i].id == element) {
        this.behaviour.splice(this.behaviour[i],1);
        console.log('behaviour borrado');
        break;
      }
      return this.behaviour;
    }
  }
})

var UIComponent = UIElement.extend({});

var clickBehavior = new UIBehavior('example');
var button = new UIElement();
button.addBehavior(clickBehavior);
button.getBehaviourByType('example');
button.deleteBehaviour('behavior_1');
var link = new UIElement();
  
