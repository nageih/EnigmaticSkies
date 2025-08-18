// https://github.com/AztechMC/Modern-Industrialization/blob/7048dbcb5279d78cf41a49d02bb45ab758e7ce6f/docs/ADDING_MACHINES.md

/*
    Notes: When adding new machines, allow MI to generate the necessary resources 
    by enabling `datagenOnStartup = true` in `modern_industrialization-startup.toml`.
    This will generate them in the `modern_industrialization` at the instance root.

    Once generated, the following resources should be copied to `kubejs\assets\modern_industrialization`
    - blockstates
    - lang (only the specific entries for the new machines)
    - models
*/

MIMachineEvents.registerMachines((event) => {
    const MIMachineRecipeTypes = Java.loadClass('aztech.modern_industrialization.machines.init.MIMachineRecipeTypes');

    // Assembler - Extends default Assembler into Steam Age
    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type, list of tiers (can be bronze/steel/electric)
        'Assembler',
        'assembler',
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
        // Capacity for fluid slots
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

    // Centrifuge - Extends defaul Centrifuge into Steam Age
    event.craftingSingleBlock(
        /* GENERAL PARAMETERS FIRST */
        // English name, internal name, recipe type, list of tiers (can be bronze/steel/electric)
        'Centrifuge',
        'centrifuge',
        MIMachineRecipeTypes.CENTRIFUGE,
        ['bronze', 'steel'],

        /* GUI CONFIGURATION */
        // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
        -1,
        event.progressBar(65, 33, 'centrifuge'),
        event.efficiencyBar(50, 66),
        event.energyBar(42, 27),

        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1,
        4,
        1,
        4,
        // Capacity for fluid slots
        16,
        // Slot positions: items and fluids.
        // Explanation: 3x3 grid of item slots starting at position (42, 27), then 1x3 grid of item slots starting at position (139, 27).
        (items) => items.addSlot(42, 27).addSlots(93, 27, 2, 2),
        (fluids) => fluids.addSlot(42, 45).addSlots(131, 27, 2, 2),

        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true,
        true,
        true
    );
});
