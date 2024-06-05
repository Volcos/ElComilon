from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    context = {
        'name': 'Riqueleme',
        'age': 23,
        'nacionality':'Peru'
    }
    return render(request, 'pages/index.html', context)