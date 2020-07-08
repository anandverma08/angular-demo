import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
canDeactivateRoute():boolean;
}

export class ConfirmationGuard implements CanDeactivate<CanComponentDeactivate>  {
  component : CanComponentDeactivate;
  canDeactivate(component: CanComponentDeactivate, next : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    return component.canDeactivateRoute();
  }
}
