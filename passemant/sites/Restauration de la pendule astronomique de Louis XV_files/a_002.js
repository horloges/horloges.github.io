var AdGlareSettings_981501 = {
            zID: 554228702,
            cID: 252937159,
            crID: 664603705,
            containerID: '',
            width: 1200,
            height: 300,
            isSync: false,
            framed: 0,
            useiframe: 'yes',
            alwaysOnScreen: false,
            alwaysOnScreenData: '',       
            animationType: 'none',
            allowClose: false,
            isBase64Encoded: false,          
            zoneHTML: "<ins style='width:1200px;height:auto;max-width:100%;max-height:300px;border:none;overflow:hidden;margin:0px;padding:0px;display:inline-block;visibility:visible;position:relative;opacity:1;background:transparent;background-color:transparent;vertical-align:top;'><a id=adglare_a_554228702 onclick='parent.AdGlareImageBanner_981501.fireClick();' href='https://www.cartier.com/fr-fr/montres/collection-de-montres/tank' rel=nofollow target='_blank' style='visibility:visible; width:100%; opacity:1; display:inline-block;'><img id=adglare_img_554228702 style='visibility:visible; position:static; opacity:1; width:1200px; height:auto; max-width:100%; max-height:300px; vertical-align:top;' src='https://regis-cdn.riogrande.fr/t987ebcd7/img/k67en_crvh8k_1696a2fa.jpg' ></a></ins>",
            autoRefresh: {},
            verificationCode: '',
            verificationCodeClick: '',
            viewability: {
                vbURLBase: 'https://regis.riogrande'+'.fr/data',
                token_viewable: 'eyJ0cyI6IjIwMjItMDYtMjggMjI6NDM6NDUiLCJ0aW1lIjoxNjU2NDQ5MDI1LCJ0eXBlIjoidmlld2FibGUiLCJ6SUQiOjU1NDIyODcwMiwiY0lEIjoiMjUyOTM3MTU5IiwiY3JJRCI6IjY2NDYwMzcwNSIsInRpZXIiOiIyIiwiYWR0eXBlIjoiaW1hZ2ViYW5uZXIiLCJhZGZvcm1hdCI6ImlhYl8xMjAwXzMwMCIsImRvbWFpbiI6Im15LXdhdGNoc2l0ZS5mciIsInNzbCI6InllcyIsIl8iOjU3NzQxNTc3Nn0.-00dd52fe',
                token_measurable: 'eyJ0cyI6IjIwMjItMDYtMjggMjI6NDM6NDUiLCJ0aW1lIjoxNjU2NDQ5MDI1LCJ0eXBlIjoibWVhc3VyYWJsZSIsInpJRCI6NTU0MjI4NzAyLCJjSUQiOiIyNTI5MzcxNTkiLCJjcklEIjoiNjY0NjAzNzA1IiwidGllciI6IjIiLCJhZHR5cGUiOiJpbWFnZWJhbm5lciIsImFkZm9ybWF0IjoiaWFiXzEyMDBfMzAwIiwiZG9tYWluIjoibXktd2F0Y2hzaXRlLmZyIiwic3NsIjoieWVzIiwiXyI6NDgyMDM0MzIwfQ..-e56830bb'
            },
            impression: {
                impURLBase: 'https://regis.riogrande'+'.fr/data',
                impURLData: "eyJ0aW1lIjoxNjU2NDQ5MDI1LCJ0eXBlIjoiaW1wIiwieklEIjo1NTQyMjg3MDIsImNJRCI6IjI1MjkzNzE1OSIsImNySUQiOiI2NjQ2MDM3MDUiLCJ0aWVyIjoiMiIsImFkdHlwZSI6ImltYWdlYmFubmVyIiwiYWRmb3JtYXQiOiJpYWJfMTIwMF8zMDAiLCJkb21haW4iOiJteS13YXRjaHNpdGUuZnIiLCJjcl9vcHRfZ3JvdXAiOm51bGwsInNzbCI6InllcyIsImNvb3JkIjoiNDkjOCIsInZhbHVlIjowLCJfIjo0MDQ2NTQ4NDJ9-65912e04",
                impressionPixels: []
            },
            click: {
                clickURLBase: 'https://regis.riogrande'+'.fr/c',
                clickURLData: 'data=eyJ0aW1lIjoxNjU2NDQ5MDI1LCJ6SUQiOjU1NDIyODcwMiwiY0lEIjoiMjUyOTM3MTU5IiwiY3JJRCI6IjY2NDYwMzcwNSIsImRvbWFpbiI6Im15LXdhdGNoc2l0ZS5mciIsImNyX29wdF9ncm91cCI6bnVsbCwiaXBoYXNoIjoiYzI5Nzc2ZjQiLCJjbSI6IiIsImxvZyI6MSwicmVmZXJlciI6Imh0dHBzJTNBJTJGJTJGd3d3Lm15LXdhdGNoc2l0ZS5mciUyRmJsb2clMkZsYS1wZW5kdWxlLWFzdHJvbm9taXF1ZS1kZS1sb3Vpcy14di1yZXN0YXVyZWUtZ3JhY2UtYXUtbWVjZW5hdC1yb2xleCUyRiIsIl8iOjg4Mzk4ODMyN30.-7a55348d&keywords=lang_fr&ag_custom_page=homepage',
                autoClickTracking: false,
                clickPixels: []
            },
            freqcaps: [],
            p3Vendor: '',
            performance: {
                perfURLBase: 'https://regis.riogrande'+'.fr/data',
                loadtimeBuckets: [],
            },
            
        };
