import { Enemy } from "./models";
import { BaseTower, BuildQueue, CannonTower, IceTower, MagicTower } from "./tower-types";

export class MapManager {
    private towers: BaseTower[] = [];
    private buildQueue: BuildQueue<Enemy> = new BuildQueue<Enemy>();

    public placeTower(tower: BaseTower): string {
        this.towers.push(tower);
        return `Tower "${tower.name}" (ID: ${tower.id}) placed on the map.`;
    };

    public addEnemyToQueue(enemy: Enemy): string {
        this.buildQueue.enqueue(enemy);
        return `Enemy "${enemy.name}" (ID: ${enemy.id}) added to the wave queue.`;
    };

    public assignTarget(towerId: number, enemyId: number): string {
        const tower = this.towers.find(tower => tower.id === towerId);
        
        if (!tower) {
            return `ERROR: Tower with ID ${towerId} not found.`;
        }

        const enemy = this.buildQueue.dequeue(enemyId);

        if (!enemy) {
            return `ERROR: Enemy with ID ${enemyId} not found in the queue.`;
        }

        tower.targets.push(enemy);
        return `Enemy "${enemy.name}" assigned to tower "${tower.name}".`;
    };

    public listAllTowers(): string[] {
        let result = [`--- Map Defense Status ---`];

        const specialData = function (tower: BaseTower) {
            if (tower instanceof CannonTower) {
                return `Power: ${tower.power}`;
        } else if (tower instanceof MagicTower) {
                return `SpellPower: ${tower.spellPower}`;
        } else if (tower instanceof IceTower) {
                return `Freeze: ${tower.freeze}`;      
        }
    }

        this.towers.forEach((tower) => {
            result.push(`[${tower.type}] ${tower.name} (Level: ${tower.level}, ${specialData(tower)}) - Range: ${tower.calculateRange()}`)
        });

        result.push(`--------------------------`);

        return result;
    }
};