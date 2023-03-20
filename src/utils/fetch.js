// 全局注册这个方法 https://www.cnblogs.com/conglvse/p/10062449.html
exports.install = function(Vue, options) {
  Vue.prototype.httpGet = function(url, cb) {
    fetch(`${this.SERVER_API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-XSRF-TOKEN': this.$cookies.get('XSRF-TOKEN')
      },
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json())
      .then(json => {
        cb(json)
      })
      .catch(e => {
        return null
      })
  }

  Vue.prototype.httpPost = function(url, data, cb) {
    fetch(`${this.SERVER_API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-XSRF-TOKEN': this.$cookies.get('XSRF-TOKEN')
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => {
        cb(json)
      })
      .catch(e => {
        return null
      })
  }

  Vue.prototype.uploadFiles = function(url, form, cb) {
    fetch(`${this.SERVER_API_URL}${url}`, {
      headers: {
        'X-XSRF-TOKEN': this.$cookies.get('XSRF-TOKEN')
      },
      method: 'POST',
      // 为了让浏览器发送包含凭据的请求(cookie)（即使是跨域源），要将 credentials: 'include' 添加到传递给 fetch() 方法的 init 对象。
      credentials: 'include',
      body: form
    }).then(response => response.json())
      .then(json => {
        cb(json)
      })
      .catch(e => {
        return null
      })
  }
}

