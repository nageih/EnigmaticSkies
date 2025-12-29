ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/mixing/';

    const recipes = [
        {
            results: [{ id: 'enderio:pulsating_crystal', count: 1 }],
            ingredients: [
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/source' },
                { type: 'fluid_tag', fluid_tag: 'c:lumisene', amount: 1000 }
            ],
            heat_requirement: 'heated',
            id: `${id_prefix}pulsating_crystal`
        },
        {
            results: [{ id: 'minecraft:paper', count: 1 }],
            ingredients: [
                { item: 'minecraft:sugar_cane' },
                { item: 'minecraft:sugar_cane' },
                { item: 'minecraft:sugar_cane' },
                { type: 'fluid_stack', fluid: 'minecraft:water', amount: 100 }
            ],
            heat_requirement: 'none',
            id: `${id_prefix}paper_from_sugar_cane`
        },
        {
            results: [{ id: 'minecraft:paper', count: 1 }],
            ingredients: [
                { tag: 'farmersdelight:barks' },
                { tag: 'farmersdelight:barks' },
                { tag: 'farmersdelight:barks' },
                { type: 'fluid_stack', fluid: 'minecraft:water', amount: 100 }
            ],
            heat_requirement: 'none',
            id: `${id_prefix}paper_from_barks`
        },
        {
            results: [{ id: 'minecraft:paper', count: 3 }],
            ingredients: [
                { item: 'modern_industrialization:wood_pulp' },
                { item: 'modern_industrialization:wood_pulp' },
                { item: 'modern_industrialization:wood_pulp' },
                { type: 'fluid_stack', fluid: 'minecraft:water', amount: 100 }
            ],
            heat_requirement: 'none',
            id: `${id_prefix}paper_from_wood_pulp`
        },
        {
            results: [{ id: 'minecraft:paper', count: 9 }],
            ingredients: [
                { tag: 'c:doughs/rice' },
                { tag: 'c:doughs/rice' },
                { tag: 'c:doughs/rice' },
                { type: 'fluid_stack', fluid: 'minecraft:water', amount: 100 }
            ],
            heat_requirement: 'none',
            id: `${id_prefix}paper_from_rice`
        },
        {
            results: [{ id: 'actuallyadditions:rice_dough', count: 1 }],
            ingredients: [
                { item: 'farmersdelight:rice' },
                { type: 'fluid_stack', fluid: 'minecraft:water', amount: 1000 }
            ],
            heat_requirement: 'none',
            id: `${id_prefix}rice_dough`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);

        
    });
});
