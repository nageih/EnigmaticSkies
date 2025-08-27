ServerEvents.tags('item', (event) => {
    let additions = {
        coal: ['minecraft:coal'],
        charcoal: ['minecraft:charcoal'],
        charged_certus: ['ae2:charged_certus_quartz_crystal'],

        celestigem: ['justdirethings:celestigem'],
        primal_coal: ['justdirethings:coal_t1'],
        blaze_ember: ['justdirethings:coal_t2'],
        voidflame: ['justdirethings:coal_t3'],
        eclipse_ember: ['justdirethings:coal_t4'],
        time: ['justdirethings:time_crystal'],

        spirit_attuned: ['occultism:spirit_attuned_gem'],

        platinum: ['oritech:platinum_gem'],
        nickel: ['oritech:nickel_gem'],
        iron: ['oritech:iron_gem'],
        copper: ['oritech:copper_gem'],
        gold: ['oritech:gold_gem'],
        fluxite: ['oritech:fluxite'],
        overcharged_crystal: ['oritech:overcharged_crystal'],
        enderic: ['oritech:enderic_compound'],

        soulstone: ['malum:refined_soulstone'],
        brilliance: ['malum:refined_brilliance'],
        arcane_charcoal: ['malum:arcane_charcoal'],
        blazing_quartz: ['malum:blazing_quartz'],
        mnemonic_fragment: ['malum:mnemonic_fragment'],

        ambrosium: ['aether:ambrosium_shard'],

        ruby: ['enigmatica:ruby'],

        restonia: ['actuallyadditions:restonia_crystal'],
        palis: ['actuallyadditions:palis_crystal'],
        diamatine: ['actuallyadditions:diamatine_crystal'],
        void: ['actuallyadditions:void_crystal'],
        emeradic: ['actuallyadditions:emeradic_crystal'],
        enori: ['actuallyadditions:enori_crystal'],
        empowered_restonia: ['actuallyadditions:empowered_restonia_crystal'],
        empowered_palis: ['actuallyadditions:empowered_palis_crystal'],
        empowered_diamatine: ['actuallyadditions:empowered_diamatine_crystal'],
        empowered_void: ['actuallyadditions:empowered_void_crystal'],
        empowered_emeradic: ['actuallyadditions:empowered_emeradic_crystal'],
        empowered_enori: ['actuallyadditions:empowered_enori_crystal']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:gems/${tag}`).add(additions[tag]);
        event.get('c:gems').add(additions[tag]);
    });
});
