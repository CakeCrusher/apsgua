from django.db import models

# Create your models here.
class Post(models.Model):
    name= models.CharField(max_length=400)
    email= models.EmailField()
class Help(models.Model):
    comment= models.CharField(max_length=700)
class Propuesta(models.Model):
    namePropuesta= models.CharField(max_length=100)
    emailPropuesta= models.EmailField(max_length=100)
    organizacion= models.CharField(max_length=200)
    propuesta= models.CharField(max_length=700)



class OpportunidadesModel(models.Model):
    title= models.CharField(max_length=100, unique=True)
    opciones=(
            ('Turistas','Turistas'),
            ('Estudiantes','Estudiantes'),
            ('Companias','Companias'),
            ('Locales','Locales'),
            ('Todos','Todos'),
    )
    category= models.CharField(max_length=100, choices=opciones)
    image= models.ImageField(upload_to='media')
    description= models.CharField(max_length=200, unique=True)
    link= models.URLField()
    def __str__(self):
        return self.title
