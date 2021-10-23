import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscardsComponent } from './userscards.component';

describe('UserscardsComponent', () => {
  let component: UserscardsComponent;
  let fixture: ComponentFixture<UserscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserscardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
