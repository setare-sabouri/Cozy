export const PARTICLE_MODES = {
    Rainy: {
        speedMin: 0.001,
        speedMax: 0.1,
        drift: 0,
        geometry: "cylinder",
        material: { color: "#87CEEB", transparent: true, opacity: 0.6 }
    },
    Snowy: {
        speedMin: 0,
        speedMax: 0.02,
        drift: 0.01,
        geometry: "octahedron",
        material: { color: "#FFFFFF" }
    },
    Sunny: {
        speedMin: 0,
        speedMax: 0,
        drift: 0,
        geometry: null,
        material: null
    },

    Stormy: {
        speedMin: 0.09,
        speedMax: 0.1,
        drift: 0.01, //wind
        geometry: "Stormycylinder",
        material: { color: "#77aae4", transparent: true, opacity: 0.8 },
    }
};
