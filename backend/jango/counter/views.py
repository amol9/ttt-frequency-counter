# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from .count import top_n    

# Create your views here.

def topN(request):
    if request.method == 'POST':
        result = top_n(int(request.POST.get("n", 10)))
        response = JsonResponse({ "top": result})
        response['Access-Control-Allow-Origin'] = "*"
        return response
    else:
        return HttpResponse(status=405)
