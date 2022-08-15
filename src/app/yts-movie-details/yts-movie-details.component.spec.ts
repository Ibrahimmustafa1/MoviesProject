import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtsMovieDetailsComponent } from './yts-movie-details.component';

describe('YtsMovieDetailsComponent', () => {
  let component: YtsMovieDetailsComponent;
  let fixture: ComponentFixture<YtsMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtsMovieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtsMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
