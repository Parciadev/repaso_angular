const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    life: number;
    skills: string[];
    hometown?: string | undefined;
}

const strider: Character = {
    name: 'Strider',
    life: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

strider.hometown = 'Minas Tirith';

console.table(strider);

export {};