from django.shortcuts import render
from django.views.generic import TemplateView,ListView,FormView
from app1.models import OpportunidadesModel
from app1.forms import DonationInformation, HomeForm, HelpForm,PropuestaForm

# import bs4
# from bs4 import BeautifulSoup as bs
# import numpy as np
# import requests


# def getHTML(x):
#     r= requests.get(x)
#     return bs(r.content)
# def addToAll(x):
#     for i in x:
#         allNews.append(i)

# tWP= getHTML('https://www.washingtonpost.com/business/technology')
# GS= getHTML('https://news.google.com/topics/CAAqBwgKMKeh0wEw-sE1?hl=en-US&gl=US&ceid=US%3Aen')

# allNews= []

# # GS Climate Change News
# articles= GS.find_all('article', limit= 5)
# addToAll(articles)
# # tWP World News
# if len(tWP.find_all('div', {'class': 'top-table'}))> 0:
#     articles= tWP.find_all('div', {'class': 'top-table'})[0].find_all('div', {'data-feature-id': 'homepage/story-ans'})
#     addToAll(articles)
#     articles= tWP.find_all('div', {'class': 'chain-content'})[1].find_all('div', {'class': 'story-list-story'})
#     addToAll(articles)
#     # tWP Tech News
# elif len(tWP.find_all('section', {'id': 'main-content'}))> 0:
#     articles= tWP.find_all('section', {'id': 'main-content'})[0].find_all('div', {'class': 'story-list-story'})
#     addToAll(articles)

# apsDic= ['TROPICS','STORM','ENVIRONMENT', 'ELECTRIC', 'COAL', 'SMOG', ' ICE ', 'SOIL', 'CLIMATE CHANGE', ' BIO', 'CARBON', 'FOOTPRINT', 'CLEAN', 'CLIMATE', 'CONSERVATION', 'CONTAMINATE', 'CONSERVE', 'FOREST', 'JUNGLE', ' ECO', 'ENDANGERED', 'SPECIES', 'ANIMALS', 'AQUATIC', 'WARMING', 'GREENHOUSE', 'NATURE', 'WILD', 'NITROGEN', 'RESERVE', 'OZONE', 'PULLUT', 'PRESERV', 'RECYCLE', 'REUSE', 'REINTRODUCE', 'RENEWABLE', 'SUSTAIN', 'SANCUTUARY', 'TOXIC', 'ARTIC', 'ANTARTICA']

# tbl= np.array([{'Headline': 'NULL', 'Hook': 'NULL', 'Art': 'NULL', 'Link': 'NULL', 'Provider': 'NULL'}])
# # tWP scraper
# for i in allNews:
# # if tWP has special news box
#     if len(i.find_all('div', {'class': 'story-headline'}))> 0:
#         headline= i.find_all('a', {'data-pb-local-content-field': 'web_headline'})[0].text
#         for j in apsDic:
#             if j in headline.upper():
#                 hook= 'NULL'
#                 if len(i.find_all('p', {'data-pb-local-content-field': 'summary'}))> 0:
#                     hook= i.find_all('p', {'data-pb-local-content-field': 'summary'})[0].text
#                 art= 'NULL'
#                 if len(i.find_all('img'))> 0:
#                     art= i.find_all('img')[0]['data-hi-res-src']
#                 link= i.find_all('a', {'data-pb-local-content-field': 'web_headline'})[0]['href']
#                 provider= 'The Washington Post'
#                 tbl= np.concatenate((tbl, [{'Headline': headline, 'Hook': hook, 'Art': art, 'Link': link, 'Provider': provider}]))
# # for tWP normal news box
#     elif len(i.find_all('a', {'data-pb-field': 'headlines.basic'}))> 0:
#         headline= i.find_all('a', {'data-pb-field': 'headlines.basic'})[0].text
#         for j in apsDic:
#             if j in headline.upper():
#                 hook= 'NULL'
#                 if len(i.find_all('div', {'class': 'blurb'}))> 0:
#                     hook= i.find_all('div', {'class': 'blurb'})[0].text
#                 art= 'NULL'
#                 if len(i.find_all('img'))> 0:
#                     art= i.find_all('img')[0]['data-hi-res-src']
#                 link= i.find_all('a', {'data-pb-field': 'headlines.basic'})[0]['href']
#                 provider= 'The Washington Post'
#                 tbl= np.concatenate((tbl, [{'Headline': headline, 'Hook': hook, 'Art': art, 'Link': link, 'Provider': provider}]))
# # for GN
#     elif len(i.find_all('img',{'class': 'tvs3Id'}))> 0:
#         headline= i.find_all('a',{'class': 'ipQwMb'})[0].text
#         for j in apsDic:
#             if j in headline.upper():
#                 hook= ''
#                 art='NULL'
#                 if len(i.find_all('img', {'class': 'tvs3Id'}))> 0:
#                     art= i.find_all('img', {'class': 'tvs3Id'})[0]['src']
#                 link= 'https://news.google.com'+i.find_all('a', {'class': 'VDXfz'})[0]['href'][1:]
#                 provider= 'Google News'
#                 tbl= np.concatenate((tbl, [{'Headline': headline, 'Hook': hook, 'Art': art, 'Link': link, 'Provider': provider}]))

