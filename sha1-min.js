sha1=function(l){return function(z){for(var j=0,a=0,f=[],k=[1732584193,4023233417,2562383102,271733878,3285377520],e,g,h,m,d,i=[],c=unescape(encodeURIComponent(z)),b=c.length;a<=b;)i[a>>2]|=(c.charCodeAt(a)||128)<<8*(3-a++%4);i[c=16*(b>>6)+14]=b>>29;for(i[++c]=b<<3&l;j<=c;j+=16){for(b=k.slice(a=0);80>a;b=[d,b[0],e<<30|e>>>2,g,h])d=f[a-3]^f[a-8]^f[a-14]^f[a-16],d=(b[0]<<5|b[0]>>>27)+b[4]+(f[a]=16>a?~~i[j+a]:d<<1|d>>>31)+1518500249,d=[d+((e=b[1])&(g=b[2])|~e&(h=b[3])),m=d+(e^g^h)+341275144,d+(e&g|e&h|g&h)+882459459,m+1535694389][0|a++/20]&l;for(a=5;a;)k[--a]=k[a]+b[a]&l}for(c="";40>a;)c+=(k[a>>3]>>4*(7-a++%8)&15).toString(16);return c}}(4294967295);
