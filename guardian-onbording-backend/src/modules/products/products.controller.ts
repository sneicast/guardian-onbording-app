import { Controller, Get, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @UseInterceptors(CacheInterceptor)
    @Get()
    findAll(){
        return this.productsService.findAll();
    }
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number){
        return this.productsService.findById(id);
    }
}

