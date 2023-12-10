import os

import requests
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.http import require_http_methods
from django.views.generic import DetailView, FormView, TemplateView
from dotenv import load_dotenv


class web_apiView(TemplateView):
    template_name="index.html"

class list_View(TemplateView):
    template_name="search.html"

@method_decorator(require_http_methods(["GET"]), name='dispatch')
class HotPepperGourmetSearchView(TemplateView):
    def get(self, request):
        load_dotenv() # .envファイルから環境変数を読み込む
        url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/'
        
        keyword = request.GET.get('keyword')
        range_value = request.GET.get('range', '5')
        latitude = request.GET.get('latitude')
        longitude=request.GET.get('longitude')
        free_food=request.GET.get('free_food')
        private_room=request.GET.get('private_room')
        card=request.GET.get('card')
        english=request.GET.get('english')
        child=request.GET.get('child')
        parking=request.GET.get('parking')
        
        
        params = {
            'key': os.getenv("HotPepperAPI"),# APIKey、.envから取得
            'keyword': keyword,# キーワード
            'format': 'json', #レスポンス形式
            'range': range_value,
            'lat' : latitude,
            'lng' : longitude,
            'free_food' : free_food,
            'private_room' : private_room,
            'card' : card,
            'english' : english,
            'child' : child,
            'parking' : parking,
            'count' : "21",
        }
        response = requests.get(url, params=params)
        data = response.json()
        # 取得したデータを処理するコードを追加する
        return JsonResponse(data)
    
class RestaurantDetailView(TemplateView):
    template_name = 'detail.html'  # 使用するテンプレートの名前