from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.filter(is_active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'is_active']
    search_fields = ['name']
    ordering_fields = ['name', 'price']

    def get_queryset(self):
        queryset = Product.objects.all()

        category_id = self.request.query_params.get('category')
        if category_id:
            queryset = queryset.filter(category_id=category_id)

        active = self.request.query_params.get('active')
        if active == 'true':
            queryset = queryset.filter(is_active=True)
        elif active == 'false':
            queryset = queryset.filter(is_active=False)

        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(name__icontains=search)

        ordering = self.request.query_params.get('ordering')
        if ordering:
            if ordering.lstrip('-') in ['name', 'price']:
                queryset = queryset.order_by(ordering)

        return queryset

    @action(detail=False, methods=['get'])
    def active(self, request):
        queryset = Product.objects.filter(is_active=True)

        search_param = request.query_params.get('search')
        if search_param:
            queryset = queryset.filter(name__icontains=search_param)

        ordering_param = request.query_params.get('ordering')
        if ordering_param:
            if ordering_param.lstrip('-') in ['name', 'price']:
                queryset = queryset.order_by(ordering_param)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)