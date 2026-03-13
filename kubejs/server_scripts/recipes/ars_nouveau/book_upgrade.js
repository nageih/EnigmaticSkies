ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/book_upgrade/';

    const recipes = [
        {
            result: { id: 'ars_nouveau:apprentice_spell_book', count: 1 },
            ingredients: [
                { item: 'ars_nouveau:novice_spell_book' },
                { tag: 'c:storage_blocks/infused_iron' },
                { tag: 'c:gems/diamond' },
                { tag: 'c:gems/diamond' },
                { tag: 'c:gems/diamond' },
                { item: 'actuallyadditions:black_quartz_block' },
                { item: 'actuallyadditions:black_quartz_block' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'supplementaries:lumisene_bottle' }
            ],
            category: 'misc',
            id: `${id_prefix}apprentice_book_upgrade`
        },
        {
            result: { id: 'ars_nouveau:archmage_spell_book', count: 1 },
            ingredients: [
                { item: 'ars_nouveau:apprentice_spell_book' },
                { tag: 'c:gems/prescient_crystal' },
                { tag: 'c:gems/prescient_crystal' },
                { tag: 'c:gems/prescient_crystal' },
                { tag: 'c:gems/time' },
                { tag: 'c:gems/time' },
                { tag: 'c:gems/overcharged_crystal' },
                { item: 'malum:fused_consciousness' },
                { item: 'apotheosis:mythic_material' }
            ],
            category: 'misc',
            id: `${id_prefix}archmage_book_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:book_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
