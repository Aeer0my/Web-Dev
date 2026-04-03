from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Category, Product

def products_list(request):
    products = Product.objects.filter(is_active=True)
    data = [{'id': p.id, 'name': p.name, 'price': p.price, 'description': p.description, 'count': p.count, 'is_active': p.is_active, 'category': p.category.name} for p in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description, 'count': product.count, 'is_active': product.is_active, 'category': product.category.name}
    return JsonResponse(data)

def categories_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data)

def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.filter(is_active=True)
    data = [{'id': p.id, 'name': p.name, 'price': p.price, 'description': p.description, 'count': p.count, 'is_active': p.is_active} for p in products]
    return JsonResponse(data, safe=False)