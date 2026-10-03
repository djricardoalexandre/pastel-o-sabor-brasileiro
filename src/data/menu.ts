// Cardápio real do estabelecimento.
// Produtos sem preço não exibem valor até que os preços oficiais sejam informados.

export interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
  emoji?: string;
  tag?: string;
  sizes?: string[];
}

const PASTEL_IMAGE = '/images/foto_01.jpeg';
const PIZZA_IMAGE = 'https://images.pexels.com/photos/14965994/pexels-photo-14965994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const BURGER_IMAGE = 'https://images.pexels.com/photos/5179783/pexels-photo-5179783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const JUICE_IMAGE = 'https://images.pexels.com/photos/5668181/pexels-photo-5668181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DRINK_IMAGE = 'https://images.pexels.com/photos/5860659/pexels-photo-5860659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const CALDOS_E_SALGADOS: Product[] = [
  { id: 'caldo-mexicano-250', name: 'Caldo Mexicano 250 ml', emoji: '🍲' },
  { id: 'caldo-mexicano-500', name: 'Caldo Mexicano 500 ml', emoji: '🍲' },
  { id: 'caldo-peixe-250', name: 'Caldo Peixe 250 ml', emoji: '🍲' },
  { id: 'caldo-peixe-500', name: 'Caldo Peixe 500 ml', emoji: '🍲' },
  { id: 'caldo-250', name: 'Caldo 250ml', emoji: '🍲' },
  { id: 'caldo-500', name: 'Caldo 500ml', emoji: '🍲' },
  { id: 'salgado-frito', name: 'Salgado Frito', emoji: '🥟' },
  { id: 'salgado-assado', name: 'Salgado Assado', emoji: '🥟' },
  { id: 'espeto', name: 'Espeto', emoji: '🍢' },
  { id: 'espetinho-simples', name: 'Espetinho Simples', emoji: '🍢' },
  { id: 'espetinho-completo', name: 'Espetinho Completo', emoji: '🍢' },
  { id: 'picanha-na-pedra', name: 'Picanha na pedra', emoji: '🥩' },
];

export const PASTEIS_SALGADOS: Product[] = [
  { id: 'pastel-carne', name: 'Carne', image: PASTEL_IMAGE },
  { id: 'pastel-carne-queijo', name: 'Carne e Queijo', image: PASTEL_IMAGE },
  { id: 'pastel-carne-queijo-palmito', name: 'Carne / Queijo / Palmito', image: PASTEL_IMAGE },
  { id: 'pastel-presunto-queijo', name: 'Presunto e Queijo', image: PASTEL_IMAGE },
  { id: 'pastel-pizza', name: 'Pizza', image: PASTEL_IMAGE },
  { id: 'pastel-queijo', name: 'Queijo', image: PASTEL_IMAGE, tag: 'Mais pedido' },
  { id: 'pastel-frango-catupiry', name: 'Frango com Catupiry', image: PASTEL_IMAGE },
  { id: 'pastel-frango-catupiry-palmito', name: 'Frango / Catupiry / Palmito', image: PASTEL_IMAGE },
  { id: 'pastel-moda-casa', name: 'Moda da Casa', image: PASTEL_IMAGE, tag: 'Especial' },
];

export const PASTEIS_DOCES: Product[] = [
  { id: 'pastel-nutella', name: 'Nutella', image: PASTEL_IMAGE },
  { id: 'pastel-doce-leite', name: 'Doce de Leite', image: PASTEL_IMAGE },
  { id: 'pastel-ouro-branco-ovaltine', name: 'Ouro Branco / Ovaltine', image: PASTEL_IMAGE },
];

export const PIZZAS: Product[] = [
  {
    id: 'pizza-moda-casa',
    name: 'Moda da Casa',
    description: 'Molho, mussarela, milho, ervilha, azeitona, palmito, bacon, calabresa, catupiry e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
    tag: 'Especial',
  },
  {
    id: 'pizza-frango-catupiry',
    name: 'Frango com Catupiry',
    description: 'Molho, mussarela, frango, catupiry e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
  },
  {
    id: 'pizza-calabresa',
    name: 'Calabresa',
    description: 'Molho, mussarela, calabresa, cebola e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
  },
  {
    id: 'pizza-tradicional',
    name: 'Tradicional',
    description: 'Molho, mussarela, tomate, azeitona e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
  },
  {
    id: 'pizza-portuguesa',
    name: 'Portuguesa',
    description: 'Molho, mussarela, presunto, azeitona, ovo, cebola e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
  },
  {
    id: 'pizza-quatro-queijos',
    name: '4 Queijos',
    description: 'Molho, mussarela, provolone, parmesão, catupiry e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
  },
  {
    id: 'pizza-calabresa-especial',
    name: 'Calabresa Especial',
    description: 'Molho, mussarela, calabresa, azeitona, tomate, catupiry e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
  },
  {
    id: 'pizza-calabresa-catupiry',
    name: 'Calabresa com Catupiry',
    description: 'Molho, mussarela, calabresa, catupiry e orégano.',
    image: PIZZA_IMAGE,
    sizes: ['Broto', 'Pequena', 'Média', 'Grande'],
  },
];

