var _0x559e=['India','click','bar','update','.active\x20.no','\x20\x20\x20','onload','label','Jan','textContent','getContext','rgba(255,\x20206,\x2086,\x200.6)','Apr','Total','https://api.covid19india.org/data.json','length','.infected\x20.no','deaths','May','defaultFontSize','recovered','Something\x20went\x20wrong!\x20please\x20reload\x20the\x20page','Oct','confirmed','addEventListener','.recovered\x20.date','getElementById','active','querySelector','split','July','defaultFontColor','send','Aug','.deaths\x20.no','GET','Lato','myChart','log','defaults','defaultFontFamily','Affected','state','rgba(75,\x20192,\x20192,\x200.6)','statewise','Nov','Recovered','right','lastupdatedtime','June','open','rgba(255,\x2099,\x20132,\x200.6)','Dec','.options-container','#777','.infected\x20.date','.selected','global','status','.option','remove','toggle','response','#000','datasets','Mar','.active\x20.date','Active','data','innerHTML'];(function(_0x15164c,_0x559ea0){var _0x10473a=function(_0x3fb7bd){while(--_0x3fb7bd){_0x15164c['push'](_0x15164c['shift']());}};_0x10473a(++_0x559ea0);}(_0x559e,0xbc));var _0x1047=function(_0x15164c,_0x559ea0){_0x15164c=_0x15164c-0x0;var _0x10473a=_0x559e[_0x15164c];return _0x10473a;};let myChart=document[_0x1047('0x30')](_0x1047('0x3b'))[_0x1047('0x20')]('2d');Chart[_0x1047('0x3d')][_0x1047('0x9')][_0x1047('0x3e')]=_0x1047('0x3a');Chart[_0x1047('0x3d')][_0x1047('0x9')][_0x1047('0x29')]=0x12;Chart[_0x1047('0x3d')][_0x1047('0x9')][_0x1047('0x35')]='#777';var active,recovered,infected,death;var activeNo=document[_0x1047('0x32')](_0x1047('0x1a'));var infectedNo=document[_0x1047('0x32')](_0x1047('0x26'));var recoveredNo=document[_0x1047('0x32')]('.recovered\x20.no');var deathNo=document['querySelector'](_0x1047('0x38'));var activeDate=document['querySelector'](_0x1047('0x12'));var infectedDate=document[_0x1047('0x32')](_0x1047('0x7'));var recoveredDate=document[_0x1047('0x32')](_0x1047('0x2f'));var deathDate=document[_0x1047('0x32')]('.deaths\x20.date');var url=_0x1047('0x24');var myObj;let massPopChart=new Chart(myChart,{'type':_0x1047('0x18'),'data':{'labels':[_0x1047('0x13'),_0x1047('0x3f'),_0x1047('0x44'),'Death'],'datasets':[{'label':'Active','data':[active,infected,recovered,death],'backgroundColor':[_0x1047('0x3'),'rgba(54,\x20162,\x20235,\x200.6)',_0x1047('0x21'),_0x1047('0x41')],'borderWidth':0x1,'borderColor':_0x1047('0x6'),'hoverBorderWidth':0x3,'hoverBorderColor':'#000'}]},'options':{'title':{'display':!![],'text':'','fontSize':0x19},'legend':{'display':!![],'position':_0x1047('0x45'),'labels':{'fontColor':_0x1047('0xf')}},'layout':{'padding':{'left':0x32,'right':0x0,'bottom':0x0,'top':0x0}},'tooltips':{'enabled':!![]}}});function getJSON(_0x20fb8e,_0x3fb2ca){var _0x3c3d30=new XMLHttpRequest();_0x3c3d30[_0x1047('0x2')](_0x1047('0x39'),_0x20fb8e,!![]);_0x3c3d30[_0x1047('0x1c')]=function(){var _0x41c047=_0x3c3d30[_0x1047('0xa')];if(_0x41c047===0xc8){_0x3fb2ca(null,_0x3c3d30[_0x1047('0xe')]);}else{_0x3fb2ca(_0x41c047,_0x3c3d30[_0x1047('0xe')]);}};_0x3c3d30[_0x1047('0x36')]();};getJSON(url,function(_0x42fffe,_0x3b7959){if(_0x42fffe!=null){alert(_0x1047('0x2b'));}else{myObj=JSON['parse'](_0x3b7959);stateData(myObj,_0x1047('0x23'));console[_0x1047('0x3c')](myObj[_0x1047('0x42')][0x4][_0x1047('0x40')]);}});function stateData(_0x2e29ff,_0xab77d3){for(let _0x72898e=0x0;_0x72898e<_0x2e29ff[_0x1047('0x42')][_0x1047('0x25')];_0x72898e++){if(_0xab77d3===_0x2e29ff[_0x1047('0x42')][_0x72898e][_0x1047('0x40')]){console[_0x1047('0x3c')](_0xab77d3+_0x1047('0x1b')+_0x2e29ff[_0x1047('0x42')][_0x72898e][_0x1047('0x40')]);console[_0x1047('0x3c')]('Selected\x20state\x20is'+_0x2e29ff[_0x1047('0x42')][_0x72898e][_0x1047('0x31')]);activeNo['textContent']=_0x2e29ff[_0x1047('0x42')][_0x72898e][_0x1047('0x31')];infectedNo[_0x1047('0x1f')]=_0x2e29ff[_0x1047('0x42')][_0x72898e][_0x1047('0x2d')];recoveredNo[_0x1047('0x1f')]=_0x2e29ff[_0x1047('0x42')][_0x72898e][_0x1047('0x2a')];deathNo[_0x1047('0x1f')]=_0x2e29ff[_0x1047('0x42')][_0x72898e]['deaths'];LastUpdateTime(_0x2e29ff[_0x1047('0x42')][_0x72898e]);console[_0x1047('0x3c')](massPopChart[_0x1047('0x14')][_0x1047('0x10')][0x0][_0x1047('0x14')]);addData(massPopChart,_0x2e29ff['statewise'][_0x72898e]);}}}getJSON;console[_0x1047('0x3c')](myObj);const selected=document['querySelector'](_0x1047('0x8'));const optionsContainer=document[_0x1047('0x32')](_0x1047('0x5'));const optionsList=document['querySelectorAll'](_0x1047('0xb'));selected[_0x1047('0x2e')](_0x1047('0x17'),()=>{optionsContainer['classList'][_0x1047('0xd')](_0x1047('0x31'));});optionsList['forEach'](_0xcabfa9=>{_0xcabfa9[_0x1047('0x2e')](_0x1047('0x17'),()=>{selected[_0x1047('0x15')]=_0xcabfa9[_0x1047('0x32')](_0x1047('0x1d'))[_0x1047('0x15')];optionsContainer['classList'][_0x1047('0xc')](_0x1047('0x31'));console[_0x1047('0x3c')](selected[_0x1047('0x1f')]);currentState=selected[_0x1047('0x1f')];console['log'](typeof currentState);if(selected[_0x1047('0x1f')]===_0x1047('0x16')){stateData(myObj,'Total');}else{stateData(myObj,currentState);}});});function addData(_0x51f962,_0x5e6010){_0x51f962[_0x1047('0x14')][_0x1047('0x10')][0x0][_0x1047('0x14')][0x0]=_0x5e6010[_0x1047('0x31')];_0x51f962[_0x1047('0x14')][_0x1047('0x10')][0x0][_0x1047('0x14')][0x1]=_0x5e6010['confirmed'];_0x51f962[_0x1047('0x14')][_0x1047('0x10')][0x0][_0x1047('0x14')][0x2]=_0x5e6010[_0x1047('0x2a')];_0x51f962['data'][_0x1047('0x10')][0x0][_0x1047('0x14')][0x3]=_0x5e6010[_0x1047('0x27')];_0x51f962[_0x1047('0x19')]();}function LastUpdateTime(_0xaeb022){var _0x17a894=_0xaeb022[_0x1047('0x0')][_0x1047('0x33')]('/');console[_0x1047('0x3c')](_0x17a894);var _0x4e9286;switch(_0x17a894[0x1]){case'01':_0x4e9286=_0x1047('0x1e');break;case'02':_0x4e9286='Feb';break;case'03':_0x4e9286=_0x1047('0x11');break;case'04':_0x4e9286=_0x1047('0x22');break;case'05':_0x4e9286=_0x1047('0x28');break;case'06':_0x4e9286=_0x1047('0x1');break;case'07':_0x4e9286=_0x1047('0x34');break;case'08':_0x4e9286=_0x1047('0x37');break;case'09':_0x4e9286='Sept';break;case'10':_0x4e9286=_0x1047('0x2c');break;case'11':_0x4e9286=_0x1047('0x43');break;case'12':_0x4e9286=_0x1047('0x4');break;}activeDate[_0x1047('0x1f')]=_0x4e9286+'\x20'+_0x17a894[0x0]+'\x20'+_0x17a894[0x2];infectedDate[_0x1047('0x1f')]=_0x4e9286+'\x20'+_0x17a894[0x0]+'\x20'+_0x17a894[0x2];recoveredDate['textContent']=_0x4e9286+'\x20'+_0x17a894[0x0]+'\x20'+_0x17a894[0x2];deathDate['textContent']=_0x4e9286+'\x20'+_0x17a894[0x0]+'\x20'+_0x17a894[0x2];}