//priority: 1001

const spell_tomes = {
    haunt: {
        flavor_text: 'Conjures a ghost-imbued whirlwind.',
        spells: {
            0: {
                color: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                name: 'Haunt',
                particleTimeline: {
                    'ars_nouveau:projectile': {
                        castSound: { sound: { pitch: 0.5, sound: { id: 'ars_nouveau:tempestry_family' } } },
                        flairEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onResolvingEffect: {
                            motion: { propMap: {}, type: 'ars_nouveau:burst' },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 5,
                                        radius: 0.10000000149011612,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:emitter': { age: 0, rotation: { x: -21.07453, y: -112.584816 } },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 255, g: 50, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onSpawnEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        resolveSound: { sound: {} },
                        trailEffect: {
                            motion: {
                                propMap: {
                                    'ars_nouveau:model': { resource: 'ars_nouveau:empty', subPropMap: {} },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 255, g: 255, id: 'ars_nouveau:constant', r: 50 },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:helix'
                            },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 100,
                                        radius: 0.30000001192092896,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 255, g: 50, id: 'ars_nouveau:constant', r: 50 },
                                                tintDisabled: 0
                                            }
                                        }
                                    },
                                    'ars_nouveau:speed': {
                                        xzMaxSpeed: 0.0,
                                        xzMinSpeed: 0.0,
                                        yMaxSpeed: 0.0,
                                        yMinSpeed: 0.0
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        type: 'ars_nouveau:projectile'
                    }
                },
                recipe: ['ars_nouveau:glyph_projectile', 'ars_technica:glyph_whirl', 'ars_nouveau:glyph_hex'],
                sound: {}
            }
        }
    },
    blast: {
        flavor_text: 'Conjures a fire-imbued whirlwind.',
        spells: {
            0: {
                color: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                name: 'Blast',
                particleTimeline: {
                    'ars_nouveau:projectile': {
                        castSound: { sound: { pitch: 0.5, sound: { id: 'ars_nouveau:tempestry_family' } } },
                        flairEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onResolvingEffect: {
                            motion: { propMap: {}, type: 'ars_nouveau:burst' },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 5,
                                        radius: 0.10000000149011612,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:emitter': { age: 0, rotation: { x: -21.07453, y: -112.584816 } },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 1, g: 255, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onSpawnEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        resolveSound: { sound: {} },
                        trailEffect: {
                            motion: {
                                propMap: {
                                    'ars_nouveau:model': { resource: 'ars_nouveau:empty', subPropMap: {} },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 50, g: 50, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:helix'
                            },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 100,
                                        radius: 0.30000001192092896,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 1, g: 127, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 0
                                            }
                                        }
                                    },
                                    'ars_nouveau:speed': {
                                        xzMaxSpeed: 0.0,
                                        xzMinSpeed: 0.0,
                                        yMaxSpeed: 0.0,
                                        yMinSpeed: 0.0
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        type: 'ars_nouveau:projectile'
                    }
                },
                recipe: ['ars_nouveau:glyph_projectile', 'ars_technica:glyph_whirl', 'ars_nouveau:glyph_smelt'],
                sound: {}
            }
        }
    },

    smoke: {
        flavor_text: 'Conjures a smoke-imbued whirlwind.',
        spells: {
            0: {
                color: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                name: 'Smoke',
                particleTimeline: {
                    'ars_nouveau:projectile': {
                        castSound: { sound: { pitch: 0.5, sound: { id: 'ars_nouveau:tempestry_family' } } },
                        flairEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onResolvingEffect: {
                            motion: { propMap: {}, type: 'ars_nouveau:burst' },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 5,
                                        radius: 0.10000000149011612,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:emitter': { age: 0, rotation: { x: -21.07453, y: -112.584816 } },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 229, g: 215, id: 'ars_nouveau:constant', r: 173 },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onSpawnEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        resolveSound: { sound: {} },
                        trailEffect: {
                            motion: {
                                propMap: {
                                    'ars_nouveau:model': { resource: 'ars_nouveau:empty', subPropMap: {} },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 127, g: 127, id: 'ars_nouveau:constant', r: 127 },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:helix'
                            },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 100,
                                        radius: 0.30000001192092896,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: { b: 211, g: 211, id: 'ars_nouveau:constant', r: 211 },
                                                tintDisabled: 0
                                            }
                                        }
                                    },
                                    'ars_nouveau:speed': {
                                        xzMaxSpeed: 0.0,
                                        xzMinSpeed: 0.0,
                                        yMaxSpeed: 0.0,
                                        yMinSpeed: 0.0
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        type: 'ars_nouveau:projectile'
                    }
                },
                recipe: ['ars_nouveau:glyph_projectile', 'ars_technica:glyph_whirl', 'ars_nouveau:glyph_flare'],
                sound: {}
            }
        }
    },
    wash: {
        flavor_text: 'Conjures a water-imbued whirlwind.',
        spells: {
            0: {
                color: { b: 180, g: 25, id: 'ars_nouveau:constant', r: 255 },
                name: 'Wash',
                particleTimeline: {
                    'ars_nouveau:projectile': {
                        castSound: { sound: { pitch: 0.5, sound: { id: 'ars_nouveau:tempestry_family' } } },
                        flairEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: {
                                                    b: 180,
                                                    g: 25,
                                                    id: 'ars_nouveau:constant',
                                                    r: 255
                                                },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onResolvingEffect: {
                            motion: { propMap: {}, type: 'ars_nouveau:burst' },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 5,
                                        radius: 0.10000000149011612,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:emitter': { age: 0, rotation: { x: -26.958658, y: -107.564285 } },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: {
                                                    b: 229,
                                                    g: 215,
                                                    id: 'ars_nouveau:constant',
                                                    r: 173
                                                },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        onSpawnEffect: {
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: {
                                                    b: 180,
                                                    g: 25,
                                                    id: 'ars_nouveau:constant',
                                                    r: 255
                                                },
                                                tintDisabled: 1
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        resolveSound: { sound: {} },
                        trailEffect: {
                            motion: {
                                propMap: {
                                    'ars_nouveau:model': { resource: 'ars_nouveau:empty', subPropMap: {} },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: {
                                                    b: 255,
                                                    g: 255,
                                                    id: 'ars_nouveau:constant',
                                                    r: 50
                                                },
                                                tintDisabled: 0
                                            }
                                        }
                                    }
                                },
                                type: 'ars_nouveau:helix'
                            },
                            particleOptions: {
                                properties: {
                                    'ars_nouveau:density': {
                                        density: 100,
                                        radius: 0.30000001192092896,
                                        spawnType: 'SPHERE'
                                    },
                                    'ars_nouveau:particle_type': {
                                        particleType: 'ars_nouveau:new_glow',
                                        subProperties: {
                                            'ars_nouveau:color': {
                                                particleColor: {
                                                    b: 229,
                                                    g: 215,
                                                    id: 'ars_nouveau:constant',
                                                    r: 173
                                                },
                                                tintDisabled: 0
                                            }
                                        }
                                    },
                                    'ars_nouveau:speed': {
                                        xzMaxSpeed: 0.0,
                                        xzMinSpeed: 0.0,
                                        yMaxSpeed: 0.0,
                                        yMinSpeed: 0.0
                                    }
                                },
                                type: 'ars_nouveau:new_glow'
                            }
                        },
                        type: 'ars_nouveau:projectile'
                    }
                },
                recipe: ['ars_nouveau:glyph_projectile', 'ars_technica:glyph_whirl', 'ars_nouveau:glyph_conjure_water'],
                sound: {}
            }
        }
    }
};
