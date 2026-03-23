ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_zero/shapeless/';

    const recipes = [
        {
            output: 'ars_zero:novice_spell_staff',
            inputs: [
                'ars_zero:archwood_rod',
                'aether:zanite_shovel',
                'aether:zanite_pickaxe',
                'aether:zanite_axe',
                'aether:zanite_sword'
            ],
            id: `${id_prefix}novice_spell_staff`
        },
        {
            output: 'ars_zero:multiphase_orb',
            inputs: [
                'aether:enchanted_gravitite',
                '#c:gems/prescient_crystal',
                '#c:gems/prescient_crystal',
                '#c:gems/prescient_crystal',
                '#c:gems/time',
                '#c:gems/time',
                '#c:gems/overcharged_crystal',
                'malum:fused_consciousness',
                'apotheosis:mythic_material'
            ],
            id: `${id_prefix}multiphase_orb`
        },
        {
            output: 'ars_zero:spellcasting_circlet',
            inputs: [
                'ars_zero:dull_circlet',
                '#c:gems/prescient_crystal',
                '#c:gems/prescient_crystal',
                '#c:gems/prescient_crystal',
                '#c:gems/time',
                '#c:gems/time',
                '#c:gems/overcharged_crystal',
                'malum:fused_consciousness',
                'apotheosis:mythic_material'
            ],
            id: `${id_prefix}spellcasting_circlet`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
