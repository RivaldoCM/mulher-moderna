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
            status: 'disponivel'
          },
          {
            id: 1,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 1,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 1,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
          {
            id: 1,
            name: 'blusa',
            category: 'blusas',
            price: '29.00',
            status: 'disponivel'
          },
        ]
      });
    }
  });
}