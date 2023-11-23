/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API - GreenLearn 🌱')
    .setDescription(
      `API do GreenLean para auxílio dos estudos para vestibulares e ENEM (Exame Nacional do Ensino Médio) - Situação de Aprendizagem do Ensino Médio da Escola SENAI`,
    )
    .setVersion('1.0')
    .setLicense('MIT', 'https://opensource.org/license/mit/')
    .addBearerAuth()
    .setContact(
      'Pedro Henrique Nieto da Silva',
      'https://devtree-pedro-nieto.vercel.app/',
      'pedronieto.2005@gmail.com',
    )

    .addTag('Auth', 'Tudo sobre autenticação e autorização', {
      description: 'Saiba mais',
      url: 'https://github.com/GreenLearn-SA',
    })

    .addTag('Usuário', 'Tudo sobre os usuários', {
      description: 'Saiba mais',
      url: 'https://github.com/GreenLearn-SA',
    })

    .addTag('Disciplina', 'Tudo sobre disciplinas', {
      description: 'Saiba mais',
      url: 'https://github.com/GreenLearn-SA',
    })

    .addTag('Conteúdo', 'Tudo sobre conteúdos', {
      description: 'Saiba mais',
      url: 'https://github.com/GreenLearn-SA',
    })

    .addTag('Server Health', 'Checar a saúde do servidor', {
      description: 'Saiba mais',
      url: 'https://github.com/GreenLearn-SA',
    })

    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());

  await app.listen(4000);
}
bootstrap();
