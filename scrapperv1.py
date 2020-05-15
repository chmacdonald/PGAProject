import requests
import re
from urllib2 import urlopen
from bs4 import BeautifulSoup


url = 'https://www.pgatour.com/stats.html'
soup = BeautifulSoup(urlopen(url).read() , 'html5lib')

print soup
