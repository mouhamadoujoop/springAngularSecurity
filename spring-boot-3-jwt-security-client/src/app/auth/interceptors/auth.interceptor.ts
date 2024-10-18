import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(AuthService).getAuthToken();
  if (authToken) {
    // Clone the request to add the authentication header.
    const newReq = req.clone({
                            setHeaders: {
                              Authorization: `Bearer ${authToken}`
                            }
                          });
    console.log(newReq)
    return next(newReq);
  }
  // If there is no token, pass the original request
  return next(req);
};
