// src/services/productService.js

import { 
  mockProductCategories, 
  mockPounchFormats, 
  mockServices 
} from "../data/mockData.js";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

class ProductService {
  // Get all product categories
  async getProductCategories() {
    try {
      // Phase 1: Mock data
      return mockProductCategories;

      // Phase 2: Strapi API (uncomment when ready)
      // const response = await fetch(`${API_BASE_URL}/api/product-categories`);
      // const data = await response.json();
      // return data.data;
    } catch (error) {
      console.error("Error fetching product categories:", error);
      return [];
    }
  }

  // Get single product category by ID
  async getProductCategoryById(id) {
    try {
      // Phase 1: Mock data
      return mockProductCategories.find((p) => p.id === parseInt(id));

      // Phase 2: Strapi API
      // const response = await fetch(`${API_BASE_URL}/api/product-categories/${id}`);
      // const data = await response.json();
      // return data.data;
    } catch (error) {
      console.error("Error fetching product category:", error);
      return null;
    }
  }

  // Get all pouch formats
  async getPounchFormats() {
    try {
      // Phase 1: Mock data
      return mockPounchFormats;

      // Phase 2: Strapi API
      // const response = await fetch(`${API_BASE_URL}/api/pouch-formats`);
      // const data = await response.json();
      // return data.data;
    } catch (error) {
      console.error("Error fetching pouch formats:", error);
      return [];
    }
  }

  // Get single pouch format by ID
  async getPounchFormatById(id) {
    try {
      // Phase 1: Mock data
      return mockPounchFormats.find((p) => p.id === parseInt(id));

      // Phase 2: Strapi API
      // const response = await fetch(`${API_BASE_URL}/api/pouch-formats/${id}`);
      // const data = await response.json();
      // return data.data;
    } catch (error) {
      console.error("Error fetching pouch format:", error);
      return null;
    }
  }

  // Get all services
  async getServices() {
    try {
      // Phase 1: Mock data
      return mockServices;

      // Phase 2: Strapi API
      // const response = await fetch(`${API_BASE_URL}/api/services`);
      // const data = await response.json();
      // return data.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      return [];
    }
  }

  // Get pouch format by category (e.g., get all stand-up pouches)
  async getPounchFormatByType(type) {
    try {
      // Phase 1: Mock data
      return mockPounchFormats.find((p) => p.format === type);

      // Phase 2: Strapi API
      // const response = await fetch(
      //   `${API_BASE_URL}/api/pouch-formats?filters[format][$eq]=${type}`
      // );
      // const data = await response.json();
      // return data.data;
    } catch (error) {
      console.error("Error fetching pouch format by type:", error);
      return null;
    }
  }
}

// Export singleton instance
export default new ProductService();