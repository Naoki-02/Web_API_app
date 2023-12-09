import os

import requests
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.http import require_http_methods
from django.views.generic import FormView, TemplateView
from dotenv import load_dotenv


class web_apiView(TemplateView):
    template_name="index.html"

class list_View(TemplateView):
    template_name="search.html"
    # success_url="index.html"
    
    # def form_valid(self, form):
    #     # フォームが有効な場合の処理
    #     input_text = form.cleaned_data['subject']
    #     input_number = form.cleaned_data['range']

    #     # HotPepperGourmetSearchViewに渡すためにセッションに保存
    #     self.request.session['hotpepper_keyword'] = input_text
    #     self.request.session['hotpepper_range'] = input_number

    #     return super().form_valid(form)

@method_decorator(require_http_methods(["GET"]), name='dispatch')
class HotPepperGourmetSearchView(TemplateView):
    def get(self, request):
        load_dotenv() # .envファイルから環境変数を読み込む
        url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/'
        
        keyword = request.GET.get('keyword', 'ラーメン')
        range_value = request.GET.get('range', '3')
        latitude = request.GET.get('latitude')
        longitude=request.GET.get('longitude')
        
        
        params = {
            'key': os.getenv("HotPepperAPI"),# APIKey、.envから取得
            'keyword': keyword,# キーワード
            'format': 'json', #レスポンス形式
            'range': range_value,
            'lat' : latitude,
            'lng' : longitude,
        }
        response = requests.get(url, params=params)
        data = response.json()
        # 取得したデータを処理するコードを追加する
        return JsonResponse(data)