const WarriorTypeModule = (function () {
    const warriorTypeArray = [
        { type: "Valkyrie", weapon: "Øks", image: "warrior-1.jpg" },
        { type: "Barbarian", weapon: "Sverd", image: "warrior-2.jpg" },
        { type: "Berserker", weapon: "Større øks", image: "warrior-3.jpg" },
        { type: "Galning", weapon: "Sverd", image: "warrior-4.jpg" },
        { type: "Tank", weapon: "Øks", image: "warrior-5.jpg" },
        { type: "Sjaman", weapon: "Twitter", image: "warrior-6.jpg" }
    ];

    const getAll = () => warriorTypeArray;

    const getByType = (type) => {
        return warriorTypeArray.filter(warriorObject => warriorObject.type === type);
    }

    const getByWeapon = (weapon) => {
        return warriorTypeArray.filter(warriorObject => warriorObject.weapon === weapon);
    }

    return{getAll, getByType, getByWeapon}

}());

export default WarriorTypeModule;