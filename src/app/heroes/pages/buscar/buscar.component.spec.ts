import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BuscarComponent } from 'src/app/heroes/pages/buscar/buscar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('BuscarComponent', () => {
  let component: BuscarComponent;
  let fixture: ComponentFixture<BuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, MatAutocompleteModule
      ],
      declarations: [ BuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
