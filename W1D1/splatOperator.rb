def method(arg_1, arg_2, *other_args)
    p arg_1
    p arg_2
    p other_args
end

method("a", "b", "c", "d", "e")

def greet(first_name, last_name)
    p "Hey" + first_name + ", your last name is " + last_name
end

names = ["Grace", "Hopper"]
greet(*names)

arr_1 = ["a", "b"]
arr_2 = ["d", "e"]
arr_3 = [*arr_1, "c", *arr_2]

p arr_3

old_hash = { a: 1, b: 2 }
new_hash = { **old_hash, c:3 }

p new_hash