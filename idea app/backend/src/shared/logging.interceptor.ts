import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext, next: CallHandler
    ): Observable<any>{
        console.log('[Running...]');
        const req = context.switchToHttp().getRequest();
        const now = Date.now();
        if (req) {
            const method = req.method;
            const url = req.url;
            return next.handle().pipe(
                tap(() => Logger.log(`${method} ${url} [After...] ${Date.now() - now}ms`, context.getClass().name, true))
            );
        } else {
            const ctx: any = GqlExecutionContext.create(context);
            const resolverName = ctx.constructorRef.name;
            const info = ctx.getInfo();
            return next.handle().pipe(
                tap(() => Logger.log(`${info.parentType} ${info.fieldName} [After...] ${Date.now() - now}ms`, resolverName, true))
            );
        }

    }
}