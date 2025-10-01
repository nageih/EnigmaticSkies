ClientEvents.generateAssets('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Recipe-Filters

    const recipes = [
        { id: 'industrialforegoing:washing_raw_materials/iridium' },
        { id: 'industrialforegoing:washing_raw_materials/iesnium' },
        { id: 'industrialforegoing:washing_raw_materials/antimony' },
        { id: 'industrialforegoing:washing_raw_materials/nickel' },
        { id: 'industrialforegoing:washing_raw_materials/tungsten' },
        { id: 'industrialforegoing:washing_raw_materials/platinum' },
        { id: 'industrialforegoing:washing_raw_materials/lead' },
        { id: 'industrialforegoing:washing_raw_materials/uranium' },
        { id: 'industrialforegoing:washing_raw_materials/silver' },
        { id: 'industrialforegoing:washing_raw_materials/titanium' },
        { id: 'industrialforegoing:washing_raw_materials/tin' },

        { id: 'industrialforegoing:fluid_sieve_raw_materials/iridium' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/iesnium' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/antimony' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/nickel' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/tungsten' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/platinum' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/lead' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/uranium' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/silver' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/titanium' },
        { id: 'industrialforegoing:fluid_sieve_raw_materials/tin' },

        { id: 'c:raw_materials/iridium' },
        { id: 'c:raw_materials/iesnium' },
        { id: 'c:raw_materials/antimony' },
        { id: 'c:raw_materials/nickel' },
        { id: 'c:raw_materials/tungsten' },
        { id: 'c:raw_materials/platinum' },
        { id: 'c:raw_materials/lead' },
        { id: 'c:raw_materials/uranium' },
        { id: 'c:raw_materials/silver' },
        { id: 'c:raw_materials/titanium' },
        { id: 'c:raw_materials/tin' }
    ];

    recipes.forEach((recipe) => {
        let payload = { filters: [{ id: recipe.id }] };
        event.json(`emi:recipe/filters/${getID(recipe.id)}`, payload);
    });
});