# Create your views here.
class Sebas(TemplateView):
    template_name='sebas.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
class Desigual(TemplateView):
    template_name='desigual.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)

class HomePage(ListView):
    template_name='homePage.html'
    model= OpportunidadesModel
    context_object_name = 'opportunidades_model'
    def get(self, request):
        propuestaForm=PropuestaForm()
        helpForm=HelpForm()
        form= HomeForm()
        args= {'propuestaForm':propuestaForm,'helpForm':helpForm, 'form':form, 'opportunidades_model':OpportunidadesModel.objects.all()}
        return render(request, self.template_name, args)
    def post(self, request):
        propuestaForm= PropuestaForm(request.POST)
        helpForm= HelpForm(request.POST)
        form= HomeForm(request.POST)
        if propuestaForm.is_valid():
            propuestaForm.save()
            namePropuesta= propuestaForm.cleaned_data['namePropuesta']
            emailPropuesta= propuestaForm.cleaned_data['emailPropuesta']
            organizacion= propuestaForm.cleaned_data['organizacion']
            propuesta= propuestaForm.cleaned_data['propuesta']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        args= {'propuestaForm':propuestaForm,'helpForm':helpForm, 'form':form,  'opportunidades_model':OpportunidadesModel.objects.all()}
        return render(request, self.template_name, args)
class Opportunidades(ListView):
    template_name='opportunidades.html'
    model= OpportunidadesModel
    context_object_name = 'opportunidades_model'
    def get(self, request):
        propuestaForm=PropuestaForm()
        helpForm=HelpForm()
        form= HomeForm()
        args= {'propuestaForm':propuestaForm,'helpForm':helpForm, 'form':form, 'opportunidades_model':OpportunidadesModel.objects.all()}
        return render(request, self.template_name, args)
    def post(self, request):
        propuestaForm= PropuestaForm(request.POST)
        helpForm= HelpForm(request.POST)
        form= HomeForm(request.POST)
        if propuestaForm.is_valid():
            propuestaForm.save()
            namePropuesta= propuestaForm.cleaned_data['namePropuesta']
            emailPropuesta= propuestaForm.cleaned_data['emailPropuesta']
            organizacion= propuestaForm.cleaned_data['organizacion']
            propuesta= propuestaForm.cleaned_data['propuesta']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        args= {'propuestaForm':propuestaForm,'helpForm':helpForm, 'form':form,  'opportunidades_model':OpportunidadesModel.objects.all()}
        return render(request, self.template_name, args)
class Contactar(TemplateView):
    template_name='contactar.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
class Donaciones(TemplateView):
    template_name='donaciones.html'
    def get(self, request):
        form= DonationInformation()
        homeForm= HomeForm()
        context={'donacionInformation':form, 'form':homeForm}
        return render(request, self.template_name, context)
    def post(self, request):
        form= DonationInformation(request.POST)
        if form.is_valid():
            emailEntered=form.cleaned_data['email']
            cardNumberEntered=form.cleaned_data['cardNumber']
            expirationDateEntered=form.cleaned_data['expirationDate']
            expirationDateEnteredEx=form.cleaned_data['expirationDateEx']
            cvcEntered=form.cleaned_data['cvc']
        if homeForm.is_valid():
            homeForm.save()
            name= homeForm.cleaned_data['name']
            email= homeForm.cleaned_data['email']
        context={'donacionInformation':form, 'form':homeForm}
        return render(request, self.template_name, context)
class LibroIntOne(TemplateView):
    template_name='libroInt.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
class LibroIntTwo(TemplateView):
    template_name='libroIntTwo.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
class LibroIntThree(TemplateView):
    template_name='libroIntThree.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
class LibroIntFour(TemplateView):
    template_name='libroIntFour.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
class LibroIntFive(TemplateView):
    template_name='libroIntFive.html'
    def get(self, request):
        form=HomeForm()
        helpForm=HelpForm()
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)
    def post(self, request):
        form= HomeForm(request.POST)
        helpForm= HelpForm(request.POST)
        if form.is_valid():
            form.save()
            name= form.cleaned_data['name']
            email= form.cleaned_data['email']
        if helpForm.is_valid():
            helpForm.save()
            comment= helpForm.cleaned_data['comment']
        args= {'helpForm':helpForm, 'form':form}
        return render(request, self.template_name, args)

