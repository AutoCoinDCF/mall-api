// default config
import fs from 'fs';
// 引入https
import https from 'https';

// 载入证书文件
// 请注意，这里的 think.ROOT_PATH 指向的是 项目源码根目录
const options = {
  // 注意文件路径！
  key: fs.readFileSync(think.ROOT_PATH + '/ssl/Nginx/www.duchaofeng.plus.key'),
  cert: fs.readFileSync(think.ROOT_PATH + '/ssl/Nginx/www.duchaofeng.plus.crt')
};
const app = (callback, port, host, think) => {
  let server = https.createServer(options, callback);
  server.listen(port, host);
  return server;
}

module.exports = {
  default_module: 'api',
  createServer: app,
  weixin: {
    appid: '', // 小程序 appid
    secret: '', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '', // 对应快递鸟用户后台 用户ID
    appkey: '', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
};
