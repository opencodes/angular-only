import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import { HttpService } from './http.service';

describe('HttpService -', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule
        ],
        providers: [
            HttpService,
            { provide: XHRBackend, useClass: MockBackend }
        ]
      });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  describe('Functions- ', () => {
      describe('get(url) - ', () => {

          it('should get a response',
              inject([XHRBackend, HttpService], (mockBackend: MockBackend, service: HttpService) => {
                  const body = { content: 'test body' };
                  const status = 200;
                  mockBackend.connections.subscribe((connection: MockConnection) => {
                      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
                  });
                  service.get('whatever').subscribe(response => {
                      expect(response).not.toBeNull();
                  });
              }));

          it('should call http.get',
              inject([XHRBackend, HttpService], (mockBackend: MockBackend, service: HttpService) => {
                  const body = { content: 'test body' };
                  const status = 200;
                  mockBackend.connections.subscribe((connection: MockConnection) => {
                      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
                      expect(connection.request.method).toBe(RequestMethod.Get);
                  });
                  service.get('whatever');
              }));

          it('should call to url as first param',
              inject([XHRBackend, HttpService], (mockBackend: MockBackend, service: HttpService) => {
                  const body = { content: 'test body' };
                  const status = 200;
                  const testUrl = 'testURL';
                  mockBackend.connections.subscribe((connection: MockConnection) => {
                      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
                      expect(connection.request.url).toBe(testUrl);
                  });
                  service.get(testUrl);
              }));

          it('should attach second param as comma deliminated "properties" query',
              inject([XHRBackend, HttpService], (mockBackend: MockBackend, service: HttpService) => {
                  const body = { content: 'test body' };
                  const status = 200;
                  const testUrl = 'testURL';
                  const testProperties = ['property1', 'property2'];
                  mockBackend.connections.subscribe((connection: MockConnection) => {
                      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
                      expect(connection.request.url).toBe(`${testUrl}?properties=${testProperties.join(',')}`);
                  });
                  service.get(testUrl, testProperties);
              }));

          it('should attach third param as "orderBy" query',
              inject([XHRBackend, HttpService], (mockBackend: MockBackend, service: HttpService) => {
                  const body = { content: 'test body' };
                  const status = 200;
                  const testUrl = 'testURL';
                  const orderBy = 'propertyToOrderBy';
                  mockBackend.connections.subscribe((connection: MockConnection) => {
                      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
                      expect(connection.request.url).toBe(`${testUrl}?orderBy=${orderBy}`);
                  });
                  service.get(testUrl, null, orderBy);
              }));

          it('should attach fourth param as "skip" query',
              inject([XHRBackend, HttpService], (mockBackend: MockBackend, service: HttpService) => {
                  const body = { content: 'test body' };
                  const status = 200;
                  const testUrl = 'testURL';
                  const skip = 5;
                  mockBackend.connections.subscribe((connection: MockConnection) => {
                      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
                      expect(connection.request.url).toBe(`${testUrl}?skip=${skip}`);
                  });
                  service.get(testUrl, null, null, skip);
              }));

          it('should attach fifth param as "take" query',
              inject([XHRBackend, HttpService], (mockBackend: MockBackend, service: HttpService) => {
                  const body = { content: 'test body' };
                  const status = 200;
                  const testUrl = 'testURL';
                  const take = 6;
                  mockBackend.connections.subscribe((connection: MockConnection) => {
                      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
                      expect(connection.request.url).toBe(`${testUrl}?take=${take}`);
                  });
                  service.get(testUrl, null, null, null, take);
              }));
      });
  });

});
