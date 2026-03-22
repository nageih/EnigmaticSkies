ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/book_upgrade/';

    const recipes = [
        {
            result: { id: 'ars_zero:mage_spell_staff', count: 1 },
            ingredients: [
                { item: 'ars_zero:novice_spell_staff' },
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
            id: `${id_prefix}mage_spell_staff_upgrade`
        },
        {
            result: { id: 'ars_zero:archmage_spell_staff', count: 1 },
            ingredients: [
                { item: 'ars_zero:mage_spell_staff' },
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
            id: `${id_prefix}archmage_spell_staff_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_zero:staff_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
