/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BigPicsComponent } from './big-pics.component';

describe('BigPicsComponent', () => {
  let component: BigPicsComponent;
  let fixture: ComponentFixture<BigPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
