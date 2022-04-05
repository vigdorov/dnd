
export enum Cubic {
    D4 = 'd4',
    D6 = 'd6',
    D8 = 'd8',
    D10 = 'd10',
    D12 = 'd12',
    D20 = 'd20',
    D100 = 'd100',
}

export enum RoomStatus {
    Peace = 'peace',
    Fight = 'fight',
}

export enum PersonType {
    Player = 'player',
    Enemy = 'enemy',
}

export type Abilities = {
    strength: number;
    agility: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};

export type Weapon = {
    title: string;
    damage: Cubic;
};

export type InventoryItem = {
    title: string;
};

export type Spell = {
    title: string;
    damage: Cubic;
};

export type Skills = {
    title: string;
};

export type Equipment = {
    title: string;
};

export type Equipments = {
    head: Equipment;
    body: Equipment;
    hands: Equipment;
    boots: Equipment;
    ring: Equipment;
};

export type Player = {
    name: string;
    avatar: string;
    bio: string;
    abilities: Abilities;
    armor: number;
    health: number;
    maxHealth: number;
    weapons: Weapon[];
    inventory: InventoryItem[];
    spells: Spell[];
    skills: Skills;
    race: string;
    playerClass: string;
    initiative: number;
    equipment: Equipments;
    identity: string;
    money: number;
};

export type Room = {
    id: string;
    master: string;
    title: string;
    description: string;
    players: Player[];
    status: RoomStatus;
};

export type Enemy = {
    name: string;
    armor: number;
    health: number;
    maxHealth: number;
    damage: Cubic;
};

export type QueuePerson = {
    id: string;
    personType: PersonType;
};

export type Fight = {
    queue: QueuePerson[];
};

export type User = {
    id: string;
    nick: string;
    players: Player[];
    rooms: Room[];
};
