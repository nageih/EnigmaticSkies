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
        },

        {
            results: [
                { id: 'oritech:still_sheol_fire', amount: 1000 },
                { id: 'minecraft:bowl', count: 1 }
            ],
            ingredients: [
                { item: 'arsdelight:bombegrante_jelly' },
                { type: 'fluid_stack', fluid: 'minecraft:lava', amount: 1000 }
            ],
            heat_requirement: 'superheated',
            id: `${id_prefix}still_sheol_fire`
        },
        {
            results: [{ id: 'oritech:still_strange_matter', amount: 1000 }],
            ingredients: [
                { item: 'malum:strange_crystal' },
                { type: 'fluid_stack', fluid: 'oritech:still_sheol_fire', amount: 250 }
            ],
            heat_requirement: 'superheated',
            id: `${id_prefix}still_strange_matter`
        },
        {
            results: [{ id: 'minecraft:netherite_scrap', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/netherite_scrap' },
                { type: 'fluid_stack', fluid: 'oritech:still_sheol_fire', amount: 250 }
            ],
            heat_requirement: 'superheated',
            id: `${id_prefix}netherite_scrap`
        },
        {
            results: [{ id: 'malum:cthonic_gold', count: 1 }],
            ingredients: [
                { tag: 'c:storage_blocks/hallowed_gold' },
                { type: 'fluid_stack', fluid: 'oritech:still_sheol_fire', amount: 250 }
            ],
            heat_requirement: 'superheated',
            id: `${id_prefix}cthonic_gold`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
