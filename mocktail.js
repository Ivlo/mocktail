//ver con Sergio plugins clases JS

//http://spinejs.com/docs/events


// var UiElement = function() {
//     this.behaviour = [{id:1,name:'behaviour1'},
//                       {id:2,name:'behaviour2'}]
// }

// UiElement.prototype.getIdBehaviour = function(){
//   return parseInt(this.behaviour.length) + 1;
// } 

// UiElement.prototype.addBehaviour = function(element) {
//   var type_element = typeof element,
//       id= this.getIdBehaviour();

//   if(type_element === 'string' || type_element === "number") {
//     this.behaviour.push({id:id,name:element});
//     console.log(this.behaviour);
//     //s$(this).trigger($.Event("addbehaviour"));

//   }else {
//     console.log('Debes introducir un número o un string para un behaviour');
//   }
    
// }

// UiElement.prototype.searchBehaviour = function(element) {
//     console.log(this.behaviour);
// }

// UiElement.prototype.deleteBehaviour = function(element) {
//     console.log(this.behaviour)
// }


// var obj1 = new UiElement()
// obj1.addBehaviour("behaviour 3")

var idCounter = 0;
var uniqueId = function(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
};

var UIBehavior = function(name){
  this.id = uniqueId("behavior_");
  this.name = name;
  // this.tag= tag || '';
}

var UiElement = function() {
  this.behaviour = [];
}

UiElement.prototype.addBehaviour = function(behavior) {
  this.behaviour.push(behavior);
  console.log('behavior_añadido');
}

UiElement.prototype.get_Behavior = function(element) {
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
}

UiElement.prototype.get_Behavior_At = function(at) {
  // if(this.behaviour[at]!=undefined) {
    // console.log(this.behaviour[at]);
    return this.behaviour[at];
  // }else {
    // console.log('behaivour no encontrado prueba de nuevo');
  // }
}

UiElement.prototype.get_Behavior_By_Tag = function(tag) {
  if(!tag) throw("No hay tag")

  var _tag=[];
  // if(tag!=undefined) {
    for (i=0; i<this.behaviour.length; i++) {
      if (tag == this.behaviour[i].tag) {
        _tag.push(this.behaviour[i]);
      }
    }
    // if (_tag.length >0)  {
    //    console.log(_tag);
    return _tag;
    // }else {
    //   console.log('tag no encontrado, prueba de nuevo');
    // }

  // }else {
  //   console.log('tag no encontrado, prueba de nuevo');
  // }
}

UiElement.prototype.get_Behavior_By = function(obj) {
  var results = [];
  if(obj!=undefined) {
    var key = Object.keys(obj);

    for (i=0;i<this.behaviour.length;i++) {

      var val_behaviour = this.behaviour[i][key];
      var val_obj = obj[key];
      if((this.behaviour[i].hasOwnProperty(key)) && (val_behaviour === val_obj)) {
        results.push(this.behaviour[i]);
      }
    }
    
    return results.length > 0 ? true : false;
    results = [];
  }else {
    console.log('no he encontrado by');
  }
}

UiElement.prototype.deleteBehaviour = function(element) {
  if(element!=undefined) {
    for (i=0;i<this.behaviour.length;i++) {
      if (this.behaviour[i].id == element) {
        delete this.behaviour[i];
        console.log('behaviour borrado');
        break;
      }else {
        console.log(' no lo tiene');
      }
    }
    
  }else {
    console.log('no hemos podido borrar el behavior');
  }
}

var clickBehavior = new UIBehavior("click");
var hoverBehavior = new UIBehavior("hover");


var link = new UiElement();
var button = new UiElement();
link.addBehaviour(clickBehavior, "perro");
link.addBehaviour(hoverBehavior, "perro");
link.get_Behavior("behavior_1");
link.get_Behavior_At('1');
link.get_Behavior_By_Tag('perro');
link.get_Behavior_By({id:'behavior_1', name: "click"});
link.deleteBehaviour('behavior_1');
