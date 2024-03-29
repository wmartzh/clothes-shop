import { Application } from "express";
import exampleRouter from "./example";
import productsRouter from "./products";
export default function router(app: Application): void {
  /**
   * Every source are specifed here
   */
  app.use("/", exampleRouter);
  app.use("/products", productsRouter);
}
