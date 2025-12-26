from domain.inventory.entities import Product

def create_product(repo, name, stock):
    product = Product(name=name, stock=stock)
    repo.save(product)
    return product
