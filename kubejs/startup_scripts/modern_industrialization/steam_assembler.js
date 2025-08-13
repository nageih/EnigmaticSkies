// https://github.com/AztechMC/Modern-Industrialization/blob/7048dbcb5279d78cf41a49d02bb45ab758e7ce6f/docs/ADDING_MACHINES.md
// let STEAM_ASSEMBLER;

// MIMachineEvents.registerRecipeTypes((event) => {
//     STEAM_ASSEMBLER = event.register('steam_assembler').withItemInputs().withFluidInputs().withItemOutputs();
// });

const MIMachineRecipeTypes = Java.loadClass('aztech.modern_industrialization.machines.init.MIMachineRecipeTypes');

MIMachineEvents.registerMachines((event) => {
    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
        'Steam Assembler',
        'steam_assembler',
        MIMachineRecipeTypes.ASSEMBLER,
        ['bronze', 'steel'],
        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        186,
        event.progressBar(105, 45, 'circuit'),
        event.efficiencyBar(48, 86),
        event.energyBar(14, 44),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        9,
        3,
        2,
        0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        // Explanation: 3x3 grid of item slots starting at position (42, 27), then 1x3 grid of item slots starting at position (139, 27).
        (items) => items.addSlots(42, 27, 3, 3).addSlots(139, 27, 1, 3),
        (fluids) => fluids.addSlots(98, 27, 2, 1),
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true,
        true,
        false
    );
});
