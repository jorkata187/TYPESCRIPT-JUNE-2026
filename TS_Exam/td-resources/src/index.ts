import { MapManager } from './map-manager';
import { CannonTower, MagicTower, IceTower, BuildQueue } from './tower-types';
import { TowerType, Enemy } from './models';
import { Upgraded } from './decorators';

async function main() {

    // Example 1: Place Towers
    // const manager = new MapManager();
    // const cannon = new CannonTower(1, "Iron Bastion", 5, 30);
    // const magic = new MagicTower(2, "Arcane Spire", 8, 40);
    // console.log(manager.placeTower(cannon));
    // console.log(manager.placeTower(magic));

    // Example 2: Wave Queue and Target Assignment
    // const manager = new MapManager();
    // const cannon = new CannonTower(1, "Iron Bastion", 5, 30);
    // const magic = new MagicTower(2, "Arcane Spire", 8, 40);
    // console.log(manager.placeTower(cannon));
    // console.log(manager.placeTower(magic));
    // const goblin: Enemy = { id: 201, name: "Goblin Scout", health: 80 };
    // const troll: Enemy = { id: 202, name: "Stone Troll", health: 300 };
    // console.log(manager.addEnemyToQueue(goblin));
    // console.log(manager.addEnemyToQueue(troll));
    // console.log(manager.assignTarget(1, 201));
    // console.log(manager.assignTarget(99, 202));
    // console.log(manager.assignTarget(2, 999));
    // manager.listAllTowers().forEach(line => console.log(line));

    // Example 3: Decorator and Attack Test
    // const cannon = new CannonTower(1, "Iron Bastion", 5, 30);
    // const magic = new MagicTower(2, "Arcane Spire", 8, 40);
    // const ice = new IceTower(3, "Frost Sentinel", 6, 20);
    // console.log(`Magic Attack: ${magic.attack()}`);
    // console.log(`Ice Attack: ${ice.attack()}`);
    // console.log(`Cannon Attack (Upgraded): ${cannon.attack()}`);

    // Example 4: Range Calculation
    const manager = new MapManager();
    const cannon = new CannonTower(1, "Iron Bastion", 5, 30);
    const magic = new MagicTower(2, "Arcane Spire", 8, 40);
    const ice = new IceTower(3, "Frost Sentinel", 6, 20);

    // Cannon range: (5 * 3) + (30 * 2) = 15 + 60 = 75
    console.log(`Cannon Range: ${cannon.calculateRange()}`);

    // Magic range: (8 * 5) + (40 * 1) = 40 + 40 = 80
    console.log(`Magic Range: ${magic.calculateRange()}`);

    // Ice range: (6 * 4) + (20 * 3) = 24 + 60 = 84
    console.log(`Ice Range: ${ice.calculateRange()}`);
}

main();

export {
    MapManager,
    CannonTower,
    MagicTower,
    IceTower,
    BuildQueue,
    TowerType,
    Upgraded
};
