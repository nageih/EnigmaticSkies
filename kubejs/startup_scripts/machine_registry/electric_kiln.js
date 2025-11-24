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

let ELECTRIC_KILN;

MIMachineEvents.registerRecipeTypes((event) => {
    ELECTRIC_KILN = event
        .register('electric_kiln')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
    const mbHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input');
    const heatproofMember = event.memberOfBlock('modern_industrialization:heatproof_machine_casing');
    const CoilMember = event.memberOfBlock('modern_industrialization:conductive_coil');
    const mbShape = event
        .layeredShape('heatproof_machine_casing', [
            ['HHH', 'CCC', 'CCC', 'HHH'],
            ['HHH', 'C C', 'C C', 'HHH'],
            ['H#H', 'CCC', 'CCC', 'HHH']
        ])
        .key('H', heatproofMember, mbHatch)
        .key('C', CoilMember, event.noHatch())
        .build();

    event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        'Electric Kiln',
        'electric_kiln',
        ELECTRIC_KILN,
        mbShape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(77, 33, 'arrow'),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(56, 35, 1, 2),
        (itemOutputs) => itemOutputs.addSlot(102, 35),
        (fluidInputs) => fluidInputs.addSlot(36, 35),
        (fluidOutputs) => fluidOutputs.addSlot(122, 35),
        /* MODEL CONFIGUATION */
        // casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
        'heatproof_machine_casing',
        'electric_blast_furnace',
        true,
        false,
        false
    );
});
