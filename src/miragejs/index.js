import { Server } from "miragejs";

export function makeServer(environment = 'development'){
  return new Server({
    environment,

    routes() {
      this.get('/api/products', () => {
        return [
          {
            id: 1,
            name: 'blusa',
            category: 'blusas',
            price: '30.00',
            remaining: 5,
          },
          {
            id: 2,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 10
          },
          {
            id: 3,
            name: 'blusinha',
            category: 'blusas',
            price: '29.00',
            remaining: 2
          },
          {
            id: 4,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 1
          },
          {
            id: 5,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 25
          },
          {
            id: 6,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 0
          },
          {
            id: 7,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 9
          },
          {
            id: 8,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 25
          },
          {
            id: 9,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 120
          },
          {
            id: 10,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 25
          },
          {
            id: 11,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            remaining: 25
          },
          {
            id: 12,
            name: 'cachorro',
            category: 'blusas',
            price: '29.00',
            remaining: 25
          },
          {
            id: 13,
            name: 'cabeça',
            category: 'blusas',
            price: '29.00',
            remaining: 25
          },
        ]
      });
    }
  });
}