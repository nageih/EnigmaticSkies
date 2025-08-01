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
            id: `ars_nouveau:apprentice_book_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:book_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
