import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuppliersModule } from './suppliers/suppliers.module';
import { SuppliersCategoryModule } from './suppliers-category/suppliers-category.module';
import { ProductsCategoryModule } from './products-category/products-category.module';
import { ProductsModule } from './products/products.module';
import { VariationsModule } from './variations/variations.module';
import { VariationOptionsModule } from './variation-options/variation-options.module';
import { ProductVariationsModule } from './product-variations/product-variations.module';
import { ProductVariationOptionsModule } from './product-variation-options/product-variation-options.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { LocalStrategy } from './auth/strategies/local.strategy';

@Module({
  imports: [
    SuppliersModule,
    SuppliersCategoryModule,
    ProductsCategoryModule,
    ProductsModule,
    VariationsModule,
    VariationOptionsModule,
    ProductVariationsModule,
    ProductVariationOptionsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService, LocalStrategy],
})
export class AppModule {}
