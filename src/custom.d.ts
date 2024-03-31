declare namespace Express {
    interface Request {
      isAuthenticated(): boolean; // Define the isAuthenticated method
      user: User; // If using Passport.js or similar, define the user property
    }
  }