export const LANCHES: Product[] = [
  { id: 'hot-dog', name: 'HOT DOG', description: 'Pão, molho, 2 salsichas, presunto, queijo e batata palha.', image: BURGER_IMAGE },
  { id: 'misto-quente', name: 'MISTO QUENTE', description: 'Pão francês / forma e integral, maionese, presunto, queijo e tomate.', image: BURGER_IMAGE },
  { id: 'misto-completo', name: 'MISTO COMPLETO', description: 'Pão francês / forma / integral, maionese, presunto, queijo e tomate, alface e ovo.', image: BURGER_IMAGE },
  { id: 'paulistinha', name: 'PAULISTINHA', description: 'Pão francês, maionese, filé, queijo, cebola, tomate e alface.', image: BURGER_IMAGE },
  { id: 'bagate-paulista', name: 'Bagate Paulista', image: BURGER_IMAGE },
  { id: 'x-burguer', name: 'X BURGUER', description: 'Pão, maionese, milho, hambúrguer duplo, presunto, queijo, alface e tomate.', image: BURGER_IMAGE },
  { id: 'x-bacon', name: 'X BACON', description: 'Pão, maionese, bacon, hambúrguer, presunto, queijo, tomate e alface.', image: BURGER_IMAGE, tag: 'Mais pedido' },
  { id: 'x-tudo', name: 'X TUDO', description: 'Pão, maionese, milho, bacon, calabresa, ovo, presunto, queijo, hambúrguer, tomate e alface.', image: BURGER_IMAGE, tag: 'Especial' },
  { id: 'x-bagunção', name: 'X BAGUNCÃO', description: 'Pão, maionese, hambúrguer, queijo, presunto, milho, bacon, frango, calabresa, catupiry, ovo, batata palha, alface e tomate.', image: BURGER_IMAGE },
  { id: 'x-salada', name: 'X SALADA', description: 'Pão, maionese, hambúrguer, queijo, presunto, alface e tomate.', image: BURGER_IMAGE },
  { id: 'egg', name: 'EGG', description: 'Pão, maionese, milho, hambúrguer, 2 ovos, alface e tomate.', image: BURGER_IMAGE },
  { id: 'x-egge', name: 'X-Egge', image: BURGER_IMAGE },
  { id: 'x-calabresa', name: 'X CALABRESA', description: 'Pão, maionese, milho, calabresa, presunto, queijo, tomate e alface.', image: BURGER_IMAGE },
  { id: 'x-frango-steak', name: 'X FRANGO STEAK', description: 'Pão, maionese, milho, empanado de frango, hambúrguer, queijo, alface e tomate.', image: BURGER_IMAGE },
  { id: 'x-frango', name: 'X-Frango', image: BURGER_IMAGE },
  { id: 'x-baguncinha', name: 'X BAGUNCINHA', description: 'Pão, maionese, milho, frango, bacon, calabresa, ovo, hambúrguer, presunto, queijo, catupiry, alface e tomate.', image: BURGER_IMAGE },
  { id: 'baguncao', name: 'Baguncao', image: BURGER_IMAGE },
  { id: 'baguncinha', name: 'Baguncinha', image: BURGER_IMAGE },
];

export const SUCOS: Product[] = [
  { id: 'suco-maracuja-copo', name: 'Suco Maracujá Copo', image: JUICE_IMAGE },
  { id: 'suco-maracuja-jarra', name: 'Suco Maracujá Jarra', image: JUICE_IMAGE },
  { id: 'suco-abacaxi-copo', name: 'Suco Abacaxi Copo', image: JUICE_IMAGE },
  { id: 'suco-abacaxi-jarra', name: 'Suco Abacaxi Jarra', image: JUICE_IMAGE },
  { id: 'suco-abacaxi-hortela-copo', name: 'Suco Abacaxi/Hortelã Copo', image: JUICE_IMAGE },
  { id: 'suco-abacaxi-hortela-jarra', name: 'Suco Abacaxi/Hortelã Jarra', image: JUICE_IMAGE },
  { id: 'suco-acerola-copo', name: 'Suco Acerola Copo', image: JUICE_IMAGE },
  { id: 'suco-acerola-jarra', name: 'Suco Acerola Jarra', image: JUICE_IMAGE },
  { id: 'acerola-laranja', name: 'Acerola / Laranja', image: JUICE_IMAGE },
  { id: 'cupuaçu', name: 'Cupuaçu', image: JUICE_IMAGE },
  { id: 'laranja', name: 'Laranja', image: JUICE_IMAGE },
];

export const BEBIDAS: Product[] = [
  { id: 'cerveja-original-lata', name: 'Cerveja Original Lata', image: DRINK_IMAGE },
  { id: 'cerveja-original-garrafa', name: 'Cerveja Original Garrafa', image: DRINK_IMAGE },
  { id: 'heineken-long-neck', name: 'Cerveja Heineken Long Neck', image: DRINK_IMAGE },
  { id: 'heineken-garrafa-600', name: 'Cerveja Heineken Garrafa 600ml', image: DRINK_IMAGE },
  { id: 'cerveja-lata', name: 'Cerveja Lata', image: DRINK_IMAGE },
  { id: 'cerveja-garrafa', name: 'Cerveja Garrafa', image: DRINK_IMAGE },
  { id: 'energetico', name: 'Energético', image: DRINK_IMAGE },
  { id: 'refrigerante-lata', name: 'Refrigerante Lata', image: DRINK_IMAGE },
  { id: 'refrigerante-1-litro', name: 'Refrigerante 1 Litro', image: DRINK_IMAGE },
  { id: 'refrigerante-2-litros', name: 'Refrigerante 2 Litros', image: DRINK_IMAGE },
  { id: 'agua-com-gas', name: 'Água com gás', image: DRINK_IMAGE },
  { id: 'agua-sem-gas', name: 'Água sem gás', image: DRINK_IMAGE },
];
