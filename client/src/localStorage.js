export class Storage{
	get(key){
		if ('localStorage' in window && window['localStorage'] !== null) {
				return  localStorage.getItem(key); 
			} else {
				console.warn('Warning: Local Storage is disabled or unavailable');
				return undefined;
			}
	}

	set(key, value){
		if ('localStorage' in window && window['localStorage'] !== null) {
				return localStorage.setItem(key, value);

			} else {
				console.warn('Warning: Local Storage is disabled or unavailable.  will not work correctly.');
				return undefined;
			}
	}

	remove(key){
		if ('localStorage' in window && window['localStorage'] !== null) {
				return localStorage.removeItem(key);
			} else {
				console.warn('Warning: Local Storage is disabled or unavailable.  will not work correctly.');
				return undefined;
			}
	}
}