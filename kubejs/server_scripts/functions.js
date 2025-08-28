//priority: 1005
function getID(name) {
    return name.toLowerCase().replace(/[^a-z]+/g, '_');
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
}

function hexToRgb(hex) {
    let cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
    let color = cleanHex.substr(4, 2) + cleanHex.substr(2, 2) + cleanHex.substr(0, 2);
    return parseInt(color, 16);
}

function getPreferredItemInTag(tag) {
    return (
        Ingredient.of(tag)
            .stacks.toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || Item.of(air)
    );
}

function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of mod_priorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}

function onlyDrygmy(event, entity) {
    return event.addEntityModifier(entity).matchAttackerCustom((attacker) => attacker.uuid.toString() == DRYGMY_UUID);
}

function notDrygmy(event, entity) {
    return event.addEntityModifier(entity).matchAttackerCustom((attacker) => attacker.uuid.toString() != DRYGMY_UUID);
}

function generatePentacleEntry(ritual_name, x_placement, y_placement, parents) {
    let entry = {
        name: ritual_name,
        background_u_index: 0,
        background_v_index: 0,
        category: 'occultism:pentacles',
        description: '',
        hide_while_locked: false,
        icon: 'occultism:pentacle',
        name: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.name`,
        pages: [
            {
                type: 'modonomicon:text',
                anchor: '',
                show_title_separator: true,
                text: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.text`,
                title: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.title`,
                use_markdown_in_title: false
            },
            {
                type: 'modonomicon:multiblock',
                anchor: '',
                multiblock_id: `occultism:${ritual_name}`,
                multiblock_name: '',
                show_visualize_button: true,
                text: ''
            }
        ],
        parents: parents,
        x: x_placement,
        y: y_placement
    };

    return entry;
}

function getLineCoordinates(x1, y1, z1, x2, y2, z2, density) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let dz = z2 - z1;
    let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    let num_points = Math.floor(distance * density); // points per block
    let stepX = dx / num_points;
    let stepY = dy / num_points;
    let stepZ = dz / num_points;

    let coordinates = [];
    for (let i = 0; i < num_points; i++) {
        let x = x1 + i * stepX;
        let y = y1 + i * stepY;
        let z = z1 + i * stepZ;

        coordinates.push({ x: x, y: y, z: z });
    }
    return coordinates;
}

function getStarCoordinates(x, y, z, radius, num_points, density) {
    let angle_step = (2 * 3.14159) / num_points;

    let coordinates = [];
    for (let i = 0; i < num_points; i++) {
        let angle1 = i * angle_step;
        let angle2 = (i + 2) * angle_step;

        let dx1 = radius * Math.cos(angle1);
        let dz1 = radius * Math.sin(angle1);

        let dx2 = radius * Math.cos(angle2);
        let dz2 = radius * Math.sin(angle2);

        let line_coordinates = getLineCoordinates(x + dx1, y, z + dz1, x + dx2, y, z + dz2, density);
        coordinates = coordinates.concat(line_coordinates);
    }
    return coordinates;
}

function getCircleCoordinates(x, y, z, radius, density) {
    let circumference = 2 * 3.14159 * radius;
    let num_points = Math.floor(circumference * density);
    let angle_step = (2 * 3.14159) / num_points;

    let coordinates = [];
    for (let i = 0; i < num_points; i++) {
        let angle = i * angle_step;
        let dx = radius * Math.cos(angle);
        let dz = radius * Math.sin(angle);

        coordinates.push({ x: x + dx, y: y, z: z + dz });
    }
    return coordinates;
}

function getSpiralCoordinates(x, y, z, revolutions, height, upper_radius, lower_radius, density) {
    let num_particles = density * revolutions,
        angle_step = (2 * 3.14159 * revolutions) / num_particles;

    let coordinates = [];
    for (let i = 0; i < num_particles; i++) {
        let angle = i * angle_step,
            radius = lower_radius + (upper_radius - lower_radius) * (i / num_particles),
            dx = radius * Math.cos(angle),
            dz = radius * Math.sin(angle),
            dy = height * (i / num_particles);

        coordinates.push({ x: x + dx, y: y + dy, z: z + dz });
    }
    return coordinates;
}
