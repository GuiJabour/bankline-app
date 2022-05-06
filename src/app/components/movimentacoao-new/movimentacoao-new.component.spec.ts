import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoaoNewComponent } from './movimentacoao-new.component';

describe('MovimentacoaoNewComponent', () => {
  let component: MovimentacoaoNewComponent;
  let fixture: ComponentFixture<MovimentacoaoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacoaoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacoaoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
