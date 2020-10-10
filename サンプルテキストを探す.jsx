(function() {

	const SCRIPT_TITLE = 'サンプルテキストを探す';
	const SCRIPT_VERSION = '0.1.0';

	var doc = app.activeDocument;  
	var txf = doc.textFrames;

	var counter = {
		'yamaji': {
			'word': '山路を登りながら',
		},
		'jo': {
			'word': '情に棹させば流される',
		},
	};
	for(var key in counter) {
		counter[key].count = 0;
		counter[key].locked = 0;
		counter[key].hidden = 0;
	}

	for(var i = 0; i < txf.length; i++) {
		for(var key in counter) {
			counter[key] = itemCount(txf[i], counter[key]);
		}
	}

	var message = 'このドキュメントは';
	if(counter.yamaji.count + counter.jo.count > 0) {
		if(counter.yamaji.count > 0) {
			message += '\n' + counter.yamaji.count + ' 回 山路を登っています';
			if(counter.yamaji.locked + counter.yamaji.hidden > 0) message += '（ロック：' + counter.yamaji.locked +'／非表示：' + counter.yamaji.hidden +'）';
		}
		if(counter.jo.count > 0) {
			message += '\n' + counter.jo.count + ' 回 情に棹さして流されています';
			if(counter.jo.locked + counter.jo.hidden > 0) message += '（ロック：' + counter.jo.locked +'／非表示：' + counter.jo.hidden +'）';
		}
	} else {
		message += '、山路を登っていませんし、情に棹さして流されてもいません。';
	}
	alert(message);

	function itemCount(txf, obj) {
		var str = txf.contents;
		str = str.replace(/(\r\n|\n|\r|\u0003)/gm, '');
		if(str.match(new RegExp(obj.word))) {
			obj.count++;
			if(txf.locked || txf.layer.locked) obj.locked++;
			if(txf.hidden) obj.hidden++;
		}
		return obj;
	}

}());