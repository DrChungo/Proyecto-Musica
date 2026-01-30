import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVideo } from './hero-video';

describe('HeroVideo', () => {
  let component: HeroVideo;
  let fixture: ComponentFixture<HeroVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
