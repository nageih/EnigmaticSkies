ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/assembly/';

    const recipes = [
        {
            input: { tag: 'c:storage_blocks/iron', count: 1 },
            result: { id: 'modularrouters:modular_router', count: 6 },
            program: 'drill',
            id: `${id_prefix}modular_router`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:assembly_${recipe.program}`;
        event.custom(recipe).id(recipe.id);
    });
});
