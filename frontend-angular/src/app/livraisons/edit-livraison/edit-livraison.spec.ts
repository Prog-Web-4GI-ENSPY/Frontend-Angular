import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLivraison } from './edit-livraison';

describe('EditLivraison', () => {
  let component: EditLivraison;
  let fixture: ComponentFixture<EditLivraison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLivraison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLivraison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
