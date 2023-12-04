from django.urls import path
from . import views

urlpatterns = [
    path('',views.web_apiView.as_view(),name='index'),
    path('list/',views.list_View.as_view(),name='list'),
    path('hotpepper/search/',views.HotPepperGourmetSearchView.as_view(),name='search')
]
