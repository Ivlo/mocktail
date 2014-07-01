var link = new UIElement(),

    hoverBehavior = new UIBehavior(),
    hoverBehavior_2 = new UIBehavior(),
    clickBehavior = new UIBehavior();

console.log(hoverBehavior.id) // hover_20
console.log(hoverBehavior.name) // hover

link.add_behavior(hoverBehavior, "perro");
link.add_behavior(clickBehavior);
link.add_behavior(hoverBehavior);

//  =======================================
//  = Metodos que devuelven una instancia =
//  =======================================

link.get_behavior("hover_20"); // Devuelve un elemento por id
link.get_behavior_at(0);
link.get_behavior_by_tag("perro");

//  ======================================================
//  = Metodos que devuelven mas de una instancia (Array) =
//  ======================================================
link.get_behavior_by({name:"Juan"}); // Devuelve un elemento buscando las propiedades que le llegan en el hash
link.get_behavior_by(function(behavior){
  return behavior.id == "hover_20";
}); // traer los Behaviors donde visible == true





////////////////

link.behaviors.add(new Behavior());
link.behaviors.get("hover_20");

link.behaviors.get("hover_20");
link.behaviors.get_at(0);
link.behaviors.get_by_tag("perro");
link.behaviors.get_by({name:"Juan"});
link.behaviors.get_by(function(behavior){
  return behavior.id == "hover_20";
});