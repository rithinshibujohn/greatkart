from django.shortcuts import HttpResponse,render
from store.models import Product,ReviewRating
from django.db.models import Prefetch


def home(request):
    # Fetch products with reviews in one query using prefetch_related
    products = Product.objects.filter(is_available=True).order_by('-created_date').prefetch_related(
        Prefetch('reviewrating_set', queryset=ReviewRating.objects.filter(status=True))
    )
    
    context = {
        'products': products,
    }
    return render(request, 'home.html', context)