AdGlare._crIDsLoaded['zID_554228702'] = '664603705';
AdGlare._cIDsLoaded['zID_554228702'] = '252937159';
AdGlare.nextQueue();
var AdGlareImageBanner_981501 = {
        _clickFired: false,
        _clickListenerTimer: null,
        settings: {},
        html_content: '',
        ifrm_id: 'ag'+Math.round((Math.random()*10000000)),
        observeObj: null,
        init: function(_settings, tries) {
            if(_settings.containerID && document.getElementById(_settings.containerID) && !document.getElementById('zone'+_settings.zID)) {
                var s = document.createElement('SPAN');
                s.id = 'zone'+_settings.zID;
                document.getElementById(_settings.containerID).appendChild(s);
            }
            if(!document.getElementById('zone'+_settings.zID) && !_settings.isSync) {
                tries = tries || 1;
                var timeout = 10;
                if(tries>100) timeout = 100;
                if(tries>190) timeout = 1000;
                window.setTimeout(function(){
                    AdGlareImageBanner_981501.init(_settings,tries+1);
                },timeout);
                return;
            }
            this.settings = _settings;
            this.fireImpression();
            this.show();
            
            AdGlare._APICallbacks['isOpen_'+this.settings.zID] = function() {
                var el = document.getElementById(AdGlareImageBanner_981501.ifrm_id);
                return (!el) ? false : true;
            };
            AdGlare._APICallbacks['getIframeID_'+this.settings.zID] = function() {
                return AdGlareImageBanner_981501.ifrm_id;
            };
        },
        close: function() {
            var el = document.getElementById('zone'+this.settings.zID);
            if(el) el.innerHTML = '';
            clearTimeout(this._clickListenerTimer);
        },
        show: function() {
            
            var targetzID = this.settings.zID;
            
            
            this.settings.zoneHTML = this.settings.zoneHTML.replace(/<tpircs/g,'<script').replace(/tpircs>/g,'script>');
            if(this.settings.isBase64Encoded) this.settings.zoneHTML = decodeURIComponent(atob(this.settings.zoneHTML));
            
            if(this.settings.isSync) {
                document.write('<span id=zone'+this.settings.zID+'>'+this.settings.zoneHTML+'</span>');
                this.observeObj = document.getElementById('zone'+this.settings.zID);
            } else if(this.settings.p3Vendor.toLowerCase() == 'adsense' || this.settings.useiframe=='no') {
                AdGlare.addMixedScript(document.getElementById('zone'+this.settings.zID), this.settings.zoneHTML);
                this.observeObj = document.getElementById('zone'+this.settings.zID);
                this.addClickListener();
            } else {
                var w = (this.settings.width==1920) ? '100%' : this.settings.width+'px';
                ifrm = document.createElement('iframe');
                ifrm.id = this.ifrm_id;
                ifrm.setAttribute('frameborder', '0');
                ifrm.setAttribute('marginheight', '0');
                ifrm.setAttribute('marginwidth', '0');
                ifrm.setAttribute('scrolling', 'no');                
                ifrm.setAttribute('allow', 'autoplay; fullscreen');
                ifrm.style.cssText = 'width:'+w+';height:'+this.settings.height+'px;background:transparent;overflow:hidden;margin:0px;border:none;vertical-align:middle;';
                ifrm.style.maxWidth = '100%';
                
                this.html_content = "<!doctype html> <html style='margin:0px; padding:0px;'> <head> <title>-</title> </head> <body id=docbody onclick='parent.AdGlareImageBanner_981501.fireClick();' style='margin:0px; padding:0px; animation-delay:100ms;' > "+this.settings.zoneHTML+" "+((this.settings.allowClose?"<img id=img_close_"+this.settings.zID+" onmousedown='parent.AdGlareImageBanner_981501.close();' style='cursor:pointer; z-index:2147483647; position:absolute; top:0px; right:0px; height:28px; width:28px;' src='https://regis-cdn.riogrande.fr/t987ebcd7/inventory/close_button.png'>":""))+" "+((this.settings.verificationCode!=''?decodeURIComponent(atob(this.settings.verificationCode)):""))+" <scri"+"pt> </scr"+"ipt> </body> </html>";
                
                AdGlare.appendToContainer('zone'+targetzID,ifrm);
                AdGlare.writeToIframe(AdGlareImageBanner_981501.ifrm_id,AdGlareImageBanner_981501.html_content);
                this.observeObj = document.getElementById(ifrm.id);
                
                try {
                    this.iFrameResize();
                    window.addEventListener('resize', this.iFrameResize, false);
                    if(this.settings.click.autoClickTracking===true) this.addClickListener();
                } catch(e) {};
            }
            
            if('IntersectionObserver' in window && document.visibilityState) {
                var vistimer = null, vistimer_n = 0;
                AdGlare.queueData(this.settings.viewability.vbURLBase,this.settings.viewability.token_measurable);
                var observer = new IntersectionObserver(function(e){
                    if(e[0].intersectionRatio>=0.5) {
                        if(document.visibilityState=='visible') {
                            vistimer = window.setInterval(function(){
                                if(++vistimer_n==10) {
                                    AdGlare.queueData(AdGlareImageBanner_981501.settings.viewability.vbURLBase,AdGlareImageBanner_981501.settings.viewability.token_viewable);
                                }
                                if(vistimer_n>=10) {
                                    window.clearInterval(vistimer);
                                    observer.unobserve(e[0].target);
                                }
                            },100);
                        }
                    } else {
                        window.clearInterval(vistimer);
                    }
                }, {threshold: [ 0.5 ]});
                observer.observe(this.observeObj);
            }
                
            AdGlare.loadAdGlareCallback(this.settings.callbackData);
            if(this.settings.freqcaps) {
                for(var i=0; i<this.settings.freqcaps.length; i++) {
                    var c = this.settings.freqcaps[i];
                    AdGlare.increaseCap(c['cID'],c['sec'],c['max'],c['pos']);
                }
            }
            if(this.settings.autoRefresh.interval > 0  && !this.settings.isSync) {
                AdGlare.refreshZone(this.settings.autoRefresh.loc,this.settings.zID,this.settings.autoRefresh.interval,this.settings.autoRefresh.max);
            } else {
                AdGlare.stopRefreshZone(this.settings.zID);
            }
            
            
            
        },
        fireImpression: function() {
            AdGlare.queueData(this.settings.impression.impURLBase,this.settings.impression.impURLData);
            for(var i=0; i<this.settings.impression.impressionPixels.length; i++) {
                var a = this.settings.impression.impressionPixels[i];
                AdGlare.loadPixel(a.url, a.elem);
            }
        },
        fireClick: function() {
            var t = AdGlareImageBanner_981501;
            if(t._clickFired===true) return;
            t._clickFired = true;
            AdGlare.loadPixel(t.settings.click.clickURLBase,'img',t.settings.click.clickURLData);
            for(var i=0; i<t.settings.click.clickPixels.length; i++) {
                var a = t.settings.click.clickPixels[i];
                AdGlare.loadPixel(a.url, a.elem);
            }
            clearTimeout(AdGlareImageBanner_981501._clickListenerTimer);
            if(t.settings.verificationCodeClick!='') {
                window.setTimeout(function(){
                    var t = AdGlareImageBanner_981501;
                    var s = document.createElement('SPAN');
                    s.style.display = 'none';
                    s.id = 'span_verificationcode_'+t.settings.zID;
                    document.getElementById('zone'+t.settings.zID).appendChild(s);
                    AdGlare.addMixedScript(document.getElementById('span_verificationcode_'+t.settings.zID), decodeURIComponent(atob(t.settings.verificationCodeClick)));
                },100);
            }
        },
        addClickListener: function() {
            var el = document.getElementById('zone'+AdGlareImageBanner_981501.settings.zID);
            el.addEventListener('click', AdGlareImageBanner_981501.fireClick, false);
            window.setTimeout(function() {
                var f = function() {
                    //Firefox sends the activeElement *before* the click: use a timeout
                    window.setTimeout(function() {
                        var e = document.activeElement;
                        if(e && e.tagName=='IFRAME' && e.id==AdGlareImageBanner_981501.ifrm_id && document.visibilityState=='visible'){
                            AdGlareImageBanner_981501.fireClick();
                        }
                    },10);
                };
                AdGlareImageBanner_981501._clickListenerTimer = window.setInterval(f,1000);
                window.addEventListener('blur', f, false);
            },3000);
        },
        iFrameResize: function() {
            
            //if(AdGlareImageBanner_981501.settings.settings.width==2000) return; //presume 100% width
            if(AdGlareImageBanner_981501.settings.framed==1) {
                var _overflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }
            var el = document.getElementById(AdGlareImageBanner_981501.ifrm_id);
            if(!el) return;
            var rect = el.getClientRects();
            if(!rect[0]) return;
            var el_w = parseFloat(rect[0].width);
            if(el_w==0) return;
            var maxh = Math.round(el_w / AdGlareImageBanner_981501.settings.width * AdGlareImageBanner_981501.settings.height*100)/100;
            if(maxh==0) return;
            el.style.maxHeight = maxh+'px';
            if(AdGlareImageBanner_981501.settings.framed==1) {
                document.body.style.overflow = _overflow;
            }
        },
        
        
    }
AdGlareImageBanner_981501.init(AdGlareSettings_981501);
