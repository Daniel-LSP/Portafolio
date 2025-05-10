from django.shortcuts import render

def home(request):
    return render(request, 'portfolio_app/index.html')

def about(request):
    return render(request, 'portfolio_app/about.html')

def projects(request):
    return render(request, 'portfolio_app/projects.html')

def contact(request):
    return render(request, 'portfolio_app/contact.html')