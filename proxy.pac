function FindProxyForURL(url, host) {

var regexpr_prox = /(2ip\.ru|\.sotogid\.com)$/;
if (regexpr_prox.test(host)) {
	return "PROXY 79.143.27.47:3128";
};

return "DIRECT";
}
