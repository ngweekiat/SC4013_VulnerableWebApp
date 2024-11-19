import{D as Y,E as J,_ as G,C as g,B as H,o as $,c as P,a as t,h as C,v as q,l as j,i as I,j as U,e as W,F as Z,r as Q,f as X,G as x,H as ne,$ as i,V as K,A as R,s as ee,u as ae,I as D}from"./main-D_lcMXdT.js";import"../tab-B9vzLN1E.js";import{C as O}from"../htmlmixed-DGY3mCmy.js";var te={exports:{}};(function(e,a){(function(s,r){e.exports=r()})(Y,function(){var s="minute",r=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(c,n,d){var u=n.prototype;d.utc=function(o){var h={date:o,utc:!0,args:arguments};return new n(h)},u.utc=function(o){var h=d(this.toDate(),{locale:this.$L,utc:!0});return o?h.add(this.utcOffset(),s):h},u.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var T=u.parse;u.parse=function(o){o.utc&&(this.$u=!0),this.$utils().u(o.$offset)||(this.$offset=o.$offset),T.call(this,o)};var M=u.init;u.init=function(){if(this.$u){var o=this.$d;this.$y=o.getUTCFullYear(),this.$M=o.getUTCMonth(),this.$D=o.getUTCDate(),this.$W=o.getUTCDay(),this.$H=o.getUTCHours(),this.$m=o.getUTCMinutes(),this.$s=o.getUTCSeconds(),this.$ms=o.getUTCMilliseconds()}else M.call(this)};var y=u.utcOffset;u.utcOffset=function(o,h){var b=this.$utils().u;if(b(o))return this.$u?0:b(this.$offset)?y.call(this):this.$offset;if(typeof o=="string"&&(o=function(_){_===void 0&&(_="");var B=_.match(r);if(!B)return null;var E=(""+B[0]).match(l)||["-",0,0],w=E[0],S=60*+E[1]+ +E[2];return S===0?0:w==="+"?S:-S}(o),o===null))return this;var p=Math.abs(o)<=16?60*o:o,v=this;if(h)return v.$offset=p,v.$u=o===0,v;if(o!==0){var k=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(v=this.local().add(p+k,s)).$offset=p,v.$x.$localOffset=k}else v=this.utc();return v};var m=u.format;u.format=function(o){var h=o||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,h)},u.valueOf=function(){var o=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*o},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var f=u.toDate;u.toDate=function(o){return o==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var A=u.diff;u.diff=function(o,h,b){if(o&&this.$u===o.$u)return A.call(this,o,h,b);var p=this.local(),v=d(o).local();return A.call(p,v,h,b)}}})})(te);var re=te.exports;const se=J(re);var ie={exports:{}};(function(e,a){(function(s,r){e.exports=r()})(Y,function(){var s={year:0,month:1,day:2,hour:3,minute:4,second:5},r={};return function(l,c,n){var d,u=function(m,f,A){A===void 0&&(A={});var o=new Date(m),h=function(b,p){p===void 0&&(p={});var v=p.timeZoneName||"short",k=b+"|"+v,_=r[k];return _||(_=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:b,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:v}),r[k]=_),_}(f,A);return h.formatToParts(o)},T=function(m,f){for(var A=u(m,f),o=[],h=0;h<A.length;h+=1){var b=A[h],p=b.type,v=b.value,k=s[p];k>=0&&(o[k]=parseInt(v,10))}var _=o[3],B=_===24?0:_,E=o[0]+"-"+o[1]+"-"+o[2]+" "+B+":"+o[4]+":"+o[5]+":000",w=+m;return(n.utc(E).valueOf()-(w-=w%1e3))/6e4},M=c.prototype;M.tz=function(m,f){m===void 0&&(m=d);var A=this.utcOffset(),o=this.toDate(),h=o.toLocaleString("en-US",{timeZone:m}),b=Math.round((o-new Date(h))/1e3/60),p=n(h,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-b,!0);if(f){var v=p.utcOffset();p=p.add(A-v,"minute")}return p.$x.$timezone=m,p},M.offsetName=function(m){var f=this.$x.$timezone||n.tz.guess(),A=u(this.valueOf(),f,{timeZoneName:m}).find(function(o){return o.type.toLowerCase()==="timezonename"});return A&&A.value};var y=M.startOf;M.startOf=function(m,f){if(!this.$x||!this.$x.$timezone)return y.call(this,m,f);var A=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return y.call(A,m,f).tz(this.$x.$timezone,!0)},n.tz=function(m,f,A){var o=A&&f,h=A||f||d,b=T(+n(),h);if(typeof m!="string")return n(m).tz(h);var p=function(B,E,w){var S=B-60*E*1e3,z=T(S,w);if(E===z)return[S,E];var F=T(S-=60*(z-E)*1e3,w);return z===F?[S,z]:[B-60*Math.min(z,F)*1e3,Math.max(z,F)]}(n.utc(m,o).valueOf(),b,h),v=p[0],k=p[1],_=n(v).utcOffset(k);return _.$x.$timezone=h,_},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(m){d=m}}})})(ie);var ce=ie.exports;const le=J(ce),ue=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Asmera","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Atka","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Buenos_Aires","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Catamarca","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Cordoba","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fort_Wayne","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indianapolis","America/Inuvik","America/Iqaluit","America/Jamaica","America/Jujuy","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Knox_IN","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Louisville","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Mendoza","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Acre","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santa_Isabel","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Shiprock","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Virgin","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/South_Pole","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Ashkhabad","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Calcutta","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Chungking","Asia/Colombo","Asia/Dacca","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Istanbul","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Katmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macao","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Rangoon","Asia/Riyadh","Asia/Saigon","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimbu","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ujung_Pandang","Asia/Ulaanbaatar","Asia/Ulan_Bator","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faeroe","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/ACT","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Canberra","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/LHI","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/NSW","Australia/North","Australia/Perth","Australia/Queensland","Australia/South","Australia/Sydney","Australia/Tasmania","Australia/Victoria","Australia/West","Australia/Yancowinna","Brazil/Acre","Brazil/DeNoronha","Brazil/East","Brazil/West","CET","CST6CDT","Canada/Atlantic","Canada/Central","Canada/Eastern","Canada/Mountain","Canada/Newfoundland","Canada/Pacific","Canada/Saskatchewan","Canada/Yukon","Chile/Continental","Chile/EasterIsland","Cuba","EET","EST","EST5EDT","Egypt","Eire","Etc/GMT","Etc/GMT+0","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-0","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/GMT0","Etc/Greenwich","Etc/UCT","Etc/UTC","Etc/Universal","Etc/Zulu","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Nicosia","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","GB","GB-Eire","GMT","GMT+0","GMT-0","GMT0","Greenwich","HST","Hongkong","Iceland","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Iran","Israel","Jamaica","Japan","Kwajalein","Libya","MET","MST","MST7MDT","Mexico/BajaNorte","Mexico/BajaSur","Mexico/General","NZ","NZ-CHAT","Navajo","PRC","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Ponape","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Samoa","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Truk","Pacific/Wake","Pacific/Wallis","Pacific/Yap","Poland","Portugal","ROC","ROK","Singapore","Turkey","UCT","US/Alaska","US/Aleutian","US/Arizona","US/Central","US/East-Indiana","US/Eastern","US/Hawaii","US/Indiana-Starke","US/Michigan","US/Mountain","US/Pacific","US/Pacific-New","US/Samoa","UTC","Universal","W-SU","WET","Zulu"],de={props:{index:Number,initialField:Object},data:function(){return{field:this.initialField}},methods:{persistedField:function(){return this.field.id>=1},saveField:function(){let e=this.field;this.persistedField()?g.fetch(`/api/v1/configs/fields/${this.field.id}`,{method:"PATCH",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(a=>a.json()).then(a=>{a.success===!0&&(this.field=a.data,H({title:"Success",body:"Field has been updated!",delay:1e3}))}):g.fetch("/api/v1/configs/fields",{method:"POST",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(a=>a.json()).then(a=>{a.success===!0&&(this.field=a.data,H({title:"Success",body:"Field has been created!",delay:1e3}))})},deleteField:function(){confirm("Are you sure you'd like to delete this field?")&&(this.persistedField()?g.fetch(`/api/v1/configs/fields/${this.field.id}`,{method:"DELETE",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.success===!0&&this.$emit("remove-field",this.index)}):this.$emit("remove-field",this.index))}}},me={class:"border-bottom"},fe=t("span",{"aria-hidden":"true"},"×",-1),Ae=[fe],he={class:"row"},pe={class:"col-md-3"},ge={class:"form-group"},ve=t("label",null,"Field Type",-1),be=t("option",{value:"text"},"Text Field",-1),_e=t("option",{value:"boolean"},"Checkbox",-1),ye=[be,_e],ke=t("small",{class:"form-text text-muted"},"Type of field shown to the user",-1),Ee={class:"col-md-9"},Te={class:"form-group"},Me=t("label",null,"Field Name",-1),Ce=t("small",{class:"form-text text-muted"},"Field name",-1),Se={class:"col-md-12"},$e={class:"form-group"},Pe=t("label",null,"Field Description",-1),Be=t("small",{id:"emailHelp",class:"form-text text-muted"},"Field Description",-1),we={class:"col-md-12"},De={class:"form-check"},ze={class:"form-check-label"},xe={class:"form-check"},Ne={class:"form-check-label"},je={class:"form-check"},Ge={class:"form-check-label"},Fe={class:"row pb-3"},Ie={class:"col-md-12"},Ue={class:"d-block"};function Oe(e,a,s,r,l,c){return $(),P("div",me,[t("div",null,[t("button",{type:"button",class:"close float-right","aria-label":"Close",onClick:a[0]||(a[0]=n=>c.deleteField())},Ae)]),t("div",he,[t("div",pe,[t("div",ge,[ve,C(t("select",{class:"form-control custom-select","onUpdate:modelValue":a[1]||(a[1]=n=>e.field.field_type=n)},ye,512),[[q,e.field.field_type,void 0,{lazy:!0}]]),ke])]),t("div",Ee,[t("div",Te,[Me,C(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a[2]||(a[2]=n=>e.field.name=n)},null,512),[[j,e.field.name,void 0,{lazy:!0}]]),Ce])]),t("div",Se,[t("div",$e,[Pe,C(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a[3]||(a[3]=n=>e.field.description=n)},null,512),[[j,e.field.description,void 0,{lazy:!0}]]),Be])]),t("div",we,[t("div",De,[t("label",ze,[C(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":a[4]||(a[4]=n=>e.field.editable=n)},null,512),[[I,e.field.editable,void 0,{lazy:!0}]]),U(" Editable by user in profile ")])]),t("div",xe,[t("label",Ne,[C(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=n=>e.field.required=n)},null,512),[[I,e.field.required,void 0,{lazy:!0}]]),U(" Required on registration ")])]),t("div",je,[t("label",Ge,[C(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":a[6]||(a[6]=n=>e.field.public=n)},null,512),[[I,e.field.public,void 0,{lazy:!0}]]),U(" Shown on public profile ")])])])]),t("div",Fe,[t("div",Ie,[t("div",Ue,[t("button",{class:"btn btn-sm btn-success btn-outlined float-right",type:"button",onClick:a[7]||(a[7]=n=>c.saveField())}," Save ")])])])])}const Le=G(de,[["render",Oe]]),Ve={name:"FieldList",components:{Field:Le},props:{type:String},data:function(){return{fields:[]}},methods:{loadFields:function(){g.fetch(`/api/v1/configs/fields?type=${this.type}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{this.fields=e.data})},addField:function(){this.fields.push({id:Math.random(),type:this.type,field_type:"text",name:"",description:"",editable:!1,required:!1,public:!1})},removeField:function(e){this.fields.splice(e,1),console.log(this.fields)}},created(){this.loadFields()}},He={class:"row"},Re={class:"col text-center"};function Ke(e,a,s,r,l,c){const n=W("Field");return $(),P("div",null,[($(!0),P(Z,null,Q(e.fields,(d,u)=>($(),P("div",{class:"mb-5",key:d.id},[X(n,{index:u,initialField:e.fields[u],onRemoveField:c.removeField},null,8,["index","initialField","onRemoveField"])]))),128)),t("div",He,[t("div",Re,[t("button",{class:"btn btn-sm btn-success btn-outlined m-auto",type:"button",onClick:a[0]||(a[0]=d=>c.addField())}," Add New Field ")])])])}const Ye=G(Ve,[["render",Ke]]),Je={props:{index:Number,initialBracket:Object},data:function(){return{bracket:this.initialBracket}},methods:{persisted:function(){return this.bracket.id>=1},saveBracket:function(){let e=this.bracket,a="",s="",r="";this.persisted()?(a=`/api/v1/brackets/${this.bracket.id}`,s="PATCH",r="Bracket has been updated!"):(a="/api/v1/brackets",s="POST",r="Bracket has been created!"),g.fetch(a,{method:s,credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(l=>l.json()).then(l=>{l.success===!0&&(this.bracket=l.data,H({title:"Success",body:r,delay:1e3}))})},deleteBracket:function(){confirm("Are you sure you'd like to delete this bracket?")&&(this.persisted()?g.fetch(`/api/v1/brackets/${this.bracket.id}`,{method:"DELETE",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.success===!0&&this.$emit("remove-bracket",this.index)}):this.$emit("remove-bracket",this.index))}}},qe={class:"border-bottom"},We=t("span",{"aria-hidden":"true"},"×",-1),Ze=[We],Qe={class:"row"},Xe={class:"col-md-9"},ea={class:"form-group"},aa=t("label",null,"Bracket Name",-1),ta=t("small",{class:"form-text text-muted"},' Bracket name (e.g. "Students", "Interns", "Engineers") ',-1),ia={class:"col-md-12"},oa={class:"form-group"},na=t("label",null,"Bracket Description",-1),ra=t("small",{class:"form-text text-muted"},"Bracket Description",-1),sa={class:"col-md-12"},ca=t("label",null,"Bracket Type",-1),la=t("option",null,null,-1),ua=t("option",{value:"users"},"Users",-1),da=t("option",{value:"teams"},"Teams",-1),ma=[la,ua,da],fa=t("small",{class:"form-text text-muted"}," If you are using Team Mode and would like the bracket to apply to entire teams instead of individuals, select Teams. ",-1),Aa={class:"row pb-3"},ha={class:"col-md-12"},pa={class:"d-block"};function ga(e,a,s,r,l,c){return $(),P("div",qe,[t("div",null,[t("button",{type:"button",class:"close float-right","aria-label":"Close",onClick:a[0]||(a[0]=n=>c.deleteBracket())},Ze)]),t("div",Qe,[t("div",Xe,[t("div",ea,[aa,C(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a[1]||(a[1]=n=>e.bracket.name=n)},null,512),[[j,e.bracket.name,void 0,{lazy:!0}]]),ta])]),t("div",ia,[t("div",oa,[na,C(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a[2]||(a[2]=n=>e.bracket.description=n)},null,512),[[j,e.bracket.description,void 0,{lazy:!0}]]),ra])]),t("div",sa,[ca,C(t("select",{class:"custom-select","onUpdate:modelValue":a[3]||(a[3]=n=>e.bracket.type=n)},ma,512),[[q,e.bracket.type,void 0,{lazy:!0}]]),fa])]),t("div",Aa,[t("div",ha,[t("div",pa,[t("button",{class:"btn btn-sm btn-success btn-outlined float-right",type:"button",onClick:a[4]||(a[4]=n=>c.saveBracket())}," Save ")])])])])}const va=G(Je,[["render",ga]]),ba={name:"BracketList",components:{Bracket:va},data:function(){return{brackets:[]}},methods:{loadBrackets:function(){g.fetch("/api/v1/brackets",{method:"GET",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{this.brackets=e.data})},addBracket:function(){this.brackets.push({id:Math.random(),name:"",description:"",type:null})},removeBracket:function(e){this.brackets.splice(e,1)}},created(){this.loadBrackets()}},_a={class:"row"},ya={class:"col text-center"};function ka(e,a,s,r,l,c){const n=W("Bracket");return $(),P("div",null,[($(!0),P(Z,null,Q(e.brackets,(d,u)=>($(),P("div",{class:"mb-5",key:d.id},[X(n,{index:u,initialBracket:e.brackets[u],onRemoveBracket:c.removeBracket},null,8,["index","initialBracket","onRemoveBracket"])]))),128)),t("div",_a,[t("div",ya,[t("button",{class:"btn btn-sm btn-success btn-outlined m-auto",type:"button",onClick:a[0]||(a[0]=d=>c.addBracket())}," Add New Bracket ")])])])}const Ea=G(ba,[["render",ka]]);x.extend(ne);x.extend(se);x.extend(le);function L(e,a){typeof a=="string"&&(a=parseInt(a,10)*1e3);const s=x(a);i("#"+e+"-month").val(s.month()+1),i("#"+e+"-day").val(s.date()),i("#"+e+"-year").val(s.year()),i("#"+e+"-hour").val(s.hour()),i("#"+e+"-minute").val(s.minute()),N(e)}function N(e){const a=i("#"+e+"-month").val(),s=i("#"+e+"-day").val(),r=i("#"+e+"-year").val(),l=i("#"+e+"-hour").val(),c=i("#"+e+"-minute").val(),n=i("#"+e+"-timezone").val(),d=Ta(a,s,r,l,c);d.unix()&&a&&s&&r&&l&&c?(i("#"+e).val(d.unix()),i("#"+e+"-local").val(d.format("dddd, MMMM Do YYYY, h:mm:ss a z (zzz)")),i("#"+e+"-zonetime").val(d.tz(n).format("dddd, MMMM Do YYYY, h:mm:ss a z (zzz)"))):(i("#"+e).val(""),i("#"+e+"-local").val(""),i("#"+e+"-zonetime").val(""))}function Ta(e,a,s,r,l){let c=e.toString();c.length==1&&(c="0"+c);let n=a.toString();n.length==1&&(n="0"+n);let d=r.toString();d.length==1&&(d="0"+d);let u=l.toString();u.length==1&&(u="0"+u);const T=s.toString()+"-"+c+"-"+n+" "+d+":"+u+":00";return x(T)}function oe(e){e.preventDefault();const a=i(this).serializeJSON(),s={};a.mail_useauth===!1?(a.mail_username=null,a.mail_password=null):(a.mail_username===""&&delete a.mail_username,a.mail_password===""&&delete a.mail_password),Object.keys(a).forEach(function(r){a[r]==="true"?s[r]=!0:a[r]==="false"?s[r]=!1:s[r]=a[r]}),g.api.patch_config_list({},s).then(function(r){if(r.success)window.location.reload();else{let l=r.errors.value.join(`
`);R({title:"Error!",body:l,button:"Okay"})}})}function Ma(e){e.preventDefault();let a=e.target;ee.files.upload(a,{},function(s){const l={value:s.data[0].location};g.fetch("/api/v1/configs/ctf_logo",{method:"PATCH",body:JSON.stringify(l)}).then(function(c){return c.json()}).then(function(c){c.success?window.location.reload():R({title:"Error!",body:"Logo uploading failed!",button:"Okay"})})})}function Ca(e){e.preventDefault();let a=new FormData(e.target),s=`Are you sure you'd like to switch user modes?

