// https://github.com/AztechMC/Modern-Industrialization/blob/7048dbcb5279d78cf41a49d02bb45ab758e7ce6f/docs/ADDING_MACHINES.md

/*
    Notes: When adding new machines, allow MI to generate the necessary resources 
    by enabling `datagenOnStartup = true` in `modern_industrialization-startup.toml`.
    This will generate them in the `modern_industrialization` at the instance root.

    Once generated, the following resources should be copied to `kubejs\assets\modern_industrialization` and `kubejs\data\modern_industrialization`
    Assets
    - blockstates
    - lang (only the specific entries for the new machines)
    - models
    Data
    - loot_table

    Similarly, be sure to update the `minecraft/needs_tool` and `minecraft/mineable` block tags.
*/

MIMachineEvents.registerMachines((event) => {
    // Centrifuge - Extends default Centrifuge into Steam Age
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
