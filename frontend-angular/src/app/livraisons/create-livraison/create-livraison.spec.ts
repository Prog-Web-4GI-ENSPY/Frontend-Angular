import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLivraison } from './create-livraison';

describe('CreateLivraison', () => {
  let component: CreateLivraison;
  let fixture: ComponentFixture<CreateLivraison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLivraison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLivraison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
