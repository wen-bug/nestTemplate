import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles, '这是路由守卫');
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.headers;
    return matchRoles(roles, user.authorization);
  }
}
function matchRoles(roles: string[], roles1: any): boolean {
  if (roles.includes(roles1)) {
    return true;
  }
  console.log(roles, roles1, '是否匹配');

  // throw new Error('Function not implemented.');
  return false;
}
