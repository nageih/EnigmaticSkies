ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/assembly/';

    const recipes = [
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
        },
        {
            result: { id: 'modern_industrialization:stainless_steel_blade', count: 4 },
            input: { tag: 'c:plates/stainless_steel', count: 3 },
            program: 'drill',
            id: `${id_prefix}stainless_steel_blade`
        },
        {
            result: { id: 'modern_industrialization:stainless_steel_rotor', count: 1 },
            input: { item: 'modern_industrialization:stainless_steel_blade', count: 4 },
            program: 'laser',
            id: `${id_prefix}stainless_steel_rotor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:assembly_${recipe.program}`;
        event.custom(recipe).id(recipe.id);

        
    });
});
