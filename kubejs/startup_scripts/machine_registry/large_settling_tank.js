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

let LARGE_SETTLING_TANK;

MIMachineEvents.registerRecipeTypes((event) => {
    LARGE_SETTLING_TANK = event.register('large_settling_tank').withItemInputs().withFluidInputs().withFluidOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((event) => {
    const mbHatchTop = event.hatchOf('fluid_input');
    const mbHatchBottom = event.hatchOf('item_input', 'fluid_output');
    const brickBaseMember = event.memberOfBlock('minecraft:polished_andesite');
    const brickWallMember = event.memberOfBlock('minecraft:bricks');
    const mbShape = event
        .layeredShape('andesite_casing', [
            ['BBB', 'WWW', 'WWW', 'WWW', 'TTT'],
            ['BBB', 'W W', 'W W', 'W W', 'TTT'],
            ['BBB', 'W#W', 'WWW', 'WWW', 'TTT']
        ])
        .key('T', brickBaseMember, mbHatchTop)
        .key('B', brickBaseMember, mbHatchBottom)
        .key('W', brickWallMember, event.noHatch())
        .build();

    event.multiblock(
        // English name, internal name
        'Large Settling Tank',
        'large_settling_tank',
        // Recipe type, multiblock shape
        LARGE_SETTLING_TANK,
        mbShape,
        // REI progress bar
        event.progressBar(83, 53, 'arrow'),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(42, 47, 1, 2),
        (itemOutputs) => itemOutputs,
        (fluidInputs) => fluidInputs.addSlots(42, 27, 1, 1),
        (fluidOutputs) => fluidOutputs.addSlots(129, 47, 1, 2),
        // Casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
        'bricks',
        'settling_tank',
        true,
        false,
        false,
        // Base recipe EU, allow redstone control module?
        1,
        true
    );
});
