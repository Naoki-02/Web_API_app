from django.urls import path

from . import views

urlpatterns = [
    path('',views.list_View.as_view(),name='list'),
    path('hotpepper/search/',views.HotPepperGourmetSearchView.as_view(),name='search'),
    path('restaurant-detail/',views.RestaurantDetailView.as_view(),name='detail')
]
