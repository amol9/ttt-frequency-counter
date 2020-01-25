import requests
from sklearn.feature_extraction.text import CountVectorizer

def get_word_freq(n):
    url = "https://terriblytinytales.com/test.txt"
    res = requests.get(url)
    text = res.text

    corpus = [text]

    vectorizer = CountVectorizer(token_pattern=r"[a-z]+", analyzer='word')
    count = vectorizer.fit_transform(corpus)

    #print(vectorizer.get_feature_names())

    #print(count.toarray())

    word_freq_pairs = zip(vectorizer.get_feature_names(), count.toarray().flatten())

    sorted_wf_pairs = sorted(word_freq_pairs, key=lambda i: i[1], reverse=True)
    return sorted_wf_pairs[0 : n]
