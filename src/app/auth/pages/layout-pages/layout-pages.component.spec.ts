import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPagesComponent } from 'src/app/auth/pages/layout-pages/layout-pages.component';

describe('LayoutPagesComponent', () => {
  let component: LayoutPagesComponent;
  let fixture: ComponentFixture<LayoutPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