All submissions, awards, unlocks, and tracking will be deleted!`;a.get("user_mode")=="users"&&(s=`Are you sure you'd like to switch user modes?

All teams, submissions, awards, unlocks, and tracking will be deleted!`),confirm(s)&&(a.append("submissions",!0),a.append("nonce",g.config.csrfNonce),fetch(g.config.urlRoot+"/admin/reset",{method:"POST",credentials:"same-origin",body:a}),oe.bind(this)(e))}function Sa(){ae({title:"Remove logo",body:"Are you sure you'd like to remove the CTF logo?",success:function(){const e={value:null};g.api.patch_config({configKey:"ctf_logo"},e).then(a=>{window.location.reload()})}})}function $a(e){e.preventDefault();let a=e.target;ee.files.upload(a,{},function(s){const l={value:s.data[0].location};g.fetch("/api/v1/configs/ctf_small_icon",{method:"PATCH",body:JSON.stringify(l)}).then(function(c){return c.json()}).then(function(c){c.success?window.location.reload():R({title:"Error!",body:"Icon uploading failed!",button:"Okay"})})})}function Pa(){ae({title:"Remove logo",body:"Are you sure you'd like to remove the small site icon?",success:function(){const e={value:null};g.api.patch_config({configKey:"ctf_small_icon"},e).then(a=>{window.location.reload()})}})}function Ba(e){e.preventDefault();let a=document.getElementById("import-csv-file").files[0],s=document.getElementById("import-csv-type").value,r=new FormData;r.append("csv_file",a),r.append("csv_type",s),r.append("nonce",g.config.csrfNonce);let l=D({width:0,title:"Upload Progress"});i.ajax({url:g.config.urlRoot+"/admin/import/csv",type:"POST",data:r,processData:!1,contentType:!1,statusCode:{500:function(c){let n=JSON.parse(c.responseText),d="";n.forEach(u=>{d+=`Line ${u[0]}: ${JSON.stringify(u[1])}
`}),alert(d),l=D({target:l,width:100}),setTimeout(function(){l.modal("hide")},500)}},xhr:function(){let c=i.ajaxSettings.xhr();return c.upload.onprogress=function(n){if(n.lengthComputable){let d=n.loaded/n.total*100;l=D({target:l,width:d})}},c},success:function(c){l=D({target:l,width:100}),setTimeout(function(){l.modal("hide")},500),setTimeout(function(){window.location.reload()},700)}})}function wa(e){e.preventDefault();let a=document.getElementById("import-file").files[0],s=new FormData;s.append("backup",a),s.append("nonce",g.config.csrfNonce);let r=D({width:0,title:"Upload Progress"});i.ajax({url:g.config.urlRoot+"/admin/import",type:"POST",data:s,processData:!1,contentType:!1,statusCode:{500:function(l){alert(l.responseText)}},xhr:function(){let l=i.ajaxSettings.xhr();return l.upload.onprogress=function(c){if(c.lengthComputable){let n=c.loaded/c.total*100;r=D({target:r,width:n})}},l},success:function(l){r=D({target:r,width:100}),location.href=g.config.urlRoot+"/admin/import"}})}function Da(e){e.preventDefault(),window.location.href=i(this).attr("href")}function V(e){let a=i("<option>").text(x.tz.guess());i(e).append(a);let s=ue;for(let r=0;r<s.length;r++){let l=i("<option>").text(s[r]);i(e).append(l)}}i(()=>{const e=O.fromTextArea(document.getElementById("theme-header"),{lineNumbers:!0,lineWrapping:!0,mode:"htmlmixed",htmlMode:!0}),a=O.fromTextArea(document.getElementById("theme-footer"),{lineNumbers:!0,lineWrapping:!0,mode:"htmlmixed",htmlMode:!0}),s=O.fromTextArea(document.getElementById("theme-settings"),{lineNumbers:!0,lineWrapping:!0,readOnly:!0,mode:{name:"javascript",json:!0}});i("a[href='#theme']").on("shown.bs.tab",function(y){e.refresh(),a.refresh(),s.refresh()}),i("a[href='#legal'], a[href='#tos-config'], a[href='#privacy-policy-config']").on("shown.bs.tab",function(y){i("#tos-config .CodeMirror").each(function(m,f){f.CodeMirror.refresh()}),i("#privacy-policy-config .CodeMirror").each(function(m,f){f.CodeMirror.refresh()})}),i("#theme-settings-modal form").submit(function(y){y.preventDefault(),s.getDoc().setValue(JSON.stringify(i(this).serializeJSON(),null,2)),i("#theme-settings-modal").modal("hide")}),i("#theme-settings-button").click(function(){let y=i("#theme-settings-modal form"),m;try{m=JSON.parse(s.getValue())}catch{m={}}i.each(m,function(f,A){var o=y.find(`[name='${f}']`);switch(o.prop("type")){case"radio":case"checkbox":o.each(function(){i(this).attr("checked",A),i(this).attr("value",A)});break;default:o.val(A)}}),i("#theme-settings-modal").modal()}),V(i("#start-timezone")),V(i("#end-timezone")),V(i("#freeze-timezone")),i(".config-section > form:not(.form-upload, .custom-config-form)").submit(oe),i("#logo-upload").submit(Ma),i("#user-mode-form").submit(Ca),i("#remove-logo").click(Sa),i("#ctf-small-icon-upload").submit($a),i("#remove-small-icon").click(Pa),i("#export-button").click(Da),i("#import-button").click(wa),i("#import-csv-form").submit(Ba),i("#config-color-update").click(function(){const y=i("#config-color-picker").val(),m=e.getValue();let f;if(m.length){let A=`theme-color: ${y};`;f=m.replace(/theme-color: (.*);/,A)}else f=`<style id="theme-color">
:root {--theme-color: ${y};}
.navbar{background-color: var(--theme-color) !important;}
.jumbotron{background-color: var(--theme-color) !important;}
</style>
`;e.getDoc().setValue(f)}),i(".start-date").change(function(){N("start")}),i(".end-date").change(function(){N("end")}),i(".freeze-date").change(function(){N("freeze")});const r=i("#start").val(),l=i("#end").val(),c=i("#freeze").val();r&&L("start",r),l&&L("end",l),c&&L("freeze",c),i("#mail_useauth").change(function(){i("#mail_username_password").toggle(this.checked)}).change(),i("#config-sidebar .nav-link").click(function(){window.scrollTo(0,0)});const n=K.extend(Ye);let d=document.createElement("div");document.querySelector("#user-field-list").appendChild(d),new n({propsData:{type:"user"}}).$mount(d);let u=document.createElement("div");document.querySelector("#team-field-list").appendChild(u),new n({propsData:{type:"team"}}).$mount(u);const T=K.extend(Ea);let M=document.createElement("div");document.querySelector("#brackets-list").appendChild(M),new T({}).$mount(M)});
