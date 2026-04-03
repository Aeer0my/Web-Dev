from models import Animal, Dog, Cat

def main():
    animal = Animal("Generic", 5, "Unknown")
    dog = Dog("Buddy", 3, "Golden Retriever")
    cat = Cat("Whiskers", 2, "Black")

    animals = [animal, dog, cat]

    for a in animals:
        print(a)
        print(a.info())
        print("Sound:", a.speak())
        print()

    print("Extra behaviors:")
    print(dog.fetch())
    print(cat.scratch())


if __name__ == "__main__":
    main()