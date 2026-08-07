import { Archer, BaseHero, GuildStash, Mage, Warrior } from "./hero-types";
import { Weapon } from "./models";

export class GameManager {
    private heroes: BaseHero[] = [];
    private stash: GuildStash<Weapon> = new GuildStash<Weapon>();

    addHero(hero: BaseHero): string {
        this.heroes.push(hero);
        return `Hero "${hero.name}" (ID: ${hero.id}) joined the guild.`
    };

    addWeaponToStash(weapon: Weapon): string {
        this.stash.add(weapon);
        return `Weapon "${weapon.name}" (ID: ${weapon.id}) added to the guild stash.`
    };

    equipWeapon(heroId: number, weaponId: number): string {
        const foundHero = this.heroes.find((hero) => hero.id === heroId);

        if (!foundHero) {
            return `ERROR: Hero with ID ${heroId} not found.`
        }
        const foundWeapon = this.stash.take(weaponId);

        if (!foundWeapon) {
            return `ERROR: Weapon with ID ${weaponId} not found in the stash.`
        }

        foundHero.weapons.push(foundWeapon);
        return `Weapon "${foundWeapon.name}" equipped to hero "${foundHero.name}".`
    };

    listAllHeroes(): string[] {
        let result = [`--- Guild Roster ---`];

        const getSpecialData = function (hero: BaseHero) {
            if (hero instanceof Warrior) {
                return `Strength: ${hero.strength}`;
            } else if (hero instanceof Mage) {
                return `Mana: ${hero.mana}`;
            } else if (hero instanceof Archer) {
                return `Agility: ${hero.agility}`;
            }
        }

        this.heroes.forEach((hero) => {
            result.push(`[${hero.role}] ${hero.name} (Level: ${hero.level}, ${getSpecialData(hero)}) - Stamina: ${hero.calculateStamina()}`)
        });

        result.push('--------------------');

        return result;
    }
};
