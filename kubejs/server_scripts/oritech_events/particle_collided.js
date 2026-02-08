OritechEvents.particleCollided((event) => {
    let { level, pos, controller, collisionPos, itemA, itemB, speed, recipeId, recipe } = event;

    if (recipeId == null) return;

    if (String(recipeId).includes('gate_pearl')) {
        let item_entity = level.getBlock(collisionPos).createEntity('minecraft:item');
        item_entity.item = recipe.results[0];
        item_entity.setY(collisionPos.y + 1);
        item_entity.spawn();

        event.cancel();
    }
});
