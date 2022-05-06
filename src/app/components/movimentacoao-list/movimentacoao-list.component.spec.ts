import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoaoListComponent } from './movimentacoao-list.component';

describe('MovimentacoaoListComponent', () => {
  let component: MovimentacoaoListComponent;
  let fixture: ComponentFixture<MovimentacoaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacoaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacoaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
