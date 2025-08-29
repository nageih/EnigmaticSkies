ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/slicing/';

    const recipes = [
        {
            output: Item.of(
                'geneticsresequenced:cell[geneticsresequenced:entity_type="ars_nouveau:wilden_hunter"]'
            ).toJson(),
            inputs: [
                Ingredient.of('geneticsresequenced:cell[geneticsresequenced:entity_type="minecraft:wolf"]').toJson(),
                { item: 'justdirethings:polymorphic_catalyst' },
                Ingredient.of('geneticsresequenced:cell[geneticsresequenced:entity_type="minecraft:goat"]').toJson(),
                { item: 'malum:imitation_flesh' },
                { item: 'malum:arcane_spirit' },
                { item: 'malum:imitation_flesh' }
            ],
            energy: 20000,
            id: `${id_prefix}wilden_hunter`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:slicing';
        event.custom(recipe).id(recipe.id);
    });
});
