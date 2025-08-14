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
        { primary: 'nickel', secondary: AlmostUnified.getTagTargetItem(`c:nuggets/copper`).getId() },
        { primary: 'zinc', secondary: AlmostUnified.getTagTargetItem(`c:nuggets/lead`).getId() },
        { primary: 'copper', secondary: AlmostUnified.getTagTargetItem(`c:nuggets/silver`).getId() },
        { primary: 'gold', secondary: AlmostUnified.getTagTargetItem(`c:tiny_dusts/salt`).getId() },
        { primary: 'iron', secondary: AlmostUnified.getTagTargetItem(`c:nuggets/tin`).getId() }
    ];

    materials.forEach((material) => {
        recipes.push({
            ingredients: [{ tag: `c:clumps/${material.primary}` }],
            results: [
                { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.primary}`).getId(), count: 9 },
                { id: material.secondary, count: 2 }
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
