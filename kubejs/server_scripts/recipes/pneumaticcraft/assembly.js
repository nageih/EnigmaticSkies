ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/assembly/';

    const recipes = [
        {
            result: { id: 'modularrouters:modular_router', count: 6 },
            input: { tag: 'c:storage_blocks/iron', count: 1 },
            program: 'drill',
            id: `${id_prefix}modular_router`
        },

        {
            result: { id: 'modern_industrialization:bronze_machine_casing_pipe', count: 1 },
            input: { item: 'modern_industrialization:bronze_machine_casing', count: 1 },
            program: 'drill',
            id: `${id_prefix}bronze_machine_casing_pipe`
        },
        {
            result: { id: 'modern_industrialization:steel_machine_casing_pipe', count: 1 },
            input: { item: 'modern_industrialization:steel_machine_casing', count: 1 },
            program: 'drill',
            id: `${id_prefix}steel_machine_casing_pipe`
        },
        {
            result: { id: 'modern_industrialization:stainless_steel_machine_casing_pipe', count: 1 },
            input: { item: 'modern_industrialization:clean_stainless_steel_machine_casing', count: 1 },
            program: 'drill',
            id: `${id_prefix}stainless_steel_machine_casing_pipe`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:assembly_${recipe.program}`;
        event.custom(recipe).id(recipe.id);
    });
});
