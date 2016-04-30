module.exports = {
	onStoreUpdate: function (event, data) {
		function toCamelCase (event) {
			var words = event.split('_');
			words = words.map(function (word, index) {
				return index == 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.substr(1,word.length - 1).toLowerCase();
			});
			words.push('Listener')
			return words.join('');
		}


		var functionName = toCamelCase(event);
		this[functionName] && this[functionName](data);
	}
};