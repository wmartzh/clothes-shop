import { Request, Response } from "express";
import { CreateProductSchema } from "../models/product.models";
import productService from "../services/product.service";
import { BaseController } from "../types/base.controller";

class ProductController extends BaseController {
  async create(req: Request, res: Response) {
    try {
      const validData = await CreateProductSchema.validateAsync(req.body);

      this.responseHandler(res, await productService.create(validData), 200);
    } catch (error) {
      console.log(
        "🔰 > file: products.controller.ts > line 12 > ProductController > create > error",
        error
      );
      this.errorHandler(res, error);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      this.responseHandler(res, await productService.findAll(), 200);
    } catch (error) {
      this.errorHandler(res, error);
    }
  }
}

export default new ProductController();