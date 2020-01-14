import requests
import re
import json

url = "https://terriblytinytales.com/test.txt"

def get_remote_file(url):
    res = requests.get(url)

    if res.status_code == 200:
        return res.text

def count(text, n):
    dict = {}
    words = re.findall("\w+", text)

    for word in words:
        if not re.match("\d+", word):
            lword = word.lower()
            if lword in dict.keys():
                dict[lword] += 1
            else:
                dict[lword] = 1

    arr = sort(dict)[0 : n]
    return arr

def sort(dict):
    arr = []
    for k, v in dict.items():
        arr.append((k, v))

    arr = sorted(arr, key=lambda a: a[1], reverse=True)

    return arr


def top_n(n):
    text = get_remote_file(url)
    return count(text, n)
    
