import { Server } from "miragejs";

export function makeServer(environment = 'development'){
  return new Server({
    environment,

    routes() {
      this.get('api/products', () => {
        return [
          {
            id: 1,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel',
          },
          {
            id: 2,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 3,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 4,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 5,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 6,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 7,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 8,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 9,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 10,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 11,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 12,
            name: 'cachorro',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 13,
            name: 'cabeça',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
        ]
      });
    }
  });
}