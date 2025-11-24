import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

export interface Product {
  id: number;
  name: string;
  currency: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private getAuthHeaders(): Record<string, string> {
    const token = sessionStorage.getItem('accessToken');
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  async getAllProducts(): Promise<Product[]> {
    const response = await fetch(`${environment.apiUrl}/products`, {
      headers: this.getAuthHeaders(),
      cache: 'no-store',
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error al obtener productos: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  }

  async getProductById(id: number): Promise<Product> {
    const response = await fetch(`${environment.apiUrl}/products/${id}`, {
      headers: this.getAuthHeaders(),
      cache: 'no-store',
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error al obtener el producto: ${response.status} - ${errorText}`);
    }
    return await response.json();
  }
}
