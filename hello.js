#!/usr/bin/env node
var D = [], primes = [];
var fs = require('fs');
var outfile = "primes.txt"
for(var q=2; q < 542; q++){
	if(D[q]){
		for(var i=0; i<D[q].length; i++){
			var p = D[q][i];
			if(D[p+q]) D[p+q].push(p);
			else D[p+q]=[p];
		}
		delete D[q];
	} else {
		primes.push(q);
		if(q*q < 542) D[q*q] = [q];
	}
}
fs.writeFileSync(outfile,primes)
console.log(primes);
