from django.http import JsonResponse
import requests,os
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.http import require_http_methods
from django.views.generic import TemplateView
from dotenv import load_dotenv

class web_apiView(TemplateView):
    template_name="index.html"

@method_decorator(require_http_methods(["GET"]), name='dispatch')
class HotPepperGourmetSearchView(View):
    def get(self, request):
        load_dotenv() # .envファイルから環境変数を読み込む
        template_name = "base.html"
        url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/'
        params = {
            'key': os.getenv("HotPepperAPI"),
            'keyword': 'ramen',
            'format': 'json'
        }
        response = requests.get(url, params=params)
        data = response.json()
        # 取得したデータを処理するコードを追加する
        return JsonResponse(data)