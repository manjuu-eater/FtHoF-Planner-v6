/// <reference path="base64.js" />
// @ts-check
/**
 * FtHoF Planner v6
 * index.js
 */

/**
 * seedrandom
 * https://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.2/seedrandom.min.js
 *
 * same as used in main.js
 */
(function (a, b, c, d, e, f) {
	function k(a) {
		var b, c = a.length, e = this, f = 0, g = e.i = e.j = 0, h = e.S = [];
		for (c || (a = [c++]); d > f;) h[f] = f++;
		for (f = 0; d > f; f++) h[f] = h[g = j & g + a[f % c] + (b = h[f])], h[g] = b;
		(e.g = function (a) {
			for (var b, c = 0, f = e.i, g = e.j, h = e.S; a--;) b = h[f = j & f + 1], c = c * d + h[j & (h[f] = h[g = j & g + b]) + (h[g] = b)];
			return e.i = f, e.j = g, c
		})(d)
	}

	function l(a, b) {
		var e, c = [], d = (typeof a)[0];
		if (b && "o" == d) for (e in a) try {
			c.push(l(a[e], b - 1))
		} catch (f) {
		}
		return c.length ? c : "s" == d ? a : a + "\0"
	}

	function m(a, b) {
		for (var d, c = a + "", e = 0; c.length > e;) b[j & e] = j & (d ^= 19 * b[j & e]) + c.charCodeAt(e++);
		return o(b)
	}

	function n(c) {
		try {
			return a.crypto.getRandomValues(c = new Uint8Array(d)), o(c)
		} catch (e) {
			return [+new Date, a, a.navigator.plugins, a.screen, o(b)]
		}
	}

	function o(a) {
		return String.fromCharCode.apply(0, a)
	}

	var g = c.pow(d, e), h = c.pow(2, f), i = 2 * h, j = d - 1;
	c.seedrandom = function (a, f) {
		var j = [], p = m(l(f ? [a, o(b)] : 0 in arguments ? a : n(), 3), j), q = new k(j);
		return m(o(q.S), b), c.random = function () {
			for (var a = q.g(e), b = g, c = 0; h > a;) a = (a + c) * d, b *= d, c = q.g(1);
			for (; a >= i;) a /= 2, b /= 2, c >>>= 1;
			return (a + c) / b
		}, p
	}, m(c.random(), b)
})(this, [], Math, 256, 6, 52);


/**
 * function choose from Cookie Clicker main.js
 * random choose one from arr
 *
 * @template T
 * @param {T[]} arr
 * @returns {T} chosen item
 */
