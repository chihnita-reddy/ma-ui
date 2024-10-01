// https://github.com/7leads/ngx-cookie-service/issues/39#issuecomment-460975276
class MockCookieService {
  constructor() {
    this._cookieReg = {};
  }

  check(name) {
    return this._cookieReg[name] ? true : false;
  }

  get(name) {
    return this._cookieReg[name];
  }

  getAll() {
    return this._cookieReg;
  }

  set(name, value, expires, path, domain, secure, sameSite) {
    this._cookieReg[name] = name + '=' + value;
  }

  delete(name, path, domain) {
    delete this._cookieReg[name];
  }

  deleteAll(path, domain) {
    this._cookieReg = {};
  }
}

module.exports = {
  CookieService: MockCookieService
};
