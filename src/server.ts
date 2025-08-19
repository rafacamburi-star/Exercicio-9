// Função genérica que retorna o mesmo array
function getData<T>(items: T[]): T[] {
    return items;
}

// Função genérica que busca item por ID
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

// Demonstração
const nomes = getData<string>(["Ana", "Bruno", "Carlos"]);
const numeros = getData<number>([10, 20, 30]);

interface IUser {
    id: number;
    nome: string;
}

const usuarios: IUser[] = [
    { id: 1, nome: "Rafa" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "José" }
];

const usuariosData = getData<IUser>(usuarios);
const usuarioEncontrado = getById<IUser>(usuarios, 2);

console.log("Nomes:", nomes);
console.log("Números:", numeros);
console.log("Usuários:", usuariosData);
console.log("Usuário encontrado:", usuarioEncontrado);
