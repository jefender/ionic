import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcularPage } from './calcular.page';

describe('CalcularPage', () => {
  let component: CalcularPage;
  let fixture: ComponentFixture<CalcularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
