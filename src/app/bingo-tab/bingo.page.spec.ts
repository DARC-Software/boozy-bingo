import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoPage } from './bingo.page';

describe('BingoPage', () => {
  let component: BingoPage;
  let fixture: ComponentFixture<BingoPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(BingoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
