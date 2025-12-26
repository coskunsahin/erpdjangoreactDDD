class Product:
    def __init__(self, name: str, stock: int = 0):
        self.name = name
        self.stock = stock

    def add_stock(self, qty: int):
        self.stock += qty
