if true
    drink = "cortado"
end

p drink

FOOD = "pizza" # Constant and global
$food = "hamburger" # global

def say_global
    p FOOD
    p $food
end

say_global