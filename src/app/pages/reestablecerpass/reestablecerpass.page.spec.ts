import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReestablecerpassPage } from './reestablecerpass.page';

describe('ReestablecerpassPage', () => {
  let component: ReestablecerpassPage;
  let fixture: ComponentFixture<ReestablecerpassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReestablecerpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
