import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { products } from './products.data';

@Injectable()
export class ProductsService {
    findAll(): Product[] {
        return products;
    }

    findById(id: number): Product {
        const product = products.find(product => product.id === id);
        if(!product) {
            throw new NotFoundException(`El producto con el id ${id} no existe`);
        }
        return product;
    }
}
