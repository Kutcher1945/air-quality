(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52168,(e,t,i)=>{"use strict";function n(e,t,i){i=i||2;var n,d,p,m,_,y,b,x=t&&t.length,w=x?t[0]*i:e.length,P=r(e,0,w,i,!0),C=[];if(!P||P.next===P.prev)return C;if(x&&(P=function(e,t,i,n){var a,u,h,d,p,m=[];for(a=0,u=t.length;a<u;a++)h=t[a]*n,d=a<u-1?t[a+1]*n:e.length,(p=r(e,h,d,n,!1))===p.next&&(p.steiner=!0),m.push(function(e){var t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e)return i}(p));for(m.sort(o),a=0;a<m.length;a++)i=function(e,t){var i=function(e,t){var i,n,r,s=t,o=e.x,a=e.y,u=-1/0;do{if(a<=s.y&&a>=s.next.y&&s.next.y!==s.y){var h=s.x+(a-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(h<=o&&h>u&&(u=h,r=s.x<s.next.x?s:s.next,h===o))return r}s=s.next}while(s!==t)if(!r)return null;var d,p=r,g=r.x,m=r.y,v=1/0;s=r;do{o>=s.x&&s.x>=g&&o!==s.x&&l(a<m?o:u,a,g,m,a<m?u:o,a,s.x,s.y)&&(d=Math.abs(a-s.y)/(o-s.x),f(s,e)&&(d<v||d===v&&(s.x>r.x||s.x===r.x&&(i=r,n=s,0>c(i.prev,i,n.prev)&&0>c(n.next,i,i.next))))&&(r=s,v=d)),s=s.next}while(s!==p)return r}(e,t);if(!i)return t;var n=g(i,e);return s(n,n.next),s(i,i.next)}(m[a],i);return i}(e,t,P,i)),e.length>80*i){n=p=e[0],d=m=e[1];for(var M=i;M<w;M+=i)_=e[M],y=e[M+1],_<n&&(n=_),y<d&&(d=y),_>p&&(p=_),y>m&&(m=y);b=0!==(b=Math.max(p-n,m-d))?32767/b:0}return function e(t,i,n,r,o,d,p){if(t){!p&&d&&function(e,t,i,n){var r=e;do 0===r.z&&(r.z=a(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e)r.prevZ.nextZ=null,r.prevZ=null,function(e){var t,i,n,r,s,o,a,l,c=1;do{for(i=e,e=null,s=null,o=0;i;){for(o++,n=i,a=0,t=0;t<c&&(a++,n=n.nextZ);t++);for(l=c;a>0||l>0&&n;)0!==a&&(0===l||!n||i.z<=n.z)?(r=i,i=i.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;i=n}s.nextZ=null,c*=2}while(o>1)}(r)}(t,r,o,d);for(var m,_,y=t;t.prev!==t.next;){if(m=t.prev,_=t.next,d?function(e,t,i,n){var r=e.prev,s=e.next;if(c(r,e,s)>=0)return!1;for(var o=r.x,u=e.x,h=s.x,d=r.y,p=e.y,f=s.y,g=o<u?o<h?o:h:u<h?u:h,m=d<p?d<f?d:f:p<f?p:f,v=o>u?o>h?o:h:u>h?u:h,_=d>p?d>f?d:f:p>f?p:f,y=a(g,m,t,i,n),b=a(v,_,t,i,n),x=e.prevZ,w=e.nextZ;x&&x.z>=y&&w&&w.z<=b;){if(x.x>=g&&x.x<=v&&x.y>=m&&x.y<=_&&x!==r&&x!==s&&l(o,d,u,p,h,f,x.x,x.y)&&c(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=g&&w.x<=v&&w.y>=m&&w.y<=_&&w!==r&&w!==s&&l(o,d,u,p,h,f,w.x,w.y)&&c(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=y;){if(x.x>=g&&x.x<=v&&x.y>=m&&x.y<=_&&x!==r&&x!==s&&l(o,d,u,p,h,f,x.x,x.y)&&c(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=b;){if(w.x>=g&&w.x<=v&&w.y>=m&&w.y<=_&&w!==r&&w!==s&&l(o,d,u,p,h,f,w.x,w.y)&&c(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}(t,r,o,d):function(e){var t=e.prev,i=e.next;if(c(t,e,i)>=0)return!1;for(var n=t.x,r=e.x,s=i.x,o=t.y,a=e.y,u=i.y,h=n<r?n<s?n:s:r<s?r:s,d=o<a?o<u?o:u:a<u?a:u,p=n>r?n>s?n:s:r>s?r:s,f=o>a?o>u?o:u:a>u?a:u,g=i.next;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&l(n,o,r,a,s,u,g.x,g.y)&&c(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}(t)){i.push(m.i/n|0),i.push(t.i/n|0),i.push(_.i/n|0),v(t),t=_.next,y=_.next;continue}if((t=_)===y){p?1===p?e(t=function(e,t,i){var n=e;do{var r=n.prev,o=n.next.next;!u(r,o)&&h(r,n,n.next,o)&&f(r,o)&&f(o,r)&&(t.push(r.i/i|0),t.push(n.i/i|0),t.push(o.i/i|0),v(n),v(n.next),n=e=o),n=n.next}while(n!==e)return s(n)}(s(t),i,n),i,n,r,o,d,2):2===p&&function(t,i,n,r,o,a){var l=t;do{for(var d,p,m=l.next.next;m!==l.prev;){if(l.i!==m.i&&(d=l,p=m,d.next.i!==p.i&&d.prev.i!==p.i&&!function(e,t){var i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&h(i,i.next,e,t))return!0;i=i.next}while(i!==e)return!1}(d,p)&&(f(d,p)&&f(p,d)&&function(e,t){var i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e)return n}(d,p)&&(c(d.prev,d,p.prev)||c(d,p.prev,p))||u(d,p)&&c(d.prev,d,d.next)>0&&c(p.prev,p,p.next)>0))){var v=g(l,m);l=s(l,l.next),v=s(v,v.next),e(l,i,n,r,o,a,0),e(v,i,n,r,o,a,0);return}m=m.next}l=l.next}while(l!==t)}(t,i,n,r,o,d):e(s(t),i,n,r,o,d,1);break}}}}(P,C,i,n,d,b,0),C}function r(e,t,i,n,r){var s,o;if(r===y(e,t,i,n)>0)for(s=t;s<i;s+=n)o=m(s,e[s],e[s+1],o);else for(s=i-n;s>=t;s-=n)o=m(s,e[s],e[s+1],o);return o&&u(o,o.next)&&(v(o),o=o.next),o}function s(e,t){if(!e)return e;t||(t=e);var i,n=e;do if(i=!1,!n.steiner&&(u(n,n.next)||0===c(n.prev,n,n.next))){if(v(n),(n=t=n.prev)===n.next)break;i=!0}else n=n.next;while(i||n!==t)return t}function o(e,t){return e.x-t.x}function a(e,t,i,n,r){return(e=((e=((e=((e=((e=(e-i)*r|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-n)*r|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function l(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function c(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function u(e,t){return e.x===t.x&&e.y===t.y}function h(e,t,i,n){var r=p(c(e,t,i)),s=p(c(e,t,n)),o=p(c(i,n,e)),a=p(c(i,n,t));return!!(r!==s&&o!==a||0===r&&d(e,i,t)||0===s&&d(e,n,t)||0===o&&d(i,e,n)||0===a&&d(i,t,n))}function d(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function p(e){return e>0?1:e<0?-1:0}function f(e,t){return 0>c(e.prev,e,e.next)?c(e,t,e.next)>=0&&c(e,e.prev,t)>=0:0>c(e,t,e.prev)||0>c(e,e.next,t)}function g(e,t){var i=new _(e.i,e.x,e.y),n=new _(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function m(e,t,i,n){var r=new _(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function v(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function y(e,t,i,n){for(var r=0,s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}t.exports=n,t.exports.default=n,n.deviation=function(e,t,i,n){var r=t&&t.length,s=r?t[0]*i:e.length,o=Math.abs(y(e,0,s,i));if(r)for(var a=0,l=t.length;a<l;a++){var c=t[a]*i,u=a<l-1?t[a+1]*i:e.length;o-=Math.abs(y(e,c,u,i))}var h=0;for(a=0;a<n.length;a+=3){var d=n[a]*i,p=n[a+1]*i,f=n[a+2]*i;h+=Math.abs((e[d]-e[f])*(e[p+1]-e[d+1])-(e[d]-e[p])*(e[f+1]-e[d+1]))}return 0===o&&0===h?0:Math.abs((h-o)/o)},n.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},n=0,r=0;r<e.length;r++){for(var s=0;s<e[r].length;s++)for(var o=0;o<t;o++)i.vertices.push(e[r][s][o]);r>0&&(n+=e[r-1].length,i.holes.push(n))}return i}},38492,(e,t,i)=>{i.read=function(e,t,i,n,r){var s,o,a=8*r-n-1,l=(1<<a)-1,c=l>>1,u=-7,h=i?r-1:0,d=i?-1:1,p=e[t+h];for(h+=d,s=p&(1<<-u)-1,p>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,n),s-=c}return(p?-1:1)*o*Math.pow(2,s-n)},i.write=function(e,t,i,n,r,s){var o,a,l,c=8*s-r-1,u=(1<<c)-1,h=u>>1,d=5960464477539062e-23*(23===r),p=n?0:s-1,f=n?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,r),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;e[i+p]=255&a,p+=f,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[i+p]=255&o,p+=f,o/=256,c-=8);e[i+p-f]|=128*g}},4109,(e,t,i)=>{"use strict";t.exports=r;var n=e.r(38492);function r(e){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(e)?e:new Uint8Array(e||0),this.pos=0,this.type=0,this.length=this.buf.length}r.Varint=0,r.Fixed64=1,r.Bytes=2,r.Fixed32=5;var s="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8");function o(e){return e.type===r.Bytes?e.readVarint()+e.pos:e.pos+1}function a(e,t,i){return i?0x100000000*t+(e>>>0):(t>>>0)*0x100000000+(e>>>0)}function l(e,t,i){var n=t<=16383?1:t<=2097151?2:t<=0xfffffff?3:Math.floor(Math.log(t)/(7*Math.LN2));i.realloc(n);for(var r=i.pos-1;r>=e;r--)i.buf[r+n]=i.buf[r]}function c(e,t){for(var i=0;i<e.length;i++)t.writeVarint(e[i])}function u(e,t){for(var i=0;i<e.length;i++)t.writeSVarint(e[i])}function h(e,t){for(var i=0;i<e.length;i++)t.writeFloat(e[i])}function d(e,t){for(var i=0;i<e.length;i++)t.writeDouble(e[i])}function p(e,t){for(var i=0;i<e.length;i++)t.writeBoolean(e[i])}function f(e,t){for(var i=0;i<e.length;i++)t.writeFixed32(e[i])}function g(e,t){for(var i=0;i<e.length;i++)t.writeSFixed32(e[i])}function m(e,t){for(var i=0;i<e.length;i++)t.writeFixed64(e[i])}function v(e,t){for(var i=0;i<e.length;i++)t.writeSFixed64(e[i])}function _(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+0x1000000*e[t+3]}function y(e,t,i){e[i]=t,e[i+1]=t>>>8,e[i+2]=t>>>16,e[i+3]=t>>>24}function b(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+(e[t+3]<<24)}r.prototype={destroy:function(){this.buf=null},readFields:function(e,t,i){for(i=i||this.length;this.pos<i;){var n=this.readVarint(),r=n>>3,s=this.pos;this.type=7&n,e(r,t,this),this.pos===s&&this.skip(n)}return t},readMessage:function(e,t){return this.readFields(e,t,this.readVarint()+this.pos)},readFixed32:function(){var e=_(this.buf,this.pos);return this.pos+=4,e},readSFixed32:function(){var e=b(this.buf,this.pos);return this.pos+=4,e},readFixed64:function(){var e=_(this.buf,this.pos)+0x100000000*_(this.buf,this.pos+4);return this.pos+=8,e},readSFixed64:function(){var e=_(this.buf,this.pos)+0x100000000*b(this.buf,this.pos+4);return this.pos+=8,e},readFloat:function(){var e=n.read(this.buf,this.pos,!0,23,4);return this.pos+=4,e},readDouble:function(){var e=n.read(this.buf,this.pos,!0,52,8);return this.pos+=8,e},readVarint:function(e){var t,i,n=this.buf;return(t=127&(i=n[this.pos++]),i<128||(t|=(127&(i=n[this.pos++]))<<7,i<128||(t|=(127&(i=n[this.pos++]))<<14,i<128||(t|=(127&(i=n[this.pos++]))<<21,i<128))))?t:function(e,t,i){var n,r,s=i.buf;if(n=(112&(r=s[i.pos++]))>>4,r<128||(n|=(127&(r=s[i.pos++]))<<3,r<128)||(n|=(127&(r=s[i.pos++]))<<10,r<128)||(n|=(127&(r=s[i.pos++]))<<17,r<128)||(n|=(127&(r=s[i.pos++]))<<24,r<128)||(n|=(1&(r=s[i.pos++]))<<31,r<128))return a(e,n,t);throw Error("Expected varint not more than 10 bytes")}(t|=(15&(i=n[this.pos]))<<28,e,this)},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var e=this.readVarint();return e%2==1?-((e+1)/2):e/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var e,t,i,n=this.readVarint()+this.pos,r=this.pos;return(this.pos=n,n-r>=12&&s)?(e=this.buf,t=r,i=n,s.decode(e.subarray(t,i))):function(e,t,i){for(var n="",r=t;r<i;){var s,o,a,l=e[r],c=null,u=l>239?4:l>223?3:l>191?2:1;if(r+u>i)break;1===u?l<128&&(c=l):2===u?(192&(s=e[r+1]))==128&&(c=(31&l)<<6|63&s)<=127&&(c=null):3===u?(s=e[r+1],o=e[r+2],(192&s)==128&&(192&o)==128&&((c=(15&l)<<12|(63&s)<<6|63&o)<=2047||c>=55296&&c<=57343)&&(c=null)):4===u&&(s=e[r+1],o=e[r+2],a=e[r+3],(192&s)==128&&(192&o)==128&&(192&a)==128&&((c=(15&l)<<18|(63&s)<<12|(63&o)<<6|63&a)<=65535||c>=1114112)&&(c=null)),null===c?(c=65533,u=1):c>65535&&(c-=65536,n+=String.fromCharCode(c>>>10&1023|55296),c=56320|1023&c),n+=String.fromCharCode(c),r+=u}return n}(this.buf,r,n)},readBytes:function(){var e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t},readPackedVarint:function(e,t){if(this.type!==r.Bytes)return e.push(this.readVarint(t));var i=o(this);for(e=e||[];this.pos<i;)e.push(this.readVarint(t));return e},readPackedSVarint:function(e){if(this.type!==r.Bytes)return e.push(this.readSVarint());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readSVarint());return e},readPackedBoolean:function(e){if(this.type!==r.Bytes)return e.push(this.readBoolean());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readBoolean());return e},readPackedFloat:function(e){if(this.type!==r.Bytes)return e.push(this.readFloat());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readFloat());return e},readPackedDouble:function(e){if(this.type!==r.Bytes)return e.push(this.readDouble());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readDouble());return e},readPackedFixed32:function(e){if(this.type!==r.Bytes)return e.push(this.readFixed32());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readFixed32());return e},readPackedSFixed32:function(e){if(this.type!==r.Bytes)return e.push(this.readSFixed32());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed32());return e},readPackedFixed64:function(e){if(this.type!==r.Bytes)return e.push(this.readFixed64());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readFixed64());return e},readPackedSFixed64:function(e){if(this.type!==r.Bytes)return e.push(this.readSFixed64());var t=o(this);for(e=e||[];this.pos<t;)e.push(this.readSFixed64());return e},skip:function(e){var t=7&e;if(t===r.Varint)for(;this.buf[this.pos++]>127;);else if(t===r.Bytes)this.pos=this.readVarint()+this.pos;else if(t===r.Fixed32)this.pos+=4;else if(t===r.Fixed64)this.pos+=8;else throw Error("Unimplemented type: "+t)},writeTag:function(e,t){this.writeVarint(e<<3|t)},realloc:function(e){for(var t=this.length||16;t<this.pos+e;)t*=2;if(t!==this.length){var i=new Uint8Array(t);i.set(this.buf),this.buf=i,this.length=t}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(e){this.realloc(4),y(this.buf,e,this.pos),this.pos+=4},writeSFixed32:function(e){this.realloc(4),y(this.buf,e,this.pos),this.pos+=4},writeFixed64:function(e){this.realloc(8),y(this.buf,-1&e,this.pos),y(this.buf,Math.floor(23283064365386963e-26*e),this.pos+4),this.pos+=8},writeSFixed64:function(e){this.realloc(8),y(this.buf,-1&e,this.pos),y(this.buf,Math.floor(23283064365386963e-26*e),this.pos+4),this.pos+=8},writeVarint:function(e){(e=+e||0)>0xfffffff||e<0?function(e,t){var i,n,r,s,o,a,l,c;if(e>=0?(i=e%0x100000000|0,n=e/0x100000000|0):(i=~(-e%0x100000000),n=~(-e/0x100000000),0xffffffff^i?i=i+1|0:(i=0,n=n+1|0)),e>=0xffffffffffffffff||e<-0xffffffffffffffff)throw Error("Given varint doesn't fit into 10 bytes");t.realloc(10),r=i,s=0,(o=t).buf[o.pos++]=127&r|128,r>>>=7,o.buf[o.pos++]=127&r|128,r>>>=7,o.buf[o.pos++]=127&r|128,r>>>=7,o.buf[o.pos++]=127&r|128,r>>>=7,o.buf[o.pos]=127&r,a=n,l=t,c=(7&a)<<4,l.buf[l.pos++]|=c|128*!!(a>>>=3),a&&(l.buf[l.pos++]=127&a|128*!!(a>>>=7),!a||(l.buf[l.pos++]=127&a|128*!!(a>>>=7),a&&(l.buf[l.pos++]=127&a|128*!!(a>>>=7),!a||(l.buf[l.pos++]=127&a|128*!!(a>>>=7),a&&(l.buf[l.pos++]=127&a)))))}(e,this):(this.realloc(4),this.buf[this.pos++]=127&e|128*(e>127),e<=127||(this.buf[this.pos++]=127&(e>>>=7)|128*(e>127),e<=127||(this.buf[this.pos++]=127&(e>>>=7)|128*(e>127),e<=127||(this.buf[this.pos++]=e>>>7&127))))},writeSVarint:function(e){this.writeVarint(e<0?-(2*e)-1:2*e)},writeBoolean:function(e){this.writeVarint(!!e)},writeString:function(e){e=String(e),this.realloc(4*e.length),this.pos++;var t=this.pos;this.pos=function(e,t,i){for(var n,r,s=0;s<t.length;s++){if((n=t.charCodeAt(s))>55295&&n<57344)if(r)if(n<56320){e[i++]=239,e[i++]=191,e[i++]=189,r=n;continue}else n=r-55296<<10|n-56320|65536,r=null;else{n>56319||s+1===t.length?(e[i++]=239,e[i++]=191,e[i++]=189):r=n;continue}else r&&(e[i++]=239,e[i++]=191,e[i++]=189,r=null);n<128?e[i++]=n:(n<2048?e[i++]=n>>6|192:(n<65536?e[i++]=n>>12|224:(e[i++]=n>>18|240,e[i++]=n>>12&63|128),e[i++]=n>>6&63|128),e[i++]=63&n|128)}return i}(this.buf,e,this.pos);var i=this.pos-t;i>=128&&l(t,i,this),this.pos=t-1,this.writeVarint(i),this.pos+=i},writeFloat:function(e){this.realloc(4),n.write(this.buf,e,this.pos,!0,23,4),this.pos+=4},writeDouble:function(e){this.realloc(8),n.write(this.buf,e,this.pos,!0,52,8),this.pos+=8},writeBytes:function(e){var t=e.length;this.writeVarint(t),this.realloc(t);for(var i=0;i<t;i++)this.buf[this.pos++]=e[i]},writeRawMessage:function(e,t){this.pos++;var i=this.pos;e(t,this);var n=this.pos-i;n>=128&&l(i,n,this),this.pos=i-1,this.writeVarint(n),this.pos+=n},writeMessage:function(e,t,i){this.writeTag(e,r.Bytes),this.writeRawMessage(t,i)},writePackedVarint:function(e,t){t.length&&this.writeMessage(e,c,t)},writePackedSVarint:function(e,t){t.length&&this.writeMessage(e,u,t)},writePackedBoolean:function(e,t){t.length&&this.writeMessage(e,p,t)},writePackedFloat:function(e,t){t.length&&this.writeMessage(e,h,t)},writePackedDouble:function(e,t){t.length&&this.writeMessage(e,d,t)},writePackedFixed32:function(e,t){t.length&&this.writeMessage(e,f,t)},writePackedSFixed32:function(e,t){t.length&&this.writeMessage(e,g,t)},writePackedFixed64:function(e,t){t.length&&this.writeMessage(e,m,t)},writePackedSFixed64:function(e,t){t.length&&this.writeMessage(e,v,t)},writeBytesField:function(e,t){this.writeTag(e,r.Bytes),this.writeBytes(t)},writeFixed32Field:function(e,t){this.writeTag(e,r.Fixed32),this.writeFixed32(t)},writeSFixed32Field:function(e,t){this.writeTag(e,r.Fixed32),this.writeSFixed32(t)},writeFixed64Field:function(e,t){this.writeTag(e,r.Fixed64),this.writeFixed64(t)},writeSFixed64Field:function(e,t){this.writeTag(e,r.Fixed64),this.writeSFixed64(t)},writeVarintField:function(e,t){this.writeTag(e,r.Varint),this.writeVarint(t)},writeSVarintField:function(e,t){this.writeTag(e,r.Varint),this.writeSVarint(t)},writeStringField:function(e,t){this.writeTag(e,r.Bytes),this.writeString(t)},writeFloatField:function(e,t){this.writeTag(e,r.Fixed32),this.writeFloat(t)},writeDoubleField:function(e,t){this.writeTag(e,r.Fixed64),this.writeDouble(t)},writeBooleanField:function(e,t){this.writeVarintField(e,!!t)}}},10875,e=>{"use strict";let t,i,n,r,s,o,a,l,c,u,h,d,p,f,g;var m,v,_,y,b,x,w,P,C,M,S=e.i(47167),E=e.i(43476),L=e.i(71645),A=e.i(63178),T=e.i(71725);let k=1,I=1;class O{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;constructor(){}addChannel(e){let{delay:t=0,duration:i=1/0,rate:n=1,repeat:r=1}=e,s=k++,o={time:0,delay:t,duration:i,rate:n,repeat:r};return this._setChannelTime(o,this.time),this.channels.set(s,o),s}removeChannel(e){for(let[t,i]of(this.channels.delete(e),this.animations))i.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return void 0!==t&&this.time>=t.delay+t.duration*t.repeat}getTime(e){if(void 0===e)return this.time;let t=this.channels.get(e);return void 0===t?-1:t.time}setTime(e){for(let t of(this.time=Math.max(0,e),this.channels.values()))this._setChannelTime(t,this.time);for(let e of this.animations.values()){let{animation:t,channel:i}=e;t.setTime(this.getTime(i))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let i=I++;return this.animations.set(i,{animation:e,channel:t}),e.setTime(this.getTime(t)),i}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(-1===this.lastEngineTime&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let i=t-e.delay;i>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,i)%e.duration,e.time*=e.rate)}}var R=e.i(96875);Uint32Array.BYTES_PER_ELEMENT,B("colors");let z=B("floatColors");j("colors");let F=j("floatColors");function B(e){return`\
layout(std140) uniform ${e}Uniforms {
  float useByteColors;
} ${e};

vec3 ${e}_normalize(vec3 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_normalize(vec4 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 ${e}_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 ${e}_premultiply_alpha(vec4 inputColor) {
  return ${e}_premultiplyAlpha(inputColor);
}

vec4 ${e}_unpremultiply_alpha(vec4 inputColor) {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}function j(e){return`\
struct ${e}Uniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> ${e} : ${e}Uniforms;

fn ${e}_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn ${e}_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn ${e}_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_premultiplyAlpha(inputColor);
}

fn ${e}_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}let D={name:"floatColors",props:{},uniforms:{},vs:z,fs:z,source:F,uniformTypes:{useByteColors:"f32"},defaultUniforms:{useByteColors:!0}};var N=e.i(12828);let V=`\
precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,U=`\
// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`;function G(e,t=!0){return e??t}function W(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}let $={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",directionalLightCount:"i32",pointLightCount:"i32",spotLightCount:"i32",ambientColor:"vec3<f32>",lights:[{color:"vec3<f32>",position:"vec3<f32>",direction:"vec3<f32>",attenuation:"vec3<f32>",coneCos:"vec2<f32>"},5]},defaultUniforms:H(),bindingLayout:[{name:"lighting",group:2}],firstBindingSlot:0,source:U,vs:V,fs:V,getUniforms:function(e,t={}){if(!(e=e?{...e}:e))return H();e.lights&&(e={...e,...function(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let i of e||[])switch(i.type){case"ambient":t.ambientLight=i;break;case"directional":t.directionalLights?.push(i);break;case"point":t.pointLights?.push(i);break;case"spot":t.spotLights?.push(i)}return t}(e.lights),lights:void 0});let{useByteColors:i,ambientLight:n,pointLights:r,spotLights:s,directionalLights:o}=e||{};if(!(n||r&&r.length>0||s&&s.length>0||o&&o.length>0))return{...H(),enabled:0};let a={...H(),...function({useByteColors:e,ambientLight:t,pointLights:i=[],spotLights:n=[],directionalLights:r=[]}){let s=Z(),o=0,a=0,l=0,c=0;for(let t of i){if(o>=5)break;s[o]={...s[o],color:q(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},o++,a++}for(let t of n){var u;if(o>=5)break;s[o]={...s[o],color:q(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:[Math.cos((u=t).innerConeAngle??0),Math.cos(u.outerConeAngle??Math.PI/4)]},o++,l++}for(let t of r){if(o>=5)break;s[o]={...s[o],color:q(t,e),direction:t.direction},o++,c++}return i.length+n.length+r.length>5&&N.log.warn("MAX_LIGHTS exceeded, truncating to 5")(),{ambientColor:q(t,e),directionalLightCount:c,pointLightCount:a,spotLightCount:l,lights:s}}({useByteColors:i,ambientLight:n,pointLights:r,spotLights:s,directionalLights:o})};return void 0!==e.enabled&&(a.enabled=+!!e.enabled),a}};function q(e={},t){let{color:i=[0,0,0],intensity:n=1}=e;return W(i,G(t,!0)).map(e=>e*n)}function H(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:Z()}}function Z(){return Array.from({length:5},()=>({color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}))}let Y=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,X=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,K=`\
struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,J={props:{},name:"gouraudMaterial",bindingLayout:[{name:"gouraudMaterial",group:3}],vs:X.replace("phongMaterial","gouraudMaterial"),fs:Y.replace("phongMaterial","gouraudMaterial"),source:K.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[$,D],uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...J.defaultUniforms,...e})},Q={name:"phongMaterial",firstBindingSlot:0,bindingLayout:[{name:"phongMaterial",group:3}],dependencies:[$,D],source:K,vs:Y,fs:X,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...Q.defaultUniforms,...e})},ee=`\
layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,et={name:"layer",source:`\
struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,vs:ee,fs:ee,getUniforms:e=>({opacity:Math.pow(e.opacity,1/2.2)}),uniformTypes:{opacity:"f32"}},ei={name:"color",dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:e=>({})},en="#define SMOOTH_EDGE_RADIUS 0.5",er={name:"geometry",source:`\
const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,vs:`\
${en}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${en}

struct FragmentGeometry {
  vec2 uv;
};
FragmentGeometry geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`};var es=e.i(18342);let eo="undefined"!=typeof Float32Array?Float32Array:Array,ea=Math.random;function el(e){return e>=0?Math.round(e):e%.5==0?Math.floor(e):Math.round(e)}function ec(){let e=new eo(16);return eo!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function eu(e){let t=new eo(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function eh(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function ed(e,t,i,n,r,s,o,a,l,c,u,h,d,p,f,g){let m=new eo(16);return m[0]=e,m[1]=t,m[2]=i,m[3]=n,m[4]=r,m[5]=s,m[6]=o,m[7]=a,m[8]=l,m[9]=c,m[10]=u,m[11]=h,m[12]=d,m[13]=p,m[14]=f,m[15]=g,m}function ep(e,t,i,n,r,s,o,a,l,c,u,h,d,p,f,g,m){return e[0]=t,e[1]=i,e[2]=n,e[3]=r,e[4]=s,e[5]=o,e[6]=a,e[7]=l,e[8]=c,e[9]=u,e[10]=h,e[11]=d,e[12]=p,e[13]=f,e[14]=g,e[15]=m,e}function ef(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function eg(e,t){if(e===t){let i=t[1],n=t[2],r=t[3],s=t[6],o=t[7],a=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=i,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=s,e[11]=t[14],e[12]=r,e[13]=o,e[14]=a}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function em(e,t){let i=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],f=t[12],g=t[13],m=t[14],v=t[15],_=i*a-n*o,y=i*l-r*o,b=i*c-s*o,x=n*l-r*a,w=n*c-s*a,P=r*c-s*l,C=u*g-h*f,M=u*m-d*f,S=u*v-p*f,E=h*m-d*g,L=h*v-p*g,A=d*v-p*m,T=_*A-y*L+b*E+x*S-w*M+P*C;return T?(T=1/T,e[0]=(a*A-l*L+c*E)*T,e[1]=(r*L-n*A-s*E)*T,e[2]=(g*P-m*w+v*x)*T,e[3]=(d*w-h*P-p*x)*T,e[4]=(l*S-o*A-c*M)*T,e[5]=(i*A-r*S+s*M)*T,e[6]=(m*b-f*P-v*y)*T,e[7]=(u*P-d*b+p*y)*T,e[8]=(o*L-a*S+c*C)*T,e[9]=(n*S-i*L-s*C)*T,e[10]=(f*w-g*b+v*_)*T,e[11]=(h*b-u*w-p*_)*T,e[12]=(a*M-o*E-l*C)*T,e[13]=(i*E-n*M+r*C)*T,e[14]=(g*y-f*x-m*_)*T,e[15]=(u*x-h*y+d*_)*T,e):null}function ev(e,t){let i=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],f=t[12],g=t[13],m=t[14],v=t[15],_=i*a-n*o,y=i*l-r*o,b=i*c-s*o,x=n*l-r*a,w=n*c-s*a,P=r*c-s*l,C=u*g-h*f,M=u*m-d*f,S=u*v-p*f,E=h*m-d*g,L=h*v-p*g,A=d*v-p*m;return e[0]=a*A-l*L+c*E,e[1]=r*L-n*A-s*E,e[2]=g*P-m*w+v*x,e[3]=d*w-h*P-p*x,e[4]=l*S-o*A-c*M,e[5]=i*A-r*S+s*M,e[6]=m*b-f*P-v*y,e[7]=u*P-d*b+p*y,e[8]=o*L-a*S+c*C,e[9]=n*S-i*L-s*C,e[10]=f*w-g*b+v*_,e[11]=h*b-u*w-p*_,e[12]=a*M-o*E-l*C,e[13]=i*E-n*M+r*C,e[14]=g*y-f*x-m*_,e[15]=u*x-h*y+d*_,e}function e_(e){let t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],h=e[10],d=e[11],p=e[12],f=e[13],g=e[14],m=e[15],v=t*o-i*s,_=t*a-n*s,y=i*a-n*o,b=c*f-u*p,x=c*g-h*p,w=u*g-h*f;return l*(t*w-i*x+n*b)-r*(s*w-o*x+a*b)+m*(c*y-u*_+h*v)-d*(p*y-f*_+g*v)}function ey(e,t,i){let n=t[0],r=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],m=t[13],v=t[14],_=t[15],y=i[0],b=i[1],x=i[2],w=i[3];return e[0]=y*n+b*a+x*h+w*g,e[1]=y*r+b*l+x*d+w*m,e[2]=y*s+b*c+x*p+w*v,e[3]=y*o+b*u+x*f+w*_,y=i[4],b=i[5],x=i[6],w=i[7],e[4]=y*n+b*a+x*h+w*g,e[5]=y*r+b*l+x*d+w*m,e[6]=y*s+b*c+x*p+w*v,e[7]=y*o+b*u+x*f+w*_,y=i[8],b=i[9],x=i[10],w=i[11],e[8]=y*n+b*a+x*h+w*g,e[9]=y*r+b*l+x*d+w*m,e[10]=y*s+b*c+x*p+w*v,e[11]=y*o+b*u+x*f+w*_,y=i[12],b=i[13],x=i[14],w=i[15],e[12]=y*n+b*a+x*h+w*g,e[13]=y*r+b*l+x*d+w*m,e[14]=y*s+b*c+x*p+w*v,e[15]=y*o+b*u+x*f+w*_,e}function eb(e,t,i){let n,r,s,o,a,l,c,u,h,d,p,f,g=i[0],m=i[1],v=i[2];return t===e?(e[12]=t[0]*g+t[4]*m+t[8]*v+t[12],e[13]=t[1]*g+t[5]*m+t[9]*v+t[13],e[14]=t[2]*g+t[6]*m+t[10]*v+t[14],e[15]=t[3]*g+t[7]*m+t[11]*v+t[15]):(n=t[0],r=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],e[0]=n,e[1]=r,e[2]=s,e[3]=o,e[4]=a,e[5]=l,e[6]=c,e[7]=u,e[8]=h,e[9]=d,e[10]=p,e[11]=f,e[12]=n*g+a*m+h*v+t[12],e[13]=r*g+l*m+d*v+t[13],e[14]=s*g+c*m+p*v+t[14],e[15]=o*g+u*m+f*v+t[15]),e}function ex(e,t,i){let n=i[0],r=i[1],s=i[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function ew(e,t,i,n){let r,s,o,a,l,c,u,h,d,p,f,g,m,v,_,y,b,x,w,P,C,M,S,E,L=n[0],A=n[1],T=n[2],k=Math.sqrt(L*L+A*A+T*T);return k<1e-6?null:(L*=k=1/k,A*=k,T*=k,s=Math.sin(i),o=1-(r=Math.cos(i)),a=t[0],l=t[1],c=t[2],u=t[3],h=t[4],d=t[5],p=t[6],f=t[7],g=t[8],m=t[9],v=t[10],_=t[11],y=L*L*o+r,b=A*L*o+T*s,x=T*L*o-A*s,w=L*A*o-T*s,P=A*A*o+r,C=T*A*o+L*s,M=L*T*o+A*s,S=A*T*o-L*s,E=T*T*o+r,e[0]=a*y+h*b+g*x,e[1]=l*y+d*b+m*x,e[2]=c*y+p*b+v*x,e[3]=u*y+f*b+_*x,e[4]=a*w+h*P+g*C,e[5]=l*w+d*P+m*C,e[6]=c*w+p*P+v*C,e[7]=u*w+f*P+_*C,e[8]=a*M+h*S+g*E,e[9]=l*M+d*S+m*E,e[10]=c*M+p*S+v*E,e[11]=u*M+f*S+_*E,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function eP(e,t,i){let n=Math.sin(i),r=Math.cos(i),s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],u=t[9],h=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*r+c*n,e[5]=o*r+u*n,e[6]=a*r+h*n,e[7]=l*r+d*n,e[8]=c*r-s*n,e[9]=u*r-o*n,e[10]=h*r-a*n,e[11]=d*r-l*n,e}function eC(e,t,i){let n=Math.sin(i),r=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],c=t[8],u=t[9],h=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*r-c*n,e[1]=o*r-u*n,e[2]=a*r-h*n,e[3]=l*r-d*n,e[8]=s*n+c*r,e[9]=o*n+u*r,e[10]=a*n+h*r,e[11]=l*n+d*r,e}function eM(e,t,i){let n=Math.sin(i),r=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],c=t[4],u=t[5],h=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*r+c*n,e[1]=o*r+u*n,e[2]=a*r+h*n,e[3]=l*r+d*n,e[4]=c*r-s*n,e[5]=u*r-o*n,e[6]=h*r-a*n,e[7]=d*r-l*n,e}function eS(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function eE(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function eL(e,t,i){let n,r,s,o=i[0],a=i[1],l=i[2],c=Math.sqrt(o*o+a*a+l*l);return c<1e-6?null:(o*=c=1/c,a*=c,l*=c,r=Math.sin(t),s=1-(n=Math.cos(t)),e[0]=o*o*s+n,e[1]=a*o*s+l*r,e[2]=l*o*s-a*r,e[3]=0,e[4]=o*a*s-l*r,e[5]=a*a*s+n,e[6]=l*a*s+o*r,e[7]=0,e[8]=o*l*s+a*r,e[9]=a*l*s-o*r,e[10]=l*l*s+n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function eA(e,t){let i=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=i,e[7]=0,e[8]=0,e[9]=-i,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function eT(e,t){let i=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-i,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=i,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ek(e,t){let i=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=i,e[2]=0,e[3]=0,e[4]=-i,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function eI(e,t,i){let n=t[0],r=t[1],s=t[2],o=t[3],a=n+n,l=r+r,c=s+s,u=n*a,h=n*l,d=n*c,p=r*l,f=r*c,g=s*c,m=o*a,v=o*l,_=o*c;return e[0]=1-(p+g),e[1]=h+_,e[2]=d-v,e[3]=0,e[4]=h-_,e[5]=1-(u+g),e[6]=f+m,e[7]=0,e[8]=d+v,e[9]=f-m,e[10]=1-(u+p),e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e}function eO(e,t){let i=new eo(3),n=-t[0],r=-t[1],s=-t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=n*n+r*r+s*s+o*o;return h>0?(i[0]=(a*o+u*n+l*s-c*r)*2/h,i[1]=(l*o+u*r+c*n-a*s)*2/h,i[2]=(c*o+u*s+a*r-l*n)*2/h):(i[0]=(a*o+u*n+l*s-c*r)*2,i[1]=(l*o+u*r+c*n-a*s)*2,i[2]=(c*o+u*s+a*r-l*n)*2),eI(e,t,i),e}function eR(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function ez(e,t){let i=t[0],n=t[1],r=t[2],s=t[4],o=t[5],a=t[6],l=t[8],c=t[9],u=t[10];return e[0]=Math.sqrt(i*i+n*n+r*r),e[1]=Math.sqrt(s*s+o*o+a*a),e[2]=Math.sqrt(l*l+c*c+u*u),e}function eF(e,t){let i=new eo(3);ez(i,t);let n=1/i[0],r=1/i[1],s=1/i[2],o=t[0]*n,a=t[1]*r,l=t[2]*s,c=t[4]*n,u=t[5]*r,h=t[6]*s,d=t[8]*n,p=t[9]*r,f=t[10]*s,g=o+u+f,m=0;return g>0?(m=2*Math.sqrt(g+1),e[3]=.25*m,e[0]=(h-p)/m,e[1]=(d-l)/m,e[2]=(a-c)/m):o>u&&o>f?(m=2*Math.sqrt(1+o-u-f),e[3]=(h-p)/m,e[0]=.25*m,e[1]=(a+c)/m,e[2]=(d+l)/m):u>f?(m=2*Math.sqrt(1+u-o-f),e[3]=(d-l)/m,e[0]=(a+c)/m,e[1]=.25*m,e[2]=(h+p)/m):(m=2*Math.sqrt(1+f-o-u),e[3]=(a-c)/m,e[0]=(d+l)/m,e[1]=(h+p)/m,e[2]=.25*m),e}function eB(e,t,i,n){t[0]=n[12],t[1]=n[13],t[2]=n[14];let r=n[0],s=n[1],o=n[2],a=n[4],l=n[5],c=n[6],u=n[8],h=n[9],d=n[10];i[0]=Math.sqrt(r*r+s*s+o*o),i[1]=Math.sqrt(a*a+l*l+c*c),i[2]=Math.sqrt(u*u+h*h+d*d);let p=1/i[0],f=1/i[1],g=1/i[2],m=r*p,v=s*f,_=o*g,y=a*p,b=l*f,x=c*g,w=u*p,P=h*f,C=d*g,M=m+b+C,S=0;return M>0?(S=2*Math.sqrt(M+1),e[3]=.25*S,e[0]=(x-P)/S,e[1]=(w-_)/S,e[2]=(v-y)/S):m>b&&m>C?(S=2*Math.sqrt(1+m-b-C),e[3]=(x-P)/S,e[0]=.25*S,e[1]=(v+y)/S,e[2]=(w+_)/S):b>C?(S=2*Math.sqrt(1+b-m-C),e[3]=(w-_)/S,e[0]=(v+y)/S,e[1]=.25*S,e[2]=(x+P)/S):(S=2*Math.sqrt(1+C-m-b),e[3]=(v-y)/S,e[0]=(w+_)/S,e[1]=(x+P)/S,e[2]=.25*S),e}function ej(e,t,i,n){let r=t[0],s=t[1],o=t[2],a=t[3],l=r+r,c=s+s,u=o+o,h=r*l,d=r*c,p=r*u,f=s*c,g=s*u,m=o*u,v=a*l,_=a*c,y=a*u,b=n[0],x=n[1],w=n[2];return e[0]=(1-(f+m))*b,e[1]=(d+y)*b,e[2]=(p-_)*b,e[3]=0,e[4]=(d-y)*x,e[5]=(1-(h+m))*x,e[6]=(g+v)*x,e[7]=0,e[8]=(p+_)*w,e[9]=(g-v)*w,e[10]=(1-(h+f))*w,e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e}function eD(e,t,i,n,r){let s=t[0],o=t[1],a=t[2],l=t[3],c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,f=s*h,g=o*u,m=o*h,v=a*h,_=l*c,y=l*u,b=l*h,x=n[0],w=n[1],P=n[2],C=r[0],M=r[1],S=r[2],E=(1-(g+v))*x,L=(p+b)*x,A=(f-y)*x,T=(p-b)*w,k=(1-(d+v))*w,I=(m+_)*w,O=(f+y)*P,R=(m-_)*P,z=(1-(d+g))*P;return e[0]=E,e[1]=L,e[2]=A,e[3]=0,e[4]=T,e[5]=k,e[6]=I,e[7]=0,e[8]=O,e[9]=R,e[10]=z,e[11]=0,e[12]=i[0]+C-(E*C+T*M+O*S),e[13]=i[1]+M-(L*C+k*M+R*S),e[14]=i[2]+S-(A*C+I*M+z*S),e[15]=1,e}function eN(e,t){let i=t[0],n=t[1],r=t[2],s=t[3],o=i+i,a=n+n,l=r+r,c=i*o,u=n*o,h=n*a,d=r*o,p=r*a,f=r*l,g=s*o,m=s*a,v=s*l;return e[0]=1-h-f,e[1]=u+v,e[2]=d-m,e[3]=0,e[4]=u-v,e[5]=1-c-f,e[6]=p+g,e[7]=0,e[8]=d+m,e[9]=p-g,e[10]=1-c-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function eV(e,t,i,n,r,s,o){let a=1/(i-t),l=1/(r-n),c=1/(s-o);return e[0]=2*s*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*s*l,e[6]=0,e[7]=0,e[8]=(i+t)*a,e[9]=(r+n)*l,e[10]=(o+s)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*c,e[15]=0,e}function eU(e,t,i,n,r){let s=1/Math.tan(t/2);if(e[0]=s/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=r&&r!==1/0){let t=1/(n-r);e[10]=(r+n)*t,e[14]=2*r*n*t}else e[10]=-1,e[14]=-2*n;return e}function eG(e,t,i,n,r){let s=1/Math.tan(t/2);if(e[0]=s/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=r&&r!==1/0){let t=1/(n-r);e[10]=r*t,e[14]=r*n*t}else e[10]=-1,e[14]=-n;return e}function eW(e,t,i,n){let r=Math.tan(t.upDegrees*Math.PI/180),s=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),a=Math.tan(t.rightDegrees*Math.PI/180),l=2/(o+a),c=2/(r+s);return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-((o-a)*l*.5),e[9]=(r-s)*c*.5,e[10]=n/(i-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*i/(i-n),e[15]=0,e}function e$(e,t,i,n,r,s,o){let a=1/(t-i),l=1/(n-r),c=1/(s-o);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+i)*a,e[13]=(r+n)*l,e[14]=(o+s)*c,e[15]=1,e}function eq(e,t,i,n,r,s,o){let a=1/(t-i),l=1/(n-r),c=1/(s-o);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=c,e[11]=0,e[12]=(t+i)*a,e[13]=(r+n)*l,e[14]=s*c,e[15]=1,e}function eH(e,t,i,n){let r,s,o,a,l,c,u,h,d,p,f=t[0],g=t[1],m=t[2],v=n[0],_=n[1],y=n[2],b=i[0],x=i[1],w=i[2];return 1e-6>Math.abs(f-b)&&1e-6>Math.abs(g-x)&&1e-6>Math.abs(m-w)?ef(e):(r=1/Math.sqrt((h=f-b)*h+(d=g-x)*d+(p=m-w)*p),h*=r,d*=r,p*=r,(r=Math.sqrt((s=_*p-y*d)*s+(o=y*h-v*p)*o+(a=v*d-_*h)*a))?(s*=r=1/r,o*=r,a*=r):(s=0,o=0,a=0),(r=Math.sqrt((l=d*a-p*o)*l+(c=p*s-h*a)*c+(u=h*o-d*s)*u))?(l*=r=1/r,c*=r,u*=r):(l=0,c=0,u=0),e[0]=s,e[1]=l,e[2]=h,e[3]=0,e[4]=o,e[5]=c,e[6]=d,e[7]=0,e[8]=a,e[9]=u,e[10]=p,e[11]=0,e[12]=-(s*f+o*g+a*m),e[13]=-(l*f+c*g+u*m),e[14]=-(h*f+d*g+p*m),e[15]=1,e)}function eZ(e,t,i,n){let r=t[0],s=t[1],o=t[2],a=n[0],l=n[1],c=n[2],u=r-i[0],h=s-i[1],d=o-i[2],p=u*u+h*h+d*d;p>0&&(u*=p=1/Math.sqrt(p),h*=p,d*=p);let f=l*d-c*h,g=c*u-a*d,m=a*h-l*u;return(p=f*f+g*g+m*m)>0&&(f*=p=1/Math.sqrt(p),g*=p,m*=p),e[0]=f,e[1]=g,e[2]=m,e[3]=0,e[4]=h*m-d*g,e[5]=d*f-u*m,e[6]=u*g-h*f,e[7]=0,e[8]=u,e[9]=h,e[10]=d,e[11]=0,e[12]=r,e[13]=s,e[14]=o,e[15]=1,e}function eY(e){return`mat4(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}, ${e[4]}, ${e[5]}, ${e[6]}, ${e[7]}, ${e[8]}, ${e[9]}, ${e[10]}, ${e[11]}, ${e[12]}, ${e[13]}, ${e[14]}, ${e[15]})`}function eX(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8]+e[9]*e[9]+e[10]*e[10]+e[11]*e[11]+e[12]*e[12]+e[13]*e[13]+e[14]*e[14]+e[15]*e[15])}function eK(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e[4]=t[4]+i[4],e[5]=t[5]+i[5],e[6]=t[6]+i[6],e[7]=t[7]+i[7],e[8]=t[8]+i[8],e[9]=t[9]+i[9],e[10]=t[10]+i[10],e[11]=t[11]+i[11],e[12]=t[12]+i[12],e[13]=t[13]+i[13],e[14]=t[14]+i[14],e[15]=t[15]+i[15],e}function eJ(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e[4]=t[4]-i[4],e[5]=t[5]-i[5],e[6]=t[6]-i[6],e[7]=t[7]-i[7],e[8]=t[8]-i[8],e[9]=t[9]-i[9],e[10]=t[10]-i[10],e[11]=t[11]-i[11],e[12]=t[12]-i[12],e[13]=t[13]-i[13],e[14]=t[14]-i[14],e[15]=t[15]-i[15],e}function eQ(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12]*i,e[13]=t[13]*i,e[14]=t[14]*i,e[15]=t[15]*i,e}function e0(e,t,i,n){return e[0]=t[0]+i[0]*n,e[1]=t[1]+i[1]*n,e[2]=t[2]+i[2]*n,e[3]=t[3]+i[3]*n,e[4]=t[4]+i[4]*n,e[5]=t[5]+i[5]*n,e[6]=t[6]+i[6]*n,e[7]=t[7]+i[7]*n,e[8]=t[8]+i[8]*n,e[9]=t[9]+i[9]*n,e[10]=t[10]+i[10]*n,e[11]=t[11]+i[11]*n,e[12]=t[12]+i[12]*n,e[13]=t[13]+i[13]*n,e[14]=t[14]+i[14]*n,e[15]=t[15]+i[15]*n,e}function e1(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function e2(e,t){let i=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],v=e[15],_=t[0],y=t[1],b=t[2],x=t[3],w=t[4],P=t[5],C=t[6],M=t[7],S=t[8],E=t[9],L=t[10],A=t[11],T=t[12],k=t[13],I=t[14],O=t[15];return Math.abs(i-_)<=1e-6*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(n-y)<=1e-6*Math.max(1,Math.abs(n),Math.abs(y))&&Math.abs(r-b)<=1e-6*Math.max(1,Math.abs(r),Math.abs(b))&&Math.abs(s-x)<=1e-6*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(o-w)<=1e-6*Math.max(1,Math.abs(o),Math.abs(w))&&Math.abs(a-P)<=1e-6*Math.max(1,Math.abs(a),Math.abs(P))&&Math.abs(l-C)<=1e-6*Math.max(1,Math.abs(l),Math.abs(C))&&Math.abs(c-M)<=1e-6*Math.max(1,Math.abs(c),Math.abs(M))&&Math.abs(u-S)<=1e-6*Math.max(1,Math.abs(u),Math.abs(S))&&Math.abs(h-E)<=1e-6*Math.max(1,Math.abs(h),Math.abs(E))&&Math.abs(d-L)<=1e-6*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(p-A)<=1e-6*Math.max(1,Math.abs(p),Math.abs(A))&&Math.abs(f-T)<=1e-6*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(g-k)<=1e-6*Math.max(1,Math.abs(g),Math.abs(k))&&Math.abs(m-I)<=1e-6*Math.max(1,Math.abs(m),Math.abs(I))&&Math.abs(v-O)<=1e-6*Math.max(1,Math.abs(v),Math.abs(O))}e.s(["add",()=>eK,"adjoint",()=>ev,"clone",()=>eu,"copy",()=>eh,"create",()=>ec,"decompose",()=>eB,"determinant",()=>e_,"equals",()=>e2,"exactEquals",()=>e1,"frob",()=>eX,"fromQuat",()=>eN,"fromQuat2",()=>eO,"fromRotation",()=>eL,"fromRotationTranslation",()=>eI,"fromRotationTranslationScale",()=>ej,"fromRotationTranslationScaleOrigin",()=>eD,"fromScaling",()=>eE,"fromTranslation",()=>eS,"fromValues",()=>ed,"fromXRotation",()=>eA,"fromYRotation",()=>eT,"fromZRotation",()=>ek,"frustum",()=>eV,"getRotation",()=>eF,"getScaling",()=>ez,"getTranslation",()=>eR,"identity",()=>ef,"invert",()=>em,"lookAt",()=>eH,"mul",0,ey,"multiply",()=>ey,"multiplyScalar",()=>eQ,"multiplyScalarAndAdd",()=>e0,"ortho",0,e$,"orthoNO",()=>e$,"orthoZO",()=>eq,"perspective",0,eU,"perspectiveFromFieldOfView",()=>eW,"perspectiveNO",()=>eU,"perspectiveZO",()=>eG,"rotate",()=>ew,"rotateX",()=>eP,"rotateY",()=>eC,"rotateZ",()=>eM,"scale",()=>ex,"set",()=>ep,"str",()=>eY,"sub",0,eJ,"subtract",()=>eJ,"targetTo",()=>eZ,"translate",()=>eb,"transpose",()=>eg],32664);var e3=e.i(32664),e3=e3;function e4(){let e=new eo(4);return eo!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function e6(e){let t=new eo(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function e5(e,t,i,n){let r=new eo(4);return r[0]=e,r[1]=t,r[2]=i,r[3]=n,r}function e8(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function e7(e,t,i,n,r){return e[0]=t,e[1]=i,e[2]=n,e[3]=r,e}function e9(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e}function te(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e}function tt(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e[2]=t[2]*i[2],e[3]=t[3]*i[3],e}function ti(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e[2]=t[2]/i[2],e[3]=t[3]/i[3],e}function tn(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function tr(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function ts(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e[2]=Math.min(t[2],i[2]),e[3]=Math.min(t[3],i[3]),e}function to(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e[2]=Math.max(t[2],i[2]),e[3]=Math.max(t[3],i[3]),e}function ta(e,t){return e[0]=el(t[0]),e[1]=el(t[1]),e[2]=el(t[2]),e[3]=el(t[3]),e}function tl(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e}function tc(e,t,i,n){return e[0]=t[0]+i[0]*n,e[1]=t[1]+i[1]*n,e[2]=t[2]+i[2]*n,e[3]=t[3]+i[3]*n,e}function tu(e,t){let i=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2],s=t[3]-e[3];return Math.sqrt(i*i+n*n+r*r+s*s)}function th(e,t){let i=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2],s=t[3]-e[3];return i*i+n*n+r*r+s*s}function td(e){let t=e[0],i=e[1],n=e[2],r=e[3];return Math.sqrt(t*t+i*i+n*n+r*r)}function tp(e){let t=e[0],i=e[1],n=e[2],r=e[3];return t*t+i*i+n*n+r*r}function tf(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function tg(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function tm(e,t){let i=t[0],n=t[1],r=t[2],s=t[3],o=i*i+n*n+r*r+s*s;return o>0&&(o=1/Math.sqrt(o)),e[0]=i*o,e[1]=n*o,e[2]=r*o,e[3]=s*o,e}function tv(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function t_(e,t,i,n){let r=i[0]*n[1]-i[1]*n[0],s=i[0]*n[2]-i[2]*n[0],o=i[0]*n[3]-i[3]*n[0],a=i[1]*n[2]-i[2]*n[1],l=i[1]*n[3]-i[3]*n[1],c=i[2]*n[3]-i[3]*n[2],u=t[0],h=t[1],d=t[2],p=t[3];return e[0]=h*c-d*l+p*a,e[1]=-(u*c)+d*o-p*s,e[2]=u*l-h*o+p*r,e[3]=-(u*a)+h*s-d*r,e}function ty(e,t,i,n){let r=t[0],s=t[1],o=t[2],a=t[3];return e[0]=r+n*(i[0]-r),e[1]=s+n*(i[1]-s),e[2]=o+n*(i[2]-o),e[3]=a+n*(i[3]-a),e}function tb(e,t){let i,n,r,s,o,a;t=void 0===t?1:t;do o=(i=2*ea()-1)*i+(n=2*ea()-1)*n;while(o>=1)do a=(r=2*ea()-1)*r+(s=2*ea()-1)*s;while(a>=1)let l=Math.sqrt((1-o)/a);return e[0]=t*i,e[1]=t*n,e[2]=t*r*l,e[3]=t*s*l,e}function tx(e,t,i){let n=t[0],r=t[1],s=t[2],o=t[3];return e[0]=i[0]*n+i[4]*r+i[8]*s+i[12]*o,e[1]=i[1]*n+i[5]*r+i[9]*s+i[13]*o,e[2]=i[2]*n+i[6]*r+i[10]*s+i[14]*o,e[3]=i[3]*n+i[7]*r+i[11]*s+i[15]*o,e}function tw(e,t,i){let n=t[0],r=t[1],s=t[2],o=i[0],a=i[1],l=i[2],c=i[3],u=c*n+a*s-l*r,h=c*r+l*n-o*s,d=c*s+o*r-a*n,p=-o*n-a*r-l*s;return e[0]=u*c+-(p*o)+-(h*l)- -(d*a),e[1]=h*c+-(p*a)+-(d*o)- -(u*l),e[2]=d*c+-(p*l)+-(u*a)- -(h*o),e[3]=t[3],e}function tP(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function tC(e){return`vec4(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`}function tM(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function tS(e,t){let i=e[0],n=e[1],r=e[2],s=e[3],o=t[0],a=t[1],l=t[2],c=t[3];return Math.abs(i-o)<=1e-6*Math.max(1,Math.abs(i),Math.abs(o))&&Math.abs(n-a)<=1e-6*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-l)<=1e-6*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(s-c)<=1e-6*Math.max(1,Math.abs(s),Math.abs(c))}let tE=(a=e4(),function(e,t,i,n,r,s){let o,l;for(t||(t=4),i||(i=0),l=n?Math.min(n*t+i,e.length):e.length,o=i;o<l;o+=t)a[0]=e[o],a[1]=e[o+1],a[2]=e[o+2],a[3]=e[o+3],r(a,a,s),e[o]=a[0],e[o+1]=a[1],e[o+2]=a[2],e[o+3]=a[3];return e});e.s(["add",()=>e9,"ceil",()=>tn,"clone",()=>e6,"copy",()=>e8,"create",()=>e4,"cross",()=>t_,"dist",0,tu,"distance",()=>tu,"div",0,ti,"divide",()=>ti,"dot",()=>tv,"equals",()=>tS,"exactEquals",()=>tM,"floor",()=>tr,"forEach",0,tE,"fromValues",()=>e5,"inverse",()=>tg,"len",0,td,"length",()=>td,"lerp",()=>ty,"max",()=>to,"min",()=>ts,"mul",0,tt,"multiply",()=>tt,"negate",()=>tf,"normalize",()=>tm,"random",()=>tb,"round",()=>ta,"scale",()=>tl,"scaleAndAdd",()=>tc,"set",()=>e7,"sqrDist",0,th,"sqrLen",0,tp,"squaredDistance",()=>th,"squaredLength",()=>tp,"str",()=>tC,"sub",0,te,"subtract",()=>te,"transformMat4",()=>tx,"transformQuat",()=>tw,"zero",()=>tP],22642);var tL=e.i(22642),tL=tL,tA=e.i(25350);let tT=new tA.Log({id:"deck"});(m=x||(x={}))[m.Start=1]="Start",m[m.Move=2]="Move",m[m.End=4]="End",m[m.Cancel=8]="Cancel",(v=w||(w={}))[v.None=0]="None",v[v.Left=1]="Left",v[v.Right=2]="Right",v[v.Up=4]="Up",v[v.Down=8]="Down",v[v.Horizontal=3]="Horizontal",v[v.Vertical=12]="Vertical",v[v.All=15]="All",(_=P||(P={}))[_.Possible=1]="Possible",_[_.Began=2]="Began",_[_.Changed=4]="Changed",_[_.Ended=8]="Ended",_[_.Recognized=8]="Recognized",_[_.Cancelled=16]="Cancelled",_[_.Failed=32]="Failed";let tk="manipulation",tI="none",tO="pan-x",tR="pan-y";class tz{constructor(e,t){this.actions="",this.manager=e,this.set(t)}set(e){"compute"===e&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));var t=e.join(" ");if(t.includes(tI))return tI;let i=t.includes(tO),n=t.includes(tR);return i&&n?tI:i||n?i?tO:tR:t.includes(tk)?tk:"auto"}}function tF(e){return e.trim().split(/\s+/g)}function tB(e,t,i){if(e)for(let n of tF(t))e.addEventListener(n,i,!1)}function tj(e,t,i){if(e)for(let n of tF(t))e.removeEventListener(n,i,!1)}function tD(e){return(e.ownerDocument||e).defaultView}function tN(e){let t=e.length;if(1===t)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let i=0,n=0,r=0;for(;r<t;)i+=e[r].clientX,n+=e[r].clientY,r++;return{x:Math.round(i/t),y:Math.round(n/t)}}function tV(e){let t=[],i=0;for(;i<e.pointers.length;)t[i]={clientX:Math.round(e.pointers[i].clientX),clientY:Math.round(e.pointers[i].clientY)},i++;return{timeStamp:Date.now(),pointers:t,center:tN(t),deltaX:e.deltaX,deltaY:e.deltaY}}function tU(e,t){let i=t.x-e.x,n=t.y-e.y;return Math.sqrt(i*i+n*n)}function tG(e,t){let i=t.clientX-e.clientX,n=t.clientY-e.clientY;return Math.sqrt(i*i+n*n)}function tW(e,t){let i=t.clientX-e.clientX;return 180*Math.atan2(t.clientY-e.clientY,i)/Math.PI}function t$(e,t){return e===t?w.None:Math.abs(e)>=Math.abs(t)?e<0?w.Left:w.Right:t<0?w.Up:w.Down}function tq(e,t,i){return{x:t/e||0,y:i/e||0}}function tH(e,t){return"pointerId"in e?e.pointerId:t}function tZ(e,t){e.movementOrigin=new Map(t.map((e,t)=>[tH(e,t),{clientX:e.clientX,clientY:e.clientY}])),e.firstMovementTime=void 0}class tY{constructor(e){this.evEl="",this.evWin="",this.evTarget="",this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){var i;let n,r,s,o,a;i=this.manager,n=t.pointers.length,r=t.changedPointers.length,s=e&x.Start&&n-r==0,o=e&(x.End|x.Cancel)&&n-r==0,t.isFirst=!!s,t.isFinal=!!o,s&&(i.session={}),t.eventType=e,a=function(e,t){var i,n;let r,s,o,a,l,{session:c}=e,{pointers:u}=t,{length:h}=u;c.firstInput||(c.firstInput=tV(t)),h>1&&!c.firstMultiple?c.firstMultiple=tV(t):1===h&&(c.firstMultiple=!1);let{firstInput:d,firstMultiple:p}=c,f=p?p.center:d.center,g=t.center=tN(u);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-d.timeStamp;let m=t.pointers.map(tH);if(c.movementOrigin?.size===m.length&&m.every(e=>c.movementOrigin.has(e))||tZ(c,t.pointers),t.distancePerPointer=t.pointers.map((e,t)=>tG(c.movementOrigin.get(m[t]),e)),t.eventType&x.Move&&t.distancePerPointer.some(e=>e>0)&&(c.firstMovementTime??(c.firstMovementTime=t.timeStamp)),t.movementDeltaTime=void 0===c.firstMovementTime?0:t.timeStamp-c.firstMovementTime,t.eventType&(x.End|x.Cancel)){let e=t.changedPointers.map(e=>tH(e,t.pointers.indexOf(e)));tZ(c,t.pointers.filter((t,i)=>!e.includes(m[i])))}r=g.x-f.x,t.angle=180*Math.atan2(g.y-f.y,r)/Math.PI,t.distance=tU(f,g);let{deltaX:v,deltaY:_}=(s=t.center,o=c.offsetDelta,a=c.prevDelta,l=c.prevInput,(t.eventType===x.Start||l?.eventType===x.End)&&(a=c.prevDelta={x:l?.deltaX||0,y:l?.deltaY||0},o=c.offsetDelta={x:s.x,y:s.y}),{deltaX:a.x+(s.x-o.x),deltaY:a.y+(s.y-o.y)});t.deltaX=v,t.deltaY=_,t.offsetDirection=t$(t.deltaX,t.deltaY);let y=tq(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=y.x,t.overallVelocityY=y.y,t.overallVelocity=Math.abs(y.x)>Math.abs(y.y)?y.x:y.y,t.scale=p?(i=p.pointers,tG(u[0],u[1])/tG(i[0],i[1])):1,t.rotation=p?(n=p.pointers,tW(u[1],u[0])-tW(n[1],n[0])):0,t.maxPointers=c.prevInput?t.pointers.length>c.prevInput.maxPointers?t.pointers.length:c.prevInput.maxPointers:t.pointers.length;let b=e.element;return function(e,t){let i=e;for(;i;){if(i===t)return!0;i=i.parentNode}return!1}(t.srcEvent.target,b)&&(b=t.srcEvent.target),t.target=b,!function(e,t){let i,n,r,s,o=e.lastInterval||t,a=t.timeStamp-o.timeStamp;if(t.eventType!==x.Cancel&&(a>25||void 0===o.velocity)){let l=t.deltaX-o.deltaX,c=t.deltaY-o.deltaY,u=tq(a,l,c);n=u.x,r=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=t$(l,c),e.lastInterval=t}else i=o.velocity,n=o.velocityX,r=o.velocityY,s=o.direction;t.velocity=i,t.velocityX=n,t.velocityY=r,t.direction=s}(c,t),t}(i,t),i.emit("hammer.input",a),i.recognize(a),i.session.prevInput=a}init(){tB(this.element,this.evEl,this.domHandler),tB(this.target,this.evTarget,this.domHandler),tB(tD(this.element),this.evWin,this.domHandler)}destroy(){tj(this.element,this.evEl,this.domHandler),tj(this.target,this.evTarget,this.domHandler),tj(tD(this.element),this.evWin,this.domHandler)}}let tX={pointerdown:x.Start,pointermove:x.Move,pointerup:x.End,pointercancel:x.Cancel,pointerout:x.Cancel};class tK extends tY{constructor(e){super(e),this.evEl="pointerdown",this.evWin="pointermove pointerup pointercancel",this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,i=!1,n=tX[e.type],r=e.pointerType,s="touch"===r,o=t.findIndex(t=>t.pointerId===e.pointerId);n&x.Start&&(e.buttons||s)?o<0&&(t.push(e),o=t.length-1):n&(x.End|x.Cancel)&&(i=!0),!(o<0)&&(t[o]=e,this.callback(n,{pointers:t,changedPointers:[e],eventType:n,pointerType:r,srcEvent:e}),i&&t.splice(o,1))}}let tJ=["","webkit","Moz","MS","ms","o"],tQ={touchAction:"compute",enable:!0,inputTarget:null,cssProps:{userSelect:"none",userDrag:"none",touchCallout:"none",tapHighlightColor:"rgba(0,0,0,0)"}};class t0{constructor(e,t){this.options={...tQ,...t,cssProps:{...tQ.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new tK(this),this.touchAction=new tz(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?2:1}recognize(e){let t,{session:i}=this;if(i.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let{recognizers:n}=this,{curRecognizer:r}=i;(!r||r&&r.state&P.Recognized)&&(r=i.curRecognizer=null);let s=0;for(;s<n.length;)t=n[s],2!==i.stopped&&(!r||t===r||t.canRecognizeWith(r))?t.recognize(e):t.reset(),!r&&t.state&(P.Began|P.Changed|P.Ended)&&(r=i.curRecognizer=t),s++}get(e){let{recognizers:t}=this;for(let i=0;i<t.length;i++)if(t[i].options.event===e)return t[i];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t="string"==typeof e?this.get(e):e;if(t){let{recognizers:e}=this,i=e.indexOf(t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:i}=this;for(let n of tF(e))i[n]=i[n]||[],i[n].push(t)}off(e,t){if(!e)return;let{handlers:i}=this;for(let n of tF(e))t?i[n]&&i[n].splice(i[n].indexOf(t),1):delete i[n]}emit(e,t){let i=this.handlers[e]&&this.handlers[e].slice();if(!i||!i.length)return;t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};let n=0;for(;n<i.length;)i[n](t),n++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[i,n]of Object.entries(this.options.cssProps)){let r=function(e,t){let i=t[0].toUpperCase()+t.slice(1);for(let n of tJ){let r=n?n+i:t;if(r in e)return r}}(t.style,i);e?(this.oldCssProps[r]=t.style[r],t.style[r]=n):t.style[r]=this.oldCssProps[r]||""}e||(this.oldCssProps={})}}}let t1=1;function t2(e){return e&P.Cancelled?"cancel":e&P.Ended?"end":e&P.Changed?"move":e&P.Began?"start":""}class t3{constructor(e){this.options=e,this.id=t1++,this.state=P.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:i}=this;return i[t.id]||(i[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}return(t="string"==typeof e?this.manager.get(e):e)&&delete this.simultaneous[t.id],this}requireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:i}=this;return -1===i.indexOf(t)&&(i.push(t),t.requireFailure(this)),this}dropRequireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}if(t="string"==typeof e?this.manager.get(e):e){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<P.Ended&&this.manager.emit(this.options.event+t2(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=P.Ended&&this.manager.emit(this.options.event+t2(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=P.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(P.Failed|P.Possible)))return!1;e++}return!0}recognize(e){let t={...e};if(!this.options.enable){this.reset(),this.state=P.Failed;return}this.state&(P.Recognized|P.Cancelled|P.Failed)&&(this.state=P.Possible),this.state=this.process(t),this.state&(P.Began|P.Changed|P.Ended|P.Cancelled)&&this.tryEmit(t)}getEventNames(){return[this.options.event]}reset(){}}class t4 extends t3{attrTest(e){let t=this.options.pointers;return 0===t||e.pointers.length===t}coherentTest(e){let t=this.options.coherent;return!t?.length||t.some(t=>{var i,n;return i=e,(void 0===(n=t).distance||i.distance>=n.distance)&&(void 0===n.distancePerPointer||i.distancePerPointer.length>0&&i.distancePerPointer.every(e=>e>=n.distancePerPointer))&&(void 0===n.movementDeltaTime||i.movementDeltaTime>=n.movementDeltaTime)&&(void 0===n.rotation||Math.abs(((i.rotation+180)%360+360)%360-180)>=n.rotation)&&(void 0===n.scale||Math.abs(i.scale-1)>=n.scale)})}process(e){let{state:t}=this,{eventType:i}=e,n=t&(P.Began|P.Changed),r=this.attrTest(e);return n&&(i&x.Cancel||!r)?t|P.Cancelled:n||r?i&x.End?t|P.Ended:t&P.Began?t|P.Changed:P.Began:P.Failed}}let t6=["","start","move","end","cancel"];class t5 extends t3{constructor(e={}){super({enable:!0,event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[tk]}process(e){let{options:t}=this,i=e.pointers.length===t.pointers,n=e.distance<t.threshold,r=e.deltaTime<t.time;if(this.reset(),e.eventType&x.Start&&0===this.count)return this.failTimeout();if(n&&r&&i){if(e.eventType!==x.End)return this.failTimeout();let i=!this.pTime||e.timeStamp-this.pTime<t.interval,n=!this.pCenter||tU(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,n&&i?this.count+=1:this.count=1,this._input=e,0==this.count%t.taps)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=P.Recognized,this.tryEmit(this._input)},t.interval),P.Began):P.Recognized}return P.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=P.Failed},this.options.interval),P.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===P.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}}class t8 extends t4{constructor(){super(...arguments),this.wheelSession=null,this.wheelSessionUnsubscribe=null,this.handleWheelSessionEvent=e=>{"trackpad"===e.device&&this.handleTrackpadEvent(e)}}set(e){let{wheelSession:t,...i}=e;return t&&t!==this.wheelSession&&(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=null,this.wheelSession=t),super.set(i),this.updateWheelSessionSubscription(),this}getTrackpadInput(e,t={}){let{srcEvent:i}=e,n=t.deltaX??e.deltaX,r=t.deltaY??e.deltaY,s=t$(n,r),o=Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY);return{pointers:[i,i],changedPointers:[i,i],pointerType:"trackpad",srcEvent:i,eventType:e.eventType,timeStamp:e.timeStamp,deltaTime:e.deltaTime,center:e.center,deltaX:n,deltaY:r,angle:180*Math.atan2(r,n)/Math.PI,distance:Math.sqrt(n*n+r*r),distancePerPointer:[o,o],movementDeltaTime:e.deltaTime,scale:1,rotation:0,direction:s,offsetDirection:s,velocity:e.velocity,velocityX:e.velocityX,velocityY:e.velocityY,overallVelocity:e.overallVelocity,overallVelocityX:e.overallVelocityX,overallVelocityY:e.overallVelocityY,maxPointers:2,target:i.target||this.manager.element,additionalEvent:"",...t}}updateWheelSessionSubscription(){let e=!!(this.wheelSession&&this.options.enable&&this.options.trackpad&&2===this.options.pointers);e&&!this.wheelSessionUnsubscribe?this.wheelSessionUnsubscribe=this.wheelSession.on(this.handleWheelSessionEvent):!e&&this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe(),this.wheelSessionUnsubscribe=null)}}let t7=["","start","move","end","cancel","up","down","left","right"];class t9 extends t8{constructor(e={}){super({enable:!0,pointers:1,event:"pan",threshold:10,direction:w.All,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1,this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&w.Horizontal&&t.push(tR),e&w.Vertical&&t.push(tO),t}getEventNames(){return t7.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,i=!0,{distance:n}=e,{direction:r}=e,s=e.deltaX,o=e.deltaY;return r&t.direction||(t.direction&w.Horizontal?(r=0===s?w.None:s<0?w.Left:w.Right,i=s!==this.pX,n=Math.abs(e.deltaX)):(r=0===o?w.None:o<0?w.Up:w.Down,i=o!==this.pY,n=Math.abs(e.deltaY))),e.direction=r,i&&n>t.threshold&&!!(r&t.direction)}attrTest(e){let t=!!(this.state&P.Began),i=!(this.options.coherent?.length&&e.eventType&(x.End|x.Cancel));return super.attrTest(e)&&(t||i&&this.coherentTest(e)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=w[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=!e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(P.Recognized|P.Cancelled|P.Failed)&&(this.state=P.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:-e.deltaX,deltaY:-e.deltaY,velocity:-e.velocity,velocityX:-e.velocityX,velocityY:-e.velocityY,overallVelocity:-e.overallVelocity,overallVelocityX:-e.overallVelocityX,overallVelocityY:-e.overallVelocityY})),e.isFinal&&(this.trackpadGesture=!1))}}let ie=["","start","move","end","cancel","in","out"];class it{constructor(e,t,i){this.element=e,this.callback=t,this.options=i}listen(e,t){t?this.element.addEventListener(e,this.handleEvent,{passive:!1}):this.element.removeEventListener(e,this.handleEvent)}}let ii="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"";"undefined"!=typeof window&&window;let ir=-1!==ii.indexOf("firefox");class is extends it{constructor(e,t,i){i.enable=i.enable??!1,super(e,t,i),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(ir&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=40)),e.shiftKey&&t&&(t*=.25),this.callback({type:"wheel",center:{x:e.clientX,y:e.clientY},delta:-t,device:this.options.wheelSession?.device??"unknown",srcEvent:e,pointerType:"mouse",target:e.target})},i.enable&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{}),this.listen("wheel",!0))}destroy(){this.listen("wheel",!1),this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0}enableEventType(e,t){"wheel"===e&&this.options.enable!==t&&(this.options.enable=t,t&&!this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{})),this.listen("wheel",t),t||(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0))}}let io={classificationDelay:32,endDelay:80};class ia{constructor(e,t={}){this.subscriptions=new Map,this.session=null,this.classificationTimer=null,this.endTimer=null,this.pressedControlKeys=new Set,this.listeningForControlKeys=!1,this.handleEvent=e=>{var t,i;let n,r;if(!this.hasSubscribers)return"unknown";let s=(t=e,i=this.pressedControlKeys.size>0,n=t.deltaX,r=t.deltaY,1===t.deltaMode&&(n*=40,r*=40),{event:t,timeStamp:t.timeStamp,deltaX:n,deltaY:r,isControlKeyDown:i}),o=this.session;if(o&&s.timeStamp-o.lastTimeStamp>=this.options.endDelay){if(this.end(),!this.hasSubscribers)return"unknown";o=null}o?(this.scheduleEnd(),this.addSample(o,s)):(o=this.startPendingSession(s),this.scheduleEnd());let{device:a}=o;return"unknown"===a&&"unknown"!==(a=il(o.samples,!1))&&this.begin(o,a),a},this.finishClassification=()=>{if(this.classificationTimer=null,!this.session||"unknown"!==this.session.device)return;let e=this.session,t=il(e.samples,!0);this.begin(e,"unknown"===t?"mouse":t)},this.end=()=>{if(!this.session)return;if("unknown"===this.session.device){let e=this.session,t=il(e.samples,!0);this.begin(e,"unknown"===t?"mouse":t)}if(!this.session)return;let e=this.session;this.emit(x.End,e.lastEvent),this.reset()},this.handleKeyDown=e=>{"Control"===e.key&&this.pressedControlKeys.add(e.code||e.key)},this.handleKeyUp=e=>{"Control"===e.key&&(e.code?this.pressedControlKeys.delete(e.code):this.pressedControlKeys.clear())},this.handleWindowBlur=()=>{this.pressedControlKeys.clear()},this.element=e,this.options={...io,...t},this.element?.addEventListener("wheel",this.handleEvent,{passive:!0})}get hasSubscribers(){return this.subscriptions.size>0}get device(){return this.session?.device??"unknown"}on(e){let t={listener:e};return this.subscriptions.set(e,t),this.updateControlKeyEventListeners(),()=>{this.subscriptions.get(e)===t&&this.off(e)}}off(e){this.subscriptions.delete(e),this.updateControlKeyEventListeners(),this.hasSubscribers||this.reset()}cancel(){let e=this.session;e&&"unknown"!==e.device&&this.emit(x.Cancel,e.lastEvent),this.reset()}destroy(){this.cancel(),this.subscriptions.clear(),this.updateControlKeyEventListeners(),this.element?.removeEventListener("wheel",this.handleEvent)}startPendingSession(e){let t={samples:[e],device:"unknown",firstTimeStamp:e.timeStamp,lastTimeStamp:e.timeStamp,totalDeltaX:e.deltaX,totalDeltaY:e.deltaY,velocityX:0,velocityY:0,lastEvent:e.event};return this.session=t,this.classificationTimer=globalThis.setTimeout(this.finishClassification,this.options.classificationDelay),t}addSample(e,t){if(e.samples.push(t),e.lastTimeStamp=t.timeStamp,e.lastEvent=t.event,e.totalDeltaX+=t.deltaX,e.totalDeltaY+=t.deltaY,"unknown"!==e.device){let i=e.samples[e.samples.length-2],n=t.timeStamp-i.timeStamp;e.velocityX=n>0?t.deltaX/n:0,e.velocityY=n>0?t.deltaY/n:0,this.emit(x.Move,t.event,{velocityX:e.velocityX,velocityY:e.velocityY})}}begin(e,t){e.device=t,this.clearClassificationTimer(),this.emit(x.Start,e.samples[0].event);let i=e.lastTimeStamp-e.firstTimeStamp;e.velocityX=i>0?e.totalDeltaX/i:0,e.velocityY=i>0?e.totalDeltaY/i:0,this.emit(x.Move,e.lastEvent,{velocityX:e.velocityX,velocityY:e.velocityY})}scheduleEnd(){this.clearEndTimer(),this.endTimer=globalThis.setTimeout(this.end,this.options.endDelay)}emit(e,t,i){let n=this.session;if(!n||"unknown"===n.device)return;let r=e===x.Start,s=e===x.End||e===x.Cancel,o=r?n.firstTimeStamp:n.lastTimeStamp,a=r?0:Math.max(0,o-n.firstTimeStamp),l=r?0:n.totalDeltaX,c=r?0:n.totalDeltaY,u=a>0?l/a:0,h=a>0?c/a:0,d=r?0:i?.velocityX??n.velocityX,p=r?0:i?.velocityY??n.velocityY,f={eventType:e,device:n.device,srcEvent:t,timeStamp:o,center:{x:t.clientX,y:t.clientY},deltaX:l,deltaY:c,deltaTime:a,velocity:Math.abs(d)>Math.abs(p)?d:p,velocityX:d,velocityY:p,overallVelocity:Math.abs(u)>Math.abs(h)?u:h,overallVelocityX:u,overallVelocityY:h,isFirst:r,isFinal:s};for(let{listener:e}of[...this.subscriptions.values()])e(f)}reset(){this.clearClassificationTimer(),this.clearEndTimer(),this.session=null}clearClassificationTimer(){null!==this.classificationTimer&&(globalThis.clearTimeout(this.classificationTimer),this.classificationTimer=null)}clearEndTimer(){null!==this.endTimer&&(globalThis.clearTimeout(this.endTimer),this.endTimer=null)}updateControlKeyEventListeners(){let e=this.hasSubscribers,t="undefined"!=typeof window?window:globalThis.document?.defaultView;t&&e!==this.listeningForControlKeys&&(this.listeningForControlKeys=e,e?(t.addEventListener("keydown",this.handleKeyDown,!0),t.addEventListener("keyup",this.handleKeyUp,!0),t.addEventListener("blur",this.handleWindowBlur)):(t.removeEventListener("keydown",this.handleKeyDown,!0),t.removeEventListener("keyup",this.handleKeyUp,!0),t.removeEventListener("blur",this.handleWindowBlur),this.pressedControlKeys.clear()))}}function il(e,t){return e.some(({event:e,isControlKeyDown:t})=>e.ctrlKey&&!t)?"trackpad":e.some(({event:e})=>0!==e.deltaMode)||e.some(ic)||e.every(({event:e})=>{let t=e.wheelDelta;return void 0!==t&&Math.abs(t)%40==0})?"mouse":e.some(({deltaX:e})=>0!==e)||e.length>1&&function(e){for(let t=0;t<e.length;t++){let i=e[t];if(Math.abs(i.deltaX)>40||Math.abs(i.deltaY)>40||t>0&&i.timeStamp-e[t-1].timeStamp>40)return!1}return!0}(e)?"trackpad":t?"mouse":"unknown"}function ic({event:e,deltaX:t,deltaY:i}){if(0!==t||0===i)return!1;if(Number.isInteger(Math.abs(i/4.000244140625)))return!0;let n=e.wheelDelta;return"number"==typeof n&&0!==n&&n%120==0}let iu=["mousedown","mousemove","mouseup","mouseover","mouseout","mouseenter","mouseleave"];class ih extends it{constructor(e,t,i){super(e,t,{enable:!0,...i}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;const{enable:n=!1}=this.options;this.enableMoveEvent=n,this.enableLeaveEvent=n,this.enableEnterEvent=n,this.enableOutEvent=n,this.enableOverEvent=n,n&&iu.forEach(e=>this.listen(e,!0))}destroy(){iu.forEach(e=>this.listen(e,!1))}enableEventType(e,t){switch(e){case"pointermove":this.enableMoveEvent!==t&&(this.enableMoveEvent=t,this.listen("mousedown",t),this.listen("mousemove",t),this.listen("mouseup",t));break;case"pointerover":this.enableOverEvent!==t&&(this.enableOverEvent=t,this.listen("mouseover",t));break;case"pointerout":this.enableOutEvent!==t&&(this.enableOutEvent=t,this.listen("mouseout",t));break;case"pointerenter":this.enableEnterEvent!==t&&(this.enableEnterEvent=t,this.listen("mouseenter",t));break;case"pointerleave":this.enableLeaveEvent!==t&&(this.enableLeaveEvent=t,this.listen("mouseleave",t))}}handleOverEvent(e){this.enableOverEvent&&"mouseover"===e.type&&this._emit("pointerover",e)}handleOutEvent(e){this.enableOutEvent&&"mouseout"===e.type&&this._emit("pointerout",e)}handleEnterEvent(e){this.enableEnterEvent&&"mouseenter"===e.type&&this._emit("pointerenter",e)}handleLeaveEvent(e){this.enableLeaveEvent&&"mouseleave"===e.type&&this._emit("pointerleave",e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case"mousedown":e.button>=0&&(this.pressed=!0);break;case"mousemove":0===e.buttons&&(this.pressed=!1),this.pressed||this._emit("pointermove",e);break;case"mouseup":this.pressed=!1}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:"mouse",target:t.target})}}let id=["keydown","keyup"];class ip extends it{constructor(e,t,i){super(e,t,{enable:!0,tabIndex:0,...i}),this.handleEvent=e=>{let t=e.target||e.srcElement;("INPUT"!==t.tagName||"text"!==t.type)&&"TEXTAREA"!==t.tagName&&(this.enableDownEvent&&"keydown"===e.type&&this.callback({type:"keydown",srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&"keyup"===e.type&&this.callback({type:"keyup",srcEvent:e,key:e.key,target:e.target}))};const{enable:n=!1}=this.options;this.enableDownEvent=n,this.enableUpEvent=n,e.tabIndex=this.options.tabIndex,e.style.outline="none",n&&id.forEach(e=>this.listen(e,!0))}destroy(){id.forEach(e=>this.listen(e,!1))}enableEventType(e,t){"keydown"===e&&this.enableDownEvent!==t&&(this.enableDownEvent=t,this.listen(e,t)),"keyup"===e&&this.enableUpEvent!==t&&(this.enableUpEvent=t,this.listen(e,t))}}class ig extends it{constructor(e,t,i){i.enable=i.enable??!1,super(e,t,i),this.handleEvent=e=>{this.options.enable&&this.callback({type:"contextmenu",center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:"mouse",target:e.target})},i.enable&&this.listen("contextmenu",!0)}destroy(){this.listen("contextmenu",!1)}enableEventType(e,t){"contextmenu"===e&&this.options.enable!==t&&(this.options.enable=t,this.listen("contextmenu",t))}}let im={pointerdown:1,pointermove:2,pointerup:4,mousedown:1,mousemove:2,mouseup:4},iv={srcElement:"root",priority:0};class i_{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),i=e.srcEvent.target;for(;i&&i!==t.rootElement;){if(this._emit(t,i),t.handled)return;i=i.parentNode}this._emit(t,"root")},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,i,n=!1,r=!1){let{handlers:s,handlersByElement:o}=this,a={...iv,...i},l=o.get(a.srcElement);l||(l=[],o.set(a.srcElement,l));let c={type:e,handler:t,srcElement:a.srcElement,priority:a.priority};n&&(c.once=!0),r&&(c.passive=!0),s.push(c),this._active=this._active||!c.passive;let u=l.length-1;for(;u>=0&&!(l[u].priority>=c.priority);)u--;l.splice(u+1,0,c)}remove(e,t){let{handlers:i,handlersByElement:n}=this;for(let r=i.length-1;r>=0;r--){let s=i[r];if(s.type===e&&s.handler===t){i.splice(r,1);let e=n.get(s.srcElement);e.splice(e.indexOf(s),1),0===e.length&&n.delete(s.srcElement)}}this._active=i.some(e=>!e.passive)}_emit(e,t){let i=this.handlersByElement.get(t);if(i){let t=!1,n=()=>{e.handled=!0},r=()=>{e.handled=!0,t=!0},s=[];for(let o=0;o<i.length;o++){let{type:a,handler:l,once:c}=i[o];if(l({...e,type:a,stopPropagation:n,stopImmediatePropagation:r}),c&&s.push(i[o]),t)break}for(let e=0;e<s.length;e++){let{type:t,handler:i}=s[e];this.remove(t,i)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...function(e){let t=im[e.srcEvent.type];if(!t)return null;let{buttons:i,button:n}=e.srcEvent,r=!1,s=!1,o=!1;return 2===t?(r=!!(1&i),s=!!(4&i),o=!!(2&i)):(r=0===n,s=1===n,o=2===n),{leftButton:r,middleButton:s,rightButton:o}}(e),...function(e,t){let i=e.center;if(!i)return null;let n=t.getBoundingClientRect(),r=n.width/t.offsetWidth||1,s=n.height/t.offsetHeight||1,o={x:(i.x-n.left-t.clientLeft)/r,y:(i.y-n.top-t.clientTop)/s};return{center:i,offsetCenter:o}}(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}}class iy{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:"compute",tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,this.wheelSession=new ia(e),!e)return;for(const t of(this.manager=new t0(e,this.options),this.options.recognizers)){const{recognizer:e,recognizeWith:i,requireFailure:n}=function(e){let t;if("recognizer"in e)return e;let i=Array.isArray(e)?[...e]:[e];return{recognizer:t="function"==typeof i[0]?new(i.shift())(i.shift()||{}):i.shift(),recognizeWith:"string"==typeof i[0]?[i[0]]:i[0],requireFailure:"string"==typeof i[1]?[i[1]]:i[1]}}(t);this.manager.add(e),i&&e.recognizeWith(i),n&&e.requireFailure(n)}this.manager.on("hammer.input",this._onBasicInput),this.wheelInput=new is(e,this._onOtherEvent,{enable:!1,wheelSession:this.wheelSession}),this.moveInput=new ih(e,this._onOtherEvent,{enable:!1}),this.keyInput=new ip(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new ig(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}getElement(){return this.element}destroy(){this.element?(this.wheelInput.destroy(),this.wheelSession.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy()):this.wheelSession.destroy()}on(e,t,i){this._addEventHandler(e,t,i,!1)}once(e,t,i){this._addEventHandler(e,t,i,!0)}watch(e,t,i){this._addEventHandler(e,t,i,!1,!0)}off(e,t){this._removeEventHandler(e,t)}emit(e){this.manager?.emit(e.type,e)}_toggleRecognizer(e,t){let{manager:i}=this;if(!i)return;let n=i.get(e);n&&(n.set({enable:t,wheelSession:this.wheelSession}),i.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,i,n,r){if("string"!=typeof e){for(let[s,o]of(i=t,Object.entries(e)))this._addEventHandler(s,o,i,n,r);return}let{manager:s,events:o}=this;if(!s)return;let a=o.get(e);!a&&(a=new i_(this,this._getRecognizerName(e)||e),o.set(e,a),s&&s.on(e,a.handleEvent)),a.add(e,t,i,n,r),a.isEmpty()||this._toggleRecognizer(a.recognizerName,!0)}_removeEventHandler(e,t){if("string"!=typeof e){for(let[t,i]of Object.entries(e))this._removeEventHandler(t,i);return}let{events:i}=this,n=i.get(e);if(n&&(n.remove(e,t),n.isEmpty())){let{recognizerName:e}=n,t=!1;for(let n of i.values())if(n.recognizerName===e&&!n.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}}let ib={DEFAULT:"default",LNGLAT:"lnglat",METER_OFFSETS:"meter-offsets",LNGLAT_OFFSETS:"lnglat-offsets",CARTESIAN:"cartesian"};Object.defineProperty(ib,"IDENTITY",{get:()=>(tT.deprecated("COORDINATE_SYSTEM.IDENTITY","COORDINATE_SYSTEM.CARTESIAN")(),ib.CARTESIAN)});let ix={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},iw={common:0,meters:1,pixels:2},iP={click:"onClick",dblclick:"onClick",panstart:"onDragStart",panmove:"onDrag",panend:"onDragEnd"},iC={multipan:[t9,{threshold:10,pointers:2,trackpad:!0}],pinch:[class extends t8{constructor(e={}){super({enable:!0,event:"pinch",threshold:0,pointers:2,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1}getTouchAction(){return[tI]}getEventNames(){return ie.map(e=>this.options.event+e)}attrTest(e){let t=!!this.options.coherent?.length,i=!!(this.state&P.Began),n=!(t&&e.eventType&(x.End|x.Cancel));return super.attrTest(e)&&(i||n&&(t?this.coherentTest(e):Math.abs(e.scale-1)>this.options.threshold))}emit(e){if(1!==e.scale){let t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(P.Recognized|P.Cancelled|P.Failed)&&(this.state=P.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:0,deltaY:0,velocity:0,velocityX:0,velocityY:0,overallVelocity:0,overallVelocityX:0,overallVelocityY:0,scale:Math.exp(-e.deltaY/100)})),e.isFinal&&(this.trackpadGesture=!1))}},{trackpad:!0},null,["multipan"]],pan:[t9,{threshold:1},["pinch"],["multipan"]],dblclick:[t5,{event:"dblclick",taps:2,enable:!1}],dblclickdrag:[class extends t3{constructor(e={}){super({enable:!0,event:"doubleclickdrag",pointers:1,interval:500,time:350,threshold:28,dragThreshold:1,pixelsPerScale:120,...e}),this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}getTouchAction(){return[tk]}getEventNames(){return t6.map(e=>this.options.event+e)}process(e){let{options:t}=this;return e.pointers.length!==t.pointers?(this.reset(),P.Failed):e.eventType&x.Start?this._handleStart(e):e.eventType&x.Move?this._handleMove(e):e.eventType&x.Cancel?this._handleEnd(e,!0):e.eventType&x.End?this._handleEnd(e,!1):P.Failed}reset(){this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}emit(e){if(e){if(this.state===P.Began){if(!this._drag?.active||this._emittedStart)return;this._emittedStart=!0,this.manager.emit(`${this.options.event}start`,e),this.manager.emit(this.options.event,e);return}if(this.state===P.Changed){if(!this._emittedStart)return;this.manager.emit(`${this.options.event}move`,e),this.manager.emit(this.options.event,e);return}if(this.state===P.Ended){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}end`,e),this._emittedStart=!1;return}if(this.state===P.Cancelled){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}cancel`,e),this._emittedStart=!1}}}_handleStart(e){let t=this._getPointerId(e);return this._lastTap&&this._isTapMatch(e,this._lastTap)?(this._tapStart=null,this._lastTap=null,this._drag={startCenter:e.center,pointerId:t,active:!1},this._emittedStart=!1,P.Began):(this._tapStart={center:e.center,timeStamp:e.timeStamp,pointerId:t},this._lastTap=null,this._drag=null,this._emittedStart=!1,P.Failed)}_handleMove(e){if(!this._drag||!this._isSamePointer(e,this._drag.pointerId))return P.Failed;let t=this._drag.startCenter.y-e.center.y;return!this._drag.active&&Math.abs(t)<this.options.dragThreshold?P.Began:(this._drag.active=!0,e.scale=Math.pow(2,t/this.options.pixelsPerScale),this._emittedStart?P.Changed:P.Began)}_handleEnd(e,t){if(this._drag&&this._isSamePointer(e,this._drag.pointerId)){let{active:i,startCenter:n}=this._drag;if(this._drag=null,this._tapStart=null,this._lastTap=null,!i)return this._emittedStart=!1,P.Failed;let r=n.y-e.center.y;return e.scale=Math.pow(2,r/this.options.pixelsPerScale),t?P.Cancelled:P.Ended}return this._tapStart&&this._isSamePointer(e,this._tapStart.pointerId)?(this._isValidTap(e)?this._lastTap={center:e.center,timeStamp:e.timeStamp,pointerId:this._tapStart.pointerId}:this._lastTap=null,this._tapStart=null):t&&this.reset(),P.Failed}_isTapMatch(e,t){return e.timeStamp-t.timeStamp<=this.options.interval&&tU(e.center,t.center)<=this.options.threshold}_isValidTap(e){return e.deltaTime<=this.options.time&&e.distance<=this.options.threshold}_getPointerId(e){return"pointerId"in e.srcEvent?e.srcEvent.pointerId:null}_isSamePointer(e,t){return null===t||this._getPointerId(e)===t}},{event:"dblclickdrag",enable:!1},["dblclick"],null],click:[t5,{event:"click"},["dblclickdrag"],["dblclick","dblclickdrag"]]};function iM(e){let t,i={};return n=>{for(let r in n)if(!function(e,t){if(e===t)return!0;if(Array.isArray(e)){let i=e.length;if(!t||t.length!==i)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}return!1}(n[r],i[r])){t=e(n),i=n;break}return t}}let iS=[0,0,0,0],iE=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],iL=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],iA=[0,0,0],iT=[0,0,0],ik={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function iI(e){let t=ik[e];if(void 0===t)throw Error(`Invalid coordinateSystem: ${e}`);return t}let iO=iM(function({viewport:e,devicePixelRatio:t,coordinateSystem:i,coordinateOrigin:n}){let{projectionCenter:r,viewProjectionMatrix:s,originCommon:o,cameraPosCommon:a,shaderCoordinateOrigin:l,geospatialOrigin:c}=function(e,t,i){let{viewMatrixUncentered:n,projectionMatrix:r}=e,{viewMatrix:s,viewProjectionMatrix:o}=e,a=iS,l=iS,c=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:h,offsetMode:d}=iR(e,t,i);return d&&(l=e.projectPosition(u||h),c=[c[0]-l[0],c[1]-l[1],c[2]-l[2]],l[3]=1,a=tL.transformMat4([],l,o),s=n||s,o=e3.multiply([],r,s),o=e3.multiply([],o,iE)),{viewMatrix:s,viewProjectionMatrix:o,projectionCenter:a,originCommon:l,cameraPosCommon:c,shaderCoordinateOrigin:h,geospatialOrigin:u}}(e,i,n),u=e.getDistanceScales(),h=[e.width*t,e.height*t],d=tL.transformMat4([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,p={coordinateSystem:iI(i),projectionMode:e.projectionMode,coordinateOrigin:l,commonOrigin:o.slice(0,3),center:r,pseudoMeters:!!e._pseudoMeters,viewportSize:h,devicePixelRatio:t,focalDistance:d,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:iA,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:s,modelMatrix:iL,cameraPosition:a};if(c){let t=e.getDistanceScales(c);switch(i){case"meter-offsets":p.commonUnitsPerWorldUnit=t.unitsPerMeter,p.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case"lnglat":case"lnglat-offsets":e._pseudoMeters||(p.commonUnitsPerMeter=t.unitsPerMeter),p.commonUnitsPerWorldUnit=t.unitsPerDegree,p.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case"cartesian":p.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],p.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]]}}if(e.projectionMode===ix.GLOBE&&"meter-offsets"===i){let e=n[0]*Math.PI/180,t=n[1]*Math.PI/180,i=Math.cos(t),r=((n[2]||0)/6370972+1)*256;p.commonOrigin=[Math.sin(e)*i*r,-Math.cos(e)*i*r,Math.sin(t)*r]}return p});function iR(e,t,i=iT){let n;i.length<3&&(i=[i[0],i[1],0]);let r=i,s=!0;switch(n="lnglat-offsets"===t||"meter-offsets"===t?i:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case ix.WEB_MERCATOR:("lnglat"===t||"cartesian"===t)&&(n=[0,0,0],s=!1);break;case ix.WEB_MERCATOR_AUTO_OFFSET:"lnglat"===t?r=n:"cartesian"===t&&(r=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],n=e.unprojectPosition(r),r[0]-=i[0],r[1]-=i[1],r[2]-=i[2]);break;case ix.IDENTITY:(r=e.position.map(Math.fround))[2]=r[2]||0;break;case ix.GLOBE:s=!1,n=null;break;default:s=!1}return{geospatialOrigin:n,shaderCoordinateOrigin:r,offsetMode:s}}let iz=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")}: i32 = ${iI(e)};`).join(""),iF=Object.keys(ix).map(e=>`const PROJECTION_MODE_${e}: i32 = ${ix[e]};`).join(""),iB=Object.keys(iw).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${iw[e]};`).join(""),ij=`\
${iz}
${iF}
${iB}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`,iD=`\
${ij}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
      let enuMatrix = project_get_orientation_matrix(project.commonOrigin);
      let metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
      let offsetCommon = (enuMatrix * vec3<f32>(-position_world.x, -position_world.y, position_world.z)) * metersToCommon;
      return vec4<f32>(project.commonOrigin + offsetCommon, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  var clipPosition = viewProjectionMatrix * position + center;
  // deck.gl projection matrices use WebGL's [-w, w] depth range; WebGPU clips z to [0, w].
  clipPosition.z = (clipPosition.z + clipPosition.w) * 0.5;
  return clipPosition;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,iN=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")} = ${iI(e)};`).join(""),iV=Object.keys(ix).map(e=>`const int PROJECTION_MODE_${e} = ${ix[e]};`).join(""),iU=Object.keys(iw).map(e=>`const int UNIT_${e.toUpperCase()} = ${iw[e]};`).join(""),iG=`\
${iN}
${iV}
${iU}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
mat3 enuMatrix = project_get_orientation_matrix(project.commonOrigin);
float metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
vec3 offsetCommon = (enuMatrix * vec3(-position_world.xy, position_world.z)) * metersToCommon;
return vec4(project.commonOrigin + offsetCommon, position_world.w);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,iW={},i$={name:"project",dependencies:[es.fp32,er],source:iD,vs:iG,getUniforms:function(e=iW){return"viewport"in e?function({viewport:e,devicePixelRatio:t=1,modelMatrix:i=null,coordinateSystem:n="default",coordinateOrigin:r=iT,autoWrapLongitude:s=!1}){"default"===n&&(n=e.isGeospatial?"lnglat":"cartesian");let o=iO({viewport:e,devicePixelRatio:t,coordinateSystem:n,coordinateOrigin:r});return o.wrapLongitude=s,o.modelMatrix=i||iL,o}(e):{}},uniformTypes:{wrapLongitude:"f32",coordinateSystem:"i32",commonUnitsPerMeter:"vec3<f32>",projectionMode:"i32",scale:"f32",commonUnitsPerWorldUnit:"vec3<f32>",commonUnitsPerWorldUnit2:"vec3<f32>",center:"vec4<f32>",modelMatrix:"mat4x4<f32>",viewProjectionMatrix:"mat4x4<f32>",viewportSize:"vec2<f32>",devicePixelRatio:"f32",focalDistance:"f32",cameraPosition:"vec3<f32>",coordinateOrigin:"vec3<f32>",commonOrigin:"vec3<f32>",pseudoMeters:"f32"}},iq={name:"project32",dependencies:[i$],source:`\
// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,vs:`\
vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`};globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}};let iH=globalThis.mathgl.config;function iZ(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function iY(e,t,i){return function(e,t,i){if(iZ(e)){i=i||(e.clone?e.clone():Array(e.length));for(let n=0;n<i.length&&n<e.length;++n){let r="number"==typeof e?e:e[n];i[n]=t(r,n,i)}return i}return t(e)}(e,e=>Math.max(t,Math.min(i,e)))}function iX(e,t,i){return iZ(e)?e.map((e,n)=>iX(e,t[n],i)):i*t+(1-i)*e}function iK(e,t,i){let n=iH.EPSILON;i&&(iH.EPSILON=i);try{if(e===t)return!0;if(iZ(e)&&iZ(t)){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(!iK(e[i],t[i]))return!1;return!0}if(e&&e.equals)return e.equals(t);if(t&&t.equals)return t.equals(e);if("number"==typeof e&&"number"==typeof t)return Math.abs(e-t)<=iH.EPSILON*Math.max(1,Math.abs(e),Math.abs(t));return!1}finally{iH.EPSILON=n}}class iJ extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let i=0;i<this.ELEMENTS;++i)this[i]=e[i+t];return this.check()}toArray(e=[],t=0){for(let i=0;i<this.ELEMENTS;++i)e[t+i]=this[i];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:iZ(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(iH)}formatString(e){let t="";for(let i=0;i<this.ELEMENTS;++i)t+=(i>0?", ":"")+function(e,{precision:t=iH.precision}={}){return e=Math.round(e/iH.EPSILON)*iH.EPSILON,`${parseFloat(e.toPrecision(t))}`}(this[i],e);return`${e.printTypes?this.constructor.name:""}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!iK(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,i){if(void 0===i)return this.lerp(this,e,t);for(let n=0;n<this.ELEMENTS;++n){let r=e[n],s="number"==typeof t?t:t[n];this[n]=r+i*(s-r)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e[i]),t[i]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if("number"==typeof e)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(iH.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e=e&&Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e),t);return this.check()}get elements(){return this}}function iQ(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function i0(e,t,i=""){if(iH.debug&&!function(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}(e,t))throw Error(`math.gl: ${i} some fields set to invalid numbers'`);return e}function i1(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}class i2 extends iJ{get x(){return this[0]}set x(e){this[0]=iQ(e)}get y(){return this[1]}set y(e){this[1]=iQ(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let i=0;i<this.ELEMENTS;++i){let n=this[i]-e[i];t+=n*n}return iQ(t)}dot(e){let t=0;for(let i=0;i<this.ELEMENTS;++i)t+=this[i]*e[i];return iQ(t)}normalize(){let e=this.magnitude();if(0!==e)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return i1(e>=0&&e<this.ELEMENTS,"index is out of range"),iQ(this[e])}setComponent(e,t){return i1(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}}function i3(){let e=new eo(3);return eo!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function i4(e){let t=new eo(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i6(e){let t=e[0],i=e[1],n=e[2];return Math.sqrt(t*t+i*i+n*n)}function i5(e,t,i){let n=new eo(3);return n[0]=e,n[1]=t,n[2]=i,n}function i8(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function i7(e,t,i,n){return e[0]=t,e[1]=i,e[2]=n,e}function i9(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e}function ne(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e}function nt(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e[2]=t[2]*i[2],e}function ni(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e[2]=t[2]/i[2],e}function nn(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function nr(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function ns(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e[2]=Math.min(t[2],i[2]),e}function no(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e[2]=Math.max(t[2],i[2]),e}function na(e,t){return e[0]=el(t[0]),e[1]=el(t[1]),e[2]=el(t[2]),e}function nl(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e}function nc(e,t,i,n){return e[0]=t[0]+i[0]*n,e[1]=t[1]+i[1]*n,e[2]=t[2]+i[2]*n,e}function nu(e,t){let i=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(i*i+n*n+r*r)}function nh(e,t){let i=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return i*i+n*n+r*r}function nd(e){let t=e[0],i=e[1],n=e[2];return t*t+i*i+n*n}function np(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function nf(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function ng(e,t){let i=t[0],n=t[1],r=t[2],s=i*i+n*n+r*r;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function nm(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function nv(e,t,i){let n=t[0],r=t[1],s=t[2],o=i[0],a=i[1],l=i[2];return e[0]=r*l-s*a,e[1]=s*o-n*l,e[2]=n*a-r*o,e}function n_(e,t,i,n){let r=t[0],s=t[1],o=t[2];return e[0]=r+n*(i[0]-r),e[1]=s+n*(i[1]-s),e[2]=o+n*(i[2]-o),e}function ny(e,t,i,n){let r=Math.acos(Math.min(Math.max(nm(t,i),-1),1)),s=Math.sin(r),o=Math.sin((1-n)*r)/s,a=Math.sin(n*r)/s;return e[0]=o*t[0]+a*i[0],e[1]=o*t[1]+a*i[1],e[2]=o*t[2]+a*i[2],e}function nb(e,t,i,n,r,s){let o=s*s,a=o*(2*s-3)+1,l=o*(s-2)+s,c=o*(s-1),u=o*(3-2*s);return e[0]=t[0]*a+i[0]*l+n[0]*c+r[0]*u,e[1]=t[1]*a+i[1]*l+n[1]*c+r[1]*u,e[2]=t[2]*a+i[2]*l+n[2]*c+r[2]*u,e}function nx(e,t,i,n,r,s){let o=1-s,a=o*o,l=s*s,c=a*o,u=3*s*a,h=3*l*o,d=l*s;return e[0]=t[0]*c+i[0]*u+n[0]*h+r[0]*d,e[1]=t[1]*c+i[1]*u+n[1]*h+r[1]*d,e[2]=t[2]*c+i[2]*u+n[2]*h+r[2]*d,e}function nw(e,t){t=void 0===t?1:t;let i=2*ea()*Math.PI,n=2*ea()-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(i)*r,e[1]=Math.sin(i)*r,e[2]=n*t,e}function nP(e,t,i){let n=t[0],r=t[1],s=t[2],o=i[3]*n+i[7]*r+i[11]*s+i[15];return o=o||1,e[0]=(i[0]*n+i[4]*r+i[8]*s+i[12])/o,e[1]=(i[1]*n+i[5]*r+i[9]*s+i[13])/o,e[2]=(i[2]*n+i[6]*r+i[10]*s+i[14])/o,e}function nC(e,t,i){let n=t[0],r=t[1],s=t[2];return e[0]=n*i[0]+r*i[3]+s*i[6],e[1]=n*i[1]+r*i[4]+s*i[7],e[2]=n*i[2]+r*i[5]+s*i[8],e}function nM(e,t,i){let n=i[0],r=i[1],s=i[2],o=i[3],a=t[0],l=t[1],c=t[2],u=r*c-s*l,h=s*a-n*c,d=n*l-r*a,p=r*d-s*h,f=s*u-n*d,g=n*h-r*u,m=2*o;return u*=m,h*=m,d*=m,p*=2,f*=2,g*=2,e[0]=a+u+p,e[1]=l+h+f,e[2]=c+d+g,e}function nS(e,t,i,n){let r=[],s=[];return r[0]=t[0]-i[0],r[1]=t[1]-i[1],r[2]=t[2]-i[2],s[0]=r[0],s[1]=r[1]*Math.cos(n)-r[2]*Math.sin(n),s[2]=r[1]*Math.sin(n)+r[2]*Math.cos(n),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function nE(e,t,i,n){let r=[],s=[];return r[0]=t[0]-i[0],r[1]=t[1]-i[1],r[2]=t[2]-i[2],s[0]=r[2]*Math.sin(n)+r[0]*Math.cos(n),s[1]=r[1],s[2]=r[2]*Math.cos(n)-r[0]*Math.sin(n),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function nL(e,t,i,n){let r=[],s=[];return r[0]=t[0]-i[0],r[1]=t[1]-i[1],r[2]=t[2]-i[2],s[0]=r[0]*Math.cos(n)-r[1]*Math.sin(n),s[1]=r[0]*Math.sin(n)+r[1]*Math.cos(n),s[2]=r[2],e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function nA(e,t){let i=e[0],n=e[1],r=e[2],s=t[0],o=t[1],a=t[2],l=Math.sqrt((i*i+n*n+r*r)*(s*s+o*o+a*a));return Math.acos(Math.min(Math.max(l&&nm(e,t)/l,-1),1))}function nT(e){return e[0]=0,e[1]=0,e[2]=0,e}function nk(e){return`vec3(${e[0]}, ${e[1]}, ${e[2]})`}function nI(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function nO(e,t){let i=e[0],n=e[1],r=e[2],s=t[0],o=t[1],a=t[2];return Math.abs(i-s)<=1e-6*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(n-o)<=1e-6*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-a)<=1e-6*Math.max(1,Math.abs(r),Math.abs(a))}let nR=(l=i3(),function(e,t,i,n,r,s){let o,a;for(t||(t=3),i||(i=0),a=n?Math.min(n*t+i,e.length):e.length,o=i;o<a;o+=t)l[0]=e[o],l[1]=e[o+1],l[2]=e[o+2],r(l,l,s),e[o]=l[0],e[o+1]=l[1],e[o+2]=l[2];return e});function nz(e,t,i){let n=t[0],r=t[1],s=t[2],o=i[3]*n+i[7]*r+i[11]*s||1;return e[0]=(i[0]*n+i[4]*r+i[8]*s)/o,e[1]=(i[1]*n+i[5]*r+i[9]*s)/o,e[2]=(i[2]*n+i[6]*r+i[10]*s)/o,e}function nF(e,t,i){let n=t[0],r=t[1],s=t[2];return e[0]=i[0]*n+i[3]*r+i[6]*s,e[1]=i[1]*n+i[4]*r+i[7]*s,e[2]=i[2]*n+i[5]*r+i[8]*s,e[3]=t[3],e}e.s(["add",()=>i9,"angle",()=>nA,"bezier",()=>nx,"ceil",()=>nn,"clone",()=>i4,"copy",()=>i8,"create",()=>i3,"cross",()=>nv,"dist",0,nu,"distance",()=>nu,"div",0,ni,"divide",()=>ni,"dot",()=>nm,"equals",()=>nO,"exactEquals",()=>nI,"floor",()=>nr,"forEach",0,nR,"fromValues",()=>i5,"hermite",()=>nb,"inverse",()=>nf,"len",0,i6,"length",()=>i6,"lerp",()=>n_,"max",()=>no,"min",()=>ns,"mul",0,nt,"multiply",()=>nt,"negate",()=>np,"normalize",()=>ng,"random",()=>nw,"rotateX",()=>nS,"rotateY",()=>nE,"rotateZ",()=>nL,"round",()=>na,"scale",()=>nl,"scaleAndAdd",()=>nc,"set",()=>i7,"slerp",()=>ny,"sqrDist",0,nh,"sqrLen",0,nd,"squaredDistance",()=>nh,"squaredLength",()=>nd,"str",()=>nk,"sub",0,ne,"subtract",()=>ne,"transformMat3",()=>nC,"transformMat4",()=>nP,"transformQuat",()=>nM,"zero",()=>nT],93311);let nB=[0,0,0];class nj extends i2{static get ZERO(){return t||Object.freeze(t=new nj(0,0,0)),t}constructor(e=0,t=0,i=0){super(-0,-0,-0),1==arguments.length&&iZ(e)?this.copy(e):(iH.debug&&(iQ(e),iQ(t),iQ(i)),this[0]=e,this[1]=t,this[2]=i)}set(e,t,i){return this[0]=e,this[1]=t,this[2]=i,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return iH.debug&&(iQ(e.x),iQ(e.y),iQ(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=iQ(e)}angle(e){return nA(this,e)}cross(e){return nv(this,this,e),this.check()}rotateX({radians:e,origin:t=nB}){return nS(this,this,t,e),this.check()}rotateY({radians:e,origin:t=nB}){return nE(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=nB}){return nL(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return nP(this,this,e),this.check()}transformAsVector(e){return nz(this,this,e),this.check()}transformByMatrix3(e){return nC(this,this,e),this.check()}transformByMatrix2(e){let t,i;return t=this[0],i=this[1],this[0]=e[0]*t+e[2]*i,this[1]=e[1]*t+e[3]*i,this[2]=this[2],this.check()}transformByQuaternion(e){return nM(this,this,e),this.check()}}class nD extends iJ{toString(){let e="[";if(iH.printRowMajor){e+="row-major:";for(let t=0;t<this.RANK;++t)for(let i=0;i<this.RANK;++i)e+=` ${this[i*this.RANK+t]}`}else{e+="column-major:";for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+"]"}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,i){return this[t*this.RANK+e]=iQ(i),this}getColumn(e,t=Array(this.RANK).fill(-0)){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[i+e];return t}setColumn(e,t){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)this[i+e]=t[e];return this}}function nN(){let e=new eo(2);return eo!=Float32Array&&(e[0]=0,e[1]=0),e}function nV(e){let t=new eo(2);return t[0]=e[0],t[1]=e[1],t}function nU(e,t){let i=new eo(2);return i[0]=e,i[1]=t,i}function nG(e,t){return e[0]=t[0],e[1]=t[1],e}function nW(e,t,i){return e[0]=t,e[1]=i,e}function n$(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e}function nq(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function nH(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e}function nZ(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e}function nY(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}function nX(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function nK(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e}function nJ(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e}function nQ(e,t){return e[0]=el(t[0]),e[1]=el(t[1]),e}function n0(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e}function n1(e,t,i,n){return e[0]=t[0]+i[0]*n,e[1]=t[1]+i[1]*n,e}function n2(e,t){let i=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(i*i+n*n)}function n3(e,t){let i=t[0]-e[0],n=t[1]-e[1];return i*i+n*n}function n4(e){let t=e[0],i=e[1];return Math.sqrt(t*t+i*i)}function n6(e){let t=e[0],i=e[1];return t*t+i*i}function n5(e,t){return e[0]=-t[0],e[1]=-t[1],e}function n8(e,t){return e[0]=1/t[0],e[1]=1/t[1],e}function n7(e,t){let i=t[0],n=t[1],r=i*i+n*n;return r>0&&(r=1/Math.sqrt(r)),e[0]=t[0]*r,e[1]=t[1]*r,e}function n9(e,t){return e[0]*t[0]+e[1]*t[1]}function re(e,t,i){let n=t[0]*i[1]-t[1]*i[0];return e[0]=e[1]=0,e[2]=n,e}function rt(e,t,i,n){let r=t[0],s=t[1];return e[0]=r+n*(i[0]-r),e[1]=s+n*(i[1]-s),e}function ri(e,t){t=void 0===t?1:t;let i=2*ea()*Math.PI;return e[0]=Math.cos(i)*t,e[1]=Math.sin(i)*t,e}function rn(e,t,i){let n=t[0],r=t[1];return e[0]=i[0]*n+i[2]*r,e[1]=i[1]*n+i[3]*r,e}function rr(e,t,i){let n=t[0],r=t[1];return e[0]=i[0]*n+i[2]*r+i[4],e[1]=i[1]*n+i[3]*r+i[5],e}function rs(e,t,i){let n=t[0],r=t[1];return e[0]=i[0]*n+i[3]*r+i[6],e[1]=i[1]*n+i[4]*r+i[7],e}function ro(e,t,i){let n=t[0],r=t[1];return e[0]=i[0]*n+i[4]*r+i[12],e[1]=i[1]*n+i[5]*r+i[13],e}function ra(e,t,i,n){let r=t[0]-i[0],s=t[1]-i[1],o=Math.sin(n),a=Math.cos(n);return e[0]=r*a-s*o+i[0],e[1]=r*o+s*a+i[1],e}function rl(e,t){let i=e[0],n=e[1],r=t[0],s=t[1],o=Math.sqrt((i*i+n*n)*(r*r+s*s));return Math.acos(Math.min(Math.max(o&&(i*r+n*s)/o,-1),1))}function rc(e){return e[0]=0,e[1]=0,e}function ru(e){return`vec2(${e[0]}, ${e[1]})`}function rh(e,t){return e[0]===t[0]&&e[1]===t[1]}function rd(e,t){let i=e[0],n=e[1],r=t[0],s=t[1];return Math.abs(i-r)<=1e-6*Math.max(1,Math.abs(i),Math.abs(r))&&Math.abs(n-s)<=1e-6*Math.max(1,Math.abs(n),Math.abs(s))}let rp=(c=nN(),function(e,t,i,n,r,s){let o,a;for(t||(t=2),i||(i=0),a=n?Math.min(n*t+i,e.length):e.length,o=i;o<a;o+=t)c[0]=e[o],c[1]=e[o+1],r(c,c,s),e[o]=c[0],e[o+1]=c[1];return e});e.s(["add",()=>n$,"angle",()=>rl,"ceil",()=>nY,"clone",()=>nV,"copy",()=>nG,"create",()=>nN,"cross",()=>re,"dist",0,n2,"distance",()=>n2,"div",0,nZ,"divide",()=>nZ,"dot",()=>n9,"equals",()=>rd,"exactEquals",()=>rh,"floor",()=>nX,"forEach",0,rp,"fromValues",()=>nU,"inverse",()=>n8,"len",0,n4,"length",()=>n4,"lerp",()=>rt,"max",()=>nJ,"min",()=>nK,"mul",0,nH,"multiply",()=>nH,"negate",()=>n5,"normalize",()=>n7,"random",()=>ri,"rotate",()=>ra,"round",()=>nQ,"scale",()=>n0,"scaleAndAdd",()=>n1,"set",()=>nW,"sqrDist",0,n3,"sqrLen",0,n6,"squaredDistance",()=>n3,"squaredLength",()=>n6,"str",()=>ru,"sub",0,nq,"subtract",()=>nq,"transformMat2",()=>rn,"transformMat2d",()=>rr,"transformMat3",()=>rs,"transformMat4",()=>ro,"zero",()=>rc],60113),(y=C||(C={}))[y.COL0ROW0=0]="COL0ROW0",y[y.COL0ROW1=1]="COL0ROW1",y[y.COL0ROW2=2]="COL0ROW2",y[y.COL0ROW3=3]="COL0ROW3",y[y.COL1ROW0=4]="COL1ROW0",y[y.COL1ROW1=5]="COL1ROW1",y[y.COL1ROW2=6]="COL1ROW2",y[y.COL1ROW3=7]="COL1ROW3",y[y.COL2ROW0=8]="COL2ROW0",y[y.COL2ROW1=9]="COL2ROW1",y[y.COL2ROW2=10]="COL2ROW2",y[y.COL2ROW3=11]="COL2ROW3",y[y.COL3ROW0=12]="COL3ROW0",y[y.COL3ROW1=13]="COL3ROW1",y[y.COL3ROW2=14]="COL3ROW2",y[y.COL3ROW3=15]="COL3ROW3";let rf=45*Math.PI/180,rg=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);class rm extends nD{static get IDENTITY(){return n||Object.freeze(n=new rm),n}static get ZERO(){return i||Object.freeze(i=new rm([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),i}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return C}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),1==arguments.length&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,i,n,r,s,o,a,l,c,u,h,d,p,f,g){return this[0]=e,this[1]=t,this[2]=i,this[3]=n,this[4]=r,this[5]=s,this[6]=o,this[7]=a,this[8]=l,this[9]=c,this[10]=u,this[11]=h,this[12]=d,this[13]=p,this[14]=f,this[15]=g,this.check()}setRowMajor(e,t,i,n,r,s,o,a,l,c,u,h,d,p,f,g){return this[0]=e,this[1]=r,this[2]=l,this[3]=d,this[4]=t,this[5]=s,this[6]=c,this[7]=p,this[8]=i,this[9]=o,this[10]=u,this[11]=f,this[12]=n,this[13]=a,this[14]=h,this[15]=g,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(rg)}fromObject(e){return this.check()}fromQuaternion(e){return eN(this,e),this.check()}frustum(e){var t,i,n,r,s,o;let{left:a,right:l,bottom:c,top:u,near:h=.1,far:d=500}=e;return d===1/0?(t=this,i=a,n=l,r=c,s=u,o=h,t[0]=2*o/(n-i),t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o/(s-r),t[6]=0,t[7]=0,t[8]=(n+i)/(n-i),t[9]=(s+r)/(s-r),t[10]=-1,t[11]=-1,t[12]=0,t[13]=0,t[14]=-2*o,t[15]=0):eV(this,a,l,c,u,h,d),this.check()}lookAt(e){let{eye:t,center:i=[0,0,0],up:n=[0,1,0]}=e;return eH(this,t,i,n),this.check()}ortho(e){let{left:t,right:i,bottom:n,top:r,near:s=.1,far:o=500}=e;return e$(this,t,i,n,r,s,o),this.check()}orthographic(e){let{fovy:t=rf,aspect:i=1,focalDistance:n=1,near:r=.1,far:s=500}=e;rv(t);let o=n*Math.tan(t/2),a=o*i;return this.ortho({left:-a,right:a,bottom:-o,top:o,near:r,far:s})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:i=1,near:n=.1,far:r=500}=e;return rv(t),eU(this,t,i,n,r),this.check()}determinant(){return e_(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),n=1/i[0],r=1/i[1],s=1/i[2];return e[0]=this[0]*n,e[1]=this[1]*r,e[2]=this[2]*s,e[3]=0,e[4]=this[4]*n,e[5]=this[5]*r,e[6]=this[6]*s,e[7]=0,e[8]=this[8]*n,e[9]=this[9]*r,e[10]=this[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),n=1/i[0],r=1/i[1],s=1/i[2];return e[0]=this[0]*n,e[1]=this[1]*r,e[2]=this[2]*s,e[3]=this[4]*n,e[4]=this[5]*r,e[5]=this[6]*s,e[6]=this[8]*n,e[7]=this[9]*r,e[8]=this[10]*s,e}transpose(){return eg(this,this),this.check()}invert(){return em(this,this),this.check()}multiplyLeft(e){return ey(this,e,this),this.check()}multiplyRight(e){return ey(this,this,e),this.check()}rotateX(e){return eP(this,this,e),this.check()}rotateY(e){return eC(this,this,e),this.check()}rotateZ(e){return eM(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return ew(this,this,e,t),this.check()}scale(e){return ex(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return eb(this,this,e),this.check()}transform(e,t){return 4===e.length?(i0(t=tx(t||[-0,-0,-0,-0],e,this),4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let i,{length:n}=e;switch(n){case 2:i=ro(t||[-0,-0],e,this);break;case 3:i=nP(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return i0(i,e.length),i}transformAsVector(e,t){let i;switch(e.length){case 2:var n;let r,s,o;n=t||[-0,-0],r=e[0],s=e[1],o=this[3]*r+this[7]*s||1,n[0]=(this[0]*r+this[4]*s)/o,n[1]=(this[1]*r+this[5]*s)/o,i=n;break;case 3:i=nz(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return i0(i,e.length),i}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,i){return this.identity().translate([e,t,i])}}function rv(e){if(e>2*Math.PI)throw Error("expected radians")}var tL=tL;function r_(e,t){let i=tL.transformMat4([],t,e);return tL.scale(i,i,1/i[3]),i}function ry(e,t,i){return e<t?t:e>i?i:e}let rb=Math.log2||function(e){return Math.log(e)*Math.LOG2E};var e3=e3,rx=e.i(60113),rx=rx,rw=e.i(93311),rw=rw;function rP(e,t){if(!e)throw Error(t||"@math.gl/web-mercator: assertion failed.")}let rC=Math.PI,rM=rC/4,rS=rC/180,rE=180/rC;function rL(e){let[t,i]=e;rP(Number.isFinite(t)),rP(Number.isFinite(i)&&i>=-90&&i<=90,"invalid latitude");let n=512*(rC+Math.log(Math.tan(rM+i*rS*.5)))/(2*rC);return[512*(t*rS+rC)/(2*rC),n]}function rA(e){let[t,i]=e,n=2*(Math.atan(Math.exp(i/512*(2*rC)-rC))-rM);return[(t/512*(2*rC)-rC)*rE,n*rE]}function rT(e){return 512/4003e4/Math.cos(e*rS)}function rk(e){let{latitude:t,longitude:i,highPrecision:n=!1}=e;rP(Number.isFinite(t)&&Number.isFinite(i));let r=Math.cos(t*rS),s=512/360/r,o=512/4003e4/r,a={unitsPerMeter:[o,o,o],metersPerUnit:[1/o,1/o,1/o],unitsPerDegree:[512/360,s,o],degreesPerUnit:[1/(512/360),1/s,1/o]};if(n){let e=rS*Math.tan(t*rS)/r,i=512/4003e4*e,n=i/s*o;a.unitsPerDegree2=[0,512/360*e/2,i],a.unitsPerMeter2=[n,0,n]}return a}function rI(e,t){let[i,n,r]=e,[s,o,a]=t,{unitsPerMeter:l,unitsPerMeter2:c}=rk({longitude:i,latitude:n,highPrecision:!0}),u=rL(e);u[0]+=s*(l[0]+c[0]*o),u[1]+=o*(l[1]+c[1]*o);let h=rA(u);return Number.isFinite(r)||Number.isFinite(a)?[h[0],h[1],(r||0)+(a||0)]:h}function rO(e){return 2*Math.atan(.5/e)*rE}function rR(e){return .5/Math.tan(.5*e*rS)}function rz(e,t){let[i,n,r=0]=e;return rP(Number.isFinite(i)&&Number.isFinite(n)&&Number.isFinite(r)),r_(t,[i,n,r,1])}function rF(e,t,i=0){let[n,r,s]=e;if(rP(Number.isFinite(n)&&Number.isFinite(r),"invalid pixel coordinate"),Number.isFinite(s))return r_(t,[n,r,s,1]);let o=r_(t,[n,r,0,1]),a=r_(t,[n,r,1,1]),l=o[2],c=a[2];return rx.lerp([],o,a,l===c?0:((i||0)-l)/(c-l))}var rx=rx;let rB=Math.PI/180;function rj(e,t,i){let{pixelUnprojectionMatrix:n}=e,r=r_(n,[t,0,1,1]),s=r_(n,[t,e.height,1,1]),o=(i*e.distanceScales.unitsPerMeter[2]-r[2])/(s[2]-r[2]),a=rA(rx.lerp([],r,s,o));return a.push(i),a}var e3=e3,rx=rx,rw=rw,rx=rx;let rD=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,rN=`
const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}
`,rV=`
${rD}
${rN}
`,rU=`
const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}
`,rG=`
${rD}
${rU}
`,rW=iM(function({viewport:e,center:t}){return new rm(e.viewProjectionMatrix).invert().transform(t)}),r$=iM(function({viewport:e,shadowMatrices:t}){let i=[],n=e.pixelUnprojectionMatrix,r=e.isGeospatial?void 0:1,s=[[0,0,r],[e.width,0,r],[0,e.height,r],[e.width,e.height,r],[0,0,-1],[e.width,0,-1],[0,e.height,-1],[e.width,e.height,-1]].map(e=>(function(e,t){let[i,n,r]=e,s=rF([i,n,r],t);return Number.isFinite(r)?s:[s[0],s[1],0]})(e,n));for(let n of t){let t=n.clone().translate(new nj(e.center).negate()),r=s.map(e=>t.transform(e)),o=new rm().ortho({left:Math.min(...r.map(e=>e[0])),right:Math.max(...r.map(e=>e[0])),bottom:Math.min(...r.map(e=>e[1])),top:Math.max(...r.map(e=>e[1])),near:Math.min(...r.map(e=>-e[2])),far:Math.max(...r.map(e=>-e[2]))});i.push(o.multiplyRight(n))}return i}),rq=[0,0,0,1],rH=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],rZ={name:"shadow",dependencies:[i$],vs:rV,fs:rG,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:function(e){let{shadowEnabled:t=!0,project:i}=e;if(!t||!i||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let n=i$.getUniforms(i),r=rW({viewport:i.viewport,center:n.center}),s=[],o=r$({shadowMatrices:e.shadowMatrices,viewport:i.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],a=e.clone().translate(new nj(i.viewport.center).negate());n.coordinateSystem===iI("lnglat")&&n.projectionMode===ix.WEB_MERCATOR?(o[t]=a,s[t]=r):(o[t]=e.clone().multiplyRight(rH),s[t]=a.transform(r))}let a={drawShadowMap:!!e.drawToShadowMap,useShadowMap:!!e.shadowMaps&&e.shadowMaps.length>0,color:e.shadowColor||rq,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)a[`viewProjectionMatrix${e}`]=o[e],a[`projectCenter${e}`]=s[e];for(let t=0;t<2;t++)a[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return a},uniformTypes:{drawShadowMap:"f32",useShadowMap:"f32",color:"vec4<f32>",lightId:"i32",lightCount:"f32",viewProjectionMatrix0:"mat4x4<f32>",viewProjectionMatrix1:"mat4x4<f32>",projectCenter0:"vec4<f32>",projectCenter1:"vec4<f32>"}},rY={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useByteColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:function(e={},t){let i={},n=G(e.useByteColors,!0);return void 0===e.highlightedObjectColor||(null===e.highlightedObjectColor?i.isHighlightActive=!1:(i.isHighlightActive=!0,i.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(i.highlightColor=function(e,t=!0){let i=W(e.slice(0,3),t),n=Number.isFinite(e[3]),r=n?e[3]:1;return[i[0],i[1],i[2],t&&n?r/255:r]}(e.highlightColor,n)),void 0!==e.isActive&&(i.isActive=!!e.isActive,i.isAttribute=!!e.isAttribute),void 0!==e.useByteColors&&(i.useByteColors=!!e.useByteColors),i}},rX=`\
  float disabledPickingIndexCount;
  vec4 disabledPickingIndices0;
  vec4 disabledPickingIndices1;
  vec4 disabledPickingIndices2;
`;function rK(e){return e.replace("  vec4 highlightColor;\n} picking;",`  vec4 highlightColor;
${rX}} picking;`)}function rJ(e,t){return[e[t]||0,e[t+1]||0,e[t+2]||0,e[t+3]||0]}let rQ=`\
vec3 picking_getPickingColorFromIndex(float objectIndex) {
  if (objectIndex < 0.0 || objectIndex >= 16777215.0) {
    return vec3(0.0);
  }

  for (int i = 0; i < 10; i++) {
    if (float(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    vec4 disabledIndices = i < 4
      ? picking.disabledPickingIndices0
      : (i < 8 ? picking.disabledPickingIndices1 : picking.disabledPickingIndices2);
    float disabledIndex = disabledIndices[i - (i / 4) * 4];
    if (disabledIndex == objectIndex) {
      return vec3(0.0);
    }
  }

  float encodedIndex = objectIndex + 1.0;
  return vec3(
    mod(encodedIndex, 256.0),
    mod(floor(encodedIndex / 256.0), 256.0),
    mod(floor(encodedIndex / 65536.0), 256.0)
  );
}

vec3 picking_getPickingColorFromIndex(uint objectIndex) {
  return picking_getPickingColorFromIndex(float(objectIndex));
}

vec3 picking_getPickingColorFromInstanceID() {
  return picking_getPickingColorFromIndex(float(gl_InstanceID));
}

void picking_setPickingColorFromInstanceID() {
  picking_setPickingColor(picking_getPickingColorFromInstanceID());
}
`,r0=`\
struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
  disabledPickingIndexCount: f32,
  disabledPickingIndices0: vec4<f32>,
  disabledPickingIndices1: vec4<f32>,
  disabledPickingIndices2: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}

fn picking_getPickingColorFromIndex(objectIndex: u32) -> vec3<f32> {
  if (objectIndex >= 16777215u) {
    return vec3<f32>(0.0);
  }

  for (var i = 0; i < 10; i = i + 1) {
    if (f32(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    let disabledIndices = select(
      picking.disabledPickingIndices2,
      select(picking.disabledPickingIndices1, picking.disabledPickingIndices0, i < 4),
      i < 8
    );
    let disabledIndex = disabledIndices[i % 4];
    if (disabledIndex == f32(objectIndex)) {
      return vec3<f32>(0.0);
    }
  }

  let encodedIndex = objectIndex + 1u;
  return vec3<f32>(
    f32(encodedIndex % 256u),
    f32((encodedIndex / 256u) % 256u),
    f32((encodedIndex / 65536u) % 256u)
  ) / 255.0;
}
`,r1={...rY,vs:`${rK(rY.vs)}
${rQ}`,fs:rK(rY.fs),source:r0,uniformTypes:{...rY.uniformTypes,disabledPickingIndexCount:"f32",disabledPickingIndices0:"vec4<f32>",disabledPickingIndices1:"vec4<f32>",disabledPickingIndices2:"vec4<f32>"},defaultUniforms:{...rY.defaultUniforms,useByteColors:!0,disabledPickingIndexCount:0,disabledPickingIndices0:[0,0,0,0],disabledPickingIndices1:[0,0,0,0],disabledPickingIndices2:[0,0,0,0]},getUniforms(e,t){let i=rY.getUniforms(e,t),n=e.disabledPickingIndices||[];return i.disabledPickingIndexCount=n.length,i.disabledPickingIndices0=rJ(n,0),i.disabledPickingIndices1=rJ(n,4),i.disabledPickingIndices2=rJ(n,8),i},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},r2=[er],r3=["vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)","vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)","vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)","fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)"],r4=[],r6=Symbol.for("component"),r5=Symbol.for("propTypes"),r8=Symbol.for("deprecatedProps"),r7=Symbol.for("asyncPropDefaults"),r9=Symbol.for("asyncPropOriginal"),se=Symbol.for("asyncPropResolved"),st={};function si(e){st=e}function sn(e,t,i,n){tT.level>0&&st[e]&&st[e].call(null,t,i,n)}function sr(e,t=()=>!0){return Array.isArray(e)?function e(t,i,n){let r=-1;for(;++r<t.length;){let s=t[r];Array.isArray(s)?e(s,i,n):i(s)&&n.push(s)}return n}(e,t,[]):t(e)?[e]:[]}e.i(23635);var ss=e.i(9685);let so=e=>null!==e&&"object"==typeof e,sa=e=>so(e)&&e.constructor===({}).constructor,sl=e=>"undefined"!=typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer,sc=e=>so(e)&&"number"==typeof e.byteLength&&"function"==typeof e.slice,su=e=>"undefined"!=typeof Response&&e instanceof Response||so(e)&&"function"==typeof e.arrayBuffer&&"function"==typeof e.text&&"function"==typeof e.json,sh=e=>"undefined"!=typeof Blob&&e instanceof Blob,sd=e=>{let t,i;return t=e,"undefined"!=typeof ReadableStream&&t instanceof ReadableStream||so(t)&&"function"==typeof t.tee&&"function"==typeof t.cancel&&"function"==typeof t.getReader||so(i=e)&&"function"==typeof i.read&&"function"==typeof i.pipe&&"boolean"==typeof i.readable};function sp(e,t){if(!e)throw Error(t||"loader assertion failed.")}function sf(e){return!!e&&(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions))}function sg(e){let t;return sp(e,"null loader"),sp(sf(e),"invalid loader"),Array.isArray(e)&&(t=e[1],e={...e=e[0],options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}let sm={};class sv extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response}let s_=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,sy=/^([-\w.]+\/[-\w.+]+)/;function sb(e,t){return e.toLowerCase()===t.toLowerCase()}function sx(e){let t=s_.exec(e);return t?t[1]:""}let sw=/\?.*/;function sP(e){return e.replace(sw,"")}function sC(e){return su(e)?e.url:sh(e)?("name"in e?e.name:"")||"":"string"==typeof e?e:""}function sM(e){if(su(e)){let t,i=e.headers.get("content-type")||"",n=sP(e.url);return((t=sy.exec(i))?t[1]:i)||sx(n)}return sh(e)?e.type||"":"string"==typeof e?sx(e):""}async function sS(e){var t;if(su(e))return e;let i={},n=su(t=e)?t.headers["content-length"]||-1:sh(t)?t.size:"string"==typeof t?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1;n>=0&&(i["content-length"]=String(n));let r=sC(e),s=sM(e);s&&(i["content-type"]=s);let o=await sA(e);o&&(i["x-first-bytes"]=o),"string"==typeof e&&(e=new TextEncoder().encode(e));let a=new Response(e,{headers:i});return Object.defineProperty(a,"url",{value:r}),a}async function sE(e){if(!e.ok)throw await sL(e)}async function sL(e){let t=function(e){if(e.length<50)return e;let t=e.slice(e.length-15),i=e.substr(0,32);return`${i}...${t}`}(e.url),i=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;i=i.length>100?`${i.slice(0,100)}...`:i;let n={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get("Content-Type");n.reason=!e.bodyUsed&&t?.includes("application/json")?await e.json():await e.text()}catch(e){}return new sv(i,n)}async function sA(e){if("string"==typeof e)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let i=new FileReader;i.onload=t=>e(t?.target?.result),i.readAsDataURL(t)})}if(e instanceof ArrayBuffer){let t=function(e){let t="",i=new Uint8Array(e);for(let e=0;e<i.byteLength;e++)t+=String.fromCharCode(i[e]);return btoa(t)}(e.slice(0,5));return`data:base64,${t}`}return null}async function sT(e,t){if("string"==typeof e){var i;let n=function(e){for(let t in sm)if(e.startsWith(t)){let i=sm[t];e=e.replace(t,i)}return e.startsWith("http://")||e.startsWith("https://")||(e=`${e}`),e}(e);return!((i=n).startsWith("http:")||i.startsWith("https:"))&&!n.startsWith("data:")&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(n,t):await fetch(n,t)}return await sS(e)}let sk="4.4.5",sI=sk[0]>="0"&&sk[0]<="9"?`v${sk}`:"",sO=(u=new tA.Log({id:"loaders.gl"}),globalThis.loaders||={},globalThis.loaders.log=u,globalThis.loaders.version=sI,globalThis.probe||={},globalThis.probe.loaders=u,u);function sR(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(t+1):e}function sz(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(0,t):""}function sF(...e){return(e=e.map((t,i)=>(i&&(t=t.replace(RegExp("^/"),"")),i!==e.length-1&&(t=t.replace(RegExp("/$"),"")),t))).join("/")}function sB(...e){let t,i=[];for(let t=0;t<e.length;t++)i[t]=e[t];let n="",r=!1;for(let e=i.length-1;e>=-1&&!r;e--){let s;e>=0?s=i[e]:(void 0===t&&(t=function(){if(void 0!==S.default&&void 0!==S.default.cwd)return S.default.cwd();let e=window.location?.pathname;return e?.slice(0,e.lastIndexOf("/")+1)||""}()),s=t),0!==s.length&&(n=`${s}/${n}`,r=s.charCodeAt(0)===sj)}return(n=function(e,t){let i,n="",r=-1,s=0,o=!1;for(let a=0;a<=e.length;++a){if(a<e.length)i=e.charCodeAt(a);else if(i===sj)break;else i=sj;if(i===sj){if(r===a-1||1===s);else if(r!==a-1&&2===s){if(n.length<2||!o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){let e=n.length-1,t=e;for(;t>=0&&n.charCodeAt(t)!==sj;--t);if(t!==e){n=-1===t?"":n.slice(0,t),r=a,s=0,o=!1;continue}}else if(2===n.length||1===n.length){n="",r=a,s=0,o=!1;continue}}t&&(n.length>0?n+="/..":n="..",o=!0)}else{let t=e.slice(r+1,a);n.length>0?n+=`/${t}`:n=t,o=!1}r=a,s=0}else 46===i&&-1!==s?++s:s=-1}return n}(n,!r),r)?`/${n}`:n.length>0?n:"."}let sj=47;e.s(["dirname",()=>sz,"filename",()=>sR,"join",()=>sF,"resolve",()=>sB],71439);var sD=e.i(71439),sD=sD;let sN=new tA.Log({id:"loaders.gl"});class sV{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}let sU={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:e.g,document:"undefined"!=typeof document&&document};sU.self||sU.window||sU.global,sU.window||sU.self||sU.global,sU.global||sU.self||sU.window,sU.document;let sG=("object"!=typeof S.default||"[object process]"!==String(S.default),!0),sW=void 0!==S.default&&S.default.version&&/v([0-9]*)/.exec(S.default.version);sW&&parseFloat(sW[1]);let s$={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}},useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:sG,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]}},sq={baseUri:"core.baseUrl",fetch:"core.fetch",mimeType:"core.mimeType",fallbackMimeType:"core.fallbackMimeType",ignoreRegisteredLoaders:"core.ignoreRegisteredLoaders",nothrow:"core.nothrow",log:"core.log",useLocalLibraries:"core.useLocalLibraries",CDN:"core.CDN",worker:"core.worker",maxConcurrency:"core.maxConcurrency",maxMobileConcurrency:"core.maxMobileConcurrency",reuseWorkers:"core.reuseWorkers",_nodeWorkers:"core.nodeWorkers",_workerType:"core._workerType",_worker:"core._workerType",limit:"core.limit",_limitMB:"core._limitMB",batchSize:"core.batchSize",batchDebounceMs:"core.batchDebounceMs",metadata:"core.metadata",transforms:"core.transforms",throws:"nothrow",dataType:"(no longer used)",uri:"core.baseUrl",method:"core.fetch.method",headers:"core.fetch.headers",body:"core.fetch.body",mode:"core.fetch.mode",credentials:"core.fetch.credentials",cache:"core.fetch.cache",redirect:"core.fetch.redirect",referrer:"core.fetch.referrer",referrerPolicy:"core.fetch.referrerPolicy",integrity:"core.fetch.integrity",keepalive:"core.fetch.keepalive",signal:"core.fetch.signal"},sH=["baseUrl","fetch","mimeType","fallbackMimeType","ignoreRegisteredLoaders","nothrow","log","useLocalLibraries","CDN","worker","maxConcurrency","maxMobileConcurrency","reuseWorkers","_nodeWorkers","_workerType","limit","_limitMB","batchSize","batchDebounceMs","metadata","transforms"];function sZ(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||(e._state={}),e._state}function sY(){let e=sZ();return e.globalOptions=e.globalOptions||{...s$,core:{...s$.core}},sX(e.globalOptions)}function sX(e){var t;let i,n=(i={...t=e},t.core&&(i.core={...t.core}),i);for(let e of(sQ(n),sH))n.core&&void 0!==n.core[e]&&delete n[e];return n.core&&void 0!==n.core._workerType&&delete n._worker,n}function sK(e,t,i,n,r){let s=t||"Top level",o=t?`${t}.`:"";for(let a in e){let l=!t&&so(e[a]),c="baseUri"===a&&!t,u="workerUrl"===a&&t;if(!(a in i)&&!c&&!u){if(a in n)sN.level>0&&sN.warn(`${s} loader option '${o}${a}' no longer supported, use '${n[a]}'`)();else if(!l&&sN.level>0){let e=function(e,t){let i=e.toLowerCase(),n="";for(let r of t)for(let t in r.options){if(e===t)return`Did you mean '${r.id}.${t}'?`;let s=t.toLowerCase();(i.startsWith(s)||s.startsWith(i))&&(n=n||`Did you mean '${r.id}.${t}'?`)}return n}(a,r);sN.warn(`${s} loader option '${o}${a}' not recognized. ${e}`)()}}}}function sJ(e,t){for(let i in t)i in t&&(sa(t[i])&&sa(e[i])?e[i]={...e[i],...t[i]}:e[i]=t[i])}function sQ(e){for(let t of(void 0!==e.baseUri&&(e.core||={},void 0===e.core.baseUrl&&(e.core.baseUrl=e.baseUri)),sH))if(void 0!==e[t]){let i=e.core=e.core||{};void 0===i[t]&&(i[t]=e[t])}let t=e._worker;void 0!==t&&(e.core||={},void 0===e.core._workerType&&(e.core._workerType=t))}function s0(e,t){let i=sY(),n=e||i,r=n.fetch??n.core?.fetch;return"function"==typeof r?r:so(r)?e=>sT(e,r):t?.fetch?t?.fetch:sT}let s1={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:e.g,document:"undefined"!=typeof document&&document};s1.self||s1.window||s1.global,s1.window||s1.self||s1.global,s1.global||s1.self||s1.window,s1.document;let s2="object"!=typeof S.default||"[object process]"!==String(S.default)||!0,s3="undefined"!=typeof window&&void 0!==window.orientation,s4=void 0!==S.default&&S.default.version&&/v([0-9]*)/.exec(S.default.version);s4&&parseFloat(s4[1]);class s6{terminate(){}}function s5(e,t){if(!e)throw Error(t||"loaders.gl assertion failed.")}let s8=new Map;function s7(e){let t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}function s9(e){return!!e&&!!(e instanceof ArrayBuffer||"undefined"!=typeof MessagePort&&e instanceof MessagePort||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas)}let oe=()=>{};class ot{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return"undefined"!=typeof Worker&&s2||!s2}constructor(e){const{name:t,source:i,url:n}=e;s5(i||n),this.name=t,this.source=i,this.url=n,this.onMessage=oe,this.onError=e=>console.log(e),this.worker=s2?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=oe,this.onError=oe,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t=t||function e(t,i=!0,n){let r=n||new Set;if(t){if(s9(t))r.add(t);else if(s9(t.buffer))r.add(t.buffer);else if(ArrayBuffer.isView(t));else if(i&&"object"==typeof t)for(let n in t)e(t[n],i,r)}return void 0===n?Array.from(r):[]}(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t="Failed to load ";return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){var e,t,i;let n;this._loadableURL=(s5((e={source:this.source,url:this.url}).source&&!e.url||!e.source&&e.url),(n=s8.get(e.source||e.url))||(e.url&&(n=(t=e.url).startsWith("http")?s7((i=t,`\
try {
  importScripts('${i}');
} catch (error) {
  console.error(error);
  throw error;
}`)):t,s8.set(e.url,n)),e.source&&(n=s7(e.source),s8.set(e.source,n))),s5(n),n);let r=new Worker(this._loadableURL,{name:this.name});return r.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error("No data received"))},r.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},r.onmessageerror=e=>console.error(e),r}_createNodeWorker(){let e;if(this.url)e=new s6(this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(".ts")||this.url.endsWith(".mjs")?"module":"commonjs"});else if(this.source)e=new s6(this.source,{eval:!0});else throw Error("no worker");return e.on("message",e=>{this.onMessage(e)}),e.on("error",e=>{this.onError(e)}),e.on("exit",e=>{}),e}}class oi{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:t})}done(e){s5(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){s5(this.isRunning),this.isRunning=!1,this._reject(e)}}class on{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return ot.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},void 0!==e.name&&(this.name=e.name),void 0!==e.maxConcurrency&&(this.maxConcurrency=e.maxConcurrency),void 0!==e.maxMobileConcurrency&&(this.maxMobileConcurrency=e.maxMobileConcurrency),void 0!==e.reuseWorkers&&(this.reuseWorkers=e.reuseWorkers),void 0!==e.onDebug&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,i)=>e.done(i),i=(e,t)=>e.error(t)){let n=new Promise(n=>(this.jobQueue.push({name:e,onMessage:t,onError:i,onStart:n}),this));return this._startQueuedJob(),await n}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:"Starting job",name:t.name,workerThread:e,backlog:this.jobQueue.length});let i=new oi(t.name,e);e.onMessage=e=>t.onMessage(i,e.type,e.payload),e.onError=e=>t.onError(i,e),t.onStart(i);try{await i.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!s2||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new ot({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return s3?this.maxMobileConcurrency:this.maxConcurrency}}let or={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}};class os{props;workerPools=new Map;static _workerFarm;static isSupported(){return ot.isSupported()}static getWorkerFarm(e={}){return os._workerFarm=os._workerFarm||new os({}),os._workerFarm.setProps(e),os._workerFarm}constructor(e){this.props={...or},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){for(let t of(this.props={...this.props,...e},this.workerPools.values()))t.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:i,url:n}=e,r=this.workerPools.get(t);return r||((r=new on({name:t,source:i,url:n})).setProps(this._getWorkerPoolProps()),this.workerPools.set(t,r)),r}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}let oo=(globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.4.5"),globalThis._loadersgl_.version);async function oa(e,t,i,n,r){let s=e.id,o=function(e,t={}){let i=t[e.id]||{},n=s2?`${e.id}-worker.js`:`${e.id}-worker-node.js`,r=i.workerUrl;if(r||"compression"!==e.id||(r=t.workerUrl),"test"===(t._workerType||t?.core?._workerType)&&(r=s2?`modules/${e.module}/dist/${n}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!r){let t=e.version;"latest"===t&&(t="latest");let i=t?`@${t}`:"";r=`https://unpkg.com/@loaders.gl/${e.module}${i}/dist/${n}`}return s5(r),r}(e,i),a=os.getWorkerFarm(i?.core).getWorkerPool({name:s,url:o});i=JSON.parse(JSON.stringify(i)),n=JSON.parse(JSON.stringify(n||{}));let l=await a.startJob("process-on-worker",ol.bind(null,r));l.postMessage("process",{input:t,options:i,context:n});let c=await l.result;return await c.result}async function ol(e,t,i,n){switch(i){case"done":t.done(n);break;case"error":t.error(Error(n.error));break;case"process":let{id:r,input:s,options:o}=n;try{let i=await e(s,o);t.postMessage("done",{id:r,result:i})}catch(i){let e=i instanceof Error?i.message:"unknown error";t.postMessage("error",{id:r,error:e})}break;default:console.warn(`parse-with-worker unknown message ${i}`)}}async function oc(e){let t=[];for await(let i of e)t.push(function(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:i,byteLength:n}=e;return ou(t,i,n)}return ou(e)}(i));return function(...e){var t=e;let i=t.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),n=new Uint8Array(i.reduce((e,t)=>e+t.byteLength,0)),r=0;for(let e of i)n.set(e,r),r+=e.byteLength;return n.buffer}(...t)}function ou(e,t=0,i=e.byteLength-t){let n=new Uint8Array(e,t,i),r=new Uint8Array(n.length);return r.set(n),r.buffer}function oh(e){return e&&"object"==typeof e&&e.isBuffer}function od(e){if(oh(e)||e instanceof ArrayBuffer)return e;if(sl(e))return of(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return 0===e.byteOffset&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if("string"==typeof e)return new TextEncoder().encode(e).buffer;if(e&&"object"==typeof e&&e._toArrayBuffer)return e._toArrayBuffer();throw Error("toArrayBuffer")}function op(e){if(e instanceof ArrayBuffer)return e;if(sl(e))return of(e);let{buffer:t,byteOffset:i,byteLength:n}=e;return t instanceof ArrayBuffer&&0===i&&n===t.byteLength?t:of(t,i,n)}function of(e,t=0,i=e.byteLength-t){let n=new Uint8Array(e,t,i),r=new Uint8Array(n.length);return r.set(n),r.buffer}async function*og(e,t){let i=t?.chunkSize||1048576,n=0;for(;n<e.size;){let t=n+i,r=await e.slice(n,t).arrayBuffer();n=t,yield r}}function om(e,t){return sG?ov(e,t):o_(e,t)}async function*ov(e,t){let i,n=e.getReader();try{for(;;){let e=i||n.read();t?._streamReadAhead&&(i=n.read());let{done:r,value:s}=await e;if(r)return;yield od(s)}}catch(e){n.releaseLock()}}async function*o_(e,t){for await(let t of e)yield od(t)}let oy="Cannot convert supplied data type";async function ob(e,t,i){let n,r;if("string"==typeof e||sc(e)){var s,o=e;if(t.text&&"string"==typeof o)return o;if(oh(o)&&(o=o.buffer),sc(o)){let e=ArrayBuffer.isView(s=o)?s:new Uint8Array(s);return t.text&&!t.binary?new TextDecoder("utf8").decode(e):od(e)}throw Error(oy)}if(sh(e)&&(e=await sS(e)),su(e))return await sE(e),t.binary?await e.arrayBuffer():await e.text();if(sd(e)&&(e=function(e,t){if("string"==typeof e)return function*(e,t){let i=t?.chunkSize||262144,n=0,r=new TextEncoder;for(;n<e.length;){let t=Math.min(e.length-n,i),s=e.slice(n,n+t);n+=t,yield op(r.encode(s))}}(e,t);if(e instanceof ArrayBuffer)return function*(e,t={}){let{chunkSize:i=262144}=t,n=0;for(;n<e.byteLength;){let t=Math.min(e.byteLength-n,i),r=new ArrayBuffer(t),s=new Uint8Array(e,n,t);new Uint8Array(r).set(s),n+=t,yield r}}(e,t);if(sh(e))return og(e,t);if(sd(e))return om(e,t);if(su(e)){let i=e.body;if(!i)throw Error("Readable stream not available on Response");return om(i,t)}throw Error("makeIterator")}(e,i)),(n=e)&&"function"==typeof n[Symbol.iterator]||(r=e)&&"function"==typeof r[Symbol.asyncIterator])return oc(e);throw Error(oy)}var sD=sD,sD=sD;let ox=()=>{let e=sZ();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry},ow=/\.([^.]+)$/;async function oP(e,t=[],i,n){if(!oS(e))return null;let r=sX(i||{});if(r.core||={},e instanceof Response&&oC(e)){let i=oM(await e.clone().text(),t,{...r,core:{...r.core,nothrow:!0}},n);if(i)return i}let s=oM(e,t,{...r,core:{...r.core,nothrow:!0}},n);if(s)return s;if(sh(e)&&(s=oM(e=await e.slice(0,10).arrayBuffer(),t,r,n)),!s&&e instanceof Response&&oC(e)&&(s=oM(await e.clone().text(),t,r,n)),!s&&!r.core.nothrow)throw Error(oE(e));return s}function oC(e){let t=sM(e);return!!(t&&(t.startsWith("text/")||"application/json"===t||t.endsWith("+json")))}function oM(e,t=[],i,n){var r,s,o,a,l,c;let u,h,d,p,f,g,m;if(!oS(e))return null;let v=sX(i||{});if(v.core||={},t&&!Array.isArray(t))return sg(t);let _=[];t&&(_=_.concat(t)),v.core.ignoreRegisteredLoaders||_.push(...ox()),function(e){for(let t of e)sg(t)}(_);let y=(r=e,s=_,o=v,a=n,u=sC(r),h=sM(r),d=sP(u)||a?.url,p=null,f="",o?.core?.mimeType&&(p=oL(s,o?.core?.mimeType),f=`match forced by supplied MIME type ${o?.core?.mimeType}`),p=p||(l=s,(m=(g=(c=d)&&ow.exec(c))&&g[1])?function(e,t){for(let i of(t=t.toLowerCase(),e))for(let e of i.extensions)if(e.toLowerCase()===t)return i;return null}(l,m):null),f=f||(p?`matched url ${d}`:""),p=p||oL(s,h),f=f||(p?`matched MIME type ${h}`:""),p=p||function(e,t){if(!t)return null;for(let i of e)if("string"==typeof t){if(function(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}(t,i))return i}else if(ArrayBuffer.isView(t)){if(oA(t.buffer,t.byteOffset,i))return i}else if(t instanceof ArrayBuffer&&oA(t,0,i))return i;return null}(s,r),f=f||(p?`matched initial data ${oT(r)}`:""),o?.core?.fallbackMimeType&&(p=p||oL(s,o?.core?.fallbackMimeType),f=f||(p?`matched fallback MIME type ${h}`:"")),f&&sO.log(1,`selectLoader selected ${p?.name}: ${f}.`),p);if(!y&&!v.core.nothrow)throw Error(oE(e));return y}function oS(e){return!(e instanceof Response)||204!==e.status}function oE(e){let t=sC(e),i=sM(e),n="No valid loader found (";n+=(t?`${sD.filename(t)}, `:"no url provided, ")+`MIME type: ${i?`"${i}"`:"not provided"}, `;let r=e?oT(e):"";return n+((r?` first bytes: "${r}"`:"first bytes: not available")+")")}function oL(e,t){for(let i of e)if(i.mimeTypes?.some(e=>sb(t,e))||sb(t,`application/x.${i.id}`))return i;return null}function oA(e,t,i){return(Array.isArray(i.tests)?i.tests:[i.tests]).some(i=>(function(e,t,i,n){if(sc(n))return function(e,t,i){if(i=i||e.byteLength,e.byteLength<i||t.byteLength<i)return!1;let n=new Uint8Array(e),r=new Uint8Array(t);for(let e=0;e<n.length;++e)if(n[e]!==r[e])return!1;return!0}(n,e,n.byteLength);switch(typeof n){case"function":return n(op(e));case"string":let r=ok(e,t,n.length);return n===r;default:return!1}})(e,t,0,i))}function oT(e,t=5){return"string"==typeof e?e.slice(0,t):ArrayBuffer.isView(e)?ok(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?ok(e,0,t):""}function ok(e,t,i){if(e.byteLength<t+i)return"";let n=new DataView(e),r="";for(let e=0;e<i;e++)r+=String.fromCharCode(n.getUint8(t+e));return r}async function oI(e,t,i,n){var r,s,o,a,l,c,u;let h,d;!t||Array.isArray(t)||sf(t)||(n=void 0,i=t,t=void 0),e=await e,i=i||{};let p=sC(e),f=function(e,t){let i;if(e&&!Array.isArray(e))return e;if(e&&(i=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];i=i?[...i,...e]:e}return i&&i.length?i:void 0}(t,n),g=await oP(e,f,i);if(!g)return null;let m=(function(e,t){for(let i of(sK(e,null,s$,sq,t),t)){let n=e&&e[i.id]||{},r=i.options&&i.options[i.id]||{},s=i.deprecatedOptions&&i.deprecatedOptions[i.id]||{};sK(n,i.id,r,s,t)}}(r=i,s=Array.isArray(s=(s=f)||[])?s:[s]),sX((o=g,a=r,l=p,d={...h=o.options||{}},h.core&&(d.core={...h.core}),sQ(d),d.core?.log===null&&(d.core={...d.core,log:new sV}),sJ(d,sX(sY())),sJ(d,sX(a)),c=d,(u=l)&&c.core?.baseUrl===void 0&&(c.core||={},c.core.baseUrl=sD.dirname(sP(u))),function(e){let t=e.core;if(t)for(let i of sH)void 0!==t[i]&&(e[i]=t[i])}(d),d)));return n=function(e,t,i){if(i)return i;let n={fetch:s0(t,e),...e};if(n.url){let e,t=sP(n.url);n.baseUrl=t,e=n.url.match(sw),n.queryString=e&&e[0],n.filename=sD.filename(t),n.baseUrl=sD.dirname(t)}return Array.isArray(n.loaders)||(n.loaders=null),n}({url:p,_parse:oI,loaders:f},m,n||null),await oO(g,e,m,n)}async function oO(e,t,i,n){if(!function(e,t=oo){s5(e,"no worker provided");e.version}(e),i=function e(t,i,n=0){if(n>3)return i;let r={...t};for(let[t,s]of Object.entries(i))s&&"object"==typeof s&&!Array.isArray(s)?r[t]=e(r[t]||{},i[t],n+1):r[t]=i[t];return r}(e.options||{},i),su(t)){let{ok:e,redirected:i,status:r,statusText:s,type:o,url:a}=t;n.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:i,status:r,statusText:s,type:o,url:a}}if(t=await ob(t,e,i),e.parseTextSync&&"string"==typeof t)return e.parseTextSync(t,i,n);if(function(e,t){if(!os.isSupported())return!1;let i=t?._nodeWorkers??t?.core?._nodeWorkers;if(!s2&&!i)return!1;let n=t?.worker??t?.core?.worker;return!!(e.worker&&n)}(e,i))return await oa(e,t,i,n,oI);if(e.parseText&&"string"==typeof t)return await e.parseText(t,i,n);if(e.parse)return await e.parse(t,i,n);throw s5(!e.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}async function oR(e,t,i,n){let r,s;Array.isArray(t)||sf(t)?(r=t,s=i):(r=[],s=t);let o=s0(s),a=e;if("string"==typeof e&&(a=await o(e)),sh(e)&&(a=await o(e)),"string"==typeof e){let t=sX(s||{});t.core?.baseUrl||(s={...s,core:{...s?.core,baseUrl:e}})}return Array.isArray(r),await oI(a,r,s)}class oz{constructor(e,t,i){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=i,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let i=++this._loadCount,n=e;for(let t of("string"==typeof e&&(n=oR(e)),n instanceof Promise?(this.isLoaded=!1,this._loader=n.then(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e),this._subscribers))t.onChange(this.getData())}}class oF{constructor(e){this.protocol=e.protocol||"resource://",this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return!!e.startsWith(this.protocol)||e in this._resources}add({resourceId:e,data:t,forceUpdate:i=!1,persistent:n=!0}){let r=this._resources[e];r?r.setData(t,i):(r=new oz(e,t,this._context),this._resources[e]=r),r.persistent=n}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let i=t[e],n=this._resources[i.resourceId];n&&n.unsubscribe(i)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:i,requestId:n="default"}){let{_resources:r,protocol:s}=this;e.startsWith(s)&&(r[e=e.replace(s,"")]||this.add({resourceId:e,data:null,persistent:!1}));let o=r[e];if(this._track(i,n,o,t),o)return o.getData()}prune(){this._pruneRequest||(this._pruneRequest=setTimeout(()=>this._prune(),0))}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,i,n){let r=this._consumers,s=r[e]=r[e]||{},o=s[t],a=o&&o.resourceId&&this._resources[o.resourceId];a&&(a.unsubscribe(o),this.prune()),i&&(o?(o.onChange=n,o.resourceId=i.id):o={onChange:n,resourceId:i.id},s[t]=o,i.subscribe(o))}_prune(){for(let e of(this._pruneRequest=null,Object.keys(this._resources))){let t=this._resources[e];t.persistent||t.inUse()||(t.delete(),delete this._resources[e])}}}let oB=new class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:i=1,type:n,padding:r=0,copy:s=!1,initialize:o=!1,maxCount:a}){let l=n||e&&e.constructor||Float32Array,c=t*i+r;if(ArrayBuffer.isView(e)){if(c<=e.length)return e;if(c*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new l(e.buffer,0,c)}let u=1/0;a&&(u=a*i+r);let h=this._allocate(l,c,o,u);return e&&s?h.set(e):o||h.fill(0,0,4),this._release(e),h}release(e){this._release(e)}_allocate(e,t,i,n){let r=Math.max(Math.ceil(t*this.opts.overAlloc),1);r>n&&(r=n);let s=this._pool,o=e.BYTES_PER_ELEMENT*r,a=s.findIndex(e=>e.byteLength>=o);if(a>=0){let t=new e(s.splice(a,1)[0],0,r);return i&&t.fill(0),t}return new e(r)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:i}=e,{byteLength:n}=i,r=t.findIndex(e=>e.byteLength>=n);r<0?t.push(i):(r>0||t.length<this.opts.poolSize)&&t.splice(r,0,i),t.length>this.opts.poolSize&&t.shift()}};function oj(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function oD(e,t){let i=e%t;return i<0?t+i:i}let oN=new nj;function oV(e,t,i,n){oN.set(e,t,i);let r=oN.len();return{distance:n/r,normal:new nj(-e/r,-t/r,-i/r)}}function oU(e,t){let{size:i=1,startIndex:n=0}=t,s=void 0!==t.endIndex?t.endIndex:e.length,o=(s-n)/i;r=oB.allocate(r,o,{type:Float32Array,size:2*i});let a=n,l=0;for(;a<s;){for(let t=0;t<i;t++){let n=e[a++];r[l+t]=n,r[l+t+i]=n-Math.fround(n)}l+=2*i}return r.subarray(0,o*i*2)}function oG(e){let t=null,i=!1;for(let n of e)n&&(t?(i||(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],i=!0),t[0][0]=Math.min(t[0][0],n[0][0]),t[0][1]=Math.min(t[0][1],n[0][1]),t[1][0]=Math.max(t[1][0],n[1][0]),t[1][1]=Math.max(t[1][1],n[1][1])):t=n);return t}var e3=e3;let oW=Math.PI/180,o$=oj(),oq=[0,0,0],oH={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};class oZ{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||"viewport",this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||oH,this.focalDistance=e.focalDistance||1,this.position=e.position||oq,this.modelMatrix=e.modelMatrix||null;const{longitude:t,latitude:i}=e;this.isGeospatial=Number.isFinite(i)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?ix.WEB_MERCATOR:ix.WEB_MERCATOR_AUTO_OFFSET:ix.IDENTITY}equals(e){return e instanceof oZ&&(this===e||e.width===this.width&&e.height===this.height&&e.scale===this.scale&&e.projectionMode===this.projectionMode&&e.resolution===this.resolution&&iK(e.distanceScales.unitsPerMeter,this.distanceScales.unitsPerMeter)&&iK(e.projectionMatrix,this.projectionMatrix)&&iK(e.viewMatrix,this.viewMatrix))}project(e,{topLeft:t=!0}={}){let i=rz(this.projectPosition(e),this.pixelProjectionMatrix),[n,r]=i,s=t?r:this.height-r;return 2===e.length?[n,s]:[n,s,i[2]]}unproject(e,{topLeft:t=!0,targetZ:i}={}){let[n,r,s]=e,o=t?r:this.height-r,a=i&&i*this.distanceScales.unitsPerMeter[2],l=rF([n,o,s],this.pixelUnprojectionMatrix,a),[c,u,h]=this.unprojectPosition(l);return Number.isFinite(s)?[c,u,h]:Number.isFinite(i)?[c,u,i]:[c,u]}projectPosition(e){let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,i]=this.unprojectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=rL(e);return t[1]=iY(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?rA(e):e}getBounds(e={}){let t={targetZ:e.z||0},i=this.unproject([0,0],t),n=this.unproject([this.width,0],t),r=this.unproject([0,this.height],t),s=this.unproject([this.width,this.height],t);return[Math.min(i[0],n[0],r[0],s[0]),Math.min(i[1],n[1],r[1],s[1]),Math.max(i[0],n[0],r[0],s[0]),Math.max(i[1],n[1],r[1],s[1])]}getDistanceScales(e){return e&&this.isGeospatial?rk({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:i=1,height:n=1}){return e<this.x+this.width&&this.x<e+i&&t<this.y+this.height&&this.y<t+n}getFrustumPlanes(){var e;return this._frustumPlanes.near?this._frustumPlanes:(Object.assign(this._frustumPlanes,{left:oV((e=this.viewProjectionMatrix)[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:oV(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:oV(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:oV(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:oV(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:oV(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}),this._frustumPlanes)}panByPosition(e,t,i){return null}_initProps(e){let t=e.longitude,i=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=function(e){let{latitude:t}=e;return rP(Number.isFinite(t)),rb(4003e4*Math.cos(t*rS))-9}({latitude:i})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||rk({latitude:i,longitude:t}));let n=Math.pow(2,this.zoom);this.scale=n;let{position:r,modelMatrix:s}=e,o=oq;if(r&&(o=s?new rm(s).transformAsVector(r,[]):r),this.isGeospatial){let e=this.projectPosition([t,i,0]);this.center=new nj(o).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(o)}_initMatrices(e){var t;let{viewMatrix:i=o$,projectionMatrix:n=null,orthographic:r=!1,fovyRadians:s,fovy:o=75,near:a=.1,far:l=1e3,padding:c=null,focalDistance:u=1}=e;this.viewMatrixUncentered=i,this.viewMatrix=new rm().multiplyRight(i).translate(new nj(this.center).negate()),this.projectionMatrix=n||function({width:e,height:t,orthographic:i,fovyRadians:n,focalDistance:r,padding:s,near:o,far:a}){let l=e/t,c=i?new rm().orthographic({fovy:n,aspect:l,focalDistance:r,near:o,far:a}):new rm().perspective({fovy:n,aspect:l,near:o,far:a});if(s){let{left:i=0,right:n=0,top:r=0,bottom:o=0}=s,a=iY((i+e-n)/2,0,e)-e/2,l=iY((r+t-o)/2,0,t)-t/2;c[8]-=2*a/e,c[9]+=2*l/t}return c}({width:this.width,height:this.height,orthographic:r,fovyRadians:s||o*oW,focalDistance:u,padding:c,near:a,far:l});let h=oj();e3.multiply(h,h,this.projectionMatrix),e3.multiply(h,h,this.viewMatrix),this.viewProjectionMatrix=h,this.viewMatrixInverse=e3.invert([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=[(t=this.viewMatrixInverse)[12],t[13],t[14]];let d=oj(),p=oj();e3.scale(d,d,[this.width/2,-this.height/2,1]),e3.translate(d,d,[1,-1,0]),e3.multiply(p,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=p,this.pixelUnprojectionMatrix=e3.invert(oj(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||tT.warn("Pixel project matrix not invertible")()}}oZ.displayName="Viewport";let oY=oZ;class oX{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{sn("layerManager.activateViewport",this,e),e&&(this.context.viewport=e)};const{deck:i,stats:n,viewport:r,timeline:s}=t||{};this.layers=[],this.resourceManager=new oF({device:e,protocol:"deck://"}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:i,shaderAssembler:function(e){let t=R.ShaderAssembler.getDefaultShaderAssembler(e);for(let e of r2)t.addDefaultModule(e);for(let i of(t._hookFunctions.length=0,"glsl"===e?r3:r4))t.addShaderHook(i);return t}(e?.info?.shadingLanguage||"glsl"),defaultShaderModules:[et],renderPass:void 0,stats:n||new ss.Stats({id:"deck.gl"}),viewport:r||new oY({id:"DEFAULT-INITIAL-VIEWPORT"}),timeline:s||new O,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){for(let e of(this.resourceManager.finalize(),this.layers))this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;for(let i of(e.clearRedrawFlags&&(this._needsRedraw=!1),this.layers)){let n=i.getNeedsRedraw(e);t=t||n}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?"layers changed":this._defaultShaderModulesChanged?"shader modules changed":this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>0===t.id.indexOf(e))):this.layers}setProps(e){"debug"in e&&(this._debug=e.debug),"userData"in e&&(this.context.userData=e.userData),"layers"in e&&(this._nextLayers=e.layers),"onError"in e&&(this.context.onError=e.onError)}setLayers(e,t){sn("layerManager.setLayers",this,t,e),this._lastRenderedLayers=e;let i=sr(e,Boolean);for(let e of i)e.context=this.context;this._updateLayers(this.layers,i)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,i=t.findIndex(t=>t.name===e.name);i>=0&&(t.splice(i,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,i){i.raiseError(t,`${e} of ${i}`)}_updateLayers(e,t){let i={};for(let t of e)i[t.id]?tT.warn(`Multiple old layers with same id ${t.id}`)():i[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let n=[];this._updateSublayersRecursively(t,i,n),this._finalizeOldLayers(i);let r=!1;for(let e of n)if(e.hasUniformTransition()){r=`Uniform transition in ${e}`;break}this._needsUpdate=r,this.layers=n}_updateSublayersRecursively(e,t,i){for(let n of e){n.context=this.context;let e=t[n.id];null===e&&tT.warn(`Multiple new layers with same id ${n.id}`)(),t[n.id]=null;let r=null;try{this._debug&&e!==n&&n.validateProps(),e?(this._transferLayerState(e,n),this._updateLayer(n)):this._initializeLayer(n),i.push(n),r=n.isComposite?n.getSubLayers():null}catch(e){this._handleError("matching",e,n)}r&&this._updateSublayersRecursively(r,t,i)}}_finalizeOldLayers(e){for(let t in e){let i=e[t];i&&this._finalizeLayer(i)}}_initializeLayer(e){try{e._initialize(),e.lifecycle="Initialized"}catch(t){this._handleError("initialization",t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle="Matched. State transferred from previous layer",t!==e&&(e.lifecycle="Discarded. Awaiting garbage collection")}_updateLayer(e){try{e._update()}catch(t){this._handleError("update",t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle="No longer matched. Awaiting garbage collection";try{e._finalize(),e.lifecycle="Finalized! Awaiting garbage collection"}catch(t){this._handleError("finalization",t,e)}}}function oK(e,t,i){if(e===t)return!0;if(!i||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!oK(e[n],t[n],i-1))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!t.hasOwnProperty(r)||!oK(e[r],t[r],i-1))return!1;return!0}return!1}let oJ="default-canvas";class oQ{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw="First render",this._needsUpdate="Initialize",this._eventManager=e.eventManager,this._eventManagers=e.eventManagers||{},this._viewEventManagers={},this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,this._getCanvasContext=e.getCanvasContext,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>{let i=!e.canvasId||this.getCanvasId(t.id)===e.canvasId,n=!("x"in e)||t.containsPixel(e);return i&&n}):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t="string"==typeof e?this.getView(e):e,i=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(i):i}getViewport(e){return this._viewportMap[e]}getCanvasId(e){let t="string"==typeof e?this.getView(e):e;return t?this._viewEventManagers[t.id]?.canvasId||this._getCanvasIdFromView(t):void 0}unproject(e,t){let i=this.getViewports(),n={x:e[0],y:e[1]};for(let r=i.length-1;r>=0;--r){let s=i[r];if(s.containsPixel(n)){let i=e.slice();return i[0]-=s.x,i[1]-=s.y,s.unproject(i,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),("width"in e||"height"in e)&&this._setSize(e.width,e.height),"pickPosition"in e&&(this._pickPosition=e.pickPosition),"eventManagers"in e&&this._setEventManagers(e.eventManagers||{}),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate("Size changed"))}_setViews(e){e=sr(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate("views changed"),this.views=e}_setViewState(e){e?(oK(e,this.viewState,3)||this.setNeedsUpdate("viewState changed"),this.viewState=e):tT.warn("missing `viewState` or `initialViewState`")()}_setEventManagers(e){this._eventManagers!==e&&(this._eventManagers=e,this.setNeedsUpdate("eventManagers changed"))}_getCanvasIdFromView(e){return e.props.canvasId||this._getCanvasContext?.(e.id)?.id||oJ}_getCanvasDimensions(e){let t=this._getCanvasContext?.(e.id),[i,n]=t?.getCSSSize()||[this.width,this.height];return{width:i,height:n}}_getViewEventManager(e){let t=this.getCanvasId(e)||oJ;return{canvasId:t,eventManager:this._eventManagers[t]||this._eventManager}}_startViewportRebuild(){let e=this.controllers,t=this._viewEventManagers;return this._viewports=[],this.controllers={},this._viewEventManagers={},{oldControllers:e,oldViewEventManagers:t}}_getReusableController(e,t,i){return e&&(t?.canvasId!==i.canvasId||t?.eventManager!==i.eventManager)?(e.finalize(),null):e}_createController(e,t){return new t.type({timeline:this.timeline,eventManager:this._getViewEventManager(e).eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,...this._getCanvasDimensions(e)}),pickPosition:(t,i)=>this._pickPosition?.(t,i,e.id)})}_updateController(e,t,i,n){let r=e.controller;if(r&&i){let s={...t,...r,id:e.id,x:i.x,y:i.y,width:i.width,height:i.height};return n&&n.constructor===r.type||(n=this._createController(e,s)),n&&n.setProps(s),n}return null}_rebuildViewports(){let{views:e}=this,{oldControllers:t,oldViewEventManagers:i}=this._startViewportRebuild(),n=!1;for(let r=e.length;r--;){let s=e[r],{width:o,height:a}=this._getCanvasDimensions(s),l=this._getViewEventManager(s);this._viewEventManagers[s.id]=l;let c=this.getViewState(s),u=s.makeViewport({viewState:c,width:o,height:a}),h=this._getReusableController(t[s.id],i[s.id],l),d=!!s.controller;d&&!h&&(n=!0),(n||!d)&&h&&(h.finalize(),h=null),this.controllers[s.id]=this._updateController(s,c,u,h),u&&this._viewports.unshift(u)}for(let e in t){let i=t[e];i&&!this.controllers[e]&&i.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length!==t.length||e.some((i,n)=>!e[n].equals(t[n]))}}let o0=/^(?:\d+\.?\d*|\.\d+)$/;function o1(e){switch(typeof e){case"number":if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:"literal",value:e};case"string":try{let t=function(e){let t=[],i=0;for(;i<e.length;){let n=e[i];if(/\s/.test(n)){i++;continue}if("+"===n||"-"===n||"("===n||")"===n||"%"===n){t.push({type:"symbol",value:n}),i++;continue}if(o4(n)||"."===n){let r=i,s="."===n;for(i++;i<e.length;){let t=e[i];if(o4(t)){i++;continue}if("."===t&&!s){s=!0,i++;continue}break}let o=e.slice(r,i);if(!o0.test(o))throw Error("Invalid number token");t.push({type:"number",value:parseFloat(o)});continue}if(o6(n)){let n=i;for(;i<e.length&&o6(e[i]);)i++;let r=e.slice(n,i).toLowerCase();t.push({type:"word",value:r});continue}throw Error("Invalid token in position string")}return t}(e);return new o3(t).parseExpression()}catch(i){let t=i instanceof Error?i.message:String(i);throw Error(`Could not parse position string ${e}: ${t}`)}default:throw Error(`Could not parse position string ${e}`)}}function o2(e,t){return function e(t,i){switch(t.type){case"literal":return t.value;case"percentage":return Math.round(t.value*i);case"binary":let n=e(t.left,i),r=e(t.right,i);return"+"===t.operator?n+r:n-r;default:throw Error("Unknown layout expression type")}}(e,t)}class o3{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error("Unexpected token at end of expression");return e}parseBinaryExpression(){var e;let t=this.parseFactor(),i=this.peek();for(;(e=i)&&"symbol"===e.type&&("+"===e.value||"-"===e.value);){this.index++;let e=this.parseFactor();t={type:"binary",operator:i.value,left:t,right:e},i=this.peek()}return t}parseFactor(){let e=this.peek();if(!e)throw Error("Unexpected end of expression");if("symbol"===e.type&&"+"===e.value)return this.index++,this.parseFactor();if("symbol"===e.type&&"-"===e.value)return this.index++,{type:"binary",operator:"-",left:{type:"literal",value:0},right:this.parseFactor()};if("symbol"===e.type&&"("===e.value){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("word"===e.type&&"calc"===e.value){if(this.index++,!this.consumeSymbol("("))throw Error("Missing opening parenthesis after calc");let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("number"===e.type){this.index++;let t=e.value,i=this.peek();return i&&"symbol"===i.type&&"%"===i.value?(this.index++,{type:"percentage",value:t/100}):(i&&"word"===i.type&&"px"===i.value&&this.index++,{type:"literal",value:t})}throw Error("Unexpected token in expression")}consumeSymbol(e){let t=this.peek();return!!t&&"symbol"===t.type&&t.value===e&&(this.index++,!0)}peek(){return this.tokens[this.index]||null}}function o4(e){return e>="0"&&e<="9"}function o6(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"}class o5{constructor(e){const{id:t,x:i=0,y:n=0,width:r="100%",height:s="100%",padding:o=null}=e;this.id=t||this.constructor.displayName||"view",this.props={...e,id:this.id},this._x=o1(i),this._y=o1(n),this._width=o1(r),this._height=o1(s),this._padding=o&&{left:o1(o.left||0),right:o1(o.right||0),top:o1(o.top||0),bottom:o1(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e||this.constructor===e.constructor&&oK(this.props,e.props,2)}clone(e){return new this.constructor({...this.props,...e})}makeViewport({width:e,height:t,viewState:i}){i=this.filterViewState(i);let n=this.getDimensions({width:e,height:t});return n.height&&n.width?new(this.getViewportType(i))({...i,...this.props,...n}):null}getViewStateId(){let{viewState:e}=this.props;return"string"==typeof e?e:e?.id||this.id}filterViewState(e){if(this.props.viewState&&"object"==typeof this.props.viewState){if(!this.props.viewState.id)return this.props.viewState;var t=this.props.viewState;let i={...e};for(let e in t)"id"!==e&&(Array.isArray(i[e])&&Array.isArray(t[e])?i[e]=function(e,t){e=e.slice();for(let i=0;i<t.length;i++){let n=t[i];Number.isFinite(n)&&(e[i]=n)}return e}(i[e],t[e]):i[e]=t[e]);return i}return e}getDimensions({width:e,height:t}){let i={x:o2(this._x,e),y:o2(this._y,t),width:o2(this._width,e),height:o2(this._height,t)};return this._padding&&(i.padding={left:o2(this._padding.left,e),top:o2(this._padding.top,t),right:o2(this._padding.right,e),bottom:o2(this._padding.bottom,t)}),i}get controller(){let e=this.props.controller;return e?!0===e?{type:this.ControllerType}:"function"==typeof e?{type:e}:{type:this.ControllerType,...e}:null}}var rx=rx;class o8 extends oY{constructor(e={}){let t;const{latitude:i=0,longitude:n=0,zoom:r=0,pitch:s=0,bearing:o=0,nearZMultiplier:a=.1,farZMultiplier:l=1.01,nearZ:c,farZ:u,orthographic:h=!1,projectionMatrix:d,repeat:p=!1,worldOffset:f=0,position:g,padding:m,legacyMeterSizes:v=!1}=e;let{width:_,height:y,altitude:b=1.5}=e;const x=Math.pow(2,r);_=_||1,y=y||1;let w=null;if(d)t=rO(b=d[5]/2);else{let n;if(e.fovy?b=rR(t=e.fovy):t=rO(b),m){const{top:e=0,bottom:t=0}=m;n=[0,iY((e+y-t)/2,0,y)-y/2]}w=function(e){let{width:t,height:i,altitude:n,pitch:r=0,offset:s,center:o,scale:a,nearZMultiplier:l=1,farZMultiplier:c=1}=e,{fovy:u=rO(1.5)}=e;void 0!==n&&(u=rO(n));let h=u*rS,d=r*rS,p=rR(u),f=p;o&&(f+=o[2]*a/Math.cos(d)/i);let g=h*(.5+(s?s[1]:0)/i),m=Math.sin(g)*f/Math.sin(ry(Math.PI/2-d-g,.01,Math.PI-.01));return{fov:h,aspect:t/i,focalDistance:p,near:l,far:Math.min((Math.sin(d)*m+f)*c,10*f)}}({width:_,height:y,scale:x,center:g&&[0,0,g[2]*rT(i)],offset:n,pitch:s,fovy:t,nearZMultiplier:a,farZMultiplier:l}),Number.isFinite(c)&&(w.near=c),Number.isFinite(u)&&(w.far=u)}let P=function(e){let{height:t,pitch:i,bearing:n,altitude:r,scale:s,center:o}=e,a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];e3.translate(a,a,[0,0,-r]),e3.rotateX(a,a,-i*rS),e3.rotateZ(a,a,n*rS);let l=s/t;return e3.scale(a,a,[l,l,l]),o&&e3.translate(a,a,rw.negate([],o)),a}({height:y,pitch:s,bearing:o,scale:x,altitude:b});f&&(P=new rm().translate([512*f,0,0]).multiplyLeft(P)),super({...e,width:_,height:y,viewMatrix:P,longitude:n,latitude:i,zoom:r,...w,fovy:t,focalDistance:b}),this.latitude=i,this.longitude=n,this.zoom=r,this.pitch=s,this.bearing=o,this.altitude=b,this.fovy=t,this.orthographic=h,this._subViewports=p?[]:null,this._pseudoMeters=v,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let e=this.getBounds(),t=Math.floor((e[0]+180)/360),i=Math.ceil((e[2]-180)/360);for(let e=t;e<=i;e++){let t=e?new o8({...this,worldOffset:e}):this;this._subViewports.push(t)}}return this._subViewports}equals(e){return e instanceof o8&&e._pseudoMeters===this._pseudoMeters&&super.equals(e)}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*rT(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,i]=this.unprojectFlat(e),n=(e[2]||0)/rT(i);return[t,i,n]}addMetersToLngLat(e,t){return rI(e,t)}panByPosition(e,t,i){let n=rF(t,this.pixelUnprojectionMatrix),r=this.projectFlat(e),s=rx.add([],r,rx.negate([],n)),o=rx.add([],this.center,s),[a,l]=this.unprojectFlat(o);return{longitude:a,latitude:l}}panByPosition3D(e,t){let i=e[2]||0,n=rx.sub([],e,this.unproject(t,{targetZ:i}));return{longitude:this.longitude+n[0],latitude:this.latitude+n[1]}}getBounds(e={}){let t=function(e,t=0){let i,n,{width:r,height:s,unproject:o}=e,a={targetZ:t},l=o([0,s],a),c=o([r,s],a);return(e.fovy?.5*e.fovy*rB:Math.atan(.5/e.altitude))>(90-e.pitch)*rB-.01?(i=rj(e,0,t),n=rj(e,r,t)):(i=o([0,0],a),n=o([r,0],a)),[l,c,n,i]}(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(e,t={}){let{width:i,height:n}=this,{longitude:r,latitude:s,zoom:o}=function(e){let{width:t,height:i,bounds:n,minExtent:r=0,maxZoom:s=24,offset:o=[0,0]}=e,[[a,l],[c,u]]=n,h=function(e=0){return"number"==typeof e?{top:e,bottom:e,left:e,right:e}:(rP(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}(e.padding),d=rL([a,ry(u,-85.051129,85.051129)]),p=rL([c,ry(l,-85.051129,85.051129)]),f=[Math.max(Math.abs(p[0]-d[0]),r),Math.max(Math.abs(p[1]-d[1]),r)],g=[t-h.left-h.right-2*Math.abs(o[0]),i-h.top-h.bottom-2*Math.abs(o[1])];rP(g[0]>0&&g[1]>0);let m=g[0]/f[0],v=g[1]/f[1],_=(h.right-h.left)/2/m,y=(h.top-h.bottom)/2/v,b=rA([(p[0]+d[0])/2+_,(p[1]+d[1])/2+y]),x=Math.min(s,rb(Math.abs(Math.min(m,v))));return rP(Number.isFinite(x)),{longitude:b[0],latitude:b[1],zoom:x}}({width:i,height:n,bounds:e,...t});return new o8({width:i,height:n,longitude:r,latitude:s,zoom:o})}}o8.displayName="WebMercatorViewport";class o7{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1)}update(){if(!this._inProgress)return!1;if(null===this._handle){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}}let o9=()=>{},ae={mode:"preserve"},at={mode:"hard"},ai=e=>e;class an{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:i,startProps:n,endProps:r,duration:s,easing:o}}=e,a=o(t/s),l=i.interpolateProps(n,r,a);this.propsInTransition=this.getControllerState({...this.props,...l},ae).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new o7(e.timeline),this.onViewStateChange=e.onViewStateChange||o9,this.onStateChange=e.onStateChange||o9}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,i=this.props;if(this.props=e,!i||this._shouldIgnoreViewportChange(i,e))return!1;if(this._isTransitionEnabled(e)){let n=i;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;n={...i,...2===e?t:this.propsInTransition||i}}this._triggerTransition(n,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:i}=e;return(t>0||"auto"===t)&&!!i}_isUpdateDueToCurrentTransition(e){return!!this.transition.inProgress&&!!this.propsInTransition&&this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition)}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?3===this.transition.settings.interruption||this._isUpdateDueToCurrentTransition(t):!this._isTransitionEnabled(t)||t.transitionInterpolator.arePropsEqual(e,t)}_triggerTransition(e,t){let i=this.getControllerState(e,ae),n=this.getControllerState(t,at).shortestPathFrom(i),r=t.transitionInterpolator,s=r.getDuration?r.getDuration(e,t):t.transitionDuration;if(0===s)return;let o=r.initializeProps(e,n);this.propsInTransition={};let a={duration:s,easing:t.transitionEasing||ai,interpolator:r,interruption:t.transitionInterruption||1,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(a),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}}function ar(e,t){if(!e)throw Error(t||"deck.gl: assertion failed.")}class as{constructor(e){const{compare:t,extract:i,required:n}=e;this._propsToCompare=t,this._propsToExtract=i||t,this._requiredProps=n}arePropsEqual(e,t){for(let i of this._propsToCompare)if(!(i in e)||!(i in t)||!iK(e[i],t[i]))return!1;return!0}initializeProps(e,t){let i={},n={};for(let r of this._propsToExtract)(r in e||r in t)&&(i[r]=e[r],n[r]=t[r]);return this._checkRequiredProps(i),this._checkRequiredProps(n),{start:i,end:n}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let i=e[t];ar(Number.isFinite(i)||Array.isArray(i),`${t} is required for transition`)})}}let ao=["longitude","latitude","zoom","bearing","pitch"],aa=["longitude","latitude","zoom"];class al extends as{constructor(e={}){const t=Array.isArray(e)?e:e.transitionProps,i=Array.isArray(e)?{}:e;i.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:ao,required:aa},super(i.transitionProps),this.opts=i}initializeProps(e,t){let i=super.initializeProps(e,t),{makeViewport:n,around:r}=this.opts;if(n&&r){let s=n(e),o=n(t),a=s.unproject(r);i.start.around=r,Object.assign(i.end,{around:o.project(a),aroundPosition:a,width:t.width,height:t.height})}return i}interpolateProps(e,t,i){let n={};for(let r of this._propsToExtract)n[r]=iX(e[r]||0,t[r]||0,i);if(t.aroundPosition&&this.opts.makeViewport){let r=this.opts.makeViewport({...t,...n});Object.assign(n,r.panByPosition(t.aroundPosition,iX(e.around,t.around,i)))}return n}}let ac={transitionDuration:0},au=e=>1-(1-e)*(1-e),ah=e=>1===e?1:1-Math.pow(2,-10*e),ad=["wheel"],ap=["panstart","panmove","panend"],af=["pinchstart","pinchmove","pinchend"],ag=["multipanstart","multipanmove","multipanend"],am=["dblclick"],av=["dblclickdragstart","dblclickdragmove","dblclickdragend","dblclickdragcancel"],a_=["keydown"],ay={};class ab{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this._multiPanMode=null,this._multiPanStartCenter=null,this._doubleClickDragAnchor=null,this._suppressDoubleClickUntil=0,this.invertPan=!1,this.dragMode="rotate",this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.doubleClickDragZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.multiTouchDrag=null,this.trackpadGesture=!1,this.zoomAround="pointer",this.keyboard=!0,this.transitionManager=new an({...e,getControllerState:(t,i)=>new this.ControllerState({...t,constraintContext:i,makeViewport:e.makeViewport}),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case"panstart":return!t&&this._onPanStart(e);case"panmove":return this._onPan(e);case"panend":return this._onPanEnd(e);case"pinchstart":return!t&&!!this._isTrackpadGestureAllowed(e)&&this._onPinchStart(e);case"pinchmove":return!!this._isTrackpadGestureAllowed(e)&&this._onPinch(e);case"pinchend":return!!this._isTrackpadGestureAllowed(e)&&this._onPinchEnd(e);case"multipanstart":return!t&&this._onMultiPanStart(e);case"multipanmove":return this._onMultiPan(e);case"multipanend":return this._onMultiPanEnd(e);case"dblclick":return this._onDoubleClick(e);case"dblclickdragstart":return!t&&this._onDoubleClickDragStart(e);case"dblclickdragmove":return this._onDoubleClickDrag(e);case"dblclickdragend":case"dblclickdragcancel":return this._onDoubleClickDragEnd(e);case"wheel":return this._onWheel(e);case"keydown":return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:i}=this.props,{offsetCenter:n}=e;return[n.x-t,n.y-i]}getZoomPosition(e){if("pointer"===this.zoomAround)return e;let t=this.makeViewport(this.controllerState.getViewportProps()),[i,n]=rz(t.center,t.pixelProjectionMatrix);return[i,n]}isPointInBounds(e,t){let{width:i,height:n}=this.props;if(t&&t.handled)return!1;let r=e[0]>=0&&e[0]<=i&&e[1]>=0&&e[1]<=n;return r&&t&&t.stopPropagation(),r}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){void 0===e.maxBoundsPadding&&(e.maxBoundsPadding=null),e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,"transitionInterpolator"in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:i}=e;this.inertia=Number.isFinite(i)?i:300*(!0===i);let{scrollZoom:n=!0,dragPan:r=!0,dragRotate:s=!0,doubleClickZoom:o=!0,doubleClickDragZoom:a=!1,touchZoom:l=!0,touchRotate:c=!1,multiTouchDrag:u=c?"rotate":null,trackpadGesture:h=!1,zoomAround:d="pointer",keyboard:p=!0}=e,f=!!this.onViewStateChange;if(this.toggleEvents(ad,f&&n),this.toggleEvents(ap,f),this.toggleEvents(af,f&&(l||"rotate"===u)),this.toggleEvents(ag,f&&!!u),this.toggleEvents(am,f&&o),this.toggleEvents(av,f&&a),this.toggleEvents(a_,f&&p),this.scrollZoom=n,this.dragPan=r,this.dragRotate=s,this.doubleClickZoom=o,this.doubleClickDragZoom=a,this.touchZoom=l,this.touchRotate="rotate"===u,this.multiTouchDrag=u,this.trackpadGesture=h,this.zoomAround=d,this.keyboard=p,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds||t.maxBoundsPadding!==e.maxBoundsPadding)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),i=t.getViewportProps();Object.keys(i).some(t=>!oK(i[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,i={}){let n={...e.getViewportProps(),...t},r=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(i),r){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:n,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_getConstraintContext(e,t){return this.props.rubberBand?{mode:"update"===t?"elastic":"end"===t?"rebound":"hard"}:{mode:"hard"}}_getReboundTransition(e,t){if("rebound"!==e.mode)return null;let i=t.getViewportProps();return Object.keys(i).some(e=>!oK(this.props[e],i[e],1))?{...this._getTransitionProps(),transitionDuration:300,transitionEasing:ah}:null}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||"pan"===this.dragMode)&&(i=!i);let n=i?"pan":"rotate",r=this._getConstraintContext(n,"start"),s=i?this.controllerState.panStart({pos:t},r):this.controllerState.rotateStart({pos:t},r);return this._panMove=i,this.updateViewport(s,ac,{isDragging:!0}),!0}_onPan(e){return!!this.isDragging()&&(this._panMove?this._onPanMove(e):this._onPanRotate(e))}_onPanEnd(e){return!!this.isDragging()&&(this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e))}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),i=this.controllerState.pan({pos:t},this._getConstraintContext("pan","update"));return this.updateViewport(i,ac,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let i=this.getCenter(e),n=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],r=this.controllerState.pan({pos:n}).panEnd();this.updateViewport(r,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:au},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState,t=this._getConstraintContext("pan","end"),i=e.panEnd(t),n=this._getReboundTransition(t,i);this.updateViewport(i,n,{isDragging:!1,isPanning:!!n})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),i=this.controllerState.rotate({pos:t},this._getConstraintContext("rotate","update"));return this.updateViewport(i,ac,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let i=this.getCenter(e),n=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],r=this.controllerState.rotate({pos:n}).rotateEnd();this.updateViewport(r,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:au},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState,t=this._getConstraintContext("rotate","end"),i=e.rotateEnd(t),n=this._getReboundTransition(t,i);this.updateViewport(i,n,{isDragging:!1,isRotating:!!n})}return!0}_onWheel(e){if(!this.scrollZoom||this.trackpadGesture&&"mouse"!==e.device)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:i=.01,smooth:n=!1}=!0===this.scrollZoom?{}:this.scrollZoom,{delta:r}=e,s=2/(1+Math.exp(-Math.abs(r*i)));r<0&&0!==s&&(s=1/s);let o=this.getZoomPosition(t),a=n?{...this._getTransitionProps({around:o}),transitionDuration:250}:ac,l=this.controllerState.zoom({pos:o,scale:s});return this.updateViewport(l,a,{isZooming:!0,isPanning:!0}),n||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let{multiTouchDrag:t}=this;if(!t||!this._isMultiPanEventAllowed(e,t))return!1;let i=e.offsetCenter;if(!this.isPointInBounds(this.getCenter(e),e))return!1;let n="trackpad"===e.pointerType,r={x:i.x-(n?0:e.deltaX),y:i.y-(n?0:e.deltaY)},s={...e,offsetCenter:r},o=this.getCenter(s),a="pan"===t?this.controllerState.panStart({pos:o},this._getConstraintContext("pan","start")):this.controllerState.rotateStart({pos:o},this._getConstraintContext("rotate","start"));return this._multiPanMode=t,this._multiPanStartCenter=r,this.updateViewport(a,ac,{isDragging:!0}),!0}_onMultiPan(e){let{mode:t,event:i}=this._getMultiPanEvent(e);return!!t&&!!i&&!!this.isDragging()&&("pan"===t?this._onPanMove(i):this._onPanRotate(i))}_onMultiPanEnd(e){let{mode:t,event:i}=this._getMultiPanEvent(e);if(!t||!i||!this.isDragging())return this._resetMultiPan(),!1;let n="pan"===t?this._onPanMoveEnd(i):this._onPanRotateEnd(i);return this._resetMultiPan(),n}_isTrackpadGestureAllowed(e){return"trackpad"!==e.pointerType||this.trackpadGesture}_isMultiPanEventAllowed(e,t){return"trackpad"===e.pointerType?this.trackpadGesture&&("pan"===t?this.dragPan:this.dragRotate):"touch"===e.pointerType&&("pan"===t?this.dragPan:this.dragRotate)}_getMultiPanEvent(e){let t=this._multiPanMode,i=this._multiPanStartCenter;return t&&i?{mode:t,event:{...e,offsetCenter:{x:i.x+e.deltaX,y:i.y+e.deltaY}}}:{mode:null,event:null}}_resetMultiPan(){this._multiPanMode=null,this._multiPanStartCenter=null}_onPinchStart(e){this._doubleClickDragAnchor=null;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.controllerState.zoomStart({pos:this.getZoomPosition(t)},this._getConstraintContext("zoom","start")).rotateStart({pos:t},this._getConstraintContext("rotate","start"));return ay._startPinchRotation=e.rotation,ay._lastPinchEvent=e,this.updateViewport(i,ac,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:i}=e,n=this.getCenter(e);t=t.zoom({pos:this.getZoomPosition(n),scale:i},this._getConstraintContext("zoom","update"))}if(this.touchRotate){let{rotation:i}=e;t=t.rotate({deltaAngleX:ay._startPinchRotation-i},this._getConstraintContext("rotate","update"))}return this.updateViewport(t,ac,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),ay._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:i}=ay;if(this.touchZoom&&t&&i&&e.scale!==i.scale){let n=this.getCenter(e),r=this.getZoomPosition(n),s=this.controllerState.rotateEnd(),o=Math.log2(e.scale),a=(o-Math.log2(i.scale))/(e.deltaTime-i.deltaTime),l=Math.pow(2,o+a*t/2);s=s.zoom({pos:r,scale:l}).zoomEnd(),this.updateViewport(s,{...this._getTransitionProps({around:r}),transitionDuration:t,transitionEasing:au},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState,t=this._getConstraintContext("zoom","end"),i=this._getConstraintContext("rotate","end"),n=e.zoomEnd(t).rotateEnd(i),r=this._getReboundTransition(this.touchZoom?t:i,n);this.updateViewport(n,r,{isDragging:!1,isPanning:!!r&&this.touchZoom,isZooming:!!r&&this.touchZoom,isRotating:!!r&&this.touchRotate})}return ay._startPinchRotation=null,ay._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom||Date.now()<this._suppressDoubleClickUntil)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e),n=this.getZoomPosition(t),r=this.controllerState.zoom({pos:n,scale:i?.5:2});return this.updateViewport(r,this._getTransitionProps({around:n}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onDoubleClickDragStart(e){if(!this.doubleClickDragZoom)return this._doubleClickDragAnchor=null,!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return this._doubleClickDragAnchor=null,!1;this._doubleClickDragAnchor=this.getZoomPosition(t);let i=this.controllerState.zoomStart({pos:this._doubleClickDragAnchor},this._getConstraintContext("zoom","start"));return 1!==e.scale&&(i=i.zoom({pos:this._doubleClickDragAnchor,scale:e.scale},this._getConstraintContext("zoom","update"))),this.updateViewport(i,ac,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDrag(e){let t=this._doubleClickDragAnchor;if(!t)return!1;let i=this.controllerState.zoom({pos:t,scale:e.scale},this._getConstraintContext("zoom","update"));return this.updateViewport(i,ac,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDragEnd(e){if(!this._doubleClickDragAnchor)return!1;this._doubleClickDragAnchor=null;let t=this.controllerState,i=this._getConstraintContext("zoom","end"),n=t.zoomEnd(i),r=this._getReboundTransition(i,n);return this.updateViewport(n,r,{isDragging:!1,isPanning:!!r,isZooming:!!r}),this._suppressDoubleClickUntil=Date.now()+100,this.blockEvents(100),!0}_onKeyDown(e){let t;if(!this.keyboard)return!1;let i=this.isFunctionKeyPressed(e),{zoomSpeed:n,moveSpeed:r,rotateSpeedX:s,rotateSpeedY:o}=!0===this.keyboard?{}:this.keyboard,{controllerState:a}=this,l={};switch(e.srcEvent.code){case"Minus":t=i?a.zoomOut(n).zoomOut(n):a.zoomOut(n),l.isZooming=!0;break;case"Equal":t=i?a.zoomIn(n).zoomIn(n):a.zoomIn(n),l.isZooming=!0;break;case"ArrowLeft":i?(t=a.rotateLeft(s),l.isRotating=!0):(t=a.moveLeft(r),l.isPanning=!0);break;case"ArrowRight":i?(t=a.rotateRight(s),l.isRotating=!0):(t=a.moveRight(r),l.isPanning=!0);break;case"ArrowUp":i?(t=a.rotateUp(o),l.isRotating=!0):(t=a.moveUp(r),l.isPanning=!0);break;case"ArrowDown":i?(t=a.rotateDown(o),l.isRotating=!0):(t=a.moveDown(r),l.isPanning=!0);break;default:return!1}return this.updateViewport(t,this._getTransitionProps(),l),!0}_getTransitionProps(e){let{transition:t}=this;return t&&t.transitionInterpolator?e?{...t,transitionInterpolator:new al({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t:ac}}let ax=Symbol("constraintAround");class aw{constructor(e,t,i,n){this.makeViewport=i,this._viewportProps=this.applyConstraints(e,n),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}}function aP(e,t,i){let n=e-t;return n&&Number.isFinite(n)?t+n*i/(i+Math.abs(n)):t}function aC(e,t,i){let n=o2(o1(i?.left??0),e),r=o2(o1(i?.right??0),e),s=o2(o1(i?.top??0),t),o=o2(o1(i?.bottom??0),t);return{x:n,y:s,width:e-n-r,height:t-s-o}}function aM(e,t,i){let[n,r]=e.project(t);return n=Number.isFinite(n)?n:e.width/2,r=Number.isFinite(r)?r:e.height/2,{left:n-i.x,right:i.x+i.width-n,top:r-i.y,bottom:i.y+i.height-r}}let aS=[[-1/0,-90],[1/0,90]];function aE([e,t]){if(Math.abs(t)>90&&(t=90*Math.sign(t)),Number.isFinite(e)){let[i,n]=rL([e,t]);return[i,iY(n,0,512)]}let[,i]=rL([0,t]);return[e,iY(i,0,512)]}class aL extends aw{constructor(e){const{width:t,height:i,latitude:n,longitude:r,zoom:s,bearing:o=0,pitch:a=0,altitude:l=1.5,position:c=[0,0,0],maxZoom:u=20,minZoom:h=0,maxPitch:d=60,minPitch:p=0,startPanLngLat:f,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:v,startBearing:_,startPitch:y,startZoom:b,normalize:x=!0,rubberBand:w=!1}=e,{[ax]:P}=e;ar(Number.isFinite(r)),ar(Number.isFinite(n)),ar(Number.isFinite(s)),super({width:t,height:i,latitude:n,longitude:r,zoom:s,bearing:o,pitch:a,altitude:l,maxZoom:u,minZoom:h,maxPitch:d,minPitch:p,normalize:x,position:c,maxBounds:e.maxBounds||(x?aS:null),maxBoundsPadding:e.maxBoundsPadding||null,rubberBand:w,...{[ax]:P}},{startPanLngLat:f,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:v,startBearing:_,startPitch:y,startZoom:b},e.makeViewport,e.constraintContext),this.getAltitude=e.getAltitude}panStart({pos:e},t){return this._getUpdatedState({startPanLngLat:this._unproject(e)},t)}pan({pos:e,startPos:t},i){let n=this.getState().startPanLngLat||this._unproject(t);if(!n)return this;let r=this.makeViewport(this.getViewportProps()).panByPosition(n,e);return this._getUpdatedState(r,i)}panEnd(e){return this._getUpdatedState({startPanLngLat:null},e)}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:void 0!==t?this._unproject3D(e,t):void 0,startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:i=0}){let n,{startRotatePos:r,startRotateLngLat:s,startBearing:o,startPitch:a}=this.getState();if(!r||void 0===o||void 0===a)return this;if(n=e?this._getNewRotation(e,r,a,o):{bearing:o+t,pitch:a+i},s){let e=this.makeViewport({...this.getViewportProps(),...n}),t="panByPosition3D"in e?"panByPosition3D":"panByPosition";return this._getUpdatedState({...n,...e[t](s,r)})}return this._getUpdatedState(n)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e},t){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom},t)}zoom({pos:e,startPos:t,scale:i},n){let{startZoom:r,startZoomLngLat:s}=this.getState();return(s||(r=this.getViewportProps().zoom,s=this._unproject(t)||this._unproject(e)),s)?this._getUpdatedState({zoom:r+Math.log2(i),[ax]:{position:s,screenPosition:e}},n):this}zoomEnd(e){return this._getUpdatedState({startZoomLngLat:null,startZoom:null},e)}zoomIn(e=2,t){return this._zoomFromCenter(e,t)}zoomOut(e=2,t){return this._zoomFromCenter(1/e,t)}moveLeft(e=100,t){return this._panFromCenter([e,0],t)}moveRight(e=100,t){return this._panFromCenter([-e,0],t)}moveUp(e=100,t){return this._panFromCenter([0,e],t)}moveDown(e=100,t){return this._panFromCenter([0,-e],t)}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),i={...this.getViewportProps()},{bearing:n,longitude:r}=i;return Math.abs(n-t.bearing)>180&&(i.bearing=n<0?n+360:n-360),Math.abs(r-t.longitude)>180&&(i.longitude=r<0?r+360:r-360),i}applyConstraints(e,t){let i=e[ax];delete e[ax];let{maxPitch:n,minPitch:r,pitch:s,bearing:o,normalize:a,maxBounds:l,rubberBand:c}=e;a&&(o<-180||o>180)&&(e.bearing=oD(o+180,360)-180),e.pitch=iY(s,r,n);let u=this._constrainZoom(e.zoom,e),h=c&&t?.mode==="elastic";if(e.zoom=t?.mode==="preserve"?e.zoom:h?aP(e.zoom,u,1):u,i){let t=this.makeViewport(e);Object.assign(e,t.panByPosition(i.position,i.screenPosition))}if(a&&(e.longitude<-180||e.longitude>180)&&(e.longitude=oD(e.longitude+180,360)-180),l){let i=aC(e.width,e.height,e.maxBoundsPadding),n=aM(this.makeViewport({...e,bearing:0,pitch:0}),[e.longitude,e.latitude],i),r=aE(l[0]),s=aE(l[1]),o=2**e.zoom,a=[r[0]+n.left/o,r[1]+n.bottom/o],c=[s[0]-n.right/o,s[1]-n.top/o],u=aE([e.longitude,e.latitude]),d=[iY(u[0],a[0],c[0]),iY(u[1],a[1],c[1])],p=u.slice();if(i.width>=0&&(p[0]=t?.mode==="preserve"?u[0]:h?aP(u[0],d[0],i.width/2/o):d[0]),i.height>=0&&(p[1]=t?.mode==="preserve"?u[1]:h?aP(u[1],d[1],i.height/2/o):d[1]),p[0]!==u[0]||p[1]!==u[1]){let[t,i]=rA(p);p[0]!==u[0]&&(e.longitude=t),p[1]!==u[1]&&(e.latitude=i)}}return e}_constrainZoom(e,t){t||(t=this.getViewportProps());let{maxZoom:i,maxBounds:n}=t,r=null!==n&&t.width>0&&t.height>0,{minZoom:s}=t;if(r){let e=aC(t.width,t.height,t.maxBoundsPadding),r=aE(n[0]),o=aE(n[1]),a=o[0]-r[0],l=o[1]-r[1];e.width>0&&Number.isFinite(a)&&a>0&&(s=Math.max(s,Math.log2(e.width/a))),e.height>0&&Number.isFinite(l)&&l>0&&(s=Math.max(s,Math.log2(e.height/l))),s>i&&(s=i)}return iY(e,s,i)}_zoomFromCenter(e,t){let{width:i,height:n}=this.getViewportProps();return this.zoom({pos:[i/2,n/2],scale:e},t)}_panFromCenter(e,t){let{width:i,height:n}=this.getViewportProps();return this.pan({startPos:[i/2,n/2],pos:[i/2+e[0],n/2+e[1]]},t)}_getUpdatedState(e,t){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e,constraintContext:t})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,i,n){let r=e[0]-t[0],s=e[1]-t[1],o=e[1],a=t[1],{width:l,height:c}=this.getViewportProps(),u=0;s>0?Math.abs(c-a)>5&&(u=s/(a-c)*1.2):s<0&&a>5&&(u=1-o/a),u=iY(u,-1,1);let{minPitch:h,maxPitch:d}=this.getViewportProps(),p=i;return u>0?p=i+u*(d-i):u<0&&(p=i-u*(h-i)),{pitch:p,bearing:n+r/l*180}}}class aA extends ab{constructor(){super(...arguments),this.ControllerState=aL,this.transition={transitionDuration:300,transitionInterpolator:new al({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch","position"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this.rotationPivot="center",this._getAltitude=e=>{if("2d"===this.rotationPivot)return 0;if("3d"===this.rotationPivot&&this.pickPosition){let{x:t,y:i}=this.props,n=this.pickPosition(t+e[0],i+e[1]);if(n&&n.coordinate&&n.coordinate.length>=3)return n.coordinate[2]}}}setProps(e){"rotationPivot"in e&&(this.rotationPivot=e.rotationPivot||"center"),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(!1===e.normalize?null:aS),super.setProps(e)}updateViewport(e,t=null,i={}){let n=e.getState();i.isDragging&&n.startRotateLngLat?i={...i,rotationPivotPosition:n.startRotateLngLat}:!1===i.isDragging&&(i={...i,rotationPivotPosition:void 0}),super.updateViewport(e,t,i)}}class aT extends o5{constructor(e={}){super(e)}getViewportType(){return o8}get ControllerType(){return aA}}aT.displayName="MapView";let ak=[255,255,255],aI=0;class aO{constructor(e={}){this.type="ambient";const{color:t=ak}=e,{intensity:i=1}=e;this.id=e.id||`ambient-${aI++}`,this.color=t,this.intensity=i}}let aR=[255,255,255],az=[0,0,-1],aF=0;class aB{constructor(e={}){this.type="directional";const{color:t=aR}=e,{intensity:i=1}=e,{direction:n=az}=e,{_shadow:r=!1}=e;this.id=e.id||`directional-${aF++}`,this.color=t,this.intensity=i,this.type="directional",this.direction=new nj(n).normalize().toArray(),this.shadow=r}getProjectedLight(e){return this}}class aj{constructor(e,t={id:"pass"}){const{id:i}=t;this.id=i,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}}let aD={depthWriteEnabled:!0,depthCompare:"less-equal",blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha"};class aN extends aj{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let{canvasContext:t=this.device.canvasContext}=e,i=e.target??t.getCurrentFramebuffer(),[n,r]=t.getDrawingBufferSize(),s=e.clearCanvas??!0,o=e.clearColor??(!!s&&[0,0,0,0]),a=!!s&&1,l=!!s&&0,c=e.colorMask??15,u={viewport:[0,0,n,r]};e.colorMask&&(u.colorMask=c),e.scissorRect&&(u.scissorRect=e.scissorRect);let{shaderModuleProps:h,viewports:d,views:p,onViewportActive:f,clearStack:g=!0}=e,m=e.pass||"unknown",v="webgpu"===this.device.type;g&&(this._lastRenderIndex=-1);let _=[];if(!d.length)return this.device.beginRenderPass({framebuffer:i,parameters:u,clearColor:o,clearDepth:a,clearStencil:l}).end(),this.device.submit(),_;try{for(let n of d){f?.(n);let r=this._getDrawLayerParams(n,e),s=p&&p[n.id],c=n.subViewports||[n];for(let n of v?c.map(e=>[e]):[c]){let c=this.device.beginRenderPass({framebuffer:i,parameters:u,clearColor:o,clearDepth:a,clearStencil:l});try{for(let o of n){let n=this._drawLayersInViewport(c,{target:i,canvasContext:t,shaderModuleProps:h,viewport:o,view:s,pass:m,layers:e.layers,isPicking:e.isPicking},r);_.push(n)}}finally{c.end(),v&&this.device.submit()}o=!1,a=!1,l=!1}}return _}finally{v||this.device.submit()}}_getDrawLayerParams(e,{layers:t,pass:i,isPicking:n=!1,layerFilter:r,cullRect:s,views:o,effects:a,canvasContext:l=this.device.canvasContext,shaderModuleProps:c},u=!1){let h=[],d=function e(t=0,i={}){let n={},r=(s,o)=>{let a,l=s.props._offset,c=s.id,u=s.parent&&s.parent.id;if(!u||u in i||r(s.parent,!1),u in n){let t=n[u]=n[u]||e(i[u],i);a=t(s,o),n[c]=t}else Number.isFinite(l)?(a=l+(i[u]||0),n[c]=null):a=t;return o&&a>=t&&(t=a+1),i[c]=a,a};return r}(this._lastRenderIndex+1),p={layer:t[0],viewport:e,isPicking:n,renderPass:i,cullRect:s},f={};for(let n=0;n<t.length;n++){let s=t[n],g=this._shouldDrawLayer(s,p,r,f),m={shouldDrawLayer:g};g&&!u&&(m.shouldDrawLayer=!0,m.layerRenderIndex=d(s,g),m.shaderModuleProps=this._getShaderModuleProps(s,a,i,l,c),m.layerParameters={..."webgpu"===s.context.device.type?aD:null,...s.context.deck?.props.parameters,...o?.[e.id]?.props.parameters,...this.getLayerParameters(s,n,e)}),h[n]=m}return h}_drawLayersInViewport(e,{layers:t,shaderModuleProps:i,pass:n,target:r,canvasContext:s,viewport:o,view:a,isPicking:l},c){let u=function(e,{canvasContext:t=e.canvasContext,shaderModuleProps:i,target:n,viewport:r}){let s=i?.project?.devicePixelRatio??t.cssToDeviceRatio(),[,o]=t.getDrawingBufferSize(),a=n?n.height:o;return[r.x*s,a-(r.y+r.height)*s,r.width*s,r.height*s]}(this.device,{canvasContext:s,shaderModuleProps:i,target:r,viewport:o});if(a){let{clear:e,clearColor:t,clearDepth:i,clearStencil:n}=a.props;if(e){let e=[0,0,0,0],s=1,o=0;Array.isArray(t)&&!l?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):!1===t&&(e=!1),void 0!==i&&(s=i),void 0!==n&&(o=n),this.device.beginRenderPass({framebuffer:r,parameters:{viewport:u,scissorRect:u},clearColor:e,clearDepth:s,clearStencil:o}).end()}}let h={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:u});for(let i=0;i<t.length;i++){let r=t[i],s=c[i],{shouldDrawLayer:a}=s;if(a&&r.props.pickable&&h.pickableCount++,r.isComposite&&h.compositeCount++,r.isDrawable&&s.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:i,layerParameters:a}=s;h.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),i.project&&(i.project.viewport=o),r.context.renderPass=e;try{r._drawLayer({renderPass:e,shaderModuleProps:i,uniforms:{layerIndex:t},parameters:a})}catch(e){r.raiseError(e,`drawing ${r} to ${n}`)}}}return h}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,i){return null}getLayerParameters(e,t,i){return e.props.parameters}_shouldDrawLayer(e,t,i,n){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let r=e.parent;for(;r;){if(!r.props.visible||!r.filterSubLayer(t))return!1;t.layer=r,r=r.parent}if(i){let e=t.layer.id;if(e in n||(n[e]=i(t)),!n[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,i,n,r){let s=n.cssToDeviceRatio(),o=e.internalState?.propsInTransition||e.props,a={layer:o,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:s,modelMatrix:o.modelMatrix,coordinateSystem:o.coordinateSystem,coordinateOrigin:o.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let i of t)aV(a,i.getShaderModuleProps?.(e,a));for(let t of e.context.defaultShaderModules)t.name in a||(a[t.name]={});return aV(a,this.getShaderModuleProps(e,t,a),r)}}function aV(e,...t){for(let i of t)if(i)for(let t in i)e[t]?Object.assign(e[t],i[t]):e[t]=i[t];return e}class aU extends aN{constructor(e,t){super(e,t);const i=e.createTexture({format:"rgba8unorm",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}}),n=e.createTexture({format:"depth16unorm",width:1,height:1});this.fbo=e.createFramebuffer({id:"shadowmap",width:1,height:1,colorAttachments:[i],depthStencilAttachment:n})}delete(){this.fbo&&(this.fbo.destroy(),this.fbo=null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,i=this.device.canvasContext.cssToDeviceRatio(),n=e.viewports[0],r=n.width*i,s=n.height*i;(r!==t.width||s!==t.height)&&t.resize({width:r,height:s}),super.render({...e,clearColor:[1,1,1,1],target:t,pass:"shadow"})}getLayerParameters(e,t,i){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:"less-equal"}}shouldDrawLayer(e){return!1!==e.props.shadowEnabled}getShaderModuleProps(e,t,i){return{shadow:{project:i.project,drawToShadowMap:!0}}}}let aG={color:[255,255,255],intensity:1},aW=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],a$=[0,0,0,200/255];class aq{constructor(e={}){this.id="lighting-effect",this.shadowColor=a$,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:i}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),i._addDefaultShaderModule(rZ),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){for(let t in this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[],e){let i=e[t];switch(i.type){case"ambient":this.ambientLight=i;break;case"directional":this.directionalLights.push(i);break;case"point":this.pointLights.push(i)}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:t,viewports:i,onViewportActive:n,views:r}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let s=0;s<this.shadowPasses.length;s++)this.shadowPasses[s].render({layers:e,layerFilter:t,viewports:i,onViewportActive:n,views:r,shaderModuleProps:{shadow:{shadowLightId:s,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let i=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},n={enabled:!0,lights:this._getLights(e)},r=e.props.material;return{shadow:i,lighting:n,phongMaterial:r,gouraudMaterial:r}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(rZ))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let i=new rm().lookAt({eye:new nj(t.direction).negate()});e.push(i)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let i=new aU(e);this.shadowPasses[t]=i}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:i}=this;e||0!==t.length||0!==i.length||(this.ambientLight=new aO(aG),this.directionalLights.push(new aB(aW[0]),new aB(aW[1])))}_getLights(e){let t=[];for(let i of(this.ambientLight&&t.push(this.ambientLight),this.pointLights))t.push(i.getProjectedLight({layer:e}));for(let i of this.directionalLights)t.push(i.getProjectedLight({layer:e}));return t}}let aH=new aq;class aZ{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw="Initial render",this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let i=t.findIndex(t=>(t.order??1/0)-(e.order??1/0)>0);i<0?t.push(e):t.splice(i,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){"effects"in e&&!oK(e.effects,this.effects,1)&&this._setEffects(e.effects)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let i=[];for(let n of e){let e=t[n.id],r=n;e&&e!==n?e.setProps?(e.setProps(n.props),r=e):e.cleanup(this._context):e||n.setup(this._context),i.push(r),delete t[n.id]}for(let e in t)t[e].cleanup(this._context);this.effects=i,this._resolvedEffects=i.concat(this._defaultEffects),e.some(e=>e instanceof aq)||this._resolvedEffects.push(aH),this._needsRedraw="effects changed"}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}}class aY extends aN{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes("draw")||t.includes("terrain")}render(e){return this._render(e)}}let aX={blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"zero",blendAlphaOperation:"add",blendAlphaSrcFactor:"constant",blendAlphaDstFactor:"zero"};class aK extends aN{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return"pickingFBO"in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:i,viewports:n,onViewportActive:r,pickingFBO:s,deviceRect:{x:o,y:a,width:l,height:c},cullRect:u,effects:h,pass:d="picking",pickZ:p,canvasContext:f,shaderModuleProps:g,clearColor:m}){this.pickZ=p;let v=this._resetColorEncoder(p),_=super._render({target:s,layers:e,layerFilter:t,views:i,viewports:n,onViewportActive:r,cullRect:u,effects:h?.filter(e=>e.useInPicking),pass:d,canvasContext:f,isPicking:!0,shaderModuleProps:g,clearColor:m??[0,0,0,0],colorMask:15,scissorRect:[o,a,l,c]});return this._colorEncoderState=null,{decodePickingColor:v&&aQ.bind(null,v),stats:_}}shouldDrawLayer(e){let{pickable:t,operation:i}=e.props;return t&&i.includes("draw")||i.includes("terrain")||i.includes("mask")}getShaderModuleProps(e,t,i){return{picking:{isActive:1,isAttribute:this.pickZ,disabledPickingIndices:e.internalState?.disabledPickingIndices},lighting:{enabled:!1}}}getLayerParameters(e,t,i){let n={...e.props.parameters},{pickable:r,operation:s}=e.props;return this._colorEncoderState?r&&s.includes("draw")?(Object.assign(n,aX),n.blend=!0,"webgpu"===this.device.type?n.blendConstant=aJ(this._colorEncoderState,e,i):n.blendColor=aJ(this._colorEncoderState,e,i),s.includes("terrain")&&e.state?._hasPickingCover&&(n.blendAlphaSrcFactor="one")):s.includes("terrain")&&(n.blend=!1):n.blend=!1,n}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}}function aJ(e,t,i){let n,{byLayer:r,byAlpha:s}=e,o=r.get(t);return o?(o.viewports.push(i),n=o.a):(n=r.size+1)<=255?(o={a:n,layer:t,viewports:[i]},r.set(t,o),s[n]=o):(tT.warn("Too many pickable layers, only picking the first 255")(),n=0),[0,0,0,n/255]}function aQ(e,t){let i=e.byAlpha[t[3]];return i&&{pickedLayer:i.layer,pickedViewports:i.viewports,pickedObjectIndex:i.layer.decodePickingColor(t)}}class a0{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new aY(e),this.pickLayersPass=new aK(e),this.renderCount=0,this._needsRedraw="Initial render",this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw="layerFilter changed"),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw="drawPickingColors changed")}renderLayers(e){let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,i={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};if(!e.viewports.length){let e=t.render(i),n="stats"in e?e.stats:e;this._updateStats(n);return}i.effects&&this._preRender(i.effects,i);let n=this.lastPostProcessEffect?this.renderBuffers[0]:i.target;this.lastPostProcessEffect&&(i.clearColor=[0,0,0,0],i.clearCanvas=!0);let r=t.render({...i,target:n}),s="stats"in r?r.stats:r;i.effects&&(this.lastPostProcessEffect&&(i.clearCanvas=void 0===e.clearCanvas||e.clearCanvas),this._postRender(i.effects,i)),this.renderCount++,sn("deckRenderer.renderLayers",this,s,e),this._updateStats(s)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers rendered").addCount(t)}_preRender(e,t){for(let i of(this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{},e))t.preRenderStats[i.id]=i.preRender(t),i.postRender&&(this.lastPostProcessEffect=i.id);this.lastPostProcessEffect&&this._resizeRenderBuffers(t.canvasContext)}_resizeRenderBuffers(e=this.device.canvasContext){let{renderBuffers:t}=this,i=e.getDrawingBufferSize(),[n,r]=i;for(let e of(0===t.length&&[0,1].map(e=>{let i=this.device.createTexture({sampler:{minFilter:"linear",magFilter:"linear"},width:n,height:r});t.push(this.device.createFramebuffer({id:`deck-renderbuffer-${e}`,colorAttachments:[i]}))}),t))e.resize(i)}_postRender(e,t){let{renderBuffers:i}=this,n=t.target??t.canvasContext?.getCurrentFramebuffer()??t.target,r={...t,inputBuffer:i[0],swapBuffer:i[1]};for(let t of e)if(t.postRender){r.target=t.id===this.lastPostProcessEffect?n:void 0;let e=t.postRender(r);r.inputBuffer=e,r.swapBuffer=e===i[0]?i[1]:i[0]}}}var a1=e.i(6145),a2=e.i(25458);let a3={pickedColor:null,pickedObjectIndex:-1};function a4({pickedColors:e,decodePickingColor:t,deviceX:i,deviceY:n,deviceRadius:r,deviceRect:s}){let{x:o,y:a,width:l,height:c}=s,u=r*r,h=-1,d=0;for(let t=0;t<c;t++){let r=t+a-n,s=r*r;if(s>u)d+=4*l;else for(let t=0;t<l;t++){if(e[d+3]-1>=0){let e=t+o-i,n=e*e+s;n<=u&&(u=n,h=d)}d+=4}}if(h>=0){let i=e.slice(h,h+4),n=t(i);if(n){let e=Math.floor(h/4/l),t=h/4-e*l;return{...n,pickedColor:i,pickedX:o+t,pickedY:a+e}}tT.error("Picked non-existent layer. Is picking buffer corrupt?")()}return a3}function a6({pickedColors:e,decodePickingColor:t}){let i=new Map;if(e){for(let n=0;n<e.length;n+=4)if(e[n+3]-1>=0){let r=e.slice(n,n+4),s=r.join(",");if(!i.has(s)){let e=t(r);e?i.set(s,{...e,color:r}):tT.error("Picked non-existent layer. Is picking buffer corrupt?")()}}}return Array.from(i.values())}function a5({pickInfo:e,viewports:t,pixelRatio:i,x:n,y:r,z:s}){let o,a=t[0];if(t.length>1&&(a=function(e,t){for(let i=e.length-1;i>=0;i--){let n=e[i];if(n.containsPixel(t))return n}return e[0]}(e?.pickedViewports||t,{x:n,y:r})),a){let e=[n-a.x,r-a.y];void 0!==s&&(e[2]=s),o=a.unproject(e)}return{color:null,layer:null,viewport:a,index:-1,picked:!1,x:n,y:r,pixel:[n,r],coordinate:o,devicePixel:e&&"pickedX"in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:i}}function a8(e){let{pickInfo:t,lastPickedInfo:i,mode:n,layers:r}=e,{pickedColor:s,pickedLayer:o,pickedObjectIndex:a}=t,l=o?[o]:[];if("hover"===n){let e=i.index,t=i.layerId,n=o?o.props.id:null;if(n!==t||a!==e){if(n!==t){let e=r.find(e=>e.props.id===t);e&&l.unshift(e)}i.layerId=n,i.index=a,i.info=null}}let c=a5(e),u=new Map;return u.set(null,c),l.forEach(e=>{let t={...c};e===o&&(t.color=s,t.index=a,t.picked=!0);let r=(t=a7({layer:e,info:t,mode:n})).layer;e===o&&"hover"===n&&(i.info=t),u.set(r.id,t),"hover"===n&&r.updateAutoHighlight(t)}),u}function a7({layer:e,info:t,mode:i}){for(;e&&t;){let n=t.layer||null;t.sourceLayer=n,t.layer=e,t=e.getPickingInfo({info:t,mode:i,sourceLayer:n}),e=e.parent}return t}class a9{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new aK(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){"layerFilter"in e&&(this.layerFilter=e.layerFilter),"_pickable"in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:i,viewports:n},r=this.lastPickedInfo.info){let s=r&&r.layer&&r.layer.id,o=r&&r.viewport&&r.viewport.id,a=s?i.find(e=>e.id===s):null,l=o&&n.find(e=>e.id===o)||n[0],c=l&&l.unproject([e-l.x,t-l.y]);return{...r,x:e,y:t,viewport:l,coordinate:c,layer:a}}_resizeBuffer(e=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){let e=this.device.createTexture({format:"rgba8unorm",width:1,height:1,usage:a2.Texture.RENDER_ATTACHMENT|a2.Texture.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"}),this.device.isTextureFormatRenderable("rgba32float")){let e=this.device.createTexture({format:"rgba32float",width:1,height:1,usage:a2.Texture.RENDER_ATTACHMENT|a2.Texture.COPY_SRC}),t=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"});this.depthFBO=t}}let[t,i]=e.getDrawingBufferSize();this.pickingFBO?.resize({width:t,height:i}),this.depthFBO?.resize({width:t,height:i})}_getPickable(e){if(!1===this._pickable)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:i,x:n,y:r,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d,p=c.cssToDeviceRatio(),f=this._getPickable(e);if(!f||0===i.length)return{result:[],emptyInfo:a5({viewports:i,x:n,y:r,pixelRatio:p})};this._resizeBuffer(c);let g=c.cssToDevicePixels([n,r],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],v=Math.round(s*p),{width:_,height:y}=this.pickingFBO,b=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceWidth:_,deviceHeight:y}),x={x:n-s,y:r-s,width:2*s+1,height:2*s+1},w=[],P=new Set;for(let e=0;e<o;e++){let s,g;if(b){let e=await this._drawAndSampleAsync({layers:f,views:t,viewports:i,onViewportActive:u,deviceRect:b,cullRect:x,effects:h,pass:`picking:${a}`,canvasContext:c});s=a4({...e,deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceRect:b})}else s={pickedColor:null,pickedObjectIndex:-1};let _=this._getDepthLayers(s,f,l);if(_.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:_,views:t,viewports:i,onViewportActive:u,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:x,effects:h,pass:`picking:${a}:z`,canvasContext:c},!0);e[3]&&(g=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=a8({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:f,viewports:i,x:n,y:r,z:g,pixelRatio:p})).values()))t.layer&&w.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:w,emptyInfo:d.get(null)}}_pickClosestObject({layers:e,views:t,viewports:i,x:n,y:r,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d,p=c.cssToDeviceRatio(),f=this._getPickable(e);if(!f||0===i.length)return{result:[],emptyInfo:a5({viewports:i,x:n,y:r,pixelRatio:p})};this._resizeBuffer(c);let g=c.cssToDevicePixels([n,r],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],v=Math.round(s*p),{width:_,height:y}=this.pickingFBO,b=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceWidth:_,deviceHeight:y}),x={x:n-s,y:r-s,width:2*s+1,height:2*s+1},w=[],P=new Set;for(let e=0;e<o;e++){let s,g;if(b){let e=this._drawAndSample({layers:f,views:t,viewports:i,onViewportActive:u,deviceRect:b,cullRect:x,effects:h,pass:`picking:${a}`,canvasContext:c});s=a4({...e,deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceRect:b})}else s={pickedColor:null,pickedObjectIndex:-1};let _=this._getDepthLayers(s,f,l);if(_.length>0){let{pickedColors:e}=this._drawAndSample({layers:_,views:t,viewports:i,onViewportActive:u,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:x,effects:h,pass:`picking:${a}:z`,canvasContext:c},!0);e[3]&&(g=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=a8({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:f,viewports:i,x:n,y:r,z:g,pixelRatio:p})).values()))t.layer&&w.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:w,emptyInfo:d.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:i,x:n,y:r,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(c);let p=c.cssToDeviceRatio(),f=c.cssToDevicePixels([n,r],!0),g=f.x,m=f.y+f.height,v=c.cssToDevicePixels([n+s,r+o],!0),_=v.x+v.width,y=v.y,b=await this._drawAndSampleAsync({layers:d,views:t,viewports:i,onViewportActive:u,deviceRect:{x:g,y:y,width:_-g,height:m-y},cullRect:{x:n,y:r,width:s,height:o},effects:h,pass:`picking:${a}`,canvasContext:c}),x=a6(b),w=new Map,P=[],C=Number.isFinite(l);for(let e=0;e<x.length&&(!C||!(P.length>=l));e++){let t=x[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:n,y:r,pixelRatio:p},s=(i=a7({layer:t.pickedLayer,info:i,mode:a})).layer.id;w.has(s)||w.set(s,new Set);let o=w.get(s),l=i.object??i.index;o.has(l)||(o.add(l),P.push(i))}return P}_pickVisibleObjects({layers:e,views:t,viewports:i,x:n,y:r,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(c);let p=c.cssToDeviceRatio(),f=c.cssToDevicePixels([n,r],!0),g=f.x,m=f.y+f.height,v=c.cssToDevicePixels([n+s,r+o],!0),_=v.x+v.width,y=v.y,b=this._drawAndSample({layers:d,views:t,viewports:i,onViewportActive:u,deviceRect:{x:g,y:y,width:_-g,height:m-y},cullRect:{x:n,y:r,width:s,height:o},effects:h,pass:`picking:${a}`,canvasContext:c}),x=a6(b),w=new Map,P=[],C=Number.isFinite(l);for(let e=0;e<x.length&&(!C||!(P.length>=l));e++){let t=x[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:n,y:r,pixelRatio:p},s=(i=a7({layer:t.pickedLayer,info:i,mode:a})).layer.id;w.has(s)||w.set(s,new Set);let o=w.get(s),l=i.object??i.index;o.has(l)||(o.add(l),P.push(i))}return P}async _drawAndSampleAsync({layers:e,views:t,viewports:i,onViewportActive:n,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:l},c=!1){let u=c?this.depthFBO:this.pickingFBO,h={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:n,pickingFBO:u,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:l,pickZ:c,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(h.preRenderStats[e.id]=e.preRender(h));let{decodePickingColor:d,stats:p}=this.pickLayersPass.render(h);this._updateStats(p);let{x:f,y:g,width:m,height:v}=r,_=u.colorAttachments[0]?.texture;if(!_)throw Error("Picking framebuffer color attachment is missing");let y=await this._readTextureDataAsync(_,{x:f,y:g,width:m,height:v},c?Float32Array:Uint8Array);if(!c){let e=!1;for(let t=3;t<y.length;t+=4)if(0!==y[t]){e=!0;break}!e&&y.length>0&&tT.warn("Async pick readback returned only zero alpha values",{deviceRect:r,bytes:Array.from(y.subarray(0,Math.min(y.length,16)))})()}return{pickedColors:y,decodePickingColor:d}}async _readTextureDataAsync(e,t,i){let{width:n,height:r}=t,s=e.computeMemoryLayout(t),o=this.device.createBuffer({byteLength:s.byteLength,usage:a1.Buffer.COPY_DST|a1.Buffer.MAP_READ});try{e.readBuffer(t,o);let a=await o.readAsync(0,s.byteLength),l=i.BYTES_PER_ELEMENT;if(s.bytesPerRow%l!=0)throw Error(`Texture readback row stride ${s.bytesPerRow} is not aligned to ${l}-byte elements.`);let c=new i(a.buffer,a.byteOffset,s.byteLength/l),u=4*n,h=s.bytesPerRow/l;if(h<u)throw Error(`Texture readback row stride ${h} is smaller than packed row length ${u}.`);let d=new i(n*r*4);for(let e=0;e<r;e++){let t=e*h;d.set(c.subarray(t,t+u),e*u)}return d}finally{o.destroy()}}_drawAndSample({layers:e,views:t,viewports:i,onViewportActive:n,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:l},c=!1){let u=c?this.depthFBO:this.pickingFBO,h={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:n,pickingFBO:u,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:l,pickZ:c,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(h.preRenderStats[e.id]=e.preRender(h));let{decodePickingColor:d,stats:p}=this.pickLayersPass.render(h);this._updateStats(p);let{x:f,y:g,width:m,height:v}=r,_=new(c?Float32Array:Uint8Array)(m*v*4);return this.device.readPixelsToArrayWebGL(u,{sourceX:f,sourceY:g,sourceWidth:m,sourceHeight:v,target:_}),{pickedColors:_,decodePickingColor:d}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers picked").addCount(t)}_getDepthLayers(e,t,i){if(!i||!this.depthFBO)return[];let{pickedLayer:n}=e,r=n?.state?.terrainDrawMode==="drape";return n&&!r?[n]:t.filter(e=>e.props.operation.includes("terrain"))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:i,deviceWidth:n,deviceHeight:r}){let s=Math.max(0,e-i),o=Math.max(0,t-i),a=Math.min(n,e+i+1)-s,l=Math.min(r,t+i+1)-o;return a<=0||l<=0?null:{x:s,y:o,width:a,height:l}}}let le={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},lt="root";class li{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add("deck-widget-container"),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!oK(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);for(let e in this.defaultWidgets.length=0,this.resolvedWidgets.length=0,this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let i=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let n of this.getWidgets()){let{viewId:r}=n;if(r){let e=i[r];e&&(n.onViewportChange&&n.onViewportChange(e),n.onRedraw?.({viewports:[e],layers:t}))}else{if(n.onViewportChange)for(let t of e)n.onViewportChange(t);n.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=i,this._updateContainers()}onHover(e,t){for(let i of this.getWidgets()){let{viewId:n}=i;n&&n!==e.viewport?.id||i.onHover?.(e,t)}}getCanvasBounds(e){let t=this.deck?.getCanvas?.(),i=t?.getBoundingClientRect(),n=this.parentElement?.getBoundingClientRect(),r=this.deck?.getCanvasContext?.(e?.id);if(r&&n){r.updatePosition();let[e,t]=r.getPosition(),[i,s]=r.getCSSSize();return{x:e-n.left,y:t-n.top,width:i,height:s}}return{x:i&&n?i.left-n.left:0,y:i&&n?i.top-n.top:0,width:i?.width||this.deck?.width||0,height:i?.height||this.deck?.height||0}}onEvent(e,t){let i=iP[t.type];if(i)for(let n of this.getWidgets()){let{viewId:r}=n;r&&r!==e.viewport?.id||n[i]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;for(let e of(this.resolvedWidgets.length=0,this.defaultWidgets))t[e.id]=null,this.resolvedWidgets.push(e);for(let i of e){let e=t[i.id];e?e.viewId!==i.viewId||e.placement!==i.placement?(this._removeWidget(e),this._addWidget(i)):i!==e&&(e.setProps(i.props),i=e):this._addWidget(i),t[i.id]=null,this.resolvedWidgets.push(i)}for(let e in t){let i=t[e];i&&this._removeWidget(i)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:i="top-left"}=e,n=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(n,i).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&"string"!=typeof e)return e;let i=e||lt,n=this.containers[i];n||((n=document.createElement("div")).style.pointerEvents="none",n.style.position="absolute",n.style.overflow="hidden",this.parentElement?.append(n),this.containers[i]=n);let r=n.querySelector(`.${t}`);return r||((r=globalThis.document.createElement("div")).className=t,r.style.position="absolute",r.style.zIndex="2",Object.assign(r.style,le[t]),n.append(r)),r}_updateContainers(){for(let e in this.containers){let t=this.lastViewports[e]||null,i=e===lt||t,n=this.containers[e];if(i){let e=this._getContainerBounds(t);n.style.display="block",n.style.left=`${e.x}px`,n.style.top=`${e.y}px`,n.style.width=`${e.width}px`,n.style.height=`${e.height}px`}else n.style.display="none"}}_getContainerBounds(e){if(!e)return{x:0,y:0,width:this.parentElement?.clientWidth||this.deck.width,height:this.parentElement?.clientHeight||this.deck.height};let t=this.getCanvasBounds(e);return{x:t.x+e.x,y:t.y+e.y,width:e.width,height:e.height}}}function ln(e,t){t&&Object.entries(t).map(([t,i])=>{t.startsWith("--")?e.style.setProperty(t,i):e.style[t]=i})}class lr{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,i=this.rootElement;if(i&&t.className!==e.className&&(t.className&&i.classList.remove(t.className),e.className&&i.classList.add(e.className)),i&&!oK(t.style,e.style,1)){var n;(n=t.style)&&Object.keys(n).map(e=>{e.startsWith("--")?i.style.removeProperty(e):i.style[e]=""}),ln(i,e.style)}Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=["deck-widget",this.className,this.props.className],t=document.createElement("div");return e.filter(e=>"string"==typeof e&&e.length>0).forEach(e=>t.classList.add(e)),ln(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}}lr.defaultProps={id:"widget",style:{},_container:null,className:""};let ls={zIndex:"1",position:"absolute",pointerEvents:"none",color:"#a0a7b4",backgroundColor:"#29323c",padding:"10px",top:"0",left:"0",display:"none"};class lo extends lr{constructor(e={}){super(e),this.id="default-tooltip",this.placement="fill",this.className="deck-tooltip",this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement("div");return e.className=this.className,Object.assign(e.style,ls),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,i=t&&t.props.getTooltip;if(!i)return;let n=i(e),r=this.widgetManager?.getCanvasBounds(e.viewport),s=e.x+(r?.x||0),o=e.y+(r?.y||0);this.setTooltip(n,s,o)}setTooltip(e,t,i){let n=this.rootElement;if(n){if("string"==typeof e)n.innerText=e;else if(e)e.text&&(n.innerText=e.text),e.html&&(n.innerHTML=e.html),e.className&&(n.className=e.className);else{this.isVisible=!1,n.style.display="none";return}this.isVisible=!0,n.style.display="block",n.style.transform=`translate(${t}px, ${i}px)`,e&&"object"==typeof e&&"style"in e&&Object.assign(n.style,e.style)}}}lo.defaultProps={...lr.defaultProps};class la{constructor(e){this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap,this._createEventManager=e.createEventManager,this._getEventRoot=e.getEventRoot}finalize(){for(let e of Object.values(this.targets))e.eventManager.destroy(),e.presentationContext.destroy();this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap}syncCanvasEntries(e){let t=this._normalizeCanvasList(e.canvases),i={},n=[],r=new Map;for(let{canvas:e}of t){let t=this._getEventRoot(e);r.set(t,(r.get(t)||0)+1)}for(let{id:s,canvas:o}of t){let t=this._getEventRoot(o),a=1===r.get(t)?t:o,l=this.targets[s];if(!l||l.device!==e.device||l.canvas!==o||l.eventRoot!==a){l?.eventManager.destroy(),l?.presentationContext.destroy();let t=e.device.createPresentationContext({id:s,canvas:o,useDevicePixels:e.useDevicePixels,autoResize:!0});l={id:s,device:e.device,canvas:o,eventRoot:a,presentationContext:t,eventManager:this._createEventManager(a)}}this._eventRootToCanvasId.set(a,s),this._eventRootToCanvasId.set(o,s),i[s]=l,n.push(s)}for(let[e,t]of Object.entries(this.targets))i[e]||(t.eventManager.destroy(),t.presentationContext.destroy());this.targets=i,this.order=n;let s=Object.fromEntries(Object.entries(i).map(([e,t])=>[e,t.eventManager]));this._haveSameEventManagers(s)||(this.eventManagers=s)}getCanvasIdFromEvent(e){return e?this._eventRootToCanvasId.get(e):void 0}getTarget(e){return this.targets[e||this.order[0]||oJ]||null}_normalizeCanvasList(e=[]){let t=new Set;return e.map((e,i)=>{let n,r;return"string"==typeof e?(ar(n=document.getElementById(e),`Canvas with id ${e} not found`),r=e):r=(n=e).id||`deckgl-canvas-${i}`,ar(!t.has(r),`Duplicate canvas id ${r}`),t.add(r),{id:r,canvas:n}})}_haveSameEventManagers(e){let t=Object.keys(e),i=Object.keys(this.eventManagers);return t.length===i.length&&t.every(t=>e[t]===this.eventManagers[t])}}function ll(e,t){if(!e)throw Error(t||"loader assertion failed.")}let lc={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:e.g,document:"undefined"!=typeof document&&document};lc.self||lc.window||lc.global,lc.window||lc.self||lc.global,lc.global||lc.self||lc.window,lc.document;let lu=("object"!=typeof S.default||"[object process]"!==String(S.default),!0),lh=void 0!==S.default&&S.default.version&&/v([0-9]*)/.exec(S.default.version);lh&&parseFloat(lh[1]);let ld=globalThis.loaders?.parseImageNode,lp="undefined"!=typeof Image,lf="undefined"!=typeof ImageBitmap,lg=!!lu||!!ld,lm=/^data:image\/svg\+xml/,lv=/\.svg((\?|#).*)?$/;function l_(e){return e&&(lm.test(e)||lv.test(e))}function ly(e,t){if(l_(t))throw Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(e)])}async function lb(e,t,i){let n=function(e,t){if(l_(t)){let t=new TextDecoder().decode(e);try{"function"==typeof unescape&&"function"==typeof encodeURIComponent&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return ly(e,t)}(e,i),r=self.URL||self.webkitURL,s="string"!=typeof n&&r.createObjectURL(n);try{return await lx(s||n,t)}finally{s&&r.revokeObjectURL(s)}}async function lx(e,t){let i=new Image;return(i.src=e,t.image&&t.image.decode&&i.decode)?(await i.decode(),i):await new Promise((e,t)=>{try{i.onload=()=>e(i),i.onerror=e=>{let i=e instanceof Error?e.message:"error";t(Error(i))}}catch(e){t(e)}})}let lw=!0;async function lP(e,t,i){let n;n=l_(i)?await lb(e,t,i):ly(e,i);let r=t&&t.imagebitmap;return await lC(n,r)}async function lC(e,t=null){if((function(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t)||!lw)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),lw=!1}return await createImageBitmap(e)}function lM(e){var t,i;let n,r,s,o,a=lS(e);return((n=lS(a)).byteLength>=24&&0x89504e47===n.getUint32(0,!1)?{mimeType:"image/png",width:n.getUint32(16,!1),height:n.getUint32(20,!1)}:null)||function(e){let t=lS(e);if(!(t.byteLength>=3&&65496===t.getUint16(0,!1)&&255===t.getUint8(2)))return null;let{tableMarkers:i,sofMarkers:n}=function(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}(),r=2;for(;r+9<t.byteLength;){let e=t.getUint16(r,!1);if(n.has(e))return{mimeType:"image/jpeg",height:t.getUint16(r+5,!1),width:t.getUint16(r+7,!1)};if(!i.has(e))break;r+=2,r+=t.getUint16(r,!1)}return null}(a)||((r=lS(a)).byteLength>=10&&0x47494638===r.getUint32(0,!1)?{mimeType:"image/gif",width:r.getUint16(6,!0),height:r.getUint16(8,!0)}:null)||((s=lS(a)).byteLength>=14&&16973===s.getUint16(0,!1)&&s.getUint32(2,!0)===s.byteLength?{mimeType:"image/bmp",width:s.getUint32(18,!0),height:s.getUint32(22,!0)}:null)||((o=!function(e,t,i=0){let n=[...t].map(e=>e.charCodeAt(0));for(let t=0;t<n.length;++t)if(n[t]!==e[t+i])return!1;return!0}(i=new Uint8Array((t=a)instanceof DataView?t.buffer:t),"ftyp",4)||(96&i[8])==0?null:function(e){switch(String.fromCharCode(...e.slice(8,12)).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}(i))?{mimeType:o.mimeType,width:0,height:0}:null)}function lS(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error("toDataView")}async function lE(e,t){let{mimeType:i}=lM(e)||{},n=globalThis.loaders?.parseImageNode;return ll(n),await n(e,i)}let lL={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:"4.5.1",mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],extensions:["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],parse:async function e(e,t,i){let n,r=((t=t||{}).image||{}).type||"auto",{url:s}=i||{};switch(function(e){switch(e){case"auto":case"data":if(lf)return"imagebitmap";if(lp)return"image";if(lg)return"data";throw Error("Install '@loaders.gl/polyfills' to parse images under Node.js");default:return!function(e){switch(e){case"auto":return lf;case"imagebitmap":case"image":case"data":return;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}(e),e}}(r)){case"imagebitmap":n=await lP(e,t,s);break;case"image":n=await lb(e,t,s);break;case"data":n=await lE(e,t);break;default:ll(!1)}return"data"===r&&(n=function(e){switch(function(e){var t;let i=(t=e,"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?"imagebitmap":"undefined"!=typeof Image&&t instanceof Image?"image":t&&"object"==typeof t&&t.data&&t.width&&t.height?"data":null);if(!i)throw Error("Not an image");return i}(e)){case"data":return e;case"image":case"imagebitmap":let t=document.createElement("canvas"),i=t.getContext("2d");if(!i)throw Error("getImageData");return t.width=e.width,t.height=e.height,i.drawImage(e,0,0),i.getImageData(0,0,e.width,e.height);default:throw Error("getImageData")}}(n)),n},tests:[e=>!!lM(new DataView(e))],options:{image:{type:"auto",decode:!0}}},lA={dataType:null,batchType:null,id:"JSON",name:"JSON",module:"",version:"",options:{},extensions:["json","geojson"],mimeTypes:["application/json","application/geo+json"],testText:function(e){let t=e[0],i=e[e.length-1];return"{"===t&&"}"===i||"["===t&&"]"===i},parseTextSync:JSON.parse},lT=function(){let e="9.4.0",t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);if(!t){tT.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:tT,_registerLoggers:si};var i=[lA,[lL,{imagebitmap:{premultiplyAlpha:"none"}}]];let t=ox();for(let e of i=Array.isArray(i)?i:[i]){let i=sg(e);t.find(e=>i===e)||t.unshift(i)}}return e}();var lk=e.i(80900),lI=e.i(4819);let lO="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.";class lR{static defaultProps={...lk.DEVICE_DEFAULT_PROPS,type:"best-available",adapters:void 0,waitForPageLoad:!0};stats=lI.lumaStats;log=N.log;VERSION="9.4.1";spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw N.log.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),N.log.error("'yarn why @luma.gl/core' can help identify the source of the conflict")(),Error("luma.gl - multiple versions detected: see console log");N.log.error("This version of luma.gl has already been initialized")()}N.log.log(1,`${this.VERSION} - set luma.log.level=1 (or higher) to trace rendering`)(),globalThis.luma=this}async createDevice(e={}){let t={...lR.defaultProps,...e},i=this.selectAdapter(t.type,t.adapters);if(!i)throw Error(lO);return t.waitForPageLoad&&await i.pageLoaded,await i.create(t)}async attachDevice(e,t){let i=this._getTypeFromHandle(e,t.adapters),n=i&&this.selectAdapter(i,t.adapters);if(!n)throw Error(lO);return await n?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){return Array.from(this._getAdapterMap(e)).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=this._getAdapterMap(e);for(let e of["webgpu","webgl","null"])if(t.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let i=e;"best-available"===e&&(i=this.getBestAvailableAdapterType(t));let n=this._getAdapterMap(t);return i&&n.get(i)||null}enforceWebGL2(e=!0,t=[]){let i=this._getAdapterMap(t).get("webgl");i||N.log.warn("enforceWebGL2: webgl adapter not found")(),i?.enforceWebGL2?.(e)}setDefaultDeviceProps(e){Object.assign(lR.defaultProps,e)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let i of e)t.set(i.type,i);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?"webgl":"undefined"!=typeof GPUDevice&&e instanceof GPUDevice||e?.queue?"webgpu":null===e?"null":(e instanceof WebGLRenderingContext?N.log.warn("WebGL1 is not supported",e)():N.log.warn("Unknown handle type",e)(),null)}}let lz=new lR;var lF=e.i(40021);class lB{get pageLoaded(){return lD||(lD=lj&&"complete"===document.readyState||"undefined"==typeof window?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e()))),lD}}let lj=(0,lF.isBrowser)()&&"undefined"!=typeof document,lD=null;var lN=e.i(25387);let lV={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}};var lU=e.i(92563);let lG=new class extends lB{type="webgl";enforceWebGL2(e){!function(e=!0){let t=HTMLCanvasElement.prototype;if(!e&&t.originalGetContext){t.getContext=t.originalGetContext,t.originalGetContext=void 0;return}t.originalGetContext=t.getContext,t.getContext=function(e,t){if("webgl"===e||"experimental-webgl"===e){let e=this.originalGetContext("webgl2",t);return e instanceof HTMLElement&&function(e){e.getExtension("EXT_color_buffer_float");let t={...lV,WEBGL_disjoint_timer_query:e.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:{drawBuffersWEBGL:t=>e.drawBuffers(t),COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067},OES_vertex_array_object:{VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES:()=>e.createVertexArray(),deleteVertexArrayOES:t=>e.deleteVertexArray(t),isVertexArrayOES:t=>e.isVertexArray(t),bindVertexArrayOES:t=>e.bindVertexArray(t)},ANGLE_instanced_arrays:{VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE:(...t)=>e.drawArraysInstanced(...t),drawElementsInstancedANGLE:(...t)=>e.drawElementsInstanced(...t),vertexAttribDivisorANGLE:(...t)=>e.vertexAttribDivisor(...t)}},i=e.getExtension.bind(e);e.getExtension=function(e){let n=i(e);return n||(e in t?t[e]:null)};let n=e.getSupportedExtensions;e.getSupportedExtensions=function(){let i=n.apply(e)||[];return i?.concat(Object.keys(t))}}(e),e}return this.originalGetContext(e,t)}}(e)}isSupported(){return"undefined"!=typeof WebGL2RenderingContext}isDeviceHandle(e){return!!("undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext)||("undefined"!=typeof WebGLRenderingContext&&e instanceof WebGLRenderingContext&&N.log.warn("WebGL1 is not supported",e)(),!1)}async attach(t,i={}){var n;let{WebGLDevice:r}=await e.A(76084);if(t instanceof r)return t;let s=r.getDeviceFromContext(t);if(s)return s;if(n=t,!("undefined"!=typeof WebGL2RenderingContext&&n instanceof WebGL2RenderingContext)&&(!n||"function"!=typeof n.createVertexArray))throw Error("Invalid WebGL2RenderingContext");i=lW(i),await l$(i);let o=!0===i.createCanvasContext?{}:i.createCanvasContext;return new r({...i,_handle:t,createCanvasContext:{canvas:t.canvas,autoResize:!1,...o}})}async create(t={}){let{WebGLDevice:i}=await e.A(76084);t=lW(t),await l$(t);try{let e=new i(t);N.log.groupCollapsed(1,`WebGLDevice ${e.id} created`)();let n=`\
${e._reused?"Reusing":"Created"} device with WebGL2 ${e.props.debug?"debug ":""}context: \
${e.info.vendor}, ${e.info.renderer} for canvas: ${e.canvasContext.id}`;return N.log.probe(1,n)(),N.log.table(1,e.info)(),e}finally{N.log.groupEnd(1)(),N.log.info(1,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}};function lW(e){return{...e,debug:e.debug??lN.Device.defaultProps.debug,debugWebGL:e.debugWebGL??lN.Device.defaultProps.debugWebGL,debugSpectorJS:e.debugSpectorJS??!!N.log.get("debug-spectorjs")}}async function l$(e){let t=[];for(let i of((e.debugWebGL||e.debug)&&t.push((0,lU.loadRegisteredWebGLDeveloperTools)()),e.debugSpectorJS&&t.push((0,lU.loadRegisteredSpectorJS)(e)),await Promise.allSettled(t)))"rejected"===i.status&&N.log.error(`Failed to initialize debug libraries ${i.reason}`)()}let lq=0,lH={requestAnimationFrame:e=>{let t;return(t="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null)?t.call(window,e):setTimeout(()=>e("undefined"!=typeof performance?performance.now():Date.now()),1e3/60)},cancelAnimationFrame:e=>{let t;(t="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null)?t.call(window,e):clearTimeout(e)}};class lZ{static defaultAnimationLoopProps={device:null,onAddHTML:()=>"",onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>{console.error(e)},stats:void 0,autoResizeViewport:!1,animationFrameProvider:lH};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw="initialized";_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(e){if(this.props={...lZ.defaultAnimationLoopProps,...e},!(e=this.props).device)throw Error("No device provided");this.stats=e.stats||new ss.Stats({id:`animation-loop-${lq++}`}),this.sharedStats=lz.stats.get("Animation Loop"),this.frameRate=this.stats.get("Frame Rate"),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get("CPU Time"),this.gpuTime=this.stats.get("GPU Time"),this.setProps({autoResizeViewport:e.autoResizeViewport,animationFrameProvider:e.animationFrameProvider}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(e){this._error=e,this.props.onError(e),this.props.onError===lZ.defaultAnimationLoopProps.onError&&"undefined"!=typeof window&&"undefined"!=typeof ErrorEvent&&window.dispatchEvent(new ErrorEvent("error",{error:e,message:e.message}))}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){if("autoResizeViewport"in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),"animationFrameProvider"in e){let t=e.animationFrameProvider||lH;if(t!==this.props.animationFrameProvider){let e=null!==this._animationFrameId;e&&this._cancelAnimationFrame(),this.props.animationFrameProvider=t,e&&this._requestAnimationFrame()}}return this}async start(){if(this._running)return this;this._running=!0;try{let e;if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}if(!this._running)return null;return!1!==e&&(this._cancelAnimationFrame(),this._requestAnimationFrame()),this}catch(t){let e=t instanceof Error?t:Error("Unknown error");throw this.props.onError(e),e}}stop(){if(this._running){let e=this.animationProps;this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0,e&&this.props.onFinalize(e)}return this}redraw(e,t=null){return this.device?.isLost||this._error||(this._beginFrameTimers(e),this._setupFrame(),this.animationProps&&(this.animationProps.animationFrame=t),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&(this._resolveNextFrame(this),this._nextFramePromise=null,this._resolveNextFrame=null),this._endFrameTimers()),this}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw("waitForRender"),this._nextFramePromise||(this._nextFramePromise=new Promise(e=>{this._resolveNextFrame=e})),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw("toDataURL"),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error("OffscreenCanvas")}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){this._running&&(this._animationFrameId=this.props.animationFrameProvider.requestAnimationFrame(this._animationFrame.bind(this)))}_cancelAnimationFrame(){null!==this._animationFrameId&&(this.props.animationFrameProvider.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_animationFrame(e,t){if(this._running)try{this.redraw(e,t??null),this._requestAnimationFrame()}catch(t){let e=t instanceof Error?t:Error(String(t));this.reportError(e),this.stop()}}_renderFrame(e){if(this.display)return void this.display._renderFrame(e);let t=this.props.onRender(this._getAnimationProps());this.device&&!1!==t&&this.device.submit()}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error("loop");let t=e?.canvas,i=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:i,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,animationFrame:null,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error("animationProps");return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:i}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw("drawing buffer resized"),i!==this.animationProps.aspect&&this.setNeedsRedraw("drawing buffer aspect changed"),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=i,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error("No device provided");this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement("div");document.body.appendChild(e),e.style.position="relative";let t=document.createElement("div");t.style.position="absolute",t.style.left="10px",t.style.bottom="10px",t.style.width="300px",t.style.background="white",this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let i=this.props.onAddHTML(t);i&&(t.innerHTML=i)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??("undefined"!=typeof performance?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;void 0!==e&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener("mousemove",this._onMousemove.bind(this)),this.canvas.addEventListener("mouseleave",this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}}function lY(){}let lX={id:"",width:"100%",height:"100%",style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:"auto",layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,_canvases:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:"none",eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:lY,onWebGLInitialized:lY,onResize:lY,onViewStateChange:lY,onInteractionStateChange:lY,onBeforeRender:lY,onAfterRender:lY,onLoad:lY,onError:e=>tT.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:({isDragging:e})=>e?"grabbing":"grab",getTooltip:null,debug:!1,drawPickingColors:!1};class lK{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.eventManagers={},this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new ss.Stats({id:"deck.gl"}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw="Initial render",this._canvasManager=new la({createEventManager:e=>this._createEventManager(e),getEventRoot:e=>this._getEventRoot(e)}),this._ownedCanvas=null,this._pickRequest={mode:"hover",x:-1,y:-1,radius:0,canvasId:void 0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this,i=this._getCanvasIdFromEvent(e);if("pointerleave"===e.type)t.x=-1,t.y=-1,t.radius=0,t.canvasId=i;else{if(e.leftButton||e.rightButton)return;let n=e.offsetCenter;if(!n)return;t.x=n.x,t.y=n.y,t.radius=this.props.pickingRadius,t.canvasId=i}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=iP[e.type],i=e.offsetCenter,n=this._getCanvasIdFromEvent(e);if(!t||!i||!this.layerManager)return;let r=this.layerManager.getLayers(),s=this._getInternalPickingMode();if(s){if("sync"===s){let t="click"===e.type&&this._shouldUnproject3D(r)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(i.x,i.y,{unproject3D:!0,canvasId:n},r))):this._getLastPointerDownPickingInfo(i.x,i.y,n,r);this._dispatchPickingEvent(t,e);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(i.x,i.y,n,r))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter,i=this._getCanvasIdFromEvent(e);if(!t)return;let n=this._getInternalPickingMode();if(!n)return;let r=this.layerManager?.getLayers()||[],s=++this._pointerDownPickSequence;if("sync"===n){let e=this._pickPointSync({x:t.x,y:t.y,canvasId:i,radius:this.props.pickingRadius}),n=this._getFirstPickedInfo(e);this._lastPointerDownInfo=n,this._lastPointerDownInfoPromise=Promise.resolve(n);return}let o=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{canvasId:i},r)).then(e=>this._getFirstPickedInfo(e)).then(e=>(s===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let n=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,i,r):{};return s===this._pointerDownPickSequence&&(this._lastPointerDownInfo=n),n});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=o};const t=e;this.props={...lX,...e},e=this.props,this._validateCanvasConfiguration(e),e.viewState&&e.initialViewState&&tT.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device,this._setDeviceCanvasContext(e.device));let i=this.device;!i&&e.gl&&(e.gl instanceof WebGLRenderingContext&&tT.error("WebGL1 context not supported.")(),i=lG.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps})),i||(i=this._createDevice(e)),this.animationLoop=this._createAnimationLoop(i,e),this.setProps(t),e._typedArrayManagerProps&&oB.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,Object.keys(this._canvasManager.targets).length||this.eventManager?.destroy(),this.eventManager=null,this.eventManagers={},this.widgetManager?.finalize(),this.widgetManager=null,this._canvasManager.finalize(),this._isMultiCanvasMode()?this.canvas=null:this.canvas&&this.canvas===this._ownedCanvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null,this._ownedCanvas=null),this._canvasContext=null}setProps(e){this.stats.get("setProps Time").timeStart(),"onLayerHover"in e&&tT.removed("onLayerHover","onHover")(),"onLayerClick"in e&&tT.removed("onLayerClick","onClick")(),e.initialViewState&&!oK(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),ar(!("_canvases"in e)||Array.isArray(e._canvases)===this._isMultiCanvasMode()),Object.assign(this.props,e),this._validateCanvasConfiguration(this.props),this._validateInternalPickingMode(),this.device&&this._isMultiCanvasMode()&&this._syncCanvasTargets(),this._setCanvasSize(this.props);let t=Object.create(this.props);if(Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState(),eventManagers:this.eventManagers}),e.device&&e.device.id!==this.device?.id){let t=e.device.getDefaultCanvasContext();this.animationLoop?.stop(),this._isMultiCanvasMode()||this.canvas===t.canvas||(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(e.device),tT.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()}if(this.animationLoop?.setProps(t),void 0!==e.useDevicePixels&&this._canvasContext?.setProps)for(let t of(this._canvasContext.setProps({useDevicePixels:e.useDevicePixels}),Object.values(this._canvasManager.targets)))t.presentationContext.setProps({useDevicePixels:e.useDevicePixels});this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get("setProps Time").timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return"Deck._animate";let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let i=this.viewManager.needsRedraw(e),n=this.layerManager.needsRedraw(e),r=this.effectManager.needsRedraw(e),s=this.deckRenderer.needsRedraw(e);return t||i||n||r||s}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});(t=e||t)&&(this.stats.get("Redraw Count").incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return null!==this.viewManager}getViews(){return ar(this.viewManager),this.viewManager.views}getView(e){return ar(this.viewManager),this.viewManager.getView(e)}getViewports(e){return ar(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}getCanvasContext(e){let t=e?this.viewManager?.getView(e)?.props.canvasId:void 0;return this._getCanvasContext(t)}getEventManager(e){if(!e||!this.viewManager)return this.eventManager;let t=this.viewManager.getCanvasId(e)||oJ;return this.eventManagers[t]||this.eventManager}async pickObjectAsync(e){let t=(await this._pickAsync("pickObjectAsync","pickObject Time",e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync("pickObjectsAsync","pickObjects Time",e)}pickObject(e){let t=this._pick("pickObject","pickObject Time",e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick("pickObject","pickMultipleObjects Time",e).result}pickObjects(e){return this._pick("pickObjects","pickObjects Time",e)}_pickPositionForController(e,t,i){return"sync"!==this._getInternalPickingMode()?null:this.pickObject({x:e,y:t,radius:0,unproject3D:!0,canvasId:i?this.viewManager?.getCanvasId(i):void 0})}_addResources(e,t=!1){for(let i in e)this.layerManager.resourceManager.add({resourceId:i,data:e[i],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if("auto"===e)return"webgpu"===t?"async":"sync";if("sync"===e&&"webgpu"===t)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>"3d"===e.props.pickable)}_getPointPickOptions(e,t,i={},n=this.layerManager?.getLayers()||[]){return{x:e,y:t,canvasId:i.canvasId,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(n),...i}}_pickPointSync(e){return this._pick("pickObject","pickObject Time",e)}_pickPointAsync(e){return this._pickAsync("pickObjectAsync","pickObject Time",e)}_getLastPointerDownPickingInfo(e,t,i,n=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:n,viewports:this.getViewports({x:e,y:t,canvasId:i})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},i){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let n=t,r=!1;for(let t of e)n=t,r=t.layer?.onHover(t,i)||r;r||(this.props.onHover?.(n,i),this.widgetManager.onHover(n,i))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let i=iP[t.type];if(!i)return;let{layer:n}=e,r=n&&(n[i]||n.props[i]),s=this.props[i],o=!1;r&&(o=r.call(n,e,t)),o||(s?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,i){ar(this.deckPicker);let{stats:n}=this,r=this._isMultiCanvasMode()?i.canvasId||this._getDefaultCanvasId():i.canvasId,s=this._getCanvasContext(r)||void 0;n.get("Pick Count").incrementCount(),n.get(t).timeStart(),this._resizeForCanvasTarget(r);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports({...i,canvasId:r}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasId:r,canvasContext:s});return n.get(t).timeEnd(),o}_pick(e,t,i){ar(this.deckPicker);let{stats:n}=this,r=this._isMultiCanvasMode()?i.canvasId||this._getDefaultCanvasId():i.canvasId,s=this._getCanvasContext(r)||void 0;n.get("Pick Count").incrementCount(),n.get(t).timeStart(),this._resizeForCanvasTarget(r);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports({...i,canvasId:r}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasId:r,canvasContext:s});return n.get(t).timeEnd(),o}_createCanvas(e){let t=e.canvas;return"string"==typeof t&&ar(t=document.getElementById(t)),t?this._ownedCanvas=null:((t=document.createElement("canvas")).id=e.id||"deckgl-overlay",e.width&&"number"==typeof e.width&&(t.width=e.width),e.height&&"number"==typeof e.height&&(t.height=e.height),(e.parent||document.body).appendChild(t),this._ownedCanvas=t),Object.assign(t.style,e.style),t}_isMultiCanvasMode(){return Array.isArray(this.props._canvases)}_getDefaultCanvasId(){return this._canvasManager.order[0]||oJ}_validateCanvasConfiguration(e){Array.isArray(e._canvases)&&(ar(!e.canvas),ar(!e.gl),ar(!e.device?.canvasContext||e.device.getDefaultCanvasContext().offscreenCanvas))}_createEventManager(e){let t=new iy(e,{touchAction:this.props.touchAction,recognizers:Object.keys(iC).map(e=>{let[t,i,n,r]=iC[e],s=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...i,...s,event:e}),recognizeWith:n,requireFailure:r}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(let e in iP)"dblclick"===e?t.watch(e,this._onEvent):t.on(e,this._onEvent);return t}_getEventRoot(e){return e.closest(".deck-events-root")||this.props.parent?.querySelector(".deck-events-root")||e}_syncCanvasTargets(){if(!this.device||!this._isMultiCanvasMode())return;this._canvasManager.syncCanvasEntries({device:this.device,canvases:this.props._canvases||[],useDevicePixels:this.props.useDevicePixels}),this.eventManagers=this._canvasManager.eventManagers;let e=this._getDefaultCanvasId();this.eventManager=this.eventManagers[e]||null,this.canvas=this._canvasManager.targets[e]?.canvas||null}_setCanvasContext(e){this._canvasContext=e,"style"in e.canvas&&(this.canvas=e.canvas)}_setDeviceCanvasContext(e,t={}){let i=e.getDefaultCanvasContext();this._setCanvasContext(i),this._setDeviceResizeHandler(e,t)}_setDeviceResizeHandler(e,t={}){let i=!!t.syncDrawingBuffer;if(this._deviceResizeHandler?.device===e){this._deviceResizeHandler.syncDrawingBuffer=i;return}this._restoreDeviceResizeHandler();let n=e=>{this._isMultiCanvasMode()?this._updateMultiCanvasDimensions():e===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};e.props.onResize=n,this._deviceResizeHandler={device:e,onResize:n,syncDrawingBuffer:i}}_restoreDeviceResizeHandler(){let e=this._deviceResizeHandler;e&&e.device.props?.onResize===e.onResize&&(e.device.props.onResize=lY),this._deviceResizeHandler=null}_setCanvasSize(e){if(this._isMultiCanvasMode()||!this.canvas)return;let{width:t,height:i}=e;if(t||0===t){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(i||0===i){let t=Number.isFinite(i)?`${i}px`:i;this.canvas.style.position=e.style?.position||"absolute",this.canvas.style.height=t}}_getCanvasIdFromEvent(e){return this._canvasManager.getCanvasIdFromEvent(e?.rootElement)}_getCanvasContext(e){return this._canvasManager.getTarget(e)?.presentationContext||this._canvasContext}_resizeForCanvasTarget(e){let t=this._canvasManager.getTarget(e);if(!t||!this.device?.canvasContext)return;let[i,n]=t.presentationContext.getDrawingBufferSize();this.device.canvasContext.setDrawingBufferSize(i,n)}_createDeviceCanvas(e){if(this._isMultiCanvasMode()){let t=globalThis.OffscreenCanvas;if(!t)throw Error("`_canvases` requires OffscreenCanvas support.");return new t("number"==typeof e.width&&Number.isFinite(e.width)?e.width:1,"number"==typeof e.height&&Number.isFinite(e.height)?e.height:1)}return this._createCanvas(e)}_updateCanvasSize(e=this._canvasContext){if(this._isMultiCanvasMode())return void this._updateMultiCanvasDimensions();let{canvas:t}=this,[i,n]=e?e.getCSSSize():[t?.clientWidth??t?.width??0,t?.clientHeight??t?.height??0];(i!==this.width||n!==this.height)&&(this.width=i,this.height=n,this.viewManager?.setProps({width:i,height:n}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:i,height:n},e||void 0))}_onCanvasContextResize(e,t={}){if(t.syncDrawingBuffer){let{width:t,height:i}=e.canvas;e.setDrawingBufferSize(t,i)}this._needsRedraw="Canvas resized",this._updateCanvasSize(e)}_updateMultiCanvasDimensions(){let[e,t]=this._getCanvasContext()?.getCSSSize()||[0,0];(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.props.onResize({width:e,height:t})),this._needsRedraw="Canvas resized",this.viewManager?.setNeedsUpdate("Canvas resized"),this.viewManager?.setProps({width:this.width,height:this.height})}_createAnimationLoop(e,t){let{gl:i,onError:n}=t;return new lZ({device:e,autoResizeDrawingBuffer:!i&&!Array.isArray(t._canvases),autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:n})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,i={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};i.adapters.includes(lG)||i.adapters.push(lG);let n={alphaMode:this.props.deviceProps?.type==="webgpu"?"premultiplied":void 0};return lz.createDevice({_reuseDevices:!0,type:"webgl",...i,createCanvasContext:{...n,..."object"==typeof t?t:void 0,canvas:this._createDeviceCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new aT({id:"default-view"})];return t.length&&this.props.controller&&(t[0]=t[0].clone({controller:this.props.controller})),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error("WebGL context is lost"))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,i=this.layerManager?.getLayers()||[],n=this._getPointPickOptions(e.x,e.y,{canvasId:e.canvasId,radius:e.radius,mode:e.mode},i),r=this._getInternalPickingMode(),s=++this._hoverPickSequence;if(e.event=null,e.canvasId=void 0,!r)return;if("sync"===r)return void this._applyHoverCallbacks(this._pickPointSync(n),t);this._pickPointAsync(n).then(({result:e,emptyInfo:i})=>{s===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:i},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.getCursor(this.cursorState);if(this._isMultiCanvasMode()){for(let t of Object.values(this._canvasManager.targets))t.canvas.style.cursor=e;return}let t=this.props.parent||this.canvas;t&&(t.style.cursor=e)}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(e,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==e)}),this._isMultiCanvasMode()?this._syncCanvasTargets():this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),"webgl"===this.device.type&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),"webgl"===this.device.type&&this.props.onWebGLInitialized(this.device.gl);let t=new O;if(t.play(),this.animationLoop.attachTimeline(t),!this._isMultiCanvasMode()){let e=this.canvas&&this._getEventRoot(this.canvas);ar(e),this.eventManager=this._createEventManager(e),this.eventManagers={[oJ]:this.eventManager}}this.viewManager=new oQ({timeline:t,eventManager:this.eventManager,eventManagers:this.eventManagers,getCanvasContext:this._isMultiCanvasMode()?this.getCanvasContext.bind(this):void 0,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let i=this.viewManager.getViewports()[0];this.layerManager=new oX(this.device,{deck:this,stats:this.stats,viewport:i,timeline:t}),this.effectManager=new aZ({deck:this,device:this.device}),this.deckRenderer=new a0(this.device,{stats:this.stats}),this.deckPicker=new a9(this.device,{stats:this.stats});let n=this.props.parent?.querySelector(".deck-widgets-root")||(this._isMultiCanvasMode()?this.props.parent||this.canvas?.parentElement:null)||this.canvas?.parentElement;this.widgetManager=new li({deck:this,parentElement:n}),this.widgetManager.addDefault(new lo),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(e,t){let{device:i,gl:n}=this.layerManager.context;this.props.onBeforeRender({device:i,gl:n});let r={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:"screen",effects:this.effectManager.getEffects(),...t};if(this._isMultiCanvasMode()&&"screen"===r.pass&&!r.target&&this._canvasManager.order.length)for(let e of this._canvasManager.order){let t=r.viewports.filter(t=>this.viewManager.getCanvasId(t.id)===e);if(!t.length){let t=this._canvasManager.targets[e];this._resizeForCanvasTarget(e),this.deckRenderer?.renderLayers({...r,canvasContext:t.presentationContext,target:t.presentationContext.getCurrentFramebuffer(),viewports:[],clearCanvas:!0}),t.presentationContext.present();continue}let i=this._canvasManager.targets[e];this._resizeForCanvasTarget(e);let n=i.presentationContext.getCurrentFramebuffer();this.deckRenderer?.renderLayers({...r,canvasContext:i.presentationContext,target:n,viewports:t}),i.presentationContext.present()}else this.deckRenderer?.renderLayers(r);"screen"===r.pass&&this.widgetManager.onRedraw({viewports:r.viewports,layers:r.layers}),this.props.onAfterRender({device:i,gl:n})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),tT.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},!this.props.viewState&&this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get("frameRate").timeEnd(),e.get("frameRate").timeStart();let t=this.animationLoop.stats;e.get("GPU Time").addTime(t.get("GPU Time").lastTiming),e.get("CPU Time").addTime(t.get("CPU Time").lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get("frameRate").getHz(),e.setPropsTime=t.get("setProps Time").time,e.updateAttributesTime=t.get("Update Attributes").time,e.framesRedrawn=t.get("Redraw Count").count,e.pickTime=t.get("pickObject Time").time+t.get("pickMultipleObjects Time").time+t.get("pickObjects Time").time,e.pickCount=t.get("Pick Count").count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get("Layers rendered").lastSampleCount,e.pickLayersCount=t.get("Layers picked").lastSampleCount,e.updateLayersCount=t.get("Layer updates").count,e.updateAttributesCount=t.get("Attributes updated").count,e.gpuTime=t.get("GPU Time").time,e.cpuTime=t.get("CPU Time").time,e.gpuTimePerFrame=t.get("GPU Time").getAverageTime(),e.cpuTimePerFrame=t.get("CPU Time").getAverageTime();let i=lz.stats.get("GPU Time and Memory");e.bufferMemory=i.get("Buffer Memory").count,e.textureMemory=i.get("Texture Memory").count,e.renderbufferMemory=i.get("Renderbuffer Memory").count,e.gpuMemory=i.get("GPU Memory").count}}lK.defaultProps=lX,lK.VERSION=lT;var rw=rw,tL=tL;let lJ=Math.PI/180,lQ=180/Math.PI;function l0(e){return 1>Math.abs(oD(e+180,360)-180)}class l1 extends oY{constructor(e={}){const{longitude:t=0,bearing:i=0,pitch:n=0,zoom:r=0,nearZMultiplier:s=.5,farZMultiplier:o=1,resolution:a=10}=e;let{latitude:l=0,height:c,altitude:u=1.5,fovy:h}=e;l=Math.max(Math.min(l,90),-90),c=c||1,h?u=rR(h):h=rO(u);const d=Math.pow(2,r-l2(Math.max(Math.min(l,85.051129),-85.051129))),p=n*lJ,f=e.nearZ??s;super({...e,height:c,viewMatrix:new rm().lookAt({eye:[0,-u,0],up:[0,0,1]}).rotateX(-p).rotateY(-i*lJ).rotateX(l*lJ).rotateZ(-t*lJ).scale(d/c),longitude:t,latitude:l,zoom:r,distanceScales:function(){let e=Math.PI/180*256;return{unitsPerMeter:[4018225162502676e-20,4018225162502676e-20,4018225162502676e-20],unitsPerMeter2:[0,0,0],metersPerUnit:[24886.609375,24886.609375,24886.609375],unitsPerDegree:[e,e,4018225162502676e-20],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/e,1/e,24886.609375]}}(),fovy:h,focalDistance:u,near:f,far:e.farZ??(u+512*d/c/Math.max(Math.cos(p),.1))*o}),this.scale=d,this.latitude=l,this.longitude=t,this.bearing=i,this.pitch=n,this.fovy=h,this.resolution=a}get projectionMode(){return ix.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(e={}){let t={targetZ:e.z||0},i=this.unproject([0,this.height/2],t),n=this.unproject([this.width/2,0],t),r=this.unproject([this.width,this.height/2],t),s=this.unproject([this.width/2,this.height],t);return r[0]<this.longitude&&(r[0]+=360),i[0]>this.longitude&&(i[0]-=360),[Math.min(i[0],r[0],n[0],s[0]),Math.min(i[1],r[1],n[1],s[1]),Math.max(i[0],r[0],n[0],s[0]),Math.max(i[1],r[1],n[1],s[1])]}_getRayToGlobe(e,{topLeft:t=!0,targetZ:i}={}){let[n,r]=e,s=t?r:this.height-r,{pixelUnprojectionMatrix:o}=this,a=l3(o,[n,s,-1,1]),l=l3(o,[n,s,1,1]),c=rw.sqrLen(rw.sub([],a,l)),u=rw.sqrLen(a),h=rw.sqrLen(l),d=(4*u*h-(c-u-h)**2)/16*4/c;return{rayStartPosition:a,rayEndPosition:l,radius:((i||0)/6370972+1)*256,rayLengthSquared:c,rayStartDistanceSquared:u,distanceToCenterSquared:d}}_getRayDistanceToGlobeCenterRatio(e,t){let{distanceToCenterSquared:i,radius:n}=this._getRayToGlobe(e,t);return Math.sqrt(Math.max(0,i))/n}getZoomAnchorStrength(e){let t=this._getRayDistanceToGlobeCenterRatio(e);if(t>=1.15)return 0;let i=Math.max(0,Math.min(1,(t-.75)/.3999999999999999));return 1-i*i*(3-2*i)}unproject(e,{topLeft:t=!0,targetZ:i}={}){let n,[r,s,o]=e,a=t?s:this.height-s,{pixelUnprojectionMatrix:l}=this;if(Number.isFinite(o))n=l3(l,[r,a,o,1]);else{let{rayStartPosition:r,rayEndPosition:s,radius:o,rayLengthSquared:a,rayStartDistanceSquared:l,distanceToCenterSquared:c}=this._getRayToGlobe(e,{topLeft:t,targetZ:i}),u=(Math.sqrt(l-c)-Math.sqrt(Math.max(0,o*o-c)))/Math.sqrt(a);n=rw.lerp([],r,s,u)}let[c,u,h]=this.unprojectPosition(n);return Number.isFinite(o)?[c,u,h]:Number.isFinite(i)?[c,u,i]:[c,u]}projectPosition(e){let[t,i,n=0]=e,r=t*lJ,s=i*lJ,o=Math.cos(s),a=(n/6370972+1)*256;return[Math.sin(r)*o*a,-Math.cos(r)*o*a,Math.sin(s)*a]}unprojectPosition(e){let[t,i,n]=e,r=rw.len(e);return[Math.atan2(t,-i)*lQ,Math.asin(n/r)*lQ,(r/256-1)*6370972]}projectFlat(e){return e}unprojectFlat(e){return e}panByPosition(e,t,i){if(!i){let i=this.getZoomAnchorStrength(t);if(0===i)return{longitude:this.longitude,latitude:this.latitude};let n=this.unproject(t),r=oD(e[0]-n[0]+180,360)-180,s=e[1]-n[1],o=Math.abs(n[1])>85.051129||Math.abs(r)>90;return l0(this.bearing)&&o?{longitude:this.longitude,latitude:this.latitude}:(l0(this.bearing)&&0!==s&&(i=Math.min(i,Math.max(0,((s>0?85.051129:-85.051129)-this.latitude)/s))),{longitude:this.longitude+r*i,latitude:Math.max(Math.min(this.latitude+s*i,90),-90)})}let[n,r,s]=e,o=.25/Math.pow(2,this.zoom-l2(this.latitude)),a=n+o*(i[0]-t[0]),l=r-o*(i[1]-t[1]),c={longitude:a,latitude:l=Math.max(Math.min(l,90),-90),zoom:s-l2(r)};return c.zoom+=l2(c.latitude),c}}function l2(e,t){return t&&(e=Math.max(Math.min(e,85.051129),-85.051129)),Math.log2(Math.PI*Math.cos(e*Math.PI/180))}function l3(e,t){let i=tL.transformMat4([],t,e);return tL.scale(i,i,1/i[3]),i}l1.displayName="GlobeViewport";var rw=rw;class l4 extends i2{static get ZERO(){return s||Object.freeze(s=new l4(0,0,0,0)),s}constructor(e=0,t=0,i=0,n=0){super(-0,-0,-0,-0),iZ(e)&&1==arguments.length?this.copy(e):(iH.debug&&(iQ(e),iQ(t),iQ(i),iQ(n)),this[0]=e,this[1]=t,this[2]=i,this[3]=n)}set(e,t,i,n){return this[0]=e,this[1]=t,this[2]=i,this[3]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this.check()}fromObject(e){return iH.debug&&(iQ(e.x),iQ(e.y),iQ(e.z),iQ(e.w)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this[3]=e.w,this}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e.w=this[3],e}get ELEMENTS(){return 4}get z(){return this[2]}set z(e){this[2]=iQ(e)}get w(){return this[3]}set w(e){this[3]=iQ(e)}transform(e){return nP(this,this,e),this.check()}transformByMatrix3(e){return nF(this,this,e),this.check()}transformByMatrix2(e){let t,i;return t=this[0],i=this[1],this[0]=e[0]*t+e[2]*i,this[1]=e[1]*t+e[3]*i,this[2]=this[2],this[3]=this[3],this.check()}transformByQuaternion(e){return nM(this,this,e),this.check()}applyMatrix4(e){return e.transform(this,this),this}}function l6(e,t,i){let n=t[0],r=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=i[0],p=i[1],f=i[2],g=i[3],m=i[4],v=i[5],_=i[6],y=i[7],b=i[8];return e[0]=d*n+p*o+f*c,e[1]=d*r+p*a+f*u,e[2]=d*s+p*l+f*h,e[3]=g*n+m*o+v*c,e[4]=g*r+m*a+v*u,e[5]=g*s+m*l+v*h,e[6]=_*n+y*o+b*c,e[7]=_*r+y*a+b*u,e[8]=_*s+y*l+b*h,e}function l5(e,t,i){let n=i[0],r=i[1];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=r*t[3],e[4]=r*t[4],e[5]=r*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function l8(){let e=new eo(4);return eo!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function l7(e,t,i){let n=Math.sin(i*=.5);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(i),e}function l9(e,t,i){let n=t[0],r=t[1],s=t[2],o=t[3],a=i[0],l=i[1],c=i[2],u=i[3];return e[0]=n*u+o*a+r*c-s*l,e[1]=r*u+o*l+s*a-n*c,e[2]=s*u+o*c+n*l-r*a,e[3]=o*u-n*a-r*l-s*c,e}let ce=(h=i3(),d=i5(1,0,0),p=i5(0,1,0),function(e,t,i){let n=nm(t,i);return n<-.999999?(nv(h,d,t),1e-6>i6(h)&&nv(h,p,t),ng(h,h),l7(e,h,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(nv(h,t,i),e[0]=h[0],e[1]=h[1],e[2]=h[2],e[3]=1+n,tm(e,e))});l8(),l8(),f=new eo(9),eo!=Float32Array&&(f[1]=0,f[2]=0,f[3]=0,f[5]=0,f[6]=0,f[7]=0),f[0]=1,f[4]=1,f[8]=1;let ct=[0,0,0,1];class ci extends iJ{constructor(e=0,t=0,i=0,n=1){super(-0,-0,-0,-0),Array.isArray(e)&&1==arguments.length?this.copy(e):this.set(e,t,i,n)}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this.check()}set(e,t,i,n){return this[0]=e,this[1]=t,this[2]=i,this[3]=n,this.check()}fromObject(e){return this[0]=e.x,this[1]=e.y,this[2]=e.z,this[3]=e.w,this.check()}fromMatrix3(e){return!function(e,t){let i,n=t[0]+t[4]+t[8];if(n>0)i=Math.sqrt(n+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);let r=(n+1)%3,s=(n+2)%3;i=Math.sqrt(t[3*n+n]-t[3*r+r]-t[3*s+s]+1),e[n]=.5*i,i=.5/i,e[3]=(t[3*r+s]-t[3*s+r])*i,e[r]=(t[3*r+n]+t[3*n+r])*i,e[s]=(t[3*s+n]+t[3*n+s])*i}}(this,e),this.check()}fromAxisRotation(e,t){return l7(this,e,t),this.check()}identity(){return this[0]=0,this[1]=0,this[2]=0,this[3]=1,this.check()}setAxisAngle(e,t){return this.fromAxisRotation(e,t)}get ELEMENTS(){return 4}get x(){return this[0]}set x(e){this[0]=iQ(e)}get y(){return this[1]}set y(e){this[1]=iQ(e)}get z(){return this[2]}set z(e){this[2]=iQ(e)}get w(){return this[3]}set w(e){this[3]=iQ(e)}len(){return td(this)}lengthSquared(){return tp(this)}dot(e){return tv(this,e)}rotationTo(e,t){return ce(this,e,t),this.check()}add(e){return e9(this,this,e),this.check()}calculateW(){let e,t,i;return e=this[0],t=this[1],i=this[2],this[0]=e,this[1]=t,this[2]=i,this[3]=Math.sqrt(Math.abs(1-e*e-t*t-i*i)),this.check()}conjugate(){return this[0]=-this[0],this[1]=-this[1],this[2]=-this[2],this[3]=this[3],this.check()}invert(){let e,t,i,n,r,s;return e=this[0],t=this[1],i=this[2],s=(r=e*e+t*t+i*i+(n=this[3])*n)?1/r:0,this[0]=-e*s,this[1]=-t*s,this[2]=-i*s,this[3]=n*s,this.check()}lerp(e,t,i){return void 0===i?this.lerp(this,e,t):(ty(this,e,t,i),this.check())}multiplyRight(e){return l9(this,this,e),this.check()}multiplyLeft(e){return l9(this,e,this),this.check()}normalize(){let e=this.len(),t=e>0?1/e:0;return this[0]=this[0]*t,this[1]=this[1]*t,this[2]=this[2]*t,this[3]=this[3]*t,0===e&&(this[3]=1),this.check()}rotateX(e){var t;let i,n,r,s,o,a;return t=.5*e,i=this[0],n=this[1],r=this[2],s=this[3],o=Math.sin(t),a=Math.cos(t),this[0]=i*a+s*o,this[1]=n*a+r*o,this[2]=r*a-n*o,this[3]=s*a-i*o,this.check()}rotateY(e){var t;let i,n,r,s,o,a;return t=.5*e,i=this[0],n=this[1],r=this[2],s=this[3],o=Math.sin(t),a=Math.cos(t),this[0]=i*a-r*o,this[1]=n*a+s*o,this[2]=r*a+i*o,this[3]=s*a-n*o,this.check()}rotateZ(e){var t;let i,n,r,s,o,a;return t=.5*e,i=this[0],n=this[1],r=this[2],s=this[3],o=Math.sin(t),a=Math.cos(t),this[0]=i*a+n*o,this[1]=n*a-i*o,this[2]=r*a+s*o,this[3]=s*a-r*o,this.check()}scale(e){return tl(this,this,e),this.check()}slerp(e,t,i){var n,r,s;let o,a,l,c,u,h,d,p,f,g,m,v,_,y,b,x;switch(arguments.length){case 1:({start:o=ct,target:a,ratio:l}=e);break;case 2:o=this,a=e,l=t;break;default:o=e,a=t,l=i}return n=o,r=a,s=l,f=n[0],g=n[1],m=n[2],v=n[3],_=r[0],y=r[1],(c=f*_+g*y+m*(b=r[2])+v*(x=r[3]))<0&&(c=-c,_=-_,y=-y,b=-b,x=-x),1-c>1e-6?(p=Math.sin(u=Math.acos(c)),h=Math.sin((1-s)*u)/p,d=Math.sin(s*u)/p):(h=1-s,d=s),this[0]=h*f+d*_,this[1]=h*g+d*y,this[2]=h*m+d*b,this[3]=h*v+d*x,this.check()}transformVector4(e,t=new l4){return tw(t,e,this),i0(t,4)}lengthSq(){return this.lengthSquared()}setFromAxisAngle(e,t){return this.setAxisAngle(e,t)}premultiply(e){return this.multiplyLeft(e)}multiply(e){return this.multiplyRight(e)}}let cn=Math.PI/180,cr=180/Math.PI;class cs{static toPosition(e,t){let i=t*cn,n=e*cn,r=Math.cos(i);return[r*Math.cos(n),r*Math.sin(n),Math.sin(i)]}static toLngLat(e){return[Math.atan2(e[1],e[0])*cr,Math.asin(iY(e[2],-1,1))*cr]}static tangentBasis(e,t){let i=t*cn,n=e*cn,r=Math.sin(i),s=Math.sin(n),o=Math.cos(n);return{N:[-r*o,-r*s,Math.cos(i)],E:[-s,o,0]}}static upVector(e,t,i){let{N:n,E:r}=cs.tangentBasis(e,t),s=i*cn,o=Math.cos(s),a=Math.sin(s);return[n[0]*o+r[0]*a,n[1]*o+r[1]*a,n[2]*o+r[2]*a]}static bearing(e,t,i){let{N:n,E:r}=cs.tangentBasis(t,i);return Math.atan2(rw.dot(e,r),rw.dot(e,n))*cr}static cameraFrame(e,t,i){let n=cs.toPosition(e,t),r=cs.upVector(e,t,i),{N:s,E:o}=cs.tangentBasis(e,t),a=i*cn,l=Math.cos(a),c=Math.sin(a),u=[o[0]*l-s[0]*c,o[1]*l-s[1]*c,o[2]*l-s[2]*c];return{position:n,up:r,axisHorizontal:rw.cross([],n,u),axisVertical:rw.cross([],n,r),longitude:e,latitude:t,bearing:i}}static angularDistance(e,t){let i=cs.toPosition(e.longitude,e.latitude),n=cs.toPosition(t.longitude,t.latitude);return Math.acos(iY(rw.dot(i,n),-1,1))}static greatCircleAxis(e,t){let i=cs.toPosition(e.longitude,e.latitude),n=cs.toPosition(t.longitude,t.latitude);return rw.normalize([],rw.cross([],i,n))}static rotate(e,t,i){let n=new ci().fromAxisRotation(t,i);return rw.transformQuat([],e,n)}static rotateFrame(e,t,i,n){let r=cs.rotate(e.position,e.axisHorizontal,t);r=cs.rotate(r,e.axisVertical,i);let s=cs.rotate(e.up,e.axisHorizontal,t);s=cs.rotate(s,e.axisVertical,i);let[o,a]=cs.toLngLat(r),l=n?0:cs.bearing(s,o,a);return{...e,position:r,up:s,longitude:o,latitude:a,bearing:l}}static rotateFrameToMatch(e,t,i,n=1){let r=cs.toPosition(...t),s=cs.toPosition(...i),o=rw.cross([],r,s),a=rw.len(o),l=iY(rw.dot(r,s),-1,1);if(a<1e-12){if(l>0)return e;o=rw.cross([],r,e.up),1e-12>rw.len(o)&&(o=rw.cross([],r,e.axisVertical))}rw.normalize(o,o);let c=Math.atan2(a,l)*iY(n,0,1),u=cs.rotate(e.position,o,c),h=cs.rotate(e.up,o,c),[d,p]=cs.toLngLat(u);return{...e,position:u,up:h,longitude:d,latitude:p,bearing:cs.bearing(h,d,p)}}}let co=1/(1-Math.exp(-5)),ca=e=>(1-Math.exp(-5*e))*co;class cl extends as{constructor(e){const t="axis"in e;super({compare:["longitude","latitude"],extract:t?["longitude","latitude","zoom","bearing"]:["longitude","latitude","zoom"],required:["longitude","latitude"]}),t?(this._mode="rotation",this._axis=e.axis,this._totalAngle=e.totalAngle):(this._mode="linear",this._targetLongitude=e.targetLongitude)}initializeProps(e,t){let i=super.initializeProps(e,t);return this._startZoom=e.zoom,"rotation"===this._mode?this._startFrame={...cs.cameraFrame(e.longitude,e.latitude,e.bearing||0),axisHorizontal:this._axis}:i.end.longitude=this._targetLongitude,i}interpolateProps(e,t,i){if("rotation"===this._mode){let{longitude:e,latitude:t,bearing:n}=cs.rotateFrame(this._startFrame,this._totalAngle*i,0),r=this._startZoom+l2(t,!0)-l2(this._startFrame.latitude,!0);return{bearing:n,longitude:e,latitude:t,zoom:r}}let n=e.longitude+(t.longitude-e.longitude)*i,r=e.latitude+(t.latitude-e.latitude)*i,s=this._startZoom+l2(r,!0)-l2(e.latitude,!0);return{longitude:n,latitude:r,zoom:s}}}let cc=Math.PI/180,cu=180/Math.PI;function ch(e,t=0){return 512*Math.sin(Math.min(180,e)*cc/2)*Math.pow(2,t)}function cd(e,t=0){return 2*Math.asin(Math.min(1,e/Math.pow(2,t)/256/2))*cu}class cp extends aL{constructor(e){const{startPanPos:t,startPanCameraFrame:i,startPanAngularRate:n,...r}=e;r.normalize=!1,super(r);const s=this._state;void 0!==t&&(s.startPanPos=t),void 0!==i&&(s.startPanCameraFrame=i),void 0!==n&&(s.startPanAngularRate=n)}panStart({pos:e}){let{latitude:t,longitude:i,zoom:n,bearing:r=0}=this.getViewportProps(),s=cs.cameraFrame(i,t,r),o=Math.pow(2,n-l2(t,!0));return this._getUpdatedState({startPanPos:e,startPanCameraFrame:s,startPanAngularRate:.25/o*cc,startZoom:n})}pan({pos:e,startPos:t}){let i=this.getState(),n=i.startPanPos||t;if(!n)return this;let r=i.startPanCameraFrame,s=i.startPanAngularRate,o=i.startZoom??this.getViewportProps().zoom;if(!r||!s)return this;let a=n[0]-e[0],l=n[1]-e[1],c=cs.rotateFrame(r,a*s,-l*s),u=o+l2(c.latitude,!0)-l2(r.latitude,!0);return this._getUpdatedState({longitude:c.longitude,latitude:c.latitude,bearing:c.bearing,zoom:u})}panEnd(){return this._getUpdatedState({startPanPos:null,startPanCameraFrame:null,startPanAngularRate:null,startZoom:null})}_panFromCenter(e){let{width:t,height:i}=this.getViewportProps(),n=[t/2,i/2];return this.panStart({pos:n}).pan({pos:[n[0]+e[0],n[1]+e[1]]}).panEnd()}applyConstraints(e){let t=e[ax];delete e[ax];let{latitude:i,maxBounds:n}=e;if(e.zoom=this._constrainZoom(e.zoom,e),t){let i=this.makeViewport(e),n=i.getZoomAnchorStrength(t.screenPosition);if(n>0){let r=i.unproject(t.screenPosition),s=cs.cameraFrame(e.longitude,e.latitude,e.bearing||0),o=cs.rotateFrameToMatch(s,[r[0],r[1]],[t.position[0],t.position[1]],n);e.longitude=o.longitude,e.latitude=o.latitude,e.bearing=o.bearing}}(e.longitude<-180||e.longitude>180)&&(e.longitude=oD(e.longitude+180,360)-180),(e.bearing<-180||e.bearing>180)&&(e.bearing=oD(e.bearing+180,360)-180),e.latitude=iY(e.latitude,-90,90),e.pitch=iY(e.pitch,e.minPitch,e.maxPitch);let r=n?aC(e.width,e.height,e.maxBoundsPadding):null;if(n&&r&&(r.width>=0&&(e.longitude=iY(e.longitude,n[0][0],n[1][0])),r.height>=0&&(e.latitude=iY(e.latitude,n[0][1],n[1][1]))),n&&r){let t=aM(this.makeViewport({...e,bearing:0,pitch:0}),[e.longitude,e.latitude],r),s=e.zoom-l2(i),o=n[1][0]-n[0][0],a=n[1][1]-n[0][1];if(r.height>=0&&a>0&&a<180){let i=Math.min(cd(r.height,s),a),o=r.height?i*t.bottom/r.height:cd(t.bottom,s),l=r.height?i*t.top/r.height:cd(t.top,s);e.latitude=iY(e.latitude,n[0][1]+o,n[1][1]-l)}if(r.width>=0&&o>0&&o<360){let i=Math.min(cd(r.width/Math.cos(e.latitude*cc),s),o),a=r.width?i*t.left/r.width:cd(t.left/Math.cos(e.latitude*cc),s),l=r.width?i*t.right/r.width:cd(t.right/Math.cos(e.latitude*cc),s);e.longitude=iY(e.longitude,n[0][0]+a,n[1][0]-l)}}return e.latitude=iY(e.latitude,-90,90),e.latitude!==i&&(e.zoom+=l2(e.latitude,!0)-l2(i,!0)),e}_constrainZoom(e,t){t||(t=this.getViewportProps());let{maxZoom:i,maxBounds:n}=t,{minZoom:r}=t;if(null!==n&&t.width>0&&t.height>0){let e=aC(t.width,t.height,t.maxBoundsPadding),s=n[0][1],o=n[1][1],a=Math.sign(s)===Math.sign(o)?Math.min(Math.abs(s),Math.abs(o)):0,l=l2(0),c=ch(n[1][0]-n[0][0])*Math.cos(a*cc),u=ch(n[1][1]-n[0][1]);e.width>0&&c>0&&(r=Math.max(r,Math.log2(e.width/c)+l)),e.height>0&&u>0&&(r=Math.max(r,Math.log2(e.height/u)+l)),r>i&&(r=i)}let s=l2(t.latitude,!0)-l2(0,!0);return iY(e,r+s,i+s)}}class cf extends ab{constructor(){super(...arguments),this.ControllerState=cp,this.transition={transitionDuration:300,transitionInterpolator:new al({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this._panHistory=[]}_onPanStart(e){return this._panHistory=[],super._onPanStart(e)}_onMultiPanStart(e){return this._panHistory=[],super._onMultiPanStart(e)}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),i=this.controllerState.pan({pos:t});this.updateViewport(i,{transitionDuration:0},{isDragging:!0,isPanning:!0});let{longitude:n,latitude:r}=i.getViewportProps();return this._panHistory.push({longitude:n,latitude:r,timestamp:Date.now()}),this._panHistory.length>5&&this._panHistory.shift(),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&this._panHistory.length>=2){let e=this._panHistory[0],i=this._panHistory[this._panHistory.length-1],n=i.timestamp-e.timestamp;if(n>0){let r=this.controllerState.getViewportProps(),s=cs.angularDistance(e,i)/n;if(s>1e-6){let n=s*t/2,o=cs.greatCircleAxis(e,i),a=cs.cameraFrame(r.longitude,r.latitude,r.bearing||0),l=cs.rotateFrame({...a,axisHorizontal:o},n,0),c=l.longitude,u=iY(l.latitude,-90,90),h=new cl({axis:o,totalAngle:n}),d=this.controllerState.panEnd();return this.updateViewport(d,{transitionInterpolator:h,transitionDuration:t,transitionEasing:ca,longitude:c,latitude:u},{isDragging:!1,isPanning:!0}),this._panHistory=[],!0}}}this._panHistory=[];let i=this.controllerState.panEnd();return this.updateViewport(i,null,{isDragging:!1,isPanning:!1}),!0}}let cg={cullMode:"back"};class cm extends o5{constructor(e={}){super({...e,parameters:{...cg,...e.parameters}})}getViewportType(e){return e.zoom>12?o8:l1}get ControllerType(){return cf}}cm.displayName="GlobeView";class cv{constructor(e){ar(e.id,"id is required"),this.id=e.id,this.type="custom",this.renderingMode=e.renderingMode||"3d",this.slot=e.slot,this.beforeId=e.beforeId,this.map=null}onAdd(e,t){this.map=e}render(e,t){this.map&&function(e,t,i,n){if(!e.isInitialized)return;let{currentViewport:r}=e.userData,s=!1;r||(r=cE(e,t,n),e.userData.currentViewport=r,s=!0),r&&e._drawLayers("mapbox-repaint",{viewports:[r],layerFilter:t=>{if(e.props.layerFilter&&!e.props.layerFilter(t))return!1;let n=t.layer;return n.props.beforeId===i.beforeId&&n.props.slot===i.slot},clearStack:s,clearCanvas:!1})}(this.map.__deck,this.map,this,t)}}let c_="__UNDEFINED__";function cy(e){return e.props.beforeId?`deck-layer-group-before:${e.props.beforeId}`:e.props.slot?`deck-layer-group-slot:${e.props.slot}`:"deck-layer-group-last"}let cb="mapbox",cx=Math.PI/180;function cw(e,t){let i=()=>{var n,r;e.isInitialized?(n=e,r=t,n.setProps({viewState:cS(r)}),n.needsRedraw({clearRedrawFlags:!0})):t.off("move",i)};t.on("move",i)}function cP(e,t){return t?{depthWriteEnabled:!0,depthCompare:"less-equal",depthBias:0,blend:!0,blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",blendColorOperation:"add",blendAlphaOperation:"add"}:{}}function cC(e){let t=e.getProjection?.(),i=t?.type||t?.name;if("globe"===i)return"globe";if(i&&"mercator"!==i)throw Error("Unsupported projection");return"mercator"}function cM(e){return"globe"===cC(e)?new cm({id:cb}):new aT({id:cb})}function cS(e){let{lng:t,lat:i}=e.getCenter(),n={longitude:(t+540)%360-180,latitude:i,zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch(),padding:e.getPadding(),repeat:e.getRenderWorldCopies()};return e.getTerrain?.()&&function(e,t){if(e.getFreeCameraOptions){let{position:i}=e.getFreeCameraOptions();if(!i||void 0===i.z)return;let n=e.transform.height,{longitude:r,latitude:s,pitch:o}=t,a=512*i.x,l=(1-i.y)*512,c=512*i.z,u=rL([r,s]),h=a-u[0],d=l-u[1],p=Math.sqrt(h*h+d*d),f=o*cx,g=1.5*n,m=f<.001?g*Math.cos(f)/c:g*Math.sin(f)/p;t.zoom=Math.log2(m),t.position=[0,0,(c-g*Math.cos(f)/m)/rT(s)]}else"number"==typeof e.transform.elevation&&(t.position=[0,0,e.transform.elevation])}(e,n),n}function cE(e,t,i){let n=cS(t),r=e.getView(cb)||cM(t);i&&(r.props.nearZMultiplier=.2);let s=i?.nearZ??t.transform._nearZ,o=i?.farZ??t.transform._farZ;return Number.isFinite(s)&&(n.nearZ=s/t.transform.height,n.farZ=o/t.transform.height),r.makeViewport({width:e.width,height:e.height,viewState:n})}class cL{constructor(e){this._handleStyleChange=()=>{this._resolveLayers(this._map,this._deck,this._props.layers,this._props.layers),!this._map||cC(this._map)&&this._deck?.setProps({views:this._getViews(this._map)})},this._updateContainerSize=()=>{if(this._map&&this._container){let{clientWidth:e,clientHeight:t}=this._map.getContainer();Object.assign(this._container.style,{width:`${e}px`,height:`${t}px`})}},this._updateViewState=()=>{let e=this._deck,t=this._map;e&&t&&(e.setProps({views:this._getViews(t),viewState:cS(t)}),e.isInitialized&&e.redraw())},this._handleMouseEvent=e=>{let t=this._deck;if(!t||!t.isInitialized)return;let i={type:e.type,offsetCenter:e.point,srcEvent:e},n=this._lastMouseDownPoint;switch(!e.point&&n&&(i.deltaX=e.originalEvent.clientX-n.clientX,i.deltaY=e.originalEvent.clientY-n.clientY,i.offsetCenter={x:n.x+i.deltaX,y:n.y+i.deltaY}),i.type){case"mousedown":t._onPointerDown(i),this._lastMouseDownPoint={...e.point,clientX:e.originalEvent.clientX,clientY:e.originalEvent.clientY};break;case"dragstart":i.type="panstart",t._onEvent(i);break;case"drag":i.type="panmove",t._onEvent(i);break;case"dragend":i.type="panend",t._onEvent(i);break;case"click":i.tapCount=1,t._onEvent(i);break;case"dblclick":i.type="click",i.tapCount=2,t._onEvent(i);break;case"mousemove":i.type="pointermove",t._onPointerMove(i);break;case"mouseout":i.type="pointerleave",t._onPointerMove(i);break;default:return}};const{interleaved:t=!1}=e;this._interleaved=t,this._props=this.filterProps(e)}filterProps(e){let{interleaved:t,useDevicePixels:i,...n}=e;return this._interleaved||void 0===i||(n.useDevicePixels=i),n}setProps(e){this._interleaved&&e.layers&&this._resolveLayers(this._map,this._deck,this._props.layers,e.layers),Object.assign(this._props,this.filterProps(e)),this._deck&&this._map&&this._deck.setProps({...this._props,views:this._getViews(this._map),parameters:{...cP(this._map,this._interleaved),...this._props.parameters}})}onAdd(e){return this._map=e,this._interleaved?this._onAddInterleaved(e):this._onAddOverlaid(e)}_onAddOverlaid(e){let t=document.createElement("div");return Object.assign(t.style,{position:"absolute",left:0,top:0,textAlign:"initial",pointerEvents:"none"}),this._container=t,this._deck=new lK({...this._props,parent:t,deviceProps:{...this._props.deviceProps,createCanvasContext:{..."object"==typeof this._props.deviceProps?.createCanvasContext?this._props.deviceProps.createCanvasContext:void 0,pixelSizeSource:"css-dpr"}},parameters:{...cP(e,!1),...this._props.parameters},views:this._getViews(e),viewState:cS(e)}),e.on("resize",this._updateContainerSize),e.on("render",this._updateViewState),e.on("mousedown",this._handleMouseEvent),e.on("dragstart",this._handleMouseEvent),e.on("drag",this._handleMouseEvent),e.on("dragend",this._handleMouseEvent),e.on("mousemove",this._handleMouseEvent),e.on("mouseout",this._handleMouseEvent),e.on("click",this._handleMouseEvent),e.on("dblclick",this._handleMouseEvent),this._updateContainerSize(),t}_onAddInterleaved(e){let t=e.painter.context.gl;return t instanceof WebGLRenderingContext&&tT.warn("Incompatible basemap library. See: https://deck.gl/docs/api-reference/mapbox/overview#compatibility")(),this._deck=function({map:e,deck:t}){if(e.__deck)return e.__deck;let i=t.props._customRender,n=t.props.onLoad,r={...t.props,_customRender:()=>{e.triggerRepaint(),i?.("")}};return r.views||(r.views=cM(e)),Object.assign(r,{width:null,height:null,touchAction:"unset",viewState:cS(e)}),t.isInitialized?cw(t,e):r.onLoad=()=>{n?.(),cw(t,e)},t.setProps(r),e.__deck=t,e.on("render",()=>{t.isInitialized&&function(e,t){let i=sr(e.props.layers,Boolean).some(e=>e&&!t.getLayer(cy(e))),n=e.getViewports(),r=n.findIndex(e=>e.id===cb),s=n.length>1||r<0;if(i||s){if(r>=0){n=n.slice();let i=cE(e,t);i?n[r]=i:n.splice(r,1)}e._drawLayers("mapbox-repaint",{viewports:n,layerFilter:i=>(!e.props.layerFilter||e.props.layerFilter(i))&&(i.viewport.id!==cb||!t.getLayer(cy(i.layer))),clearCanvas:!1})}else{let t=e.device,i=t?.gl;e.props.onBeforeRender?.({device:t,gl:i}),e.props.onAfterRender?.({device:t,gl:i})}e.userData.currentViewport=null}(t,e)}),t}({map:e,deck:new lK({...this._props,views:this._getViews(e),gl:t,parameters:{...cP(e,!0),...this._props.parameters}})}),e.on("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,[],this._props.layers),document.createElement("div")}_resolveLayers(e,t,i,n){!function(e,t,i){if(!e||!e.style||!e.style._loaded)return;let n=sr(i,Boolean);if(t!==i){let i=new Set(sr(t,Boolean).map(e=>cy(e))),r=new Set(n.map(e=>cy(e)));for(let t of i)!r.has(t)&&e.getLayer(t)&&e.removeLayer(t)}let r={};for(let t of n){let i=cy(t),n=e.getLayer(i);if(n){let e=n.implementation||n;r[i]=e}else{let n=new cv({id:i,slot:t.props.slot,beforeId:t.props.beforeId});r[i]=n,e.addLayer(n,t.props.beforeId)}}let s=e.style._order;for(let[t,i]of Object.entries(r)){let n=i.beforeId||c_,r=n===c_?s.length:s.indexOf(n);if(-1!==r&&s.indexOf(t)!==r-1){let i=n===c_?void 0:n;e.moveLayer(t,i)}}}(e,i,n)}onRemove(){let e=this._map;e&&(this._interleaved?this._onRemoveInterleaved(e):this._onRemoveOverlaid(e)),this._deck=void 0,this._map=void 0,this._container=void 0}_onRemoveOverlaid(e){e.off("resize",this._updateContainerSize),e.off("render",this._updateViewState),e.off("mousedown",this._handleMouseEvent),e.off("dragstart",this._handleMouseEvent),e.off("drag",this._handleMouseEvent),e.off("dragend",this._handleMouseEvent),e.off("mousemove",this._handleMouseEvent),e.off("mouseout",this._handleMouseEvent),e.off("click",this._handleMouseEvent),e.off("dblclick",this._handleMouseEvent),this._deck?.finalize()}_onRemoveInterleaved(e){e.off("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,this._props.layers,[]),e.__deck?.finalize(),e.__deck=null}getDefaultPosition(){return"top-left"}pickObject(e){return ar(this._deck),this._deck.pickObject(e)}pickMultipleObjects(e){return ar(this._deck),this._deck.pickMultipleObjects(e)}pickObjects(e){return ar(this._deck),this._deck.pickObjects(e)}finalize(){this._map&&this._map.removeControl(this)}getCanvas(){return this._map?this._interleaved?this._map.getCanvas():this._deck.getCanvas():null}_getViews(e){if(!this._props.views)return cM(e);let t=Array.isArray(this._props.views)?this._props.views:[this._props.views];return t.some(e=>e.id===cb)?this._props.views:[cM(e),...t]}}var cA=e.i(95002),cT=e.i(69004),ck=e.i(44135);let cI=cT.dataTypeDecoder.getDataType.bind(cT.dataTypeDecoder);function cO(e,t,i){if(t.size>4)return null;let n="webgpu"===i&&"uint8"===t.type?"unorm8":t.type,r=t.size,s=!!("webgpu"!==i&&3===r&&n&&["uint8","sint8","unorm8","snorm8","uint16","sint16","unorm16","snorm16"].includes(n));return{attribute:e,format:r>1?`${n}x${r}${s?"-webgl":""}`:t.type,byteOffset:t.offset||0}}function cR(e){return e.stride||e.size*e.bytesPerElement}function cz(e,t){t.offset&&tT.removed("shaderAttribute.offset","vertexOffset, elementOffset")();let i=cR(e),n=(void 0!==t.vertexOffset?t.vertexOffset:e.vertexOffset||0)*i+(t.elementOffset||0)*e.bytesPerElement+(e.offset||0);return{...t,offset:n,stride:i}}class cF{constructor(e,t,i){let n;this._buffer=null,this.device=e,this.id=t.id||"",this.size=t.size||1;const r=t.logicalType||t.type,s="float64"===r;let{defaultValue:o}=t;o=Number.isFinite(o)?[o]:o||Array(this.size).fill(0),n=s?"float32":!r&&t.isIndexed?"uint32":r||"float32";let a=function(e){switch(e){case"float64":return Float64Array;case"uint8":case"unorm8":return Uint8ClampedArray;default:return(0,ck.getTypedArrayConstructor)(e)}}(r||n);this.doublePrecision=s,s&&!1===t.fp64&&(a=Float32Array),this.value=null,this.settings={...t,defaultType:a,defaultValue:o,logicalType:r,type:n,normalized:n.includes("norm"),size:this.size,bytesPerElement:a.BYTES_PER_ELEMENT},this.state={...i,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*cR(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}get isDoublePrecisionBuffer(){return this._shouldSplitDoublePrecisionValue(this.value)}delete(){this._buffer&&(this._buffer.delete(),this._buffer=null),oB.release(this.state.allocatedValue),this.state.allocatedValue=null}getBuffer(){return this.state.constant&&"webgpu"!==this.device.type?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let i={};if(this.state.constant){let n=this.value;if("webgpu"===this.device.type&&this._buffer)i[e]=this._buffer;else if(t){let r=cz(this.getAccessor(),t),s=r.offset/n.BYTES_PER_ELEMENT,o=r.size||this.size;i[e]=n.subarray(s,s+o)}else i[e]=n}else i[e]=this.getBuffer();return this.doublePrecision&&(this.isDoublePrecisionBuffer?i[`${e}64Low`]=i[e]:i[`${e}64Low`]=new Float32Array(this.size)),i}_getBufferLayout(e=this.id,t=null){let i=this.getAccessor(),n=[],r={name:this.id,byteStride:"webgpu"===this.device.type&&this.state.constant?0:cR(i)};if(this.doublePrecision){let r,s={high:r=cz(i,t||{}),low:{...r,offset:r.offset+4*i.size}};n.push(cO(e,{...i,...s.high},this.device.type),cO(`${e}64Low`,{...i,...s.low},this.device.type))}else if(t){let r=cz(i,t);n.push(cO(e,{...i,...r},this.device.type))}else n.push(cO(e,i,this.device.type));return r.attributes=n.filter(Boolean),r}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:i,size:n}=this,r=i*n;if(t&&r&&t.length>=r){let i=Array(n).fill(1/0),s=Array(n).fill(-1/0);for(let e=0;e<r;)for(let r=0;r<n;r++){let n=t[e++];n<i[r]&&(i[r]=n),n>s[r]&&(s[r]=n)}e=[i,s]}}return this.state.bounds=e,e}setData(e){let t,{state:i}=this;t=ArrayBuffer.isView(e)?{value:e}:e instanceof a1.Buffer?{buffer:e}:e;let n={...this.settings,...t};if(ArrayBuffer.isView(t.value)){if(!t.type)if(this.doublePrecision&&t.value instanceof Float64Array)n.type="float32";else{let e=cI(t.value);n.type=n.normalized?e.replace("int","norm"):e}n.bytesPerElement=t.value.BYTES_PER_ELEMENT,n.stride=cR(n)}if(i.bounds=null,t.constant){let e=t.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),!(!i.constant||!this._areValuesEqual(e,this.value)))return!1;i.externalBuffer=null,i.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(t.buffer)i.externalBuffer=t.buffer,i.constant=!1,this.value=t.value||null;else if(t.value){this._checkExternalBuffer(t);let e=t.value,r=e;i.externalBuffer=null,i.constant=!1,this.value=e,this._shouldSplitDoublePrecisionValue(r)&&(r=oU(r,n),e instanceof Float32Array&&(n.stride=2*n.size*Float32Array.BYTES_PER_ELEMENT));let{buffer:s}=this,o=cR(n),a=(n.vertexOffset||0)*o;if(this.settings.isIndexed){let e=this.settings.defaultType;r.constructor!==e&&(r=new e(r))}let l=r.byteLength+a+2*o;(!s||s.byteLength<l)&&(s=this._createBuffer(l)),s.write(r,a)}return this.setAccessor(n),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:i=0,endOffset:n}=e,r=this._shouldSplitDoublePrecisionValue(t);this.buffer.write(r?oU(t,{size:this.size,startIndex:i,endIndex:n}):t.subarray(i,n),i*(r?8:t.BYTES_PER_ELEMENT)+this.byteOffset)}allocate(e,t=!1){let{state:i}=this,n=i.allocatedValue,r=oB.allocate(n,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=r;let s=this._shouldSplitDoublePrecisionValue(r),o=s&&r instanceof Float32Array?{...this.settings,stride:2*this.size*Float32Array.BYTES_PER_ELEMENT}:this.settings;this.setAccessor(o);let{byteOffset:a}=this,{buffer:l}=this,c=r.byteLength*(s&&r instanceof Float32Array?2:1);return(!l||l.byteLength<c+a)&&(l=this._createBuffer(c+a),t&&n&&l.write(this._shouldSplitDoublePrecisionValue(n)?oU(n,this):n,a)),i.allocatedValue=r,i.constant=!1,i.externalBuffer=null,!0}_shouldSplitDoublePrecisionValue(e){return!!(this.doublePrecision&&(e instanceof Float64Array||"webgpu"===this.device.type&&e instanceof Float32Array))}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let i=this.settings.defaultType,n=!1;if(this.doublePrecision&&(n=t.BYTES_PER_ELEMENT<4),n)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);t instanceof i||!this.settings.normalized||"normalized"in e||tT.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case"snorm8":return new Float32Array(e).map(e=>(e+128)/255*2-1);case"snorm16":return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case"unorm8":return new Float32Array(e).map(e=>e/255);case"unorm16":return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,i){let{defaultValue:n,size:r}=this.settings;if(Number.isFinite(e))return t[i]=e,t;if(!e){let e=r;for(;--e>=0;)t[i+e]=n[e];return t}switch(r){case 4:t[i+3]=Number.isFinite(e[3])?e[3]:n[3];case 3:t[i+2]=Number.isFinite(e[2])?e[2]:n[2];case 2:t[i+1]=Number.isFinite(e[1])?e[1]:n[1];case 1:t[i+0]=Number.isFinite(e[0])?e[0]:n[0];break;default:let s=r;for(;--s>=0;)t[i+s]=Number.isFinite(e[s])?e[s]:n[s]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:i}=this;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:i}=this.settings,n="webgpu"!==this.device.type||t?(t?a1.Buffer.INDEX:a1.Buffer.VERTEX)|a1.Buffer.COPY_DST:a1.Buffer.VERTEX|a1.Buffer.STORAGE|a1.Buffer.COPY_DST|a1.Buffer.COPY_SRC;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:n,indexType:t?i:void 0,byteLength:e}),this._buffer}}let cB=[],cj=[];function cD(e,t=0,i=1/0){let n=cB,r={index:-1,data:e,target:[]};return e?"function"==typeof e[Symbol.iterator]?n=e:e.length>0&&(cj.length=e.length,n=cj):n=cB,(t>0||Number.isFinite(i))&&(n=(Array.isArray(n)?n:Array.from(n)).slice(t,i),r.index=t-1),{iterable:n,objectInfo:r}}function cN(e){return e&&e[Symbol.asyncIterator]}function cV(e,t){let{size:i,stride:n,offset:r,startIndices:s,nested:o}=t,a=e.BYTES_PER_ELEMENT,l=n?n/a:i,c=r?r/a:0,u=Math.floor((e.length-c)/l);return(t,{index:n,target:r})=>{let a;if(!s){let t=n*l+c;for(let n=0;n<i;n++)r[n]=e[t+n];return r}let h=s[n],d=s[n+1]||u;if(o){a=Array(d-h);for(let t=h;t<d;t++){let n=t*l+c;r=Array(i);for(let t=0;t<i;t++)r[t]=e[n+t];a[t-h]=r}}else if(l===i)a=e.subarray(h*i+c,d*i+c);else{a=new e.constructor((d-h)*i);let t=0;for(let n=h;n<d;n++){let r=n*l+c;for(let n=0;n<i;n++)a[t++]=e[r+n]}}return a}}let cU=[],cG=[[0,1/0]],cW={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}};function c$(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:"interpolation",duration:e});let i=e.type||"interpolation";return{...cW[i],...t,...e,type:i}}class cq extends cF{constructor(e,t){super(e,t,{startIndices:null,constantValue:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:cG}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t,i;(t=this.state).layoutChanged||(i=this.getAccessor(),t.layoutChanged=e.type!==i.type||e.size!==i.size||cR(e)!==cR(i)||(e.offset||0)!==(i.offset||0)),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat("function"!=typeof e&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,i=this.settings.transition;return c$(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],i)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:i=1/0}=t;this.state.updateRanges=function(e,t){if(e===cG||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let i=[],n=e.length,r=0;for(let s=0;s<n;s++){let n=e[s];n[1]<t[0]?(i.push(n),r=s+1):n[0]>t[1]?i.push(n):t=[Math.min(n[0],t[0]),Math.max(n[1],t[1])]}return i.splice(r,0,t),i}(this.state.updateRanges,[e,i])}else this.state.updateRanges=cG}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=cU}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:i}=this;if(i.noAlloc)return!1;if(i.update){let i=this.isConstant;return super.allocate(e,t.updateRanges!==cG),t.layoutChanged||(t.layoutChanged=i&&"webgpu"===this.device.type),!0}return!1}updateBuffer({numInstances:e,data:t,props:i,context:n}){if(!this.needsUpdate())return!1;let{state:{updateRanges:r},settings:{update:s,noAlloc:o}}=this,a=!0;if(s){for(let[o,a]of r)s.call(n,this,{data:t,startRow:o,endRow:a,props:i,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset){if(this.constant){let e=this.value;this.value=null,this.setConstantValue(n,e)}else this.setData({value:this.value,constant:this.constant});this.constant=!1}else for(let[t,i]of r){let n=Number.isFinite(t)?this.getVertexOffset(t):0,r=Number.isFinite(i)?this.getVertexOffset(i):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:n,endOffset:r})}this._checkAttributeArray()}else a=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),a}setConstantValue(e,t){var i;if(void 0===t||"function"==typeof t)return!1;let n=this.isConstant,r=this.settings.transform&&e?this.settings.transform.call(e,t):t,s=this.settings.defaultType;this.state.constantValue=this._normalizeValue(r,new s(this.size),0);let o=this.setData({constant:!0,value:r});if("webgpu"===this.device.type){let e=this.state.constantValue;this.doublePrecision&&(e instanceof Float32Array||e instanceof Float64Array)&&(e=oU(e,{size:this.size}),this.setAccessor({...this.getAccessor(),stride:2*this.size*Float32Array.BYTES_PER_ELEMENT}));let t=this._buffer;(!t||t.byteLength<e.byteLength)&&(t=this._createBuffer(e.byteLength)),t.write(e),(i=this.state).layoutChanged||(i.layoutChanged=!n),this.constant=!1}return o&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0}getConstantValue(){return this.isConstant?this.state.constantValue:null}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e||(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e),!0)):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:i,settings:n}=this;if(!e)return i.binaryValue=null,i.binaryAccessor=null,!1;if(n.noAlloc)return!1;if(i.binaryValue===e)return this.clearNeedsUpdate(),!0;if(i.binaryValue=e,this.setNeedsRedraw(),n.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let r=e;ar(ArrayBuffer.isView(r.value),`invalid ${n.accessor}`);let s=!!r.size&&r.size!==this.size;return i.binaryAccessor=cV(r.value,{size:r.size||this.size,stride:r.stride,offset:r.offset,startIndices:t,nested:s}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let i in e)Object.assign(t,super.getValue(i,e[i]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,i=super._getBufferLayout(),{stepMode:n}=this.settings;if("dynamic"===n?i.stepMode=e?e.isInstanced?"instance":"vertex":"instance":i.stepMode=n??"vertex",!t)return i;for(let e in t){let n=super._getBufferLayout(e,t[e]);i.attributes.push(...n.attributes)}return i}_autoUpdater(e,{data:t,startRow:i,endRow:n,props:r,numInstances:s}){let{settings:o,state:a,value:l,size:c,startIndices:u}=e,{accessor:h,transform:d}=o,p=a.binaryAccessor||("function"==typeof h?h:r[h]);ar("function"==typeof p,`accessor "${h}" is not a function`);let f=e.getVertexOffset(i),{iterable:g,objectInfo:m}=cD(t,i,n);for(let t of g){m.index++;let i=p(t,m);if(d&&(i=d.call(this,i)),u){let t=(m.index<u.length-1?u[m.index+1]:s)-u[m.index];if(i&&Array.isArray(i[0])){let t=f;for(let n of i)e._normalizeValue(n,l,t),t+=c}else i&&i.length>c?l.set(i,f):(e._normalizeValue(i,m.target,0),function({target:e,source:t,start:i=0,count:n=1}){let r=t.length,s=n*r,o=0;for(let n=i;o<r;o++)e[n++]=t[o];for(;o<s;)o<s-o?(e.copyWithin(i+o,i,i+o),o*=2):(e.copyWithin(i+o,i,i+s-o),o=s)}({target:l,source:m.target,start:f,count:t}));f+=t*c}else e._normalizeValue(i,l,f),f+=c}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||"function"==typeof e.update))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let i=!0;switch(t){case 4:i=i&&Number.isFinite(e[3]);case 3:i=i&&Number.isFinite(e[2]);case 2:i=i&&Number.isFinite(e[1]);case 1:i=i&&Number.isFinite(e[0]);break;default:i=!1}if(!i)throw Error(`Illegal attribute generated for ${this.id}`)}}}var cH=e.i(14152);function cZ({elementWise:e,func:t,inputs:i,output:n,outputBuffer:r}){let s=Array.isArray(i)?i:Object.values(i);for(let e of s)if(!e.value)throw Error(`${e} does not have CPU value`);let o=n.length,a=n.size,l=new n.ValueType(o*a);for(let i=0;i<o;i++){let n=s.map(e=>cY(e,i));if(e)for(let e=0;e<a;e++)l[i*a+e]=t.apply(null,n.map(t=>t[e]));else t.call(null,l.subarray(i*a,i*a+a),...n)}let c=n.ValueType.BYTES_PER_ELEMENT,u=n.offset/c,h=n.stride/c,d=l;if(0!==u||h!==a){d=new n.ValueType(u+n.byteLength/c);for(let e=0;e<o;e++){let t=e*a,i=u+e*h,n=l.subarray(t,t+a);d.set(n,i),r.write(n,i*c)}}else r.write(l);return{success:!0,value:d}}function cY(e,t){let i=e.value,n=e.size,r=e.offset/e.ValueType.BYTES_PER_ELEMENT,s=e.stride/e.ValueType.BYTES_PER_ELEMENT,o=r+(e.isConstant?0:t)*s,a=i.slice(o,o+n);if(!e.normalized)return a;let l=new Float32Array(n);for(let t=0;t<n;t++)l[t]=function(e,t){switch(t){case"uint8":return e/255;case"uint16":return e/65535;case"uint32":return e/0xffffffff;case"sint8":return Math.max(e/127,-1);case"sint16":return Math.max(e/32767,-1);case"sint32":return Math.max(e/0x7fffffff,-1);case"float32":return e;default:throw Error(`Unsupported normalized source type ${t}`)}}(a[t],e.type);return l}let cX=async({inputs:e,output:t,target:i})=>{let{ids:n,sourceValues:r}=e,s=n.value,o=r.value;if(!s)throw Error(`${n} does not have CPU value`);if(!o)throw Error(`${r} does not have CPU value`);let a=new t.ValueType(t.length*t.size),l=Array(t.size).fill(0);for(let e=0;e<t.length;e++){var c,u;let i=Number(cY(n,e)[0]),s=(c=i,u=r.length,Number.isInteger(c)&&c>=0&&c<u)?cY(r,i):l;a.set(s,e*t.size)}return i.write(a),{success:!0,value:a}},cK=async({inputs:e,output:t,target:i})=>{let{segments:n,vertexCount:r}=e,s=n.value;if(!s)throw Error(`${n} does not have CPU value`);var o=s,a=n,l=r;if(a.length<1)throw Error("segmentedMap segments must contain at least one segment start");let c=0;for(let e=0;e<a.length;e++){let t=o[cJ(a,e)];if(0===e&&0!==t)throw Error(`segmentedMap segments must start at 0, got ${t}`);if(e>0&&t<c)throw Error(`segmentedMap segments must be non-decreasing, got ${t} after ${c}`);c=t}if(c>l)throw Error(`segmentedMap last segment start must be <= vertexCount, got ${c} > ${l}`);let u=new t.ValueType(t.length*t.size),h=0;for(let e=0;e<r;e++){for(;h+1<n.length&&s[cJ(n,h+1)]<=e;)h++;let i=s[cJ(n,h)],r=e*t.size;u[r]=h,u[r+1]=e-i}return i.write(u),{success:!0,value:u}};function cJ(e,t){return e.offset/e.ValueType.BYTES_PER_ELEMENT+t*(e.stride/e.ValueType.BYTES_PER_ELEMENT)}let cQ=async({inputs:e,output:t,target:i})=>{let{condition:n,whenTrue:r,whenFalse:s}=e,o=new t.ValueType(t.length*t.size);for(let e=0;e<t.length;e++){let i=cY(n,e),a=cY(r,e),l=cY(s,e);for(let c=0;c<t.size;c++){let u=c0(i,n.size,c);o[e*t.size+c]=0!==u?c0(a,r.size,c):c0(l,s.size,c)}}return i.write(o),{success:!0,value:o}};function c0(e,t,i){return i<t?e[i]:1===t?e[0]:0}e.s([],45812),e.i(45812),e.s(["arithmetic",0,({inputs:e,output:t,target:i})=>{for(let t of Object.values(e.namedInputs))if(!t.value)throw Error(`${t} does not have CPU value`);let n=new t.ValueType(t.length*t.size);for(let i=0;i<t.length;i++){let r=Object.fromEntries(Object.entries(e.namedInputs).map(([e,t])=>[e,cY(t,i)]));for(let s=0;s<t.size;s++)n[i*t.size+s]=function e(t,i,n){switch(t.kind){case"input":{let e=i[t.name];if(n<e.length)return e[n];return 1===e.length?e[0]:0}case"literal":if(Array.isArray(t.value))return t.value[n]??0;return t.value;case"call":{!function(e,t){let i=cH.ARITHMETIC_OPERATIONS[e].arity;if(t!==i)throw Error(`Arithmetic op '${e}' expects ${i} args, got ${t}`)}(t.op,t.args.length);let r=t.args.map(t=>e(t,i,n));switch(t.op){case"add":return r[0]+r[1];case"subtract":return r[0]-r[1];case"multiply":return r[0]*r[1];case"divide":return r[0]/r[1];case"pow":return Math.pow(r[0],r[1]);case"sqrt":return Math.sqrt(r[0]);case"abs":return Math.abs(r[0]);case"sin":return Math.sin(r[0]);case"cos":return Math.cos(r[0]);case"tan":return Math.tan(r[0]);case"exp":return Math.exp(r[0]);case"log":return Math.log(r[0]);default:{let e=t.op;throw Error(`Unsupported arithmetic op ${e}`)}}}default:throw Error(`Unsupported expression node ${t.kind}`)}}(e.expression,r,s)}return i.write(n),{success:!0,value:n}},"dot",0,({inputs:e,output:t,target:i})=>{let{x:n,y:r}=e,s=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=cY(n,e),i=cY(r,e),o=0;for(let e=0;e<n.size;e++)o+=t[e]*i[e];s[e]=o}return i.write(s),{success:!0,value:s}},"equalAll",0,({inputs:e,output:t,target:i})=>{let{x:n,y:r}=e,s=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=cY(n,e),i=cY(r,e),o=1;for(let e=0;e<n.size;e++)if(t[e]!==i[e]){o=0;break}s[e]=o}return i.write(s),{success:!0,value:s}},"extent",0,({inputs:e,output:t,target:i})=>{let{sourceValues:n}=e;if(!n.value)throw Error(`${n} does not have CPU value`);let r=new t.ValueType(t.length*t.size);if(0===n.length)return{success:!1,error:Error(`${n} is empty`)};for(let e=0;e<n.size;e++){let i=cY(n,0)[e],s=e*t.size,o=s+1;r[s]=i,r[o]=i;for(let t=1;t<n.length;t++){let i=cY(n,t)[e];i<r[s]&&(r[s]=i),i>r[o]&&(r[o]=i)}}return i.write(r),{success:!0,value:r}},"fround",0,({inputs:e,output:t,target:i})=>cZ({func:(e,t)=>{let i=e.length/2,n=new Float64Array(t.buffer);for(let t=0;t<i;t++){let r=n[t];e[t]=Math.fround(r),e[t+i]=r-e[t]}return e},inputs:e,output:t,outputBuffer:i}),"gather",0,cX,"interleave",0,({inputs:e,output:t,target:i})=>cZ({func:(e,...t)=>{let i=0;for(let n of t)e.set(n,i),i+=n.length},inputs:e,output:t,outputBuffer:i}),"length",0,({inputs:e,output:t,target:i})=>{let{x:n}=e,r=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=cY(n,e),i=0;for(let e=0;e<n.size;e++)i+=t[e]*t[e];r[e]=Math.sqrt(i)}return i.write(r),{success:!0,value:r}},"segmentedMap",0,cK,"select",0,cQ,"sequence",0,({inputs:e,output:t,target:i})=>{let n=new t.ValueType(t.length);for(let i=0;i<t.length;i++)n[i]=e.start+i*e.step;return i.write(n),{success:!0,value:n}},"swizzle",0,({inputs:e,output:t,target:i})=>{let{columns:n}=e;return cZ({func:(e,t)=>{for(let i=0;i<n.length;i++)e[i]=t[n[i]]},inputs:{x:e.x},output:t,outputBuffer:i})}],83862);var c1=e.i(83862);let c2=new class{_modules={cpu:c1};add(e,t){let i=this._modules[e];if("function"==typeof t.then){let n=Promise.all([Promise.resolve(i||{}),t]).then(([e,t])=>({...e,...t}));return this._modules[e]=n,n.then(t=>{this._modules[e]=t}).catch(t=>{N.log.error(`Failed to register ${e} backend: ${t}`)()}),n}if(i&&"function"==typeof i.then){let n=Promise.resolve(i).then(e=>({...e,...t})).then(t=>(this._modules[e]=t,t)).catch(t=>{throw N.log.error(`Failed to register ${e} backend: ${t}`)(),t});return this._modules[e]=n,n}let n={...i||{},...t};return this._modules[e]=n,Promise.resolve(n)}async get(t,i){let n=this._modules[t];if(!n)if("webgl"===t)n=this.add("webgl",e.A(70384));else if("webgpu"===t)n=this.add("webgpu",e.A(40706));else throw Error(`${t} backend not registered`);let r=(await n)[i];if("function"!=typeof r)throw Error(`${t} backend does not implement ${i}`);return r}getSync(e,t){let i=this._modules[e];if(!i)throw Error(`${e} backend not registered`);if("function"==typeof i.then)throw Error(`${e} backend is not loaded yet`);let n=i[t];if("function"!=typeof n)throw Error(`${e} backend does not implement ${t}`);return n}clear(){this._modules={}}};var c3=e.i(11583),c4=e.i(62799),c6=e.i(74907);class c5{gpuDataEvaluators;format;length;id;_gpuVector;_ownsGPUDataEvaluators;_destroyed=!1;static fromGPUVector(e){if(e.bufferLayout)throw Error(`GPUVectorEvaluator.fromGPUVector() does not accept interleaved vector "${e.name}"`);if(0===e.data.length)throw Error(`GPUVectorEvaluator.fromGPUVector() requires GPUData for "${e.name}"`);return new c5({id:e.name,gpuDataEvaluators:e.data.map(t=>c4.GPUDataEvaluator.fromGPUData(t,{id:e.name})),gpuVector:e,format:e.format})}static fromGPUDataEvaluators(e,t={}){return new c5({id:t.id,gpuDataEvaluators:e,format:t.format})}constructor({id:e,gpuDataEvaluators:t,gpuVector:i,format:n}){if(0===t.length)throw Error("GPUVectorEvaluator requires at least one GPUData evaluator");(function(e){let t=e[0];for(let i of e.slice(1))if(i.type!==t.type||i.size!==t.size||i.normalized!==t.normalized||i.format!==t.format)throw Error("GPUVectorEvaluator requires matching GPUData evaluator layouts")})(t),this.id=e,this.gpuDataEvaluators=t,this.format=n??t[0].format,this.length=t.reduce((e,t)=>e+t.length,0),this._gpuVector=i,this._ownsGPUDataEvaluators=!i}get evaluated(){return!!this._gpuVector}get gpuVector(){if(!this._gpuVector)throw Error(`${this} not evaluated`);return this._gpuVector}mapGPUData(e){return c5.fromGPUDataEvaluators(this.gpuDataEvaluators.map((t,i)=>e(t,i)),{id:this.id})}async evaluate(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let i=await Promise.all(this.gpuDataEvaluators.map(i=>i.evaluate(e,t))),n=i[0],r=i.map(c8),s=t.format??this.format??n.format;return this._gpuVector=new c6.GPUVector({type:"data",name:t.name??this.id??"vector",format:s,data:r,stride:n.stride,byteStride:n.byteStride,rowByteLength:n.rowByteLength,bufferLayout:n.bufferLayout}),this._gpuVector}evaluateSync(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let i=this.gpuDataEvaluators.map(i=>i.evaluateSync(e,t)),n=i[0],r=i.map(c8),s=t.format??this.format??n.format;return this._gpuVector=new c6.GPUVector({type:"data",name:t.name??this.id??"vector",format:s,data:r,stride:n.stride,byteStride:n.byteStride,rowByteLength:n.rowByteLength,bufferLayout:n.bufferLayout}),this._gpuVector}destroy(){if(this._ownsGPUDataEvaluators)for(let e of this.gpuDataEvaluators)e.destroy();this._gpuVector=void 0,this._destroyed=!0}toString(){return this.id??this.constructor.name}}function c8(e){let[t,...i]=e.data;if(!t||i.length>0)throw Error(`GPUVectorEvaluator requires one GPUData chunk for "${e.name}"`);return t}function c7(e){return e instanceof c4.GPUDataEvaluator?[e.buffer]:e.gpuVector.data.map(e=>e.buffer instanceof c3.DynamicBuffer?e.buffer.buffer:e.buffer)}class c9{inputs;dependencies;constructor(e){this.inputs=e,this.dependencies=Array.from(e instanceof Array?e:Object.values(e)).filter(e=>e instanceof c4.GPUDataEvaluator)}async execute(e,t){return await this._resolveDependencies(e),await this._executeWithHandler(await c2.get(this._getHandlerRegistry(e),this.name),t)}executeSync(e,t){var i;this._resolveDependenciesSync(e);let n=this._executeWithHandler(c2.getSync(this._getHandlerRegistry(e),this.name),t);if(i=n,"function"==typeof i?.then)throw Error(`${this.name} returned a Promise in executeSync()`);return n}shouldExecuteOnCPU(){return this.output.length<=1&&Array.from(this.dependencies).every(e=>!!e.value)}_getHandlerRegistry(e){return this.shouldExecuteOnCPU()?"cpu":e.type}async _resolveDependencies(e){for(let t of this.dependencies)await t.evaluate(e);if("cpu"===this._getHandlerRegistry(e)||"null"===e.type)for(let e of this.dependencies)await e.ensureCPUValue()}_resolveDependenciesSync(e){for(let t of this.dependencies)t.evaluateSync(e);if("cpu"===this._getHandlerRegistry(e)||"null"===e.type)for(let e of this.dependencies)e.ensureCPUValueSync()}_executeWithHandler(e,t){return e({device:t.device,inputs:this.inputs,output:this.output,target:t})}}class ue extends c9{name="interleave";output;constructor(e){super(e);const{isConstant:t,type:i,length:n}=function(...e){let t=function(e){let t=0,i=0;for(let n of e){if("f"===n[0])return"float32";let e=n.endsWith("8")?8:n.endsWith("6")?16:32;"u"===n[0]?t=Math.max(t,e):i=Math.max(i,e)}return t&&!i?`uint${t}`:i&&t<32?`sint${Math.max(i,2*t)}`:"float32"}(e.map(e=>e.type));return"f"!==t[0]&&e.some(e=>e.normalized)&&(t="float32"),{isConstant:e.every(e=>e.isConstant),type:t,size:e.reduce((e,t)=>Math.max(e,t.size),0),length:e.reduce((e,t)=>Math.max(e,t.length),0)}}(...e);this.output=new c4.GPUDataEvaluator({isConstant:t,type:i,size:e.reduce((e,t)=>e+t.size,0),length:n,source:this})}toString(){return`_${this.inputs.join("_")}_`}}var ut=e.i(93539);class ui{constructor(e,{id:t,isTransitionAttribute:i}){this.packedBuffers={},this.device=e,this.id=t,this.isTransitionAttribute=i,"webgpu"===this.device.type&&c2.add("webgpu",{interleave:ut.interleave})}hasGroups(e){return"webgpu"===this.device.type&&Object.values(e).some(e=>!!e.settings.bufferGroup)}finalize(){for(let e of Object.values(this.packedBuffers))e.packed.destroy();this.packedBuffers={}}getBufferLayouts(e,t){let i=this._getPackedGroups(e,t,{requireValues:!1,excludeAttributes:{}});return this._getBufferLayouts(e,i,t)}getBindings(e,t,i,n){let r=this._getPackedGroups(e,i,{requireValues:!0,excludeAttributes:n}),s={},o=new Set;for(let e of r.values()){let i=!this.packedBuffers[e.id]||e.attributes.some(e=>!!t[e.id]);for(let t of(s[e.id]=this._getPackedBuffer(e,i),e.attributes))o.add(t.id)}return{bufferLayouts:this._getBufferLayouts(e,r,i).filter(t=>!n[t.name]&&!e[t.name]?.settings.isIndexed),buffers:s,groupedAttributeIds:o}}_getPackedGroups(e,t,{requireValues:i,excludeAttributes:n}){let r=new Map;for(let t of Object.values(e)){let e=t.settings.bufferGroup;if(!e)continue;let i=r.get(e)||[];i.push(t),r.set(e,i)}let s=new Map;for(let[e,o]of r){let r=this._getPackedGroup(e,o,t,i,n);r&&s.set(e,r)}return s}_getPackedGroup(e,t,i,n,r){if(t.length<2)return null;let s=t.map(e=>e.getBufferLayout(i)),o=s[0].stepMode,a=Math.max(1,t[0].numInstances),l=n&&t.every(e=>e.isConstant);for(let e=0;e<t.length;e++){let i=t[e],l=i.getAccessor(),c=l.size*l.bytesPerElement;if(r[i.id]||i.settings.isIndexed||i.settings.noAlloc||i.doublePrecision||this.isTransitionAttribute(i.id)||s[e].stepMode!==o||i.numInstances!==t[0].numInstances||0!==(l.offset||0)||0!==(l.vertexOffset||0)||cR(l)!==c||n&&(i.isConstant?!i.getConstantValue()||i.getConstantValue().byteLength<c:!ArrayBuffer.isView(i.value)||i.value.byteLength<a*c))return null}let c={},u=[],h=0;for(let e=0;e<t.length;e++){let i=t[e];for(let t of(h=un(h),c[i.id]=h,s[e].attributes||[]))u.push({...t,byteOffset:h+(t.byteOffset||0)});h+=cR(i.getAccessor())}return{id:e,attributes:t,byteStride:h=un(h),byteOffsets:c,rowCount:a,layout:{name:e,byteStride:l?0:h,stepMode:o,attributes:u}}}_getBufferLayouts(e,t,i){let n=[],r=new Set,s=new Set;for(let e of t.values())for(let t of e.attributes)s.add(t.id);for(let o of Object.values(e)){let e=o.settings.bufferGroup,a=e&&t.get(e);a&&s.has(o.id)?r.has(a.id)||(n.push(a.layout),r.add(a.id)):n.push(o.getBufferLayout(i))}return n}_getPackedBuffer(e,t){let i=JSON.stringify({byteStride:e.layout.byteStride,attributes:e.layout.attributes}),n=this.packedBuffers[e.id];if(n&&n.layoutKey===i||(t=!0),t){n&&(n.packed.destroy(),delete this.packedBuffers[e.id]);let t=this._interleavePackedGroup(e);return this.packedBuffers[e.id]={packed:t,layoutKey:i},t.buffer}if(!n)throw Error(`Attribute buffer group ${e.id} has no packed buffer`);return n.packed.buffer}_interleavePackedGroup(e){let t=function(...e){if(0===e.length)throw Error("interleave() requires at least one input");return 1===e.length?(0,c4.getGPUDataEvaluator)(e[0]):new ue(e.map(c4.getGPUDataEvaluator)).output}(...e.attributes.map(t=>this._getInterleaveInput(e,t)));return!function(e,t){let i,n=(function e(t,i,n){var r;if((r=t)instanceof c4.GPUDataEvaluator||r instanceof c5)return void i.add(t);if(!(!t||"object"!=typeof t||n.has(t))){let r;if(n.add(t),Array.isArray(t)){for(let r of t)e(r,i,n);return}if((r=Object.getPrototypeOf(t))===Object.prototype||null===r)for(let r of Object.values(t))e(r,i,n)}}(t,i=new Set,new Set),Array.from(i));for(let t of n)t.evaluateSync(e);var r=n;let s=new Set(r.flatMap(c7)),o=new Set;for(let e of r)!function e(t,i){if(t instanceof c5){for(let n of t.gpuDataEvaluators)e(n,i);return}let n=t.source;if(n){if(n instanceof c4.GPUDataEvaluator){i.has(n)||(i.add(n),e(n,i));return}for(let t of n.dependencies)i.has(t)||(i.add(t),e(t,i))}}(e,o);for(let e of o)e.evaluated&&!s.has(e.buffer)&&e.destroy()}(this.device,t),t}_getInterleaveInput(e,t){let i=cR(t.getAccessor()),n=e.byteOffsets[t.id];if(ur(`${e.id}.${t.id} rowByteLength`,i),ur(`${e.id}.${t.id} groupByteOffset`,n),t.isConstant){let n=t.getConstantValue();if(!n)throw Error(`Attribute group ${e.id} is missing constant value ${t.id}`);return ur(`${e.id}.${t.id} constant byteOffset`,n.byteOffset),new c4.GPUDataEvaluator({id:t.id,type:"uint32",size:i/4,isConstant:!0,value:new Uint32Array(n.buffer,n.byteOffset,i/Uint32Array.BYTES_PER_ELEMENT)})}let r=t.getBuffer(),s=t.byteOffset,o=t.getAccessor().stride||i;if(ur(`${e.id}.${t.id} byteOffset`,s),ur(`${e.id}.${t.id} stride`,o),!r)throw Error(`Attribute group ${e.id} cannot interleave missing buffer ${t.id}`);return new c4.GPUDataEvaluator({id:t.id,type:"uint32",size:i/4,offset:s,stride:o,length:e.rowCount,buffer:r})}}function un(e){return 4*Math.ceil(e/4)}function ur(e,t){if(t%4!=0)throw Error(`Attribute buffer groups require 32-bit alignment: ${e}=${t}`)}var us=e.i(43317);function uo(e,t=[],i=0){let n=Math.fround(e),r=e-n;return t[i]=n,t[i+1]=r,t}let ua=`\

layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,ul=`\
struct Fp64F32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent.
fn fp64_decode_f32_bits(bits: u32) -> Fp64F32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64F32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64F32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64F32Bits(sign, i32(exponentBits) - 150, 0x800000u | fraction, false, false, false);
}

fn fp64_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return exactSign << 31u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;

  // A normal two-sum/two-product residual never needs a shift this large.
  // This guard gives deterministic underflow behavior outside that contract.
  if (exactShift >= 64 || highShift >= 64) {
    return exactSign << 31u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let lowBits = fp64_make_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  return vec2u(highBits, lowBits);
}

fn fp64_two_sum_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u((a.sign & b.sign) << 31u, 0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = select(
    b.baseExponent - a.baseExponent,
    a.baseExponent - b.baseExponent,
    a.baseExponent >= b.baseExponent
  );

  // Beyond half an ulp, rounding cannot change the larger operand. Returning
  // the smaller operand intact also avoids an unbounded integer alignment.
  // At a power-of-two boundary the spacing below the larger operand is half
  // the spacing above it, so an opposite-sign gap-25 operand can still change
  // the rounded high limb. Gap 26 is the first universally safe early-out.
  if (exponentDifference > 25) {
    if (fp64_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u, 0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_accumulator_bits(resultSign, resultMagnitude, commonBaseExponent);
}

fn fp64_two_sum_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_multiply_significands(a: u32, b: u32) -> vec2u {
  let aLow = a & 0xffffu;
  let aHigh = a >> 16u;
  let bLow = b & 0xffffu;
  let bHigh = b >> 16u;
  let lowProduct = aLow * bLow;
  let crossProduct = aLow * bHigh + aHigh * bLow;
  let highProduct = aHigh * bHigh;

  var result = vec2u(0u, lowProduct);
  result = fp64_u64_add(
    result,
    fp64_u64_shift_left(vec2u(0u, crossProduct), 16u)
  );
  result = fp64_u64_add(result, vec2u(highProduct, 0u));
  return result;
}

fn fp64_two_prod_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);
  let resultSign = a.sign ^ b.sign;

  if (a.isNan || b.isNan || ((a.isZero || b.isZero) && (a.isInf || b.isInf))) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    return vec2u((resultSign << 31u) | 0x7f800000u, resultSign << 31u);
  }
  if (a.isZero || b.isZero) {
    return vec2u(resultSign << 31u, resultSign << 31u);
  }

  let magnitude = fp64_multiply_significands(a.significand, b.significand);
  return fp64_split_accumulator_bits(
    resultSign,
    magnitude,
    a.baseExponent + b.baseExponent
  );
}

fn fp64_two_prod_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_prod_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_round_add_integer(a: f32, b: f32) -> f32 {
  return fp64_two_sum_integer(a, b).x;
}

fn fp64_round_mul_integer(a: f32, b: f32) -> f32 {
  return fp64_two_prod_integer(a, b).x;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_finite_exponent(value: Fp64F32Bits) -> i32 {
  let mostSignificantBit = 31u - countLeadingZeros(value.significand);
  return value.baseExponent + i32(mostSignificantBit);
}

fn fp64_scale_f32_integer(value: f32, exponent: i32) -> f32 {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(value));
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return value;
  }
  let resultBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent + exponent
  );
  return bitcast<f32>(resultBits);
}

// Divide normalized significands so the hardware operation cannot overflow,
// underflow, or flush a subnormal result. Reapply the exponent with integer
// packing, which also produces subnormal correction limbs without relying on
// floating-point arithmetic to preserve them.
fn fp64_divide_f32_integer(aValue: f32, bValue: f32) -> f32 {
  let a = fp64_decode_f32_bits(bitcast<u32>(aValue));
  let b = fp64_decode_f32_bits(bitcast<u32>(bValue));
  if (a.isZero || b.isZero || a.isInf || b.isInf || a.isNan || b.isNan) {
    return aValue / bValue;
  }

  let aMostSignificantBit = 31u - countLeadingZeros(a.significand);
  let bMostSignificantBit = 31u - countLeadingZeros(b.significand);
  let normalizedABits = fp64_make_f32_bits_from_u64(
    a.sign,
    vec2u(0u, a.significand),
    -i32(aMostSignificantBit)
  );
  let normalizedBBits = fp64_make_f32_bits_from_u64(
    b.sign,
    vec2u(0u, b.significand),
    -i32(bMostSignificantBit)
  );
  let normalizedQuotient = bitcast<f32>(normalizedABits) / bitcast<f32>(normalizedBBits);
  let quotient = fp64_decode_f32_bits(bitcast<u32>(normalizedQuotient));
  let exponentShift =
    a.baseExponent + i32(aMostSignificantBit) -
    b.baseExponent - i32(bMostSignificantBit);
  let quotientBits = fp64_make_f32_bits_from_u64(
    quotient.sign,
    vec2u(0u, quotient.significand),
    quotient.baseExponent + exponentShift
  );
  return bitcast<f32>(quotientBits);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn split(a: f32) -> vec2f {
  let aBits = bitcast<u32>(a);
  let decoded = fp64_decode_f32_bits(aBits);
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return vec2f(a, 0.0);
  }

  var roundedHigh = decoded.significand >> 12u;
  let remainder = decoded.significand & 0xfffu;
  if (remainder > 0x800u || (remainder == 0x800u && (roundedHigh & 1u) == 1u)) {
    roundedHigh = roundedHigh + 1u;
  }
  var highMagnitude = vec2u(0u, roundedHigh << 12u);
  var highBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    highMagnitude,
    decoded.baseExponent
  );
  // Rounding the high limb of a maximum-exponent value can overflow even
  // though the original value is finite. Truncate only in that boundary case
  // so split remains an exact finite decomposition.
  if (fp64_decode_f32_bits(highBits).isInf) {
    roundedHigh = decoded.significand >> 12u;
    highMagnitude = vec2u(0u, roundedHigh << 12u);
    highBits = fp64_make_f32_bits_from_u64(
      decoded.sign,
      highMagnitude,
      decoded.baseExponent
    );
  }
  let lowBits = fp64_make_residual_f32_bits(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent,
    highBits
  );
  return vec2f(bitcast<f32>(highBits), bitcast<f32>(lowBits));
}

fn split2(a: vec2f) -> vec2f {
  var result = split(a.x);
  result.y = fp64_round_add_integer(result.y, a.y);
  return result;
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn quickTwoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}
#endif

fn twoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let bBits = bitcast<u32>(b) ^ 0x80000000u;
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn twoSqr(a: f32) -> vec2f {
  return fp64_two_prod_integer(a, a);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  return fp64_two_prod_integer(a, b);
}
#endif

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var sum = fp64_two_sum_integer(a.x, b.x);
  let lowSum = fp64_two_sum_integer(a.y, b.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.x);
  sum = fp64_two_sum_integer(sum.x, sum.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.y);
  return fp64_two_sum_integer(sum.x, sum.y);
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  let negatedB = vec2f(
    bitcast<f32>(bitcast<u32>(b.x) ^ 0x80000000u),
    bitcast<f32>(bitcast<u32>(b.y) ^ 0x80000000u)
  );
  return sum_fp64(a, negatedB);
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var product = fp64_two_prod_integer(a.x, b.x);
  let crossProduct1 = fp64_round_mul_integer(a.x, b.y);
  product.y = fp64_round_add_integer(product.y, crossProduct1);
  product = fp64_two_sum_integer(product.x, product.y);
  let crossProduct2 = fp64_round_mul_integer(a.y, b.x);
  product.y = fp64_round_add_integer(product.y, crossProduct2);
  return fp64_two_sum_integer(product.x, product.y);
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_scale_fp64_integer(value: vec2f, exponent: i32) -> vec2f {
  let high = fp64_scale_f32_integer(value.x, exponent);
  let low = fp64_scale_f32_integer(value.y, exponent);
  return sum_fp64(vec2f(high, 0.0), vec2f(low, 0.0));
}

fn fp64_div_fp64_normalized(a: vec2f, b: vec2f) -> vec2f {
  let quotientHigh = fp64_divide_f32_integer(a.x, b.x);
  var quotient = vec2f(quotientHigh, 0.0);

  let remainder = sub_fp64(a, mul_fp64(b, quotient));
  let quotientLow = fp64_divide_f32_integer(remainder.x, b.x);
  quotient = sum_fp64(quotient, vec2f(quotientLow, 0.0));

  let secondRemainder = sub_fp64(a, mul_fp64(b, quotient));
  let correction = fp64_divide_f32_integer(secondRemainder.x, b.x);
  return sum_fp64(quotient, vec2f(correction, 0.0));
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let decodedA = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedB = fp64_decode_f32_bits(bitcast<u32>(b.x));
  if (
    decodedA.isZero || decodedB.isZero ||
    decodedA.isInf || decodedB.isInf ||
    decodedA.isNan || decodedB.isNan
  ) {
    return fp64_div_fp64_normalized(a, b);
  }

  let exponentA = fp64_f32_finite_exponent(decodedA);
  let exponentB = fp64_f32_finite_exponent(decodedB);
  // Correct the quotient near unity so b * q and the remainder stay clear of
  // both f32 underflow and overflow. The exponent difference is applied once.
  let normalizedA = fp64_scale_fp64_integer(a, -exponentA);
  let normalizedB = fp64_scale_fp64_integer(b, -exponentB);
  let normalizedQuotient = fp64_div_fp64_normalized(normalizedA, normalizedB);
  return fp64_scale_fp64_integer(normalizedQuotient, exponentA - exponentB);
}

fn fp64_sqrt_fp64_normalized(a: vec2f) -> vec2f {
  let estimate = sqrt(a.x);
  let difference = sub_fp64(a, fp64_two_prod_integer(estimate, estimate)).x;
  let denominator = fp64_round_add_integer(estimate, estimate);
  let correction = fp64_divide_f32_integer(difference, denominator);
  return sum_fp64(vec2f(estimate, 0.0), vec2f(correction, 0.0));
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedLow = fp64_decode_f32_bits(bitcast<u32>(a.y));
  if (decoded.isZero && decodedLow.isZero) {
    return vec2f(0.0, 0.0);
  }
  if (decoded.sign == 1u) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  if (decoded.isInf || decoded.isNan) {
    return fp64_sqrt_fp64_normalized(a);
  }
  let exponent = fp64_f32_finite_exponent(decoded);
  // An even scale lets the final square-root rescale use an integer exponent.
  let evenExponent = exponent - (exponent & 1);
  let normalizedA = fp64_scale_fp64_integer(a, -evenExponent);
  let normalizedRoot = fp64_sqrt_fp64_normalized(normalizedA);
  return fp64_scale_fp64_integer(normalizedRoot, evenExponent / 2);
}
#endif
`,uc={name:"fp64arithmetic",source:`\
struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64Bits {
  sign: u32,
  exponent: i32,
  significand: vec2u,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}
#endif

fn fp64_u64_is_zero(value: vec2u) -> bool {
  return value.x == 0u && value.y == 0u;
}

fn fp64_u64_compare(a: vec2u, b: vec2u) -> i32 {
  if (a.x != b.x) {
    return select(-1, 1, a.x > b.x);
  }
  if (a.y != b.y) {
    return select(-1, 1, a.y > b.y);
  }
  return 0;
}

fn fp64_u64_add(a: vec2u, b: vec2u) -> vec2u {
  let low = a.y + b.y;
  let carry = select(0u, 1u, low < a.y);
  return vec2u(a.x + b.x + carry, low);
}

fn fp64_u64_sub(a: vec2u, b: vec2u) -> vec2u {
  let borrow = select(0u, 1u, a.y < b.y);
  return vec2u(a.x - b.x - borrow, a.y - b.y);
}

fn fp64_u64_shift_left(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u((value.x << shift) | (value.y >> (32u - shift)), value.y << shift);
  }
  if (shift == 32u) {
    return vec2u(value.y, 0u);
  }
  if (shift < 64u) {
    return vec2u(value.y << (shift - 32u), 0u);
  }
  return vec2u(0u);
}

fn fp64_u64_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u(value.x >> shift, (value.y >> shift) | (value.x << (32u - shift)));
  }
  if (shift == 32u) {
    return vec2u(0u, value.x);
  }
  if (shift < 64u) {
    return vec2u(0u, value.x >> (shift - 32u));
  }
  return vec2u(0u);
}

fn fp64_u64_get_bit(value: vec2u, bitIndex: u32) -> bool {
  if (bitIndex >= 64u) {
    return false;
  }
  if (bitIndex >= 32u) {
    return ((value.x >> (bitIndex - 32u)) & 1u) != 0u;
  }
  return ((value.y >> bitIndex) & 1u) != 0u;
}

fn fp64_u64_has_bits_below(value: vec2u, bitCount: u32) -> bool {
  if (bitCount == 0u) {
    return false;
  }
  if (bitCount >= 64u) {
    return !fp64_u64_is_zero(value);
  }
  if (bitCount > 32u) {
    let highBitCount = bitCount - 32u;
    let highMask = (1u << highBitCount) - 1u;
    return value.y != 0u || (value.x & highMask) != 0u;
  }
  if (bitCount == 32u) {
    return value.y != 0u;
  }
  let lowMask = (1u << bitCount) - 1u;
  return (value.y & lowMask) != 0u;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_u64_shift_right_sticky(value: vec2u, shift: u32) -> vec2u {
  var shifted = fp64_u64_shift_right(value, shift);
  if (fp64_u64_has_bits_below(value, shift)) {
    shifted.y = shifted.y | 1u;
  }
  return shifted;
}
#endif

fn fp64_u64_count_leading_zeros(value: vec2u) -> u32 {
  if (value.x != 0u) {
    return countLeadingZeros(value.x);
  }
  return 32u + countLeadingZeros(value.y);
}

fn fp64_round_shift_right_to_u32(value: vec2u, shift: u32) -> u32 {
  if (shift == 0u) {
    return value.y;
  }

  let truncated = fp64_u64_shift_right(value, shift);
  var rounded = truncated.y;
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded & 1u) == 1u)) {
    rounded = rounded + 1u;
  }
  return rounded;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_round_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }

  var rounded = fp64_u64_shift_right(value, shift);
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded.y & 1u) == 1u)) {
    rounded = fp64_u64_add(rounded, vec2u(0u, 1u));
  }
  return rounded;
}
#endif

fn fp64_make_f32_bits_from_u64(sign: u32, significand: vec2u, baseExponent: i32) -> u32 {
  if (fp64_u64_is_zero(significand)) {
    return sign << 31u;
  }

  let leadingZeros = fp64_u64_count_leading_zeros(significand);
  let mostSignificantBit = 63u - leadingZeros;
  var exponent = baseExponent + i32(mostSignificantBit);

  if (exponent > 127) {
    return (sign << 31u) | 0x7f800000u;
  }

  if (exponent >= -126) {
    let shift = i32(mostSignificantBit) - 23;
    var significand24: u32;
    if (shift > 0) {
      significand24 = fp64_round_shift_right_to_u32(significand, u32(shift));
    } else {
      significand24 = fp64_u64_shift_left(significand, u32(-shift)).y;
    }

    if (significand24 >= 0x1000000u) {
      significand24 = significand24 >> 1u;
      exponent = exponent + 1;
      if (exponent > 127) {
        return (sign << 31u) | 0x7f800000u;
      }
    }

    return (sign << 31u) | (u32(exponent + 127) << 23u) | (significand24 & 0x7fffffu);
  }

  let scaleExponent = baseExponent + 149;
  var mantissa: u32;
  if (scaleExponent >= 0) {
    mantissa = fp64_u64_shift_left(significand, u32(scaleExponent)).y;
  } else {
    mantissa = fp64_round_shift_right_to_u32(significand, u32(-scaleExponent));
  }

  if (mantissa >= 0x800000u) {
    return (sign << 31u) | 0x00800000u;
  }
  return (sign << 31u) | mantissa;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_decode_bits(bits: vec2u) -> Fp64Bits {
  let sign = bits.x >> 31u;
  let exponentBits = (bits.x >> 20u) & 0x7ffu;
  let fractionHigh = bits.x & 0xfffffu;
  let fractionLow = bits.y;
  let fraction = vec2u(fractionHigh, fractionLow);

  if (exponentBits == 0x7ffu) {
    let isInf = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, 0, vec2u(0u), false, isInf, !isInf);
  }

  if (exponentBits == 0u) {
    let isZero = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, -1022, fraction, isZero, false, false);
  }

  return Fp64Bits(sign, i32(exponentBits) - 1023, vec2u((1u << 20u) | fractionHigh, fractionLow), false, false, false);
}

fn fp64_finite_magnitude_compare(a: Fp64Bits, b: Fp64Bits) -> i32 {
  if (a.exponent != b.exponent) {
    return select(-1, 1, a.exponent > b.exponent);
  }
  return fp64_u64_compare(a.significand, b.significand);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64RawF32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent. This shared
// integer representation lets normalization remain independent of the
// selected double-single arithmetic implementation.
fn fp64_decode_raw_f32_bits(bits: u32) -> Fp64RawF32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64RawF32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64RawF32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64RawF32Bits(
    sign,
    i32(exponentBits) - 150,
    0x800000u | fraction,
    false,
    false,
    false
  );
}

fn fp64_raw_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_raw_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_raw_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return 0u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;
  if (exactShift >= 64 || highShift >= 64) {
    return 0u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_raw_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let rawLowBits = fp64_make_raw_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  let lowBits = select(rawLowBits, 0u, (rawLowBits & 0x7fffffffu) == 0u);
  if ((highBits & 0x7fffffffu) == 0u && (lowBits & 0x7fffffffu) == 0u) {
    return vec2u(0u);
  }
  return vec2u(highBits, lowBits);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
// Round an arithmetic accumulator to binary64 before splitting it. The
// aligned add/subtract paths retain three guard bits plus a sticky bit, which
// is sufficient for round-to-nearest-even at the binary64 boundary.
fn fp64_split_binary64_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }

  let mostSignificantBit = 63u - fp64_u64_count_leading_zeros(magnitude);
  let exponent = baseExponent + i32(mostSignificantBit);
  if (exponent > 1023) {
    return vec2u((sign << 31u) | 0x7f800000u, 0u);
  }

  var roundedMagnitude = magnitude;
  var roundedBaseExponent = baseExponent;
  if (exponent >= -1022) {
    if (mostSignificantBit > 52u) {
      let shift = mostSignificantBit - 52u;
      roundedMagnitude = fp64_round_shift_right(magnitude, shift);
      roundedBaseExponent = baseExponent + i32(shift);
    }
  } else {
    let shift = -1074 - baseExponent;
    if (shift > 0) {
      roundedMagnitude = fp64_round_shift_right(magnitude, u32(shift));
      roundedBaseExponent = -1074;
    }
  }

  if (fp64_u64_is_zero(roundedMagnitude)) {
    return vec2u(0u);
  }
  return fp64_split_raw_accumulator_bits(sign, roundedMagnitude, roundedBaseExponent);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_add_raw_f32_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_raw_f32_bits(aBits);
  let b = fp64_decode_raw_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = abs(a.baseExponent - b.baseExponent);
  if (exponentDifference > 25) {
    if (fp64_raw_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_raw_accumulator_bits(
    resultSign,
    resultMagnitude,
    commonBaseExponent
  );
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_add_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_sub_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_add_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

fn fp64_sub_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

// Subtract two raw binary64 values and round the exact result once to f32.
// The input words are canonical high/low words: .x contains sign/exponent/high
// fraction bits, and .y contains the low 32 fraction bits.
fn sub_fp64u32_to_f32_bits(aBits: vec2u, bBits: vec2u) -> u32 {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return 0x7fc00000u;
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return (a.sign << 31u) | 0x7f800000u;
    }
    return 0x7fc00000u;
  }
  if (a.isInf) {
    return (a.sign << 31u) | 0x7f800000u;
  }
  if (b.isInf) {
    return (bSubtractionSign << 31u) | 0x7f800000u;
  }
  if (a.isZero && b.isZero) {
    return select(0u, 0x80000000u, a.sign == 1u && b.sign == 0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return 0u;
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_f32_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_f32_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_f32(aBits: vec2u, bBits: vec2u) -> f32 {
  return bitcast<f32>(sub_fp64u32_to_f32_bits(aBits, bBits));
}

// Subtract two raw binary64 values, round once to binary64, then split the
// result into normalized f32 limbs. Finite results must fit within the f32
// exponent range; larger magnitudes map to infinity and smaller magnitudes
// map to zero. The input words use canonical high/low word order.
fn sub_fp64u32_to_fp64_bits(aBits: vec2u, bBits: vec2u) -> vec2u {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
    }
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf) {
    return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
  }
  if (b.isInf) {
    return vec2u((bSubtractionSign << 31u) | 0x7f800000u, 0u);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return vec2u(0u);
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_fp64_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_fp64(aBits: vec2u, bBits: vec2u) -> vec2f {
  let resultBits = sub_fp64u32_to_fp64_bits(aBits, bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}
#endif

#ifdef LUMA_FP64_INTEGER_ARITHMETIC
${ul}
#else
fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
#endif
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_bits_is_nan(bits: u32) -> bool {
  return (bits & 0x7fffffffu) > 0x7f800000u;
}

fn fp64_f32_bits_is_inf(bits: u32) -> bool {
  return (bits & 0x7fffffffu) == 0x7f800000u;
}

fn fp64_compare_f32_bits(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == 0u && bMagnitude == 0u) {
    return 0;
  }
  let aSign = aBits >> 31u;
  let bSign = bBits >> 31u;
  if (aSign != bSign) {
    return select(1, -1, aSign == 1u);
  }
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  let magnitudeComparison = select(-1, 1, aMagnitude > bMagnitude);
  return select(magnitudeComparison, -magnitudeComparison, aSign == 1u);
}

// Normalize an arbitrary pair of finite f32 limbs with integer accumulation.
// This is independent of LUMA_FP64_INTEGER_ARITHMETIC and canonicalizes every
// representation of zero to vec2f(+0.0, +0.0).
fn normalize_fp64(value: vec2f) -> vec2f {
  let resultBits = fp64_add_raw_f32_bits(bitcast<u32>(value.x), bitcast<u32>(value.y));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn is_nan_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  return fp64_f32_bits_is_nan(bitcast<u32>(normalized.x)) ||
    fp64_f32_bits_is_nan(bitcast<u32>(normalized.y));
}

fn is_finite_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  return !fp64_f32_bits_is_nan(highBits) && !fp64_f32_bits_is_nan(lowBits) &&
    !fp64_f32_bits_is_inf(highBits) && !fp64_f32_bits_is_inf(lowBits);
}

// Returns -1, 0, or 1. NaN is unordered and returns 0; call is_nan_fp64 or
// is_finite_fp64 first when 0 must mean a finite zero.
fn sign_fp64(value: vec2f) -> i32 {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  if (fp64_f32_bits_is_nan(highBits) || fp64_f32_bits_is_nan(lowBits)) {
    return 0;
  }
  if ((highBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (highBits >> 31u) == 1u);
  }
  if ((lowBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (lowBits >> 31u) == 1u);
  }
  return 0;
}

// Compares double-single values and returns -1, 0, or 1. NaN is unordered
// and returns 0; callers that require equality semantics must first check
// is_nan_fp64 or is_finite_fp64.
fn compare_fp64(a: vec2f, b: vec2f) -> i32 {
  let normalizedA = normalize_fp64(a);
  let normalizedB = normalize_fp64(b);
  let aHighBits = bitcast<u32>(normalizedA.x);
  let aLowBits = bitcast<u32>(normalizedA.y);
  let bHighBits = bitcast<u32>(normalizedB.x);
  let bLowBits = bitcast<u32>(normalizedB.y);
  if (fp64_f32_bits_is_nan(aHighBits) || fp64_f32_bits_is_nan(aLowBits) ||
      fp64_f32_bits_is_nan(bHighBits) || fp64_f32_bits_is_nan(bLowBits)) {
    return 0;
  }
  let highComparison = fp64_compare_f32_bits(aHighBits, bHighBits);
  if (highComparison != 0) {
    return highComparison;
  }
  return fp64_compare_f32_bits(aLowBits, bLowBits);
}
#endif
`,fs:ua,vs:ua,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:"f32",SPLIT:"f32"},fp64ify:uo,fp64LowPart:function(e){return e-Math.fround(e)},fp64ifyMatrix4:function(e){let t=new Float32Array(32);for(let i=0;i<4;++i)for(let n=0;n<4;++n){let r=4*i+n;uo(e[4*n+i],t,2*r)}return t}};function uu(e){let{source:t,target:i,start:n=0,size:r,getData:s}=e,o=e.end||i.length,a=t.length,l=o-n;if(a>l)return void i.set(t.subarray(0,l),n);if(i.set(t,n),!s)return;let c=a;for(;c<l;){let e=s(c,t);for(let t=0;t<r;t++)i[n+c]=e[t]||0,c++}}function uh(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw Error(`No defined attribute type for size "${e}"`)}}function ud(e){switch(e){case 1:return"float32";case 2:return"float32x2";case 3:return"float32x3";case 4:return"float32x4";default:throw Error("invalid type size")}}function up(e){e.push(e.shift())}function uf({device:e,source:t,target:i}){return(!i||i.byteLength<t.byteLength)&&(i?.destroy(),i=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),i}function ug({device:e,buffer:t,attribute:i,fromLength:n,toLength:r,fromStartIndices:s,getData:o=e=>e}){let a=i.isDoublePrecisionBuffer?2:1,l=i.size*a,c=i.byteOffset,u=i.settings.bytesPerElement<4?c/i.settings.bytesPerElement*4:c,h=i.startIndices,d=s&&h,p=i.isConstant;if(!d&&t&&n>=r)return t;let f=i.value instanceof Float64Array?Float32Array:i.value.constructor,g=p?i.value:new f(i.getBuffer().readSyncWebGL(c,r*f.BYTES_PER_ELEMENT).buffer);if(i.settings.normalized&&!p){let e=o;o=(t,n)=>i.normalizeConstant(e(t,n))}let m=p?(e,t)=>o(g,t):(e,t)=>o(g.subarray(e+c,e+c+l),t),v=new Float32Array(t?t.readSyncWebGL(u,4*n).buffer:0),_=new Float32Array(r);return!function({source:e,target:t,size:i,getData:n,sourceStartIndices:r,targetStartIndices:s}){if(!r||!s)return uu({source:e,target:t,size:i,getData:n});let o=0,a=0,l=n&&((e,t)=>n(e+a,t)),c=Math.min(r.length,s.length);for(let n=1;n<c;n++){let c=r[n]*i,u=s[n]*i;uu({source:e.subarray(o,c),target:t,start:a,end:u,size:i,getData:l}),o=c,a=u}a<t.length&&uu({source:[],target:t,start:a,size:i,getData:l})}({source:v,target:_,sourceStartIndices:s,targetStartIndices:h,size:l,getData:m}),(!t||t.byteLength<_.byteLength+u)&&(t?.destroy(),t=e.createBuffer({byteLength:_.byteLength+u,usage:35050})),t.write(_,u),t}class um{constructor({device:e,attribute:t,timeline:i}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new o7(i),this.attribute=t,this.attributeInTransition=function(e){let{device:t,settings:i,value:n}=e,r=new cq(t,i);return r.setData({value:n instanceof Float64Array?new Float64Array(0):new Float32Array(0),normalized:i.normalized}),r}(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,i=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=function(e,t){let{settings:i,value:n,size:r}=e,s=e.isDoublePrecisionBuffer?2:1,o=0,{shaderAttributes:a}=e.settings;if(a)for(let e of Object.values(a))o=Math.max(o,e.vertexOffset??0);return(i.noAlloc?n.length:(t+o)*r)*s}(this.attribute,t),this.transition.start({...e,duration:i})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){let{stride:t}=this.attributeInTransition.getAccessor();this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value,stride:t})}cancel(){this.transition.cancel()}delete(){for(let e of(this.cancel(),this.buffers))e.destroy();this.buffers.length=0}}let uv={name:"interpolation",vs:`\
layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:"f32"}},u_=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,uy=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function ub(e){return e.isDoublePrecisionBuffer}let ux={name:"spring",vs:`\
layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:"f32",stiffness:"f32"}},uw=`\
#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,uP=`\
#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`,uC={interpolation:class extends um{constructor({device:e,attribute:t,timeline:i}){super({device:e,attribute:t,timeline:i}),this.type="interpolation",this.transform=function(e,t){let i=t.size,n=uh(i),r=ud(i),s=t.getBufferLayout();return ub(t)?new us.BufferTransform(e,{vs:uy,bufferLayout:[{name:"aFrom",byteStride:8*i,attributes:[{attribute:"aFrom",format:r,byteOffset:0},{attribute:"aFrom64Low",format:r,byteOffset:4*i}]},{name:"aTo",byteStride:8*i,attributes:[{attribute:"aTo",format:r,byteOffset:0},{attribute:"aTo64Low",format:r,byteOffset:4*i}]}],modules:[uc,uv],defines:{ATTRIBUTE_TYPE:n,ATTRIBUTE_SIZE:i},moduleSettings:{},varyings:["vCurrent","vCurrent64Low"],bufferMode:35980,disableWarnings:!0}):new us.BufferTransform(e,{vs:u_,bufferLayout:[{name:"aFrom",format:r},{name:"aTo",format:s.attributes[0].format}],modules:[uv],defines:{ATTRIBUTE_TYPE:n},varyings:["vCurrent"],disableWarnings:!0})}(e,t)}start(e,t){let i=this.currentLength,n=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0)return void this.transition.cancel();let{buffers:r,attribute:s}=this;up(r),r[0]=ug({device:this.device,buffer:r[0],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:n,getData:e.enter}),r[1]=uf({device:this.device,source:r[0],target:r[1]}),this.setBuffer(r[1]);let{transform:o}=this,a=o.model,l=Math.floor(this.currentLength/s.size);ub(s)&&(l/=2),a.setVertexCount(l),s.isConstant?(a.setAttributes({aFrom:r[0]}),a.setConstantAttributes({aTo:s.value})):a.setAttributes({aFrom:r[0],aTo:s.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:r[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:i}=this.transition,n=i/e;t&&(n=t(n));let{model:r}=this.transform,s={time:n};r.shaderInputs.setProps({interpolation:s}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}},spring:class extends um{constructor({device:e,attribute:t,timeline:i}){var n,r;super({device:e,attribute:t,timeline:i}),this.type="spring",this.texture=e.createTexture({data:new Uint8Array(4),format:"rgba8unorm",width:1,height:1}),this.framebuffer=(n=e,r=this.texture,n.createFramebuffer({id:"spring-transition-is-transitioning-framebuffer",width:1,height:1,colorAttachments:[r]})),this.transform=function(e,t){let i=uh(t.size),n=ud(t.size);return new us.BufferTransform(e,{vs:uw,fs:uP,bufferLayout:[{name:"aPrev",format:n},{name:"aCur",format:n},{name:"aTo",format:t.getBufferLayout().attributes[0].format}],varyings:["vNext"],modules:[ux],defines:{ATTRIBUTE_TYPE:i},parameters:{depthCompare:"always",blendColorOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}})}(e,t)}start(e,t){let i=this.currentLength,n=this.currentStartIndices;super.start(e,t);let{buffers:r,attribute:s}=this;for(let t=0;t<2;t++)r[t]=ug({device:this.device,buffer:r[t],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:n,getData:e.enter});r[2]=uf({device:this.device,source:r[0],target:r[2]}),this.setBuffer(r[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/s.size)),s.isConstant?o.setConstantAttributes({aTo:s.value}):o.setAttributes({aTo:s.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:i,transition:n}=this,r=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let s={stiffness:r.stiffness,damping:r.damping};t.model.shaderInputs.setProps({spring:s}),t.run({framebuffer:i,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),up(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(i)[0]>0||n.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}}};class uM{constructor(e,{id:t,timeline:i}){if(!e)throw Error("AttributeTransitionManager is constructed without device");this.id=t,this.device=e,this.timeline=i,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:i}){for(let n in this.numInstances=i||1,e){let i=e[n],r=i.getTransitionSetting(t);r&&this._updateAttribute(n,i,r)}for(let i in this.transitions){let n=e[i];n&&n.getTransitionSetting(t)||this._removeTransition(i)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let i=this.transitions[t];i.inProgress&&(e[t]=i.attributeInTransition)}return e}run(){if(0===this.numInstances)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,i){let n=this.transitions[e],r=!n||n.type!==i.type;if(r){n&&this._removeTransition(e);let s=uC[i.type];s?this.transitions[e]=new s({attribute:t,timeline:this.timeline,device:this.device}):(tT.error(`unsupported transition type '${i.type}'`)(),r=!1)}(r||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(i,this.numInstances))}}let uS="attributeManager.invalidate";class uE{constructor(e,{id:t="attribute-manager",stats:i,timeline:n}={}){this.mergeBoundsMemoized=iM(oG),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=i,this.attributeTransitionManager=new uM(e,{id:`${t}-transitions`,timeline:n}),this.attributeBufferGroups="webgpu"===e.type?new ui(e,{id:t,isTransitionAttribute:e=>this.attributeTransitionManager.hasAttribute(e)}):null,Object.seal(this)}finalize(){for(let e in this.attributeBufferGroups?.finalize(),this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:"instance"})}remove(e){for(let t of e)void 0!==this.attributes[t]&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let i=this._invalidateTrigger(e,t);sn(uS,this,e,i)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);sn(uS,this,"all")}update({data:e,numInstances:t,startIndices:i=null,transitions:n,props:r={},buffers:s={},context:o={}}){let a=!1;for(let n in sn("attributeManager.updateStart",this),this.stats&&this.stats.get("Update Attributes").timeStart(),this.attributes){let l=this.attributes[n],c=l.settings.accessor;l.startIndices=i,l.numInstances=t,r[n]&&tT.removed(`props.${n}`,`data.attributes.${n}`)(),l.setExternalBuffer(s[n])||l.setBinaryValue("string"==typeof c?s[c]:void 0,e.startIndices)||"string"==typeof c&&!s[c]&&l.setConstantValue(o,r[c])||l.needsUpdate()&&(a=!0,this._updateAttribute({attribute:l,numInstances:t,data:e,props:r,context:o})),this.needsRedraw=this.needsRedraw||l.needsRedraw()}a&&sn("attributeManager.updateEnd",this,t),this.stats&&(this.stats.get("Update Attributes").timeEnd(),a&&this.stats.get("Attributes updated").incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:n})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:i}=this,n={...i.getAttributes()};for(let r in t){let s=t[r];s.needsRedraw(e)&&!i.hasAttribute(r)&&(n[r]=s)}return n}getBufferLayouts(e){return this.hasBufferGroups()?this.attributeBufferGroups.getBufferLayouts(this.getAttributes(),e):Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}hasBufferGroups(){return!!this.attributeBufferGroups?.hasGroups(this.attributes)}getBufferGroupBindings(e,t,i={}){return this.attributeBufferGroups?this.attributeBufferGroups.getBindings(this.getAttributes(),e,t,i):{bufferLayouts:this.getBufferLayouts(t),buffers:{},groupedAttributeIds:new Set}}_add(e,t){for(let i in e){let n=e[i],r={...n,id:i,size:n.isIndexed&&1||n.size||1,...t};this.attributes[i]=new cq(this.device,r)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(i=>{e[i]||(e[i]=[]),e[i].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:i,updateTriggers:n}=this,r=n[e];return r&&r.forEach(e=>{let n=i[e];n&&n.setNeedsUpdate(n.id,t)}),r}_updateAttribute(e){let{attribute:t,numInstances:i}=e;(sn("attribute.updateStart",t),t.constant)?t.setConstantValue(e.context,t.value):(t.allocate(i)&&sn("attribute.allocate",t,i),t.updateBuffer(e)&&(this.needsRedraw=!0,sn("attribute.updateEnd",t,i)))}}function uL(e,t,i,n,r){let s=t-e;return(i-t)*r+-s*n+s+t}function uA(e,t){if(Array.isArray(e)){let i=0;for(let n=0;n<e.length;n++){let r=e[n]-t[n];i+=r*r}return Math.sqrt(i)}return Math.abs(e-t)}let uT={interpolation:class extends o7{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:i,duration:n,easing:r}}=this,s=r(e/n);this._value=iX(t,i,s)}},spring:class extends o7{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:i,stiffness:n}=this.settings,{_prevValue:r=e,_currValue:s=e}=this,o=function(e,t,i,n,r){if(Array.isArray(i)){let s=[];for(let o=0;o<i.length;o++)s[o]=uL(e[o],t[o],i[o],n,r);return s}return uL(e,t,i,n,r)}(r,s,t,i,n),a=uA(o,t),l=uA(o,s);a<1e-5&&l<1e-5&&(o=t,this.end()),this._prevValue=s,this._currValue=o}}};class uk{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,i,n){let{transitions:r}=this;if(r.has(e)){let i=r.get(e),{value:n=i.settings.fromValue}=i;t=n,this.remove(e)}if(!(n=c$(n)))return;let s=uT[n.type];if(!s)return void tT.error(`unsupported transition type '${n.type}'`)();let o=new s(this.timeline);o.start({...n,fromValue:t,toValue:i}),r.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,i]of this.transitions)i.update(),e[t]=i.value,i.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}}function uI({newProps:e,oldProps:t,ignoreProps:i={},propTypes:n={},triggerName:r="props"}){if(t===e)return!1;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return`${r} changed shallowly`;for(let s of Object.keys(e))if(!(s in i)){if(!(s in t))return`${r}.${s} added`;let i=uO(e[s],t[s],n[s]);if(i)return`${r}.${s} ${i}`}for(let s of Object.keys(t))if(!(s in i)){if(!(s in e))return`${r}.${s} dropped`;if(!Object.hasOwnProperty.call(e,s)){let i=uO(e[s],t[s],n[s]);if(i)return`${r}.${s} ${i}`}}return!1}function uO(e,t,i){let n=i&&i.equal;return n&&!n(e,t,i)||!n&&(n=e&&t&&e.equals)&&!n.call(e,t)?"changed deeply":n||t===e?null:"changed shallowly"}function uR(e,t,i){let n=e.updateTriggers[i];n=null==n?{}:n;let r=t.updateTriggers[i];return uI({oldProps:r=null==r?{}:r,newProps:n,triggerName:i})}function uz(e,t){if(!t)return e;let i={...e,...t};if("defines"in t&&(i.defines={...e.defines,...t.defines}),"modules"in t&&(i.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>"project64"===e.name))){let e=i.modules.findIndex(e=>"project32"===e.name);e>=0&&i.modules.splice(e,1)}if("inject"in t)if(e.inject){let n={...e.inject};for(let e in t.inject)n[e]=(n[e]||"")+t.inject[e];i.inject=n}else i.inject=t.inject;return i}var rw=rw,tL=tL;let uF=[0,0,0];function uB(e,t,i=!1){let n=t.projectPosition(e);if(i&&t instanceof o8){let[i,r,s=0]=e,o=t.getDistanceScales([i,r]);n[2]=s*o.unitsPerMeter[2]}return n}function uj(e,{viewport:t,modelMatrix:i,coordinateSystem:n,coordinateOrigin:r,offsetMode:s}){let[o,a,l=0]=e;switch(i&&([o,a,l]=tL.transformMat4([],[o,a,l,1],i)),n){case"default":return uj(e,{viewport:t,modelMatrix:i,coordinateSystem:t.isGeospatial?"lnglat":"cartesian",coordinateOrigin:r,offsetMode:s});case"lnglat":return uB([o,a,l],t,s);case"lnglat-offsets":return uB([o+r[0],a+r[1],l+(r[2]||0)],t,s);case"meter-offsets":return uB(rI(r,[o,a,l]),t,s);case"cartesian":return t.isGeospatial?[o+r[0],a+r[1],l+r[2]]:t.projectPosition([o,a,l]);default:throw Error(`Invalid coordinateSystem: ${n}`)}}let uD={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},uN={},uV={boolean:{validate:(e,t)=>!0,equal:(e,t,i)=>!!e==!!t},number:{validate:(e,t)=>Number.isFinite(e)&&(!("max"in t)||e<=t.max)&&(!("min"in t)||e>=t.min)},color:{validate:(e,t)=>t.optional&&!e||uG(e)&&(3===e.length||4===e.length),equal:(e,t,i)=>oK(e,t,1)},accessor:{validate(e,t){let i=uW(e);return"function"===i||i===uW(t.value)},equal:(e,t,i)=>"function"==typeof t||oK(e,t,1)},array:{validate:(e,t)=>t.optional&&!e||uG(e),equal(e,t,i){let{compare:n}=i,r=Number.isInteger(n)?n:+!!n;return n?oK(e,t,r):e===t}},object:{equal(e,t,i){if(i.ignore)return!0;let{compare:n}=i,r=Number.isInteger(n)?n:+!!n;return n?oK(e,t,r):e===t}},function:{validate:(e,t)=>t.optional&&!e||"function"==typeof e,equal:(e,t,i)=>!i.compare&&!1!==i.ignore||e===t},data:{transform:(e,t,i)=>{if(!e)return e;let{dataTransform:n}=i.props;return n?n(e):"string"==typeof e.shape&&e.shape.endsWith("-table")&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,i)=>{let n=i.context;return n&&n.device?function(e,t,i,n){if(i instanceof a2.Texture)return i;i.constructor&&"Object"!==i.constructor.name&&(i={data:i});let r=null;i.compressed&&(r={minFilter:"linear",mipmapFilter:i.data.length>1?"nearest":"linear"});let{width:s,height:o}=i.data,a=t.createTexture({...i,sampler:{...uD,...r,...n},mipLevels:t.getMipLevelCount(s,o)});return"webgl"===t.type?a.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(a),uN[a.id]=e,a}(i.id,n.device,e,{...t.parameters,...i.props.textureParameters}):null},release:(e,t,i)=>{var n;n=i.id,e&&e instanceof a2.Texture&&uN[e.id]===n&&(e.delete(),delete uN[e.id])}}};function uU(e,t){return"type"in t?{name:e,...uV[t.type],...t}:"value"in t?{name:e,type:uW(t.value),...t}:{name:e,type:"object",value:t}}function uG(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function uW(e){return uG(e)?"array":null===e?"null":typeof e}function u$(e,t){return Object.prototype.hasOwnProperty.call(e,t)}let uq=0;class uH{constructor(...e){this.props=function(e,t){let i;for(let e=t.length-1;e>=0;e--){let n=t[e];"extensions"in n&&(i=n.extensions)}let n=Object.create(function e(t,i){var n,r;if(!(t instanceof uZ.constructor))return{};let s="_mergedDefaultProps";if(i)for(let e of i){let t=e.constructor;t&&(s+=`:${t.extensionName||t.name}`)}let o=u$(n=t,r=s)&&n[r];return o||(t[s]=function(t,i){var n;let r;if(!t.prototype)return null;let s=e(Object.getPrototypeOf(t)),o=function(e){let t={},i={},n={};for(let[r,s]of Object.entries(e)){let e=s?.deprecatedFor;if(e)n[r]=Array.isArray(e)?e:[e];else{let e=function(e,t){switch(uW(t)){case"object":return uU(e,t);case"array":return uU(e,{type:"array",value:t,compare:!1});case"boolean":return uU(e,{type:"boolean",value:t});case"number":return uU(e,{type:"number",value:t});case"function":return uU(e,{type:"function",value:t,compare:!0});default:return{name:e,type:"unknown",value:t}}}(r,s);t[r]=e,i[r]=e.value}}return{propTypes:t,defaultProps:i,deprecatedProps:n}}(function(e,t){return u$(e,t)&&e[t]}(t,"defaultProps")||{}),a=Object.assign(Object.create(null),s,o.defaultProps),l=Object.assign(Object.create(null),s?.[r5],o.propTypes),c=Object.assign(Object.create(null),s?.[r8],o.deprecatedProps);for(let t of i){let i=e(t.constructor);i&&(Object.assign(a,i),Object.assign(l,i[r5]),Object.assign(c,i[r8]))}return Object.defineProperties(a,{id:{writable:!0,value:((r=(n=t).componentName)||tT.warn(`${n.name}.componentName not specified`)(),r||n.name)}}),function(e,t){let i={},n={};for(let e in t){let r=t[e],{name:s,value:o}=r;r.async&&(i[s]=o,n[s]=function(e){return{enumerable:!0,set(t){"string"==typeof t||t instanceof Promise||cN(t)?this[r9][e]=t:this[se][e]=t},get(){if(this[se]){if(e in this[se])return this[se][e]||this[r7][e];if(e in this[r9]){let t=this[r6]&&this[r6].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[r7][e]}}return this[r7][e]}}}(s))}e[r7]=i,e[r9]={},Object.defineProperties(e,n)}(a,l),function(e,t){for(let i in t)Object.defineProperty(e,i,{enumerable:!1,set(e){let n=`${this.id}: ${i}`;for(let n of t[i])u$(this,n)||(this[n]=e);tT.deprecated(n,t[i].join("/"))()}})}(a,c),a[r5]=l,a[r8]=c,0!==i.length||u$(t,"_propTypes")||(t._propTypes=l),a}(t,i||[]))}(e.constructor,i));n[r6]=e,n[r9]={},n[se]={};for(let e=0;e<t.length;++e){let i=t[e];for(let e in i)n[e]=i[e]}return Object.freeze(n),n}(this,e),this.id=this.props.id,this.count=uq++}clone(e){let{props:t}=this,i={};for(let e in t[r7])e in t[se]?i[e]=t[se][e]:e in t[r9]&&(i[e]=t[r9][e]);return new this.constructor({...t,...i,...e})}}uH.componentName="Component",uH.defaultProps={};let uZ=uH,uY=Object.freeze({});class uX{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||uY}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[r6]||this.component;let t=e[se]||{},i=e[r9]||e,n=e[r7]||{};for(let e in t){let i=t[e];this._createAsyncPropData(e,n[e]),this._updateAsyncProp(e,i),t[e]=this.getAsyncProp(e)}for(let e in i){let t=i[e];this._createAsyncPropData(e,n[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if("string"==typeof t&&(t=this._fetch(e,t)),t instanceof Promise)return void this._watchPromise(e,t);if(cN(t))return void this._resolveAsyncIterable(e,t);this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps)for(let e in this.oldAsyncProps=Object.create(this.oldProps),this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}_didAsyncInputValueChange(e,t){let i=this.asyncProps[e];return t!==i.resolvedValue&&t!==i.lastValue&&(i.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let i=this.asyncProps[e];i&&(t=this._postProcessValue(i,t),i.resolvedValue=t,i.pendingLoadCount++,i.resolvedLoadCount=i.pendingLoadCount)}_setAsyncPropValue(e,t,i){let n=this.asyncProps[e];n&&i>=n.resolvedLoadCount&&void 0!==t&&(this._freezeAsyncOldProps(),n.resolvedValue=t,n.resolvedLoadCount=i,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let i=this.asyncProps[e];if(i){i.pendingLoadCount++;let n=i.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(i,t),this._setAsyncPropValue(e,t,n),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if("data"!==e)return void this._setPropValue(e,t);let i=this.asyncProps[e];if(!i)return;i.pendingLoadCount++;let n=i.pendingLoadCount,r=[],s=0;for await(let i of t){if(!this.component)return;let{dataTransform:t}=this.component.props;Object.defineProperty(r=t?t(i,r):r.concat(i),"__diff",{enumerable:!1,value:[{startRow:s,endRow:r.length}]}),s=r.length,this._setAsyncPropValue(e,r,n)}this._onResolve(e,r)}_postProcessValue(e,t){let i=e.type;return i&&this.component&&(i.release&&i.release(e.resolvedValue,i,this.component),i.transform)?i.transform(t,i,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let i=this.component&&this.component.props[r5];this.asyncProps[e]={type:i&&i[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}}class uK extends uX{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1,this.disabledPickingIndices=[]}get layer(){return this.component}_fetch(e,t){let i=this.layer,n=i?.props.fetch;return n?n(t,{propName:e,layer:i}):super._fetch(e,t)}_onResolve(e,t){let i=this.layer;if(i){let n=i.props.onDataLoad;"data"===e&&n&&n(t,{propName:e,layer:i})}}_onError(e,t){let i=this.layer;i&&i.raiseError(t,`loading ${e} of ${this.layer}`)}}let uJ=Object.freeze([]),uQ=iM(({oldViewport:e,viewport:t})=>e.equals(t)),u0=new Uint8ClampedArray(0);function u1(e){return e.rowIndexes||e.pickingColors||e.instancePickingColors}function u2(e){return e.rowIndexes}function u3(e){return e.pickingColors||e.instancePickingColors}let u4={data:{type:"data",value:uJ,async:!0},dataComparator:{type:"function",value:null,optional:!0},_dataDiff:{type:"function",value:e=>e&&e.__diff,optional:!0},dataTransform:{type:"function",value:null,optional:!0},onDataLoad:{type:"function",value:null,optional:!0},onError:{type:"function",value:null,optional:!0},fetch:{type:"function",value:(e,{propName:t,layer:i,loaders:n,loadOptions:r,signal:s})=>{let{resourceManager:o}=i.context;r=r||i.getLoadOptions(),n=n||i.props.loaders,s&&(r={...r,core:{...r?.core,fetch:{...r?.core?.fetch,signal:s}}});let a=o.contains(e);return(a||r||(o.add({resourceId:e,data:oR(e,n),persistent:!1}),a=!0),a)?o.subscribe({resourceId:e,onChange:e=>i.internalState?.reloadAsyncProp(t,e),consumerId:i.id,requestId:t}):oR(e,n,r)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:"number",min:0,max:1,value:1},operation:"draw",onHover:{type:"function",value:null,optional:!0},onClick:{type:"function",value:null,optional:!0},onDragStart:{type:"function",value:null,optional:!0},onDrag:{type:"function",value:null,optional:!0},onDragEnd:{type:"function",value:null,optional:!0},coordinateSystem:"default",coordinateOrigin:{type:"array",value:[0,0,0],compare:!0},modelMatrix:{type:"array",value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:"XYZ",colorFormat:"RGBA",parameters:{type:"object",value:{},optional:!0,compare:2},loadOptions:{type:"object",value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:"array",value:[],optional:!0,ignore:!0},getPolygonOffset:{type:"function",value:({layerIndex:e})=>[0,-(100*e)]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:"accessor",value:[0,0,128,128]}};class u6 extends uZ{constructor(){super(...arguments),this.internalState=null,this.lifecycle="Awaiting state",this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,"layerName")?this.layerName:""}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){let e=this.constructor.layerName||this.constructor.name;return`${e}({id: '${this.props.id}'})`}project(e){ar(this.internalState);let t=this.internalState.viewport||this.context.viewport,[i,n,r]=rz(uj(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),t.pixelProjectionMatrix);return 2===e.length?[i,n]:[i,n,r]}unproject(e){return ar(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return ar(this.internalState),function(e,t){let{viewport:i,coordinateSystem:n,coordinateOrigin:r,modelMatrix:s,fromCoordinateSystem:o,fromCoordinateOrigin:a}=function(e){let{viewport:t,modelMatrix:i,coordinateOrigin:n}=e,{coordinateSystem:r,fromCoordinateSystem:s,fromCoordinateOrigin:o}=e;return"default"===r&&(r=t.isGeospatial?"lnglat":"cartesian"),void 0===s?s=r:"default"===s&&(s=t.isGeospatial?"lnglat":"cartesian"),void 0===o&&(o=n),{viewport:t,coordinateSystem:r,coordinateOrigin:n,modelMatrix:i,fromCoordinateSystem:s,fromCoordinateOrigin:o}}(t),{autoOffset:l=!0}=t,{geospatialOrigin:c=uF,shaderCoordinateOrigin:u=uF,offsetMode:h=!1}=l?iR(i,n,r):{},d=uj(e,{viewport:i,modelMatrix:s,coordinateSystem:o,coordinateOrigin:a,offsetMode:h});if(h){let e=i.projectPosition(c||u);rw.sub(d,d,e)}return d}(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return!!this.internalState&&!this.internalState.isAsyncPropLoading()}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return"default"===e||"lnglat"===e||"cartesian"===e}onHover(e,t){return!!this.props.onHover&&(this.props.onHover(e,t)||!1)}onClick(e,t){return!!this.props.onClick&&(this.props.onClick(e,t)||!1)}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){ar(e instanceof Uint8Array);let[t,i,n]=e;return t+256*i+65536*n-1}getNumInstances(){if(Number.isFinite(this.props.numInstances))return this.props.numInstances;if(this.state&&void 0!==this.state.numInstances)return this.state.numInstances;var e,t,i=this.props.data;if(null===(e=i)||"object"!=typeof e)throw Error("count(): argument not an object");if("function"==typeof i.count)return i.count();if(Number.isFinite(i.size))return i.size;if(Number.isFinite(i.length))return i.length;if(null!==(t=i)&&"object"==typeof t&&t.constructor===Object)return Object.keys(i).length;throw Error("count(): argument not a container")}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds(["positions","instancePositions"])}getShaders(e){for(let t of(e=uz(e,{disableWarnings:!0,modules:this.context.defaultShaderModules}),this.props.extensions))e=uz(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:i}=e.changeFlags;if(i&&t)if(Array.isArray(i))for(let e of i)t.invalidateAll(e);else t.invalidateAll();if(t){let{props:i}=e,n=this.internalState.hasPickingBuffer,r=Number.isInteger(i.highlightedObjectIndex)||!!i.pickable||i.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(n!==r){this.internalState.hasPickingBuffer=r;let e=u1(t.attributes);e&&(r&&e.constant&&(e.constant=!1,t.invalidate(e.id)),e.value||r||(e.constant=!0,e.value=u2(t.attributes)?[0xffffff]:[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:i}){let{index:n}=e;return n>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[n]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return!!this.internalState&&(this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()))}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,t&&uQ({oldViewport:t,viewport:e})||(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e="all"){let t=this.getAttributeManager();t&&("all"===e?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let i in e)e[i].layoutChanged()&&(t=!0);for(let i of this.getModels())this._setModelAttributes(i,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,i=this.getNumInstances(),n=this.getStartIndices();e.update({data:t.data,numInstances:i,startIndices:n,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let r=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(r)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),i=Object.create(this.props);for(let e in t)Object.defineProperty(i,e,{value:t[e]});return i}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let i=Math.floor(u0.length/4);this.internalState.usesPickingColorCache=!0;let n=t>0&&0===u0[0];if(i<t||n){t>0xffffff&&tT.warn("Layer has too many data objects. Picking might not be able to distinguish all objects.")();let e=Math.floor((u0=oB.allocate(u0,t,{size:4,copy:!0,maxCount:Math.max(t,0xffffff)})).length/4),r=[0,0,0],s=n?0:i;for(let t=s;t<e;t++)this.encodePickingColor(t,r),u0[4*t+0]=r[0],u0[4*t+1]=r[1],u0[4*t+2]=r[2],u0[4*t+3]=0}e.value=u0.subarray(0,4*t)}_setModelAttributes(e,t,i=!1){if(!Object.keys(t).length)return;let n=this.getAttributeManager();if(n?.hasBufferGroups())return void this._setGroupedModelAttributes(e,n,t);if(i){let i=this.getAttributeManager();e.setBufferLayout(i.getBufferLayouts(e)),t=i.getAttributes()}let r=e.userData?.excludeAttributes||{},s={},o={};for(let i in t){if(r[i])continue;let n=t[i].getValue();for(let r in n){let a=n[r];a instanceof a1.Buffer?t[i].settings.isIndexed?e.setIndexBuffer(a):s[r]=a:a&&(o[r]=a)}}e.setAttributes(s),e.setConstantAttributes(o)}_setGroupedModelAttributes(e,t,i){let n=e.userData?.excludeAttributes||{},r=t.getBufferGroupBindings(i,e,n);e.setBufferLayout(r.bufferLayouts);let s={...r.buffers},o={},a=t.getAttributes();for(let t in a){if(n[t]||r.groupedAttributeIds.has(t))continue;let i=a[t],l=i.getValue();for(let t in l){let n=l[t];n instanceof a1.Buffer?i.settings.isIndexed?e.setIndexBuffer(n):s[t]=n:n&&(o[t]=n)}}e.setAttributes(s),e.setConstantAttributes(o)}disablePickingIndex(e){let t=this.props.data;if(!("attributes"in t))return void this._disablePickingIndex(e);let i=this.getAttributeManager().attributes,n=u2(i),r=u3(i),s=n&&t.attributes&&t.attributes[n.id];if(s&&s.value){let i=s.value;for(let r=0;r<t.length;r++)i[n.getVertexOffset(r)]===e&&this._disablePickingIndex(r);return}let o=r&&t.attributes&&t.attributes[r.id];if(o&&o.value){let i=o.value,n=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=r.getVertexOffset(e);i[t]===n[0]&&i[t+1]===n[1]&&i[t+2]===n[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let t=this.getAttributeManager().attributes,i=u2(t);if(i){let t=i.getVertexOffset(e),n=new Uint32Array(i.getVertexOffset(e+1)-t);n.fill(0xffffff),i.buffer.write(n,t*n.BYTES_PER_ELEMENT);return}let n=u3(t);if(!n){var r;this.internalState&&(r=this.internalState.disabledPickingIndices,10===r.length?tT.warn("pickMultipleObjects can only exclude 10 previously picked objects for layers without picking buffers")():r.push(e));return}let s=n.getVertexOffset(e),o=n.getVertexOffset(e+1);n.buffer.write(new Uint8Array(o-s),s)}restorePickingColors(){let e=this.getAttributeManager().attributes,t=u1(e);if(!t){this.internalState&&(this.internalState.disabledPickingIndices.length=0);return}let i=u3(e);this.internalState.usesPickingColorCache&&i&&i.value.buffer!==u0.buffer&&(i.value=u0.subarray(0,i.value.length)),t.updateSubBuffer({startOffset:0})}_initialize(){ar(!this.internalState),sn("layer.initialize",this);let e=this._getAttributeManager();for(let t of(this.internalState=new uK({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(tT.deprecated("layer.state.attributeManager","layer.getAttributeManager()")(),e)}),this.internalState.uniformTransitions=new uk(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context),this.props.extensions))t.initializeState.call(this,this.context,t);this.setChangeFlags({dataChanged:"init",propsChanged:"init",viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){sn("layer.matched",this,this===e);let{state:t,internalState:i}=e;this!==e&&(this.internalState=i,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(sn("layer.update",this,e),!e)return;this.context.stats.get("Layer updates").incrementCount();let t=this.props,i=this.context,n=this.internalState,r=i.viewport,s=this._updateUniformTransition();n.propsInTransition=s,i.viewport=n.viewport||r,this.props=s;try{let e=this._getUpdateParams(),t=this.getModels();if(i.device)this.updateState(e);else try{this.updateState(e)}catch(e){}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let n=this.getModels()[0]!==t[0];this._postUpdate(e,n)}finally{i.viewport=r,this.props=t,this._clearChangeFlags(),n.needsUpdate=!1,n.resetOldProps()}}_finalize(){for(let e of(sn("layer.finalize",this),this.finalizeState(this.context),this.props.extensions))e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:i={},parameters:n={}}){this._updateAttributeTransition();let r=this.props,s=this.context;this.props=this.internalState.propsInTransition||r;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:r}=this.props,o=r&&r(i)||[0,0];s.device instanceof cA.WebGLDevice&&s.device.setParametersWebGL({polygonOffset:o});let a=s.device instanceof cA.WebGLDevice?null:function(e){let{blendConstant:t,...i}=e;return t?{pipelineParameters:i,renderPassParameters:{blendConstant:t}}:{pipelineParameters:i}}(n);if(function(e,t,i,n){for(let r of e)"webgpu"===r.device.type?(function(e,t){let i=t.props.framebuffer||(t.framebuffer??null);if(!i)return;let n=i.colorAttachments.map(e=>e?.texture?.format??null),r=i.depthStencilAttachment?.texture?.format;(!function(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(e.props.colorAttachmentFormats,n)||e.props.depthStencilAttachmentFormat!==r)&&(e.props.colorAttachmentFormats=n,e.props.depthStencilAttachmentFormat=r,e._setPipelineNeedsUpdate("attachment formats"))}(r,t),r.setParameters({...r.parameters,...n?.pipelineParameters})):r.setParameters(i)}(this.getModels(),e,n,a),s.device instanceof cA.WebGLDevice)s.device.withParametersWebGL(n,()=>{let r={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:n,context:s};for(let e of this.props.extensions)e.draw.call(this,r,e);this.draw(r)});else{a?.renderPassParameters&&e.setParameters(a.renderPassParameters);let r={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:n,context:s};for(let e of this.props.extensions)e.draw.call(this,r,e);this.draw(r)}}finally{this.props=r}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let i in e)if(e[i]){let n=!1;if("dataChanged"===i){let r=e[i],s=t[i];r&&Array.isArray(s)&&(t.dataChanged=Array.isArray(r)?s.concat(r):r,n=!0)}t[i]||(t[i]=e[i],n=!0),n&&sn("layer.changeFlag",this,i,e)}let i=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=i,t.somethingChanged=i||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let i,n,r,s=(i=uI({newProps:e,oldProps:t,propTypes:e[r5],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),n=function(e,t){if(null===t)return"oldProps is null, initial diff";let i=!1,{dataComparator:n,_dataDiff:r}=e;return n?n(e.data,t.data)||(i="Data comparator detected a change"):e.data!==t.data&&(i="A new data container was supplied"),i&&r&&(i=r(e.data,t.data)||i),i}(e,t),r=!1,n||(r=function(e,t){if(null===t||"all"in e.updateTriggers&&uR(e,t,"all"))return{all:!0};let i={},n=!1;for(let r in e.updateTriggers)"all"!==r&&uR(e,t,r)&&(i[r]=!0,n=!0);return!!n&&i}(e,t)),{dataChanged:n,propsChanged:i,updateTriggersChanged:r,extensionsChanged:function(e,t){if(null===t)return!0;let i=t.extensions,{extensions:n}=e;if(n===i)return!1;if(!i||!n||n.length!==i.length)return!0;for(let e=0;e<n.length;e++)if(!n[e].equals(i[e]))return!0;return!1}(e,t),transitionsChanged:function(e,t){if(!e.transitions)return!1;let i={},n=e[r5],r=!1;for(let s in e.transitions){let o=n[s],a=o&&o.type;("number"===a||"color"===a||"array"===a)&&uO(e[s],t[s],o)&&(i[s]=!0,r=!0)}return!!r&&i}(e,t)});if(s.updateTriggersChanged)for(let e in s.updateTriggersChanged)s.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(s.transitionsChanged)for(let i in s.transitionsChanged)this.internalState.uniformTransitions.add(i,t[i],e[i],e.transitions?.[i]);return this.setChangeFlags(s)}validateProps(){!function(e){let t=e[r5];for(let i in t){let n=t[i],{validate:r}=n;if(r&&!r(e[i],n))throw Error(`Invalid prop ${i}: ${e[i]}`)}}(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:i}=this.props;e.picked&&"function"==typeof i&&(t.highlightColor=i(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new uE(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:i,oldProps:n}=e,r=this.state.model;r?.isInstanced&&r.setInstanceCount(this.getNumInstances());let{autoHighlight:s,highlightedObjectIndex:o,highlightColor:a}=i;if(t||n.autoHighlight!==s||n.highlightedObjectIndex!==o||n.highlightColor!==a){let e={};Array.isArray(a)&&(e.highlightColor=a),(t||n.autoHighlight!==s||o!==n.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t=this.internalState.needsRedraw&&this.id;let i=this.getAttributeManager(),n=!!i&&i.getNeedsRedraw(e);if(t=t||n)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}}u6.defaultProps=u4,u6.layerName="Layer";let u5=u6;class u8 extends u5{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:i}=this.props;return i&&i[e]&&i[e].type||t}getSubLayerRow(e,t,i){return e.__source={parent:this,object:t,index:i},e}getSubLayerAccessor(e){if("function"==typeof e){let t={index:-1,data:this.props.data,target:[]};return(i,n)=>i&&i.__source?(t.index=i.__source.index,e(i.__source.object,t)):e(i,n)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:i,visible:n,parameters:r,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:u,wrapLongitude:h,positionFormat:d,modelMatrix:p,extensions:f,fetch:g,operation:m,_subLayerProps:v}=this.props,_={id:"",updateTriggers:{},opacity:t,pickable:i,visible:n,parameters:r,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:u,wrapLongitude:h,positionFormat:d,modelMatrix:p,extensions:f,fetch:g,operation:m},y=v&&e.id&&v[e.id],b=y&&y.updateTriggers,x=e.id||"sublayer";if(y){let t=this.props[r5],i=e.type?e.type._propTypes:{};for(let e in y){let n=i[e]||t[e];n&&"accessor"===n.type&&(y[e]=this.getSubLayerAccessor(y[e]))}}for(let t of(Object.assign(_,e,y),_.id=`${this.props.id}-${x}`,_.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b},f)){let e=t.getSubLayerProps.call(this,t);e&&Object.assign(_,e,{updateTriggers:Object.assign(_.updateTriggers,e.updateTriggers)})}return _}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let i=this.internalState.subLayers,n=!i||this.needsUpdate();for(let e of(n&&(i=sr(this.renderLayers(),Boolean),this.internalState.subLayers=i),sn("compositeLayer.renderLayers",this,n,i),i))e.parent=this}}u8.layerName="CompositeLayer";let u7=u8;var u9=e.i(34810),he=e.i(99023);let ht=`\
layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,hi={name:"icon",vs:ht,fs:ht,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},hn=`\
#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,hr=`\
#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hs=`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = geometry.pickingColor;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`,ho=()=>{},ha={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},hl={x:0,y:0,width:0,height:0};function hc(e){return e&&(e.id||e.url)}function hu(e){let{device:t}=e;"webgl"===t.type?e.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(e)}function hh(e,t,i){for(let n=0;n<t.length;n++){let{icon:r,xOffset:s}=t[n];e[hc(r)]={...r,x:s,y:i}}}class hd{constructor(e,{onUpdate:t=ho,onError:i=ho}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=4,this._canvasWidth=1024,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=i}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?hc(e):e;return this._mapping[t]||hl}setProps({loadOptions:e,autoPacking:t,iconAtlas:i,iconMapping:n,textureParameters:r}){e&&(this._loadOptions=e),void 0!==t&&(this._autoPacking=t),n&&(this._mapping=n),i&&(this._texture?.delete(),this._texture=null,this._externalTexture=i),r&&(this._samplerParameters=r)}get isLoaded(){return 0===this._pendingCount}packIcons(e,t){if(!this._autoPacking||"undefined"==typeof document)return;let i=Object.values(function(e,t,i){if(!e||!t)return null;i=i||{};let n={},{iterable:r,objectInfo:s}=cD(e);for(let e of r){s.index++;let r=t(e,s),o=hc(r);if(!r)throw Error("Icon is missing.");if(!r.url)throw Error("Icon url is missing.");n[o]||i[o]&&r.url===i[o].url||(n[o]={...r,source:e,sourceIndex:s.index})}return n}(e,t,this._mapping)||{});if(i.length>0){let{mapping:e,xOffset:t,yOffset:n,rowHeight:r,canvasHeight:s}=function({icons:e,buffer:t,mapping:i={},xOffset:n=0,yOffset:r=0,rowHeight:s=0,canvasWidth:o}){let a=[];for(let l=0;l<e.length;l++){let c=e[l];if(!i[hc(c)]){let{height:e,width:l}=c;n+l+t>o&&(hh(i,a,r),n=0,r=s+r+t,s=0,a=[]),a.push({icon:c,xOffset:n}),n=n+l+t,s=Math.max(s,e)}}return a.length>0&&hh(i,a,r),{mapping:i,rowHeight:s,xOffset:n,yOffset:r,canvasWidth:o,canvasHeight:Math.pow(2,Math.ceil(Math.log2(s+r+t)))}}({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=r,this._mapping=e,this._xOffset=t,this._yOffset=n,this._canvasHeight=s,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||ha,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=function(e,t,i,n){let{width:r,height:s,device:o}=e,a=o.createTexture({format:"rgba8unorm",width:t,height:i,sampler:n,mipLevels:o.getMipLevelCount(t,i)}),l=o.createCommandEncoder();l.copyTextureToTexture({sourceTexture:e,destinationTexture:a,width:r,height:s});let c=l.finish();return o.submit(c),hu(a),e.destroy(),a}(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||ha)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){let t=this._canvas.getContext("2d",{willReadFrequently:!0});for(let i of e)this._pendingCount++,oR(i.url,this._loadOptions).then(e=>{let n=hc(i),r=this._mapping[n],{x:s,y:o,width:a,height:l}=r,{image:c,width:u,height:h}=function(e,t,i,n){let r=Math.min(i/t.width,n/t.height),s=Math.floor(t.width*r),o=Math.floor(t.height*r);return 1===r?{image:t,width:s,height:o}:(e.canvas.height=o,e.canvas.width=s,e.clearRect(0,0,s,o),e.drawImage(t,0,0,t.width,t.height,0,0,s,o),{image:e.canvas,width:s,height:o})}(t,e,a,l),d=s+(a-u)/2,p=o+(l-h)/2;this._texture?.copyExternalImage({image:c,x:d,y:p,width:u,height:h}),r.x=d,r.y=p,r.width=u,r.height=h,this._texture&&hu(this._texture),this.onUpdate(u!==a||h!==l)}).catch(e=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}}let hp=[0,0,0,255],hf={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:e=>e.position},getIcon:{type:"accessor",value:e=>e.icon},getColor:{type:"accessor",value:hp},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}};class hg extends u5{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:hn,fs:hr,source:hs.replace("PICKING_COLOR_ATTRIBUTE",e?"@location(10) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",e?"picking_getPickingColorFromIndex(inp.rowIndexes)":"picking_getPickingColorFromIndex(inp.instanceIndex)"),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[iq,ei,r1,hi]})}initializeState(){this.state={iconManager:new hd(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getSize",defaultValue:1},instanceIconDefs:{size:7,bufferGroup:"icon-instance-data",accessor:"getIcon",transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,bufferGroup:"icon-instance-data",accessor:"getColor",defaultValue:hp},instanceAngles:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,bufferGroup:"icon-instance-data",accessor:"getPixelOffset"},...this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:n}=e,r=this.getAttributeManager(),{iconAtlas:s,iconMapping:o,data:a,getIcon:l,textureParameters:c}=t,{iconManager:u}=this.state;if("string"==typeof s)return;let h=s||this.internalState.isAsyncPropLoading("iconAtlas");u.setProps({loadOptions:t.loadOptions,autoPacking:!h,iconAtlas:s,iconMapping:h?o:null,textureParameters:c}),h?i.iconMapping!==t.iconMapping&&r.invalidate("getIcon"):(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getIcon))&&u.packIcons(a,l),n.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),r.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){this._drawModel(this.state.model)}_drawModel(e){let{sizeScale:t,sizeBasis:i,sizeMinPixels:n,sizeMaxPixels:r,sizeUnits:s,billboard:o,alphaCutoff:a}=this.props,{iconManager:l}=this.state,c=l.getTexture();if(c){let l={iconsTexture:c,iconsTextureDim:[c.width,c.height],sizeUnits:iw[s],sizeScale:t,sizeBasis:+("height"===i),sizeMinPixels:n,sizeMaxPixels:r,billboard:o,alphaCutoff:a};e.shaderInputs.setProps({icon:l}),e.draw(this.context.renderPass)}}_getModel(e=this.props.id){return new u9.Model(this.context.device,{...this.getShaders(),id:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new he.Geometry({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([-1,-1,1,-1,-1,1,1,1])}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):tT.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:i,width:n,height:r,mask:s,anchorX:o=n/2,anchorY:a=r/2}=this.state.iconManager.getIconMapping(e);return[n/2-o,r/2-a,t,i,n,r,+!!s]}}hg.defaultProps=hf,hg.layerName="IconLayer";let hm=hg,hv=`\
layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,h_={name:"scatterplot",vs:hv,fs:hv,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},hy=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,hb=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hx=`\
// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
  @location(6) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  // WGSL selects the second value when the condition is true, so keep the antialiased path second.
  let edgePadding = select(
    1.0,
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
    geometry.position = vec4<f32>(
      geometry.position.xy + project_pixel_size_vec2(offset.xy),
      geometry.position.zw
    );
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offset
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    step(distToCenter, varyings.outerRadiusPixels),
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  clip_filterColor(varyings.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`,hw={name:"clip",source:`\
struct ClipUniforms {
  enabled: i32,
  mode: i32,
  bounds: vec4<f32>,
};

@group(2) @binding(auto) var<uniform> clipUniforms: ClipUniforms;

fn clip_isInBounds(coordinates: vec2<f32>) -> bool {
  return coordinates.x >= clipUniforms.bounds.x &&
    coordinates.y >= clipUniforms.bounds.y &&
    coordinates.x < clipUniforms.bounds.z &&
    coordinates.y < clipUniforms.bounds.w;
}

fn clip_filterPosition(position: ptr<function, vec4<f32>>, instanceCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == 1 &&
    !clip_isInBounds(instanceCoordinates)
  ) {
    *position = vec4<f32>(2.0, 2.0, 2.0, 1.0);
  }
}

fn clip_filterColor(geometryCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == 0 &&
    !clip_isInBounds(geometryCoordinates)
  ) {
    discard;
  }
}
`,props:{},uniforms:{},bindingLayout:[{name:"clip",group:2}],uniformTypes:{enabled:"i32",mode:"i32",bounds:"vec4<f32>"},defaultUniforms:{enabled:0,mode:0,bounds:[0,0,1,1]},getUniforms(e={}){let t={};return void 0!==e.enabled&&(t.enabled=+!!e.enabled),void 0!==e.mode&&(t.mode=+("instance"===e.mode)),void 0!==e.bounds&&(t.bounds=e.bounds),t}},hP=[0,0,0,255],hC={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:e=>e.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:hP},getLineColor:{type:"accessor",value:hP},getLineWidth:{type:"accessor",value:1},getPixelOffset:{type:"accessor",value:[0,0]},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class hM extends u5{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:hy,fs:hb,source:hx.replace("PICKING_COLOR_ATTRIBUTE",e?"@location(8) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",e?"picking_getPickingColorFromIndex(attributes.rowIndexes)":"picking_getPickingColorFromIndex(attributes.instanceIndex)"),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[iq,ei,r1,h_,..."webgpu"===this.context.device.type?[hw]:[]]})}initializeState(){let e=this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{};this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset",bufferGroup:"scatterplot-instance-data"},...e})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:i,radiusMinPixels:n,radiusMaxPixels:r,stroked:s,filled:o,billboard:a,antialiasing:l,lineWidthUnits:c,lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:d}=this.props,p={stroked:s,filled:o,billboard:a,antialiasing:l,radiusUnits:iw[t],radiusScale:i,radiusMinPixels:n,radiusMaxPixels:r,lineWidthUnits:iw[c],lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:d},f=this.state.model;f.shaderInputs.setProps({scatterplot:p}),f.draw(this.context.renderPass)}_getModel(){return new u9.Model(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new he.Geometry({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0])}}}),isInstanced:!0})}}hM.defaultProps=hC,hM.layerName="ScatterplotLayer";let hS=`\
layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,hE={name:"sdf",vs:hS,fs:hS,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}},hL={none:0,start:1,center:2,end:3},hA={name:"text",vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${hL.start}
#define ALIGN_MODE_CENTER ${hL.center}
#define ALIGN_MODE_END ${hL.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t="none",contentAlignVertical:i="none",fontSize:n,viewport:r})=>({cutoffPixels:e,align:[hL[t],hL[i]],fontSize:n,flipY:r?.flipY??!1}),uniformTypes:{cutoffPixels:"vec2<f32>",align:"vec2<i32>",fontSize:"f32",flipY:"f32"}},hT=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in float rowIndexes;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,hk=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hI=function({collision:e=!1}={}){return`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32
};

struct SdfUniforms {
  gamma: f32,
  enabled: f32,
  buffer: f32,
  outlineBuffer: f32,
  outlineColor: vec4<f32>
};

${e?`\
struct CollisionUniforms {
  sort: i32,
  enabled: i32
};
`:""}

const ALIGN_MODE_START: i32 = 1;
const ALIGN_MODE_CENTER: i32 = 2;
const ALIGN_MODE_END: i32 = 3;

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var<uniform> text: TextUniforms;
@group(0) @binding(auto) var<uniform> sdf: SdfUniforms;
${e?"@group(0) @binding(auto) var<uniform> collision: CollisionUniforms;":""}
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;
${e?`\
@group(0) @binding(auto) var collision_texture : texture_2d<f32>;
`:""}

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  return rotation * vertex;
}

fn get_pixel_offset_from_alignment(
  anchor: f32,
  extent: f32,
  clipStart: f32,
  clipEnd: f32,
  mode: i32
) -> f32 {
  if (clipEnd < clipStart) {
    return 0.0;
  }
  if (mode == ALIGN_MODE_START) {
    return max(-(anchor + clipStart), 0.0);
  }
  if (mode == ALIGN_MODE_CENTER) {
    let minValue = max(0.0, anchor + clipStart);
    let maxValue = min(extent, anchor + clipEnd);
    if (minValue < maxValue) {
      return (minValue + maxValue) / 2.0 - anchor;
    }
    return 0.0;
  }
  if (mode == ALIGN_MODE_END) {
    return min(extent - (anchor + clipEnd), 0.0);
  }
  return 0.0;
}

${e?`\
fn collision_match(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  let textureSize = vec2<i32>(textureDimensions(collision_texture));
  let pixelCoords = clamp(
    vec2<i32>(texCoords * vec2<f32>(textureSize)),
    vec2<i32>(0),
    textureSize - vec2<i32>(1)
  );
  let collisionPickingColor = textureLoad(collision_texture, pixelCoords, 0);
  let delta = dot(abs(collisionPickingColor.rgb - pickingColor), vec3<f32>(1.0));
  return step(delta, 0.001);
}

fn collision_is_visible(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  if (collision.enabled == 0) {
    return 1.0;
  }

  var accumulator = 0.0;
  let stepSize = vec2<f32>(1.0) / project.viewportSize;

  for (var i: i32 = -2; i <= 2; i = i + 1) {
    for (var j: i32 = -2; j <= 2; j = j + 1) {
      let delta = vec2<f32>(f32(j), f32(i)) * stepSize;
      accumulator = accumulator + collision_match(texCoords + delta, pickingColor);
    }
  }

  return pow(accumulator / 25.0, 2.2);
}
`:""}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  @location(10) rowIndexes: u32,
  @location(11) instanceClipRect: vec4<f32>,
  ${e?"@location(12) collisionPriorities: f32,":""}
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  var pos: vec4<f32>;
  var anchorPosScreen: vec2<f32>;
  if (icon.billboard != 0) {
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = pos.xy / pos.w;

    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    let anchorPos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = anchorPos.xy / anchorPos.w;
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offsetCommon);
  }

  anchorPosScreen = vec2<f32>(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 *
    project.viewportSize / project.devicePixelRatio;
  var xy = project_size_vec2(inp.instanceClipRect.xy) * project.scale;
  var wh = project_size_vec2(inp.instanceClipRect.zw) * project.scale;

  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (text.align.x > 0 || text.align.y > 0) {
    let viewportPixels = project.viewportSize / project.devicePixelRatio;
    let scrollPixels = vec2<f32>(
      get_pixel_offset_from_alignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
      -get_pixel_offset_from_alignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
    );
    pixelOffset = pixelOffset + scrollPixels;
    let scrollClipOffset = project_pixel_size_to_clipspace(scrollPixels);
    pos.x = pos.x + scrollClipOffset.x;
    pos.y = pos.y + scrollClipOffset.y;
  }

  if (inp.instanceClipRect.z >= 0.0) {
    if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.x > 0.0) {
      let viewportWidth = project.viewportSize.x / project.devicePixelRatio;
      let left = max(anchorPosScreen.x + xy.x, 0.0);
      let right = min(anchorPosScreen.x + xy.x + wh.x, viewportWidth);
      if (right - left < text.cutoffPixels.x) {
        pos = vec4<f32>(0.0);
      }
    }
  }
  if (inp.instanceClipRect.w >= 0.0) {
    if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.y > 0.0) {
      let viewportHeight = project.viewportSize.y / project.devicePixelRatio;
      let top = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
      let bottom = min(anchorPosScreen.y - xy.y, viewportHeight);
      if (bottom - top < text.cutoffPixels.y) {
        pos = vec4<f32>(0.0);
      }
    }
  }

  ${e?`\
  if (collision.sort != 0) {
    pos.z = -0.001 * inp.collisionPriorities * pos.w;
  }
  `:""}

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.position = pos;
  outp.vColor = inp.instanceColors;
  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);
  var alpha = texColor.a;
  var color = inp.vColor;

  if (sdf.enabled > 0.5) {
    let distance = alpha;
    alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);

    if (sdf.outlineBuffer > 0.0) {
      let inFill = alpha;
      let inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
      color = mix(sdf.outlineColor, inp.vColor, inFill);
      alpha = inBorder;
    }
  } else if (inp.vColorMode == 0.0) {
    color = texColor;
  }

  var a = alpha * color.a * layer.opacity;
  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  ${e?`\
  let collisionFade = collision_is_visible(inp.position.xy / project.viewportSize, inp.pickingColor);
  a = a * collisionFade;
  if (a <= 0.0001) {
    discard;
  }
  `:""}

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(color.rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}();class hO extends hm{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,hA,hE],vs:hT,fs:hk,source:hI}}initializeState(){super.initializeState();let e=this.getAttributeManager();e.attributes.instanceIconDefs.settings.update=this.calculateInstanceIconDefs,e.addInstanced({rowIndexes:{type:"uint32",size:1,bufferGroup:"icon-instance-data",accessor:(e,{index:t})=>t},instanceClipRect:{size:4,bufferGroup:"icon-instance-data",accessor:"getContentBox",defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:n}=e,{outlineColor:r}=t;if(n.extensionsChanged){this.state.fillModel?.destroy();let e="webgpu"===this.context.device.type?this._getModel(`${this.props.id}-fill`):void 0;this.setState({fillModel:e,models:e?[this.state.model,e]:[this.state.model]})}if(n.updateTriggersChanged&&(n.updateTriggersChanged.getIcon||n.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate("instanceIconDefs"),r!==i.outlineColor){let e=[r[0]/255,r[1]/255,r[2]/255,(r[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&tT.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:i,fontSize:n,outlineWidth:r,contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a}=this.props,{outlineColor:l}=this.state,c=r?Math.max(i,.75*(1-r)):-1,u=this.state.model,h={buffer:.75,outlineBuffer:c,gamma:i,enabled:!!t,outlineColor:l},d={contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a,fontSize:n,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:h,text:d}),super.draw(e),t&&r){let{iconManager:e}=this.state;if(e.getTexture()){let e=this.state.fillModel||u;e.shaderInputs.setProps({sdf:{...h,outlineBuffer:.75},text:d}),this._drawModel(e)}}}calculateInstanceIconDefs(e,{startRow:t,endRow:i}){let{data:n,getIcon:r,getIconOffsets:s}=this.props,o=e.getVertexOffset(t),a=e.value,{iterable:l,objectInfo:c}=cD(n,t,i);for(let t of l){c.index++;let i=r(t,c),n=s(t,c);if(i){let t=0;for(let r of Array.from(i)){let i=super.getInstanceIconDef(r);i[0]=n[2*t],i[1]+=n[2*t+1],i[6]=1,a.set(i,o),o+=e.size,t++}}}}}hO.defaultProps={getIconOffsets:{type:"accessor",value:e=>e.offsets},getContentBox:{type:"accessor",value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none"},hO.layerName="MultiIconLayer";let hR=new Float64Array(256);for(let e=0;e<256;e++){let t=.5-Math.pow(e/255,1/2.2);hR[e]=t*Math.abs(t)}hR[255]=-1e20;class hz{constructor({fontSize:e=24,buffer:t=3,radius:i=8,cutoff:n=.25,fontFamily:r="sans-serif",fontWeight:s="normal",fontStyle:o="normal",lang:a=null}={}){this.buffer=t,this.radius=i,this.cutoff=n,this.lang=a;const l=this.size=e+4*t,c=this._createCanvas(l),u=this.ctx=c.getContext("2d",{willReadFrequently:!0});u.font=`${o} ${s} ${e}px ${r}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(l*l),this.gridInner=new Float64Array(l*l),this.f=new Float64Array(l),this.z=new Float64Array(l+1),this.v=new Uint16Array(l)}_createCanvas(e){if("undefined"!=typeof OffscreenCanvas)return new OffscreenCanvas(e,e);let t=document.createElement("canvas");return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:i,actualBoundingBoxDescent:n,actualBoundingBoxLeft:r,actualBoundingBoxRight:s}=this.ctx.measureText(e),o=Math.ceil(i),a=Math.floor(-r),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s)-a)),c=Math.max(0,Math.min(this.size-this.buffer,o+Math.ceil(n))),u=l+2*this.buffer,h=c+2*this.buffer,d=Math.max(u*h,0),p=new Uint8ClampedArray(d),f={data:p,width:u,height:h,glyphWidth:l,glyphHeight:c,glyphTop:o,glyphLeft:a,glyphAdvance:t};if(0===l||0===c)return f;let{ctx:g,buffer:m,gridInner:v,gridOuter:_}=this;this.lang&&(g.lang=this.lang),g.clearRect(m,m,l,c),g.fillText(e,m-a,m+o);let y=g.getImageData(m,m,l,c);_.fill(1e20,0,d),v.fill(0,0,d);let b=3;for(let e=0;e<c;e++){let t=(e+m)*u+m;for(let e=0;e<l;e++,b+=4,t++){let e=y.data[b];if(0===e)continue;let i=hR[e];_[t]=Math.max(0,i),v[t]=Math.max(0,-i)}}hF(_,0,0,u,h,u,this.f,this.v,this.z);let x=Math.min(m,1);hF(v,m-x,m-x,l+2*x,c+2*x,u,this.f,this.v,this.z);let w=255/this.radius,P=255*(1-this.cutoff);for(let e=0;e<d;e++){let t=Math.sqrt(_[e])-Math.sqrt(v[e]);p[e]=Math.round(P-w*t)}return f}}function hF(e,t,i,n,r,s,o,a,l){for(let c=t;c<t+n;c++)hB(e,i*s+c,s,r,o,a,l);for(let c=i;c<i+r;c++)hB(e,c*s+t,1,n,o,a,l)}function hB(e,t,i,n,r,s,o){s[0]=0,o[0]=-1e20,o[1]=1e20,r[0]=e[t];for(let a=1,l=0,c=0;a<n;a++){r[a]=e[t+a*i];let n=a*a;do{let e=s[l];c=(r[a]-r[e]+n-e*e)/(a-e)/2}while(c<=o[l]&&--l>-1)s[++l]=a,o[l]=c,o[l+1]=1e20}for(let a=0,l=0;a<n;a++){for(;o[l+1]<a;)l++;let n=s[l],c=a-n;e[t+a*i]=r[n]+c*c}}let hj=[];function hD(e,t,i,n){let r=0;for(let s=t;s<i;s++){let t=e[s];r+=n[t]?.advance||0}return r}function hN(e,t,i,n,r,s){let o=t,a=0;for(let l=t;l<i;l++){let t=hD(e,l,l+1,r);a+t>n&&(o<l&&s.push(l),o=l,a=0),a+=t}return a}class hV{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?this.delete(e):Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e)}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}}let hU={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:function(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},hG=new hV(3);function hW(e,t,i,n){e.font=`${n} ${i}px ${t}`,e.fillStyle="#000",e.textBaseline="alphabetic",e.textAlign="left"}class h${constructor(){this.props={...hU}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=function(e,t){let i;i=new Set("string"==typeof t?Array.from(t):t);let n=hG.get(e);if(!n)return i;for(let e in n.mapping)i.has(e)&&i.delete(e);return i}(this._key,this.props.characterSet),i=hG.get(this._key);if(i&&0===t.size){this._atlas!==i&&(this._atlas=i);return}let n=this._generateFontAtlas(t,i);this._atlas=n,hG.set(this._key,n)}_generateFontAtlas(e,t){let i,{fontFamily:n,fontWeight:r,fontSize:s,buffer:o,sdf:a,radius:l,cutoff:c}=this.props,u=t&&t.data;u||((u=document.createElement("canvas")).width=1024);let h=u.getContext("2d",{willReadFrequently:!0});hW(h,n,s,r);let d=e=>(function(e,t,i){if(void 0===i){let i=e.measureText("A");return i.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(i.fontBoundingBoxAscent),descent:Math.ceil(i.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:.9*t,descent:.3*t}}let n=e.measureText(i);return n.actualBoundingBoxAscent?{advance:n.width,width:Math.ceil(n.actualBoundingBoxRight-n.actualBoundingBoxLeft),ascent:Math.ceil(n.actualBoundingBoxAscent),descent:Math.ceil(n.actualBoundingBoxDescent)}:{advance:n.width,width:n.width,ascent:.9*t,descent:.3*t}})(h,s,e);this._getFontRenderer?i=this._getFontRenderer(this.props):a&&(i={measure:d,draw:function({fontSize:e,buffer:t,radius:i,cutoff:n,fontFamily:r,fontWeight:s}){let o=new hz({fontSize:e,buffer:t,radius:i,cutoff:n,fontFamily:r,fontWeight:`${s}`});return e=>{let{data:i,width:n,height:r}=o.draw(e),s=new ImageData(n,r);for(let e=0;e<i.length;e++)s.data[4*e+3]=i[e];return{data:s,left:t,top:t}}}(this.props)});let{mapping:p,canvasHeight:f,xOffset:g,yOffsetMin:m,yOffsetMax:v}=function({characterSet:e,measureText:t,buffer:i,maxCanvasWidth:n,mapping:r={},xOffset:s=0,yOffsetMin:o=0,yOffsetMax:a=0}){let l=s,c=o,u=a;for(let s of e)if(!r[s]){let{advance:e,width:o,ascent:a,descent:h}=t(s),d=a+h;l+o+2*i>n&&(l=0,c=u),r[s]={x:l+i,y:c+i,width:o,height:d,advance:e,anchorX:o/2,anchorY:a},l+=o+2*i,u=Math.max(u,c+d+2*i)}return{mapping:r,xOffset:l,yOffsetMin:c,yOffsetMax:u,canvasHeight:Math.pow(2,Math.ceil(Math.log2(u)))}}({measureText:e=>i?i.measure(e):d(e),buffer:o,characterSet:e,maxCanvasWidth:1024,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(u.height!==f){let e=u.height>0?h.getImageData(0,0,u.width,u.height):null;u.height=f,e&&h.putImageData(e,0,0)}if(hW(h,n,s,r),i)for(let t of e){let e=p[t],n=e.width,{data:r,left:s=0,top:o=0}=i.draw(t),a=e.x-s,l=e.y-o,c=Math.max(0,Math.round(a)),d=Math.max(0,Math.round(l)),f=Math.min(r.width,u.width-c),g=Math.min(r.height,u.height-d);h.putImageData(r,c,d,0,0,f,g),e.x=c,e.y=d,e.width=f,e.height=g,e.anchorX+=f/2-s-n/2,e.anchorY+=o}else for(let t of e){let e=p[t];h.fillText(t,e.x,e.y+e.anchorY)}let _=i?i.measure():d();return{baselineOffset:(_.ascent-_.descent)/2,xOffset:g,yOffsetMin:m,yOffsetMax:v,mapping:p,data:u,width:u.width,height:u.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:i,buffer:n,sdf:r,radius:s,cutoff:o}=this.props;return r?`${e} ${t} ${i} ${n} ${s} ${o}`:`${e} ${t} ${i} ${n}`}}let hq=`\
layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,hH={name:"textBackground",source:`\
struct TextBackgroundUniforms {
  billboard: f32,
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  borderRadius: vec4<f32>,
  padding: vec4<f32>,
  sizeUnits: i32,
  stroked: f32,
};

@group(0) @binding(auto) var<uniform> textBackground: TextBackgroundUniforms;
`,vs:hq,fs:hq,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}},hZ=`\
#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,hY=`\
#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hX=`\
struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32,
};

@group(0) @binding(auto) var<uniform> text: TextUniforms;

fn rotate_by_angle(vertex: vec2<f32>, angle: f32) -> vec2<f32> {
  let angleRadian = radians(angle);
  let cosine = cos(angleRadian);
  let sine = sin(angleRadian);
  let rotationMatrix = mat2x2<f32>(
    vec2<f32>(cosine, -sine),
    vec2<f32>(sine, cosine)
  );
  return rotationMatrix * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec2<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceRects: vec4<f32>,
  @location(6) instanceClipRect: vec4<f32>,
  @location(7) instancePixelOffsets: vec2<f32>,
  @location(8) instanceFillColors: vec4<f32>,
  @location(9) instanceLineColors: vec4<f32>,
  @location(10) instanceLineWidths: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) vLineWidth: f32,
  @location(3) uv: vec2<f32>,
  @location(4) dimensions: vec2<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  var varyings: Varyings;
  varyings.uv = attributes.positions;
  varyings.vLineWidth = attributes.instanceLineWidths;

  let sizePixels = clamp(
    project_unit_size_to_pixel(
      attributes.instanceSizes * textBackground.sizeScale,
      textBackground.sizeUnits
    ),
    textBackground.sizeMinPixels,
    textBackground.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  varyings.dimensions = attributes.instanceRects.zw * instanceScale +
    textBackground.padding.xy + textBackground.padding.zw;

  var pixelOffset =
    (attributes.positions * attributes.instanceRects.zw + attributes.instanceRects.xy) *
      instanceScale +
    mix(-textBackground.padding.xy, textBackground.padding.zw, attributes.positions);
  pixelOffset = rotate_by_angle(pixelOffset, attributes.instanceAngles);
  pixelOffset = pixelOffset + attributes.instancePixelOffsets;
  pixelOffset.y = pixelOffset.y * -1.0;

  var xy = project_size_vec2(attributes.instanceClipRect.xy) * project.scale;
  let wh = project_size_vec2(attributes.instanceClipRect.zw) * project.scale;
  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (attributes.instanceClipRect.z >= 0.0) {
    varyings.dimensions.x = wh.x;
    pixelOffset.x = xy.x + varyings.uv.x * wh.x + mix(
      -textBackground.padding.x,
      textBackground.padding.z,
      varyings.uv.x
    );
  }
  if (attributes.instanceClipRect.w >= 0.0) {
    varyings.dimensions.y = wh.y;
    pixelOffset.y = xy.y + varyings.uv.y * wh.y + mix(
      -textBackground.padding.y,
      textBackground.padding.w,
      varyings.uv.y
    );
  }

  if (textBackground.billboard > 0.5) {
    var position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    position = vec4<f32>(
      position.x + clipOffset.x,
      position.y + clipOffset.y,
      position.z,
      position.w
    );
    varyings.position = position;
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    varyings.position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offsetCommon
    );
  }

  varyings.vFillColor = vec4<f32>(
    attributes.instanceFillColors.rgb,
    attributes.instanceFillColors.a * layer.opacity
  );
  varyings.vLineColor = vec4<f32>(
    attributes.instanceLineColors.rgb,
    attributes.instanceLineColors.a * layer.opacity
  );
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

fn round_rect(point: vec2<f32>, size: vec2<f32>, radii: vec4<f32>) -> f32 {
  let pixelPosition = (point - 0.5) * size;
  let halfSize = size * 0.5;
  let maxBorderRadius = min(size.x, size.y) * 0.5;
  var borderRadius = min(radii, vec4<f32>(maxBorderRadius));

  borderRadius = select(borderRadius.zwxy, borderRadius, pixelPosition.x > 0.0);
  let radius = select(borderRadius.y, borderRadius.x, pixelPosition.y > 0.0);
  let q = abs(pixelPosition) - halfSize + radius;
  return -(min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius);
}

fn rect(point: vec2<f32>, size: vec2<f32>) -> f32 {
  let pixelPosition = point * size;
  return min(
    min(pixelPosition.x, size.x - pixelPosition.x),
    min(pixelPosition.y, size.y - pixelPosition.y)
  );
}

fn get_stroked_frag_color(
  distanceToEdge: f32,
  lineWidth: f32,
  fillColor: vec4<f32>,
  lineColor: vec4<f32>
) -> vec4<f32> {
  let isBorder = smoothedge(distanceToEdge, lineWidth);
  return mix(fillColor, lineColor, isBorder);
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.uv;
  var fragColor: vec4<f32>;

  if (any(textBackground.borderRadius != vec4<f32>(0.0))) {
    let distanceToEdge = round_rect(
      varyings.uv,
      varyings.dimensions,
      textBackground.borderRadius
    );
    let shapeAlpha = smoothedge(-distanceToEdge, 0.0);
    if (shapeAlpha == 0.0) {
      discard;
    }
    if (textBackground.stroked > 0.5) {
      fragColor = get_stroked_frag_color(
        distanceToEdge,
        varyings.vLineWidth,
        varyings.vFillColor,
        varyings.vLineColor
      );
    } else {
      fragColor = varyings.vFillColor;
    }
    fragColor.a = fragColor.a * shapeAlpha;
  } else if (textBackground.stroked > 0.5) {
    let distanceToEdge = rect(varyings.uv, varyings.dimensions);
    fragColor = get_stroked_frag_color(
      distanceToEdge,
      varyings.vLineWidth,
      varyings.vFillColor,
      varyings.vLineColor
    );
  } else {
    fragColor = varyings.vFillColor;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,hK={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,fontSize:1,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:e=>e.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getClipRect:{type:"accessor",value:[0,0,-1,-1]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}};class hJ extends u5{getShaders(){return super.getShaders({vs:hZ,fs:hY,source:hX,modules:[iq,ei,r1,hH,hA]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getAngle"},instanceRects:{size:4,bufferGroup:"text-background-instance-data",accessor:"getBoundingRect"},instanceClipRect:{size:4,bufferGroup:"text-background-instance-data",accessor:"getClipRect",defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getLineWidth",defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:i,sizeUnits:n,sizeMinPixels:r,sizeMaxPixels:s,getLineWidth:o,fontSize:a}=this.props,{padding:l,borderRadius:c}=this.props;l.length<4&&(l=[l[0],l[1],l[0],l[1]]),Array.isArray(c)||(c=[c,c,c,c]);let u=this.state.model,h={billboard:t,stroked:!!o,borderRadius:c,padding:l,sizeUnits:iw[n],sizeScale:i,sizeMinPixels:r,sizeMaxPixels:s},d={fontSize:a,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:h,text:d}),u.draw(this.context.renderPass)}_getModel(){return new u9.Model(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new he.Geometry({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array([0,0,1,0,0,1,1,1])}}}),isInstanced:!0})}}hJ.defaultProps=hK,hJ.layerName="TextBackgroundLayer";let hQ={start:1,middle:0,end:-1},h0={top:1,center:0,bottom:-1},h1=[0,0,0,255],h2={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:h1},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:hU.characterSet},fontFamily:hU.fontFamily,fontWeight:hU.fontWeight,lineHeight:1,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:h1},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none",getText:{type:"accessor",value:e=>e.text},getPosition:{type:"accessor",value:e=>e.position},getColor:{type:"accessor",value:h1},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},getContentBox:{type:"accessor",value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}};class h3 extends u7{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[i,n]}=this.transformParagraph(e,t),{getTextAnchor:r,getAlignmentBaseline:s}=this.props;return[(hQ["function"==typeof r?r(e,t):r]-1)*i/2,(h0["function"==typeof s?s(e,t):s]-1)*n/2,i,n]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:i,getAlignmentBaseline:n}=this.props,{x:r,y:s,rowWidth:o,size:[,a]}=this.transformParagraph(e,t),l=hQ["function"==typeof i?i(e,t):i],c=h0["function"==typeof n?n(e,t):n],u=r.length,h=Array(2*u),d=0;for(let e=0;e<u;e++)h[d++]=(l-1)*o[e]/2+r[e],h[d++]=(c-1)*a/2+s[e];return h}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new h$},this.props.maxWidth>0&&tT.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(e){let{props:t,oldProps:i,changeFlags:n}=e;(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==i.lineHeight||t.wordBreak!==i.wordBreak||t.maxWidth!==i.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:i,_getFontRenderer:n}=this.props,{fontAtlasManager:r,characterSet:s}=this.state,o={...e,characterSet:s,fontFamily:t,fontWeight:i,_getFontRenderer:n};if(!r.mapping)return r.setProps(o),!0;for(let e in o)if(o[e]!==r.props[e])return r.setProps(o),!0;return!1}_updateText(){let e,{data:t,characterSet:i}=this.props,n=t.attributes?.getText,{getText:r}=this.props,s=t.startIndices,o="auto"===i&&new Set;if(n&&s){let{texts:i,characterCount:a}=function({value:e,length:t,stride:i,offset:n,startIndices:r,characterSet:s}){let o=e.BYTES_PER_ELEMENT,a=i?i/o:1,l=n?n/o:0,c=r[t]||Math.ceil((e.length-l)/a),u=s&&new Set,h=Array(t),d=e;if(a>1||l>0){d=new e.constructor(c);for(let t=0;t<c;t++)d[t]=e[t*a+l]}for(let e=0;e<t;e++){let t=r[e],i=r[e+1]||c,n=d.subarray(t,i);h[e]=String.fromCodePoint.apply(null,n),u&&n.forEach(u.add,u)}if(u)for(let e of u)s.add(String.fromCodePoint(e));return{texts:h,characterCount:c}}({...ArrayBuffer.isView(n)?{value:n}:n,length:t.length,startIndices:s,characterSet:o});e=a,r=(e,{index:t})=>i[t]}else{let{iterable:i,objectInfo:n}=cD(t);for(let t of(s=[0],e=0,i)){n.index++;let i=Array.from(r(t,n)||"");o&&i.forEach(o.add,o),e+=i.length,s.push(e)}}this.setState({getText:r,startIndices:s,numInstances:e,characterSet:o||i})}transformParagraph(e,t){let{fontAtlasManager:i}=this.state,n=i.mapping,{baselineOffset:r}=i.atlas,{fontSize:s}=i.props,o=this.state.getText,{wordBreak:a,lineHeight:l,maxWidth:c}=this.props;return function(e,t,i,n,r,s){let o=Array.from(e),a=o.length,l=Array(a),c=Array(a),u=Array(a),h=("break-word"===n||"break-all"===n)&&isFinite(r)&&r>0,d=[0,0],p=[0,0],f=0,g=t+i/2,m=0,v=0;for(let e=0;e<=a;e++){let t=o[e];if(("\n"===t||e===a)&&(v=e),v>m){let e=h?function(e,t,i,n,r=0,s){void 0===s&&(s=e.length);let o=[];return"break-all"===t?hN(e,r,s,i,n,o):!function(e,t,i,n,r,s){let o=t,a=t,l=t,c=0;for(let u=t;u<i;u++)if(" "===e[u]?l=u+1:(" "===e[u+1]||u+1===i)&&(l=u+1),l>a){let t=hD(e,a,l,r);c+t>n&&(o<a&&(s.push(a),o=a,c=0),t>n&&(t=hN(e,a,l,n,r,s),o=s[s.length-1])),a=l,c+=t}}(e,r,s,i,n,o),o}(o,n,r,s,m,v):hj;for(let t=0;t<=e.length;t++){let n=0===t?m:e[t-1],r=t<e.length?e[t]:v;!function(e,t,i,n,r,s){let o=0,a=0;for(let r=t;r<i;r++){let t=n[e[r]];t&&(a=Math.max(a,t.height))}for(let s=t;s<i;s++){let t=e[s],i=n[t];i?(r[s]=o+i.anchorX,o+=i.advance):(tT.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),r[s]=o,o+=32)}s[0]=o,s[1]=a}(o,n,r,s,l,p);for(let e=n;e<r;e++)c[e]=g,u[e]=p[0];f++,g+=i,d[0]=Math.max(d[0],p[0])}m=v}"\n"===t&&(l[m]=0,c[m]=0,u[m]=0,m++)}return d[1]=f*i,{x:l,y:c,rowWidth:u,size:d}}(o(e,t)||"",r,l*s,a,c*s,n)}renderLayers(){let{startIndices:e,numInstances:t,getText:i,fontAtlasManager:{atlas:n,mapping:r},styleVersion:s}=this.state,{data:o,_dataDiff:a,getPosition:l,getColor:c,getSize:u,getAngle:h,getPixelOffset:d,getBackgroundColor:p,getBorderColor:f,getBorderWidth:g,getContentBox:m,backgroundBorderRadius:v,backgroundPadding:_,background:y,billboard:b,fontSettings:x,outlineWidth:w,outlineColor:P,sizeScale:C,sizeUnits:M,sizeMinPixels:S,sizeMaxPixels:E,contentCutoffPixels:L,contentAlignHorizontal:A,contentAlignVertical:T,transitions:k,updateTriggers:I}=this.props,O=this.getSubLayerClass("characters",hO),R=this.getSubLayerClass("background",hJ),{fontSize:z}=this.state.fontAtlasManager.props;return[y&&new R({getFillColor:p,getLineColor:f,getLineWidth:g,borderRadius:v,padding:_,getPosition:l,getSize:u,getAngle:h,getPixelOffset:d,getClipRect:m,billboard:b,sizeScale:C,sizeUnits:M,sizeMinPixels:S,sizeMaxPixels:E,fontSize:z,transitions:k&&{getPosition:k.getPosition,getAngle:k.getAngle,getSize:k.getSize,getFillColor:k.getBackgroundColor,getLineColor:k.getBorderColor,getLineWidth:k.getBorderWidth,getPixelOffset:k.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:I.getPosition,getAngle:I.getAngle,getSize:I.getSize,getFillColor:I.getBackgroundColor,getLineColor:I.getBorderColor,getLineWidth:I.getBorderWidth,getPixelOffset:I.getPixelOffset,getBoundingRect:{getText:I.getText,getTextAnchor:I.getTextAnchor,getAlignmentBaseline:I.getAlignmentBaseline,styleVersion:s}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:a,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new O({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:hU.smoothing,outlineWidth:w/(x.radius||hU.radius),outlineColor:P,iconAtlas:n,iconMapping:r,getPosition:l,getColor:c,getSize:u,getAngle:h,getPixelOffset:d,getContentBox:m,billboard:b,sizeScale:C,sizeUnits:M,sizeMinPixels:S,sizeMaxPixels:E,fontSize:z,contentCutoffPixels:L,contentAlignHorizontal:A,contentAlignVertical:T,transitions:k&&{getPosition:k.getPosition,getAngle:k.getAngle,getColor:k.getColor,getSize:k.getSize,getPixelOffset:k.getPixelOffset,getContentBox:k.getContentBox}},this.getSubLayerProps({id:"characters",updateTriggers:{all:I.getText,getPosition:I.getPosition,getAngle:I.getAngle,getColor:I.getColor,getSize:I.getSize,getPixelOffset:I.getPixelOffset,getContentBox:I.getContentBox,getIconOffsets:{getTextAnchor:I.getTextAnchor,getAlignmentBaseline:I.getAlignmentBaseline,styleVersion:s}}}),{data:o,_dataDiff:a,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:i})]}static set fontAtlasCacheLimit(e){tT.assert(Number.isFinite(e)&&e>=3,"Invalid cache limit"),hG=new hV(e)}}h3.defaultProps=h2,h3.layerName="TextLayer";class h4{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;const{attributes:t={}}=e;this.typedArrayManager=oB,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:i={},getGeometry:n,geometryBuffer:r,positionFormat:s,dataChanged:o,normalize:a=!0}=this.opts;if(this.data=t,this.getGeometry=n,this.positionSize=r&&r.size||("XY"===s?2:3),this.buffers=i,this.normalize=a,r&&(ar(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(r),a||(i.vertexPositions=r)),this.geometryBuffer=i.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?cV(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:i,buffers:n,_attributeDefs:r,typedArrayManager:s}=this;for(let o in r)if(o in n)s.release(i[o]),i[o]=null;else{let n=r[o];n.copy=t,i[o]=s.allocate(i[o],e,n)}}_forEachGeometry(e,t,i){let{data:n,getGeometry:r}=this,{iterable:s,objectInfo:o}=cD(n,t,i);for(let t of s)o.index++,e(r?r(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:i,instanceCount:n}=this,{data:r,geometryBuffer:s}=this,{startRow:o=0,endRow:a=1/0}=e||{},l={};if(e||(t=[0],i=[0]),this.normalize||!s)this._forEachGeometry((e,t)=>{let n=e&&this.normalizeGeometry(e);l[t]=n,i[t+1]=i[t]+(n?this.getGeometrySize(n):0)},o,a),n=i[i.length-1];else if(n=(i=r.startIndices)[r.length]||0,ArrayBuffer.isView(s))n=n||s.length/this.positionSize;else if(s instanceof a1.Buffer){let e=4*this.positionSize;n=n||s.byteLength/e}else if(s.buffer){let e=s.stride||4*this.positionSize;n=n||s.buffer.byteLength/e}else if(s.value){let e=s.value,t=s.stride/e.BYTES_PER_ELEMENT||this.positionSize;n=n||e.length/t}this._allocate(n,!!e),this.indexStarts=t,this.vertexStarts=i,this.instanceCount=n;let c={};this._forEachGeometry((e,r)=>{let s=l[r]||e;c.vertexStart=i[r],c.indexStart=t[r],c.geometrySize=(r<i.length-1?i[r+1]:n)-i[r],c.geometryIndex=r,this.updateGeometryAttributes(s,c)},o,a),this.vertexCount=t[t.length-1]}}function h6(e,t,i={}){return function(e,t={}){return Math.sign(h8(e,t))}(e,i)!==t&&(function(e,t){let{start:i=0,end:n=e.length,size:r=2}=t,s=(n-i)/r,o=Math.floor(s/2);for(let t=0;t<o;++t){let n=i+t*r,o=i+(s-1-t)*r;for(let t=0;t<r;++t){let i=e[n+t];e[n+t]=e[o+t],e[o+t]=i}}}(e,i),!0)}let h5={x:0,y:1,z:2};function h8(e,t={}){let{start:i=0,end:n=e.length,plane:r="xy"}=t,s=t.size||2,o=0,a=h5[r[0]],l=h5[r[1]];for(let t=i,r=n-s;t<n;t+=s)o+=(e[t+a]-e[r+a])*(e[t+l]+e[r+l]),r=t;return o/2}function h7(e,t,i,n,r,s,o){let a,l;void 0===s&&(s=h8(e,{start:t,end:i,size:n,plane:o}));let c=h5[o[0]],u=h5[o[1]];if(r===s<0)for(a=t;a<i;a+=n)l=dh(a,e[a+c],e[a+u],l);else for(a=i-n;a>=t;a-=n)l=dh(a,e[a+c],e[a+u],l);return l&&dr(l,l.next)&&(dd(l),l=l.next),l}function h9(e,t){let i;if(!e)return e;t||(t=e);let n=e;do if(i=!1,!n.steiner&&(dr(n,n.next)||0===dn(n.prev,n,n.next))){if(dd(n),(n=t=n.prev)===n.next)break;i=!0}else n=n.next;while(i||n!==t)return t}function de(e,t){return e.x-t.x}function dt(e,t,i,n,r){return(e=((e=((e=((e=((e=(e-i)*r|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-n)*r|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function di(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function dn(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function dr(e,t){return e.x===t.x&&e.y===t.y}function ds(e,t,i,n){let r=dl(dn(e,t,i)),s=dl(dn(e,t,n)),o=dl(dn(i,n,e)),a=dl(dn(i,n,t));return!!(r!==s&&o!==a||0===r&&da(e,i,t)||0===s&&da(e,n,t)||0===o&&da(i,e,n)||0===a&&da(i,t,n))}function da(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function dl(e){return e>0?1:e<0?-1:0}function dc(e,t){return 0>dn(e.prev,e,e.next)?dn(e,t,e.next)>=0&&dn(e,e.prev,t)>=0:0>dn(e,t,e.prev)||0>dn(e,e.next,t)}function du(e,t){let i=new dp(e.i,e.x,e.y),n=new dp(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function dh(e,t,i,n){let r=new dp(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function dd(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}class dp{constructor(e,t,i){this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1,this.i=e,this.x=t,this.y=i}}function df(e,t){let i=t.length,n=e.length;if(n>0){let r=!0;for(let s=0;s<i;s++)if(e[n-i+s]!==t[s]){r=!1;break}if(r)return!1}for(let r=0;r<i;r++)e[n+r]=t[r];return!0}function dg(e,t){let i=t.length;for(let n=0;n<i;n++)e[n]=t[n]}function dm(e,t,i,n,r=[]){let s=n+t*i;for(let t=0;t<i;t++)r[t]=e[s+t];return r}function dv(e,t,i,n,r=[]){let s,o;if(8&i)s=(n[3]-e[1])/(t[1]-e[1]),o=3;else if(4&i)s=(n[1]-e[1])/(t[1]-e[1]),o=1;else if(2&i)s=(n[2]-e[0])/(t[0]-e[0]),o=2;else{if(!(1&i))return null;s=(n[0]-e[0])/(t[0]-e[0]),o=0}for(let i=0;i<e.length;i++)r[i]=(1&o)===i?n[o]:s*(t[i]-e[i])+e[i];return r}function d_(e,t){let i=0;return e[0]<t[0]?i|=1:e[0]>t[2]&&(i|=2),e[1]<t[1]?i|=4:e[1]>t[3]&&(i|=8),i}function dy(e,t){let i,n,{size:r=2,broken:s=!1,gridResolution:o=10,gridOffset:a=[0,0],startIndex:l=0,endIndex:c=e.length}=t||{},u=(c-l)/r,h=[],d=[h],p=dm(e,0,r,l),f=dw(p,o,a,[]),g=[];df(h,p);for(let t=1;t<u;t++){for(n=d_(i=dm(e,t,r,l,i),f);n;){var m,v,_;dv(p,i,n,f,g);let e=d_(g,f);e&&(dv(p,g,e,f,g),n=e),df(h,g),dg(p,g),m=f,v=o,8&(_=n)?(m[1]+=v,m[3]+=v):4&_?(m[1]-=v,m[3]-=v):2&_?(m[0]+=v,m[2]+=v):1&_&&(m[0]-=v,m[2]-=v),s&&h.length>r&&(h=[],d.push(h),df(h,p)),n=d_(i,f)}df(h,i),dg(p,i)}return s?d:d[0]}function db(e,t=null,i){if(!e.length)return[];let{size:n=2,gridResolution:r=10,gridOffset:s=[0,0],edgeTypes:o=!1}=i||{},a=[],l=[{pos:e,types:o?Array(e.length/n).fill(1):null,holes:t||[]}],c=[[],[]],u=[];for(;l.length;){let{pos:e,types:t,holes:i}=l.shift();(function(e,t,i,n){let r=1/0,s=-1/0,o=1/0,a=-1/0;for(let n=0;n<i;n+=t){let t=e[n],i=e[n+1];r=t<r?t:r,s=t>s?t:s,o=i<o?i:o,a=i>a?i:a}n[0][0]=r,n[0][1]=o,n[1][0]=s,n[1][1]=a})(e,n,i[0]||e.length,c),u=dw(c[0],r,s,u);let h=d_(c[1],u);if(h){let r=dx(e,t,n,0,i[0]||e.length,u,h),s={pos:r[0].pos,types:r[0].types,holes:[]},a={pos:r[1].pos,types:r[1].types,holes:[]};l.push(s,a);for(let l=0;l<i.length;l++)(r=dx(e,t,n,i[l],i[l+1]||e.length,u,h))[0]&&(s.holes.push(s.pos.length),s.pos=dP(s.pos,r[0].pos),o&&(s.types=dP(s.types,r[0].types))),r[1]&&(a.holes.push(a.pos.length),a.pos=dP(a.pos,r[1].pos),o&&(a.types=dP(a.types,r[1].types)))}else{let n={positions:e};o&&(n.edgeTypes=t),i.length&&(n.holeIndices=i),a.push(n)}}return a}function dx(e,t,i,n,r,s,o){let a,l,c,u=(r-n)/i,h=[],d=[],p=[],f=[],g=[],m=dm(e,u-1,i,n),v=Math.sign(8&o?m[1]-s[3]:m[0]-s[2]),_=t&&t[u-1],y=0,b=0;for(let r=0;r<u;r++)a=dm(e,r,i,n,a),l=Math.sign(8&o?a[1]-s[3]:a[0]-s[2]),c=t&&t[n/i+r],l&&v&&v!==l&&(dv(m,a,o,s,g),df(h,g)&&p.push(_),df(d,g)&&f.push(_)),l<=0?(df(h,a)&&p.push(c),y-=l):p.length&&(p[p.length-1]=0),l>=0?(df(d,a)&&f.push(c),b+=l):f.length&&(f[f.length-1]=0),dg(m,a),v=l,_=c;return[y?{pos:h,types:t&&p}:null,b?{pos:d,types:t&&f}:null]}function dw(e,t,i,n){let r=Math.floor((e[0]-i[0])/t)*t+i[0],s=Math.floor((e[1]-i[1])/t)*t+i[1];return n[0]=r,n[1]=s,n[2]=r+t,n[3]=s+t,n}function dP(e,t){for(let i=0;i<t.length;i++)e.push(t[i]);return e}function dC(e,t,i,n){let r,s=e[0];for(let o=i;o<n;o+=t){let t=(r=e[o])-s;(t>180||t<-180)&&(r-=360*Math.round(t/360)),e[o]=s=r}}function dM(e,t){let i,n=e.length/t;for(let r=0;r<n&&((i=e[r*t])+180)%360==0;r++);let r=-(360*Math.round(i/360));if(0!==r)for(let i=0;i<n;i++)e[i*t]+=r}class dS extends h4{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:e.isWebGPU?Float32Array:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getPathSegmentIndices(e){let t=this.attributes.segmentTypes,i=this.vertexStarts[e],n=Math.min(this.vertexStarts[e+1]??this.instanceCount,this.instanceCount),r=[];for(let e=i;e<n-1;e++)(4&t[e])==0&&r.push(e);return r.length&&(4&t[i])!=0&&r.unshift(r.pop()),r}getGeometryFromBuffer(e){return this.normalize||this.opts.isWebGPU?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?function(e,t,i,n){let r;if(Array.isArray(e[0])){r=Array(e.length*t);for(let i=0;i<e.length;i++)for(let n=0;n<t;n++)r[i*t+n]=e[i][n]||0}else r=e;return i?dy(r,{size:t,gridResolution:i}):n?function(e,t){let{size:i=2,startIndex:n=0,endIndex:r=e.length,normalize:s=!0}=t||{},o=e.slice(n,r);dC(o,i,0,r-n);let a=dy(o,{size:i,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(s)for(let e of a)dM(e,i);return a}(r,{size:t}):r}(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(dE(e)){let t=0;for(let i of e)t+=this.getGeometrySize(i);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(0!==t.geometrySize)if(e&&dE(e))for(let i of e){let e=this.getGeometrySize(i);t.geometrySize=e,this.updateGeometryAttributes(i,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}_updateSegmentTypes(e,t){let i=this.attributes.segmentTypes,n=!!e&&this.isClosed(e),{vertexStart:r,geometrySize:s}=t;i.fill(0,r,r+s),n?(i[r]=4,i[r+s-2]=4):(i[r]+=1,i[r+s-2]+=2),i[r+s-1]=4}_updatePositions(e,t){let{positions:i}=this.attributes;if(!i||!e)return;let{vertexStart:n,geometrySize:r}=t,s=[,,,];for(let t=n,o=0;o<r;t++,o++)this.getPointOnPath(e,o,s),i[3*t]=s[0],i[3*t+1]=s[1],i[3*t+2]=s[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,i=[]){let{positionSize:n}=this;t*n>=e.length&&(t+=1-e.length/n);let r=t*n;return i[0]=e[r],i[1]=e[r+1],i[2]=3===n&&e[r+2]||0,i}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,i=e.length-t;return e[0]===e[i]&&e[1]===e[i+1]&&(2===t||e[2]===e[i+2])}}function dE(e){return Array.isArray(e[0])}let dL=`\
layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,dA={name:"path",source:`\
struct PathUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  jointType: f32,
  capType: f32,
  miterLimit: f32,
  billboard: f32,
  widthUnits: i32,
};

@group(0) @binding(auto)
var<uniform> path: PathUniforms;
`,vs:dL,fs:dL,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},dT=`\
const EPSILON: f32 = 0.001;
const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct JoinResult {
  offset: vec3<f32>,
  cornerOffset: vec2<f32>,
  miterLength: f32,
  pathPosition: vec2<f32>,
  pathLength: f32,
  jointType: f32,
};

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) instanceTypes: f32,
  @location(2) instanceLeftPositions: vec3<f32>,
  @location(3) instanceStartPositions: vec3<f32>,
  @location(4) instanceEndPositions: vec3<f32>,
  @location(5) instanceRightPositions: vec3<f32>,
  @location(6) instanceLeftPositions64Low: vec3<f32>,
  @location(7) instanceStartPositions64Low: vec3<f32>,
  @location(8) instanceEndPositions64Low: vec3<f32>,
  @location(9) instanceRightPositions64Low: vec3<f32>,
  @location(10) instanceStrokeWidths: f32,
  @location(11) instanceColors: vec4<f32>,
  @location(12) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vCornerOffset: vec2<f32>,
  @location(2) vMiterLength: f32,
  @location(3) vPathPosition: vec2<f32>,
  @location(4) vPathLength: f32,
  @location(5) vJointType: f32,
  // Location 6 is reserved for TripsLayer's injected vTime varying.
  @location(7) clipCoordinates: vec2<f32>,
#ifdef DASH_ENABLED
  @location(8) vPathBounds: vec2<f32>,
#endif
};

fn flipIfTrue(flag: bool) -> f32 {
  return select(1.0, -1.0, flag);
}

fn clipLine(position: vec4<f32>, refPosition: vec4<f32>) -> vec4<f32> {
  if (position.w < EPSILON) {
    let r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    return refPosition + (position - refPosition) * r;
  }
  return position;
}

#ifdef DASH_ENABLED
// Return the visible interval of the original segment before clipLine moves either endpoint.
fn getClippedPathRange(startW: f32, endW: f32) -> vec2<f32> {
  let startClipped = startW < EPSILON;
  let endClipped = endW < EPSILON;
  if (startClipped && endClipped) {
    return vec2<f32>(0.0, 0.0);
  }
  if (startClipped || endClipped) {
    let intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
    if (startClipped) {
      return vec2<f32>(intersection, 1.0);
    }
    return vec2<f32>(0.0, intersection);
  }
  return vec2<f32>(0.0, 1.0);
}
#endif

fn getLineJoinOffset(
  prevPoint: vec3<f32>,
  currPoint: vec3<f32>,
  nextPoint: vec3<f32>,
  width: vec2<f32>,
#ifdef DASH_ENABLED
  sourcePathLength: f32,
  sourcePathRange: vec2<f32>,
#endif
#ifdef ANTIALIASING
  coverageScale: f32,
#endif
  positions: vec2<f32>,
  instanceTypes: f32
) -> JoinResult {
  let isEnd = positions.x > 0.0;
  let sideOfPath = positions.y;
  let isJoint = select(0.0, 1.0, sideOfPath == 0.0);

  var deltaA3 = currPoint - prevPoint;
  var deltaB3 = nextPoint - currPoint;

  let rotationResult = project_needs_rotation(currPoint);
  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    deltaA3 = rotationResult.transform * deltaA3;
    deltaB3 = rotationResult.transform * deltaB3;
  }

  let deltaA = deltaA3.xy / width;
  let deltaB = deltaB3.xy / width;

  let lenA = length(deltaA);
  let lenB = length(deltaB);

  let dirA = select(vec2<f32>(0.0, 0.0), normalize(deltaA), lenA > 0.0);
  let dirB = select(vec2<f32>(0.0, 0.0), normalize(deltaB), lenB > 0.0);

  let perpA = vec2<f32>(-dirA.y, dirA.x);
  let perpB = vec2<f32>(-dirB.y, dirB.x);

  var tangent = dirA + dirB;
  tangent = select(perpA, normalize(tangent), length(tangent) > 0.0);
  let miterVec = vec2<f32>(-tangent.y, tangent.x);
  let dir = select(dirB, dirA, isEnd);
  let perp = select(perpB, perpA, isEnd);
#ifdef DASH_ENABLED
  let segmentLength2D = select(lenB, lenA, isEnd);

  // Extrusion happens in the XY plane, so segmentLength2D is a 2D length and pathPosition.y
  // below measures 2D distance along the segment. For a path that also moves in Z the true
  // arc length is longer by this ratio. Scaling pathLength and pathPosition.y by it makes
  // the coordinate measure real 3D distance while leaving the joint tests unchanged, since
  // they compare the two against each other and both are scaled alike. Billboard mode
  // extrudes in clip space, where the perspective divide has already reduced the segment to
  // its screen projection, so its complete common-space length is supplied by the caller.
  // Mirrors path-layer-vertex.glsl.ts.
  let currDelta3 = select(deltaB3, deltaA3, isEnd);
  let currLength2D = length(currDelta3.xy);
  // Do not clamp a valid denominator to EPSILON: high-zoom Web Mercator deltas are often
  // smaller than that in common space, and changing their scale corrupts even flat paths.
  let safeLength2D = select(1.0, currLength2D, currLength2D > 0.0);
  var arcLengthRatio = 1.0;
  var pathPositionOffset = 0.0;
  var pathLength = segmentLength2D;
  if (path.billboard != 0.0) {
    // clipLine may shorten the visible screen-space segment. Preserve the corresponding interval
    // of the complete common-space arclength instead of compressing the full dash period into the
    // visible span. Keep pathLength complete so justification is stable as the camera clips it.
    let visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
    arcLengthRatio = 0.0;
    if (segmentLength2D > 0.0) {
      arcLengthRatio = visiblePathLength / segmentLength2D;
    }
    pathPositionOffset = sourcePathLength * sourcePathRange.x;
    pathLength = sourcePathLength;
  } else if (currLength2D > 0.0) {
    arcLengthRatio = length(currDelta3) / safeLength2D;
    pathLength = segmentLength2D * arcLengthRatio;
  }
#else
  let pathLength = select(lenB, lenA, isEnd);
#endif

  let sinHalfA = abs(dot(miterVec, perp));
  let cosHalfA = abs(dot(dirA, miterVec));
  let turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  let cornerPosition = sideOfPath * turnDirection;

  var miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  var offsetVec =
    mix(miterVec * miterSize, perp, step(0.5, cornerPosition)) *
    (sideOfPath + isJoint * turnDirection);

  let isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  let isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  let isCap = isStartCap || isEndCap;

  var jointType = path.jointType;
  if (isCap) {
    offsetVec = mix(
      perp * sideOfPath,
      dir * path.capType * 4.0 * flipIfTrue(isStartCap),
      isJoint
    );
    jointType = path.capType;
  }

#ifdef ANTIALIASING
  let coverageOffsetVec = offsetVec * coverageScale;
  var miterLength = dot(coverageOffsetVec, miterVec * turnDirection);
#else
  var miterLength = dot(offsetVec, miterVec * turnDirection);
#endif
  miterLength = select(miterLength, isJoint, isCap);

#ifdef ANTIALIASING
  let offsetFromStartOfPath = coverageOffsetVec + deltaA * select(0.0, 1.0, isEnd);
#else
  let offsetFromStartOfPath = offsetVec + deltaA * select(0.0, 1.0, isEnd);
#endif
  let pathPosition = vec2<f32>(
    dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
    pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
    dot(offsetFromStartOfPath, dir)
#endif
  );
  let isValid = step(f32(instanceTypes), 3.5);
#ifdef ANTIALIASING
  var offset = vec3<f32>(coverageOffsetVec * width * isValid, 0.0);
#else
  var offset = vec3<f32>(offsetVec * width * isValid, 0.0);
#endif

  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    offset = rotationResult.transform * offset;
  }

#ifdef ANTIALIASING
  return JoinResult(
    offset, coverageOffsetVec, miterLength, pathPosition, pathLength, jointType
  );
#else
  return JoinResult(offset, offsetVec, miterLength, pathPosition, pathLength, jointType);
#endif
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let isEnd = attributes.positions.x;

  let prevPosition = mix(attributes.instanceLeftPositions, attributes.instanceStartPositions, isEnd);
  let prevPosition64Low = mix(
    attributes.instanceLeftPositions64Low,
    attributes.instanceStartPositions64Low,
    isEnd
  );
  let currPosition = mix(attributes.instanceStartPositions, attributes.instanceEndPositions, isEnd);
  let currPosition64Low = mix(
    attributes.instanceStartPositions64Low,
    attributes.instanceEndPositions64Low,
    isEnd
  );
  let nextPosition = mix(attributes.instanceEndPositions, attributes.instanceRightPositions, isEnd);
  let nextPosition64Low = mix(
    attributes.instanceEndPositions64Low,
    attributes.instanceRightPositions64Low,
    isEnd
  );

  geometry.worldPosition = currPosition;

  let widthPixels =
    clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * path.widthScale, path.widthUnits),
      path.widthMinPixels,
      path.widthMaxPixels
    ) / 2.0;

  if (path.billboard != 0.0) {
#ifdef DASH_ENABLED
    let prevProjection = project_position_to_clipspace_and_commonspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    let nextProjection = project_position_to_clipspace_and_commonspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
    let prevPositionCommon = prevProjection.commonPosition.xyz;
    let nextPositionCommon = nextProjection.commonPosition.xyz;
    var prevPositionScreen = prevProjection.clipPosition;
    var nextPositionScreen = nextProjection.clipPosition;
#else
    var prevPositionScreen = project_position_to_clipspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    var nextPositionScreen = project_position_to_clipspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
#endif
    let currProjection = project_position_to_clipspace_and_commonspace(
      currPosition, currPosition64Low, ZERO_OFFSET
    );
    geometry.position = currProjection.commonPosition;
    var currPositionScreen = currProjection.clipPosition;
#ifdef DASH_ENABLED
    let currPositionCommon = currProjection.commonPosition.xyz;
    let sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
    let sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
    let billboardPathRange = getClippedPathRange(
      sourcePathStartScreen.w, sourcePathEndScreen.w
    );
#endif

    prevPositionScreen = clipLine(prevPositionScreen, currPositionScreen);
    nextPositionScreen = clipLine(nextPositionScreen, currPositionScreen);
    currPositionScreen = clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
#ifdef DASH_ENABLED
    let currentDeltaCommon = select(
      nextPositionCommon - currPositionCommon,
      currPositionCommon - prevPositionCommon,
      isEnd > 0.0
    );
    let billboardPathLength = select(
      0.0,
      length(currentDeltaCommon) * project.scale / (widthPixels * project.focalDistance),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(vec2<f32>(widthPixels, widthPixels)),
#ifdef DASH_ENABLED
      billboardPathLength,
      billboardPathRange,
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    // Phase and justification use the complete source segment, while cap and joint coverage
    // must still recognize the endpoints moved by clipLine.
    varyings.vPathBounds = billboardPathLength * billboardPathRange;
#endif

    geometry.uv = join.pathPosition;
    varyings.position = vec4<f32>(
      currPositionScreen.xyz + join.offset * currPositionScreen.w,
      currPositionScreen.w
    );
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  } else {
    let prevPositionCommon = project_position_vec3_f64(prevPosition, prevPosition64Low);
    let currPositionCommon = project_position_vec3_f64(currPosition, currPosition64Low);
    let nextPositionCommon = project_position_vec3_f64(nextPosition, nextPosition64Low);

    let width = vec2<f32>(
      project_pixel_size_float(widthPixels),
      project_pixel_size_float(widthPixels)
    );
#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionCommon,
      currPositionCommon,
      nextPositionCommon,
      width,
#ifdef DASH_ENABLED
      1.0,
      vec2<f32>(0.0, 1.0),
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    varyings.vPathBounds = vec2<f32>(0.0, join.pathLength);
#endif

    geometry.position = vec4<f32>(currPositionCommon + join.offset, 1.0);
    geometry.uv = join.pathPosition;
    varyings.position = project_common_position_to_clipspace(geometry.position);
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  varyings.vColor = vec4<f32>(
    attributes.instanceColors.rgb,
    attributes.instanceColors.a * layer.opacity
  );
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.vPathPosition;

#ifdef ANTIALIASING
  // Coordinates of the outer silhouette, in units of half-width: rounded joints and caps are
  // bounded by the corner offset, everywhere else by the edge of the stroke. Dividing by the
  // screen-space derivative converts the distance to the boundary into device pixels, which stays
  // correct under perspective foreshortening and under extensions that rescale the stroke.
#ifdef DASH_ENABLED
  let isCorner =
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y;
#else
  let isCorner = varyings.vPathPosition.y < 0.0 || varyings.vPathPosition.y > varyings.vPathLength;
#endif
  let isRound = varyings.vJointType > 0.5;

  // Distance to the silhouette in device pixels, from the derivative of the coordinate that
  // bounds it. Computed before the discards below: derivatives need uniform control flow and are
  // undefined after a discard in the quad. See dev-docs/RFCs/v9.4/analytic-antialiasing-rfc.md
  let bodyCoord = abs(varyings.vPathPosition.x);
  let cornerCoord = length(varyings.vCornerOffset);
  // Both evaluated so each derivative stays on one field across the corner/body boundary
  let bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
  let cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
  // Rounded corners still intersect the stroke-width envelope. Extensions may remap
  // vPathPosition.x independently of vCornerOffset, as PathStyleExtension does for offsets.
  let edgePixels = select(bodyPixels, min(cornerPixels, bodyPixels), isRound && isCorner);
#else
  let edgePixels = select(bodyPixels, cornerPixels, isRound && isCorner);
#endif

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  if (isCorner) {
    if (!isRound && varyings.vMiterLength > path.miterLimit + 1.0) {
      discard;
    }
  }

  var color = varyings.vColor;

  // Feather one device pixel across the width only, before premultiplication. edgePixels is a
  // signed device-pixel distance and SMOOTH_EDGE_RADIUS is 0.5, so this ramps across one pixel.
  color.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
  if (
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y
  ) {
#else
  if (
    varyings.vPathPosition.y < 0.0 ||
    varyings.vPathPosition.y > varyings.vPathLength
  ) {
#endif
    if (varyings.vJointType > 0.5 && length(varyings.vCornerOffset) > 1.0) {
      discard;
    }
    if (
      varyings.vJointType < 0.5 &&
      varyings.vMiterLength > path.miterLimit + 1.0
    ) {
      discard;
    }
  }
#endif

  // Fragment-layer injections that discard pixels must run after analytic coverage derivatives.
  // See TripsLayer, which rejects fragments outside of the active time window at this anchor.
  // DECKGL_FILTER_COLOR
  clip_filterColor(varyings.clipCoordinates);
#ifdef ANTIALIASING
  return deckgl_premultiplied_alpha(color);
#else
  return deckgl_premultiplied_alpha(varyings.vColor);
#endif
}
`,dk=`\
#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in float rowIndexes;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
#ifdef DASH_ENABLED
out vec2 vPathBounds;
#endif
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
#ifdef DASH_ENABLED
, float sourcePathLength, vec2 sourcePathRange
#endif
#ifdef ANTIALIASING
, float coverageScale
#endif
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
#ifdef DASH_ENABLED
vec3 currDelta3 = isEnd ? deltaA3 : deltaB3;
float currLength2D = length(currDelta3.xy);
float arcLengthRatio = 1.0;
float pathPositionOffset = 0.0;
float pathLength = L;
if (path.billboard) {
float visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
arcLengthRatio = L > 0.0 ? visiblePathLength / L : 0.0;
pathPositionOffset = sourcePathLength * sourcePathRange.x;
pathLength = sourcePathLength;
} else if (currLength2D > 0.0) {
arcLengthRatio = length(currDelta3) / currLength2D;
pathLength = L * arcLengthRatio;
}
#endif
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
#ifdef ANTIALIASING
vec2 coverageOffsetVec = offsetVec * coverageScale;
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = coverageOffsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = coverageOffsetVec + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(coverageOffsetVec * width * isValid, 0.0);
#else
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
#endif
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
#ifdef DASH_ENABLED
vec2 getClippedPathRange(float startW, float endW) {
bool startClipped = startW < EPSILON;
bool endClipped = endW < EPSILON;
if (startClipped && endClipped) {
return vec2(0.0);
}
if (startClipped || endClipped) {
float intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
return startClipped ? vec2(intersection, 1.0) : vec2(0.0, intersection);
}
return vec2(0.0, 1.0);
}
#endif
void main() {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
#ifdef DASH_ENABLED
vec4 prevPositionCommon;
vec4 nextPositionCommon;
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET, prevPositionCommon
);
#else
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET
);
#endif
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
#ifdef DASH_ENABLED
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET, nextPositionCommon
);
#else
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET
);
#endif
#ifdef DASH_ENABLED
vec4 sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
vec4 sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
vec2 billboardPathRange = getClippedPathRange(
sourcePathStartScreen.w, sourcePathEndScreen.w
);
#endif
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = vec2(0.5 / project.devicePixelRatio);
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
#ifdef DASH_ENABLED
vec3 currentDeltaCommon = isEnd > 0.0
? geometry.position.xyz - prevPositionCommon.xyz
: nextPositionCommon.xyz - geometry.position.xyz;
float billboardPathLength = width.x > 0.0
? length(currentDeltaCommon) * project.scale / (width.x * project.focalDistance)
: 0.0;
#endif
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
#ifdef DASH_ENABLED
,
billboardPathLength, billboardPathRange
#endif
#ifdef ANTIALIASING
,
coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = billboardPathLength * billboardPathRange;
#endif
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = project_pixel_size(vec2(0.5 / project.devicePixelRatio));
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
vec3 offset = getLineJoinOffset(
prevPosition, currPosition, nextPosition, width.xy
#ifdef DASH_ENABLED
, 1.0, vec2(0.0, 1.0)
#endif
#ifdef ANTIALIASING
, coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = vec2(0.0, vPathLength);
#endif
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,dI=`\
#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
#ifdef DASH_ENABLED
in vec2 vPathBounds;
#endif
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
#ifdef ANTIALIASING
#ifdef DASH_ENABLED
bool isCorner = vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y;
#else
bool isCorner = vPathPosition.y < 0.0 || vPathPosition.y > vPathLength;
#endif
bool isRound = vJointType > 0.5;
float bodyCoord = abs(vPathPosition.x);
float cornerCoord = length(vCornerOffset);
float bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
float cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
float edgePixels = isRound && isCorner ? min(cornerPixels, bodyPixels) : bodyPixels;
#else
float edgePixels = isRound && isCorner ? cornerPixels : bodyPixels;
#endif
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
if (isCorner) {
if (!isRound && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
fragColor.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
if (vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y) {
#else
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
#endif
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,dO=[0,0,0,255],dR={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},antialiasing:!1,billboard:!1,_pathType:null,getPath:{type:"accessor",value:e=>e.path},getColor:{type:"accessor",value:dO},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},dz={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};function dF(e,t){return e===t||!!(e&&t&&e.length===t.length&&e.every((e,i)=>e===t[i]))}class dB extends u5{getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:dk,fs:dI,source:dT,defines:e?{ANTIALIASING:1}:{},modules:[iq,ei,r1,dA,..."webgpu"===this.context.device.type?[hw]:[]]})}get wrapLongitude(){return!1}getBounds(){return"webgpu"===this.context.device.type?null:this.getAttributeManager()?.getBounds(["vertexPositions"])}getPathProjectionScale(e){let t=this.props.coordinateSystem;if(!this.getAttributeManager()?.getAttributes().instanceDashOffsets)return null;if(e instanceof o8&&e.zoom>=12&&("default"===t||"lnglat"===t||"cartesian"===t)){let i=i$.getUniforms({viewport:e,coordinateSystem:t,coordinateOrigin:this.props.coordinateOrigin,autoWrapLongitude:this.wrapLongitude});return[e.projectionMode,i.coordinateOrigin[1],i.commonOrigin[1],...i.commonUnitsPerWorldUnit,...i.commonUnitsPerWorldUnit2,i.commonUnitsPerMeter[2]]}let i=function(e){if(e.isGeospatial)return null;let{unitsPerMeter:t}=e.distanceScales;return[t[0],t[1],t[2]]}(e);return i?[e.projectionMode,...i]:[e.projectionMode]}shouldUpdateState(e){let{viewport:t}=this.context;return super.shouldUpdateState(e)||this.state?.tessellationResolution!==t.resolution||!dF(this.state?.pathProjectionScale,this.getPathProjectionScale(t))}initializeState(){let e="webgpu"===this.context.device.type;this.getAttributeManager().addInstanced({...e?{pathPositions:{size:24,type:"float32",transition:!1,accessor:"getPath",update:this.calculateWebGPUPositions,shaderAttributes:{instanceLeftPositions:{size:3,elementOffset:0},instanceStartPositions:{size:3,elementOffset:3},instanceEndPositions:{size:3,elementOffset:6},instanceRightPositions:{size:3,elementOffset:9},instanceLeftPositions64Low:{size:3,elementOffset:12},instanceStartPositions64Low:{size:3,elementOffset:15},instanceEndPositions64Low:{size:3,elementOffset:18},instanceRightPositions64Low:{size:3,elementOffset:21}},noAlloc:!0}}:{vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:dz,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}}},instanceTypes:{size:1,type:e?"float32":"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:!e&&dz,defaultValue:1,bufferGroup:"path-instance-data"},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:!e&&dz,defaultValue:dO,bufferGroup:"path-instance-data"},rowIndexes:{size:1,type:"uint32",accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:"path-instance-data"}}),this.setState({pathTesselator:new dS({fp64:this.use64bitPositions(),isWebGPU:e}),tessellationResolution:this.context.viewport.resolution,pathProjectionScale:this.getPathProjectionScale(this.context.viewport)})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:n}=e,r=this.getAttributeManager(),{viewport:s}=this.context,o=this.state.tessellationResolution!==s.resolution,a=this.getPathProjectionScale(s),l=!dF(this.state.pathProjectionScale,a),c=n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPath)||t._pathType!==i._pathType||t.positionFormat!==i.positionFormat||t.wrapLongitude!==i.wrapLongitude||o;if(n.dataChanged||c){let{pathTesselator:e}=this.state,i=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:i.getPath,buffers:i,normalize:!t._pathType,loop:"loop"===t._pathType,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:s.resolution,dataChanged:c?void 0:n.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts,tessellationResolution:s.resolution,pathProjectionScale:a}),!n.dataChanged||c?r.invalidateAll():l&&r.invalidate("instanceDashOffsets")}else l&&(this.setState({pathProjectionScale:a}),r.invalidate("instanceDashOffsets"));(n.extensionsChanged||t.antialiasing!==i.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),r.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i}=t,n=this.props.data;return n[0]&&n[0].__source&&(t.object=n.find(e=>e.__source.index===i)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:i,billboard:n,miterLimit:r,widthUnits:s,widthScale:o,widthMinPixels:a,widthMaxPixels:l}=this.props,c=this.state.model,u={jointType:Number(t),capType:Number(i),billboard:n,widthUnits:iw[s],widthScale:o,miterLimit:r,widthMinPixels:a,widthMaxPixels:l};c.shaderInputs.setProps({path:u}),c.draw(this.context.renderPass)}_getModel(){return new u9.Model(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new he.Geometry({topology:"triangle-list",attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("segmentTypes")}calculateWebGPUPositions(e){let{pathTesselator:t}=this.state,i=t.get("positions");if(!i){e.value=null;return}let n=t.instanceCount,r=new Float32Array(24*n),s=[-1,0,1,2];for(let e=0;e<n;e++){let t=24*e;for(let o=0;o<4;o++){let a=e+s[o],l=t+3*o;for(let e=0;e<3;e++){let t=a>=0&&a<n?i[3*a+e]:0,s=Math.fround(t);r[l+e]=s,r[l+e+12]=t-s}}}e.startIndices=t.vertexStarts,e.value=r}}dB.defaultProps=dR,dB.layerName="PathLayer";var dj=e.i(52168);let dD={isClosed:!0};function dN(e){return"positions"in e?e.positions:e}function dV(e){return"holeIndices"in e?e.holeIndices:null}function dU(e,t,i,n,r){let s,o,a=t,l=i.length;for(let t=0;t<l;t++)for(let r=0;r<n;r++)e[a++]=i[t][r]||0;if(s=i[0],o=i[i.length-1],s[0]!==o[0]||s[1]!==o[1]||s[2]!==o[2])for(let t=0;t<n;t++)e[a++]=i[0][t]||0;return dD.start=t,dD.end=a,dD.size=n,h6(e,r,dD),a}function dG(e,t,i,n,r=0,s,o){let a=(s=s||i.length)-r;if(a<=0)return t;let l=t;for(let t=0;t<a;t++)e[l++]=i[r+t];if(!function(e,t,i,n){for(let r=0;r<t;r++)if(e[i+r]!==e[n-t+r])return!1;return!0}(i,n,r,s))for(let t=0;t<n;t++)e[l++]=i[r+t];return dD.start=t,dD.end=l,dD.size=n,h6(e,o,dD),l}function dW(e,t,i){let n=e.length/3,r=0;for(let s=0;s<n;s++){let o=(s+1)%n;r+=e[3*s+t]*e[3*o+i],r-=e[3*o+t]*e[3*s+i]}return Math.abs(r/2)}function d$(e,t,i,n){let r=e.length/3;for(let s=0;s<r;s++){let r=3*s,o=e[r+0],a=e[r+1],l=e[r+2];e[r+t]=o,e[r+i]=a,e[r+n]=l}}class dq extends h4{constructor(e){const{fp64:t,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:i,size:1}}})}get(e){let{attributes:t}=this;return"indices"===e?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){let t=function(e,t){var i,n=e;if(!Array.isArray(n=n&&n.positions||n)&&!ArrayBuffer.isView(n))throw Error("invalid polygon");let r=[],s=[];if("positions"in e){let{positions:i,holeIndices:n}=e;if(n){let e=0;for(let o=0;o<=n.length;o++)e=dG(r,e,i,t,n[o-1],n[o],0===o?1:-1),s.push(e);return s.pop(),{positions:r,holeIndices:s}}e=i}if(!Array.isArray(e[0]))return dG(r,0,e,t,0,r.length,1),r;if(!((i=e).length>=1&&i[0].length>=2&&Number.isFinite(i[0][0]))){let i=0;for(let[n,o]of e.entries())i=dU(r,i,o,t,0===n?1:-1),s.push(i);return s.pop(),{positions:r,holeIndices:s}}return dU(r,0,e,t,1),r}(e,this.positionSize);return this.opts.resolution?db(dN(t),dV(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?function(e,t=null,i){let{size:n=2,normalize:r=!0,edgeTypes:s=!1}=i||{};t=t||[];let o=[],a=[],l=0,c=0;for(let r=0;r<=t.length;r++){let s=t[r]||e.length,u=c,h=function(e,t,i,n){let r=-1,s=-1;for(let o=i+1;o<n;o+=t){let t=Math.abs(e[o]);t>r&&(r=t,s=o-1)}return s}(e,n,l,s);for(let t=h;t<s;t++)o[c++]=e[t];for(let t=l;t<h;t++)o[c++]=e[t];dC(o,n,u,c),function(e,t,i,n,r=85.051129){let s=e[i],o=e[n-t];if(Math.abs(s-o)>180){let n=dm(e,0,t,i);n[0]+=360*Math.round((o-s)/360),df(e,n),n[1]=Math.sign(n[1])*r,df(e,n),n[0]=s,df(e,n)}}(o,n,u,c,i?.maxLatitude),l=s,a[r]=c}a.pop();let u=db(o,a,{size:n,gridResolution:360,gridOffset:[-180,-180],edgeTypes:s});if(r)for(let e of u)dM(e.positions,n);return u}(dN(t),dV(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(dH(e)){let t=0;for(let i of e)t+=this.getGeometrySize(i);return t}return dN(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&dH(e))for(let i of e){let e=this.getGeometrySize(i);t.geometrySize=e,this.updateGeometryAttributes(i,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else this._updateIndices(e,t),this._updatePositions(e,t),this._updateVertexValid(e,t)}_updateIndices(e,{geometryIndex:t,vertexStart:i,indexStart:n}){let{attributes:r,indexStarts:s,typedArrayManager:o}=this,a=r.indices;if(!a||!e)return;let l=n,c=function(e,t,i,n){let r=dV(e);r&&(r=r.map(e=>e/t));let s=dN(e),o=n&&3===t;if(i){let e=s.length;s=s.slice();let n=[];for(let r=0;r<e;r+=t){n[0]=s[r],n[1]=s[r+1],o&&(n[2]=s[r+2]);let e=i(n);s[r]=e[0],s[r+1]=e[1],o&&(s[r+2]=e[2])}}if(o){let e=dW(s,0,1),t=dW(s,0,2),n=dW(s,1,2);if(!e&&!t&&!n)return[];e>t&&e>n||(t>n?(i||(s=s.slice()),d$(s,0,2,1)):(i||(s=s.slice()),d$(s,2,0,1)))}return(0,dj.default)(s,r,t)}(e,this.positionSize,this.opts.preproject,this.opts.full3d);a=o.allocate(a,n+c.length,{copy:!0});for(let e=0;e<c.length;e++)a[l++]=c[e]+i;s[t+1]=n+c.length,r.indices=a}_updatePositions(e,{vertexStart:t,geometrySize:i}){let{attributes:{positions:n},positionSize:r}=this;if(!n||!e)return;let s=dN(e);for(let e=t,o=0;o<i;e++,o++){let t=s[o*r],i=s[o*r+1],a=r>2?s[o*r+2]:0;n[3*e]=t,n[3*e+1]=i,n[3*e+2]=a}}_updateVertexValid(e,{vertexStart:t,geometrySize:i}){let{positionSize:n}=this,r=this.attributes.vertexValid,s=e&&dV(e);if(e&&e.edgeTypes?r.set(e.edgeTypes,t):r.fill(1,t,t+i),s)for(let e=0;e<s.length;e++)r[t+s[e]/n-1]=0;r[t+i-1]=0}}function dH(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}let dZ=`\
layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,dY={name:"solidPolygon",source:`\
struct SolidPolygonUniforms {
  extruded: f32,
  isWireframe: f32,
  elevationScale: f32,
};

@group(0) @binding(auto) var<uniform> solidPolygon: SolidPolygonUniforms;
`,vs:dZ,fs:dZ,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},dX=`\
in vec4 fillColors;
in vec4 lineColors;
in float rowIndexes;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,dK=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${dX}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,dJ=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${dX}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,dQ=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function d0(){return`\
fn project_offset_normal(vector: vec3<f32>) -> vec3<f32> {
  if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project.commonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

fn apply_polygon_color(
  colors: vec4<f32>,
  normal: vec3<f32>,
  position: vec4<f32>
) -> vec4<f32> {
  if (solidPolygon.extruded > 0.5) {
    let lightColor = lighting_getLightColor2(
      colors.rgb,
      project.cameraPosition,
      position.xyz,
      normal
    );
    return vec4<f32>(lightColor, colors.a * layer.opacity);
  }
  return vec4<f32>(colors.rgb, colors.a * layer.opacity);
}
`}function d1(){return`\
@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0, 0.0);

  clip_filterColor(inp.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = inp.vColor;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`}let d2=[0,0,0,255],d3={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class d4 extends u5{getShaders(e){var t;let i=this.props._normalize||"CCW"!==this.props._windingOrder?1:0;return super.getShaders({vs:"top"===e?dK:dJ,fs:dQ,source:(t=!!i,"top"===e?`\
${d0()}

struct Attributes {
  @location(0) vertexPositions: vec3<f32>,
  @location(1) vertexPositions64Low: vec3<f32>,
  @location(2) elevations: f32,
  @location(3) fillColors: vec4<f32>,
  @location(4) lineColors: vec4<f32>,
  @location(5) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;

  var pos = attributes.vertexPositions;
  if (solidPolygon.extruded > 0.5) {
    pos.z += attributes.elevations * solidPolygon.elevationScale;
  }

  geometry.worldPosition = attributes.vertexPositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    pos,
    attributes.vertexPositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_normal(vec3<f32>(0.0, 0.0, 1.0));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${d1()}
`:`\
const RING_WINDING_ORDER_CW: bool = ${t?"true":"false"};

${d0()}

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) vertexPositions: vec3<f32>,
  @location(2) vertexPositions64Low: vec3<f32>,
  @location(3) nextVertexPositions: vec3<f32>,
  @location(4) nextVertexPositions64Low: vec3<f32>,
  @location(5) vertexValid: f32,
  @location(6) elevations: f32,
  @location(7) fillColors: vec4<f32>,
  @location(8) lineColors: vec4<f32>,
  @location(9) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;
  outp.position = vec4<f32>(0.0);
  outp.vColor = vec4<f32>(0.0);
  outp.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);
  outp.clipCoordinates = vec2<f32>(0.0);

  if (attributes.vertexValid < 0.5) {
    return outp;
  }

  let pos = select(attributes.nextVertexPositions, attributes.vertexPositions, RING_WINDING_ORDER_CW);
  let pos64Low = select(
    attributes.nextVertexPositions64Low,
    attributes.vertexPositions64Low,
    RING_WINDING_ORDER_CW
  );
  let nextPos = select(attributes.vertexPositions, attributes.nextVertexPositions, RING_WINDING_ORDER_CW);
  let nextPos64Low = select(
    attributes.vertexPositions64Low,
    attributes.nextVertexPositions64Low,
    RING_WINDING_ORDER_CW
  );

  let position = mix(pos, nextPos, attributes.positions.x);
  let position64Low = mix(pos64Low, nextPos64Low, attributes.positions.x);

  var worldPosition = position;
  if (solidPolygon.extruded > 0.5) {
    worldPosition.z += attributes.elevations * attributes.positions.y * solidPolygon.elevationScale;
  }

  geometry.worldPosition = position;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    worldPosition,
    position64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_offset_normal(vec3<f32>(
    pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
    nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
    0.0
  ));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${d1()}
`),defines:{RING_WINDING_ORDER_CW:i},modules:[iq,ei,J,r1,dY,..."webgpu"===this.context.device.type?[hw]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){let e,{viewport:t}=this.context,{coordinateSystem:i}=this.props,{_full3d:n}=this.props;t.isGeospatial&&"default"===i&&(i="lnglat"),"lnglat"===i&&(e=n?t.projectPosition.bind(t):t.projectFlat.bind(t)),this.setState({numInstances:0,polygonTesselator:new dq({preproject:e,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let r=this.getAttributeManager(),s="webgpu"===this.context.device.type;r.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:d3,accessor:"getPolygon",update:this.calculatePositions,noAlloc:!0,...s?{}:{shaderAttributes:{nextVertexPositions:{vertexOffset:1}}}},...s?{nextVertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:!1,update:this.calculateNextPositions,noAlloc:!0}}:{},[s?"vertexValid":"instanceVertexValid"]:{size:1,type:s?"float32":"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:"dynamic",transition:d3,accessor:"getElevation",bufferGroup:"solid-polygon-instance-data"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:d3,accessor:"getFillColor",defaultValue:d2,bufferGroup:"solid-polygon-instance-data"},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:d3,accessor:"getLineColor",defaultValue:d2,bufferGroup:"solid-polygon-instance-data"},rowIndexes:{size:1,type:"uint32",stepMode:"dynamic",accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:"solid-polygon-instance-data"}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i}=t,n=this.props.data;return n[0]&&n[0].__source&&(t.object=n.find(e=>e.__source.index===i)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:i,wireframe:n,elevationScale:r}=this.props,{topModel:s,sideModel:o,wireframeModel:a,polygonTesselator:l}=this.state,c={extruded:!!t,elevationScale:r,isWireframe:!1};a&&n&&(a.setInstanceCount(l.instanceCount-1),a.shaderInputs.setProps({solidPolygon:{...c,isWireframe:!0}}),a.draw(this.context.renderPass)),o&&i&&(o.setInstanceCount(l.instanceCount-1),o.shaderInputs.setProps({solidPolygon:c}),o.draw(this.context.renderPass)),s&&i&&(s.setVertexCount(l.vertexCount),s.shaderInputs.setProps({solidPolygon:c}),s.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:i,changeFlags:n}=e,r=this.getAttributeManager();(n.extensionsChanged||t.filled!==i.filled||t.extruded!==i.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),r.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,n=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:n.getPolygon,buffers:"webgpu"===this.context.device.type?{...n}:n,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let e,t,i,{id:n,filled:r,extruded:s}=this.props;if(r){let t=this.getShaders("top");t.defines={...t.defines,NON_INSTANCED_MODEL:1};let i=this.getAttributeManager().getBufferLayouts({isInstanced:!1});"webgpu"===this.context.device.type&&(i=i.filter(e=>"indices"!==e.name&&"vertexValid"!==e.name&&"instanceVertexValid"!==e.name&&"nextVertexPositions"!==e.name)),e=new u9.Model(this.context.device,{...t,id:`${n}-top`,topology:"triangle-list",bufferLayout:i,isIndexed:!0,userData:{excludeAttributes:{vertexValid:!0,instanceVertexValid:!0,nextVertexPositions:!0}}})}if(s){let e=this.getAttributeManager().getBufferLayouts({isInstanced:!0});"webgpu"===this.context.device.type&&(e=e.filter(e=>"indices"!==e.name)),t=new u9.Model(this.context.device,{...this.getShaders("side"),id:`${n}-side`,bufferLayout:e,geometry:new he.Geometry({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),i=new u9.Model(this.context.device,{...this.getShaders("side"),id:`${n}-wireframe`,bufferLayout:e,geometry:new he.Geometry({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[t,i,e].filter(Boolean),topModel:e,sideModel:t,wireframeModel:i}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get("indices")}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts;let i=this.props.data.attributes?.getPolygon;if("webgpu"===this.context.device.type&&ArrayBuffer.isView(i?.value)){let{value:n,size:r=3,offset:s=0,stride:o}=i,a=s/n.BYTES_PER_ELEMENT,l=o?o/n.BYTES_PER_ELEMENT:r,c=new Float64Array(3*t.instanceCount);for(let e=0;e<t.instanceCount;e++){let t=a+e*l,i=3*e;c[i]=n[t],c[i+1]=n[t+1],c[i+2]=r>2?n[t+2]:0}e.value=c;return}e.value=t.get("positions")}calculateVertexValid(e){let t=this.props.data.attributes?.instanceVertexValid?.value,i="webgpu"===this.context.device.type&&t?t:this.state.polygonTesselator.get("vertexValid");e.value="webgpu"===this.context.device.type&&i?Float32Array.from(i):i}calculateNextPositions(e){let{polygonTesselator:t}=this.state,i=this.getAttributeManager().getAttributes(),n=i.vertexPositions.value,r=this.props.data.attributes?.instanceVertexValid?.value||i.vertexValid?.value||t.get("vertexValid");if(e.startIndices=t.vertexStarts,!n){e.value=n;return}let s=n.length/3,o=new n.constructor(n.length);for(let e=0;e<s;e++){let t=3*e,i=r?.[e]&&e+1<s?t+3:t;for(let e=0;e<3;e++)o[t+e]=n[i+e]}e.value=o}}d4.defaultProps={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:e=>e.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:d2},getLineColor:{type:"accessor",value:d2},material:!0},d4.layerName="SolidPolygonLayer";let d6={circle:{type:hM,props:{filled:"filled",stroked:"stroked",lineWidthMaxPixels:"lineWidthMaxPixels",lineWidthMinPixels:"lineWidthMinPixels",lineWidthScale:"lineWidthScale",lineWidthUnits:"lineWidthUnits",pointRadiusMaxPixels:"radiusMaxPixels",pointRadiusMinPixels:"radiusMinPixels",pointRadiusScale:"radiusScale",pointRadiusUnits:"radiusUnits",pointAntialiasing:"antialiasing",pointBillboard:"billboard",getFillColor:"getFillColor",getLineColor:"getLineColor",getLineWidth:"getLineWidth",getPointRadius:"getRadius"}},icon:{type:hm,props:{iconAtlas:"iconAtlas",iconMapping:"iconMapping",iconSizeMaxPixels:"sizeMaxPixels",iconSizeMinPixels:"sizeMinPixels",iconSizeScale:"sizeScale",iconSizeUnits:"sizeUnits",iconAlphaCutoff:"alphaCutoff",iconBillboard:"billboard",getIcon:"getIcon",getIconAngle:"getAngle",getIconColor:"getColor",getIconPixelOffset:"getPixelOffset",getIconSize:"getSize"}},text:{type:h3,props:{textSizeMaxPixels:"sizeMaxPixels",textSizeMinPixels:"sizeMinPixels",textSizeScale:"sizeScale",textSizeUnits:"sizeUnits",textBackground:"background",textBackgroundPadding:"backgroundPadding",textFontFamily:"fontFamily",textFontWeight:"fontWeight",textLineHeight:"lineHeight",textMaxWidth:"maxWidth",textOutlineColor:"outlineColor",textOutlineWidth:"outlineWidth",textWordBreak:"wordBreak",textCharacterSet:"characterSet",textBillboard:"billboard",textFontSettings:"fontSettings",getText:"getText",getTextAngle:"getAngle",getTextColor:"getColor",getTextPixelOffset:"getPixelOffset",getTextSize:"getSize",getTextAnchor:"getTextAnchor",getTextAlignmentBaseline:"getAlignmentBaseline",getTextBackgroundColor:"getBackgroundColor",getTextBorderColor:"getBorderColor",getTextBorderWidth:"getBorderWidth"}}},d5={type:dB,props:{lineWidthUnits:"widthUnits",lineWidthScale:"widthScale",lineWidthMinPixels:"widthMinPixels",lineWidthMaxPixels:"widthMaxPixels",lineJointRounded:"jointRounded",lineCapRounded:"capRounded",lineMiterLimit:"miterLimit",lineBillboard:"billboard",lineAntialiasing:"antialiasing",getLineColor:"getColor",getLineWidth:"getWidth"}},d8={type:d4,props:{extruded:"extruded",filled:"filled",wireframe:"wireframe",elevationScale:"elevationScale",material:"material",_full3d:"_full3d",getElevation:"getElevation",getFillColor:"getFillColor",getLineColor:"getLineColor"}};function d7({type:e,props:t}){let i={};for(let n in t)i[n]=e.defaultProps[t[n]];return i}function d9(e,t){let{transitions:i,updateTriggers:n}=e.props,r={updateTriggers:{},transitions:i&&{getPosition:i.geometry}};for(let s in t){let o=t[s],a=e.props[s];s.startsWith("get")&&(a=e.getSubLayerAccessor(a),r.updateTriggers[o]=n[s],i&&(r.transitions[o]=i[s])),r[o]=a}return r}function pe(e,t,i={}){let n={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:r=0,endRow:s=e.length}=i;for(let i=r;i<s;i++){let r=e[i],{geometry:s}=r;if(s)if("GeometryCollection"===s.type){tT.assert(Array.isArray(s.geometries),"GeoJSON does not have geometries array");let{geometries:e}=s;for(let s=0;s<e.length;s++)pt(e[s],n,t,r,i)}else pt(s,n,t,r,i)}return n}function pt(e,t,i,n,r){let{type:s,coordinates:o}=e,{pointFeatures:a,lineFeatures:l,polygonFeatures:c,polygonOutlineFeatures:u}=t;if(!function(e,t){let i=pi[e];for(tT.assert(i,`Unknown GeoJSON type ${e}`);t&&--i>0;)t=t[0];return t&&Number.isFinite(t[0])}(s,o))return void tT.warn(`${s} coordinates are malformed`)();switch(s){case"Point":a.push(i({geometry:e},n,r));break;case"MultiPoint":o.forEach(e=>{a.push(i({geometry:{type:"Point",coordinates:e}},n,r))});break;case"LineString":l.push(i({geometry:e},n,r));break;case"MultiLineString":o.forEach(e=>{l.push(i({geometry:{type:"LineString",coordinates:e}},n,r))});break;case"Polygon":c.push(i({geometry:e},n,r)),o.forEach(e=>{u.push(i({geometry:{type:"LineString",coordinates:e}},n,r))});break;case"MultiPolygon":o.forEach(e=>{c.push(i({geometry:{type:"Polygon",coordinates:e}},n,r)),e.forEach(e=>{u.push(i({geometry:{type:"LineString",coordinates:e}},n,r))})})}}let pi={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function pn(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function pr(e){return e.geometry.coordinates}let ps=["points","linestrings","polygons"],po={...d7(d6.circle),...d7(d6.icon),...d7(d6.text),...d7(d5),...d7(d8),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:"object",value:null},iconMapping:{type:"object",value:{}},getIcon:{type:"accessor",value:e=>e.properties.icon},getText:{type:"accessor",value:e=>e.properties.text},pointType:"circle",getRadius:{deprecatedFor:"getPointRadius"}};class pa extends u7{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;let{data:i}=this.props,n=i&&"points"in i&&"polygons"in i&&"lines"in i;this.setState({binary:n}),n?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){let i=function(e){let t=pn(),{points:i,lines:n,polygons:r}=e,s=function(e){let t={points:null,lines:null,polygons:null};for(let i in t){let n=e[i].globalFeatureIds.value;t[i]=new Uint32Array(n)}return t}(e);t.points.data={length:i.positions.value.length/i.positions.size,attributes:{...i.attributes,getPosition:i.positions,rowIndexes:{size:1,type:"uint32",value:s.points}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},t.lines.data={length:n.pathIndices.value.length-1,startIndices:n.pathIndices.value,attributes:{...n.attributes,getPath:n.positions,rowIndexes:{size:1,type:"uint32",value:s.lines}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},t.lines._pathType="open";let o=Array(r.positions.value.length/r.positions.size).fill(1);for(let e of r.primitivePolygonIndices.value)o[e-1]=0;return t.polygons.data={length:r.polygonIndices.value.length-1,startIndices:r.polygonIndices.value,attributes:{...r.attributes,getPolygon:r.positions,instanceVertexValid:{size:1,value:new Uint16Array(o)},rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},t.polygons._normalize=!1,r.triangles&&(t.polygons.data.attributes.indices=r.triangles.value),t.polygonsOutline.data={length:r.primitivePolygonIndices.value.length-1,startIndices:r.primitivePolygonIndices.value,attributes:{...r.attributes,getPath:r.positions,rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},t.polygonsOutline._pathType="open",t}(e.data);this.setState({layerProps:i})}_updateStateJSON({props:e,changeFlags:t}){let i=function(e){if(Array.isArray(e))return e;switch(tT.assert(e.type,"GeoJSON does not have type"),e.type){case"Feature":return[e];case"FeatureCollection":return tT.assert(Array.isArray(e.features),"GeoJSON does not have features array"),e.features;default:return[{geometry:e}]}}(e.data),n=this.getSubLayerRow.bind(this),r={},s={};if(Array.isArray(t.dataChanged)){let e=this.state.features;for(let t in e)r[t]=e[t].slice(),s[t]=[];for(let o of t.dataChanged){let t=pe(i,n,o);for(let i in e)s[i].push(function({data:e,getIndex:t,dataRange:i,replace:n}){let{startRow:r=0,endRow:s=1/0}=i,o=e.length,a=o,l=o;for(let i=0;i<o;i++){let n=t(e[i]);if(a>i&&n>=r&&(a=i),n>=s){l=i;break}}let c=a,u=l-a!==n.length?e.slice(l):void 0;for(let t=0;t<n.length;t++)e[c++]=n[t];if(u){for(let t=0;t<u.length;t++)e[c++]=u[t];e.length=c}return{startRow:a,endRow:a+n.length}}({data:r[i],getIndex:e=>e.__source.index,dataRange:o,replace:t[i]}))}}else r=pe(i,n);let o=function(e,t){let i=pn(),{pointFeatures:n,lineFeatures:r,polygonFeatures:s,polygonOutlineFeatures:o}=e;return i.points.data=n,i.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),i.points.getPosition=pr,i.lines.data=r,i.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),i.lines.getPath=pr,i.polygons.data=s,i.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),i.polygons.getPolygon=pr,i.polygonsOutline.data=o,i.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),i.polygonsOutline.getPath=pr,i}(r,s);this.setState({features:r,featuresDiff:s,layerProps:o})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i,sourceLayer:n}=t;return t.featureType=ps.find(e=>n.id.startsWith(`${this.id}-${e}-`)),i>=0&&n.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[i]),t}_updateAutoHighlight(e){let t=`${this.id}-points-`,i="points"===e.featureType;for(let n of this.getSubLayers())n.id.startsWith(t)===i&&n.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:t}=this.props,{layerProps:i}=this.state,n="polygons-fill",r=this.shouldRenderSubLayer(n,i.polygons?.data)&&this.getSubLayerClass(n,d8.type);if(r){let s=d9(this,d8.props),o=e&&t;return o||delete s.getLineColor,s.updateTriggers.lineColors=o,new r(s,this.getSubLayerProps({id:n,updateTriggers:s.updateTriggers}),i.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:t}=this.props,{layerProps:i}=this.state,n="polygons-stroke",r="linestrings",s=!e&&t&&this.shouldRenderSubLayer(n,i.polygonsOutline?.data)&&this.getSubLayerClass(n,d5.type),o=this.shouldRenderSubLayer(r,i.lines?.data)&&this.getSubLayerClass(r,d5.type);if(s||o){let e=d9(this,d5.props);return[s&&new s(e,this.getSubLayerProps({id:n,updateTriggers:e.updateTriggers}),i.polygonsOutline),o&&new o(e,this.getSubLayerProps({id:r,updateTriggers:e.updateTriggers}),i.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:t,binary:i}=this.state,{highlightedObjectIndex:n}=this.props;!i&&Number.isFinite(n)&&(n=t.points.data.findIndex(e=>e.__source.index===n));let r=new Set(e.split("+")),s=[];for(let e of r){let r=`points-${e}`,o=d6[e],a=o&&this.shouldRenderSubLayer(r,t.points?.data)&&this.getSubLayerClass(r,o.type);if(a){let l=d9(this,o.props),c=t.points;if("text"===e&&i){let{rowIndexes:e,...t}=c.data.attributes;c={...c,data:{...c.data,attributes:t}}}s.push(new a(l,this.getSubLayerProps({id:r,updateTriggers:l.updateTriggers,highlightedObjectIndex:n}),c))}}return s}renderLayers(){let{extruded:e}=this.props,t=this._renderPolygonLayer();return[!e&&t,this._renderLineLayers(),this._renderPointLayers(),e&&t]}getSubLayerAccessor(e){let{binary:t}=this.state;return t&&"function"==typeof e?(t,i)=>{let{data:n,index:r}=i;return e(function(e,t){if(!e)return null;let i="startIndices"in e?e.startIndices[t]:t,n=e.featureIds.value[i];return -1!==i?function(e,t,i){let n={properties:{...e.properties[t]}};for(let t in e.numericProps)n.properties[t]=e.numericProps[t].value[i];return n}(e,n,i):null}(n,r),i)}:super.getSubLayerAccessor(e)}}pa.layerName="GeoJsonLayer",pa.defaultProps=po;class pl{static get componentName(){return Object.prototype.hasOwnProperty.call(this,"extensionName")?this.extensionName:""}constructor(e){e&&(this.opts=e)}equals(e){return this===e||this.constructor===e.constructor&&oK(this.opts,e.opts,1)}getShaders(e){return null}getSubLayerProps(e){let{defaultProps:t}=e.constructor,i={updateTriggers:{}};for(let e in t)if(e in this.props){let n=t[e],r=this.props[e];i[e]=r,n&&"accessor"===n.type&&(i.updateTriggers[e]=this.props.updateTriggers[e],"function"==typeof r&&(i[e]=this.getSubLayerAccessor(r)))}return i}initializeState(e,t){}updateState(e,t){}onNeedsRedraw(e){}getNeedsPickingBuffer(e){return!1}draw(e,t){}finalizeState(e,t){}}pl.defaultProps={},pl.extensionName="LayerExtension";let pc=pl,pu=`
layout(std140) uniform clipUniforms {
  vec4 bounds;
} clip;

bool clip_isInBounds(vec2 position) {
  return position.x >= clip.bounds[0] && position.y >= clip.bounds[1] && position.x < clip.bounds[2] && position.y < clip.bounds[3];
}
`,ph={name:"clip",vs:pu,uniformTypes:{bounds:"vec4<f32>"}},pd={"vs:#decl":`
out float clip_isVisible;
`,"vs:DECKGL_FILTER_GL_POSITION":`
  clip_isVisible = float(clip_isInBounds(geometry.worldPosition.xy));
`,"fs:#decl":`
in float clip_isVisible;
`,"fs:DECKGL_FILTER_COLOR":`
  if (clip_isVisible < 0.5) discard;
`},pp={name:"clip",fs:pu,uniformTypes:{bounds:"vec4<f32>"}},pf={"vs:#decl":`
out vec2 clip_commonPosition;
`,"vs:DECKGL_FILTER_GL_POSITION":`
  clip_commonPosition = geometry.position.xy;
`,"fs:#decl":`
in vec2 clip_commonPosition;
`,"fs:DECKGL_FILTER_COLOR":`
  if (!clip_isInBounds(clip_commonPosition)) discard;
`};class pg extends pc{getShaders(){let e="instancePositions"in this.getAttributeManager().attributes;return(void 0!==this.props.clipByInstance&&(e=!!this.props.clipByInstance),this.state.clipByInstance=e,"webgpu"===this.context.device.type)?{}:e?{modules:[ph],inject:pd}:{modules:[pp],inject:pf}}draw(){let{clipBounds:e}=this.props,t={};if(this.state.clipByInstance)t.bounds=e;else{let i=this.projectPosition([e[0],e[1],0]),n=this.projectPosition([e[2],e[3],0]);t.bounds=[Math.min(i[0],n[0]),Math.min(i[1],n[1]),Math.max(i[0],n[0]),Math.max(i[1],n[1])]}"webgpu"===this.context.device.type&&(t.enabled=!0,t.mode=this.state.clipByInstance?"instance":"geometry"),this.setShaderModuleProps({clip:t})}}function pm(e,t){let i={};for(let n in e)i[n]={value:e[n],size:t};return i}function pv(e,t,i,n){for(let r in e.numericProps)if(r in t){let s=t[r];e.numericProps[r].fill(s,i,i+n)}}function p_(e,t){let i={};for(let n in e)t.includes(n)||(i[n]=e[n]);return i}pg.defaultProps={clipBounds:[0,0,1,1],clipByInstance:void 0},pg.extensionName="ClipExtension";let py="4.5.1",pb=py[0]>="0"&&py[0]<="9"?`v${py}`:"",px=(g=new tA.Log({id:"loaders.gl"}),globalThis.loaders||={},globalThis.loaders.log=g,globalThis.loaders.version=pb,globalThis.probe||={},globalThis.probe.loaders=g,g);var pw=e.i(4109);function pP(e,t){for(let i=0;i<e.length;++i)e[i]/=t}class pC{properties;extent;type;id;_pbf;_geometry;_keys;_values;_geometryInfo;static types=["Unknown","Point","LineString","Polygon"];constructor(e,t,i,n,r,s){this.properties={},this.extent=i,this.type=0,this.id=null,this._pbf=e,this._geometry=-1,this._keys=n,this._values=r,this._geometryInfo=s,e.readFields(pS,this,t)}toGeoJSONFeature(e,t){let i=this.loadGeometry();return"wgs84"===e?pM(this,i,e=>(function e(t,i,n){if("number"!=typeof t[0][0]){for(let r of t)e(r,i,n);return}let r=n*Math.pow(2,i.z),s=n*i.x,o=n*i.y;for(let e=0;e<t.length;e++){let i=t[e];i[0]=(i[0]+s)*360/r-180;let n=180-(i[1]+o)*360/r;i[1]=360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90}})(e,t,this.extent)):pM(this,i,function e(t,i){if(Array.isArray(t[0])){for(let n of t)e(n,i);return}t[0]/=i,t[1]/=i})}toBinaryFeature(e,t){let i=this.loadFlatGeometry();return"wgs84"===e?this._toBinaryCoordinates(i,e=>(function(e,t,i){let{x:n,y:r,z:s}=t,o=i*Math.pow(2,s),a=i*n,l=i*r;for(let t=0,i=e.length;t<i;t+=2){e[t]=(e[t]+a)*360/o-180;let i=180-(e[t+1]+l)*360/o;e[t+1]=360/Math.PI*Math.atan(Math.exp(i*Math.PI/180))-90}})(e,t,this.extent)):this._toBinaryCoordinates(i,pP)}bbox(){let e=this._pbf;e.pos=this._geometry;let t=e.readVarint()+e.pos,i=1,n=0,r=0,s=0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(;e.pos<t;){if(n<=0){let t=e.readVarint();i=7&t,n=t>>3}if(n--,1===i||2===i)r+=e.readSVarint(),s+=e.readSVarint(),r<o&&(o=r),r>a&&(a=r),s<l&&(l=s),s>c&&(c=s);else if(7!==i)throw Error(`unknown command ${i}`)}return[o,l,a,c]}_toBinaryCoordinates(e,t){let i;switch(t(e.data,this.extent),this.type){case 1:this._geometryInfo.pointFeaturesCount++,this._geometryInfo.pointPositionsCount+=e.indices.length,i={type:"Point",...e};break;case 2:this._geometryInfo.lineFeaturesCount++,this._geometryInfo.linePathsCount+=e.indices.length,this._geometryInfo.linePositionsCount+=e.data.length/2,i={type:"LineString",...e};break;case 3:for(let t of(i=function(e){let t,i=e.indices.length,n="Polygon";if(i<=1)return{type:n,data:e.data,areas:[[h8(e.data)]],indices:[e.indices]};let r=[],s=[],o=[],a=[],l=0;for(let n,c=0,u;c<i;c++){u=e.indices[c]-l,n=e.indices[c+1]-l||e.data.length;let i=h8(e.data.slice(u,n));if(0===i){let t=e.data.slice(0,u),i=e.data.slice(n);e.data=t.concat(i),l+=n-u;continue}void 0===t&&(t=i<0),t===i<0?(a.length&&(r.push(o),s.push(a)),a=[u],o=[i]):(o.push(i),a.push(u))}return r.push(o),a.length&&s.push(a),{type:n,areas:r,indices:s,data:e.data}}(e),this._geometryInfo.polygonFeaturesCount++,this._geometryInfo.polygonObjectsCount+=i.indices.length,i.indices))this._geometryInfo.polygonRingsCount+=t.length;this._geometryInfo.polygonPositionsCount+=i.data.length/2;break;default:throw Error(`Invalid geometry type: ${this.type}`)}let n={type:"Feature",geometry:i,properties:this.properties};return null!==this.id&&(n.id=this.id),n}loadGeometry(){let e,t=this._pbf;t.pos=this._geometry;let i=t.readVarint()+t.pos,n=1,r=0,s=0,o=0,a=[];for(;t.pos<i;){if(r<=0){let e=t.readVarint();n=7&e,r=e>>3}switch(r--,n){case 1:case 2:s+=t.readSVarint(),o+=t.readSVarint(),1===n&&(e&&a.push(e),e=[]),e&&e.push([s,o]);break;case 7:e&&e.push(e[0].slice());break;default:throw Error(`unknown command ${n}`)}}return e&&a.push(e),a}loadFlatGeometry(){let e,t=this._pbf;t.pos=this._geometry;let i=t.readVarint()+t.pos,n=1,r=0,s=0,o=0,a=0,l=[],c=[];for(;t.pos<i;)if(r<=0&&(n=7&(e=t.readVarint()),r=e>>3),r--,1===n||2===n)s+=t.readSVarint(),o+=t.readSVarint(),1===n&&l.push(a),c.push(s,o),a+=2;else if(7===n){if(a>0){let e=l[l.length-1];c.push(c[e],c[e+1]),a+=2}}else throw Error(`unknown command ${n}`);return{data:c,indices:l}}}function pM(e,t,i){let n,r,s,o=pC.types[e.type];switch(e.type){case 1:let a=[];for(n=0;n<t.length;n++)a[n]=t[n][0];i(s=a,e.extent);break;case 2:for(n=0,s=t;n<s.length;n++)i(s[n],e.extent);break;case 3:for(n=0,s=function(e){let t,i,n=e.length;if(n<=1)return[e];let r=[];for(let s=0;s<n;s++){let n=function(e){let t=0;for(let i=0,n=e.length-1,r,s;i<e.length;n=i++)r=e[i],t+=((s=e[n])[0]-r[0])*(r[1]+s[1]);return t}(e[s]);0!==n&&(void 0===i&&(i=n<0),i===n<0?(t&&r.push(t),t=[e[s]]):t&&t.push(e[s]))}return t&&r.push(t),r}(t);n<s.length;n++)for(r=0;r<s[n].length;r++)i(s[n][r],e.extent);break;default:throw Error("illegal vector tile type")}1===s.length?s=s[0]:o=`Multi${o}`;let l={type:"Feature",geometry:{type:o,coordinates:s},properties:e.properties};return null!==e.id&&(l.id=e.id),l}function pS(e,t,i){t&&i&&(1===e?t.id=i.readVarint():2===e?function(e,t){let i=e.readVarint()+e.pos;for(;e.pos<i;){let i=t._keys[e.readVarint()],n=t._values[e.readVarint()];t.properties[i]=n}}(i,t):3===e?t.type=i.readVarint():4===e&&(t._geometry=i.pos))}class pE{version;name;extent;length;_pbf;_keys;_values;_features;constructor(e,t){this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(pL,this,t),this.length=this._features.length}getGeoJSONFeature(e){if(e<0||e>=this._features.length)throw Error("feature index out of bounds");this._pbf.pos=this._features[e];let t=this._pbf.readVarint()+this._pbf.pos;return new pC(this._pbf,t,this.extent,this._keys,this._values)}getBinaryFeature(e,t){if(e<0||e>=this._features.length)throw Error("feature index out of bounds");this._pbf.pos=this._features[e];let i=this._pbf.readVarint()+this._pbf.pos;return new pC(this._pbf,i,this.extent,this._keys,this._values,t)}}function pL(e,t,i){t&&i&&(15===e?t.version=i.readVarint():1===e?t.name=i.readString():5===e?t.extent=i.readVarint():2===e?t._features.push(i.pos):3===e?t._keys.push(i.readString()):4===e&&t._values.push(function(e){let t=null,i=e.readVarint()+e.pos;for(;e.pos<i;){let i=e.readVarint()>>3;t=1===i?e.readString():2===i?e.readFloat():3===i?e.readDouble():4===i?e.readVarint64():5===i?e.readVarint():6===i?e.readSVarint():7===i?e.readBoolean():null}return t}(i)))}class pA{layers;constructor(e,t){this.layers=e.readFields(pT,{},t)}}function pT(e,t,i){if(3===e&&i){let e=new pE(i,i.readVarint()+i.pos);e.length&&t&&(t[e.name]=e)}}function pk(e,t){let i=function(e){if(!e?.mvt)throw Error("mvt options required");if(e.mvt?.coordinates==="wgs84"&&!e.mvt.tileIndex)throw Error("MVT Loader: WGS84 coordinates need tileIndex property");return e.gis&&px.warn('MVTLoader: "options.gis" is deprecated, use "options.mvt.shape" instead')(),e.mvt}(t),n=t?.gis?.format||t?.mvt?.shape||t?.shape;switch(n){case"columnar-table":return{shape:"columnar-table",data:pI(e,i)};case"geojson-table":return{shape:"geojson-table",type:"FeatureCollection",features:pO(e,i)};case"geojson":return pO(e,i);case"binary-geometry":case"binary":return pI(e,i);default:throw Error(n||"undefined shape")}}function pI(e,t){let i,n,[r,s]=function(e,t){let i=[],n={coordLength:2,pointPositionsCount:0,pointFeaturesCount:0,linePositionsCount:0,linePathsCount:0,lineFeaturesCount:0,polygonPositionsCount:0,polygonObjectsCount:0,polygonRingsCount:0,polygonFeaturesCount:0};if(e.byteLength<=0)return[i,n];let r=new pA(new pw.default(e));return(t&&Array.isArray(t.layers)?t.layers:Object.keys(r.layers)).forEach(e=>{let s=r.layers[e];if(s)for(let r=0;r<s.length;r++){let o=function(e,t,i){let n=e.toBinaryFeature(t.coordinates||"local",t.tileIndex);return t.layerProperty&&n.properties&&(n.properties[t.layerProperty]=i),n}(s.getBinaryFeature(r,n),t,e);i.push(o)}}),[i,n]}(e,t),o=(n=Object.keys(i=function(e){let t={};for(let r of e)if(r.properties)for(let e in r.properties){var i,n;let s=r.properties[e];t[e]=(i=s,(n=t[e])!==Array&&Number.isFinite(i)?n===Float64Array||Math.fround(i)!==i?Float64Array:Float32Array:Array)}return t}(r)).filter(e=>i[e]!==Array),function(e,t,i){var n,r,s,o;let a,{pointPositionsCount:l,pointFeaturesCount:c,linePositionsCount:u,linePathsCount:h,lineFeaturesCount:d,polygonPositionsCount:p,polygonObjectsCount:f,polygonRingsCount:g,polygonFeaturesCount:m,propArrayTypes:v,coordLength:_}=t,{numericPropKeys:y=[],PositionDataType:b=Float32Array,triangulate:x=!0}=i,w=e[0]&&"id"in e[0],P=e.length>65535?Uint32Array:Uint16Array,C={type:"Point",positions:new b(l*_),globalFeatureIds:new P(l),featureIds:c>65535?new Uint32Array(l):new Uint16Array(l),numericProps:{},properties:[],fields:[]},M={type:"LineString",pathIndices:u>65535?new Uint32Array(h+1):new Uint16Array(h+1),positions:new b(u*_),globalFeatureIds:new P(u),featureIds:d>65535?new Uint32Array(u):new Uint16Array(u),numericProps:{},properties:[],fields:[]},S={type:"Polygon",polygonIndices:p>65535?new Uint32Array(f+1):new Uint16Array(f+1),primitivePolygonIndices:p>65535?new Uint32Array(g+1):new Uint16Array(g+1),positions:new b(p*_),globalFeatureIds:new P(p),featureIds:m>65535?new Uint32Array(p):new Uint16Array(p),numericProps:{},properties:[],fields:[]};for(let e of(x&&(S.triangles=[]),[C,M,S]))for(let t of y){let i=v[t];e.numericProps[t]=new i(e.positions.length/_)}M.pathIndices[h]=u,S.polygonIndices[f]=p,S.primitivePolygonIndices[g]=p;let E={pointPosition:0,pointFeature:0,linePosition:0,linePath:0,lineFeature:0,polygonPosition:0,polygonObject:0,polygonRing:0,polygonFeature:0,feature:0};for(let t of e){let e=t.geometry,i=t.properties||{};switch(e.type){case"Point":(function(e,t,i,n,r){t.positions.set(e.data,i.pointPosition*n);let s=e.data.length/n;pv(t,r,i.pointPosition,s),t.globalFeatureIds.fill(i.feature,i.pointPosition,i.pointPosition+s),t.featureIds.fill(i.pointFeature,i.pointPosition,i.pointPosition+s),i.pointPosition+=s})(e,C,E,_,i),C.properties.push(p_(i,y)),w&&C.fields.push({id:t.id}),E.pointFeature++;break;case"LineString":(function(e,t,i,n,r){t.positions.set(e.data,i.linePosition*n);let s=e.data.length/n;pv(t,r,i.linePosition,s),t.globalFeatureIds.fill(i.feature,i.linePosition,i.linePosition+s),t.featureIds.fill(i.lineFeature,i.linePosition,i.linePosition+s);for(let r=0,s=e.indices.length;r<s;++r){let o=e.indices[r],a=r===s-1?e.data.length:e.indices[r+1];t.pathIndices[i.linePath++]=i.linePosition,i.linePosition+=(a-o)/n}})(e,M,E,_,i),M.properties.push(p_(i,y)),w&&M.fields.push({id:t.id}),E.lineFeature++;break;case"Polygon":(function(e,t,i,n,r){t.positions.set(e.data,i.polygonPosition*n);let s=e.data.length/n;pv(t,r,i.polygonPosition,s),t.globalFeatureIds.fill(i.feature,i.polygonPosition,i.polygonPosition+s),t.featureIds.fill(i.polygonFeature,i.polygonPosition,i.polygonPosition+s);for(let r=0,s=e.indices.length;r<s;++r){let s=i.polygonPosition;t.polygonIndices[i.polygonObject++]=s;let o=e.areas[r],a=e.indices[r],l=e.indices[r+1];for(let r=0,s=a.length;r<s;++r){let o=a[r],c=r===s-1?void 0===l?e.data.length:l[0]:a[r+1];t.primitivePolygonIndices[i.polygonRing++]=i.polygonPosition,i.polygonPosition+=(c-o)/n}!function(e,t,i,{startPosition:n,endPosition:r,coordLength:s}){if(!e.triangles)return;let o=e.positions.subarray(n*s,r*s),a=i[0],l=function(e,t,i=2,n,r="xy"){let s,o,a,l,c,u,h,d=t&&t.length,p=d?t[0]*i:e.length,f=h7(e,0,p,i,!0,n&&n[0],r),g=[];if(!f||f.next===f.prev)return g;if(d&&(f=function(e,t,i,n,r,s){let o,a,l,c,u,h=[];for(o=0,a=t.length;o<a;o++)l=t[o]*n,c=o<a-1?t[o+1]*n:e.length,(u=h7(e,l,c,n,!1,r&&r[o+1],s))===u.next&&(u.steiner=!0),h.push(function(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e)return i}(u));for(h.sort(de),o=0;o<h.length;o++)i=function(e,t){let i=function(e,t){let i,n,r=t,s=e.x,o=e.y,a=-1/0;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){let e=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(e<=s&&e>a&&(a=e,i=r.x<r.next.x?r:r.next,e===s))return i}r=r.next}while(r!==t)if(!i)return null;let l=i,c=i.x,u=i.y,h=1/0;r=i;do{var d,p;s>=r.x&&r.x>=c&&s!==r.x&&di(o<u?s:a,o,c,u,o<u?a:s,o,r.x,r.y)&&(n=Math.abs(o-r.y)/(s-r.x),dc(r,e)&&(n<h||n===h&&(r.x>i.x||r.x===i.x&&(d=i,p=r,0>dn(d.prev,d,p.prev)&&0>dn(p.next,d,d.next))))&&(i=r,h=n)),r=r.next}while(r!==l)return i}(e,t);if(!i)return t;let n=du(i,e);return h9(n,n.next),h9(i,i.next)}(h[o],i);return i}(e,t,f,i,n,r)),e.length>80*i){l=o=e[0],c=a=e[1];for(let t=i;t<p;t+=i)u=e[t],h=e[t+1],u<l&&(l=u),h<c&&(c=h),u>o&&(o=u),h>a&&(a=h);s=0!==(s=Math.max(o-l,a-c))?32767/s:0}return function e(t,i,n,r,s,o,a){let l,c;if(!t)return;!a&&o&&function(e,t,i,n){let r=e;do 0===r.z&&(r.z=dt(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e)r.prevZ.nextZ=null,r.prevZ=null,function(e){let t,i,n,r,s,o,a,l,c=1;do{for(r=e,e=null,l=null,n=0;r;){for(n++,o=r,s=0,i=0;i<c&&(s++,o=o.nextZ);i++);for(a=c;s>0||a>0&&o;)0!==s&&(0===a||!o||r.z<=o.z)?(t=r,r=r.nextZ,s--):(t=o,o=o.nextZ,a--),l?l.nextZ=t:e=t,t.prevZ=l,l=t;r=o}l.nextZ=null,c*=2}while(n>1)}(r)}(t,r,s,o);let u=t;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,o?function(e,t,i,n){let r=e.prev,s=e.next;if(dn(r,e,s)>=0)return!1;let o=r.x,a=e.x,l=s.x,c=r.y,u=e.y,h=s.y,d=o<a?o<l?o:l:a<l?a:l,p=c<u?c<h?c:h:u<h?u:h,f=o>a?o>l?o:l:a>l?a:l,g=c>u?c>h?c:h:u>h?u:h,m=dt(d,p,t,i,n),v=dt(f,g,t,i,n),_=e.prevZ,y=e.nextZ;for(;_&&_.z>=m&&y&&y.z<=v;){if(_.x>=d&&_.x<=f&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&di(o,c,a,u,l,h,_.x,_.y)&&dn(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=f&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&di(o,c,a,u,l,h,y.x,y.y)&&dn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=f&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&di(o,c,a,u,l,h,_.x,_.y)&&dn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=f&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&di(o,c,a,u,l,h,y.x,y.y)&&dn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}(t,r,s,o):function(e){let t=e.prev,i=e.next;if(dn(t,e,i)>=0)return!1;let n=t.x,r=e.x,s=i.x,o=t.y,a=e.y,l=i.y,c=n<r?n<s?n:s:r<s?r:s,u=o<a?o<l?o:l:a<l?a:l,h=n>r?n>s?n:s:r>s?r:s,d=o>a?o>l?o:l:a>l?a:l,p=i.next;for(;p!==t;){if(p.x>=c&&p.x<=h&&p.y>=u&&p.y<=d&&di(n,o,r,a,s,l,p.x,p.y)&&dn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}(t)){i.push(l.i/n|0),i.push(t.i/n|0),i.push(c.i/n|0),dd(t),t=c.next,u=c.next;continue}if((t=c)===u){a?1===a?e(t=function(e,t,i){let n=e;do{let r=n.prev,s=n.next.next;!dr(r,s)&&ds(r,n,n.next,s)&&dc(r,s)&&dc(s,r)&&(t.push(r.i/i|0),t.push(n.i/i|0),t.push(s.i/i|0),dd(n),dd(n.next),n=e=s),n=n.next}while(n!==e)return h9(n)}(h9(t),i,n),i,n,r,s,o,2):2===a&&function(t,i,n,r,s,o){let a=t;do{let t=a.next.next;for(;t!==a.prev;){var l,c;if(a.i!==t.i&&(l=a,c=t,l.next.i!==c.i&&l.prev.i!==c.i&&!function(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&ds(i,i.next,e,t))return!0;i=i.next}while(i!==e)return!1}(l,c)&&(dc(l,c)&&dc(c,l)&&function(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e)return n}(l,c)&&(dn(l.prev,l,c.prev)||dn(l,c.prev,c))||dr(l,c)&&dn(l.prev,l,l.next)>0&&dn(c.prev,c,c.next)>0))){let l=du(a,t);a=h9(a,a.next),l=h9(l,l.next),e(a,i,n,r,s,o,0),e(l,i,n,r,s,o,0);return}t=t.next}a=a.next}while(a!==t)}(t,i,n,r,s,o):e(h9(t),i,n,r,s,o,1);break}}}(f,g,i,l,c,s,0),g}(o,i.slice(1).map(e=>(e-a)/s),s,t);for(let t=0,i=l.length;t<i;++t)e.triangles.push(n+l[t])}(t,o,a,{startPosition:s,endPosition:i.polygonPosition,coordLength:n})}})(e,S,E,_,i),S.properties.push(p_(i,y)),w&&S.fields.push({id:t.id}),E.polygonFeature++;break;default:throw Error("Invalid geometry type")}E.feature++}return n=C,r=M,s=S,o=_,(a={shape:"binary-feature-collection",points:{...n,positions:{value:n.positions,size:o},globalFeatureIds:{value:n.globalFeatureIds,size:1},featureIds:{value:n.featureIds,size:1},numericProps:pm(n.numericProps,1)},lines:{...r,positions:{value:r.positions,size:o},pathIndices:{value:r.pathIndices,size:1},globalFeatureIds:{value:r.globalFeatureIds,size:1},featureIds:{value:r.featureIds,size:1},numericProps:pm(r.numericProps,1)},polygons:{...s,positions:{value:s.positions,size:o},polygonIndices:{value:s.polygonIndices,size:1},primitivePolygonIndices:{value:s.primitivePolygonIndices,size:1},globalFeatureIds:{value:s.globalFeatureIds,size:1},featureIds:{value:s.featureIds,size:1},numericProps:pm(s.numericProps,1)}}).polygons&&s.triangles&&(a.polygons.triangles={value:new Uint32Array(s.triangles),size:1}),a}(r,{propArrayTypes:i,...s},{numericPropKeys:n,PositionDataType:Float32Array,triangulate:!0}));return o.byteLength=e.byteLength,o}function pO(e,t){if(e.byteLength<=0)return[];let i=[],n=new pA(new pw.default(e));return(Array.isArray(t.layers)?t.layers:Object.keys(n.layers)).forEach(e=>{let r=n.layers[e];if(r)for(let n=0;n<r.length;n++){let s=function(e,t,i){let n=e.toGeoJSONFeature(t.coordinates||"local",t.tileIndex);return t.layerProperty&&(n.properties||={},n.properties[t.layerProperty]=i),n}(r.getGeoJSONFeature(n),t,e);i.push(s)}}),i}let pR={name:"Mapbox Vector Tile",id:"mvt",module:"mvt",extensions:["mvt","pbf"],mimeTypes:["application/vnd.mapbox-vector-tile","application/x-protobuf"],category:"geometry",dataType:null,batchType:null,version:"4.5.1",worker:!0,options:{mvt:{shape:"geojson",coordinates:"local",layerProperty:"layerName",layers:void 0,tileIndex:void 0}}};function pz(e,t,i){t=t||0,i=i||e.value.length/e.size;let n=[];for(let r=t;r<i;r++){let t=[];for(let i=r*e.size;i<(r+1)*e.size;i++)t.push(Number(e.value[i]));n.push(t)}return n}function pF(e,t){let i=t?.globalFeatureId;return void 0!==i?function(e,t){for(let i of pB(e)){let e=0,n=i.featureIds.value[0];for(let r=0;r<i.featureIds.value.length;r++){let s=i.featureIds.value[r];if(s!==n){if(t===i.globalFeatureIds.value[e])return pj(i,e,r);e=r,n=s}}if(t===i.globalFeatureIds.value[e])return pj(i,e,i.featureIds.value.length)}throw Error(`featureId:${t} not found`)}(e,i):function(e){let t=[];for(let i of e){if(0===i.featureIds.value.length)continue;let e=0,n=i.featureIds.value[0];for(let r=0;r<i.featureIds.value.length;r++){let s=i.featureIds.value[r];s!==n&&(t.push(pj(i,e,r)),e=r,n=s)}t.push(pj(i,e,i.featureIds.value.length))}return t}(pB(e,t?.type))}function pB(e,t){let i=[];return e.points&&(e.points.type="Point",i.push(e.points)),e.lines&&(e.lines.type="LineString",i.push(e.lines)),e.polygons&&(e.polygons.type="Polygon",i.push(e.polygons)),i}function pj(e,t,i){let n=function(e,t,i){switch(e.type){case"Point":return function(e,t,i){let{positions:n}=e,r=pz(n,t,i);return r.length>1?{type:"MultiPoint",coordinates:r}:{type:"Point",coordinates:r[0]}}(e,t,i);case"LineString":return function(e,t=-1/0,i=1/0){let{positions:n}=e,r=e.pathIndices.value.filter(e=>e>=t&&e<=i);if(!(r.length>2))return{type:"LineString",coordinates:pz(n,r[0],r[1])};let s=[];for(let e=0;e<r.length-1;e++){let t=pz(n,r[e],r[e+1]);s.push(t)}return{type:"MultiLineString",coordinates:s}}(e,t,i);case"Polygon":return function e(t,i=-1/0,n=1/0){let{positions:r}=t,s=t.polygonIndices.value.filter(e=>e>=i&&e<=n),o=t.primitivePolygonIndices.value.filter(e=>e>=i&&e<=n);if(!(s.length>2)){let e=[];for(let t=0;t<o.length-1;t++){let i=pz(r,o[t],o[t+1]);e.push(i)}return{type:"Polygon",coordinates:e}}let a=[];for(let i=0;i<s.length-1;i++){let n=e(t,s[i],s[i+1]).coordinates;a.push(n)}return{type:"MultiPolygon",coordinates:a}}(e,t,i);default:throw Error(`Unsupported geometry type: ${e?.type}`)}}(e,t,i);return{type:"Feature",geometry:n,properties:function(e,t=0,i){let n=Object.assign({},e.properties[e.featureIds.value[t]]);for(let i in e.numericProps)n[i]=e.numericProps[i].value[t];return n}(e,t,0),...function(e,t=0,i){return e.fields&&e.fields[e.featureIds.value[t]]}(e,t,0)}}({...pR,parse:async(e,t)=>pk(e,t),parseSync:pk,binary:!0});let pD={Point:pN,MultiPoint:function(e,t,i){return pV(e,t,i)},LineString:function(e,t,i){return pV(e,t,i)},MultiLineString:function(e,t,i){return e.map(e=>pV(e,t,i))},Polygon:pU,MultiPolygon:function(e,t,i){return e.map(e=>pU(e,t,i))}};function pN([e,t],[i,n],r){let s=iX(i[0],n[0],e),o=iX(i[1],n[1],t);return r.unprojectFlat([s,o])}function pV(e,t,i){return e.map(e=>pN(e,t,i))}function pU(e,t,i){return e.map(e=>pV(e,t,i))}let pG=["points","lines","polygons"];function pW(e,t,i,n){for(let r=i;r<n;r++)if(t(e[r],r))return r;return -1}let p$={id:"request-scheduler",throttleRequests:!0,maxRequests:6,debounceTime:0};class pq{props;stats;activeRequestCount=0;requestQueue=[];requestMap=new Map;updateTimer=null;constructor(e={}){this.props={...p$,...e},this.stats=new ss.Stats({id:this.props.id}),this.stats.get("Queued Requests"),this.stats.get("Active Requests"),this.stats.get("Cancelled Requests"),this.stats.get("Queued Requests Ever"),this.stats.get("Active Requests Ever")}setProps(e){void 0!==e.throttleRequests&&(this.props.throttleRequests=e.throttleRequests),void 0!==e.maxRequests&&(this.props.maxRequests=e.maxRequests),void 0!==e.debounceTime&&(this.props.debounceTime=e.debounceTime)}scheduleRequest(e,t=()=>0){if(!this.props.throttleRequests)return Promise.resolve({done:()=>{}});if(this.requestMap.has(e))return this.requestMap.get(e);let i={handle:e,priority:0,getPriority:t},n=new Promise(e=>(i.resolve=e,i));return this.requestQueue.push(i),this.requestMap.set(e,n),this._issueNewRequests(),n}_issueRequest(e){let{handle:t,resolve:i}=e,n=!1,r=()=>{n||(n=!0,this.requestMap.delete(t),this.activeRequestCount--,this._issueNewRequests())};return this.activeRequestCount++,i?i({done:r}):Promise.resolve({done:r})}_issueNewRequests(){null!==this.updateTimer&&clearTimeout(this.updateTimer),this.updateTimer=setTimeout(()=>this._issueNewRequestsAsync(),this.props.debounceTime)}_issueNewRequestsAsync(){null!==this.updateTimer&&clearTimeout(this.updateTimer),this.updateTimer=null;let e=Math.max(this.props.maxRequests-this.activeRequestCount,0);if(0!==e){this._updateAllRequests();for(let t=0;t<e;++t){let e=this.requestQueue.shift();e&&this._issueRequest(e)}}}_updateAllRequests(){let e=this.requestQueue;for(let t=0;t<e.length;++t){let i=e[t];!this._updateRequest(i)&&(e.splice(t,1),this.requestMap.delete(i.handle),t--)}e.sort((e,t)=>e.priority-t.priority)}_updateRequest(e){return e.priority=e.getPriority(e.handle),!(e.priority<0)||(e.resolve(null),!1)}}class pH{constructor(e){this.index=e,this.isVisible=!1,this.isSelected=!1,this.parent=null,this.children=[],this.content=null,this._loader=void 0,this._abortController=null,this._loaderId=0,this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1}get bbox(){return this._bbox}set bbox(e){this._bbox||(this._bbox=e,"west"in e?this.boundingBox=[[e.west,e.south],[e.east,e.north]]:this.boundingBox=[[e.left,e.top],[e.right,e.bottom]])}get data(){return this.isLoading&&this._loader?this._loader.then(()=>this.data):this.content}get isLoaded(){return this._isLoaded&&!this._needsReload}get isLoading(){return!!this._loader&&!this._isCancelled}get needsReload(){return this._needsReload||this._isCancelled}get byteLength(){let e=this.content?this.content.byteLength:0;return Number.isFinite(e)||console.error("byteLength not defined in tile data"),e}async _loadData({getData:e,getRequestPriority:t,requestScheduler:i,onLoad:n,onError:r}){let s,{index:o,id:a,bbox:l,userData:c,zoom:u}=this,h=this._loaderId;this._abortController=new AbortController;let{signal:d}=this._abortController,p=await i.scheduleRequest(this,t);if(!p){this._isCancelled=!0;return}if(this._isCancelled)return void p.done();let f=null;try{f=await e({index:o,id:a,bbox:l,userData:c,zoom:u,signal:d})}catch(e){s=e||!0}finally{p.done()}if(h===this._loaderId){if(this._loader=void 0,this.content=f,this._isCancelled&&!f){this._isLoaded=!1;return}this._isLoaded=!0,this._isCancelled=!1,s?r(s,this):n(this)}}loadData(e){return this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1,this._loaderId++,this._loader=this._loadData(e),this._loader}setNeedsReload(){this.isLoading&&(this.abort(),this._loader=void 0),this._needsReload=!0}abort(){this.isLoaded||(this._isCancelled=!0,this._abortController?.abort())}}let pZ=new nj,pY=new nj;class pX{constructor(e=[0,0,0],t=[0,0,0],i){i=i||pZ.copy(e).add(t).scale(.5),this.center=new nj(i),this.halfDiagonal=new nj(t).subtract(this.center),this.minimum=new nj(e),this.maximum=new nj(t)}clone(){return new pX(this.minimum,this.maximum,this.center)}equals(e){return this===e||!!e&&this.minimum.equals(e.minimum)&&this.maximum.equals(e.maximum)}transform(e){return this.center.transformAsPoint(e),this.halfDiagonal.transform(e),this.minimum.transform(e),this.maximum.transform(e),this}intersectPlane(e){let{halfDiagonal:t}=this,i=pY.from(e.normal),n=t.x*Math.abs(i.x)+t.y*Math.abs(i.y)+t.z*Math.abs(i.z),r=this.center.dot(i)+e.distance;return r-n>0?1:r+n<0?-1:0}distanceTo(e){return Math.sqrt(this.distanceSquaredTo(e))}distanceSquaredTo(e){let t,i=pZ.from(e).subtract(this.center),{halfDiagonal:n}=this,r=0;return(t=Math.abs(i.x)-n.x)>0&&(r+=t*t),(t=Math.abs(i.y)-n.y)>0&&(r+=t*t),(t=Math.abs(i.z)-n.z)>0&&(r+=t*t),r}}var e3=e3;let pK=new nj,pJ=new nj;class pQ{constructor(e=[0,0,0],t=0){this.radius=-0,this.center=new nj,this.fromCenterRadius(e,t)}fromCenterRadius(e,t){return this.center.from(e),this.radius=t,this}fromCornerPoints(e,t){return t=pK.from(t),this.center=new nj().from(e).add(t).scale(.5),this.radius=this.center.distance(t),this}equals(e){return this===e||!!e&&this.center.equals(e.center)&&this.radius===e.radius}clone(){return new pQ(this.center,this.radius)}union(e){let t=this.center,i=this.radius,n=e.center,r=e.radius,s=pK.copy(n).subtract(t),o=s.magnitude();if(i>=o+r)return this.clone();if(r>=o+i)return e.clone();let a=(i+o+r)*.5;return pJ.copy(s).scale((-i+a)/o).add(t),this.center.copy(pJ),this.radius=a,this}expand(e){let t=pK.from(e).subtract(this.center).magnitude();return t>this.radius&&(this.radius=t),this}transform(e){this.center.transform(e);let t=e3.getScaling(pK,e);return this.radius=Math.max(t[0],Math.max(t[1],t[2]))*this.radius,this}distanceSquaredTo(e){let t=this.distanceTo(e);return t*t}distanceTo(e){return Math.max(0,pK.from(e).subtract(this.center).len()-this.radius)}intersectPlane(e){let t=this.center,i=this.radius,n=e.normal.dot(t)+e.distance;return n<-i?-1:n<i?0:1}}(b=M||(M={}))[b.COL0ROW0=0]="COL0ROW0",b[b.COL0ROW1=1]="COL0ROW1",b[b.COL0ROW2=2]="COL0ROW2",b[b.COL1ROW0=3]="COL1ROW0",b[b.COL1ROW1=4]="COL1ROW1",b[b.COL1ROW2=5]="COL1ROW2",b[b.COL2ROW0=6]="COL2ROW0",b[b.COL2ROW1=7]="COL2ROW1",b[b.COL2ROW2=8]="COL2ROW2";let p0=Object.freeze([1,0,0,0,1,0,0,0,1]);class p1 extends nD{static get IDENTITY(){return p2||Object.freeze(p2=new p1),p2}static get ZERO(){return o||Object.freeze(o=new p1([0,0,0,0,0,0,0,0,0])),o}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return M}constructor(e,...t){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),1==arguments.length&&Array.isArray(e)?this.copy(e):t.length>0?this.copy([e,...t]):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this.check()}identity(){return this.copy(p0)}fromObject(e){return this.check()}fromQuaternion(e){let t,i,n,r,s,o,a,l,c,u,h,d,p,f,g,m;return t=e[0],i=e[1],n=e[2],r=e[3],s=t+t,o=i+i,a=n+n,l=t*s,c=i*s,u=i*o,h=n*s,d=n*o,p=n*a,f=r*s,g=r*o,m=r*a,this[0]=1-u-p,this[3]=c-m,this[6]=h+g,this[1]=c+m,this[4]=1-l-p,this[7]=d-f,this[2]=h-g,this[5]=d+f,this[8]=1-l-u,this.check()}set(e,t,i,n,r,s,o,a,l){return this[0]=e,this[1]=t,this[2]=i,this[3]=n,this[4]=r,this[5]=s,this[6]=o,this[7]=a,this[8]=l,this.check()}setRowMajor(e,t,i,n,r,s,o,a,l){return this[0]=e,this[1]=n,this[2]=o,this[3]=t,this[4]=r,this[5]=a,this[6]=i,this[7]=s,this[8]=l,this.check()}determinant(){let e,t,i,n,r,s,o,a,l;return e=this[0],t=this[1],i=this[2],n=this[3],r=this[4],s=this[5],o=this[6],a=this[7],e*((l=this[8])*r-s*a)+t*(-l*n+s*o)+i*(a*n-r*o)}transpose(){return!function(e,t){if(e===t){let i=t[1],n=t[2],r=t[5];e[1]=t[3],e[2]=t[6],e[3]=i,e[5]=t[7],e[6]=n,e[7]=r}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8]}(this,this),this.check()}invert(){let e,t,i,n,r,s,o,a,l,c,u,h,d;return e=this[0],t=this[1],i=this[2],n=this[3],r=this[4],s=this[5],o=this[6],a=this[7],c=(l=this[8])*r-s*a,(d=e*c+t*(u=-l*n+s*o)+i*(h=a*n-r*o))&&(d=1/d,this[0]=c*d,this[1]=(-l*t+i*a)*d,this[2]=(s*t-i*r)*d,this[3]=u*d,this[4]=(l*e-i*o)*d,this[5]=(-s*e+i*n)*d,this[6]=h*d,this[7]=(-a*e+t*o)*d,this[8]=(r*e-t*n)*d),this.check()}multiplyLeft(e){return l6(this,e,this),this.check()}multiplyRight(e){return l6(this,this,e),this.check()}rotate(e){let t,i,n,r,s,o,a,l,c,u,h;return t=this[0],i=this[1],n=this[2],r=this[3],s=this[4],o=this[5],a=this[6],l=this[7],c=this[8],u=Math.sin(e),h=Math.cos(e),this[0]=h*t+u*r,this[1]=h*i+u*s,this[2]=h*n+u*o,this[3]=h*r-u*t,this[4]=h*s-u*i,this[5]=h*o-u*n,this[6]=a,this[7]=l,this[8]=c,this.check()}scale(e){return Array.isArray(e)?l5(this,this,e):l5(this,this,[e,e]),this.check()}translate(e){let t,i,n,r,s,o,a,l,c,u,h;return t=this[0],i=this[1],n=this[2],r=this[3],s=this[4],o=this[5],a=this[6],l=this[7],c=this[8],u=e[0],h=e[1],this[0]=t,this[1]=i,this[2]=n,this[3]=r,this[4]=s,this[5]=o,this[6]=u*t+h*r+a,this[7]=u*i+h*s+l,this[8]=u*n+h*o+c,this.check()}transform(e,t){let i;switch(e.length){case 2:i=rs(t||[-0,-0],e,this);break;case 3:i=nC(t||[-0,-0,-0],e,this);break;case 4:i=nF(t||[-0,-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return i0(i,e.length),i}transformVector(e,t){return this.transform(e,t)}transformVector2(e,t){return this.transform(e,t)}transformVector3(e,t){return this.transform(e,t)}}let p2=null,p3=new nj,p4=new nj,p6=new nj,p5=new nj,p8=new nj,p7=new nj,p9=new nj;class fe{constructor(e=[0,0,0],t=[0,0,0,0,0,0,0,0,0]){this.center=new nj().from(e),this.halfAxes=new p1(t)}get halfSize(){let e=this.halfAxes.getColumn(0),t=this.halfAxes.getColumn(1),i=this.halfAxes.getColumn(2);return[new nj(e).len(),new nj(t).len(),new nj(i).len()]}get quaternion(){let e=this.halfAxes.getColumn(0),t=this.halfAxes.getColumn(1),i=this.halfAxes.getColumn(2),n=new nj(e).normalize(),r=new nj(t).normalize(),s=new nj(i).normalize();return new ci().fromMatrix3(new p1([...n,...r,...s]))}fromCenterHalfSizeQuaternion(e,t,i){let n=new ci(i),r=new p1().fromQuaternion(n);return r[0]=r[0]*t[0],r[1]=r[1]*t[0],r[2]=r[2]*t[0],r[3]=r[3]*t[1],r[4]=r[4]*t[1],r[5]=r[5]*t[1],r[6]=r[6]*t[2],r[7]=r[7]*t[2],r[8]=r[8]*t[2],this.center=new nj().from(e),this.halfAxes=r,this}clone(){return new fe(this.center,this.halfAxes)}equals(e){return this===e||!!e&&this.center.equals(e.center)&&this.halfAxes.equals(e.halfAxes)}getBoundingSphere(e=new pQ){let t=this.halfAxes,i=t.getColumn(0,p6),n=t.getColumn(1,p5),r=t.getColumn(2,p8),s=p3.copy(i).add(n).add(r);return e.center.copy(this.center),e.radius=s.magnitude(),e}intersectPlane(e){let t=this.center,i=e.normal,n=this.halfAxes,r=i.x,s=i.y,o=i.z,a=Math.abs(r*n[0]+s*n[1]+o*n[2])+Math.abs(r*n[3]+s*n[4]+o*n[5])+Math.abs(r*n[6]+s*n[7]+o*n[8]),l=i.dot(t)+e.distance;return l<=-a?-1:1*!!(l>=a)}distanceTo(e){return Math.sqrt(this.distanceSquaredTo(e))}distanceSquaredTo(e){let t,i=p4.from(e).subtract(this.center),n=this.halfAxes,r=n.getColumn(0,p6),s=n.getColumn(1,p5),o=n.getColumn(2,p8),a=r.magnitude(),l=s.magnitude(),c=o.magnitude();r.normalize(),s.normalize(),o.normalize();let u=0;return(t=Math.abs(i.dot(r))-a)>0&&(u+=t*t),(t=Math.abs(i.dot(s))-l)>0&&(u+=t*t),(t=Math.abs(i.dot(o))-c)>0&&(u+=t*t),u}computePlaneDistances(e,t,i=[-0,-0]){let n=1/0,r=-1/0,s=this.center,o=this.halfAxes,a=o.getColumn(0,p6),l=o.getColumn(1,p5),c=o.getColumn(2,p8),u=p7.copy(a).add(l).add(c).add(s),h=p9.copy(u).subtract(e),d=t.dot(h);return n=Math.min(d,n),r=Math.max(d,r),u.copy(s).add(a).add(l).subtract(c),h.copy(u).subtract(e),n=Math.min(d=t.dot(h),n),r=Math.max(d,r),u.copy(s).add(a).subtract(l).add(c),h.copy(u).subtract(e),n=Math.min(d=t.dot(h),n),r=Math.max(d,r),u.copy(s).add(a).subtract(l).subtract(c),h.copy(u).subtract(e),n=Math.min(d=t.dot(h),n),r=Math.max(d,r),s.copy(u).subtract(a).add(l).add(c),h.copy(u).subtract(e),n=Math.min(d=t.dot(h),n),r=Math.max(d,r),s.copy(u).subtract(a).add(l).subtract(c),h.copy(u).subtract(e),n=Math.min(d=t.dot(h),n),r=Math.max(d,r),s.copy(u).subtract(a).subtract(l).add(c),h.copy(u).subtract(e),n=Math.min(d=t.dot(h),n),r=Math.max(d,r),s.copy(u).subtract(a).subtract(l).subtract(c),h.copy(u).subtract(e),n=Math.min(d=t.dot(h),n),r=Math.max(d,r),i[0]=n,i[1]=r,i}transform(e){this.center.transformAsPoint(e);let t=this.halfAxes.getColumn(0,p6);t.transformAsPoint(e);let i=this.halfAxes.getColumn(1,p5);i.transformAsPoint(e);let n=this.halfAxes.getColumn(2,p8);return n.transformAsPoint(e),this.halfAxes=new p1([...t,...i,...n]),this}getTransform(){throw Error("not implemented")}}let ft=new nj,fi=new nj;class fn{constructor(e=[0,0,1],t=0){this.normal=new nj,this.distance=-0,this.fromNormalDistance(e,t)}fromNormalDistance(e,t){return i1(Number.isFinite(t)),this.normal.from(e).normalize(),this.distance=t,this}fromPointNormal(e,t){e=ft.from(e),this.normal.from(t).normalize();let i=-this.normal.dot(e);return this.distance=i,this}fromCoefficients(e,t,i,n){return this.normal.set(e,t,i),i1(iK(this.normal.len(),1)),this.distance=n,this}clone(){return new fn(this.normal,this.distance)}equals(e){return iK(this.distance,e.distance)&&iK(this.normal,e.normal)}getPointDistance(e){return this.normal.dot(e)+this.distance}transform(e){let t=fi.copy(this.normal).transformAsVector(e).normalize(),i=this.normal.scale(-this.distance).transform(e);return this.fromPointNormal(i,t)}projectPointOntoPlane(e,t=[0,0,0]){let i=ft.from(e),n=this.getPointDistance(i),r=fi.copy(this.normal).scale(n);return i.subtract(r).to(t)}}let fr=[new nj([1,0,0]),new nj([0,1,0]),new nj([0,0,1])],fs=new nj,fo=new nj;class fa{constructor(e=[]){this.planes=e}fromBoundingSphere(e){this.planes.length=2*fr.length;let t=e.center,i=e.radius,n=0;for(let e of fr){let r=this.planes[n],s=this.planes[n+1];r||(r=this.planes[n]=new fn),s||(s=this.planes[n+1]=new fn);let o=fs.copy(e).scale(-i).add(t);r.fromPointNormal(o,e);let a=fs.copy(e).scale(i).add(t),l=fo.copy(e).negate();s.fromPointNormal(a,l),n+=2}return this}computeVisibility(e){let t=1;for(let i of this.planes)switch(e.intersectPlane(i)){case -1:return -1;case 0:t=0}return t}computeVisibilityWithPlaneMask(e,t){if(i1(Number.isFinite(t),"parentPlaneMask is required."),t===fa.MASK_OUTSIDE||t===fa.MASK_INSIDE)return t;let i=fa.MASK_INSIDE,n=this.planes;for(let r=0;r<this.planes.length;++r){let s=r<31?1<<r:0;if(r<31&&(t&s)==0)continue;let o=n[r],a=e.intersectPlane(o);if(-1===a)return fa.MASK_OUTSIDE;0===a&&(i|=s)}return i}}fa.MASK_OUTSIDE=0xffffffff,fa.MASK_INSIDE=0,fa.MASK_INDETERMINATE=0x7fffffff,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj,new nj;let fl=Math.PI/2,fc=Math.PI/4,fu=Math.PI/6,fh=2*Math.PI;e.s(["EPSILON1",0,.1,"EPSILON10",0,1e-10,"EPSILON11",0,1e-11,"EPSILON12",0,1e-12,"EPSILON13",0,1e-13,"EPSILON14",0,1e-14,"EPSILON15",0,1e-15,"EPSILON16",0,1e-16,"EPSILON17",0,1e-17,"EPSILON18",0,1e-18,"EPSILON19",0,1e-19,"EPSILON2",0,.01,"EPSILON20",0,1e-20,"EPSILON3",0,.001,"EPSILON4",0,1e-4,"EPSILON5",0,1e-5,"EPSILON6",0,1e-6,"EPSILON7",0,1e-7,"EPSILON8",0,1e-8,"EPSILON9",0,1e-9,"PI_OVER_FOUR",0,fc,"PI_OVER_SIX",0,fu,"PI_OVER_TWO",0,fl,"TWO_PI",0,fh],94069);var fd=e.i(94069),fd=fd;let fp=new p1,ff=new p1,fg=new p1,fm=new p1,fv=new p1,f_=[1,0,0],fy=[2,2,1],fb=new nj,fx=new nj,fw=new nj,fP=new nj,fC=new nj,fM=new p1,fS={diagonal:new p1,unitary:new p1},fE=[[.5,.5],[0,0],[0,1],[1,0],[1,1]],fL=fE.concat([[0,.5],[.5,0],[1,.5],[.5,1]]),fA=fL.concat([[.25,.5],[.75,.5]]);class fT{constructor(e,t,i){this.x=e,this.y=t,this.z=i}get children(){if(!this._children){let e=2*this.x,t=2*this.y,i=this.z+1;this._children=[new fT(e,t,i),new fT(e,t+1,i),new fT(e+1,t,i),new fT(e+1,t+1,i)]}return this._children}update(e){let{viewport:t,cullingVolume:i,elevationBounds:n,minZ:r,maxZ:s,bounds:o,offset:a,project:l}=e,c=this.getBoundingVolume(n,a,l);if(o&&!this.insideBounds(o)||0>i.computeVisibility(c)||l&&this.beyondHorizon(t.cameraPosition,l,n[1]))return!1;if(!this.childVisible){let{z:e}=this;if(e<s&&e>=r&&(e+=Math.floor(Math.log2(c.distanceTo(t.cameraPosition)*t.scale/t.height))),e>=s)return this.selected=!0,!0}for(let t of(this.selected=!1,this.childVisible=!0,this.children))t.update(e);return!0}getSelected(e=[]){if(this.selected&&e.push(this),this._children)for(let t of this._children)t.getSelected(e);return e}beyondHorizon(e,t,i){let n=e[0],r=e[1],s=e[2],o=Math.sqrt(n*n+r*r+s*s),a=180*Math.atan2(n,-r)/Math.PI,l=180*Math.asin(s/o)/Math.PI,[c,u]=fB(this.x,this.y,this.z),[h,d]=fB(this.x+1,this.y+1,this.z),p=(c+h)/2,f=t([Math.max(c,Math.min(p+((a-p+540)%360-180),h)),Math.max(d,Math.min(l,u)),i]);return f[0]*n+f[1]*r+f[2]*s<=f[0]*f[0]+f[1]*f[1]+f[2]*f[2]}insideBounds([e,t,i,n]){let r=512/Math.pow(2,this.z);return this.x*r<i&&this.y*r<n&&(this.x+1)*r>e&&(this.y+1)*r>t}getBoundingVolume(e,t,i){if(i){let t=this.z<1?fA:this.z<2?fL:fE,n=[];for(let r of t){let t=fB(this.x+r[0],this.y+r[1],this.z);t[2]=e[0],n.push(i(t)),e[0]!==e[1]&&(t[2]=e[1],n.push(i(t)))}return function(e,t=new fe){if(!e||0===e.length)return t.halfAxes=new p1([0,0,0,0,0,0,0,0,0]),t.center=new nj,t;let i=e.length,n=new nj(0,0,0);for(let t of e)n.add(t);let r=1/i;n.multiplyByScalar(r);let s=0,o=0,a=0,l=0,c=0,u=0;for(let t of e){let e=fb.copy(t).subtract(n);s+=e.x*e.x,o+=e.x*e.y,a+=e.x*e.z,l+=e.y*e.y,c+=e.y*e.z,u+=e.z*e.z}s*=r,o*=r,a*=r,l*=r,c*=r,u*=r,fM[0]=s,fM[1]=o,fM[2]=a,fM[3]=o,fM[4]=l,fM[5]=c,fM[6]=a,fM[7]=c,fM[8]=u;let{unitary:h}=function(e,t={}){let i=fd.EPSILON20,n=0,r=0;ff.identity(),fg.copy(e);let s=i*function(e){let t=0;for(let i=0;i<9;++i){let n=e[i];t+=n*n}return Math.sqrt(t)}(fg);for(;r<10&&function(e){let t=0;for(let i=0;i<3;++i){let n=e[fp.getElementIndex(fy[i],f_[i])];t+=2*n*n}return Math.sqrt(t)}(fg)>s;)(function(e,t){let i=fd.EPSILON15,n=0,r=1;for(let t=0;t<3;++t){let i=Math.abs(e[fp.getElementIndex(fy[t],f_[t])]);i>n&&(r=t,n=i)}let s=f_[r],o=fy[r],a=1,l=0;if(Math.abs(e[fp.getElementIndex(o,s)])>i){let t,i=(e[fp.getElementIndex(o,o)]-e[fp.getElementIndex(s,s)])/2/e[fp.getElementIndex(o,s)];a=1/Math.sqrt(1+(t=i<0?-1/(-i+Math.sqrt(1+i*i)):1/(i+Math.sqrt(1+i*i)))*t),l=t*a}p1.IDENTITY.to(t),t[fp.getElementIndex(s,s)]=t[fp.getElementIndex(o,o)]=a,t[fp.getElementIndex(o,s)]=l,t[fp.getElementIndex(s,o)]=-l})(fg,fm),fv.copy(fm).transpose(),fg.multiplyRight(fm),fg.multiplyLeft(fv),ff.multiplyRight(fm),++n>2&&(++r,n=0);return t.unitary=ff.toTarget(t.unitary),t.diagonal=fg.toTarget(t.diagonal),t}(fM,fS),d=t.halfAxes.copy(h),p=d.getColumn(0,fw),f=d.getColumn(1,fP),g=d.getColumn(2,fC),m=-Number.MAX_VALUE,v=-Number.MAX_VALUE,_=-Number.MAX_VALUE,y=Number.MAX_VALUE,b=Number.MAX_VALUE,x=Number.MAX_VALUE;for(let t of e)fb.copy(t),m=Math.max(fb.dot(p),m),v=Math.max(fb.dot(f),v),_=Math.max(fb.dot(g),_),y=Math.min(fb.dot(p),y),b=Math.min(fb.dot(f),b),x=Math.min(fb.dot(g),x);p=p.multiplyByScalar(.5*(y+m)),f=f.multiplyByScalar(.5*(b+v)),g=g.multiplyByScalar(.5*(x+_)),t.center.copy(p).add(f).add(g);let w=fx.set(m-y,v-b,_-x).multiplyByScalar(.5),P=new p1([w[0],0,0,0,w[1],0,0,0,w[2]]);return t.halfAxes.multiplyRight(P),t}(n)}let n=512/Math.pow(2,this.z),r=this.x*n+512*t,s=512-(this.y+1)*n;return new pX([r,s,e[0]],[r+n,s+n,e[1]])}}let fk=[-1/0,-1/0,1/0,1/0],fI={type:"object",value:null,validate:(e,t)=>t.optional&&null===e||"string"==typeof e||Array.isArray(e)&&e.every(e=>"string"==typeof e),equal:(e,t)=>{if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t))return!1;let i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}};function fO(e,t){let i=[t.transformAsPoint([e[0],e[1]]),t.transformAsPoint([e[2],e[1]]),t.transformAsPoint([e[0],e[3]]),t.transformAsPoint([e[2],e[3]])];return[Math.min(...i.map(e=>e[0])),Math.min(...i.map(e=>e[1])),Math.max(...i.map(e=>e[0])),Math.max(...i.map(e=>e[1]))]}function fR(e,t){if(!e||!e.length)return null;let{index:i,id:n}=t;if(Array.isArray(e)){let t=Math.abs(n.split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0))%e.length;e=e[t]}let r=e;for(let e of Object.keys(i)){let t=RegExp(`{${e}}`,"g");r=r.replace(t,String(i[e]))}return Number.isInteger(i.y)&&Number.isInteger(i.z)&&(r=r.replace(/\{-y\}/g,String(Math.pow(2,i.z)-i.y-1))),r}function fz({viewport:e,z:t,cullRect:i}){return(e.subViewports||[e]).map(e=>(function e(t,i,n){if(!Array.isArray(i)){let e=n.x-t.x,r=n.y-t.y,{width:s,height:o}=n,a={targetZ:i},l=t.unproject([e,r],a),c=t.unproject([e+s,r],a),u=t.unproject([e,r+o],a),h=t.unproject([e+s,r+o],a);return[Math.min(l[0],c[0],u[0],h[0]),Math.min(l[1],c[1],u[1],h[1]),Math.max(l[0],c[0],u[0],h[0]),Math.max(l[1],c[1],u[1],h[1])]}let r=e(t,i[0],n),s=e(t,i[1],n);return[Math.min(r[0],s[0]),Math.min(r[1],s[1]),Math.max(r[2],s[2]),Math.max(r[3],s[3])]})(e,t||0,i))}function fF(e,t){return 512*Math.pow(2,e)/t}function fB(e,t,i){let n=fF(i,512),r=Math.PI-2*Math.PI*t/n;return[e/n*360-180,180/Math.PI*Math.atan(.5*(Math.exp(r)-Math.exp(-r)))]}function fj(e,t,i,n){let r=fF(i,n);return[e/r*512,t/r*512]}let fD="best-available",fN={[fD]:function(e){for(let t of e)t.state=0;for(let t of e)t.isSelected&&!fU(t)&&fG(t);for(let t of e)t.isVisible=!!(2&t.state)},"no-overlap":function(e){for(let t of e)t.state=0;for(let t of e)t.isSelected&&fU(t);for(let t of Array.from(e).sort((e,t)=>e.zoom-t.zoom))if(t.isVisible=!!(2&t.state),t.children&&(t.isVisible||1&t.state))for(let e of t.children)e.state=1;else t.isSelected&&fG(t)},never:()=>{}},fV={extent:null,tileSize:512,maxZoom:null,minZoom:null,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:"best-available",zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null,onTileLoad:()=>{},onTileUnload:()=>{},onTileError:()=>{}};function fU(e){let t=e;for(;t;){if(t.isLoaded||t.content)return t.state|=2,!0;t=t.parent}return!1}function fG(e){for(let t of e.children)t.isLoaded||t.content?t.state|=2:fG(t)}let fW={TilesetClass:class{constructor(e){this._getCullBounds=function(e){let t,i={};return n=>{for(let r in n)if(!function(e,t){if(e===t)return!0;if(Array.isArray(e)){let i=e.length;if(!t||t.length!==i)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}return!1}(n[r],i[r])){t=e(n),i=n;break}return t}}(fz),this.opts={...fV,...e},this.setOptions(this.opts),this.onTileLoad=e=>{this.opts.onTileLoad?.(e),null!==this.opts.maxCacheByteSize&&(this._cacheByteSize+=e.byteLength,this._resizeCache())},this._requestScheduler=new pq({throttleRequests:this.opts.maxRequests>0||this.opts.debounceTime>0,maxRequests:this.opts.maxRequests,debounceTime:this.opts.debounceTime}),this._cache=new Map,this._tiles=[],this._dirty=!1,this._cacheByteSize=0,this._viewport=null,this._zRange=null,this._selectedTiles=null,this._frameNumber=0,this._modelMatrix=new rm,this._modelMatrixInverse=new rm}get tiles(){return this._tiles}get selectedTiles(){return this._selectedTiles}get isLoaded(){return null!==this._selectedTiles&&this._selectedTiles.every(e=>e.isLoaded)}get needsReload(){return null!==this._selectedTiles&&this._selectedTiles.some(e=>e.needsReload)}setOptions(e){Object.assign(this.opts,e),Number.isFinite(e.maxZoom)&&(this._maxZoom=Math.floor(e.maxZoom)),Number.isFinite(e.minZoom)&&(this._minZoom=Math.ceil(e.minZoom)),this._viewport=null}finalize(){for(let e of this._cache.values())e.isLoading&&e.abort();this._cache.clear(),this._tiles=[],this._selectedTiles=null}reloadAll(){for(let e of this._cache.keys()){let t=this._cache.get(e);this._selectedTiles&&this._selectedTiles.includes(t)?t.setNeedsReload():this._cache.delete(e)}}update(e,{zRange:t,modelMatrix:i}={zRange:null,modelMatrix:null}){let n=i?new rm(i):new rm,r=!n.equals(this._modelMatrix);if(this._viewport&&e.equals(this._viewport)&&iK(this._zRange,t)&&!r)this.needsReload&&(this._selectedTiles=this._selectedTiles.map(e=>this._getTile(e.index,!0)));else{r&&(this._modelMatrixInverse=n.clone().invert(),this._modelMatrix=n),this._viewport=e,this._zRange=t;let i=this.getTileIndices({viewport:e,maxZoom:this._maxZoom,minZoom:this._minZoom,zRange:t,modelMatrix:this._modelMatrix,modelMatrixInverse:this._modelMatrixInverse});this._selectedTiles=i.map(e=>this._getTile(e,!0)),this._dirty&&this._rebuildTree()}let s=this.updateTileStates();return this._pruneRequests(),this._dirty&&this._resizeCache(),s&&this._frameNumber++,this._frameNumber}isTileVisible(e,t,i){if(!e.isVisible)return!1;if(t&&this._viewport){let n=this._getCullBounds({viewport:this._viewport,z:this._zRange,cullRect:t}),{bbox:r}=e;for(let[e,t,s,o]of n){let n;if("west"in r)n=r.west<s&&r.east>e&&r.south<o&&r.north>t;else{if(i&&!rm.IDENTITY.equals(i)){let[e,t,n,s]=fO([r.left,r.top,r.right,r.bottom],i);r={left:e,top:t,right:n,bottom:s}}let a=Math.min(r.top,r.bottom),l=Math.max(r.top,r.bottom);n=r.left<s&&r.right>e&&a<o&&l>t}if(n)return!0}return!1}return!0}getTileIndices({viewport:e,maxZoom:t,minZoom:i,zRange:n,modelMatrix:r,modelMatrixInverse:s}){let{tileSize:o,extent:a,zoomOffset:l,visibleMinZoom:c,visibleMaxZoom:u}=this.opts;return function({viewport:e,maxZoom:t,minZoom:i,zRange:n,extent:r,tileSize:s=512,modelMatrix:o,modelMatrixInverse:a,zoomOffset:l=0,visibleMinZoom:c,visibleMaxZoom:u}){let h=e.isGeospatial?Math.round(e.zoom+Math.log2(512/s)+l):Math.ceil(e.zoom+l);if("number"==typeof i&&Number.isFinite(i)&&h<i){if(!r)return[];h=i}if("number"==typeof t&&Number.isFinite(t)&&h>t&&(h=t),null!=c&&e.zoom<c||null!=u&&e.zoom>u)return[];let d=r;return o&&a&&r&&!e.isGeospatial&&(d=fO(r,o)),e.isGeospatial?function(e,t,i,n){let r=e instanceof l1?e.projectPosition:null,s=new fa(Object.values(e.getFrustumPlanes()).map(({normal:e,distance:t})=>new fn(e.clone().negate(),t))),o=e.distanceScales.unitsPerMeter[2],a=i&&i[0]*o||0,l=i&&i[1]*o||0,c=e instanceof o8&&e.pitch<=60?t:0;if(n){let[e,t,i,r]=n,s=rL([e,r]),o=rL([i,t]);n=[s[0],512-s[1],o[0],512-o[1]]}let u=new fT(0,0,0),h={viewport:e,project:r,cullingVolume:s,elevationBounds:[a,l],minZ:c,maxZ:t,bounds:n,offset:0};if(u.update(h),e instanceof o8&&e.subViewports&&e.subViewports.length>1){for(h.offset=-1;u.update(h)&&!(--h.offset<-3););for(h.offset=1;u.update(h)&&!(++h.offset>3););}return u.getSelected()}(e,h,n,r):function(e,t,i,n,r){var s,o,a;let l,c=(s=e,o=0,a=n,l=s.getBounds(),s.isGeospatial?[Math.max(l[0],a[0]),Math.max(l[1],a[1]),Math.min(l[2],a[2]),Math.min(l[3],a[3])]:[Math.max(Math.min(l[0],a[2]),a[0]),Math.max(Math.min(l[1],a[3]),a[1]),Math.min(Math.max(l[2],a[0]),a[2]),Math.min(Math.max(l[3],a[1]),a[3])]),u=fF(t,i),[h,d,p,f]=r?fO(c,r).map(e=>e*u/512):c.map(e=>e*u/512),g=[];for(let e=Math.floor(h);e<p;e++)for(let i=Math.floor(d);i<f;i++)g.push({x:e,y:i,z:t});return g}(e,h,s,d||fk,a)}({viewport:e,maxZoom:t,minZoom:i,zRange:n,tileSize:o,extent:a,modelMatrix:r,modelMatrixInverse:s,zoomOffset:l,visibleMinZoom:c,visibleMaxZoom:u})}getTileId(e){return`${e.x}-${e.y}-${e.z}`}getTileZoom(e){return e.z}getTileMetadata(e){let{tileSize:t}=this.opts;return{bbox:function(e,t,i,n,r=512){if(e.isGeospatial){let[e,r]=fB(t,i,n),[s,o]=fB(t+1,i+1,n);return{west:e,north:r,east:s,south:o}}let[s,o]=fj(t,i,n,r),[a,l]=fj(t+1,i+1,n,r);return{left:s,top:o,right:a,bottom:l}}(this._viewport,e.x,e.y,e.z,t)}}getParentIndex(e){let t=Math.floor(e.x/2);return{x:t,y:Math.floor(e.y/2),z:e.z-1}}updateTileStates(){let e=this.opts.refinementStrategy||fD,t=Array(this._cache.size),i=0;for(let e of this._cache.values())t[i++]=e.isVisible,e.isSelected=!1,e.isVisible=!1;for(let e of this._selectedTiles)e.isSelected=!0,e.isVisible=!0;for(let n of(("function"==typeof e?e:fN[e])(Array.from(this._cache.values())),i=0,this._cache.values()))if(t[i++]!==n.isVisible)return!0;return!1}_getRequestPriority(e){if(!e.isSelected&&!e.isVisible)return -1;let t=this._getTileDistancePriority(e);return e.isSelected?0+t:1e8+t}_getTileDistancePriority(e){let{width:t,height:i}=this._viewport||{};if(!this._viewport||!t||!i)return 0;try{let n=this._getTileScreenCorners(e.bbox),r=[t/2,i/2];if(4===n.length){if(this._isPointInPolygon(r,n))return 0;let e=n.reduce((e,t,i)=>{let s=n[(i+1)%n.length];return Math.min(e,this._getPointToSegmentDistanceSquared(r,t,s))},Number.MAX_SAFE_INTEGER);return Math.min(e,0x5f5e0ff)}}catch{}return 0x5f5e0ff}_getTileScreenCorners(e){return("west"in e?[[e.west,e.south],[e.east,e.south],[e.east,e.north],[e.west,e.north]]:[[e.left,e.top],[e.right,e.top],[e.right,e.bottom],[e.left,e.bottom]]).map(e=>this._viewport.project(e)).filter(([e,t])=>Number.isFinite(e)&&Number.isFinite(t))}_isPointInPolygon(e,t){let i=!1,[n,r]=e;for(let e=0,s=t.length-1;e<t.length;s=e++){let[o,a]=t[e],[l,c]=t[s];a>r!=c>r&&n<(l-o)*(r-a)/(c-a)+o&&(i=!i)}return i}_getPointToSegmentDistanceSquared(e,t,i){let[n,r]=e,[s,o]=t,[a,l]=i,c=a-s,u=l-o,h=c*c+u*u,d=h?Math.max(0,Math.min(1,((n-s)*c+(r-o)*u)/h)):0,p=n-(s+d*c),f=r-(o+d*u);return p*p+f*f}_pruneRequests(){let{maxRequests:e=0}=this.opts,t=[],i=0;for(let e of this._cache.values())e.isLoading&&(i++,e.isSelected||e.isVisible||t.push(e));for(;e>0&&i>e&&t.length>0;)t.shift().abort(),i--}_rebuildTree(){let{_cache:e}=this;for(let t of e.values())t.parent=null,t.children&&(t.children.length=0);for(let t of e.values()){let e=this._getNearestAncestor(t);t.parent=e,e?.children&&e.children.push(t)}}_resizeCache(){let{_cache:e,opts:t}=this,i=t.maxCacheSize??(null!==t.maxCacheByteSize?1/0:5*this.selectedTiles.length),n=t.maxCacheByteSize??1/0;if(e.size>i||this._cacheByteSize>n){for(let[r,s]of e)if(s.isVisible||s.isSelected||(this._cacheByteSize-=null!==t.maxCacheByteSize?s.byteLength:0,e.delete(r),this.opts.onTileUnload?.(s)),e.size<=i&&this._cacheByteSize<=n)break;this._rebuildTree(),this._dirty=!0}this._dirty&&(this._tiles=Array.from(this._cache.values()).sort((e,t)=>e.zoom-t.zoom),this._dirty=!1)}_getTile(e,t){let i=this.getTileId(e),n=this._cache.get(i),r=!1;return!n&&t?(Object.assign(n=new pH(e),this.getTileMetadata(n.index)),Object.assign(n,{id:i,zoom:this.getTileZoom(n.index)}),r=!0,this._cache.set(i,n),this._dirty=!0):n&&n.needsReload&&(r=!0),n&&r&&n.loadData({getData:this.opts.getTileData,getRequestPriority:this._getRequestPriority.bind(this),requestScheduler:this._requestScheduler,onLoad:this.onTileLoad,onError:this.opts.onTileError}),n}_getNearestAncestor(e){let{_minZoom:t=0}=this,i=e.index;for(;this.getTileZoom(i)>t;){i=this.getParentIndex(i);let e=this._getTile(i);if(e)return e}return null}},data:{type:"data",value:[]},dataComparator:fI.equal,renderSubLayers:{type:"function",value:e=>new pa(e)},getTileData:{type:"function",optional:!0,value:null},onViewportLoad:{type:"function",optional:!0,value:null},onTileLoad:{type:"function",value:e=>{}},onTileUnload:{type:"function",value:e=>{}},onTileError:{type:"function",value:e=>console.error(e)},extent:{type:"array",optional:!0,value:null,compare:!0},tileSize:512,maxZoom:null,minZoom:0,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:fD,zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null};class f$ extends u7{initializeState(){this.state={tileset:null,isLoaded:!1}}finalizeState(){this.state?.tileset?.finalize()}get isLoaded(){return!!this.state?.tileset?.selectedTiles?.every(e=>e.isLoaded&&(!e.content||!e.layers||e.layers.every(e=>e.isLoaded)))}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState({changeFlags:e}){let{tileset:t}=this.state,i=e.propsOrDataChanged||e.updateTriggersChanged,n=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getTileData);t?i&&(t.setOptions(this._getTilesetOptions()),n?t.reloadAll():t.tiles.forEach(e=>{e.layers=null})):(t=new this.props.TilesetClass(this._getTilesetOptions()),this.setState({tileset:t})),this._updateTileset()}_getTilesetOptions(){let{tileSize:e,maxCacheSize:t,maxCacheByteSize:i,refinementStrategy:n,extent:r,maxZoom:s,minZoom:o,maxRequests:a,debounceTime:l,zoomOffset:c,visibleMinZoom:u,visibleMaxZoom:h}=this.props;return{maxCacheSize:t,maxCacheByteSize:i,maxZoom:s,minZoom:o,tileSize:e,refinementStrategy:n,extent:r,maxRequests:a,debounceTime:l,zoomOffset:c,visibleMinZoom:u,visibleMaxZoom:h,getTileData:this.getTileData.bind(this),onTileLoad:this._onTileLoad.bind(this),onTileError:this._onTileError.bind(this),onTileUnload:this._onTileUnload.bind(this)}}_updateTileset(){let e=this.state.tileset,{zRange:t,modelMatrix:i}=this.props,n=e.update(this.context.viewport,{zRange:t,modelMatrix:i}),{isLoaded:r}=e,s=this.state.isLoaded!==r,o=this.state.frameNumber!==n;r&&(s||o)&&this._onViewportLoad(),o&&this.setState({frameNumber:n}),this.state.isLoaded=r}_onViewportLoad(){let{tileset:e}=this.state,{onViewportLoad:t}=this.props;t&&t(e.selectedTiles)}_onTileLoad(e){this.props.onTileLoad(e),e.layers=null,this.setNeedsUpdate()}_onTileError(e,t){this.props.onTileError(e),t.layers=null,this.setNeedsUpdate()}_onTileUnload(e){this.props.onTileUnload(e)}getTileData(e){let{data:t,getTileData:i,fetch:n}=this.props,{signal:r}=e;return(e.url="string"==typeof t||Array.isArray(t)?fR(t,e):null,i)?i(e):n&&e.url?n(e.url,{propName:"data",layer:this,signal:r}):null}renderSubLayers(e){return this.props.renderSubLayers(e)}getSubLayerPropsByTile(e){return null}getPickingInfo(e){let t=e.sourceLayer,i=t.props.tile,n=e.info;return n.picked&&(n.tile=i),n.sourceTile=i,n.sourceTileSubLayer=t,n}_updateAutoHighlight(e){e.sourceTileSubLayer.updateAutoHighlight(e)}renderLayers(){let{visibleMinZoom:e,visibleMaxZoom:t,minZoom:i,extent:n}=this.props,r=this.context.viewport.zoom;if(null!=e&&r<e||null!=t&&r>t||null!=i&&!n&&r<i){for(let e of this.state.tileset.tiles)e.layers=null;return[]}return this.state.tileset.tiles.map(e=>{let t=this.getSubLayerPropsByTile(e);if(e.isLoaded||e.content)if(e.layers)t&&e.layers[0]&&Object.keys(t).some(i=>e.layers[0].props[i]!==t[i])&&(e.layers=e.layers.map(e=>e.clone(t)));else{let i=this.renderSubLayers({...this.props,...this.getSubLayerProps({id:e.id,updateTriggers:this.props.updateTriggers}),data:e.content,_offset:0,tile:e});e.layers=sr(i,Boolean).map(i=>i.clone({tile:e,...t}))}return e.layers})}filterSubLayer({layer:e,cullRect:t}){let{tile:i}=e.props,{modelMatrix:n}=this.props;return this.state.tileset.isTileVisible(i,t,n?new rm(n):null)}}f$.defaultProps=fW,f$.layerName="TileLayer";let fq=f$,fH={...pa.defaultProps,data:fI,onDataLoad:{type:"function",value:null,optional:!0,compare:!1},uniqueIdProperty:"",highlightedFeatureId:null,loaders:[pR],binary:!0};class fZ extends fq{initializeState(){super.initializeState();let e=void 0===this.context.viewport.resolution&&this.props.binary;this.setState({binary:e,data:null,tileJSON:null,hoveredFeatureId:null,hoveredFeatureLayerName:null})}get isLoaded(){return!!(this.state?.data&&super.isLoaded)}updateState({props:e,oldProps:t,context:i,changeFlags:n}){n.dataChanged&&this._updateTileData(),this.state?.data&&(super.updateState({props:e,oldProps:t,context:i,changeFlags:n}),this._setWGS84PropertyForTiles());let{highlightColor:r}=e;r!==t.highlightColor&&Array.isArray(r)&&this.setState({highlightColor:r})}async _updateTileData(){var e;let t=this.props.data,i=null;if("string"!=typeof t||(e=t,/(?=.*{z})(?=.*{x})(?=.*({y}|{-y}))/.test(e)))t&&"object"==typeof t&&"tilejson"in t&&(i=t);else{let{onDataLoad:e,fetch:n}=this.props;this.setState({data:null,tileJSON:null});try{i=await n(t,{propName:"data",layer:this,loaders:[]})}catch(e){this.raiseError(e,"loading TileJSON"),t=null}e&&e(i,{propName:"data",layer:this})}i&&(t=i.tiles),this.setState({data:t,tileJSON:i})}_getTilesetOptions(){let e=super._getTilesetOptions(),t=this.state.tileJSON,{minZoom:i,maxZoom:n}=this.props;return t&&(Number.isFinite(t.minzoom)&&t.minzoom>i&&(e.minZoom=t.minzoom),Number.isFinite(t.maxzoom)&&(!Number.isFinite(n)||t.maxzoom<n)&&(e.maxZoom=t.maxzoom)),e}renderLayers(){return this.state?.data?super.renderLayers():null}getTileData(e){let{data:t,binary:i}=this.state,{index:n,signal:r}=e,s=fR(t,e);if(!s)return Promise.reject("Invalid URL");let o=this.getLoadOptions(),{fetch:a}=this.props;return a(s,{propName:"data",layer:this,loadOptions:o={...o,core:{...o?.core,mimeType:"application/x-protobuf"},mvt:{...o?.mvt,shape:i?"binary":"geojson",coordinates:this.context.viewport.resolution?"wgs84":"local",tileIndex:n}},signal:r})}renderSubLayers(e){let{x:t,y:i,z:n}=e.tile.index,r=Math.pow(2,n),s=512/r,o=new rm().scale([s,-s,1]);e.autoHighlight=!1,this.context.viewport.resolution||(e.modelMatrix=o,e.coordinateOrigin=[512*t/r,512*(1-i/r),0],e.coordinateSystem=ib.CARTESIAN,e.extensions=[...e.extensions||[],new pg]);let a=super.renderSubLayers(e);return!this.state.binary||a instanceof pa||tT.warn("renderSubLayers() must return GeoJsonLayer when using binary:true")(),a}_updateAutoHighlight(e){let{uniqueIdProperty:t}=this.props,{hoveredFeatureId:i,hoveredFeatureLayerName:n}=this.state,r=e.object,s=null,o=null;r&&(s=fY(r,t),o=fX(r));let{highlightColor:a}=this.props;"function"==typeof a&&(a=a(e)),(i!==s||n!==o)&&this.setState({highlightColor:a,hoveredFeatureId:s,hoveredFeatureLayerName:o})}_isWGS84(){return!!this.context.viewport.resolution}getPickingInfo(e){let t=super.getPickingInfo(e);if(this.state.binary&&-1!==t.index){let{data:i}=e.sourceLayer.props;t.object=pF(i,{globalFeatureId:t.index})}return t.object&&!this._isWGS84()&&(t.object=fJ(t.object,t.tile.bbox,this.context.viewport)),t}getSubLayerPropsByTile(e){return{highlightedObjectIndex:this.getHighlightedObjectIndex(e),highlightColor:this.state.highlightColor}}getHighlightedObjectIndex(e){let{hoveredFeatureId:t,hoveredFeatureLayerName:i,binary:n}=this.state,{uniqueIdProperty:r,highlightedFeatureId:s}=this.props,o=e.content,a=fK(s);if(!(fK(t)||a))return -1;let l=a?s:t;if(Array.isArray(o))return o.findIndex(e=>{let t=fY(e,r)===l,n=a||fX(e)===i;return t&&n});if(o&&n){var c=a?"":i;for(let e of pG){let t=o[e]&&function(e,t,i,n){let r=e.featureIds.value;if(!r.length)return -1;let s=0,o=r[r.length-1]+1;if(n){let t=function(e,t){if(!e.__layers){let t={},{properties:i}=e;for(let e=0;e<i.length;e++){let{layerName:n}=i[e];n&&(t[n]?t[n][1]=e:t[n]=[e,e])}e.__layers=t}return e.__layers[t]}(e,n);if(!t)return -1;s=t[0],o=t[1]+1}let a=-1;if(t in e.numericProps){let n=e.numericProps[t].value.findIndex((e,t)=>e===i&&r[t]>=s&&r[t]<o);return n>=0?e.globalFeatureIds.value[n]:-1}return t?a=pW(e.properties,e=>e[t]===i,s,o):e.fields&&(a=pW(e.fields,e=>e.id===i,s,o)),a>=0?function(e,t){if(!e.__ids){let t=[],i=e.featureIds.value,n=e.globalFeatureIds.value;for(let e=0;e<i.length;e++)t[i[e]]=n[e];e.__ids=t}return e.__ids[t]}(e,a):-1}(o[e],r,l,c);if(t>=0)return t}}return -1}_pickObjects(e){let{deck:t,viewport:i}=this.context,n=i.width,r=i.height,s=i.x,o=i.y,a=[this.id];return t.pickObjects({x:s,y:o,width:n,height:r,layerIds:a,maxObjects:e})}getRenderedFeatures(e=null){let t=this._pickObjects(e),i=new Set,n=[];for(let e of t){let t=fY(e.object,this.props.uniqueIdProperty);void 0===t?n.push(e.object):i.has(t)||(i.add(t),n.push(e.object))}return n}_setWGS84PropertyForTiles(){let e="dataInWGS84";this.state.tileset.selectedTiles.forEach(t=>{t.hasOwnProperty(e)||Object.defineProperty(t,e,{get:()=>{var e;if(!t.content)return null;if(this.state.binary&&Array.isArray(t.content)&&!t.content.length)return[];let{bbox:i}=t;if(void 0===t._contentWGS84&&Number.isFinite((e=i).west)&&Number.isFinite(e.north)&&Number.isFinite(e.east)&&Number.isFinite(e.south)){let e=this.state.binary?pF(t.content):t.content;t._contentWGS84=e.map(e=>fJ(e,i,this.context.viewport))}return t._contentWGS84}})})}}function fY(e,t){return e.properties&&t?e.properties[t]:"id"in e?e.id:void 0}function fX(e){return e.properties?.layerName||null}function fK(e){return null!=e&&""!==e}function fJ(e,t,i){let n={...e,geometry:{type:e.geometry.type}};return Object.defineProperty(n.geometry,"coordinates",{get:()=>{var n;let r,s;return(n=e.geometry,r=i.projectFlat([t.west,t.north]),s=i.projectFlat([t.east,t.south]),{...n,coordinates:pD[n.type](n.coordinates,[r,s],i)}).coordinates}}),n}fZ.layerName="MVTLayer",fZ.defaultProps=fH;let fQ=[{id:"ponds",label:"Пруды",group:"water",color:"#3b82f6",kind:"fill",endpoint:"eco-water/ponds"},{id:"lakes",label:"Озёра",group:"water",color:"#1d4ed8",kind:"fill",endpoint:"eco-water/lakes"},{id:"reservoirs",label:"Водохранилища",group:"water",color:"#1e40af",kind:"fill",endpoint:"eco-water/reservoirs"},{id:"rivers",label:"Реки",group:"water",color:"#2563eb",kind:"line",endpoint:"eco-water/rivers"},{id:"channels",label:"Каналы",group:"water",color:"#0891b2",kind:"line",endpoint:"eco-water/channels"},{id:"ditches",label:"Арычная сеть",group:"water",color:"#06b6d4",kind:"line",endpoint:"eco-water/ditch-networks"},{id:"strips",label:"Водоохр. полосы",group:"water",color:"#67e8f9",kind:"fill",endpoint:"eco-water/protection-strips"},{id:"hydraulic",label:"Гидросооружения",group:"water",color:"#0284c7",kind:"point",endpoint:"eco-water/hydraulic-structures"},{id:"fountains",label:"Фонтаны",group:"fountain",color:"#06d6a0",kind:"point",endpoint:"eco-fountain/fountains",centroid:!0},{id:"waste-sites",label:"Площадки ТКО",group:"waste",color:"#f97316",kind:"point",endpoint:"eco-waste/municipal-sites"},{id:"kgo-zones",label:"Зоны КГО",group:"waste",color:"#ea580c",kind:"fill",endpoint:"eco-waste/kgo-zones"},{id:"plants",label:"Деревья и кустарники",group:"green",color:"#16a34a",kind:"point",endpoint:"",plantTiles:!0}],f0=[22,163,74,220],f1=[74,222,128,210],f2=[134,239,172,200],f3=[255,255,255,200],f4=[255,255,255,255];function f6(e){let t=e.properties?.plant_type;return 1===t?f0:2===t?f1:f2}function f5(e,t){return new fZ({id:"plants-mvt",data:`${location.origin}/api/plants-mvt/{z}/{x}/{y}`,minZoom:0,maxZoom:16,visible:e,renderSubLayers:e=>{let i=e.tile.zoom,n=e.data;return i<13?[new hM({...e,id:`${e.id}-cluster-circle`,data:n,getPosition:e=>e.geometry.coordinates,getFillColor:e=>{var t;return(t=e.properties.point_count??1)>1e4?[15,118,53,230]:t>1e3?[22,163,74,225]:t>100?[34,197,94,220]:[74,222,128,215]},getRadius:e=>{var t;return(t=e.properties.point_count??1)>5e4?50:t>1e4?40:t>1e3?30:t>100?22:14},radiusUnits:"pixels",stroked:!0,getLineColor:f3,lineWidthMinPixels:2,pickable:!1}),new h3({...e,id:`${e.id}-cluster-label`,data:n,getPosition:e=>e.geometry.coordinates,getText:e=>{var t;return(t=e.properties.point_count??1)>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${Math.round(t/1e3)}k`:String(t)},getSize:12,getColor:f4,fontWeight:700,getTextAnchor:"middle",getAlignmentBaseline:"center",pickable:!1})]:new hM({...e,id:`${e.id}-dot`,data:n,getPosition:e=>e.geometry.coordinates,getFillColor:f6,getRadius:4,radiusUnits:"pixels",radiusMinPixels:2,radiusMaxPixels:8,stroked:i>=14,getLineColor:f3,lineWidthMinPixels:.8,pickable:!0,autoHighlight:!0,highlightColor:[255,255,255,80],onClick:e=>{let i=e.object;if(!i)return;let n=i.geometry.coordinates;t({properties:i.properties??{},coordinates:n})}})}})}async function f8(e){let t=[],i=`http://localhost:8000/api/v1/ecology/${e}/?format=json&limit=500`;for(;i;){let e=await fetch(i,{headers:{Accept:"application/json"}});if(!e.ok)break;let n=await e.json();for(let e of Array.isArray(n)?n:n.results??[]){let i=e.centroid??e.geometry;i&&t.push({type:"Feature",geometry:i,properties:{...e,geometry:void 0,centroid:void 0}})}i=Array.isArray(n)?null:n.next??null}return t}function f7(e,t){let i=new Set(["geometry","centroid","id"]),n=Object.entries(e).filter(([e,t])=>!i.has(e)&&null!=t&&""!==t).slice(0,12).map(([e,t])=>`<tr><td style="color:#888;padding:2px 8px 2px 0">${e}</td><td style="font-weight:500">${t}</td></tr>`).join("");return`<div style="font-family:Inter,sans-serif;font-size:13px;max-width:260px">
    <div style="font-weight:700;margin-bottom:6px;color:#16a34a">${t}</div>
    <table style="border-collapse:collapse">${n||"<tr><td>—</td></tr>"}</table>
  </div>`}function f9({visibleLayers:e}){let t=(0,L.useRef)(null),i=(0,L.useRef)(null),n=(0,L.useRef)(null),{resolvedTheme:r}=(0,A.useTheme)(),[s,o]=(0,L.useState)(new Set),a=(0,L.useRef)(null),l=(0,L.useRef)(0),[c,u]=(0,L.useState)(!1),h=(0,L.useCallback)(()=>{l.current++,u(!0)},[]),d=(0,L.useCallback)(()=>{l.current=Math.max(0,l.current-1),0===l.current&&u(!1)},[]),p=(0,L.useRef)(new Set);(0,L.useEffect)(()=>{if(!i.current||t.current)return;T.default.accessToken="pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ";let e=new T.default.Map({container:i.current,style:"dark"===r?"mapbox://styles/mapbox/dark-v11":"mapbox://styles/mapbox/light-v11",center:[76.945,43.238],zoom:11.5});e.addControl(new T.default.NavigationControl,"top-right");let s=new cL({interleaved:!0,layers:[]});return e.addControl(s),n.current=s,t.current=e,()=>{s.finalize(),e.remove(),t.current=null,n.current=null}},[]),(0,L.useEffect)(()=>{let i=n.current;if(!i||!s.has("plants"))return;let r=fQ.find(e=>"plants"===e.id).label;i.setProps({layers:[f5(e.has("plants"),({properties:e,coordinates:i})=>{let n=t.current;n&&(a.current?.remove(),a.current=new T.default.Popup({maxWidth:"280px"}).setLngLat(i).setHTML(f7(e,r)).addTo(n))})]})},[e,s]);let f=(0,L.useCallback)(async i=>{let r=t.current;if(!r||!r.isStyleLoaded()||s.has(i.id)||p.current.has(i.id))return;if(p.current.add(i.id),"plantTiles"in i&&i.plantTiles){let r=n.current;if(!r)return;r.setProps({layers:[f5(e.has("plants"),({properties:e,coordinates:n})=>{let r=t.current;r&&(a.current?.remove(),a.current=new T.default.Popup({maxWidth:"280px"}).setLngLat(n).setHTML(f7(e,i.label)).addTo(r))})]}),o(e=>new Set([...e,i.id]));return}if(!i.endpoint)return;h();let l=[];try{l=await f8(i.endpoint)}finally{d()}if(!l.length)return;let c=`src-${i.id}`;r.getSource(c)||r.addSource(c,{type:"geojson",data:{type:"FeatureCollection",features:l},..."point"===i.kind?{cluster:!0,clusterMaxZoom:14,clusterRadius:40}:{}}),"fill"===i.kind?r.addLayer({id:i.id,type:"fill",source:c,paint:{"fill-color":i.color,"fill-opacity":.4,"fill-outline-color":i.color}}):"line"===i.kind?r.addLayer({id:i.id,type:"line",source:c,paint:{"line-color":i.color,"line-width":1.5,"line-opacity":.8}}):(r.addLayer({id:`${i.id}-clusters`,type:"circle",source:c,filter:["has","point_count"],paint:{"circle-color":i.color,"circle-radius":["step",["get","point_count"],16,10,22,100,28],"circle-stroke-width":2,"circle-stroke-color":"#fff"}}),r.addLayer({id:`${i.id}-count`,type:"symbol",source:c,filter:["has","point_count"],layout:{"text-field":["get","point_count_abbreviated"],"text-size":11,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"]},paint:{"text-color":"#fff"}}),r.addLayer({id:i.id,type:"circle",source:c,filter:["!",["has","point_count"]],paint:{"circle-color":i.color,"circle-radius":6,"circle-stroke-width":1.5,"circle-stroke-color":"#fff"}}),r.on("click",i.id,e=>{let t=e.features?.[0];t&&(a.current?.remove(),a.current=new T.default.Popup({maxWidth:"300px"}).setLngLat(t.geometry.coordinates).setHTML(f7(t.properties,i.label)).addTo(r))}),r.on("mouseenter",i.id,()=>{r.getCanvas().style.cursor="pointer"}),r.on("mouseleave",i.id,()=>{r.getCanvas().style.cursor=""}),r.on("click",`${i.id}-clusters`,e=>{let t=e.features?.[0];t&&r.getSource(c).getClusterExpansionZoom(t.properties.cluster_id,(e,i)=>{e||r.easeTo({center:t.geometry.coordinates,zoom:i})})})),"point"!==i.kind&&r.on("click",i.id,e=>{let t=e.features?.[0];t&&(a.current?.remove(),a.current=new T.default.Popup({maxWidth:"300px"}).setLngLat(e.lngLat).setHTML(f7(t.properties,i.label)).addTo(r))}),o(e=>new Set([...e,i.id]))},[s,e,h,d]);return(0,L.useEffect)(()=>{let i=t.current;i&&fQ.forEach(t=>{if("plantTiles"in t&&t.plantTiles){e.has(t.id)&&!s.has(t.id)&&(i.isStyleLoaded()?f(t):i.once("load",()=>f(t)));return}let n=e.has(t.id)?"visible":"none";("point"===t.kind?[t.id,`${t.id}-clusters`,`${t.id}-count`]:[t.id]).forEach(e=>{i.getLayer(e)&&i.setLayoutProperty(e,"visibility",n)}),e.has(t.id)&&!s.has(t.id)&&(i.isStyleLoaded()?f(t):i.once("load",()=>f(t)))})},[e,s,f]),(0,E.jsxs)("div",{style:{position:"relative",width:"100%",height:"100%"},children:[(0,E.jsx)("div",{ref:i,style:{width:"100%",height:"100%"}}),c&&(0,E.jsxs)("div",{style:{position:"absolute",inset:0,zIndex:100,backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",background:"rgba(0,0,0,0.35)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,cursor:"wait"},children:[(0,E.jsx)("style",{children:`
            @keyframes spin  { to { transform: rotate(360deg) } }
            @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
          `}),(0,E.jsx)("div",{style:{width:56,height:56,borderRadius:"50%",border:"4px solid rgba(255,255,255,0.15)",borderTopColor:"#16a34a",animation:"spin 0.8s linear infinite"}}),(0,E.jsxs)("div",{style:{textAlign:"center",color:"#fff",fontFamily:"Inter,sans-serif"},children:[(0,E.jsx)("div",{style:{fontSize:15,fontWeight:600,letterSpacing:.2},children:"Загрузка данных карты"}),(0,E.jsx)("div",{style:{fontSize:12,color:"rgba(255,255,255,0.6)",marginTop:4,animation:"pulse 1.5s ease-in-out infinite"},children:"Пожалуйста, подождите…"})]})]})]})}e.s(["EcoAlmatyMap",()=>f9,"LAYERS",0,fQ],10875)}]);