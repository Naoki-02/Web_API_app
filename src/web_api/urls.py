from django.urls import path
from . import views

urlpatterns = [
    path('',views.web_apiView.as_view(),name='index'),
    path('ramen/',views.HotPepperGourmetSearchView.as_view(),name='home')
]
