from django import forms
from app1.models import Post,Help,Propuesta
class HomeForm(forms.ModelForm):
    name= forms.CharField(required=True, max_length=400, label='')
    email= forms.EmailField(required=True, label='')
    class Meta:
        model= Post
        fields= ('name','email')
class HelpForm(forms.ModelForm):
    comment= forms.CharField(required=True, max_length=400, widget=forms.Textarea, label='')
    class Meta:
        model= Help
        fields= ('comment',)
class PropuestaForm(forms.ModelForm):
    namePropuesta= forms.CharField(required=True, max_length=100, label='')
    emailPropuesta= forms.EmailField(required=True, max_length=100, label='')
    organizacion= forms.CharField(required=True, max_length=200, label='')
    propuesta= forms.CharField(required=True, max_length=400, widget=forms.Textarea, label='')
    class Meta:
        model= Propuesta
        fields= ('namePropuesta','emailPropuesta','organizacion','propuesta')

# class Propuesta(models.Model):
#     namePropuesta= models.CharField(max_length=100)
#     emailPropuesta= models.EmailField(max_length=100)
#     organizacion= models.CharField(max_length=200)
#     propuesta= models.CharField(max_length=700)

class DonationInformation(forms.Form):
    email=forms.EmailField(label='')
    cardNumber=forms.IntegerField(label='')
    month=(
            ('January','January'),
            ('February','February'),
            ('March','March'),
            ('April','April'),
            ('May','May'),
            ('June','June'),
            ('July','July'),
            ('August','August'),
            ('September','September'),
            ('October','October'),
            ('November','November'),
            ('Locales','Locales'),
            ('December','December'),
    )
    expirationDate=forms.ChoiceField(choices=month, label='')
    day=(
    ('1','1'),
    ('2','2'),
    ('3','3'),
    ('4','4'),
    ('5','5'),
    ('6','6'),
    ('7','7'),
    ('8','8'),
    ('9','9'),
    ('10','10'),
    ('11','11'),
    ('12','12'),
    ('13','13'),
    ('14','14'),
    ('15','15'),
    ('16','16'),
    ('17','17'),
    ('18','18'),
    ('19','19'),
    ('20','20'),
    ('21','21'),
    ('22','22'),
    ('23','23'),
    ('24','24'),
    ('25','25'),
    ('26','26'),
    ('27','27'),
    ('28','28'),
    ('29','29'),
    ('30','30'),
    ('31','31')
    )
    expirationDateEx=forms.ChoiceField(choices=day, label='')
    cvc=forms.IntegerField(label='')
    amount=forms.IntegerField()
