import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.caffes.createMany({
    data: [
      {
        category: { tradicional: "tradicional" },
        name: "Expresso tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional" },
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional" },
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional", gelado: "gelado" },
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional", comLeite: "com leite" },
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional", comLeite: "com leite" },
        name: "Latte",
        description:
          "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional", comLeite: "com leite" },
        name: "Capuccino",
        description:
          "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional", comLeite: "com leite" },
        name: "Macchiato",
        description:
          "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional", comLeite: "com leite" },
        name: "Mocaccino",
        description:
          "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.9,
      },
      {
        category: { tradicional: "tradicional", comLeite: "com leite" },
        name: "Chocolate Quente",
        description:
          "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.9,
      },
      {
        category: {
          especial: "especial",
          comLeite: "com leite",
          alcoólico: "alcoólico",
        },
        name: "Cubano",
        description:
          "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.9,
      },
      {
        category: { especial: "especial" },
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.9,
      },
      {
        category: { especial: "especial" },
        name: "Irlandês",
        description:
          "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.9,
      },
      {
        category: { especial: "especial", alcoólico: "alcoólico" },
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.9,
      },
    ],
  });

  console.log(result);
}
main();
