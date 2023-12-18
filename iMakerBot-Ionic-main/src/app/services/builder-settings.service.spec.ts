import { TestBed } from '@angular/core/testing';

import { BuilderSettingsService } from './builder-settings.service';

describe('BuilderSettingsService', () => {
  let service: BuilderSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
