ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/shapeless/';

    const recipes = [
        {
            output: '4x ars_nouveau:sourcestone',
            inputs: [
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone'
            ],
            id: `ars_nouveau:smooth_sourcestone_to_sourcestone`
        },
        {
            output: 'ars_nouveau:novice_spell_book[base_color="brown"]',
            inputs: [
                'minecraft:book',
                'aether:skyroot_shovel',
                'aether:skyroot_pickaxe',
                'aether:skyroot_axe',
                'aether:skyroot_sword'
            ],
            id: 'ars_nouveau:novice_spell_book'
        },
        {
            output: 'ars_nouveau:novice_spell_book[base_color="brown"]',
            inputs: [
                'ars_nouveau:worn_notebook',
                'aether:skyroot_shovel',
                'aether:skyroot_pickaxe',
                'aether:skyroot_axe',
                'aether:skyroot_sword'
            ],
            id: 'ars_nouveau:novice_spellbook_alt'
        },
        {
            output: 'ars_nouveau:ritual_fertility',
            inputs: [
                'ars_nouveau:green_archwood_log',
                'aether:enchanted_berry',
                'aether:enchanted_berry',
                'aether:enchanted_berry',
                'arsdelight:mendosteen_jelly',
                'supplementaries:lumisene_bottle',
                'supplementaries:lumisene_bottle'
            ],
            id: 'ars_nouveau:ritual_fertility'
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
