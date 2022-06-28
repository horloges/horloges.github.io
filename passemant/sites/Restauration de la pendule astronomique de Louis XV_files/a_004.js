
        (function(){
        if(typeof window.AdGlare == 'undefined') {
        window.AdGlare = {
            _body: document.body || document.head || document.documentElement,
            _zonerefresh: [],
            _crIDsLoaded: {},
            _cIDsLoaded: {},
            _cIDroadblock: 0,
            _queue: [],
            _queueStatus: 0,
            _APICallbacks: [],
            _winID: Math.random().toString(36).slice(-5),
            API: {
                _exec: function(_method,zID,t) {
                    var f = AdGlare._APICallbacks[_method+'_'+zID];
                    return typeof f === 'function' ? f(t) : false;
                },
                Refresh: function(zID,t) {
                    if(AdGlare.API._exec('Refresh',zID,t)===false) {
                        var u = 'https://regis.riogrande'+'.fr/?'+zID;
                        var t = t || {};
                        if(t.keywords) u += '&keywords='+t.keywords;
                        AdGlare.loadScript(u);
                    }
                },
                isOpen: function(zID) {
                    return AdGlare.API._exec('isOpen',zID);                   
                },
                getIframeID: function(zID) {
                    return AdGlare.API._exec('getIframeID',zID);
                }
            },
            getCookie: function(cname) {
                
                    try {
                        var name = cname + '=';
                        var ca = document.cookie;
                        if(!ca || ca.indexOf(name)==-1) return '';
                        ca = document.cookie.split(';');
                        for(var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while(c.charAt(0) == ' ') c = c.substring(1);
                            if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
                        }
                    } catch(e) {}
                
                return '';
            },
            getCookieMacros: function() {
                
                return '';
            },
            getKVPairs: function() {
                
                    try {
                        var kvk = '#YnJhbmQ=#aG9tZQ==#';
                        if(kvk=='#' || kvk=='') return '';
                        var keys = kvk.split('#'), kws = {}, atleastone = false;
                        for(var i=0; i<keys.length; i++) {
                            if(keys[i]!='') {
                                var f = null, l = atob(keys[i]);
                                
                                //macros in KV pairs?
                                var m1_pos = l.indexOf('{'), m2_pos = l.indexOf('}');
                                if(m1_pos!=-1 && m2_pos!=-1) {
                                    var macro = l.substring(m1_pos+1,m2_pos);
                                    if(macro) {
                                        var tmp = null, tmp1 = AdGlare.getCookie(macro), tmp2 = window[macro];
                                        if(tmp1!='') tmp = tmp1;
                                        else if(tmp2!='') tmp = tmp2;
                                        if(tmp!=null) {
                                            l = l.replace('{'+macro+'}',tmp);
                                            kws[macro] = tmp+'';
                                        }
                                    }
                                }
                                
                                var c = AdGlare.getCookie(l), v = window[l];
                                if(v!==undefined) f = v;
                                else if(c!='') f = c;
                                if(f!=null) {
                                    if(typeof f != 'number' && typeof f != 'boolean') {
                                        if(typeof f == 'string') f = f.toLowerCase().substring(0,40);
                                        else continue;
                                    }
                                    kws[l] = f+'';
                                    atleastone = true;
                                }
                            }
                        }
                        return (!atleastone) ? '' : encodeURIComponent(btoa(JSON.stringify(kws)));
                    } catch(e) {}
                
                return '';
            },
            safeFrameGeo: function(dim) {
                try {
                    var a = window.$sf;
                    if(a && dim=='w') return a.ext.geom().self.w;
                    if(a && dim=='h') return a.ext.geom().self.h;
                } catch(e) {}
                return !1;
            },
            joinAssocArray: function(a) {
                var b = [];
                for(var i in a) if(a[i]!='') b.push(parseInt(a[i]));
                return b.join('-');
            },
            loadScript: function(url,nocb) {
                var s = document.createElement('script');
                s.setAttribute('data-cfasync', false);
                if(nocb!=1) url += ((url.indexOf('?')==-1) ? '?' : '&') + 'cb=' + Date.now() + Math.random(); 
                s.async = true; s.src = url;
                var el = document.getElementsByTagName('script')[0];
                el.parentNode.insertBefore(s, el);
            },
            loadJS: function(url) {
                var d = document, w = window, t, r='', screen='', availscreen='';
                var ratio = w.devicePixelRatio || 1;
                var framed = this.inIframe() ? 1 : 0;
                try {r = encodeURIComponent( (framed==1) ? '' || d.referrer : top.location.href || w.location.href || d.location.href );} catch(e) {} if(r=='') r = 'https%3A%2F%2Fwww.my-watchsite.fr%2F'; r = r.substring(0,500);
                screen = (parseInt(ratio * w.screen.width) || 0) + 'x' + (parseInt(ratio * w.screen.height) || 0);
                try {availscreen = (this.safeFrameGeo('w') || w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth) + 'x' + (this.safeFrameGeo('h') || w.innerHeight || d.documentElement.clientHeight || d.body.clientHeight);} catch(e) {}
                var add = '&cb=' + Date.now() + Math.random() + '&winid=' + AdGlare._winID + '&screen=' + screen + '&availscreen=' + availscreen + '&framed=' + framed + '&referer=' + r;
                add += '&bt=' + ((navigator.webdriver === true)?1:0);
                if((t = this.joinAssocArray(this._crIDsLoaded))!=='') add += '&crIDsLoaded='+t;
                if((t = this.joinAssocArray(this._cIDsLoaded))!=='') add += '&cIDsLoaded='+t;
                if((t = this.getCookieMacros())!=='') add += '&cm='+t;
                if((t = this.getKVPairs())!=='') add += '&kvpairs='+t;
                if((t = this._cIDroadblock)!=0) add += '&cIDroadblock='+t;
                if((t = this.getCaps())!=='') add += '&caps='+t;
                
                
                
                var s = d.createElement('script');
                s.setAttribute('data-cfasync', false);
                s.async = true; s.src = url + add;
                var el = document.getElementsByTagName('script')[0];
                el.parentNode.insertBefore(s, el);
            },
            loadQueue: function(url) {
                AdGlare._queue.push(url);
                AdGlare.continueQueue();
            },
            nextQueue: function() {
                AdGlare._queueStatus = 0;
                AdGlare.continueQueue();
            },
            continueQueue: function() {
                if(AdGlare._queueStatus != 0 || AdGlare._queue.length == 0) return;
                AdGlare._queueStatus = 1;
                AdGlare.loadJS(AdGlare._queue.shift());
            },
            addCSS: function(css) {
                if(css!='') {
                    var c = document.createElement('style');
                    c.type = 'text/css';
                    c.innerHTML = css;
                    AdGlare._body.appendChild(c);
                }
            },
            _dataQueue: {},
            _dataTimer: null,
            queueData: function(url,data) {
                if(!AdGlare._dataQueue[url]) AdGlare._dataQueue[url] = [];
                AdGlare._dataQueue[url].push(data);
                if(AdGlare._dataTimer === null) AdGlare._dataTimer = setTimeout(AdGlare.sendData,150);
            },
            sendData: function() {
                clearTimeout(AdGlare._dataTimer);
                AdGlare._dataTimer = null;
                var d = AdGlare._dataQueue;
                AdGlare._dataQueue = {};
                for(var url in d) {
                    if(d.hasOwnProperty(url)) {
                        var p = d[url].join('|');
                        if(navigator.sendBeacon) {
                            if(navigator.sendBeacon(url,p) === true) continue;
                        }
                        if(window.XMLHttpRequest) {
                            var xhr = new XMLHttpRequest();
                            xhr.open('POST',url,true);
                            xhr.send(p);
                            continue;
                        }
                        for(var data in d[url]) {
                            if(d[url].hasOwnProperty(data)) {
                                var i = document.createElement('IMG');
                                i.style.cssText = 'width:1px;height:1px;position:fixed;opacity:0.01;left:0;bottom:0;';
                                i.src = url + '?data=' + d[url][data];
                                var el = document.getElementsByTagName('script')[0];
                                el.parentNode.insertBefore(i, el);
                            }
                        }
                        
                    }
                }
            },
            loadPixel: function (url, elem, data) {
                try {
                    if(url && url.substring(0,7)=='http://' && location.protocol=='https:') url = 'https://' + url.substring(7);
                    var data = data || '';
                    if(elem=='img' && navigator.sendBeacon && data!='') {
                        //only send our own pixels (some 3P vendors don't accept POST)
                        if(navigator.sendBeacon(url,data) === true) return;
                    }
                    if(elem=='img' && window.XMLHttpRequest && data!='') {
                        //only send our own pixels (XHR requires CORS)
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST',url,true);
                        xhr.send(data);
                        return;
                    }
                    if(data!='') url += '?' + data;
                    var i = document.createElement(elem);
                    i.style.cssText = 'width:1px;height:1px;position:fixed;opacity:0.01;left:0;bottom:0;';
                    i.src = url;
                    var el = document.getElementsByTagName('script')[0];
                    el.parentNode.insertBefore(i, el);
                } catch(e) {}
            },
            loadAdGlareCallback: function(d) {
                
            },
            appendToContainer: function(id,html) {
                var o = document.getElementById(id);
                if(o) {
                    o.innerHTML = '';
                    o.appendChild(html);
                }
            },
            stopRefreshZone: function(zID) {
                if(this._zonerefresh[zID]) clearInterval(this._zonerefresh[zID]['timer']);
            },
            refreshZone: function(url,zID,timeout,max) {
                this._zonerefresh[zID] = this._zonerefresh[zID] || [];
                var timer_hash = 'timer_'+timeout+'_'+max;
                if(this._zonerefresh[zID]['timer_hash'] == timer_hash) return;
                clearInterval(this._zonerefresh[zID]['timer']);
                this._zonerefresh[zID]['timer_hash'] = timer_hash;
                this._zonerefresh[zID]['n'] = 1;
                this._zonerefresh[zID]['timer'] = setInterval(function(){
                    AdGlare._cIDsLoaded['zID_'+zID] = '';
                    AdGlare._crIDsLoaded['zID_'+zID] = '';
                    AdGlare.loadScript(url);
                    if(max>0 && AdGlare._zonerefresh[zID]['n']++ >= max) clearInterval(AdGlare._zonerefresh[zID]['timer']);
                }, (timeout || 1000));
            },
            getIframeDoc: function(id) {
                var o = document.getElementById(id);
                if(!o) return false;
                var d = o.contentDocument ?o.contentDocument : o.contentWindow.document || o.document;
                return d;
            },
            writeToIframe: function(id,content) {
                var ua = window.navigator.userAgent;
                if(ua.indexOf('MSIE ')>=0 || ua.indexOf('Edge/')>=0 || ua.indexOf('YaBrowser')>=0 || ua.indexOf('Trident/')>=0 || ua.indexOf('Opera Mini')>=0 || (ua.indexOf('Safari')>=0 && ua.indexOf('Chrome')==-1)) {
                    var d = this.getIframeDoc(id);
                    if(d) {d.open(); d.write(content); d.close();}
                } else {
                    document.getElementById(id).srcdoc = content;
                }
            },
            addMixedScript: function(d,c) {
                if(!d) return false;
                d.innerHTML = c;
                var t = document.createElement('div');
                t.innerHTML = c;   
                var elm = ((t.getElementsByTagName) ? t.getElementsByTagName('script') : t.querySelectorAll('script')) || [];
                for(i=0; i<elm.length; i++) {
                    var s = document.createElement('script');
                    var a = elm[i].attributes;
                    s.text = elm[i].text;
                    for(j=0; j<a.length; j++) s.setAttribute(a[j].name, a[j].value);
                    d.appendChild(s);
                }
            },
            inIframe: function() {
                return window.self !== window.top;
            },
            visBlock: function(zID,func) {
                var o = document.getElementById('zone'+zID);
                if(o && 'IntersectionObserver' in window) {
                    var observer = new IntersectionObserver(function(e){
                        if(e[0].intersectionRatio>0) {
                            observer.unobserve(e[0].target);
                            func();
                        }
                    }, {threshold: [ 0.01 ], rootMargin: '100px'});
                    observer.observe(o);
                } else {
                    func();
                }
            },
            getCaps: function() {
                
                    return '';
                
            },
            increaseCap: function(cID,sec,max,pos) {
                
            }
        }}})();
        
AdGlare.loadJS('https://regis.riogrande'+'.fr/?653647062'+'' + '&t=1&tt=1656449025-ff8a0e8a&keywords=lang_fr&ag_custom_page=homepage');
