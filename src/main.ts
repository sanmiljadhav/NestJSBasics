import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


// APP MODULES --> YE EK BASEMODULE HAI JISME HUM SARE MODULES DEFINE KARTE HAI JO APP ME USE HO RAHE HAI
// ANd app ko create karne keliye ek base module dena hi padega
