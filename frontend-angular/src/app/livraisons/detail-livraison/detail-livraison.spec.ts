import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivraison } from './detail-livraison';

describe('DetailLivraison', () => {
  let component: DetailLivraison;
  let fixture: ComponentFixture<DetailLivraison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLivraison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLivraison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
