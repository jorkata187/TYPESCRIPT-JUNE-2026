export enum TowerType {
    Cannon = "CANNON",
    Magic = "MAGIC",
    Ice = "ICE"
};

export interface WithId {
    id: number;
};

export interface Tower extends WithId {
    name: string;
    level: number;
    type: TowerType;
};

export interface Enemy extends WithId {
    name: string;
    health: number;
};

