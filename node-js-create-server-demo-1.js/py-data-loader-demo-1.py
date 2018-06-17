# py-data-loader-demo-1.py

import urllib

for i in xrange(1000):
	data = urllib.urlopen('http://127.0.0.1:8888/').read()
	print i, data

print 'Done.'
