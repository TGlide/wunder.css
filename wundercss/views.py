from django.template.response import TemplateResponse
from .models import Project


def index(request):
    return TemplateResponse(request, 
    "index.html", 
    {"projects": Project.objects.all(), "active": "home"}).render()

def featured(request):
    return TemplateResponse(request, 
    "featured.html", 
    {"projects": Project.objects.all(), "active": "featured"}).render()

def submit(request):
    return TemplateResponse(request, 
    "submit.html", 
    {"active": "submit"}).render()

def about(request):
    return TemplateResponse(request, 
    "about.html", 
    {"active": "about"}).render()

def contact(request):
    return TemplateResponse(request, 
    "contact.html", 
    {"active": "contact"}).render()