function choose(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

var app = angular.module('myApp', ['ngMaterial']);
app.controller('myCtrl', function ($scope) {
	$scope.seed = ""
	$scope.ascensionMode = 0
	$scope.spellsCastTotal = 0
	$scope.spellsCastThisAscension = 0
	$scope.dragonflight = false
	$scope.supremeintellect = false
	$scope.diminishineptitude = false
	$scope.on_screen_cookies = 0
	$scope.min_combo_length = 2
	$scope.max_combo_length = 4
	$scope.max_spread = 2
	//$scope.save_string = "Mi4wMTl8fDE1NTcwMjQwMjkzMjQ7MTUyNTU2Mzg4NjQ5ODsxNTU3MDI2MDY3NTI2O1ByZXR0eSBCaXNjdWl0O2ljb2NkfDExMTExMTExMTAwMTAwMTAwMDAxMHwzMTcyOTc5ODU2ODk2MS4wNzsyNDk5OTU5MzQxMDEyOTYuNjszNTE0OzgzMzc7Nzc3NzExMzQ3NDEzMDIuMjc7NzI2ODU7MDszOzEuNjMwODE0MDg0NjAwMTQxOGUrMTAxOzA7MDswOzA7MDsxMDg7MTE7MDswOzExOzE7MjU4MzAzNjsxO2NocmlzdG1hczswOzA7NS40NjM0NjQ4MjMyNzM2MjRlKzI5OzUuNDYzNDY0ODIzMjczNjI0ZSsyOTsxMDM0OTI0NTIwNTExOzA7MDsyMjY7MjI4OzIyMzsyMjI7MjI1OzU7MTswOzE7MTAwOzA7MDsxODk7NDY3OzE1NTcwMjM1NTE1NDY7MTU1Njk5MjAzMDQ0ODswOzEyOSwyMjc7NDA7fDE2MCwxNjAsMTg0MDI4NTc4NDIyMCwxLCwwOzE1MCwxNTAsNzE2NTA1ODQ0NTcwLDEsLDA7MTAwLDIxMCwyODczMDgyMzkzMyw5LDE1NTcwMjYyODY2MDQ6MDoxNTU3MDI0MDI5MzMxOjA6MDozNzM5OjE6MToxNTU3MDI0MDI5MzMxOiAxMTExMTAxMDExMTExMTAwMDAwMDEwMTEwMDAwMDAwMTAwIDA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOjA6MDowOiwwOzEwMCwyMDAsODg2MTIxODQ2MDMsMSwsMDsxMDAsMTgwLDE5NjIxNTUxOTQzMSwxLCwwOzgwLDE1MCw3MzUxMjI3MzcxNzcsMSwsMDs1MCw1MCwxNzUzMjgyNjI2MDA4LDEsMi8tMS8tMSAyIDE1NTcwMjU5NTgwMzQgMSwwOzUwLDUxLDY5OTUwMzAwMjc2NTksMSwzNiAwIDM1NTUgMSwwOzMwLDMwLDE5Njg2NTA3NjkzNjA0LDEsLDA7MTUsMTUsMjE5ODQxODMyNjA2NDIsMSwsMDsxMCwxMCwyMzI3OTQ1NzQyMDkyOCwxLCwwOzUsNSw1OTkyOTYzODI0OTY5OSwyLCwwOzAsMCwwLDQsLDA7MCwwLDAsMTAsLDA7MCwwLDAsNCwsMDswLDAsMCwxMCwsMDt8MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAxMDEwMDAxMDEwMDAxMTExMTExMTExMTExMTExMTExMTExMTEwMDExMTExMTExMDAwMDAwMDAxMTExMTAxMTExMTExMTExMTExMTAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExMTEwMDExMTEwMDAwMDAwMDExMDAxMTExMTAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAwMDExMTExMTExMDAwMDAwMDAwMDExMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDExMDAxMTAwMTEwMDExMTExMTExMTEwMDAwMDAwMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMTExMTAxMDEwMDAxMDAwMDAxMDAwMTEwMDAwMDAwMDAwMDAwMDAwMDAxMTExMTExMTAwMDAwMDEwMTEwMDAwMDAxMTAwMDAwMDAwMDAwMDAwMTExMTAwMTExMTAwMTEwMDAwMDAxMTExMTExMTAwMDAxMTExMTExMTAwMDAxMTExMTExMDAwMDAxMTExMTExMTExMTEwMDAwMDAwMDAwMDAwMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDExMTExMTExMTExMTExMDAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDExMTExMTExMTExMTExMTExMDExMTExMTExMDAwMDExMDAwMDEwMDAwMDAwMDAxMDAwMDAxMDAwMTAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExMTExMTAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExMTExMTExMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDExMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTExMTAwMDAwMDAwMDAxMTExMTExMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTEwMDExMTExMTExMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTEwMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMTExMTExMXwxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTEwMDAwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDAwMDAwMDAwMDAwMDExMTEwMTExMTExMTExMTEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExfA%3D%3D%21END%21%3D%3D%21END%21"
	$scope.save_string = ""
	$scope.lookahead = 200

	/**
	 * push 50 more items to FtHoF list
	 */
	$scope.load_more = function () {
		$scope.lookahead += 50
		$scope.update_cookies()
	}

	/**
	 * pop 1 and push 1 item to FtHoF list
	 */
	$scope.cast_spell = function () {
		$scope.spellsCastThisAscension++;
		$scope.spellsCastTotal++;
		$scope.update_cookies();
	}

	/**
	 * call cast_spell() 10 times
	 */
	$scope.cast_spell_10 = function () {
		$scope.spellsCastThisAscension += 10;
		$scope.spellsCastTotal += 10;
		$scope.update_cookies();
	}

	/**
	 * log $scope (debug function)
	 */
	$scope.print_scope = function () {
		console.log($scope);
	}

	/**
	 * load save code
	 *
	 * @param {string?} str save code (if omitted, read from html)
	 */
	$scope.load_game = function (str) {
		let spl;
		if (!str) {
			str = $scope.save_string;
		}
		str = str.split('!END!')[0];
		str = Base64.decode(str);
		str = str.split('|');
		spl = str[2].split(';');
		$scope.seed = spl[4];
		console.log($scope.seed);

		spl = str[4].split(';');
		$scope.ascensionMode = parseInt(spl[29]);
		console.log(spl);
		spl = str[5].split(';');
		console.log(spl[7]);

		$scope.spellsCastTotal = parseInt(spl[7].split(' ')[2]) || 0;
		console.log('Total spells cast: ' + $scope.spellsCastTotal);

		$scope.spellsCastThisAscension = parseInt(spl[7].split(' ')[1]) || 0;
		console.log('Spells cast this ascension: ' + $scope.spellsCastThisAscension);

		$scope.update_cookies();
	}

	/**
	 * calculate future FtHoF que and display result
	 */
	$scope.update_cookies = function () {
		$scope.cookies = []
		$scope.randomSeeds = [];
		$scope.baseBackfireChance = 0.15*($scope.supremeintellect?1.1:1)*($scope.diminishineptitude?0.1:1);
		$scope.backfireChance = $scope.baseBackfireChance+0.15*$scope.on_screen_cookies;
		$scope.displayCookies = [];
		let bsIndices = [];
		let skipIndices = [];
		let currentTime = Date.now();
		for (let i = 0; i < $scope.lookahead; i++) {
			let currentSpell = i+$scope.spellsCastTotal;
			Math.seedrandom($scope.seed + '/' + currentSpell);
			let roll = Math.random();
			$scope.randomSeeds.push(roll);

			$scope.cookies.push([])
			$scope.displayCookies.push([])
			let cookie1Success = check_cookies($scope.spellsCastTotal + i, '', false, true)
			let cookie2Success = check_cookies($scope.spellsCastTotal + i, '', true, true)
			//cookie3 = check_cookies($scope.spellsCastTotal + i, '', true)
			let cookie1Backfire = check_cookies($scope.spellsCastTotal + i, '', false, false)
			let cookie2Backfire = check_cookies($scope.spellsCastTotal + i, '', true, false)
			let gambler = check_gambler($scope.spellsCastTotal + i)
			$scope.cookies[i].push(cookie1Success)
			$scope.cookies[i].push(cookie2Success)
			$scope.cookies[i].push(cookie1Backfire)
			$scope.cookies[i].push(cookie2Backfire)
			$scope.cookies[i].push(gambler)

			if (cookiesContainBuffs($scope.include_ef_in_sequence, cookie1Success, cookie2Success, cookie1Backfire, cookie2Backfire) || gambler.hasBs || ($scope.include_ef_in_sequence && gambler.hasEf)) {
				bsIndices.push(i);
			}

			if (($scope.skip_abominations && gambler.type == 'Resurrect Abomination') || ($scope.skip_edifices && gambler.type == 'Spontaneous Edifice' && !gambler.backfire)) {
				skipIndices.push(i);
			}

			if ($scope.randomSeeds[i] + $scope.backfireChance < 1) {
				$scope.displayCookies[i].push($scope.cookies[i][0]);
				$scope.displayCookies[i].push($scope.cookies[i][1]);
				if ($scope.cookies[i][2].type == "Elder Frenzy") {$scope.displayCookies[i][0].type += " (EF)"; $scope.displayCookies[i][0].noteworthy = true;}
				if ($scope.cookies[i][3].type == "Elder Frenzy") {$scope.displayCookies[i][1].type += " (EF)"; $scope.displayCookies[i][1].noteworthy = true;}
				if ($scope.cookies[i][2].type == "Free Sugar Lump") {$scope.displayCookies[i][0].type += " (Lump)";}
				if ($scope.cookies[i][3].type == "Free Sugar Lump") {$scope.displayCookies[i][1].type += " (Lump)";}
			}
			else {
				$scope.displayCookies[i].push($scope.cookies[i][2]);
				$scope.displayCookies[i].push($scope.cookies[i][3]);
				if ($scope.cookies[i][0].type == "Building Special") {$scope.displayCookies[i][0].type += " (BS)"; $scope.displayCookies[i][0].noteworthy = true;}
				if ($scope.cookies[i][1].type == "Building Special") {$scope.displayCookies[i][1].type += " (BS)"; $scope.displayCookies[i][1].noteworthy = true;}
				if ($scope.cookies[i][0].type == "Free Sugar Lump") {$scope.displayCookies[i][0].type += " (Lump)";}
				if ($scope.cookies[i][1].type == "Free Sugar Lump") {$scope.displayCookies[i][1].type += " (Lump)";}
			}
			$scope.displayCookies[i].push(gambler);
		}
		console.log($scope.cookies);
		console.log(bsIndices);
		console.log(skipIndices);
		console.log(Date.now()-currentTime);

		$scope.combos = {}

		for (let combo_length = $scope.min_combo_length; combo_length <= $scope.max_combo_length; combo_length++) {
			$scope.combos[combo_length] = findCombos(combo_length, $scope.max_spread, bsIndices, skipIndices);
		}

		console.log('Combos: ');
		console.log($scope.combos);
		console.log(Date.now()-currentTime);
	}

	/**
	 * toggle interface button
	 *
	 * @param {number} contentId number of "content-*"
	 */
	$scope.collapse_interface = function (contentId) {
		console.log("content-" + contentId);
		if( contentId) {
			var content = document.getElementById("content-" + contentId);
			if (content.style.display === "block") {
				content.style.display = "none";
			} else {
				content.style.display = "block";
			}
		}
	}

	//want to return shortest, and first sequence for a given combo_length
	//if nothing that satisfies max_spread, shortest will still be filled but first will be empty
	/**
	 * find comboes from indexes
	 *
	 * @param {number} combo_length want length of combo
	 * @param {number} max_spread number of max spread (padding; neither BS nor skip)
	 * @param {number[]} bsIndices indexes of buff (Building Special etc.)
	 * @param {number[]} skipIndices indexes of skippable GFD (Resurrect Abomination etc.)
	 * @returns {object} found result
	 */
	function findCombos(combo_length, max_spread, bsIndices, skipIndices) {
		let shortestDistance = 10000000;
		let shortestStart = -1;

		let firstDistance = 10000000;
		let firstStart = -1

		for (i = 0; i + combo_length <= bsIndices.length; i++) {
			let seqStart = bsIndices[i];
			let seqEnd = bsIndices[i + combo_length - 1];
			let baseDistance = seqEnd - seqStart + 1;

			let skips = skipIndices.filter((idx) => idx > seqStart && idx < seqEnd && !bsIndices.includes(idx));

			let distance = baseDistance - skips.length;
			if (firstStart == -1 && distance <= combo_length + max_spread) {
				firstStart = seqStart;
				firstDistance = distance;
			}

			if (distance < shortestDistance) {
				shortestStart = seqStart;
				shortestDistance = distance;
			}
		}

		return {
			shortest: {idx: shortestStart, length: shortestDistance},
			first: {idx: firstStart, length: firstDistance}
		};
	}

	/**
	 * determine whether passed cookies may trigger any buffs
	 *
	 * @param {boolean} include_ef whether include Elder Fever
	 * @param  {...object} cookies cookie objects that may trigger buff
	 * @returns {boolean} true if triggers buff
	 */
	function cookiesContainBuffs(include_ef, ...cookies) {
		return cookies.some((cookie) => {
			return cookie.type == 'Building Special' || (include_ef && cookie.type == 'Elder Frenzy');
		});
	}

	/**
	 * get cast result object of Gambler's Fever Dream
	 *
	 * @param {number} spellsCast index of cast to see (with total cast)
	 * @returns GFD cast result
	 */
	function check_gambler(spellsCast) {
		Math.seedrandom($scope.seed + '/' + spellsCast);

		let spells = [];
		for (var i in $scope.spells) {
			if (i != "gambler's fever dream")
				spells.push($scope.spells[i]);
		}

		var gfdSpell = choose(spells);
		//simplifying the below cause this isn't patched yet afaict and i'll never be playing with diminished ineptitutde backfire
		var gfdBackfire = 0.5; /*M.getFailChance(gfdSpell);

		if(FortuneCookie.detectKUGamblerPatch()) gfdBackfire *= 2;
		else gfdBackfire = Math.max(gfdBackfire, 0.5);*/

		let gamblerSpell = {};
		gamblerSpell.type = gfdSpell.name;
		gamblerSpell.hasBs = false;
		gamblerSpell.hasEf = false;

		Math.seedrandom($scope.seed + '/' + (spellsCast + 1));
		if (Math.random() < (1 - gfdBackfire)) {
			gamblerSpell.backfire = false;

			if (gfdSpell.name == "Force the Hand of Fate") {
				gamblerSpell.innerCookie1 = check_cookies(spellsCast + 1, '', false, true);
				gamblerSpell.innerCookie2 = check_cookies(spellsCast + 1, '', true, true);

				gamblerSpell.hasBs = gamblerSpell.innerCookie1.type == 'Building Special' || gamblerSpell.innerCookie2.type == 'Building Special';
			}

			//TODO: Do something with edifice to make it clear if it will fail or not. like this:
			//if(gfdSpell.name == "Spontaneous Edifice") spellOutcome += ' (' + FortuneCookie.gamblerEdificeChecker(spellsCast + 1, true) + ')';
		} else {
			gamblerSpell.backfire = true;

			if (gfdSpell.name == "Force the Hand of Fate") {
				gamblerSpell.innerCookie1 = check_cookies(spellsCast + 1, '', false, false);
				gamblerSpell.innerCookie2 = check_cookies(spellsCast + 1, '', true, false);

				gamblerSpell.hasEf = gamblerSpell.innerCookie1.type == 'Elder Frenzy' || gamblerSpell.innerCookie2.type == 'Elder Frenzy';
			}

			//TODO: again, handle spontaneous edifice
			//if(gfdSpell.name == "Spontaneous Edifice") spellOutcome += ' (' + FortuneCookie.gamblerEdificeChecker(spellsCast + 1, false) + ')';
		}

		return gamblerSpell;
	}

	/**
	 * get cast result object of FtFoH
	 *
	 * @param {number} spells index of cast to see (with total cast)
	 * @param {string} season current season
	 * @param {boolean} chime true if one change
	 * @param {boolean} forcedGold whether golden cookie is forced
	 * @returns FtFoH cast result
	 */
	function check_cookies(spells, season, chime, forcedGold) {
		Math.seedrandom($scope.seed + '/' + spells);
		let roll = Math.random()
		if (forcedGold !== false && (forcedGold || roll < (1 - (0.15*$scope.on_screen_cookies + 0.15*(1 + 0.1*$scope.supremeintellect)*(1 - 0.9*$scope.diminishineptitude))))) {
			/* Random is called a few times in setting up the golden cookie */
			if (chime == 1 && $scope.ascensionMode != 1) Math.random();
			if (season == 'valentines' || season == 'easter') {
				Math.random();
			}
			Math.random();
			Math.random();
			/**/

			var choices = [];
			choices.push('Frenzy', 'Lucky');
			if (!$scope.dragonflight) choices.push('Click Frenzy');
			if (Math.random() < 0.1) choices.push('Cookie Storm', 'Cookie Storm', 'Blab');
			if (Math.random() < 0.25) choices.push('Building Special');
			if (Math.random() < 0.15) choices = ['Cookie Storm Drop'];
			if (Math.random() < 0.0001) choices.push('Free Sugar Lump');
			let cookie = {}
			cookie.wrath = false
			cookie.type = choose(choices);
			if (cookie.type == 'Frenzy') cookie.description = "Gives x7 cookie production for 77 seconds.";
			if (cookie.type == 'Lucky') cookie.description = "Gain 13 cookies plus the lesser of 15% of bank or 15 minutes of production.";
			if (cookie.type == 'Click Frenzy') cookie.description = "Gives x777 cookies per click for 13 seconds.";
			if (cookie.type == 'Blab') cookie.description = "Does nothing but has a funny message.";
			if (cookie.type == 'Cookie Storm') cookie.description = "A massive amount of Golden Cookies appears for 7 seconds, each granting you 1–7 minutes worth of cookies.";
			if (cookie.type == 'Cookie Storm Drop') cookie.description = "Gain cookies equal to 1-7 minutes production";
			if (cookie.type == 'Building Special') {
				cookie.description = "Get a variable bonus to cookie production for 30 seconds.";
				cookie.noteworthy = true;
			}
			if (cookie.type == 'Free Sugar Lump') cookie.description = "Add a free sugar lump to the pool";
			return cookie;
		} else {
			/* Random is called a few times in setting up the golden cookie */
			if (chime == 1 && $scope.ascensionMode != 1) Math.random();
			if (season == 'valentines' || season == 'easter') {
				Math.random();
			}
			Math.random();
			Math.random();
			/**/

			var choices = [];
			choices.push('Clot', 'Ruin');
			if (Math.random() < 0.1) choices.push('Cursed Finger', 'Elder Frenzy');
			if (Math.random() < 0.003) choices.push('Free Sugar Lump');
			if (Math.random() < 0.1) choices = ['Blab'];
			let cookie = {}
			cookie.wrath = true
			cookie.type = choose(choices);
			if (cookie.type == 'Clot') cookie.description = "Reduce production by 50% for 66 seconds.";
			if (cookie.type == 'Ruin') cookie.description = "Lose 13 cookies plus the lesser of 5% of bank or 15 minutes of production";
			if (cookie.type == 'Cursed Finger') cookie.description = "Cookie production halted for 10 seconds, but each click is worth 10 seconds of production.";
			if (cookie.type == 'Blab') cookie.description = "Does nothing but has a funny message.";
			if (cookie.type == 'Elder Frenzy') {
				cookie.description = "Gives x666 cookie production for 6 seconds";
				cookie.noteworthy = true;
			}
			if (cookie.type == 'Free Sugar Lump') cookie.description = "Add a free sugar lump to the pool";
			return cookie;
		}
	}

	/**
	 * M.spells from minigameGrimoire.js
	 */
	$scope.spells = {
		'conjure baked goods': {
			name: 'Conjure Baked Goods',
			desc: 'Summon half an hour worth of your CpS, capped at 15% of your cookies owned.',
			failDesc: 'Trigger a 15-minute clot and lose 15 minutes of CpS.',
			icon: [21, 11],
			costMin: 2,
			costPercent: 0.4,
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
		'hand of fate': {
			name: 'Force the Hand of Fate',
			desc: 'Summon a random golden cookie. Each existing golden cookie makes this spell +15% more likely to backfire.',
			failDesc: 'Summon an unlucky wrath cookie.',
			icon: [22, 11],
			costMin: 10,
			costPercent: 0.6,
			failFunc: function (fail) {
				// removed (not used in this file)
			},
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
		'stretch time': {
			name: 'Stretch Time',
			desc: 'All active buffs gain 10% more time (up to 5 more minutes).',
			failDesc: 'All active buffs are shortened by 20% (up to 10 minutes shorter).',
			icon: [23, 11],
			costMin: 8,
			costPercent: 0.2,
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
		'spontaneous edifice': {
			name: 'Spontaneous Edifice',
			desc: 'The spell picks a random building you could afford if you had twice your current cookies, and gives it to you for free. The building selected must be under 400, and cannot be your most-built one (unless it is your only one).',
			failDesc: 'Lose a random building.',
			icon: [24, 11],
			costMin: 20,
			costPercent: 0.75,
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
		'haggler\'s charm': {
			name: 'Haggler\'s Charm',
			desc: 'Upgrades are 2% cheaper for 1 minute.',
			failDesc: 'Upgrades are 2% more expensive for an hour.<q>What\'s that spell? Loadsamoney!</q>',
			icon: [25, 11],
			costMin: 10,
			costPercent: 0.1,
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
		'summon crafty pixies': {
			name: 'Summon Crafty Pixies',
			desc: 'Buildings are 2% cheaper for 1 minute.',
			failDesc: 'Buildings are 2% more expensive for an hour.',
			icon: [26, 11],
			costMin: 10,
			costPercent: 0.2,
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
		'gambler\'s fever dream': {
			name: 'Gambler\'s Fever Dream',
			desc: 'Cast a random spell at half the magic cost, with twice the chance of backfiring.',
			icon: [27, 11],
			costMin: 3,
			costPercent: 0.05,
			win: function () {
				// removed (not used in this file)
			},
		},
		'resurrect abomination': {
			name: 'Resurrect Abomination',
			desc: 'Instantly summon a wrinkler if conditions are fulfilled.',
			failDesc: 'Pop one of your wrinklers.',
			icon: [28, 11],
			costMin: 20,
			costPercent: 0.1,
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
		'diminish ineptitude': {
			name: 'Diminish Ineptitude',
			desc: 'Spells backfire 10 times less for the next 5 minutes.',
			failDesc: 'Spells backfire 5 times more for the next 10 minutes.',
			icon: [29, 11],
			costMin: 5,
			costPercent: 0.2,
			win: function () {
				// removed (not used in this file)
			},
			fail: function () {
				// removed (not used in this file)
			},
		},
	};
});
