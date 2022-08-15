import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowDeetailsComponent } from './tvshow-deetails.component';

describe('TvshowDeetailsComponent', () => {
  let component: TvshowDeetailsComponent;
  let fixture: ComponentFixture<TvshowDeetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowDeetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowDeetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
