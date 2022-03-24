import { Controller, Get, Header, Headers, Req, Res, Session } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly jwtService: JwtService) {}

  @Get('/session')
  session(@Session() session): string {
    
    session.count = session.count ? session.count + 1 : 1;

    return session.count;
  }

  @Get('/jwt')
  jwt(@Headers('authorization') authorization, @Res() res: Response) {
    if (authorization) {
      const token = authorization.split(' ')[1];
      const { count } = this.jwtService.verify(token) as any;

      const newToken = this.jwtService.sign({
        count: count + 1
      });

      res.header('authorization', 'barer ' + newToken);
      res.end(Buffer.from(count + 1 + ''));
    } else {
      const newToken = this.jwtService.sign({
        count: 1
      });

      res.header('authorization', 'barer ' + newToken);
      res.end(Buffer.from('1'));
    }
  }
}
