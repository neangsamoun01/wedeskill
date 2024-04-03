import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Check authentication status here
    if (req.isAuthenticated()) {
      next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
      res.status(401).json({ message: 'Unauthorized' }); // User is not authenticated, send 401 Unauthorized response
    }
  }
}

@Injectable()
export class GuestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Check if user is not authenticated
    if (!req.isAuthenticated()) {
      next(); // User is not authenticated, proceed to the next middleware or route handler
    } else {
      res.status(403).json({ message: 'Forbidden' }); // User is authenticated, send 403 Forbidden response
    }
  }
}