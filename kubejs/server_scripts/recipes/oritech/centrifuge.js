ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge/';
    const recipes = [
        {
            results: [{ id: 'oritech:carbon_fibre_strands', count: 1 }],
            ingredients: [{ tag: 'c:dusts/lignite_coal' }],
            time: 100,
            id: `${id_prefix}carbon_fibre_strands_from_lignite_coal`
        }
    ];

    const materials = [
        { primary: 'nickel', secondary: 'oritech:clay_catalyst_beads' },
        { primary: 'zinc', secondary: 'oritech:raw_silicon' },
        { primary: 'copper', secondary: 'createsifter:raw_silver_piece' },
        { primary: 'gold', secondary: AlmostUnified.getTagTargetItem(`c:dusts/salt`).getId() },
        { primary: 'iron', secondary: 'createsifter:raw_tin_piece' }
    ];

    materials.forEach((material) => {
        recipes.push({
            ingredients: [{ tag: `c:clumps/${material.primary}` }],
            results: [
                { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.primary}`).getId(), count: 9 },
                { id: material.secondary, count: 1 }
            ],
            time: 100,
            id: `${id_prefix}clump_${material.primary}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
