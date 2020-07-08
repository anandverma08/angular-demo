import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveUserGuard } from './resolve-user.guard';

describe('ResolveUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveUserGuard]
    });
  });

  it('should ...', inject([ResolveUserGuard], (guard: ResolveUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
