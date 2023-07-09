import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PublicGuard } from 'src/app/auth/guards/public.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicGuard', () => {
  let guard: PublicGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule,
      ],
    });
    guard = TestBed.inject(PublicGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
