import { Injectable, CanActivate, ExecutionContext, HttpException, HttpService, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
        return false;
    }
    
    request.user = await this.validateToken(request.headers.authorization);
    /*
        // request.user
        {
            id: '03d650c1-88a2-492c-bcdd-403d0ea4a882',
            username: 'user 22',
            iat: 1606791496,
            exp: 1607396296
        }
    */
    return true;
    // return this.validateRequest(request);
  }

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') { // bearer token
        throw new HttpException('Invalid Token', HttpStatus.FORBIDDEN);
    }
    const token = auth.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    } catch(err) {
        const message = 'Token error: ' + (err.message || err.name);
        throw new HttpException(message, HttpStatus.FORBIDDEN);
    }
  }
}