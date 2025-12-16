import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivraisons } from './list-livraisons';

describe('ListLivraisons', () => {
  let component: ListLivraisons;
  let fixture: ComponentFixture<ListLivraisons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLivraisons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLivraisons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
