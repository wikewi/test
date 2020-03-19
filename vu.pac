function FindProxyForURL(url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  if (shExpMatch(host, "*.vu.nl")) return "SOCKS5 localhost:8888";
}
